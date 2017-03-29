import angular from 'angular';

class Controller {
}

const component = {
  bindings: {
  },
  require: {
    wizardCtrl: '^imhereWizard',
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: '<div class="imhere-steps-container" ng-show="vm.wizardCtrl.completeWizard"><ng-transclude></ng-transclude></div>',
};

export default angular
  .module('imhere-angular-wizard.imhere-step-complete', [])
  .component('imhereStepComplete', component);
