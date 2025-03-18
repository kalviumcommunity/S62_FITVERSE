const express = require("express");
const { ObjectId } = require("mongodb");

const router = express.Router();

const { getDBFunction } = require("../mongo_client.js");

router.get("/users", async (req, res) => {
  try {
    const db = await getDBFunction();
  
    

    const data = await db.find().toArray();
    // if(data.length>0){
    //   res.status(200).json({message:""})
    // }
    
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
});

module.exports = router;