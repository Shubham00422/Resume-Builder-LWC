import { LightningElement } from 'lwc';

export default class PersonalInfo extends LightningElement {
    fullName = '';
    email = '';
    phone = '';
    address = '';

    handleChange(event) {
        const field = event.target.name;
        this[field] = event.target.value;

        this.dispatchEvent(new CustomEvent('updatepi', {
            detail: {
                fullName: this.fullName,
                email: this.email,
                phone: this.phone,
                address: this.address
            }
        }));
    }
}

    