import { FieldError } from '../FieldError/FieldError'
import { Form } from '../Form/Form'

import { SelectField } from './SelectField'

export default {
  title: 'Form/SelectField',
  component: SelectField
}

export const Default = () => {
  return (
    <Form onSubmit={(data) => { console.log(data) }}>
      <SelectField
        name="testSelectField"
        placeholder='Please select'
        validation={{
          required: true
        }}
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </SelectField>
      <FieldError name="testSelectField" />
      <button type="submit">Submit</button>
    </Form>
  )
}
