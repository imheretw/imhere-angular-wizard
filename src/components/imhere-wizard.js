import angular from 'angular';

class Controller {

  constructor() {
     // from imhere-step-component
     this.steps = [];
     this.currentStep = 1;

  }

  isCurrentStep(index) {
    return index === this.currentStep;
  }

  setCurrentStep(index) {
    this.currentStep = index;
  }

  nextStep() {
    this.currentStep = this.currentStep%this.steps.length+1;
  }
  preStep() {
    if(this.currentStep > 1){
      this.currentStep = this.currentStep-1;
    }
  }
  complete() {
    this.onFinish();
  }

}

const component = {
  bindings: {
    onFinish: '&',
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-wizard.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-wizard', [])
  .component('imhereWizard', component);
