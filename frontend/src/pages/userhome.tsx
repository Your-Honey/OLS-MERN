import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8080";
var socket: any;

function UserHome() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    var user = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo") as string)
      : null;
  }

  const logoutHandler = async () => {
    try {
      await axios.put(
        "/apii/activity/update",
        {
          id: user.activityId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      localStorage.removeItem("userInfo");
      router.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/home");
    } else {
      const logoutStatus = async () => {
        try {
          const { activityId } = user;
          const { data } = await axios.get(
            `/apii/activity/fetch/${activityId}`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          if (data.logouttime) {
            localStorage.removeItem("userInfo");
            router.push("/home");
          }
        } catch (err) {
          console.log(err);
        }
      };
      logoutStatus();
    }
  }, []);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("User Join", user);
    return () => {
      socket.disconnect();
    };
  });
  useEffect(() => {
    socket.on("Logout", () => {
      logoutHandler();
    });
  });
  return (
    <>
      Welcome<Button onClick={logoutHandler}>Log out</Button>
    </>
  );
}

export default UserHome;
