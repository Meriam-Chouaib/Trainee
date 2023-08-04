import {  Typography } from "@mui/material"
import { TextFieldHome } from "../../../components/FormHook/TextField/TextField.style"
import { Button } from "../../../components/Button/Button/Button"
import theme from "../../../theme"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BoxCenter } from "../../../components/Box/Box.style";
import { User, users } from "../../../utils/fakeData";
import { persistData } from "../../../utils/localstorage";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../config/paths";
import { useState } from "react";

export const HomePageNetflix = () => {
    const [email, setEmail] = useState(""); // State to hold the email value
 
    const navigate = useNavigate();
    const onSubmit = () => {
        const foundUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
        
        if (foundUser) {
    persistData("user",foundUser)      
    navigate(PATHS.PRINCIPAL.PROFILE); 
     } 
      };
      
  return (
    <>
    <Typography variant='h1' style={{color:'white'}} >Unlimited movies, TV shows, and more</Typography>
    <Typography variant='h3' style={{color:'white'}} >Watch anywhere. Cancel anytime.</Typography>
    <Typography variant='h3' style={{color:'white'}} >Ready to watch? Enter your email to create or restart your membership.</Typography>
    
    <BoxCenter>
        <TextFieldHome  name={"email"} type="email" sx={{color:'white'}} label={'Email address'}  value={email} 
                    onChange={(e) => setEmail(e.target.value)} />


        <Button onClick={()=>onSubmit()} fontSize={'25.5px'} txt={"Get Started"} color={theme.palette.grey[100]} bgColor={"red"} icon={<ArrowForwardIosIcon />} margin="0px 0.5rem" />
    </BoxCenter>
    </>
  )
}

