/* tslint:disable */
/* eslint-disable */
/**
 * Karrio API
 *  ## API Reference  Karrio is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services.  The Karrio API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.  The Karrio API differs for every account as we release new versions. These docs are customized to your version of the API.   ## Versioning  When backwards-incompatible changes are made to the API, a new, dated version is released. The current version is `2022.3`.  Read our API changelog and to learn more about backwards compatibility.  As a precaution, use API versioning to check a new API version before committing to an upgrade.   ## Pagination  All top-level API resources have support for bulk fetches via \"list\" API methods. For instance, you can list addresses, list shipments, and list trackers. These list API methods share a common structure, taking at least these two parameters: limit, and offset.  Karrio utilizes offset-based pagination via the offset and limit parameters. Both parameters take a number as value (see below) and return objects in reverse chronological order. The offset parameter returns objects listed after an index. The limit parameter take a limit on the number of objects to be returned from 1 to 100.   ```json {     \"next\": \"/v1/shipments?limit=25&offset=25\",     \"previous\": \"/v1/shipments?limit=25&offset=25\",     \"results\": [     ] } ```  ## Environments  The Karrio API offer the possibility to create and retrieve certain objects in `test_mode`. In development, it is therefore possible to add carrier connections, get live rates, buy labels, create trackers and schedule pickups in `test_mode`.  
 *
 * The version of the OpenAPI document: 2022.3
 * Contact: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AddressData,
    AddressDataFromJSON,
    AddressDataFromJSONTyped,
    AddressDataToJSON,
} from './AddressData';
import {
    ParcelData,
    ParcelDataFromJSON,
    ParcelDataFromJSONTyped,
    ParcelDataToJSON,
} from './ParcelData';

/**
 * 
 * @export
 * @interface PickupRequest
 */
export interface PickupRequest {
    /**
     * 
     * The expected pickup date
     * 
     * Date Format: `YYYY-MM-DD`
     * @type {string}
     * @memberof PickupRequest
     */
    pickup_date: string;
    /**
     * 
     * @type {AddressData}
     * @memberof PickupRequest
     */
    address: AddressData;
    /**
     * The shipment parcels to pickup.
     * @type {Array<ParcelData>}
     * @memberof PickupRequest
     */
    parcels: Array<ParcelData>;
    /**
     * 
     * The ready time for pickup.
     * 
     * Time Format: `HH:MM`
     * @type {string}
     * @memberof PickupRequest
     */
    ready_time: string;
    /**
     * 
     * The closing or late time of the pickup
     * 
     * Time Format: `HH:MM`
     * @type {string}
     * @memberof PickupRequest
     */
    closing_time: string;
    /**
     * 
     * The pickup instruction.
     * 
     * eg: Handle with care.
     * @type {string}
     * @memberof PickupRequest
     */
    instruction?: string | null;
    /**
     * 
     * The package(s) location.
     * 
     * eg: Behind the entrance door.
     * @type {string}
     * @memberof PickupRequest
     */
    package_location?: string | null;
    /**
     * Advanced carrier specific pickup options
     * @type {object}
     * @memberof PickupRequest
     */
    options?: object | null;
}

export function PickupRequestFromJSON(json: any): PickupRequest {
    return PickupRequestFromJSONTyped(json, false);
}

export function PickupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickupRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pickup_date': json['pickup_date'],
        'address': AddressDataFromJSON(json['address']),
        'parcels': ((json['parcels'] as Array<any>).map(ParcelDataFromJSON)),
        'ready_time': json['ready_time'],
        'closing_time': json['closing_time'],
        'instruction': !exists(json, 'instruction') ? undefined : json['instruction'],
        'package_location': !exists(json, 'package_location') ? undefined : json['package_location'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function PickupRequestToJSON(value?: PickupRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pickup_date': value.pickup_date,
        'address': AddressDataToJSON(value.address),
        'parcels': ((value.parcels as Array<any>).map(ParcelDataToJSON)),
        'ready_time': value.ready_time,
        'closing_time': value.closing_time,
        'instruction': value.instruction,
        'package_location': value.package_location,
        'options': value.options,
    };
}

