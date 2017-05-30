import template from './display.html';

export const DisplayComponent = {
  bindings: {
      message: '<'
  },
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
    			this.contacts = response.data;
    		}, ()=> {
    			console.log('Error resolving response');
    		});
    }
  }
};

