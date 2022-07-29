import "./App.css";
import { GlobalStyle } from "./styles/theme";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

function App() {
  return (
    <div>
      <GlobalStyle />
      <SignUp />
    </div>
  );
}

export default App;
