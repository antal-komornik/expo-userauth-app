import AppNavigation from "./src/navigation/index.js";
import {AuthProvider} from "./src/context/AuthContext.js";

export default function App() {
  return (
    <AuthProvider>
        <AppNavigation />     
    </AuthProvider>
  );
}
