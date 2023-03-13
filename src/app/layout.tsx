import { type PropsWithChildren } from "react";
import "~/styles/globals.css";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <title>Edgarssilva Blog</title>
      <meta name="description" content="Edgarssilva Blog" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {children}
    </>
  );
};

export default RootLayout;
