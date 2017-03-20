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
