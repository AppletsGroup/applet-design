import React from 'react'
import { FieldError } from '../FieldError/FieldError'
import { Form } from '../Form/Form'

import { InputField } from './InputField'

export default {
  title: 'Form/InputField',
  component: InputField
}

export const DefaultInput = () => {
  return (
    <Form onSubmit={(data) => { console.log(data) }}>
      <InputField
        name="testInputField"
        placeholder="Type your message here"
        className="input"
        errorClassName="input error"
        validation={{ required: 'testInputField is required', minLength: 10, maxLength: 100 }}
    />
      <FieldError name="testInputField" />
      <button type="submit">Submit</button>
    </Form>
  )
}
