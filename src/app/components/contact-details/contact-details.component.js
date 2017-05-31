import template from './contact-details.html';

export const ContactDetailsComponent = {
  bindings: {
    contact: '<',
    isMobile:'<',
    returnList: '&'
  },
  template,
  controller: class ContactDetailsController {
    returnToList() {
      console.log('goingbakc');
      this.returnList();
    }
  }
};

