import { Router } from 'express';
import { addUser, contacts, deleteUser, updateUser } from '../../controller/userController.js';
import { upload } from '../../Upload/upload.js';




const router = Router();

router.get('/', contacts);
router.post('/add-user',upload.array("profile_img"), addUser);
router.delete('/delete-user/:id', deleteUser);
router.put('/update-user/:id',updateUser)

export default router;