/*jshint unused: false */
'use strict';
var DRIVY = DRIVY || {};

function render(actors) {
  var rendered = '';
  for (var i = 0; i < actors.length; i++) {
    rendered += '<p> <h3>' + actors[i].who + '</h3>';
    rendered += '<ul> <li> <b>Type: </b>' + actors[i].type + ' </li>';
    rendered += '<li> <b> Montant: </b>' + actors[i].amount + '</li> </ul></p>';
  }
  document.querySelector('#actors').innerHTML = rendered;
}
function showDialog() {
  var dialog = document.getElementById('result');
  var test = dialog.opened;
  if (dialog) {

    dialog.toggle();
  }
}
function compute() {
  var car = DRIVY.getCar();
  var begin = document.querySelector('#begin').value;
  var end = document.querySelector('#end').value;
  var distance = document.querySelector('#distance').value;
  var option = document.querySelector('#option').checked;

  var actors = DRIVY.payActors(car, begin, end, distance, option);

  render(actors);
  document.querySelector('#modelDisplay').innerHTML = DRIVY.model;
  return showDialog();
}
function clearFields() {
  var fields = document.getElementsByClassName('field');
  for (var i = 0; i < fields.length; i++) {
    fields[i].value = '';
  }
}
