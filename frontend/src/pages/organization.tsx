import { IOrganisation } from "@/types/organisationInterface";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
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
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8080";
var socket: any;

function Organization() {
  const router = useRouter();
  const [organisations, setOrganisations] = useState<IOrganisation[]>([]);
  const [name, setName] = useState("");
  if (typeof window !== "undefined") {
    var user = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo") as string)
      : null;
  }

  useEffect(() => {
    const fetchOrganisation = async () => {
      try {
        const { data } = await axios.get("/apii/organisation/fetch");
        setOrganisations(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrganisation();
  }, []);

  useEffect(() => {
    socket = io(ENDPOINT);
    return () => {
      socket.disconnect();
    };
  });

  const submitHandler = async () => {
    if (!name) {
      window.alert("Enter Name");
      return;
    }
    try {
      const { data } = await axios.post(
        "/apii/organisation/create",
        {
          name,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      setOrganisations([data, ...organisations]);
      setName("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleOrganisationLogout = async (org: IOrganisation) => {
    try {
      socket.emit("Logout Organisation", org);
      const { data } = await axios.put(
        "apii/activity/updateAll",
        {
          organisationId: org._id,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <GridItem pl="2" area={"header"}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <FormControl>
            <FormLabel>Organistion Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter...."
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            onClick={submitHandler}
          >
            Submit
          </Button>
          <Button mt={4} onClick={() => router.push("/admindashboard")}>
            Back
          </Button>
        </Grid>
      </GridItem>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Log out All</Th>
            </Tr>
          </Thead>
          <Tbody>
            {organisations.map((org: IOrganisation) => (
              <Tr key={org._id}>
                <Td>{org.name}</Td>
                <Td>
                  <Button onClick={() => handleOrganisationLogout(org)}>
                    Log Out
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Organization;
