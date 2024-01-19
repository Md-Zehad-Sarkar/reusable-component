import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TSchema } from "../components/ReactHookForm/validation";

export type TForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double: boolean;
};

export type TSignUp =TSchema