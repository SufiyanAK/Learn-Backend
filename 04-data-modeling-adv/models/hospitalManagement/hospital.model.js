import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
    {
        hospitalName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        pinCode: {
            type: String,
            required: true,
            trim: true
        },
        specializedIn: [
            {
                type: String,
            },
        ]
    },
    {
        timestamps: true
    }
)

export const Hospital = mongoose.model('HospitalSchema', hospitalSchema);