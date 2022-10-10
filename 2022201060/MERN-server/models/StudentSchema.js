const mongoose = require('mongoose')

let Schema = mongoose.Schema
const StudentSchema = new Schema(
    {
        exam_name: {
            type: String,
            required: true
        },
        course_name: {
            type: String,
            required: true
        },
        question_num: {
            type: Number,
            required: true
        },
        ta_roll: {
            type: String,
            required: true
        },
        std_roll: {
            type: String,
            required: true
        },
        ta_comment: {
            type: String,
            required: true
        },
        std_comment: {
            type: String,
            required: true
        },
         IsActive: {
            type: Boolean,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student
