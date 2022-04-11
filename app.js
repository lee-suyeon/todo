import Model from './model.js';
import View from './view.js';
import Controller from './controller.js'

window.addEventListener('DOMContentLoaded', function() {
  console.log("success window onload");
  const model = new Model();
  const view = new View(model);
  new Controller(model, view);
});