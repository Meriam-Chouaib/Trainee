export const RegisterModel={
    fields:{
        email:{
            label: 'Email',
            name: 'email',
            requiredErrorMessage: 'Email is required',
            invaliErrorMessage: 'Email is invalid',
          },
          name:{
            label: 'Name',
            name: 'name',
            requiredErrorMessage: 'Name is required',
            invaliErrorMessage: 'Name is invalid',
          },
          password:{
            label: 'Password',
            name: 'password',
            requiredErrorMessage: 'Password is required',
            invaliErrorMessage: 'Password is invalid',
            password_invalid_length:'Invalid length of password',
          },
          confirm_password: {
            label: 'Confirm password',
            name: 'confirm_password',
            requiredErrorMessage: 'Please confirm your password by entering it again.',
            invaliErrorMessage: 'The passwords do not match. Please try again.',
          },
          address:{
            label: 'Address',
            name: 'address',
            requiredErrorMessage: 'Address is required',
            invaliErrorMessage: 'Address is invalid',
          },
          role: {
            label: 'Role',
            name: 'role',
            requiredErrorMessage: 'Role is required',
          },
    },
    defaultValues: {
        email: '',
        password: '',
        name:'',
        confirm_password:'',
        role:'',
        address:'',
      },
}