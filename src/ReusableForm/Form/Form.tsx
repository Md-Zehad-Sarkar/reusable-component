import { createContext } from "react";
import cn from "../../utilities/cn";
import { TForm } from "../../types";

export const FormContext = createContext<{ double?: boolean } | null>(null);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn("max-w-5xl mx-auto border border-red-500", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};
