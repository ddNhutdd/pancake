import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserTemplate from "../templates/user/user.template";
import { url } from "src/constants";
const Home = lazy(() => import("../pages/home"));

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        index: true,
        path: url.home,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);
