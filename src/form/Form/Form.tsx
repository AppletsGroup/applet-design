import React, { FC, ReactNode } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'

interface FormProps {
  onSubmit: SubmitHandler<any>
  children: ReactNode
  formMethods?: ReturnType<typeof useForm>
}

export const Form: FC<FormProps> = ({ onSubmit, children, formMethods }) => {
  const methods = formMethods ?? useForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
