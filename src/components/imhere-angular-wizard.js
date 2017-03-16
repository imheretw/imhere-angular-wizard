import angular from 'angular';

class Controller {
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: `
  <div>
    Imhere Component
  </div>
  `,
};

export default angular
  .module('imhere-angular-wizard.imhere-wizard', [])
  .component('imhereWizard', component);
