import React, { FC, ReactNode } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: SubmitHandler<any>
  children: ReactNode
  formMethods?: ReturnType<typeof useForm>
}

export const Form: FC<FormProps> = ({ onSubmit, children, formMethods, ...rest }) => {
  const methods = formMethods ?? useForm()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}
