import React, { ReactNode, FC } from "react";
import { Navbar } from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <div className="text-[14px] container mx-auto p-4 font-roboto">
        {children}
      </div>
    </div>
  );
};
