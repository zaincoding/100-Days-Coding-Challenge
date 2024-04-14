var personObject = {
    name: 'Sammad',
    objProp: function () {
        return "".concat(this.name);
    }
};
console.log(personObject.objProp());
