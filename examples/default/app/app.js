import angular from 'angular';
import 'imhere-angular-wizard';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($log) {
    this.$log = $log;
    this.url = 'https://github.com/preboot/angular-webpack';
  }
  finish() {
    $log.debug('finish');
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'imhere-angular-wizard',
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
