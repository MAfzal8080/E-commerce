import React, { ReactElement } from "react";

import Footer from "./Footer";
import Header from "./header/Header";
import HeaderBottom from "./header/HeaderBottom";

interface Props{
    children:ReactElement
}

const RootLayout = ({children}: Props) =>{
    return(
        <>
        <Header/>
        <HeaderBottom/>
        {children}
        <Footer/>
        </>

    );
};

export default RootLayout;