import angular from 'angular';
import { AbsenceModule } from './absence/absence.module';

export const ComponentsModule = angular
  .module('app.components', [
    AbsenceModule
  ])
  .name;
