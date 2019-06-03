import { YearSeparatorOptions } from '@writetome51/year-separator-options';
import { DateFormatOrder, TimeFormatOrder } from 'types-date-format-order-time-format-order';


export interface getDateTimeIDOptions extends YearSeparatorOptions {
	ymdOrder?: DateFormatOrder;
	hmsOrder?: TimeFormatOrder;
	includeTimezoneOffset?: boolean;
}
