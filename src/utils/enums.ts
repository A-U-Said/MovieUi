
const enumToObjectArray = <TEnum extends string, TEnumValue extends number>(myEnum: {[key in TEnum]: TEnumValue}) => {
  return (Object.keys(myEnum) as Array<keyof typeof myEnum>)
    .filter(groupKey => Number.isNaN(Number(groupKey)))
    .map(key => ({
      name: key,
      value: myEnum[key]
    }));
}

const enums = {
  enumToObjectArray
}
    
export default enums;
      