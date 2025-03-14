import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IUiComponentBaseProps } from "../types";


const Icon: React.FC<Omit<FontAwesomeIconProps, "className"> & IUiComponentBaseProps> = ({
  tailwindClasses,
  customClasses,
  ...props
}) => {

  return (
    <i className={`inline-block not-italic relative text-white [&_svg]:m-0 [&_svg]:p-0 [&_svg]:block ${tailwindClasses?.join(" ")} ${customClasses}`}>
      <FontAwesomeIcon {...props} />
    </i>
  );
}


export default Icon;