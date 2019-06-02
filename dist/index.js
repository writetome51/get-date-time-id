"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_date_id_time_id_1 = require("@writetome51/get-date-id-time-id");
var year_separator_options_1 = require("@writetome51/year-separator-options");
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var modify_object_1 = require("@writetome51/modify-object");
// Returns current date and time as string of digits.
// Default format is yymmdd-hhmmss, i.e '190522-142210'  for May 22, 2019, 2:22pm and 10 seconds.
//
// Default `options`:  {
//				includeFullYear: false, ymdOrder: 'ymd', hmsOrder: 'hms',
//				separator: '-', separateEach: false
//			}
//
// Change the order that year, month, day appear using `ymdOrder`.
// Change the order that hour, minutes, seconds appear using `hmsOrder`.
// `separator` can be any string.
// `separateEach` gives you the option of separating each part like so:  'yy-mm-dd-hh-mm-ss'.
function getDateTimeID(
// If left undefined, we use `defaults`.
options) {
    if (options === void 0) { options = undefined; }
    var defaults = getDefaultsFor_getDateTimeIDOptions();
    if (has_value_no_value_1.hasValue(options))
        modify_object_1.modifyObject(defaults, options);
    defaults['order'] = defaults.ymdOrder;
    var dateID = get_date_id_time_id_1.getDateID(defaults);
    defaults['order'] = defaults.hmsOrder;
    var timeID = get_date_id_time_id_1.getTimeID(defaults);
    return (dateID + defaults.separator + timeID);
}
exports.getDateTimeID = getDateTimeID;
function getDefaultsFor_getDateTimeIDOptions() {
    var defaults = year_separator_options_1.getDefaultsFor_YearSeparatorOptions();
    defaults['ymdOrder'] = get_date_id_time_id_1.getDefaultsFor_getDateIDOptions().order;
    defaults['hmsOrder'] = get_date_id_time_id_1.getDefaultsFor_getTimeIDOptions().order;
    return defaults;
}
exports.getDefaultsFor_getDateTimeIDOptions = getDefaultsFor_getDateTimeIDOptions;
