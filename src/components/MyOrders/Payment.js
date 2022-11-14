import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M46kuG6AjLP0ugsFAPxDfbVPSq8XRXJYQSnJr0Z9b1R26O7M7AZS1ybPvumD3ofyUK0zQ9VSrBIeHiSV4nxmxSW00HhlZyLwP"
);

const Payment = () => {
  const [order, setOrder] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    fetch(`https://floating-gorge-66618.herokuapp.com/orders/${orderId}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderId]);

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.name}</p>
          <h2 class="card-title">Please Pay for {order.bookName}</h2>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
