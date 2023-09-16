import ReactDOM from "react-dom";
import Button from "./Button";
function TheModal({ open, children, onClose }) {
  if (!open) return null;
  // function handleKeyDown(e) {
  //   if (e.key == "Escape") onClose();
  // }
  return ReactDOM.createPortal(
    <>
      <main className="the-modal">
        <section className="modal">
          <header></header>
          <main>{children}</main>
          <footer>
            <div>
              <Button onClick={() => onClose()}>Close</Button>
            </div>
            <Button test="red" onClick={() => null}>Remove</Button>
            {/* <Button>Close</Button> */}
          </footer>
        </section>
      </main>
    </>,
    document.getElementById("portal")
  );
}

export default TheModal;
