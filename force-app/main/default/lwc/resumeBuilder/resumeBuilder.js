import { LightningElement } from 'lwc';

export default class ResumeBuilder extends LightningElement {
    personalInfo = {};
    summary = '';
    skills = [];
    educations = [];
    workExperiences = [];

    handleUpdatePI(event) {
        this.personalInfo = event.detail;
    }

    handleUpdateSummary(event) {
        this.summary = event.detail;
    }

    handleUpdateSkills(event) {
        this.skills = event.detail;
    }

    handleUpdateEducation(event) {
        this.educations = event.detail;
    }

    handleUpdateWorkExperience(event) {
        this.workExperiences = event.detail;
    }
}
