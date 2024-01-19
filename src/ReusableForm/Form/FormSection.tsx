import cn from "../../utilities/cn";

export const FormSection = ({ children, double }) => {
  return (
    <div
      className={cn("grid gap-4 px-3 py-2 grid-cols-1 justify-items-center", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};
