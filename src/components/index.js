import angular from 'angular';
import imhereWizard from './imhere-wizard';
import imhereStep from './imhere-step';
import imhereSelectSteps from './imhere-select-steps'
import imhereStepBtn from './imhere-step-btn';
import imhereCurrentStep from './imhere-current-step';

import './imhere-wizard.css';

export default angular
  .module('imhere-angular-wizard', [
    imhereWizard.name,
    imhereStep.name,
    imhereSelectSteps.name,
    imhereStepBtn.name,
    imhereCurrentStep.name,
  ]);
