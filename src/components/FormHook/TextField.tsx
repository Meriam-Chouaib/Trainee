import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField as MuiTextField, StandardTextFieldProps } from '@mui/material';

interface TextFieldProps extends StandardTextFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'password' | 'file' | 'number' | 'email';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: any;
}

export default function TextField({ name, label, ...other }: TextFieldProps) {
  const { control, register } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MuiTextField
          variant="standard"
          label={label}
          type={other.type}
          {...field}
          fullWidth
          sx={{margin:'8px 0'}}
          error={!!error}
          helperText={error && error.message}
          {...other}
          {...register(name)}
        />
      )}
    />
  );
}
