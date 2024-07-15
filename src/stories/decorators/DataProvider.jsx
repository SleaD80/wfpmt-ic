import React, { useState, useEffect } from 'react';
import PayerInfo from '../../components/PayerInfo';

function DataProvider() {
  const API_URL = 'http://localhost:3000/payment';
  const [payer, setPayer] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((payment) => {
        let p = {};
        payment.fields.map((field) => (p[field.name] = field.value));
        setPayer(p);
      });
    // .catch((error) => setError(error.message));
  }, []);

  return <PayerInfo {...payer} />;
  //    return React.Children.map(props.children, child => {
  //      return React.cloneElement(child, { "payment": payment });
  //    });
  //   props.children(payment);
}

export default DataProvider;
