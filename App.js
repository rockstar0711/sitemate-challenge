import {} from "react-native";
import ResultProvider from "./src/context/ResultProvider";
import AppNavContainer from "./src/navigations";

export default function App() {
  return (
    <ResultProvider>
      <AppNavContainer />
    </ResultProvider>
  );
}
