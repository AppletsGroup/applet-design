import React from 'react'

import { Button } from './Button'

export default {
  title: 'General/Button',
  component: Button
}

export const Default = () => <Button>Button</Button>
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
