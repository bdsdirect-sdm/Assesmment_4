import express from 'express';
import { upload } from '../middleware/upload';
import { addUser, getUser, updateUser } from '../controllers/userController';
import { addUserValidation } from '../validators/addUserValidation'

const router = express.Router();

// Route to create a new user
router.post('/', upload.fields([{ name: 'profile_photo' }, { name: 'appointment_letter' }]), addUserValidation, addUser);

// Route to get a user's details by ID
router.get('/:id', getUser);

// Route to update a user's details by ID
router.put('/:id', upload.fields([{ name: 'profile_photo' }, { name: 'appointment_letter' }]), updateUser);

export default router;