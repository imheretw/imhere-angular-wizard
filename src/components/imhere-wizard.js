import angular from 'angular';

class Controller {

  constructor() {
     // from imhere-step-component
     this.steps = [];
     this.currentStep = 1;
     this.completeWizard = false;

  }
  $onInit() {
    this.mainColor = (this.setMainColor) ? this.setMainColor : '#59bfb3';
    this.mainHoverColor = (this.setMainHoverColor) ? this.setMainHoverColor : this.lightenDarkenColor(this.mainColor,-20);
  }

  lightenDarkenColor (col, amt) {
  	let usePound = false;
  	if (col[0] == "#") {
  		col = col.slice(1);
  		usePound = true;
  	}
  	let num = parseInt(col, 16);
  	let r = (num >> 16) + amt;
  	if (r > 255) {
  		r = 255;
  	} else if (r < 0) {
  		r = 0;
  	}
  	let b = ((num >> 8) & 0x00FF) + amt;
  	if (b > 255) {
  		b = 255;
  	} else if (b < 0) {
  		b = 0;
  	}
  	let g = (num & 0x0000FF) + amt;
  	if (g > 255) {
  		g = 255;
  	} else if (g < 0) {
  		g = 0;
  	}
  	return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
  }

  isCurrentStep(index) {
    return index === this.currentStep;
  }

  setCurrentStep(index) {
    this.currentStep = index;
  }

  nextStep() {
    this.currentStep = this.currentStep%this.steps.length+1;
  }
  preStep() {
    this.currentStep = this.currentStep-1;
  }
  complete() {
    this.onFinish();
    this.completeWizard = true;
  }

}

const component = {
  bindings: {
    onFinish: '&',
    setMainColor: '@',
    setMainHoverColor: '@',
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: require('./imhere-wizard.html'),
};

export default angular
  .module('imhere-angular-wizard.imhere-wizard', [])
  .component('imhereWizard', component);
