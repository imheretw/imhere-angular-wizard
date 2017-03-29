import angular from 'angular';

class Controller {
  $onInit() {
    this.showAnimation = !this.disableHoverClass;
  }
  pre() {
    if (!this.disabled) {
      this.wizardCtrl.preStep();
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
  template: require('./imhere-pre.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-pre', [])
  .component('imherePre', component);
