import { IActivity } from "@/types/activityInterface";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8080";
var socket: any;

function DashBoard() {
  const [usersActivity, setUsersActivity] = useState<IActivity[]>([]);
  if (typeof window !== "undefined") {
    var user = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo") as string)
      : null;
  }

  const router = useRouter();

  useEffect(() => {
    socket = io(ENDPOINT);
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/home");
      return;
    }
    if (!user.isAdmin) {
      router.push("/home");
      return;
    }
    if (user.isAdmin) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get("/apii/activity/fetchall", {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          });
          setUsersActivity(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, []);

  const userLogoutHandler = async (activity: IActivity) => {
    try {
      const { data } = await axios.put(
        "/apii/activity/update",
        {
          id: activity._id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const newActivity: IActivity[] = usersActivity.map((act: IActivity) => {
        if (act._id === activity._id) {
          act.logouttime = data;
          return act;
        }
        return act;
      });

      socket.emit("LogOut User", activity._id);
      setUsersActivity(newActivity);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box w="100%" p={4}>
        <Flex>
          <Box p="4">
            <Button onClick={() => router.push("/organization")}>
              Organistions
            </Button>
          </Box>
          <Spacer />
          <Box p="4">
            <Button
              onClick={() => {
                localStorage.removeItem("userInfo");
                router.push("/home");
              }}
            >
              Logout
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box p={16}>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>email</Th>
                <Th>Device</Th>
                <Th>Organization</Th>
                <Th>Login Time</Th>
                <Th>Logout Time</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {usersActivity.map((activity: IActivity) => {
                return (
                  <Tr key={parseInt(activity._id as string)}>
                    <Td>{activity.user.name}</Td>
                    <Td>{activity.user.email}</Td>
                    <Td>{activity.device}</Td>
                    <Td>{activity.user.organisation.name}</Td>
                    <Td>{activity.logintime}</Td>
                    <Td>{activity.logouttime ? activity.logouttime : "-"}</Td>
                    <Td>
                      {activity.logouttime ? (
                        "-"
                      ) : (
                        <Button onClick={() => userLogoutHandler(activity)}>
                          Logout
                        </Button>
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default DashBoard;
