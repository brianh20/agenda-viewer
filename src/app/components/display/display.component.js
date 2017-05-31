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
        //Init Contact List
        this.results = this.Contacts
        .get()
        .then((response) => {
          this.contacts = response.data;
        }, ()=> {
          console.log('Error resolving response');
        });

        //Check for mobile in order to wireFrame
        if (window.innerWidth < 400) {
            this.mobileDisplay = true;
        }
    }

    displayInfo(contact) {
      this.contact = contact;
      if (this.mobileDisplay) {
        this.hideList = true;
      }
    }

    showList() {
      this.contact=undefined;
      this.hideList=false;
    }
  }
};

