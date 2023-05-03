import {
  FormControl,
  Input,
  FormLabel,
  Button,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password) {
      window.alert("Enter details");
    } else {
      setLoading(true);
      try {
        const { data: userData } = await axios.post("/apii/user/login", {
          email,
          password,
        });
        if (!userData.data.isAdmin) {
          const { data } = await axios.post("/apii/activity/create", {
            userId: userData.data._id,
          }, {
            headers: {
              authorization: `Bearer ${userData.data.token}`
            }
          });

          const { id: activityId } = data;
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ ...userData.data, activityId })
          );
        }
        else {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ ...userData.data })
          );
        }


        if (userData.data.isAdmin) {
          router.push("/admindashboard");
        } else {
          router.push("/userhome");
        }
      } catch (err) {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        isLoading={loading}
        onClick={handleSubmit}
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
