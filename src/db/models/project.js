const mongoose = require('mongoose');

const Project = mongoose.model('Projects', {
    projectName: {
        type: String,
        trim: true,
        required: [true, `ProjectName's required`],
    },
    projectCompany: {
        type: String,
        trim: true,
        required: [true, `ProjectCompany's required`],
    },
    projectCustomerCode: {
        type: String,
        trim: true,
        required: false,
    },
    projectContractType: {
        type: String,
        trim: true,
        required: false,
    },
    projectUrl: {
        type: String,
        trim: true,
        required: false,
    },
    projectType: {
        type: String,
        trim: true,
        required: false,
    },
    projectTechnology: {
        type: String,
        trim: true,
        required: false,
    },
    projectTeamSize: {
        type: Number,
        trim: true,
        required: false,
    },
    projectStartDate: {
        type: String,
        trim: true,
        required: false,
    },
    projectEndDate: {
        type: String,
        trim: true,
        required: false,
    },
    startDate: {
        type: String,
        trim: true,
        required: false,
    },
    endDate: {
        type: String,
        trim: true,
        required: false,
    },
    jobDescription: {
        type: String,
        trim: true,
        required: false,
    },
    skills: [{
        skillId: String,
        skillName: String,
        isDeleted: Boolean

    }],
    projectRoleId: {
        type: String,
        trim: true,
        required: false,
    },
    projectRoleName: {
        type: String,
        trim: true,
        required: false,
    },
    domain: {
        type: String,
        trim: true,
        required: false,
    },
    isDeleted: {
        type: Boolean,
        trim: true,
        required: false,
    },
    projectSkill: {
        type: String,
        trim: true,
        required: false,
    },
    projectJobTitles: {
        type: [String],
        trim: true,
        required: false,
    },
    workingProcess: {
        type: [String],
        trim: true,
        required: false,
    },
    // resumeProjectRole: {
    //     type: [String],
    //     trim: true,
    //     required: false,
    // },
    resumeProjectRole: [{
        resumeProjectRoleMappingId: String,
        projectRoleId: String,
        projectRoleDisplayName: String
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    }
});

module.exports = Project