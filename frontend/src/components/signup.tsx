import {
  FormControl,
  Input,
  FormLabel,
  Button,
  InputRightElement,
  InputGroup,
  VStack,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { IOrganisation } from "../types/organisationInterface";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [organisations, setOrganisations] = useState<IOrganisation[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

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
  const submitHandler = async () => {
    if (!email || !password || !name || !organisation) {
      window.alert("Enter details");
      return;
    }
    setLoading(true);
    try {
      const { data: userData } = await axios.post("/apii/user/register", {
        name,
        email,
        password,
        organisation,
      });
      if (!userData.data.isAdmin) {
        const { data } = await axios.post(
          "/apii/activity/create",
          {
            userId: userData.data._id,
          },
          {
            headers: {
              authorization: `Bearer ${userData.data.token}`,
            },
          }
        );

        const { id: activityId } = data;
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...userData.data, activityId })
        );
      } else {
        localStorage.setItem("userInfo", JSON.stringify({ ...userData.data }));
      }
      if (userData.data.isAdmin) {
        router.push("/admindashboard");
      } else {
        router.push("/userhome");
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Enter password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Select Organisation</FormLabel>
        <Select
          onChange={(e) => setOrganisation(e.target.value)}
          placeholder="Select Organisation"
        >
          {organisations.map((org: IOrganisation) => (
            <option key={org._id} value={org._id}>
              {org.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button
        onClick={submitHandler}
        isLoading={loading}
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default Signup;
