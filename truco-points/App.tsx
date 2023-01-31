import { StyleSheet, View } from 'react-native';
import { StackRouter } from './router/stack_router'

export default function App() {
  return <StackRouter />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
