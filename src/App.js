import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import BorrowMessage from "./components/BorrowPage/BorrowMessage";
import BorrowPage from "./components/BorrowPage/BorrowPage";
import BuyNow from "./components/BuyNow/BuyNow";
import ExchangeMessage from "./components/ExchangePage/ExchangeMessage";
import ExchangePage from "./components/ExchangePage/ExchangePage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignUp from "./components/SignUp/SignUp";
import Store from "./components/Store/Store";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";
import RequestsPage from "./components/RequestsPage/RequestsPage";
import ExchangeRequestAccept from "./components/RequestsPage/ExchangeRequestAccept";
import BorrowRequestAccept from "./components/RequestsPage/BorrowRequestAccept";

function App() {
  return (
    <div className="px-4 w-full">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
        <Route path="/myProfile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/exchange" element={<ExchangePage></ExchangePage>}></Route>
        <Route path="/borrow" element={<BorrowPage></BorrowPage>}></Route>
        <Route path="/requests" element={<RequestsPage></RequestsPage>}></Route>
        <Route
          path="/exchangeAcceptance/:bookId"
          element={<ExchangeRequestAccept></ExchangeRequestAccept>}
        ></Route>
        <Route
          path="/borrowAcceptance/:bookId"
          element={<BorrowRequestAccept></BorrowRequestAccept>}
        ></Route>
        <Route
          path="/exchange/:bookId"
          element={<ExchangeMessage></ExchangeMessage>}
        ></Route>
        <Route
          path="/borrow/:bookId"
          element={<BorrowMessage></BorrowMessage>}
        ></Route>
        <Route
          path="buyNow/:bookId"
          element={
            <RequireAuth>
              <BuyNow></BuyNow>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAdmin>
              <AdminDashboard></AdminDashboard>
            </RequireAdmin>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
