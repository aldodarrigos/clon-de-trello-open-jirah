import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry, IEntry } from '@/models';

type Data =  
    | { message: string }
    | IEntry

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    console.log(id)
    // if( mongoose.isValidObjectId(`${id}`) ) return res.status(400).json({ message: 'El id no es válido'})

    switch (req.method) {
        case 'GET':
            return getEntry(req,res);
            break;
    
        case 'PUT':
            return updateEntry(req,res);
            break;
    
        default:
            return res.status(400).json({ message: 'Método no existe'})
            break;
    }
}


const getEntry = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const {id} = req.query;
    await db.connect();
    try {
        const entry = await Entry.findById( id );
        if( !entry){
            await db.disconnect();
            return res.status(400).json({ message: 'No hay entrada con ese ID:' + id})
        }
        await db.disconnect();
        return res.status(200).json( entry! );
        
    } catch (error) {
        console.log(error)
        await db.disconnect();
        return res.status(400).json( {message: JSON.stringify(error) } );
    }
    
}

const updateEntry = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const {id} = req.query;
    await db.connect();
    const entryToUpdate = await Entry.findById( id );
    

    if( !entryToUpdate){
        await db.disconnect();
        return res.status(400).json({ message: 'No hay entrada con ese ID:' + id})
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    
    try {
        const updatedEntry = await Entry.findByIdAndUpdate( id, { description, status}, { runValidators: true, new: true})
        await db.disconnect();
        return res.status(200).json( updatedEntry!)
        
    } catch (error) {
        console.log(error)
        await db.disconnect();
        return res.status(400).json( {message: JSON.stringify(error) } );
    }
    
}