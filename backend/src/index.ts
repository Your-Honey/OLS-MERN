import app from "./app";
import * as dotenv from "dotenv";
import { connectDatabase } from "./config/database";
import { Server } from "socket.io";

// Config
dotenv.config();

// Database connection
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: `http://localhost:3000`,
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket .io");

  socket.on("User Join", (activity) => {
    socket.join([activity.activityId, activity.organisation]);
  });

  socket.on("LogOut User", (activity) => {
    socket.to(activity).emit("Logout");
  });

  socket.on("Logout Organisation", (Organisation) => {
    socket.to(Organisation._id).emit("Logout");
  });
});
