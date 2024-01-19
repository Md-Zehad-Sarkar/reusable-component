import { useContext } from "react";
import cn from "../../utilities/cn";
import Button from "../../components/ui/Button";
import { FormContext } from ".";



export const FormSubmit = ({double=false}) => {
  // const { double } = useContext<{}>(FormContext);
  return (
    <div
      className={cn(
        "grid grid-cols-1 w-full justify-items-center  md:grid-cols-2 py-4",
        {
          "md:grid-cols-2": double,
        }
      )}
    >
      <div className="flex justify-end w-full max-w-md col-start-1 md:col-start-2">
        <Button type="submit" className="w-full px-6 md:w-fit">
          Submit
        </Button>
      </div>
    </div>
  );
};
