import { Entry } from "@/interfaces";
import { createContext } from "react";

interface ContextProps{
    entries: Entry[];
    
    addNewEntry: (description: string) => void;
    updateEntry: (entry: Entry, showSnackbar?:boolean) => void;
    getEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps)