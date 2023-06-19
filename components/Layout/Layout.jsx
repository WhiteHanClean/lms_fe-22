import React from "react";
import s from "./Layout.module.scss";
import Header from "../organizms/Header/Header";

const Layout = ({ children }) => {
  return <div className={s.layout}>
    <Header/>
    {children}</div>;
};

export default Layout;
