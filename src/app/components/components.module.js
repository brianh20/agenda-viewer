import angular from 'angular';
import { DisplayModule } from './display/display.module';

export const ComponentsModule = angular
  .module('app.components', [DisplayModule])
  .name;
