import * as asyncHandler from "express-async-handler";
import Organisation from '../models/organisationModel';
import { IGetUserAuthInfoRequest } from "../utils/generateToken"


// Create Organisation
const createOrganisation = asyncHandler(async (req: IGetUserAuthInfoRequest, res) => {
    const { name } = req.body;
    const { isAdmin } = req.user;
    if (!isAdmin) {
        res.status(400);
        throw new Error("Only Admin can create Organisation");

    }
    if (!name) {
        res.status(400);
        throw new Error("Please enter organisation name");
    }
    const isExists = await Organisation.findOne({ name });
    if (isExists) {
        res.status(400);
        throw new Error("Organisation name already exists");
    }

    const organisation = await Organisation.create({
        name,
    });
    if (organisation) {
        res.status(201).send({
            _id: organisation._id,
            name: organisation.name,
        });
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});

const getOrganisation = asyncHandler(async (req, res) => {

    const organisation = await Organisation.find();
    if (organisation.length > 0) {
        res.status(200).send(organisation)
    }
    else {
        res.status(400);
        throw new Error("Organisation not found");
    }
})

export {
    createOrganisation,
    getOrganisation
}