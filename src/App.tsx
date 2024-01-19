// import MainLayout from "./components/Layouts/MainLayout";
import { createContext, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import NormalForm from "./components/ReactHookForm/NormalForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit } from "./ReusableForm/Form";
import InputElement from "./ReusableForm/Form/InputElement";
import { TSignUp } from "./types";

function App() {
  const [modal, setModal] = useState(false);
  const handleModalClose = () => {
    setModal((prev) => !prev);
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TSignUp>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      {/* <div className="flex items-center justify-center h-screen gap-4 ">
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
      </div> */}

      <div>
        {/* <NormalForm /> */}
        <Form
          double={true}
          onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
        >
          <FormSection double={true}>
            <InputElement
              type="text"
              label="name"
              register={register("name")}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </FormSection>
          <FormSubmit />
        </Form>
      </div>
    </Container>
  );
}

export default App;
