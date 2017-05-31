import template from './display.html';

export const DisplayComponent = {
  template,
  controller: class DisplayComponentController {
    constructor(ContactsService) {
    	'ngInject';

    	this.ContactsService = ContactsService;
    	this.Contacts = new this.ContactsService();
    }

    $onInit() {
    	this.results = this.Contacts
    		.get()
    		.then((response) => {
          console.log(response);
    			this.contacts = response.data;
    		}, ()=> {
    			console.log('Error resolving response');
    		});
    }

    displayInfo(contact) {
      this.contact = contact;
    }
  }
};

