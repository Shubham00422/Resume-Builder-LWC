import { LightningElement, track } from 'lwc';

export default class EducationDetail extends LightningElement {
    @track educations = [
        {
            id: 0,
            degree: '',
            institute: '',
            year: ''
        }
    ];

    handleClick() {
        const nextId = this.educations.length;
        this.educations = [
            ...this.educations,
            {
                id: nextId,
                degree: '',
                institute: '',
                year: ''
            }
        ];
        this.updateResume();
    }

    handleChange(event) {
        const index = event.target.dataset.index;
        const field = event.target.name;
        const value = event.target.value;

        this.educations[index][field] = value;

        // Trigger reactivity
        this.educations = [...this.educations];
        this.updateResume();
    }

    updateResume() {
        this.dispatchEvent(new CustomEvent('updateeducation', {
            detail: this.educations
        }));
    }
}




