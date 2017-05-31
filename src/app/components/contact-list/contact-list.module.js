import angular from 'angular';
import { ContactListComponent }    from './contact-list.component';

export const ContactListModule = angular
  .module('contactList.module', [
  ])
  .component('contactList', ContactListComponent)
  .name;