import TailwindAnimationClasses from "./animation.types";
import TailwindAnimationsClasses from "./animations.types";
import TailwindBackgroundClasses from "./background.types";
import TailwindBackgroundClipClasses from "./backgroundClip.types";
import TailwindBackgroundColorClasses from "./backgroundColor.types";
import TailwindBackgroundGradientClasses from "./backgroundGradient.types";
import TailwindBorderClasses from "./border.types";
import TailwindBorderColorClasses from "./borderColor.types";
import TailwindBoxClasses from "./box.types";
import TailwindColorClasses from "./color.types";
import TailwindDisplayClasses from "./display.types";
import TailwindDivideClasses from "./divide.types";
import TailwindFlexClasses from "./flex.types";
import TailwindFlexboxClasses from "./flexbox.types";
import TailwindFormsClasses from "./forms.types";


// https://tailwind.build/classes

type TailwindClasses = 
  TailwindAnimationClasses |
  TailwindAnimationsClasses |
  TailwindBackgroundClasses |
  TailwindBackgroundClipClasses |
  TailwindBackgroundColorClasses |
  TailwindBackgroundGradientClasses |
  TailwindBorderColorClasses |
  TailwindBorderClasses |
  TailwindBoxClasses |
  TailwindColorClasses | 
  TailwindDisplayClasses |
  TailwindDivideClasses |
  TailwindFlexClasses |
  TailwindFlexboxClasses |
  TailwindFormsClasses;


export default TailwindClasses;