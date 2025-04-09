const mongoose=require("mongoose");

// schema for the feedback
const feedbackSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /\S+@\S+\.\S+/.test(v),
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    feedback: {
      type: String,
      required: true    
    }
  }, {
    timestamps: true, // This adds createdAt & updatedAt
    versionKey: false
});


module.exports=mongoose.model("feedback",feedbackSchema)