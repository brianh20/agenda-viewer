import template from './absence.html';

export const AbsenceComponent = {
  bindings: {
      message: '<'
  },
  template,
  controller: class AbsenceComponentController {
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
    		}, ()=> {
    			console.log('error in component');
    		});
    }
  }
};

