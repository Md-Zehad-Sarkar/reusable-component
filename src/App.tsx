// import MainLayout from "./components/Layouts/MainLayout";
import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <div className="flex items-center justify-center h-screen gap-4 ">
        <Button onClick={() => setModal((prev) => !prev)} variant="outline">
          open Modal
        </Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <p>This is a header</p>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is a modal</p>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
