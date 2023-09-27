import ReactDOM from "react-dom";
import Button from "./Button";
function Modal({ isOpen, children, canRemove, onClose, onRemove }) {
  if (!isOpen) return null;
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
            {canRemove && (
              <Button color="red" onClick={() => onRemove()}>
                Remove
              </Button>
            )}
            <Button onClick={() => onClose()}>Close</Button>
          </footer>
        </section>
      </main>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
