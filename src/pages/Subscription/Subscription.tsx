import React, { useState } from "react";

const Subscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [paymentInformation, setPaymentInformation] = useState("");

  return (
    <div>
      <h1>Abonnement aanvragen</h1>
      <input type="text" placeholder="Naam" value={name} onChange={(event) => setName(event.target.value)} />
      <input type="email" placeholder="E-mailadres" value={email} onChange={(event) => setEmail(event.target.value)} />
      <select name="subscriptionType" value={subscriptionType} onChange={(event) => setSubscriptionType(event.target.value)}>
        <option value="1 maand">1 maand</option>
        <option value="3 maanden">3 maanden</option>
        <option value="1 jaar">1 jaar</option>
      </select>
      <input type="text" placeholder="Betalingsinformatie" value={paymentInformation} onChange={(event) => setPaymentInformation(event.target.value)} />
      <input type="submit" value="Aanmelden" />
    </div>
  );
};

export default Subscription;