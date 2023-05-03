import * as jwt from "jsonwebtoken";
import * as asyncHandler from "express-async-handler";
import User from '../models/userModel';
import { Request } from "express"
import { Types } from "mongoose";
export interface IGetUserAuthInfoRequest extends Request {
    user: {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isAdmin: boolean;
        name?: string;
        email?: string;
        password?: string;
        organisation?: Types.ObjectId;
        _id: Types.ObjectId
    } // or any other type
}

interface JwtPayload {
    id: string
}

const generateToken = (id: any) => {
    return jwt.sign({ id }, "this secret should be in env file", {
        expiresIn: "30d",
    });
};

const isAuth = asyncHandler(async (req: IGetUserAuthInfoRequest, res, next) => {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
        try {
            token = token.split(" ")[1];
            const decode = jwt.verify(token, "this secret should be in env file") as JwtPayload;
            // console.log(decode)
            req.user = await User.findById(decode.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

export default generateToken;
export { isAuth }