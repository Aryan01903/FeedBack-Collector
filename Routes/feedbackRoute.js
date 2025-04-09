const express=require("express");
const router=express.Router();

const feedbackController=require("../Controllers/feedbackController")


// Route to create Feedback
router.post("/submit-feedback",feedbackController.createNewFeedback);

// Route to fetch all Feedbacks
router.get("/admin/feedbacks",feedbackController.getAllFeedback)

// Temporary test route to check if backend is live
router.get("/test", (req, res) => {
    res.send("API is working!");
  });
  

module.exports=router;


