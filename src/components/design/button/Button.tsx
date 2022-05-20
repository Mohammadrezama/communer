import { joinClasses } from "utils";
import { Loading } from "components";
import React, { ReactNode, FC } from "react";
interface IButton {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "button" | "reset";
  loading?: boolean;
}
export const Button: FC<IButton> = (props) => {
  const { children, onClick, className, type, loading } = props;
  return (
    <button
      onClick={onClick}
      className={joinClasses("   p-2 rounded-md flex items-center", className)}
      type={type ? type : "button"}
    >
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loading className={"text-[40px] text-white "} />{" "}
        </div>
      ) : (
        children
      )}
    </button>
  );
};
