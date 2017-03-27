import angular from 'angular';

class Controller {

  constructor() {
  }
  $onInit() {
    this.showAnimation = (this.disableHoverClass) ? false : true;
  }

  reset(){
    if( !this.disabled ){
      this.wizardCtrl.setCurrentStep(1);
      this.wizardCtrl.completeWizard = false;
    }
  }

}

const component = {
  bindings: {
    disableHoverClass:'<',
    customeClass:'@',
    disabled:'=',
  },
  restrict: 'EA',
  transclude: true,
  require: {
    wizardCtrl: '^imhereWizard',
  },
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-reset.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-reset', [])
  .component('imhereReset', component);
