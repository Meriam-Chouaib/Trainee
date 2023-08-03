
import { useForm } from "react-hook-form";
import { StackForm } from "../components/Stack/StackStyled";
import TextField from "../components/FormHook/TextField";
import FormProvider from "../components/FormHook/FormProvider";
import {  persistData } from "../utils/localstorage";
import { Typography } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { CustomButton } from "../components/FormHook/Button/Button";
import { User, users } from "../utils/fakeData";
import { PATHS } from "../config/paths";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../schemas/LoginSchema";




const defaultValues={
    email:'',
    password:''
}
export default function LoginPage() {
   const { register } = useForm<User>();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(LoginSchema),

  });
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = (data: User) => {
    const foundUser = users.find(user => user.email.toLowerCase() === data.email.toLowerCase()&& user.password===data.password);
  
    if (foundUser) {
persistData("user",foundUser)  

navigate(PATHS.PRINCIPAL.PROFILE); 
 } 
  };

  return (
    <>
    <Typography variant='h1' >Authentification</Typography>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <StackForm>
        <TextField label={'email'} name={"email"} type="email"  />
        <TextField label={'password'} name={"password"} type="password"/>
        <CustomButton>Connect</CustomButton>    
      </StackForm>
    </FormProvider>  
    </>
  );
}

