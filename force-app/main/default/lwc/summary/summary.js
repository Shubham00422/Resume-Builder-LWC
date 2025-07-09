import { LightningElement } from 'lwc';

export default class Summary extends LightningElement {
    summary = ''; // ✅ lowercase variable

    handleSummaryChange(event) {
        console.log('Summary 1');
        this.summary = event.target.value;
        console.log('Summary 5', this.summary);

        this.updateResume();
        console.log('Summary 6');
    }

    updateResume() {
        console.log('Summary 7');
        const updateSummaryEvt = new CustomEvent('updatesummary', {
            detail: this.summary // ✅ send only string, not wrapped in object
        });
        console.log('Summary 8');
        this.dispatchEvent(updateSummaryEvt);
        console.log('Summary 9');
    }
}


    
