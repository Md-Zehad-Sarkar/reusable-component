import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
  return <div className="w-full h-full mx-auto max-w-7xl">{children}</div>;
};

export default Container;
