const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    image:{
        filename: String,
        originalname: String,
        size: Number,
        path: String,
    },
    
    title:{
        type: String,
        required: true,
    },

    author:{
        type: String,
        required: true
    },

    description:{
        type: String
    },
    createdAt:{
        type:Date,
        default: Date.now,
        set: function(date){
            let newDate = new Date(date);
            newDate.setSeconds(0, 0);
            return newDate;
        }
    }
})

PostSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('createdAt')) {
        this.createdAt.setSeconds(0, 0);
    }
    next();
});

module.exports = mongoose.model("Posts", PostSchema)