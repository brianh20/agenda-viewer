import angular from 'angular';
import { AbsenceComponent }    from './absence.component';

export const AbsenceModule = angular
  .module('absence.module', [
  ])
  .component('absence', AbsenceComponent)
  .name;