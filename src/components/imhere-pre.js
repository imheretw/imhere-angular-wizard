import angular from 'angular';

class Controller {

  constructor() {
  }
  $onInit() {
    this.showAnimation = (this.disableHoverClass) ? false : true;
  }
  pre(){
    if( !this.disabled ){
      this.wizardCtrl.preStep();
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
  template: require('./imhere-pre.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-pre', [])
  .component('imherePre', component);
