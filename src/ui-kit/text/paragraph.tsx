import React, { PropsWithChildren } from "react";
import { IUiComponentBaseProps } from "../types";



const Paragraph: React.FC<PropsWithChildren & IUiComponentBaseProps> = ({
  tailwindClasses,
  customClasses,
  children
}) => {

  return (
    <>
      <p className={`block whitespace-pre mb-2 text-sm font-medium text-gray-900 dark:text-white ${tailwindClasses?.join(" ")} ${customClasses}`}>
        {children}
      </p>
    </>
  );
}


export default Paragraph;