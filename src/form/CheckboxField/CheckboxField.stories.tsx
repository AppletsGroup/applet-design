import React from 'react'
import { Form } from '../Form/Form'

import { CheckboxField } from './CheckboxField'

export default {
  title: 'Form/CheckboxField',
  component: CheckboxField
}

export const DefaultInput = () => {
  return (
    <Form
      onSubmit={(data) => { console.log(data) }}
      className="bg-gray-900">
      <CheckboxField
        label="test checkbox"
        name="testCheckbox"
    />
      <button
        type="submit"
        className="text-white">
        Submit
      </button>
    </Form>
  )
}
