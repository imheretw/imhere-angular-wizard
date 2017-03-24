import angular from 'angular';

class Controller {

  constructor() {
  }
  $onInit() {
    this.stepIndex =  this.wizardCtrl.steps.length + 1;
    this.wizardCtrl.steps.push({ title:this.title, disabled:this.disabled });
  }

}

const component = {
  bindings: {
    title: '@',
    disabled: '<',
  },
  require: {
    wizardCtrl: '^imhereWizard'
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-step.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-step', [])
  .component('imhereStep', component);
