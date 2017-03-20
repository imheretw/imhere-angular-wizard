import angular from 'angular';

class Controller {

  constructor() {

  }
  $onInit() {
    this.isSelected = this.wizardCtrl.isCurrentStep(this.stepIndex);
  }

  goto() {
    this.wizardCtrl.setCurrentStep(this.stepIndex);
  }


}

const component = {
  bindings: {
    stepIndex: '<',
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
