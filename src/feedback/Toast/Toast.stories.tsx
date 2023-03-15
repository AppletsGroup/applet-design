import React from 'react'

// import { Provider } from '../Provider'
import { ToastProvider, useToast } from './Toast'

export default {
  title: 'Feedback/Toast'
}

function ToastExample() {
  const toast = useToast()

  const handleShowToast = () => {
    toast?.pushSuccess('create article success')
  }

  return (
    <div onClick={handleShowToast}>show toast</div>
  )
}

export const DefaultToast = () => {
  return (
    <ToastProvider variant={'top_middle'}>
      <ToastExample />
    </ToastProvider>
  )
}
