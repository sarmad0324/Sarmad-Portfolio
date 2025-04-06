"use client"
import { useTheme } from './theme-context';
import React from 'react';
import Switch from './switch'
import {Moon,Sun } from 'lucide-react'

export default function ThemeSwitch(){
    const {theme,toggleTheme} = useTheme();
    return(
        <div>
            <Switch
            activeButton={theme==="light"? <Sun/>:<Moon/>}
            hiddenButton={
                theme==="light" ? <Moon size={14}/>: <Sun size={14}  />
            }
            setActiveButton={toggleTheme}
            />
        </div>
    )
}