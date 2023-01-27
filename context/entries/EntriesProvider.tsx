import { Entry } from '@/interfaces';
import React, { FC, useEffect, useReducer } from 'react'
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';
import { entriesApi } from '@/apis';
import { useSnackbar } from 'notistack';

export interface EntriesState{
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [ ],
}

interface Props {
    children: React.ReactNode;
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE );
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const addNewEntry = async ( description: string ) => {

        const { data } = await entriesApi.post<Entry>('/entries/', {description});
        dispatch({ type: '[Entry] - Add Entry', payload: data})
    }

    const getEntry = async ( { _id } : Entry ) => {
        try {
            const { data } = await entriesApi.get<Entry>(`/entries/${ _id }`);
            dispatch({ type: '[Entry] - Get Entry', payload: data });
            
        } catch (error) {
            console.log({error});
        }
    }

    const updateEntry = async ( { _id , description, status } : Entry, showSnackbar = false ) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`,{ description, status });
            dispatch({ type: '[Entry] - Update Entry', payload: data });
            if(showSnackbar){
                enqueueSnackbar('Entrada actualizada',{
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin:{
                        vertical: 'top',
                        horizontal:'right'
                    }
                })
            }
            
        } catch (error) {
            console.log({error});
        }
    }

    const refreshEntries = async() => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entry] - Refresh Entries', payload: data})
    }

    useEffect(() => {
        refreshEntries()
    }, [])
    

  return (
    <EntriesContext.Provider value={{
        ...state,
        addNewEntry,
        updateEntry,
        getEntry,
    }}>
        { children }
    </EntriesContext.Provider>
  )
}
