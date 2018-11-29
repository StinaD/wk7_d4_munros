const MunroListView = require('./views/munro_list_view.js');
const MunrosModel = require('./models/munros_model.js');
const SelectRegion = require('./views/select_region.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munrosListContainer = document.querySelector('#munros-display');
  const munrosListView = new MunroListView(munrosListContainer);
  munrosListView.bindEvents();

  const munros = new MunrosModel();
  munros.getData();

  const selectElement = document.querySelector('select#regions-dropdown');
  const regionsDropdown = new SelectRegion(selectElement);
  regionsDropdown.bindEvents();

});
