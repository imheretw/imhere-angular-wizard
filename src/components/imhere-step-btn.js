import angular from 'angular';

class Controller {

  isSelected() {
    return this.wizardCtrl.currentStep === this.stepIndex + 1;
  }

}

const component = {
  bindings: {
    stepIndex: '<',
    customeClass: '@',
  },
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard',
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-step-btn.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-step-btn', [])
  .component('imhereStepBtn', component);
