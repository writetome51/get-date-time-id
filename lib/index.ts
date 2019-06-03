import {
	getDateID, getTimeID, getDefaultsFor_getDateIDOptions, getDefaultsFor_getTimeIDOptions
} from '@writetome51/get-date-id-time-id';
import { getDefaultsFor_YearSeparatorOptions } from '@writetome51/year-separator-options';
import { hasValue } from '@writetome51/has-value-no-value';
import { modifyObject } from '@writetome51/modify-object';
import { getDateTimeIDOptions } from './privy';


// Returns current date and time as string of digits.
// Default format is yymmdd-hhmmss-TZOffset, i.e '190522-142210-GMT+2'  for May 22, 2019, 2:22:10pm,
// in a time zone 2 hours ahead of GMT.
//
// Default `options`:  {
//				includeFullYear: false, ymdOrder: 'ymd', hmsOrder: 'hms',
//				separator: '-', separateEach: false,  includeTimezoneOffset: true
//			}
//
// Change the order that year, month, day appear using `ymdOrder`.
// Change the order that hour, minutes, seconds appear using `hmsOrder`.
// `separator` can be any string.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.


export function getDateTimeID(
	// If left undefined, we use `defaults`.
	options: getDateTimeIDOptions = undefined
): string {

	let defaults = getDefaultsFor_getDateTimeIDOptions();
	if (hasValue(options)) modifyObject(defaults, options);

	defaults['order'] = defaults.ymdOrder; // getDateID() requires 'order' property.
	let dateID = getDateID(defaults);

	defaults['order'] = defaults.hmsOrder; // getTimeID() requires 'order' property.
	let timeID = getTimeID(defaults);

	return (dateID + defaults.separator + timeID);
}


export function getDefaultsFor_getDateTimeIDOptions(): getDateTimeIDOptions {
	let defaults = getDefaultsFor_YearSeparatorOptions();
	defaults['ymdOrder'] = getDefaultsFor_getDateIDOptions().order;

	let defaultsFor_getTimeIDOptions = getDefaultsFor_getTimeIDOptions();
	defaults['hmsOrder'] = defaultsFor_getTimeIDOptions.order;
	defaults['includeTimezoneOffset'] = defaultsFor_getTimeIDOptions.includeTimezoneOffset;

	return defaults;
}
