import React from "react";
import notFound from "../../assets/images/notFound/notFound.jpg";
import Footer from "../Footer/Footer";

const NotFound = () => {
  return (
    <div className="pt-10">
      <img src={notFound} alt="" />
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
