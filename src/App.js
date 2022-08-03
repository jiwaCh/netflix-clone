import "./App.css";
import { GlobalStyle } from "./styles/theme";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

/*
TODO:
- fix the font type
- USE next js for easy routing and more manageable project ?!
*/

function App() {
  return (
    <>
      <GlobalStyle />
      <SignUp />
    </>
  );
}

export default App;
