const MunroView = function(container, munro){
  this.munroViewContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const munroName = document.createElement('h2');
  munroName.textContent = `Name: ${this.munro.name}`;
  munroContainer.appendChild(munroName);

  const munroHeight = document.createElement('h3');
  munroHeight.textContent = `Height: ${this.munro.height}metres`;
  munroContainer.appendChild(munroHeight);

  const munroMeaning = document.createElement('p');
  munroMeaning.textContent = `Meaning: ${this.munro.meaning}`;
  munroContainer.appendChild(munroMeaning);

  this.munroViewContainer.appendChild(munroContainer);
};

module.exports = MunroView;
