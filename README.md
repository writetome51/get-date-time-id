# getDateTimeID(options?): string

Returns current date and time as a string of digits.

```ts
// options:
{
    includeFullYear?: boolean, // default false
    ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy', // default 'ymd'
    hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm', // default 'hms'
    separator?: string, // default '-' 
    separateEach?: boolean, // default false
    includeTimezoneOffset: boolean, // default true
}
```

# getDefaultsFor_getDateTimeIDOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object

Returns default options for `getDateTimeID()`.


## Examples
```ts
getDateTimeID(); // Say date-time is May 22,2019, 2:22:10pm, in a time zone 2 hours ahead of GMT.
// --> '190522-142210-GMT+2'

getDateTimeID(); // Say date-time is May 22,2019, 2:22:10pm, in time zone 6 hours behind GMT.
// --> '190522-142210-GMT-6'

getDateTimeID({includeFullYear: true});
// --> '20190522-142210-GMT-6'

getDateTimeID({ymdOrder: 'mdy'});
// --> '052219-142210-GMT-6'

getDateTimeID({ymdOrder: 'mdy', separator: ''});
// --> '052219142210GMT-6'

getDateTimeID({ymdOrder: 'mdy', separateEach: true});
// --> '05-22-19-14-22-10-GMT-6'

getDateTimeID({ymdOrder: 'mdy', hmsOrder: 'smh', 
    separateEach: true, includeTimezoneOffset: false}
);
// --> '05-22-19-10-22-14'
```


## Installation
`npm i  @writetome51/get-date-time-id`

## Loading
```ts
// if using TypeScript:
import {getDateTimeID} from '@writetome51/get-date-time-id';
// if using ES5 JavaScript:
var getDateTimeID = require('@writetome51/get-date-time-id').getDateTimeID;
```
