import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./fonts/ABCGintoNormalVariable.woff2";
import router from "./routes/router";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
