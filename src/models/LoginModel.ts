export const LoginModel={
    fields:{
        email:{
            label: 'Email',
            name: 'email',
            requiredErrorMessage: 'Email is required',
            invaliErrorMessage: 'Email is invalid',
          },
          password:{
            label: 'Password',
            name: 'password',
            requiredErrorMessage: 'Password is required',
            invaliErrorMessage: 'Password is invalid',
            password_invalid_length:'Invalid length of password',
          },
    },
    defaultValues: {
        email: '',
        password: '',
      },
}