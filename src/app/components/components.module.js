import angular from 'angular';
import { DisplayModule } from './display/display.module';
import { ContactListModule} from './contact-list/contact-list.module';

export const ComponentsModule = angular
  .module('app.components', [
  	DisplayModule,
  	ContactListModule])
  .name;
