import angular from 'angular';
import imhereWizard from './imhere-wizard';
import imhereStep from './imhere-step';

import './imhere-wizard.css';

export default angular
  .module('imhere-angular-wizard', [
    imhereWizard.name,
    imhereStep.name,
  ]);
