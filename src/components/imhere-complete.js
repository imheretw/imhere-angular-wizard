import angular from 'angular';

class Controller {

  constructor() {
  }
  $onInit() {
    this.showAnimation = (this.disableHoverClass) ? false : true;
  }
  complete() {
    this.wizardCtrl.complete();
  }

}

const component = {
  bindings: {
    disableHoverClass:'<',
    customeClass:'@',
  },
  restrict: 'EA',
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard'
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-complete.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-complete', [])
  .component('imhereComplete', component);
