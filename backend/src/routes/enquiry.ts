import { Router, Request, Response } from 'express';
import Enquiry from '../models/Enquiry';

const router = Router();

// POST /api/enquiry  – save a new enquiry
router.post('/', async (req: Request, res: Response) => {
  try {
    const { parentName, childName, childAge, email, phone, message } = req.body;

    // Basic server-side validation
    if (!parentName || !childName || !childAge || !email || !phone) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }
    if (childAge < 8 || childAge > 14) {
      return res.status(400).json({ message: "Child's age must be between 8 and 14." });
    }

    const enquiry = await Enquiry.create({ parentName, childName, childAge, email, phone, message });
    return res.status(201).json({ message: 'Enquiry submitted successfully!', id: enquiry._id });
  } catch (err) {
    console.error('Enquiry POST error:', err);
    return res.status(500).json({ message: 'Internal server error. Please try again later.' });
  }
});

// GET /api/enquiry  – list all enquiries (admin use)
router.get('/', async (_req: Request, res: Response) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return res.json(enquiries);
  } catch (err) {
    console.error('Enquiry GET error:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

export default router;
