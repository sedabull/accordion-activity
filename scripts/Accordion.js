class Accordion {

    constructor(summary, details) {
        this.details = JSON.stringify(details);
        this.summary = summary;
        this.element = null;
        this.generate();
    }//end constructor

    generate() {
        const detailsElement = document.createElement('details');
        const summaryElement = document.createElement('summary');
        
        detailsElement.append(summaryElement);
        summaryElement.append(this.summary);
        detailsElement.append(this.details);
        
        this.element = detailsElement;
    }//end generate

    appendTo(parent) {
        parent.append(this.element);
    }//end appendTo

    getElement() {
        return this.element;
    }//end getElement

    toString() {
        return this.summary;
    }//end toString

}//end class Accordion