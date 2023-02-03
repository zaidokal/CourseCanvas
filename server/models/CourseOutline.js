const mongoose = require('mongoose');

const CourseOutlineSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    instructor_details: {
        type: String,
        required: true
    },
    consult_hours: {
        type: String,
        required: true
    },
    academic_calendar: {
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
    knowledge_base: {
        type: String,
        required: true
    },
    engineering_tools: {
        type: String,
        required: true
    },
    impact: {
        type: String,
        required: true
    },
    problem_analysis: {
        type: String,
        required: true
    },
    individual_teamwork: {
        type: String,
        required: true
    },
    ethics_equity: {
        type: String,
        required: true
    },
    investigation: {
        type: String,
        required: true
    },
    communication_skills: {
        type: String,
        required: true
    },
    economics_project: {
        type: String,
        required: true
    },
    design: {
        type: String,
        required: true
    },
    professionalism: {
        type: String,
        required: true
    },
    life_long: {
        type: String,
        required: true
    },
    topics: {
        type: mongoose.Schema.Types.Mixed,
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
    lockerNum: {
        type: String,
        required: true
    },
    electronic_devices: {
        type: String,
        required: true
    },
    clickers: {
        type: String,
        required: true
    },
});

module.exports = Memory = mongoose.model('courseOutline', CourseOutlineSchema);