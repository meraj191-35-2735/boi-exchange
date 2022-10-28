import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Users from "./components/AdminDashboard/Users";
import BuyNow from "./components/BuyNow/BuyNow";
import ExchangePage from "./components/ExchnagePage/ExchangePage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddBookExchange from "./components/MyProfile/AddBookExchange";
import MyProfile from "./components/MyProfile/MyProfile";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignUp from "./components/SignUp/SignUp";
import Store from "./components/Store/Store";

function App() {
  return (
    <div className="px-4">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
        <Route path="/myProfile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/exchange" element={<ExchangePage></ExchangePage>}></Route>
        <Route
          path="/myProfile/addToExchange"
          element={<AddBookExchange></AddBookExchange>}
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
        >
          <Route index element={<Users></Users>}></Route>
          <Route path="user" element={<Users></Users>}></Route>
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
