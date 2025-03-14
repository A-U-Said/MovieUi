import React, { PropsWithChildren } from "react";
import { IUiComponentBaseProps } from "..";


const Main: React.FC<PropsWithChildren & IUiComponentBaseProps> = ({ 
  tailwindClasses,
  customClasses,
  children 
}) => {

  return (
    <main className={`flex flex-col flex-nowrap p-4 ${tailwindClasses?.join(" ")} ${customClasses}`}>
      {children}
    </main>
  );
}


export default Main;