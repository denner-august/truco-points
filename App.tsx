import { StackRouter } from './router/stack_router'
import { ContextProvider } from './context/stateManager'

export default function App() {
  return (
    <ContextProvider>
      <StackRouter />
    </ContextProvider>
  )
}

