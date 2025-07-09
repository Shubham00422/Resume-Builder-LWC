import { LightningElement, track } from 'lwc';

export default class WorkExperience extends LightningElement {
    @track workExperiences = [
        {
            id: 0,
            title: '',
            name: '',
            startDate: '',
            endDate: ''
        }
    ];

    addWorkExperience() {
        const nextId = this.workExperiences.length;
        this.workExperiences = [
            ...this.workExperiences,
            {
                id: nextId,
                title: '',
                name: '',
                startDate: '',
                endDate: ''
            }
        ];

        this.updateResume(); // ✅ Add this
    }

    handleWorkExperienceChange(event) {
        const index = event.target.dataset.index;
        const field = event.target.name;
        const value = event.target.value;

        this.workExperiences[index] = {
            ...this.workExperiences[index],
            [field]: value
        };

        this.workExperiences = [...this.workExperiences];
        this.updateResume(); // ✅ Add this
    }

    updateResume() {
        const evt = new CustomEvent('updateworkexperience', {
            detail: this.workExperiences
        });
        this.dispatchEvent(evt);
    }
}
