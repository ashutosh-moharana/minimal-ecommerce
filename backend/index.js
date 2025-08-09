const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.json({message:"Server is running !"});
})
app.use("/api/payment", require("./routes/payment"));

app.listen(3000, () => {
  console.log("Server is running on the port 3000");
});
