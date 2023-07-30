import { ILead } from '@/interfaces';
import mongoose, { Model, Schema } from 'mongoose';


const leadSchema = new Schema({
    name: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true}
});

const LeadModel: Model<ILead> = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export default LeadModel;