import * as express from "express"
import { createOrganisation, getOrganisation } from '../controller/organisationController';
import { isAuth } from "../utils/generateToken";

const router = express.Router();


router.route("/create").post(isAuth, createOrganisation);
router.route("/fetch").get(getOrganisation);


export default router;