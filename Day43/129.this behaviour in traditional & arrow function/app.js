var _this = this;
function trFunction() {
    console.log(this);
}
trFunction.call({ Function: 'Traditional' });
var arrowFun = function () {
    console.log(_this);
};
arrowFun.call({ Function: 'Arrow' });
