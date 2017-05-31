import angular from 'angular';
import { DisplayModule } from './display/display.module';
import { ContactListModule } from './contact-list/contact-list.module';
import { ContactDetailsModule } from './contact-details/contact-details.module';

export const ComponentsModule = angular
  .module('app.components', [
  	DisplayModule,
  	ContactListModule,
  	ContactDetailsModule])
  .name;
