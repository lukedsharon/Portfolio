import { ReactElement, ReactNode } from "react";
import NavHeader from "../base/NavHeader";

function MainLayout({ children }: any) {
  return (
    <div className="mt-20">
      <NavHeader />
      <div className="">{children}</div>
    </div>
  );
}

export default MainLayout;
