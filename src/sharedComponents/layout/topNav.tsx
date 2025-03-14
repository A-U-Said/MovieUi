import { Icon, Navbar } from "@/ui-kit";
import { faVideo } from "@fortawesome/free-solid-svg-icons"
import React from "react";


const TopNav: React.FC = () => {

  return (
    <Navbar>

      <div className={"p-2 flex justify-center items-center cursor-pointer"}>
        <Icon 
          tailwindClasses={["scale-110", "transition", "duration-300", "hover:text-purple-400", "ml-2"]}
          icon={faVideo} 
          size={"2x"} 
        />
      </div>

    </Navbar>
  );
}


export default TopNav;