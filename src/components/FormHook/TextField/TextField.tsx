import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField as MuiTextField, StandardTextFieldProps } from '@mui/material';

interface TextFieldProps extends StandardTextFieldProps {
  name: string;
  label: string;
  vari?:"standard"|"outlined"|"filled";
  type?: 'text' | 'password' | 'file' | 'number' | 'email';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
  fontColor?:string;
}

export default function TextField({ name, label,vari,fontColor, ...other }: TextFieldProps) {
  const { control, register } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MuiTextField
          variant={vari?vari:"standard"}
          label={label}
          type={other.type}
          {...field}
          fullWidth
          sx={{margin:'8px 0',fontColor:`${fontColor}`}}
          error={!!error}
          helperText={error && error.message}
          {...other}
          {...register(name)}
        />
      )}
    />
  );
}
