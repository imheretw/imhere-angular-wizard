import angular from 'angular';

class Controller {

  constructor() {

  }
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-step.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-step', [])
  .component('imhereStep', component);
