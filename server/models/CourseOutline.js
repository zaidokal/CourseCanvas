const mongoose = require('mongoose');

const CourseOutlineSchema = new mongoose.Schema({
    course_code: {
        type: String,
        required: true
    },
    course_title: {
        type: String,
        required: true
    },
    years: {
        type: String,
        required: true
    },
    contact_hours: {
        type: String,
        required: true
    },
    antirequisite: {
        type: String,
        required: true
    },
    prerequisite: {
        type: String,
        required: true
    },
    corequisite: {
        type: String,
        required: true
    },
    ceab_units: {
        type: String,
        required: true
    },
    textbook: {
        type: String,
        required: true
    },
    other_required_references: {
        type: String,
        required: true
    },
    recommended_references: {
        type: String,
        required: true
    },
    assessments: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    late_submission: {
        type: String,
        required: true
    },
    submission_locker: {
        type: String,
        required: true
    },
    ceab_attributes: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    ceab_attributes: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    learning_outcomes: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    electronic_devices: {
        type: String,
        required: true
    },
    personal_response: {
        type: String,
        required: true
    },
});

module.exports = Memory = mongoose.model('courseOutline', CourseOutlineSchema);