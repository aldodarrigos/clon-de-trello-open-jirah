import { createContext } from "react";

interface ContextProps{
    sideMenuOpen: boolean;
    isAdding:boolean;
    isDragging:boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;

    setIsAdding: ( isAdding:boolean ) => void;

    startDragging: () => void;
    endDragging: () => void;

}

export const UIContext = createContext({} as ContextProps)

