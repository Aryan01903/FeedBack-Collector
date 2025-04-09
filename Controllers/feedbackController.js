const feedbackModel = require("../Models/feedbackModel");


// create new feedback

exports.createNewFeedback=async(req,res)=>{

    console.log("🎯 Feedback request body:", req.body)
    // Read the request body 
    const { fullName, email, feedback } = req.body;

    if (!fullName || !email || !feedback) {
        return res.status(400).json({
        message: "All fields (fullName, email, feedback) are required",
    });
    }
    // Create new Feedback
    // Feedback data to be stored
    const feedback_data = {
        fullName,
        email,
        feedback,
    };

    try{
        const newfeedback=await feedbackModel.create(feedback_data);
        return res.status(201).json(newfeedback)
    }catch(err){
        console.log("Error while creating a feedback",err);
        return res.status(500).json({
            message : "Error while creating the feedback"
        })
    }
}


exports.getAllFeedback=async(req,res)=>{
    try{
        // fetch all feedbacks from the database
        const feedbacks = await feedbackModel.find();

        // send all feedbacks as the response 
        return res.status(200).json(feedbacks);
    }catch(err){
        console.log("error while finding feedbacks",err);
        return res.status(500).json({
            message : "Error while fetching feedbacks"
        });
    }
}