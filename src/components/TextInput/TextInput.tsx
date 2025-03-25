'use client';

import { FormControl, StandardTextFieldProps, TextField } from '@mui/material';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface TextInputProps extends StandardTextFieldProps {
  name: string;
  helperText?: string;
  errorText?: string;
}

export function TextInput({
  name,
  helperText,
  errorText,
  ...props
}: TextInputProps) {
  const { control, formState, setValue } = useFormContext();
  const isError = !!formState.errors[name] || !!errorText;
  const errorMessage =
    (formState.errors[name]?.message as string) || errorText || '';

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const breakLineValue = value.replace(/\n/g, ' \r\n');

    setValue(name, breakLineValue);
  };

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            color="info"
            error={isError}
            helperText={errorMessage || helperText}
            {...field}
            {...props}
            onBlur={handleBlur}
          />
        )}
      />
    </FormControl>
  );
}
