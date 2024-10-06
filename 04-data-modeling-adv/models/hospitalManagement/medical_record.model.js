import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
    {}, { timestamps: true }
)

export const MadicalRecord = mongoose.model('MadicalRecord', medicalRecordSchema);