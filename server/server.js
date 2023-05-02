require("dotenv").config();
const express = require("express");
const app = express();

const PORT = porcess.env.PORT;

app.get("/", (req,res)=>{
    try {
        res.status(200).json({msg: "A főoldal"})
    } catch (error) {
        res.status(500).json({msg: "Valami hiba" + error.message})
    }
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
