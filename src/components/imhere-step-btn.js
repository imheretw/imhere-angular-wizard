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
  template: require('./imhere-step-btn.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-step-btn', [])
  .component('imhereStepBtn', component);
