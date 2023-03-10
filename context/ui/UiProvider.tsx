import React, { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './';

export interface UIState{
    sideMenuOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;

}


const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAdding: false,
    isDragging: false
}

interface Props {
    children: React.ReactNode;
}

export const UiProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE )

    const openSideMenu = () => {
        dispatch({ type:'UI - Open Sidebar'});
    }

    const closeSideMenu = () => {
        dispatch({ type:'UI - Close Sidebar'});
    }

    const setIsAdding = ( isAdding: boolean) => {
        dispatch({ type:'UI - Set is Adding', payload: isAdding});
    }

    const startDragging = () => {
        dispatch({ type:'UI - Start Dragging'});
    }

    const endDragging = () => {
        dispatch({ type:'UI - End Dragging'});
    }


  return (

    <UIContext.Provider value={{
        ...state,
        openSideMenu,
        closeSideMenu,

        setIsAdding,

        startDragging,
        endDragging
    }}>
        { children }
    </UIContext.Provider>
  )
}
