import { getDateTimeID} from './index';


let res = getDateTimeID();

console.log(res);

res = getDateTimeID({ymdOrder: 'mdy'});

console.log(res);


res = getDateTimeID({ymdOrder: 'mdy', hmsOrder: 'smh', separateEach: true, separator: '*'});
console.log(res);


res = getDateTimeID({
	ymdOrder: 'mdy',
	separateEach: true,
	includeTimezoneOffset:false
});
console.log(res);


res = getDateTimeID({
	includeFullYear: true,
	hmsOrder: 'msh',
	separator: ''
});
console.log(res);


res = getDateTimeID({
	includeFullYear: true,
	includeTimezoneOffset:false
});
console.log(res);
