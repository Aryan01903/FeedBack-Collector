const express=require("express");
const router=express.Router();

const feedbackController=require("../Controllers/feedbackController")


// Route to create Feedback
router.post("/submit-feedback",feedbackController.createNewFeedback);

// Route to fetch all Feedbacks
router.get("/admin/feedbacks",feedbackController.getAllFeedback)

module.exports(router);


