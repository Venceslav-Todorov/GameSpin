import { useState, useRef, useEffect } from "react";
import TheInput from "./components/TheInput";
import TheModal from "./components/TheModal";

export default function TheWheel() {
  let colors = ["#A5BE00", "#679436", "#2A2A72", "#427AA1", "#064789"];

  let [wheelOptions, setWheelOptions] = useState([
    { label: "1", color: colors[0] },
    { label: "2", color: colors[1] },
    { label: "3", color: colors[2] },
    { label: "4", color: colors[3] },
    { label: "5", color: colors[4] },
  ]);
  let isSpinning = useRef(false);
  let [inputValue, setInput] = useState("");
  let [theWinner, setWinner] = useState(undefined);

  function addOption(o) {
    if (!isSpinning.current) {
      setInput("");
      let optionColor = colors[0];

      if (wheelOptions.length) {
        let lastElemColor = wheelOptions[wheelOptions.length - 1].color;

        let filterMatchingColors = colors.filter((t) => t !== lastElemColor);
        let randomColor = Math.floor(
          Math.random() * (filterMatchingColors.length - 1)
        );
        optionColor = filterMatchingColors[randomColor];
      }

      setWheelOptions([...wheelOptions, { label: o, color: optionColor }]);
    }
  }

  function removeOption(i) {
    if (!isSpinning.current) {
      wheelOptions.splice(i, 1);
      setWheelOptions([...wheelOptions]);
    }
  }

  const wheel = useRef();
  const spin = useRef();
  const PI = Math.PI;
  const TAU = 2 * PI;
  const friction = 0.992; // 0.995=soft, 0.99=mid, 0.98=hard
  const totOpt = wheelOptions.length;
  let angVel = 0; // Angular velocity
  let ang = 0; // Angle in radians
  let ctx;

  const getIndex = () => Math.ceil(totOpt - (ang / TAU) * totOpt - 1) % totOpt;
  const rand = (m, M) => Math.random() * (M - m) + m;

  useEffect(() => {
    // setTimeout is for the Press_Start_2P font to load
    setTimeout(() => {
      initWheel();
    }, 50);
  }, [wheelOptions, theWinner]);

  function initWheel() {
    ctx = wheel.current.getContext(`2d`);

    const dia = ctx.canvas.width;
    const rad = dia / 2;
    const arc = TAU / (totOpt || 1);

    if (wheelOptions.length) {
      wheelOptions.forEach(drawSector);
    } else {
      drawSector({ label: "", color: "gray" }, 0);
    }

    function drawSector(sector, i) {
      const ang = arc * i;
      ctx.save();
      // COLOR
      ctx.beginPath();
      ctx.fillStyle = sector.color;
      ctx.moveTo(rad, rad);
      ctx.arc(rad, rad, rad, ang, ang + arc);
      ctx.lineTo(rad, rad);
      ctx.fill();
      // TEXT
      ctx.translate(rad, rad);
      ctx.rotate(ang + arc / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 25px Press_Start_2P";
      // acts like text-overflow elipsis
      if (sector.label.length > 20) {
        sector.label = `${sector.label.substring(1, 20)}...`;
      }
      ctx.fillText(sector.label, rad - 10, 10, 150);
      //
      ctx.restore();
    }
  }

  function spinWheel() {
    if (!isSpinning.current && wheelOptions.length) {
      isSpinning.current = true;
      if (!angVel) angVel = rand(0.25, 0.45);
      animate();
    }
  }

  function animate() {
    frame();
    requestAnimationFrame(animate);
  }

  function frame() {
    if (!angVel) return;
    angVel *= friction; // Decrement velocity by friction
    if (angVel < 0.002) (angVel = 0), (isSpinning.current = false); // Bring to stop
    ang += angVel; // Update angle
    ang %= TAU; // Normalize angle
    rotate();
  }

  function rotate() {
    const sector = wheelOptions[getIndex()];
    if (!isSpinning.current && sector) setWinner(sector.label);
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
    spin.current.style.background = sector.color;
  }

  return (
    <>
      <main className="the-wheel">
        <section className="wheel-section">
          <div className="wheel-wrapper">
            <canvas
              className="wheel"
              ref={wheel}
              width="400"
              height="400"
            ></canvas>
            <div onClick={() => spinWheel()} ref={spin} className="spin"></div>
          </div>
        </section>

        <section className="input-and-entries">
          <TheInput
            placeholder="Enter option"
            modelValue={inputValue}
            onInput={(e) => (!isSpinning.current ? setInput(e) : null)}
            onEnter={(e) => addOption(e)}
          />
          <div className="entries">
            {wheelOptions.map((o, i) => (
              <div className="entry" key={`${o}-${i}`}>
                <p>{o.label}</p>
                <img
                  onClick={() => removeOption(i)}
                  src="../../src/assets/img/close.svg"
                  alt="close"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <TheModal open={theWinner} onClose={() => setWinner(undefined)}>
        {theWinner}
      </TheModal>
    </>
  );
}
