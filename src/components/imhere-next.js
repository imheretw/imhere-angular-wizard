import angular from 'angular';

class Controller {

  constructor() {
  }

  next(){
    this.wizardCtrl.nextStep();
  }

}

const component = {
  bindings: {
  },
  restrict: 'EA',
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard'
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-next.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-next', [])
  .component('imhereNext', component);
