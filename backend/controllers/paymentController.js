const Razorpay = require("razorpay");
const crypto = require('crypto')
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });
    res.json(order);
  } catch (err) {
    res.json({ error: err });
  }
};


const verifyPayment = (req,res)=>{
const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

const sign = razorpay_order_id + "|" + razorpay_payment_id;

const generated_signature = crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET).update(sign).digest("hex");

if(generated_signature == razorpay_signature){
    return res.status(200).json({
        success:true,
        message:"Payment Verified Successfully!"
    })
}else{
    return res.status(400).json({
        success:false,
        message:"Payment Verification Failed!"
    })
}


}

module.exports = { createOrder,verifyPayment };
