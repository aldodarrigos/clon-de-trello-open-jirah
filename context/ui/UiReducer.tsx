import { UIState } from "./";

type UIActionType = 
    | { type: 'UI - Open Sidebar'}
    | { type: 'UI - Close Sidebar'}
    | { type: 'UI - Set is Adding' , payload:boolean}
    | { type: 'UI - Start Dragging' }
    | { type: 'UI - End Dragging' }

export const uiReducer = ( state:UIState, action: UIActionType): UIState => {
    switch (action.type ) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true
            }
        
        case 'UI - Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false
            }

        case 'UI - Set is Adding':
            return {
                ...state,
                isAdding: action.payload
            }
        case 'UI - Start Dragging':
            return {
                ...state,
                isDragging: true
            }
        case 'UI - End Dragging':
            return {
                ...state,
                isDragging: false

            }
    
        default:
            return state;
    }
}