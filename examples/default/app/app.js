
import angular from 'angular';
import 'imhere-angular-wizard';

import '../style/app.css';

const app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app',
  };
};

class AppCtrl {
  /*@ngInject*/
  constructor($log) {
    this.$log = $log;
    this.checkPass = false;
    this.url = 'https://github.com/preboot/angular-webpack';
    this.ageCheckFail = false;
  }
  finish() {
    this.$log.debug('finish');
  }
  check() {
    return !this.checkPass;
  }
  setCheckPass() {
    this.checkPass = true;
  }
  lockCheckPass() {
    this.checkPass = false;
  }

  checkAge(form) {
    this.ageCheckFail = form.exampelAge < 18;
    return form.$invalid || this.ageCheckFail;
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['imhere-angular-wizard'])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);
export default MODULE_NAME;
