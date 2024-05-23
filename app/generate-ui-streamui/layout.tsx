import { ReactNode } from "react";
import { AI } from "./action";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <AI>{children}</AI>;
}
