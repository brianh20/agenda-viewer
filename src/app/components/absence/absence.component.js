import template from './absence.html';

export const AbsenceComponent = {
  bindings: {
      message: '<'
  },
  template,
  controller: class AbsenceComponentController {
    constructor() {
    }
  }
};
