import {
  Container,
  Stack,
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import LogoImg from "../assets/logo_black.png";
import ImageEL from "../components/utils/ImageEL";
import { useState } from "react";


const initForm ={
  email:'',
  password:'',

}
const authScreen = () => {

  const [isLogin,SetIsLogin]=useState(false);
  const [Form,SetForm]=useState(initForm);



  const authText=isLogin?"Do not have an Account ??":"Already have an Account ??"
  return (
    <Container
    maxWidth="xs"
      sx={{
        mt: 12,
      }}
    >
      <Stack spacing={5} alignItems="center" textAlign="center">
        <Box mt={1} sx={{ width: 220, borderRadius: 3, backgroundColor: "#F4BF96" }}>
          <ImageEL
            src={LogoImg}
            height={140}
            width={160}
            alt="flowBoard"
          />
          {/*  as a default it use flex that's the reason the img star to take that much space */}
        </Box>
        <Typography>
          Visualize workflow for increased Productivity
          <br />
          Access Your Tasks Anytime, Anywhere
        </Typography>
      </Stack>
      <Stack spacing={3} mt={5} >
        <TextField value={Form.email} name="email" onChange={handleChange()} label="Email" />
        <TextField value={Form.password} name="password" onChange={handleChange()} label="Password"/>
        <Button variant="contained">{isLogin?"Login":"Register"}</Button>
      <Typography sx={{cursor:'pointer'}} alignItems="center" textAlign="center" onClick={()=>SetIsLogin((e)=> !e)}>{authText}</Typography>
      </Stack>
    </Container>
  );
};

export default authScreen;
