import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    nombre: {
        String, 
        required: true,
    },
    email: {
        String,
        required: true,
    },
    password: {
        String,
        required: true,
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

export default mongoose.model('User', userSchema);