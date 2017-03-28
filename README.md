# imhere-angular-wizard

[![Dependency Status](https://david-dm.org/preboot/angular-webpack/status.svg)](https://david-dm.org/preboot/angular-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular-webpack/dev-status.svg)](https://david-dm.org/preboot/angular-webpack#info=devDependencies)

Imhere-Angular-wizard is a component that will make it easy for you to create wizards in your app. You can check a running example of the wizard [by clicking here](https://imheretw.github.io/imhere-angular-wizard/)

# How do I add this to my project?
You can download this by:

* Using bower and running `bower install imhere-angular-wizard`
* Using npm and running `npm install imhere-angular-wizard`
* Downloading it manually by getting the files from the dist folder

The dist folder contains the following files:

* JS files needed for the directives and services
* CSS files with default styles for the directive

# Dependencies
Imhere-Angular-wizard depends on Angular.

# Starter Guide

## First example

The first thing we need to do is add a dependency to imhere-angular-wizard module which is called `imhere-angular-wizard`.

We can do this simply by doing:

````js
angular.module('your-app', ['imhere-angular-wizard']);
````

Now, in some HTML for a controller, you can just add a wizard as follows:

````html
<imhere-wizard on-finish="app.finish()" >
  <div class="row">
    <div class="col-md-12">
      <imhere-steps-nav>
        <imhere-step-btn ng-repeat="step in [1,2,3] track by $index" step-index="$index"></imhere-step-btn>
      </imhere-steps-nav>
    </div>
    <div class="col-md-12">
      <imhere-step title="Default step button">
        <h1>Default step button</h1>
        <p>You have continued here!</p>
        <imhere-next>NEXT </imhere-next>
      </imhere-step>
      <imhere-step title="Step1">
        <h1>Step1</h1>
        <p>You have continued here!</p>
        <imhere-pre>BACK</imhere-pre>
        <imhere-next>NEXT</imhere-next>
      </imhere-step>
      <imhere-step title="Step2">
        <h1>Step2</h1>
        <p>Click Complete will trigger onFinsh function</p>
        <imhere-pre>BACK</imhere-pre>
        <imhere-complete>Complete</imhere-complete>
      </imhere-step>
      <imhere-step-complete>
        <h1>Complete!</h1>
        <p>display what you want</p>
        <imhere-reset>RESET</imhere-reset>
      </imhere-step-complete>
    </div>
  </div>
</imhere-wizard>
````

This will look like the following when you're in the second step:

[![Looks like](https://cloud.githubusercontent.com/assets/5419010/24394236/c5e51336-13cd-11e7-8359-adf80574a318.png)](https://cloud.githubusercontent.com/assets/5419010/24394236/c5e51336-13cd-11e7-8359-adf80574a318.png)

Let's go step by step to see how this works.

1) You need to declare a master `imhere-wizard` directive. This wizard directive, has the following options as attributes:
* **on-finish**: Here you can put a function to be called when the wizard is finished. The syntax here is very similar to `ng-click`
* **set-main-color**: Here you can set the wizard main color style.
* **set-main-hover-Color**: Here you can set the wizard buttons hover color style. Default darken(main-color).

2)`imhere-step`, Inside the wizard, we can have as many steps as we want. Each step MUST have a title which is going to be used to identify it. Inside each step, we can put whatever we want. Other directives, bindings, controls, forms, etc.  Each step can have the following attributes (we will go into detail on each further below):
* **title:** A unique title used for identifying each step.
