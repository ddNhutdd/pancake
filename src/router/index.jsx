import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserTemplate from "../templates/user/user.template";
import UserTemplate2 from "src/templates/user2/user2.template";
import { url } from "src/constants";

const Home = lazy(() => import("../pages/home"));
const Swap = lazy(() => import("../pages/swap"));
const Staking = lazy(() => import("../pages/staking"));
const CakeStaking = lazy(() => import("../pages/cake-staking"))
const Profile = lazy(() => import("../pages/profile"))
const Home2 = lazy(() => import("../pages/home-2"))
const Transactions = lazy(() => import("../pages/transactions"))
const TransactionsPending = lazy(() => import("../pages/transaction-pending"))

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
      {
        path: url.swap,
        element: (
          <Suspense>
            <Swap />
          </Suspense>
        ),
      },
      {
        path: url.staking,
        element: (
          <Suspense>
            <Staking />
          </Suspense>
        ),
      },
      {
        path: url.cakeStaking,
        element: (
          <Suspense>
            <CakeStaking />
          </Suspense>
        )
      },
      {
        path: url.profile,
        element: (
          <Suspense>
            <Profile />
          </Suspense>
        )
      }
    ],
  },
  {
    element: <UserTemplate2 />,
    children: [{
      path: url.home2,
      element: (
        <Suspense>
          <Home2 />
        </Suspense>
      )
    },
    {
      path: url.transactions,
      element: (
        <Suspense>
          <Transactions />
        </Suspense>
      )
    },
    {
      path: url.transactionsPending,
      element: (
        <Suspense>
          <TransactionsPending />
        </Suspense>
      )
    }]
  }
]);
