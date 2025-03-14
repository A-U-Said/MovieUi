import React, { PropsWithChildren } from "react";
import { IUiComponentBaseProps } from "../types";


const Header: React.FC<PropsWithChildren & IUiComponentBaseProps> = ({
  tailwindClasses,
  customClasses,
  children
}) => {

  return (
    <header className={`flex flex-col flex-nowrap ${tailwindClasses?.join(" ")} ${customClasses}`}>
      {children}
    </header>
  );
}

export default Header;