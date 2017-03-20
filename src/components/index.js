import angular from 'angular';
import imhereWizard from './imhere-wizard';
import imhereStep from './imhere-step';
import imhereStepBtn from './imhere-step-btn';
import imhereCurrentStep from './imhere-current-step';
import imhereTotalStep from './imhere-total-step';
import imhereNext from './imhere-next';

import './imhere-wizard.css';

export default angular
  .module('imhere-angular-wizard', [
    imhereWizard.name,
    imhereStep.name,
    imhereStepBtn.name,
    imhereCurrentStep.name,
    imhereTotalStep.name,
    imhereNext.name,
  ]);
