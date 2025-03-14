import React, { PropsWithChildren } from "react";
import { IUiComponentBaseProps } from "../types";



const Navbar: React.FC<PropsWithChildren & IUiComponentBaseProps> = ({
  tailwindClasses,
  customClasses,
  children
}) => {

  return (
    <>
      <nav className={`h-13 bg-gray-950 z-50 flex flex-row flex-nowrap ${tailwindClasses?.join(" ")} ${customClasses}`}>
        {children}
      </nav>
    </>
  );
}


export default Navbar;