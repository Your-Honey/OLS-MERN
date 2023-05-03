import * as express from "express"
import { registerUser, loginUser } from '../controller/userController';

const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export default router;
