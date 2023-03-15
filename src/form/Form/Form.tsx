import React, { FC, ReactNode } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'

interface FormProps {
  onSubmit: SubmitHandler<any>
  children: ReactNode
}

export const Form: FC<FormProps> = ({ onSubmit, children }) => {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
