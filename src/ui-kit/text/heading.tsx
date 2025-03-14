import React, { PropsWithChildren } from "react";
import { IUiComponentBaseProps } from "..";


interface IHeadingProps extends PropsWithChildren, IUiComponentBaseProps {
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}


const Heading: React.FC<IHeadingProps> = ({
  tailwindClasses,
  customClasses,
  size,
  children
}) => {

  const sharedClasses: string = "font-bold text-gray-900 dark:text-white";

  switch (size) {

    case "h1":
      return (
        <h1 className={`${sharedClasses} mb-6 text-6xl ${tailwindClasses?.join(" ")} ${customClasses}`}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={`${sharedClasses} mb-6 text-5xl ${tailwindClasses?.join(" ")} ${customClasses}`}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={`${sharedClasses} mb-6 text-4xl ${tailwindClasses?.join(" ")} ${customClasses}`}>
          {children}
        </h3>
      );
  
    case "h4":
      return (
        <h4 className={`${sharedClasses} mb-6 text-3xl ${tailwindClasses?.join(" ")} ${customClasses}`}>
          {children}
        </h4>
      );

    case "h5":
      return (
        <h5 className={`${sharedClasses} mb-6 text-2xl ${tailwindClasses?.join(" ")} ${customClasses}`}>
          {children}
        </h5>
      );

    case "h6":
      return (
        <h6 className={`${sharedClasses} mb-6 ${tailwindClasses?.join(" ")} ${customClasses}`}>
          {children}
        </h6>
      );
  }
}


export default Heading;