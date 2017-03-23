import angular from 'angular';

class Controller {

  constructor() {
  }
  
}

const component = {
  bindings: {
  },
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard'
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-total-step.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-total-step', [])
  .component('imhereTotalStep', component);
