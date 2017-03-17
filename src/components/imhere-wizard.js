import angular from 'angular';

class Controller {

  constructor() {
    if (this.indicatorsPosition === undefined) {
        this.indicatorsPosition = 'bottom';
    }
  }



}

const component = {
  bindings: {
    indicatorsPosition: '@?'
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-wizard.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-wizard', [])
  .component('imhereWizard', component);
