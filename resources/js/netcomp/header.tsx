
import logonet from "@/ImgRes/logonet.svg"
import React from "react";

type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
} 

type divider = {
    divider?: boolean;
}

type HeaderProps = {
    children?: React.ReactNode;
    user?: User;
    divider?: boolean;
}
const Header = ({ children, user, divider }: HeaderProps) => {
  return (
    <div className="relative">
      {/* Navbar fixed */}
      {divider ? <div className="navbar bg-transparent py-5.25 px-8 flex justify-between items-center w-full top-0 left-0 right-0 z-50">
        <img src={logonet} alt="Logo" className="h-12" />
        <div>{children}</div>
      </div>
      :
      <div className="navbar bg-transparent px-6 py-4 flex justify-between items-center w-full top-0 left-0 right-0 z-50 fixed">
        <img src={logonet} alt="Logo" className="h-12" />
        <div>{children}</div>
      </div>}

      {/* <div className="h-20" /> */}

      {divider && <div className="border-t border-gray-200 w-full" />}
    </div>
  );
};



export default Header;