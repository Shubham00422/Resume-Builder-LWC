import { LightningElement, track } from 'lwc';

export default class Skills extends LightningElement {
    @track skills = [
        {
            id: 0,
            name: ''
        }
    ];

    handleSkillChange(event) {
        let index = event.target.dataset.index;
        let value = event.target.value;

        this.skills[index] = {
            ...this.skills[index],
            name: value
        };

        this.skills = [...this.skills]; // 🔥 Force re-render

        this.updateResume();
    }

    addSkill() {
        console.log('Add Skill 1');
        let nextIndex = this.skills.length;

        // ✅ Correct reactive update
        this.skills = [...this.skills, { id: nextIndex, name: '' }];

        console.log('Add Skill 3');
        this.updateResume();
    }

    updateResume() {
        const updateSkillsEvt = new CustomEvent('updateskills', {
            detail: this.skills
        });
        this.dispatchEvent(updateSkillsEvt);
    }
}


