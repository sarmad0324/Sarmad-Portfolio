"use client";
import React from "react";
import { MotionConfig } from "framer-motion";
import ActiveSectionContextProvider from "./active-section";

type ProvidersProps = {
children:React.ReactNode;
};
export default function Providers({children}:ProvidersProps){
    return(
        <MotionConfig reducedMotion="user">
            <ActiveSectionContextProvider>
                {children}
            </ActiveSectionContextProvider>
        </MotionConfig>
    )
}