const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const MunrosModel = function () {
  this.data = null;
};

MunrosModel.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/api/munros`;
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
    .then((munros) => {
      this.data = munros;
      PubSub.publish('Munros:munros-data-ready', this.data);
    })
    .catch((err) => {
      PubSub.publish('Munros:error', err);
    });
};


module.exports = MunrosModel;
