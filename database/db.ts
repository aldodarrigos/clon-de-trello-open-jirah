import mongoose from "mongoose";


const mongooConection = {
    isConected:0
}


export const connect = async() => {
    if(mongooConection.isConected){
        console.log('Ya estamos conectados')
        return;
    }

    if(mongoose.connections.length > 0){
        mongooConection.isConected = mongoose.connections[0].readyState;

        if( mongooConection.isConected === 1 ){
            console.log('Usando conexión anterior');
            return;
        }

        await mongoose.disconnect();
    }

    // mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL || '');
    mongooConection.isConected = 1
    console.log('Conectando a mongo db')
}


export const disconnect = async() => {

    if( process.env.NODE_ENV === 'development' ) return;
    if( mongooConection.isConected === 0 ) return;

    await mongoose.disconnect();
    mongooConection.isConected = 0;
    console.log('Desconectandose de mongo db')
}