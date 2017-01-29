var addresses = require('./addresses');

var result = [];

const regex = /^\s*?(?:ул.|ул|пл.|пр-т.|пр-т|пер.|пл|)\s*([0-9а-яёА-ЯЁa-zA-Z.-\s]*)\s*,*\s*(?:дом)*\s*([0-9А-ЯЁa-zA-Z-]*)(?:\/|,)*\s*?(?:кв.)*\s*([0-9А-ЯЁa-zA-Z-]*)/;
addresses.map(function (item) {
    item = item.trim();
    if(!regex.test(item)){
        console.log(item);
    }else{
        let list = regex.exec(item);
        let obj = {};
        obj.street = list[1];
        obj.house = list[2];
        obj.flat = '';
        obj.flat = list[3];
        result.push(obj);
    }

});

module.exports = result;








