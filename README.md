# getDateTimeID(options?): string

```ts
// options:
{
    includeFullYear?: boolean, // default false
    ymdOrder?: 'ymd' | 'ydm' | 'myd' | 'mdy' | 'dym' | 'dmy', // default 'ymd'
    hmsOrder?: 'hms' | 'hsm' | 'msh' | 'mhs' | 'smh' | 'shm', // default 'hms'
    separator?: string, // default '-' 
    separateEach?: boolean // default false
}
```

# getDefaultsFor_getDateTimeIDOptions():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object

Returns default options for `getDateTimeID()`.


## Examples
```ts
getDateTimeID();
// --> '190522-142210'

getDateTimeID({ymdOrder: 'mdy'});
// --> '052219-142210'

getDateTimeID({ymdOrder: 'mdy', separator: ''});
// --> '052219142210'

getDateTimeID({ymdOrder: 'mdy', separateEach: true});
// --> '05-22-19-14-22-10'
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
