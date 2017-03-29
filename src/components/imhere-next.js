import angular from 'angular';

class Controller {
  $onInit() {
    this.showAnimation = !this.disableHoverClass;
  }

  next() {
    if (!this.disabled) {
      this.wizardCtrl.nextStep();
    }
  }

}

const component = {
  bindings: {
    disableHoverClass: '<',
    customeClass: '@',
    disabled: '=',
  },
  restrict: 'EA',
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard',
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-next.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-next', [])
  .component('imhereNext', component);
