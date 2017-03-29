import angular from 'angular';

class Controller {

}

const component = {
  bindings: {
    vertical: '<',
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-steps-nav.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-steps-nav', [])
  .component('imhereStepsNav', component);
