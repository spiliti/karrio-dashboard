/* tslint:disable */
/* eslint-disable */
/**
 * Purplship API
 *  ## API Reference  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services.  The Purplship API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded  request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.  The Purplship API differs for every account as we release new versions. These docs are customized to your version of the API.   ## Versioning  When backwards-incompatible changes are made to the API, a new, dated version is released.  The current version is `2021.7`.   Read our API changelog and to learn more about backwards compatibility.  As a precaution, use API versioning to check a new API version before committing to an upgrade.   ## Pagination  All top-level API resources have support for bulk fetches via \"list\" API methods. For instance, you can list addresses,  list shipments, and list trackers. These list API methods share a common structure, taking at least these  two parameters: limit, and offset.  Purplship utilizes offset-based pagination via the offset and limit parameters. Both parameters take a number as value (see below) and return objects in reverse chronological order.  The offset parameter returns objects listed after an index.  The limit parameter take a limit on the number of objects to be returned from 1 to 100.   ```json {     \"next\": \"/v1/shipments?limit=25&offset=25\",     \"previous\": \"/v1/shipments?limit=25&offset=25\",     \"results\": [     ] } ```  ## Environments  The Purplship API offer the possibility to create and retrieve certain objects in `test_mode`. In development, it is therefore possible to add carrier connections, get live rates,  buy labels, create trackers and schedule pickups in `test_mode`.  
 *
 * The version of the OpenAPI document: 2021.7
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from '.';

/**
 * 
 * The payment details.<br/>
 * Note that this is required for a Dutiable parcel shipped internationally.
 * @export
 * @interface Duty
 */
export interface Duty {
    /**
     * The duty payer
     * @type {string}
     * @memberof Duty
     */
    paid_by?: DutyPaidByEnum;
    /**
     * The declared value currency
     * @type {string}
     * @memberof Duty
     */
    currency?: DutyCurrencyEnum;
    /**
     * The package declared value
     * @type {number}
     * @memberof Duty
     */
    declared_value?: number | null;
    /**
     * The duty payment account number
     * @type {string}
     * @memberof Duty
     */
    account_number?: string | null;
    /**
     * 
     * @type {Address}
     * @memberof Duty
     */
    bill_to?: Address;
}

/**
* @export
* @enum {string}
*/
export enum DutyPaidByEnum {
    Sender = 'sender',
    Recipient = 'recipient',
    ThirdParty = 'third_party'
}/**
* @export
* @enum {string}
*/
export enum DutyCurrencyEnum {
    Eur = 'EUR',
    Aed = 'AED',
    Usd = 'USD',
    Xcd = 'XCD',
    Amd = 'AMD',
    Ang = 'ANG',
    Aoa = 'AOA',
    Ars = 'ARS',
    Aud = 'AUD',
    Awg = 'AWG',
    Azn = 'AZN',
    Bam = 'BAM',
    Bbd = 'BBD',
    Bdt = 'BDT',
    Xof = 'XOF',
    Bgn = 'BGN',
    Bhd = 'BHD',
    Bif = 'BIF',
    Bmd = 'BMD',
    Bnd = 'BND',
    Bob = 'BOB',
    Brl = 'BRL',
    Bsd = 'BSD',
    Btn = 'BTN',
    Bwp = 'BWP',
    Byn = 'BYN',
    Bzd = 'BZD',
    Cad = 'CAD',
    Cdf = 'CDF',
    Xaf = 'XAF',
    Chf = 'CHF',
    Nzd = 'NZD',
    Clp = 'CLP',
    Cny = 'CNY',
    Cop = 'COP',
    Crc = 'CRC',
    Cuc = 'CUC',
    Cve = 'CVE',
    Czk = 'CZK',
    Djf = 'DJF',
    Dkk = 'DKK',
    Dop = 'DOP',
    Dzd = 'DZD',
    Egp = 'EGP',
    Ern = 'ERN',
    Etb = 'ETB',
    Fjd = 'FJD',
    Gbp = 'GBP',
    Gel = 'GEL',
    Ghs = 'GHS',
    Gmd = 'GMD',
    Gnf = 'GNF',
    Gtq = 'GTQ',
    Gyd = 'GYD',
    Hkd = 'HKD',
    Hnl = 'HNL',
    Hrk = 'HRK',
    Htg = 'HTG',
    Huf = 'HUF',
    Idr = 'IDR',
    Ils = 'ILS',
    Inr = 'INR',
    Irr = 'IRR',
    Isk = 'ISK',
    Jmd = 'JMD',
    Jod = 'JOD',
    Jpy = 'JPY',
    Kes = 'KES',
    Kgs = 'KGS',
    Khr = 'KHR',
    Kmf = 'KMF',
    Kpw = 'KPW',
    Krw = 'KRW',
    Kwd = 'KWD',
    Kyd = 'KYD',
    Kzt = 'KZT',
    Lak = 'LAK',
    Lkr = 'LKR',
    Lrd = 'LRD',
    Lsl = 'LSL',
    Lyd = 'LYD',
    Mad = 'MAD',
    Mdl = 'MDL',
    Mga = 'MGA',
    Mkd = 'MKD',
    Mmk = 'MMK',
    Mnt = 'MNT',
    Mop = 'MOP',
    Mro = 'MRO',
    Mur = 'MUR',
    Mvr = 'MVR',
    Mwk = 'MWK',
    Mxn = 'MXN',
    Myr = 'MYR',
    Mzn = 'MZN',
    Nad = 'NAD',
    Xpf = 'XPF',
    Ngn = 'NGN',
    Nio = 'NIO',
    Nok = 'NOK',
    Npr = 'NPR',
    Omr = 'OMR',
    Pen = 'PEN',
    Pgk = 'PGK',
    Php = 'PHP',
    Pkr = 'PKR',
    Pln = 'PLN',
    Pyg = 'PYG',
    Qar = 'QAR',
    Rsd = 'RSD',
    Rub = 'RUB',
    Rwf = 'RWF',
    Sar = 'SAR',
    Sbd = 'SBD',
    Scr = 'SCR',
    Sdg = 'SDG',
    Sek = 'SEK',
    Sgd = 'SGD',
    Shp = 'SHP',
    Sll = 'SLL',
    Sos = 'SOS',
    Srd = 'SRD',
    Ssp = 'SSP',
    Std = 'STD',
    Syp = 'SYP',
    Szl = 'SZL',
    Thb = 'THB',
    Tjs = 'TJS',
    Tnd = 'TND',
    Top = 'TOP',
    Try = 'TRY',
    Ttd = 'TTD',
    Twd = 'TWD',
    Tzs = 'TZS',
    Uah = 'UAH',
    Uyu = 'UYU',
    Uzs = 'UZS',
    Vef = 'VEF',
    Vnd = 'VND',
    Vuv = 'VUV',
    Wst = 'WST',
    Yer = 'YER',
    Zar = 'ZAR'
}

export function DutyFromJSON(json: any): Duty {
    return DutyFromJSONTyped(json, false);
}

export function DutyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Duty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paid_by': !exists(json, 'paid_by') ? undefined : json['paid_by'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'declared_value': !exists(json, 'declared_value') ? undefined : json['declared_value'],
        'account_number': !exists(json, 'account_number') ? undefined : json['account_number'],
        'bill_to': !exists(json, 'bill_to') ? undefined : AddressFromJSON(json['bill_to']),
    };
}

export function DutyToJSON(value?: Duty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paid_by': value.paid_by,
        'currency': value.currency,
        'declared_value': value.declared_value,
        'account_number': value.account_number,
        'bill_to': AddressToJSON(value.bill_to),
    };
}

