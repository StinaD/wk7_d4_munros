const PubSub = require('../helpers/pub_sub.js');


const SelectRegion = function(element){
  this.element = element;
};

SelectRegion.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-data-ready', (event) => {
    const allMunros = event.detail;
    const regionOptions = this.regions(allMunros);
    this.populate(regionOptions);
  });
  // this.element.addEventListener('change', (event) => {
  //   const selectedIndex = event.target.value
  // })
};

SelectRegion.prototype.regions = function (munroData) {
  const options = munroData.map((munro) => {
    return munro.region;
  })
  .filter((region, index, array) => {
    return array.indexOf(region) === index;
  });
  return options;
  // this.element.appendChild(options);
};

SelectRegion.prototype.populate = function (array) {
  array.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = index;
    this.element.appendChild(option);
  })
};


module.exports = SelectRegion;
