import mongoose from "mongoose"; 

const DBconnection = async() =>{
    try {
        const connection = await mongoose.connect(process.env.DB_URI)

        console.log(`connected to database ${connection.connections[0].name} on host ${connection.connection.host}`);

    } catch (error) {
        console.log(error);
    }
}

export {DBconnection}