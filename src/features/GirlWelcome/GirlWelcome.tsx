


import { Grid,  Typography } from "@mui/material";
import { User } from "../../utils/fakeData";
import { getPersistData } from "../../utils/localstorage";
import {Image} from '../../components/image/Image'
import { Button } from "../../components/Button/Button/Button";
import theme from "../../theme";
import { Link, redirect } from "react-router-dom";
import { PATHS } from "../../config/paths";
const user:User=getPersistData('user',true)

export const GirlWelcome = () => {
  return (
    <>
    
    <Grid container spacing={2} direction={"column"} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Grid item xs={6}>
            <Typography variant='h1'>Welcome to Our Website {user && user.name}!</Typography>
            <Typography variant='h3'>We're glad you're here. Explore and enjoy our content.</Typography>
            <Link to={PATHS.PRINCIPAL.PROFILE}>
                <Button txt={"get started"} color={theme.palette.primary.dark} bgColor={theme.palette.warning.dark}  />
            </Link>
        </Grid>
        <Grid item xs={6}>
            <Image src="girl1.jpg" alt="girl1" width={400} height={400}/>
        
        </Grid>
    
</Grid>
    
    
      {/* <img src={ImgGir} alt="Welcome Girl" /> */}
    </>
  );
}


