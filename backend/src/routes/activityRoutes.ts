import * as express from "express";
import {
  addActivity,
  updateActivity,
  fetchUersActivity,
  fetchActivity,
  logoutAllUsersfromOrganisation,
} from "../controller/userActivityController";
import { isAuth } from "../utils/generateToken";

const router = express.Router();

router.route("/create").post(isAuth, addActivity);
router.route("/update").put(isAuth, updateActivity);
router.route("/fetchall").get(isAuth, fetchUersActivity);
router.route("/fetch/:activityId").get(isAuth, fetchActivity);
router.route("/updateAll").put(isAuth, logoutAllUsersfromOrganisation);

export default router;
