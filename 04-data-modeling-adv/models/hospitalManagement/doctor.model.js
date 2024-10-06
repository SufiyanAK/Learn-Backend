import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
    {
        doctorName: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        experienceInYears: {
            type: Number,
            required: true,
            default: 0,
        },
        specialization: {
            type: String,
            required: true,
        },
        worksInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital',
                required: true,
            }
        ]
    },
    {
        timestamps: true
    }
)

export const Doctor = mongoose.model('Doctor', doctorSchema);