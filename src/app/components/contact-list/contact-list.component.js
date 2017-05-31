import template from './contact-list.html';

export const ContactListComponent = {
  bindings: {
  	contacts: '<',
  	showContact: '&'
  },
  template,
  controller: class ContactListController {
  	showDetails(contact) {
  		this.showContact({contact});
  	}

  }
};

