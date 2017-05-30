import angular from 'angular';
import { ComponentsModule } from './components/components.module';

//Services
//import { EmployeeSearchDataservice } from './services/employee-search.service';


import less from '../styles/styles.less'; // eslint-disable-line

export const App = angular
  .module('app', [
    ComponentsModule
  ])
//  .service('EmployeeSearchDataservice', EmployeeSearchDataservice)
  .run();