import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";
import cn from "../../utilities/cn";

type TVariant = "solid" | "outline" | "slate";
type TButtonOptions = {
  variant: TVariant;
};
type TButton = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;
type TRef = HTMLButtonElement;
const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid",children, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "slate":
          return "btn-slate";

        default:
          return "btn";
      }
    };
    return (
      <button
        ref={ref}
        {...rest}
        className={cn("btn", getVariant(variant), className)}
      >
       {children}
      </button>
    );
  }
);

export default Button;
