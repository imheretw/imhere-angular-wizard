import angular from 'angular';

class Controller {

  constructor() {
  }


}

const component = {
  bindings: {
  },
  restrict: 'EA',
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard'
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-current-step.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-current-step', [])
  .component('imhereCurrentStep', component);
