import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserTemplate from "../templates/user/user.template";
import UserTemplate2 from "src/templates/user2/user2.template";
import { url } from "src/constants";

const Home = lazy(() => import("../pages/home"));
const Swap = lazy(() => import("../pages/swap"));
const Staking = lazy(() => import("../pages/staking"));
const CakeStaking = lazy(() => import("../pages/cake-staking"));
const Profile = lazy(() => import("../pages/profile"));
const Home2 = lazy(() => import("../pages/home-2"));
const Transactions = lazy(() => import("../pages/transactions"));
const TransactionsPending = lazy(() => import("../pages/transaction-pending"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const ContractInternalTransactions = lazy(() => import("../pages/contract-internal-transactions"));
const ViewBlocks = lazy(() => import("../pages/view-blocks"));
const PasswordRecovery = lazy(() => import("../pages/password-recovery"));
const ForkedBlocks = lazy(() => import("../pages/forked-blocks"));
const TopAccount = lazy(() => import("../pages/top-account"));
const VerifiedContracts = lazy(() => import("../pages/verified-contracts"));
const ValidatorsLeaderboard = lazy(() => import("../pages/validators-leaderboard"));
const SetInfo = lazy(() => import("../pages/set-info"));
const TopToken = lazy(() => import("../pages/top-token"));
const Settings = lazy(() => import("../pages/settings"));
const TokenTransfer = lazy(() => import("../pages/token-transfer"));
const NftTop = lazy(() => import("../pages/nft-top"));
const TopMints = lazy(() => import("../pages/top-mints"));
const NftTrades = lazy(() => import("../pages/nft-trades"));
const Charts = lazy(() => import("../pages/charts"));
const TopStatics = lazy(() => import("../pages/top-statics"));
const UnitConverter = lazy(() => import("../pages/unit-converter"));
const CsvExport = lazy(() => import("../pages/csv-export"));
const AccountBalanceChecker = lazy(() => import("../pages/account-balance-checker"));
const TokenSupplyChecker = lazy(() => import("../pages/token-supply-checker"));
const SimilarContractsSearch = lazy(() => import("../pages/similar-contract-search"));
const Block = lazy(() => import("../pages/block-detail"));
const TransactionDetail = lazy(() => import("../pages/transaction-detail"))

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
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
    children: [
      {
        index: true,
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
      },
      {
        path: url.login,
        element: (
          <Suspense>
            <Login />
          </Suspense>
        )
      },
      {
        path: url.register,
        element: (
          <Suspense>
            <Register />
          </Suspense>
        )
      },
      {
        path: url.contractInternalTransactions,
        element: (
          <Suspense>
            <ContractInternalTransactions />
          </Suspense>
        )
      },
      {
        path: url.viewBlock,
        element: (
          <Suspense>
            <ViewBlocks />
          </Suspense>
        )
      },
      {
        path: url.passwordRecovery,
        element: (
          <Suspense>
            <PasswordRecovery />
          </Suspense>
        )
      },
      {
        path: url.forkedBlocks,
        element: (
          <Suspense>
            <ForkedBlocks />
          </Suspense>
        )
      },
      {
        path: url.topAccount,
        element: (
          <Suspense>
            <TopAccount />
          </Suspense>
        )
      },
      {
        path: url.verifiedContracts,
        element: (
          <Suspense>
            <VerifiedContracts />
          </Suspense>
        )
      },
      {
        path: url.validatorsLeaderboard,
        element: (
          <Suspense>
            <ValidatorsLeaderboard />
          </Suspense>
        )
      },
      {
        path: url.setInfo,
        element: (
          <Suspense>
            <SetInfo />
          </Suspense>
        )
      },
      {
        path: url.topToken,
        element: (
          <Suspense>
            <TopToken />
          </Suspense>
        )
      },
      {
        path: url.settings,
        element: (
          <Suspense>
            <Settings />
          </Suspense>
        )
      },
      {
        path: url.tokenTransfer,
        element: (
          <Suspense>
            <TokenTransfer />
          </Suspense>
        )
      },
      {
        path: url.nftTop,
        element: (
          <Suspense>
            <NftTop />
          </Suspense>
        )
      },
      {
        path: url.topMint,
        element: (
          <Suspense>
            <TopMints />
          </Suspense>
        )
      },
      {
        path: url.nftTrades,
        element: (
          <Suspense>
            <NftTrades />
          </Suspense>
        )
      },
      {
        path: url.charts,
        element: (
          <Suspense>
            <Charts />
          </Suspense>
        )
      },
      {
        path: url.topStatics,
        element: (
          <Suspense>
            <TopStatics />
          </Suspense>
        )
      },
      {
        path: url.unitConverter,
        element: (
          <Suspense>
            <UnitConverter />
          </Suspense>
        )
      },
      {
        path: url.csvExport,
        element: (
          <Suspense>
            <CsvExport />
          </Suspense>
        )
      },
      {
        path: url.accountBalanceChecker,
        element: (
          <Suspense>
            <AccountBalanceChecker />
          </Suspense>
        )
      },
      {
        path: url.tokenSupplyChecker,
        element: (
          <Suspense>
            <TokenSupplyChecker />
          </Suspense>
        )
      },
      {
        path: url.similarContractsSearch,
        element: (
          <Suspense>
            <SimilarContractsSearch />
          </Suspense>
        )
      },
      {
        path: url.blockDetail,
        element: (
          <Suspense>
            <Block />
          </Suspense>
        )
      },
      {
        path: url.transactionDetail,
        element: (
          <Suspense>
            <TransactionDetail />
          </Suspense>
        )
      }
    ]
  }
]);
