import angular from 'angular';
import imhereWizard from './imhere-wizard';
import imhereStep from './imhere-step';
import imhereStepBtn from './imhere-step-btn';
import imhereCurrentStep from './imhere-current-step';
import imhereTotalStep from './imhere-total-step';
import imhereNext from './imhere-next';
import imherePre from './imhere-pre';
import imhereComplete from './imhere-complete';
import imhereStepsDotted from './imhere-steps-dotted';
import imhereStepsNav from './imhere-steps-nav';

import './imhere-wizard.css';
import './imhere-hover-animation.css';

export default angular
  .module('imhere-angular-wizard', [
    imhereWizard.name,
    imhereStep.name,
    imhereStepBtn.name,
    imhereCurrentStep.name,
    imhereTotalStep.name,
    imhereNext.name,
    imherePre.name,
    imhereComplete.name,
    imhereStepsDotted.name,
    imhereStepsNav.name,
  ]);
