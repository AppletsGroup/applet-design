import React, { useState } from 'react'

import { Modal } from './Modal'

export default {
  title: 'Feedback/Modal'
}

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>open dialog</div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent
            you an email with all of the details of your order.
          </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => setIsOpen(false)}
          >
            Got it, thanks!
          </button>
        </div>
      </Modal>
    </div>
  )
}
