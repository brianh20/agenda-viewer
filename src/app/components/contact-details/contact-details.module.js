import angular from 'angular';
import { ContactDetailsComponent }    from './contact-details.component';

export const ContactDetailsModule = angular
  .module('contactDetails.module', [
  ])
  .component('contactDetails', ContactDetailsComponent)
  .name;