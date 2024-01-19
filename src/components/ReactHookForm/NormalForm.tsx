import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utilities/cn";
import Button from "../ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TSchema } from "./validation";

const NormalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSchema>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const double = true;
  // const double = false;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("max-w-5xl mx-auto border border-red-500", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn("grid gap-4 px-3 py-2 grid-cols-1 justify-items-center", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            name="name"
            className="w-full"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="text"
            {...register("email")}
            id="email"
            name="email"
            className="w-full "
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            name="password"
            className="w-full"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
      </div>
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
    </form>
  );
};

export default NormalForm;
