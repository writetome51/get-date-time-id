"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var res = index_1.getDateTimeID();
console.log(res);
res = index_1.getDateTimeID({ ymdOrder: 'mdy' });
console.log(res);
res = index_1.getDateTimeID({ ymdOrder: 'mdy', hmsOrder: 'smh', separateEach: true, separator: '*' });
console.log(res);
res = index_1.getDateTimeID({
    ymdOrder: 'mdy',
    separateEach: true,
    includeTimezoneOffset: false
});
console.log(res);
res = index_1.getDateTimeID({
    includeFullYear: true,
    hmsOrder: 'msh',
    separator: ''
});
console.log(res);
res = index_1.getDateTimeID({
    includeFullYear: true,
    includeTimezoneOffset: false
});
console.log(res);
