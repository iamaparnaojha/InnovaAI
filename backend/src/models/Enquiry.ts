import mongoose, { Document, Schema } from 'mongoose';

export interface IEnquiry extends Document {
  parentName: string;
  childName: string;
  childAge: number;
  email: string;
  phone: string;
  message?: string;
  createdAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    parentName: { type: String, required: true, trim: true },
    childName:  { type: String, required: true, trim: true },
    childAge:   { type: Number, required: true, min: 8, max: 14 },
    email:      { type: String, required: true, trim: true, lowercase: true },
    phone:      { type: String, required: true, trim: true },
    message:    { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
