import angular from 'angular';

class Controller {

  constructor() {
    this.$onInit = function() {
      this.test = this.wizardCtrl.indicatorsPosition;
    };
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
  template: require('./imhere-select-steps.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-select-steps', [])
  .component('imhereSelectSteps', component);
