import angular from 'angular';

class Controller {

  $onInit() {
    this.showAnimation = !this.disableHoverClass;
  }
  complete() {
    if (!this.disabled) {
      this.wizardCtrl.complete();
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
  template: require('./imhere-complete.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-complete', [])
  .component('imhereComplete', component);
