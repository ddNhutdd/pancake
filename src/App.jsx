import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/config-store";
import { router } from "./router";
import { GlobalStyle } from "./components/global-style";
import { ThemeProvider } from "./context";

function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </GlobalStyle>
    </ReduxProvider>
  );
}

export default App;
