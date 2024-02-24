import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/config-store";
import { router } from "./router";
import { GlobalStyle } from "./components/global-style";

function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle>
        <RouterProvider router={router} />
      </GlobalStyle>
    </ReduxProvider>
  );
}

export default App;
