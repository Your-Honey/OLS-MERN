import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

import user from "./routes/userRoute";
import organisation from "./routes/organisationRoute";
import activity from "./routes/activityRoutes";

app.use("/api/user", user);
app.use("/api/organisation", organisation);
app.use("/api/activity", activity);

export default app;
