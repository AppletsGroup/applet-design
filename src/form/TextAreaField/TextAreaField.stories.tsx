import { FieldError } from '../FieldError/FieldError'
import { Form } from '../Form/Form'
import { TextAreaField } from './TextAreaField'

export default {
  title: 'Form/TextAreaField',
  component: TextAreaField
}

export const Default = () => {
  return (
    <Form onSubmit={(data) => { console.log(data) }}>
      <TextAreaField
        name="testTextAreaField"
        placeholder="Type your message here"
        className="input"
        errorClassName="input error"
        validation={{ required: 'testTextAreaField is required', minLength: 10, maxLength: 100 }}
      />
      <FieldError name="testTextAreaField" />
      <button type="submit">Submit</button>
    </Form>
  )
}
