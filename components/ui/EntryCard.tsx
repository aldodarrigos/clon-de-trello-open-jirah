import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import React, { DragEvent, FC, useContext } from 'react'
import { Entry } from '../../interfaces/entry';
import { UIContext } from '../../context/ui/';
import { useRouter } from 'next/router';
import { dateFunctions } from '@/utils';

interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props> = ( { entry}) => {

    const {startDragging, endDragging} = useContext(UIContext);
    const router = useRouter();

    const onDragStart = (event: DragEvent) => {
        console.log(event);
        event.dataTransfer.setData('id', entry._id);
        startDragging()
    }

    const onDragEnd = () => {
        endDragging()
    }

    const onClick = () => {
        router.push(`/entries/${ entry._id }`);
    }

  return (
        <Card sx={{  marginBottom: 1}} onClick={ onClick } draggable={true} onDragStart={ onDragStart } onDragEnd={ onDragEnd }>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line'}}>
                        { entry.description }
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'end'}}>
                    <Typography variant='body2'>
                        { dateFunctions.getFormatDistanceToNow(entry.createdAt)}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
  )
}
