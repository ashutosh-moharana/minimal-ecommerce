
  async function handlePayment() {

     const handleVerification = async (response) => {
      const res = await fetch(
        "https://minimal-ecommerce-backend.onrender.com/api/payment/verify-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
        }
      );

      const verifyData = await res.json();
      if (verifyData.success) {
        alert(verifyData.message);
      } else {
        alert("Verification Failed!");
      }
    };



    const response = await fetch(
      "https://minimal-ecommerce-backend.onrender.com/api/payment/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 3200 }),
        
      }
    );

    const order = await response.json();
    console.log(order);
    
    const options = {
      key: "rzp_test_LeG7lmypxHbC4H",
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "Ashutosh Moharana",
      handler: handleVerification,
      theme: {
        color: "blue",
      },
    };
    const razorpay = new Razorpay(options);
    razorpay.open();


   
  }



export default handlePayment;
