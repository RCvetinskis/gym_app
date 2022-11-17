import { UserProvider } from "./context/Context";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <UserProvider>
      <StackNavigator />
    </UserProvider>
  );
}
