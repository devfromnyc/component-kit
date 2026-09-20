import { useState } from "react";
import { Checkout } from "./Checkout.jsx";
import { ThankYou } from "./ThankYou.jsx";

export function CheckoutPreview() {
  const [orderId, setOrderId] = useState(null);
  if (orderId) return <ThankYou content={{ orderId }} />;
  return <Checkout onSubmit={(result) => setOrderId(result.orderId)} />;
}
