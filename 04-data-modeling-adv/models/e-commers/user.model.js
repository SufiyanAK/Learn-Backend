import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'User name is required'],
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: [true, 'User email is required'],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'password is required'],
            minlength: 8,
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model('User', userSchema, 'user');