import classNames from "classnames";

export const joinClasses = (
  class1: string | undefined,
  class2: string | undefined
) => {
  return classNames(class1, class2);
};
export const toggleClasses = (
  first: string,
  iftrue: string,
  condition: boolean,
  ifFalse: string
) => {
  return classNames(first, { [iftrue]: condition }, { [ifFalse]: !condition });
};
