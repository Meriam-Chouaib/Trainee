// ___________________________ React ________________________
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

// ___________________________ Schema & model ________________
import { RegisterModel } from "../../models/RegisterModel";
import { User, users } from "../../utils/fakeData";
import { RegisterSchema } from "../../schemas/RegisterSchema";
import { persistData } from "../../utils/localstorage";
import { PATHS } from "../../config/paths";
import FormProvider from "../../components/FormHook/FormProvider";
import { StackForm } from "../../components/Stack/StackStyled.style";
import TextField from "../../components/FormHook/TextField/TextField";
import { CustomButton } from "../../components/FormHook/Button/Button";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";


export const Register = () => {
    const { register } = useForm<User>();
    const { fields, defaultValues } = RegisterModel;

    const methods = useForm({
    defaultValues,
      resolver: yupResolver(RegisterSchema),
  
    });
    const navigate = useNavigate();
    const {
      handleSubmit,
      formState: { isSubmitting },
    } = methods;
    const onSubmit = (data: User) => {
      const foundUser = users.find(user => user.email.toLowerCase() === data.email.toLowerCase()&& user.password===data.password);
    
      if (!foundUser) {
  persistData("user",data)  
  
  navigate(PATHS.PRINCIPAL.PROFILE); 
   } 
    };
  return (
    <>
    <Typography variant='h1'>Register</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <StackForm>
        <TextField label={'Email'} name={"email"} type="email"  />
        <TextField label={'Name'} name={"name"} type="text"  />
        <TextField label={'Address'} name={"address"} type="text"  />
        <TextField label={'Role'} name={"role"} type="text"  />
        <TextField label={'Password'} name={"password"} type="password"/>
        <TextField label={'Confirm password'} name={"confirm_password"} type="password"/>
        <CustomButton>Confirm</CustomButton>    
    
      <Link to={PATHS.AUTH.LOGIN}>
        <Typography variant='h3'>Already have an account!</Typography>
      </Link>
      </StackForm>
    </FormProvider>
    </>
  )
}

