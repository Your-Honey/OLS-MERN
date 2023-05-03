import * as asyncHandler from "express-async-handler";
import { Types } from "mongoose";
import UserActivity from "../models/userActivityModel";
import { IGetUserAuthInfoRequest } from "../utils/generateToken";

const addActivity = asyncHandler(async (req, res) => {
  const { userId: user } = req.body;
  const device = req.headers["user-agent"];

  const logintime = new Date().toLocaleString();

  if (user) {
    const newUserActivity = await UserActivity.create({
      user,
      device,
      logintime,
    });

    res.status(200).send({
      id: newUserActivity._id,
    });
  } else {
    res.status(400);
    throw new Error("UserId not found");
  }
});

const updateActivity = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const logouttime = new Date().toLocaleString();

  if (id) {
    const activity = await UserActivity.findById(id);
    if (activity.logouttime) {
      res.status(200).send(activity.logintime);
    } else {
      const updatedActivity = await UserActivity.findByIdAndUpdate(id, {
        logouttime,
      });
      res.status(200).send(logouttime);
    }
  } else {
    res.status(400);
    throw new Error("UserId not found");
  }
});

const fetchUersActivity = asyncHandler(
  async (req: IGetUserAuthInfoRequest, res) => {
    const { isAdmin } = req.user;
    if (isAdmin) {
      const activitys = await UserActivity.find().populate({
        path: "user",
        populate: {
          path: "organisation",
          model: "Organisation",
        },
      });
      res.status(200).send(activitys);
    } else {
      res.status(400);
      throw new Error("Only Admin can see activitys");
    }
  }
);

const fetchActivity = asyncHandler(
  async (req: IGetUserAuthInfoRequest, res) => {
    const { activityId } = req.params;

    if (!activityId) {
      res.status(400);
      throw new Error("No device id found");
    } else {
      const activity = await UserActivity.findById(activityId);

      if (activity.user === req.user._id.toString()) {
        res.status(200).send(activity);
      } else {
        res.status(400);
        throw new Error("Cant check else details");
      }
    }
  }
);

const logoutAllUsersfromOrganisation = asyncHandler(
  async (req: IGetUserAuthInfoRequest, res) => {
    const logouttime = new Date().toLocaleString();
    const { organisationId } = req.body;
    if (organisationId && req.user.isAdmin) {
      const activitys = await UserActivity.find({ logouttime: null }).populate({
        path: "user",
        populate: {
          path: "organisation",
          model: "Organisation",
        },
      });
      for (let element of activitys) {
        if (element.user.organisation.id === organisationId) {
          await UserActivity.findByIdAndUpdate(
            element.id,
            { logouttime: logouttime },
            { new: true }
          );
        }
      }
      res.send({ message: "Success" });
    } else {
      res.status(400);
      throw new Error("Organisation not found or You are not admin");
    }
  }
);

export {
  addActivity,
  updateActivity,
  fetchUersActivity,
  fetchActivity,
  logoutAllUsersfromOrganisation,
};
