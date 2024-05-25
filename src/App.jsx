import { UserProvider } from "./context/UserContext";
import LandingPage from "./views/LandingPage";
function App() {
  return (
    <UserProvider>
          <LandingPage />
    </UserProvider>
  );
}

export default App;
