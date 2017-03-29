import angular from 'angular';

class Controller {

  isSelected(index) {
    return this.wizardCtrl.currentStep === index + 1;
  }
}

const component = {
  bindings: {},
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard',
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-steps-dotted.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-steps-dotted', [])
  .component('imhereStepsDotted', component);
