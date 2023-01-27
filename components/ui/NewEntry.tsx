import React, { ChangeEvent, useContext, useState } from 'react'
import { AddCircleOutline, SaveOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material'
import { EntriesContext} from '@/context/entries';
import { UIContext  } from '@/context/ui';

export const NewEntry = () => {

    // const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const { addNewEntry } = useContext(EntriesContext);
    const {isAdding, setIsAdding} = useContext(UIContext);

    const onTextFieldChanges = ( event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value)
    }
     
    const onSave = () => {
        if(inputValue.length <= 0 ) return;
        addNewEntry(inputValue);
        setInputValue('');
        setTouched(false);
        setIsAdding(false);
    }
    return (

    <Box sx={{ marginBottom: 2, paddingX:1 }}>
        
        {
            isAdding ? (
                <>
                    <TextField 
                    fullWidth
                    sx={{ marginTop: 2, marginBottom: 1}}
                    placeholder='Nueva tarea'
                    autoFocus
                    multiline
                    label='Nueva tarea'
                    helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                    error={inputValue.length <= 0 && touched}
                    value={ inputValue }
                    onChange={ onTextFieldChanges }
                    onBlur={ () => setTouched(true)}
                    >

                    </TextField>
                    
                    <Box display='flex' justifyContent='space-between'>
                        <Button 
                            variant='text' 
                            color='secondary'
                            onClick={ () => setIsAdding( false )}
                        >
                            Cancelar
                        </Button>

                        <Button onClick={onSave} variant='outlined' size={'large'} endIcon={ <SaveOutlined /> } color='secondary'>
                            Guardar
                        </Button>
                    </Box>
                
                </>
            )
            :(
                <Button 
                    startIcon={<AddCircleOutline />}
                    fullWidth 
                    variant='outlined'
                    onClick={ () => setIsAdding( true)}
                >
                    Agregar Tarea
                </Button>

            ) 
        }

    </Box>
  )
}
