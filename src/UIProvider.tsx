import { ToastProvider } from './feedback/Toast/Toast'

// eslint-disable-next-line react/prop-types
export function UIProvider({ children }) {
  return (
    <ToastProvider variant={'top_middle'}>
      <div className="applet-design h-screen overflow-auto">
        {children}
      </div>
    </ToastProvider>
  )
}
