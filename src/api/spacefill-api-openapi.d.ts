import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        /**
         * ArchivedFilterEnum
         * An enumeration.
         */
        export type ArchivedFilterEnum = "yes" | "all" | "no";
        /**
         * AsyncResponse
         */
        export interface AsyncResponse {
            /**
             * Status
             */
            status?: string;
        }
        /**
         * BarcodeTypeEnum
         * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
         */
        export type BarcodeTypeEnum = "EAN" | "UPC";
        /**
         * Body_post_v1_logistic_management_order_upload_document_v1_logistic_management_orders__order_id__documents__post
         */
        export interface BodyPostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost {
            /**
             * File
             */
            file: string; // binary
        }
        /**
         * Body_post_v1_logistic_management_warehouse_acknowledges_receipt_of_order_action_v1_logistic_management_orders__order_id__warehouse_acknowledges_receipt_of_order_action_post
         */
        export interface BodyPostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderActionV1LogisticManagementOrdersOrderIdWarehouseAcknowledgesReceiptOfOrderActionPost {
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items: /* InputWarehouseAcknowledgesReceiptOfOrderActionOrderItem */ InputWarehouseAcknowledgesReceiptOfOrderActionOrderItem[];
            /**
             * Order Effective Executed At
             * Effective date of the completion.
             */
            order_effective_executed_at: string; // date-time
            /**
             * Comment
             * Comment regarding the order.
             */
            comment?: string;
        }
        /**
         * Body_post_v1_logistic_management_warehouse_adjust_stock_after_order_is_completed_action_v1_logistic_management_orders__order_id__warehouse_adjust_stock_after_order_is_completed_action_post
         */
        export interface BodyPostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedActionV1LogisticManagementOrdersOrderIdWarehouseAdjustStockAfterOrderIsCompletedActionPost {
            /**
             * Order Items
             */
            order_items: /* InputOrderItem */ InputOrderItem[];
            /**
             * Additional Order Items
             */
            additional_order_items: /* InputOrderItem */ InputOrderItem[];
            /**
             * Order Effective Executed At
             * Effective date of the completion.
             */
            order_effective_executed_at: string; // date-time
            /**
             * Comment
             */
            comment?: string;
        }
        /**
         * DateTimeRange
         * example:
         * {
         *   "datetime_from": "2021-05-31T12:00:00.000Z",
         *   "datetime_to": "2021-05-31T16:00:00.000Z"
         * }
         */
        export interface DateTimeRange {
            /**
             * Datetime From
             */
            datetime_from?: string; // date-time
            /**
             * Datetime To
             */
            datetime_to?: string; // date-time
        }
        /**
         * EventData
         */
        export interface EventData {
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            warehouse_id: string; // uuid
        }
        /**
         * EventTypeEnum
         * Type of event
         */
        export type EventTypeEnum = "STARTED" | "SUCCESS" | "NO_CONTENT_SUCCESS" | "PARTIAL_SUCCESS" | "PRECONDITION_FAILED_ERROR" | "INVALID_REQUEST_DATA_ERROR" | "INVALID_REQUEST_FORMAT_ERROR" | "UNKNOWN_ERROR" | "NETWORK_ERROR" | "IO_ERROR" | "INTERNAL_ERROR" | "TEST";
        /**
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
        }
        /**
         * InputCarrier
         * example:
         * {
         *   "company": "Company 001",
         *   "email": "carrier@example.com",
         *   "phone_number": "+33611111111"
         * }
         */
        export interface InputCarrier {
            /**
             * Company
             * Name of the company.
             */
            company?: string;
            /**
             * Phone Number
             * Transport unit phone number
             */
            phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Email
             * Carrier company phone number
             */
            email?: string; // ^[\w\.\_\%\-\+]+@[\w._%-]+\.[A-Za-z]{2,8}$
        }
        /**
         * InputInventoryAdjustementItem
         */
        export interface InputInventoryAdjustementItem {
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id?: string; // uuid
            /**
             * Item Reference
             * Unique reference code associated.
             */
            item_reference?: string;
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * Pallet Sscc
             * Deprecated, serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            pallet_sscc?: string;
            /**
             * Sscc Id
             * Technical 'Serial Shipping Container Code' identifier
             */
            sscc_id?: string; // uuid
            /**
             * Sscc Stock Entry Date
             * Date of stock entry for item and batch on SSCC
             */
            sscc_stock_entry_date?: string; // date-time
            /**
             * Serial Shipping Container Code
             * Serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            serial_shipping_container_code?: string;
            /**
             * Position
             * Position of the item in the queue.
             */
            position?: number;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Actual Quantity In Stock
             * Actual quantity in stock inside the warehouse,if current Spacefill actual quantity in stock equal the actual_quantity_in_stock field value then inventory adjustement item will not be created
             */
            actual_quantity_in_stock?: number;
            /**
             * Actual Difference Quantity
             * Actual difference between current quantity in stock, if actual_difference_quantity field value = 0 then inventory adjustement item will not be created
             */
            actual_difference_quantity?: number;
        }
        /**
         * InputOrderDraft
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "order_type": "ENTRY",
         *   "shipper_order_reference": "REF_01",
         *   "warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "comment": "Additional comment",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "entry_expeditor": "string",
         *   "entry_expeditor_address_line1": "string",
         *   "entry_expeditor_address_line2": "string",
         *   "entry_expeditor_address_line3": "string",
         *   "entry_expeditor_address_zip": "string",
         *   "entry_expeditor_address_details": "string",
         *   "entry_expeditor_address_city": "string",
         *   "entry_expeditor_address_country_code": "string",
         *   "entry_expeditor_address_lat": "12.0001",
         *   "entry_expeditor_address_lng": "12.0001",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "key": "value"
         *   },
         *   "order_items": [
         *     {
         *       "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        export interface InputOrderDraft {
            /**
             * Id
             * Order main identifier.
             */
            id?: string; // uuid
            /**
             * OrderTypeEnum
             * Type of the order.
             */
            order_type: "ENTRY" | "EXIT";
            /**
             * Shipper Order Reference
             * Unique reference code.
             */
            shipper_order_reference?: string;
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            warehouse_id?: string;
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Edi Erp Shipper Id
             * Shipper identifier used in the ERP software.
             */
            edi_erp_shipper_id?: string;
            /**
             * Edi Wms Shipper Id
             * Shipper identifier used in the WMS software.
             */
            edi_wms_shipper_id?: string;
            /**
             * Edi Tms Shipper Id
             * Shipper identifier used in the TMS software.
             */
            edi_tms_shipper_id?: string;
            /**
             * Comment
             * Any comment regarding the order.
             */
            comment?: string;
            /**
             * Planned Execution Datetime Range
             * Date range for the execution of the planned order.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            planned_execution_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Transport Phone Number
             * Transport unit phone number
             */
            transport_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Name
             * Transport unit name
             */
            transport_name?: string;
            /**
             * Transport Carrier Id
             * Identifier of carrier company in charge of transport
             */
            transport_carrier_id?: string; // uuid
            /**
             * Entry Expeditor Planned Datetime Range
             * Sender's collection date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            entry_expeditor_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items?: /**
             * InputOrderItemEntryAndExit
             * example:
             * {
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_packaging_type": "PALLET",
             *   "expected_quantity": 1,
             *   "batch_name": "batch nb0001",
             *   "batch_edi_erp_id": "11ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *   "serial_shipping_container_code": "xxxxxxxx",
             *   "custom_fields": {
             *     "custom_field_1": "value 001",
             *     "custom_field_2": "value 002"
             *   }
             * }
             */
            InputOrderItemEntryAndExit[];
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Entry Expeditor
             * Address name for the sender.
             */
            entry_expeditor?: string;
            /**
             * Entry Expeditor Address Line1
             * Line of the sender's address.
             */
            entry_expeditor_address_line1?: string;
            /**
             * Entry Expeditor Address Zip
             * Postal code of the sender's address.
             */
            entry_expeditor_address_zip?: string;
            /**
             * Entry Expeditor Address Details
             * Sender's contact information.
             */
            entry_expeditor_address_details?: string;
            /**
             * Entry Expeditor Address City
             * City of the sender's address.
             */
            entry_expeditor_address_city?: string;
            /**
             * Entry Expeditor Address Country
             * Country of the sender's address.<br />Deprecated, use `entry_expeditor_address_country_code` instead.
             */
            entry_expeditor_address_country?: string;
            /**
             * Entry Expeditor Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the sender's address.
             */
            entry_expeditor_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Entry Expeditor Address Lat
             * Latitude of the sender's address.
             */
            entry_expeditor_address_lat?: string;
            /**
             * Entry Expeditor Address Lng
             * Longitude of the sender's address.
             */
            entry_expeditor_address_lng?: string;
            /**
             * Entry Expeditor Customer Address Id
             * Sender's address main identifier.
             */
            entry_expeditor_customer_address_id?: string;
            /**
             * Exit Final Recipient
             * Address name for the recipient.
             */
            exit_final_recipient?: string;
            /**
             * Exit Final Recipient Address Line1
             * Line of the recipient's address.
             */
            exit_final_recipient_address_line1?: string;
            /**
             * Exit Final Recipient Address Zip
             * ZIP code of the recipient's address.
             */
            exit_final_recipient_address_zip?: string;
            /**
             * Exit Final Recipient Address Details
             * Recipient's contact information.
             */
            exit_final_recipient_address_details?: string;
            /**
             * Exit Final Recipient Address City
             * City of the recipient's address.
             */
            exit_final_recipient_address_city?: string;
            /**
             * Exit Final Recipient Address Country
             * Country of the recipient's address.<br >Deprecated, use `exit_final_recipient_address_country_code` instead.
             */
            exit_final_recipient_address_country?: string;
            /**
             * Exit Final Recipient Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the recipient's address.
             */
            exit_final_recipient_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Exit Final Recipient Address Lat
             * Latitude of the recipient's address.
             */
            exit_final_recipient_address_lat?: string;
            /**
             * Exit Final Recipient Address Lng
             * Longitude of the recipient's address.
             */
            exit_final_recipient_address_lng?: string;
            /**
             * Exit Final Recipient Planned Datetime Range
             * Recipient's reception date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            exit_final_recipient_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Exit Final Recipient Customer Address Id
             */
            exit_final_recipient_customer_address_id?: string;
            /**
             * Carrier Id
             * Deprecated, use transport_carrier_id instead
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             * Deprecated, use transport_name instead
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             * Deprecated, use transport_phone_number instead
             */
            carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * OrderTransportManagementOwnerEnum
             * Deprecated, use transport_carrier_id instead
             */
            transport_management_owner?: "PROVIDER" | "SHIPPER";
        }
        /**
         * InputOrderEntry
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "shipper_order_reference": "REF_01",
         *   "warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "comment": "Additional comment",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "entry_expeditor": "string",
         *   "entry_expeditor_address_line1": "string",
         *   "entry_expeditor_address_zip": "string",
         *   "entry_expeditor_address_details": "string",
         *   "entry_expeditor_address_city": "string",
         *   "entry_expeditor_address_country_code": "string",
         *   "entry_expeditor_address_lat": "12.0001",
         *   "entry_expeditor_address_lng": "12.0001",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "key": "value"
         *   },
         *   "order_items": [
         *     {
         *       "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 0001",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        export interface InputOrderEntry {
            /**
             * Id
             * Order main identifier.
             */
            id?: string; // uuid
            /**
             * Shipper Order Reference
             * Unique reference code.
             */
            shipper_order_reference?: string;
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            warehouse_id?: string; // uuid
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Comment
             * Any comment regarding the order.
             */
            comment?: string;
            /**
             * Planned Execution Datetime Range
             * Date range for the execution of the planned order.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            planned_execution_datetime_range: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Transport Phone Number
             * Transport unit phone number
             */
            transport_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Name
             * Transport unit name
             */
            transport_name?: string;
            /**
             * Transport Carrier Id
             * Identifier of carrier company in charge of transport
             */
            transport_carrier_id?: string; // uuid
            /**
             * Entry Expeditor
             * Address name for the sender.
             */
            entry_expeditor?: string;
            /**
             * Entry Expeditor Address Line1
             * Line of the sender's address.
             */
            entry_expeditor_address_line1?: string;
            /**
             * Entry Expeditor Address Zip
             * Postal code of the sender's address.
             */
            entry_expeditor_address_zip?: string;
            /**
             * Entry Expeditor Address Details
             * Sender's contact information.
             */
            entry_expeditor_address_details?: string;
            /**
             * Entry Expeditor Address City
             * City of the sender's address.
             */
            entry_expeditor_address_city?: string;
            /**
             * Entry Expeditor Address Country
             * Country of the sender's address.<br />Deprecated, use `entry_expeditor_address_country_code` instead.
             */
            entry_expeditor_address_country?: string;
            /**
             * Entry Expeditor Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the sender's address.
             */
            entry_expeditor_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Entry Expeditor Address Lat
             * Latitude of the sender's address.
             */
            entry_expeditor_address_lat?: string;
            /**
             * Entry Expeditor Address Lng
             * Longitude of the sender's address.
             */
            entry_expeditor_address_lng?: string;
            /**
             * Entry Expeditor Planned Datetime Range
             * Sender's collection date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            entry_expeditor_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items?: /**
             * InputOrderItemEntryAndExit
             * example:
             * {
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_packaging_type": "PALLET",
             *   "expected_quantity": 1,
             *   "batch_name": "batch nb0001",
             *   "batch_edi_erp_id": "11ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *   "serial_shipping_container_code": "xxxxxxxx",
             *   "custom_fields": {
             *     "custom_field_1": "value 001",
             *     "custom_field_2": "value 002"
             *   }
             * }
             */
            InputOrderItemEntryAndExit[];
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Carrier Id
             * Deprecated, use transport_carrier_id instead
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             * Deprecated, use transport_name instead
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             * Deprecated, use transport_phone_number instead
             */
            carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * OrderTransportManagementOwnerEnum
             * Deprecated, use transport_carrier_id instead
             */
            transport_management_owner?: "PROVIDER" | "SHIPPER";
        }
        /**
         * InputOrderExit
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "shipper_order_reference": "REF_01",
         *   "warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "comment": "Additional comment",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2025-09-28T15:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "exit_final_recipient": "string",
         *   "exit_final_recipient_address_line1": "string",
         *   "exit_final_recipient_address_zip": "string",
         *   "exit_final_recipient_address_details": "string",
         *   "exit_final_recipient_address_city": "string",
         *   "exit_final_recipient_address_country_code": "string",
         *   "exit_final_recipient_address_lat": "12.34",
         *   "exit_final_recipient_address_lng": "2.34",
         *   "exit_final_recipient_planned_datetime_range": {
         *     "datetime_from": "2025-09-28T15:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "key": "value"
         *   },
         *   "order_items": [
         *     {
         *       "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb0001",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        export interface InputOrderExit {
            /**
             * Id
             * Order main identifier.
             */
            id?: string; // uuid
            /**
             * Shipper Order Reference
             * Unique reference code.
             */
            shipper_order_reference?: string;
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            warehouse_id?: string; // uuid
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Tms Status
             * Status in the TMS software.
             */
            tms_status?: string;
            /**
             * Comment
             * Any comment regarding the order.
             */
            comment?: string;
            /**
             * Planned Execution Datetime Range
             * Date range for the execution of the planned order.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            planned_execution_datetime_range: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Transport Phone Number
             * Transport unit phone number
             */
            transport_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Name
             * Transport unit name
             */
            transport_name?: string;
            /**
             * Transport Carrier Id
             * Identifier of carrier company in charge of transport
             */
            transport_carrier_id?: string; // uuid
            /**
             * Exit Final Recipient
             * Address name for the recipient.
             */
            exit_final_recipient?: string;
            /**
             * Exit Final Recipient Address Line1
             * Line of the recipient's address.
             */
            exit_final_recipient_address_line1?: string;
            /**
             * Exit Final Recipient Address Zip
             * ZIP code of the recipient's address.
             */
            exit_final_recipient_address_zip?: string;
            /**
             * Exit Final Recipient Address Details
             * Recipient's contact information.
             */
            exit_final_recipient_address_details?: string;
            /**
             * Exit Final Recipient Address City
             * City of the recipient's address.
             */
            exit_final_recipient_address_city?: string;
            /**
             * Exit Final Recipient Address Country
             * Country of the recipient's address. Deprecated, use `exit_final_recipient_address_country_code` instead
             */
            exit_final_recipient_address_country?: string;
            /**
             * Exit Final Recipient Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the recipient's address.
             */
            exit_final_recipient_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Exit Final Recipient Address Lat
             * Latitude of the recipient's address.
             */
            exit_final_recipient_address_lat?: string;
            /**
             * Exit Final Recipient Address Lng
             * Longitude of the recipient's address.
             */
            exit_final_recipient_address_lng?: string;
            /**
             * Exit Final Recipient Planned Datetime Range
             * Recipient's reception date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            exit_final_recipient_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items?: /**
             * InputOrderItemEntryAndExit
             * example:
             * {
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_packaging_type": "PALLET",
             *   "expected_quantity": 1,
             *   "batch_name": "batch nb0001",
             *   "batch_edi_erp_id": "11ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *   "serial_shipping_container_code": "xxxxxxxx",
             *   "custom_fields": {
             *     "custom_field_1": "value 001",
             *     "custom_field_2": "value 002"
             *   }
             * }
             */
            InputOrderItemEntryAndExit[];
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Carrier Id
             * Deprecated, use transport_carrier_id instead
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             * Deprecated, use transport_name instead
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             * Deprecated, use transport_phone_number instead
             */
            carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * OrderTransportManagementOwnerEnum
             * Deprecated, use transport_carrier_id instead
             */
            transport_management_owner?: "PROVIDER" | "SHIPPER";
        }
        /**
         * InputOrderItem
         */
        export interface InputOrderItem {
            /**
             * Id
             */
            id?: string; // uuid
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id?: string; // uuid
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Position
             * Position of the item in the queue.
             */
            position?: number;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Expected Quantity
             * Expected quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed the quantity in pallet.
             */
            expected_quantity: number;
            /**
             * Actual Quantity
             * Actual quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed in pallets.
             */
            actual_quantity?: number;
            /**
             * Sscc Id
             * Technical sscc identifer.
             */
            sscc_id?: string; // uuid
            /**
             * Serial Shipping Container Code
             * Name of the sscc
             */
            serial_shipping_container_code?: string;
            /**
             * Custom Fields
             * Custom fields on order items are used to store additional information about the items in your orders. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * InputOrderItemEntryAndExit
         * example:
         * {
         *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_packaging_type": "PALLET",
         *   "expected_quantity": 1,
         *   "batch_name": "batch nb0001",
         *   "batch_edi_erp_id": "11ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "batch_edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "batch_edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *   "serial_shipping_container_code": "xxxxxxxx",
         *   "custom_fields": {
         *     "custom_field_1": "value 001",
         *     "custom_field_2": "value 002"
         *   }
         * }
         */
        export interface InputOrderItemEntryAndExit {
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id?: string; // uuid
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference?: string;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * Pallet Sscc
             * Deprecated, serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            pallet_sscc?: string;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Order Id
             * Order main identifier.
             */
            order_id?: string; // uuid
            /**
             * Expected Quantity
             * Expected quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed the quantity in pallet.
             */
            expected_quantity: number;
            /**
             * Sscc Id
             * Technical sscc identifer.
             */
            sscc_id?: string; // uuid
            /**
             * Serial Shipping Container Code
             * Name of the sscc
             */
            serial_shipping_container_code?: string;
            /**
             * Custom Fields
             * Custom fields on order items are used to store additional information about the items in your orders. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * InputOrderPatch
         */
        export interface InputOrderPatch {
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Tms Status
             * Status in the TMS software.
             */
            tms_status?: string;
        }
        /**
         * InputPatchMasterItem
         */
        export interface InputPatchMasterItem {
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference?: string;
            /**
             * Designation
             * Reference designation.
             */
            designation?: string;
            /**
             * Cardboard Box Quantity By Pallet
             * Quantity of cardboard boxes per pallet.
             */
            cardboard_box_quantity_by_pallet?: number;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            each_barcode_type?: "EAN" | "UPC";
            /**
             * Each Barcode
             * Unit barcode.
             */
            each_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            cardboard_box_barcode_type?: "EAN" | "UPC";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            cardboard_box_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            pallet_barcode_type?: "EAN" | "UPC";
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            pallet_barcode?: string;
            /**
             * Each Quantity By Cardboard Box
             * Quantity of units per cardboard box.
             */
            each_quantity_by_cardboard_box?: number;
            /**
             * Each Quantity By Pallet
             * Quantity of units per pallet.
             */
            each_quantity_by_pallet?: number;
            /**
             * Each Is Stackable
             * Boolean to specify if units are stackable.
             */
            each_is_stackable?: boolean;
            /**
             * Cardboard Box Is Stackable
             * Boolean to specify if cardboard boxes are stackable.
             */
            cardboard_box_is_stackable?: boolean;
            /**
             * Pallet Is Stackable
             * Boolean to specify if pallets are stackable.
             */
            pallet_is_stackable?: boolean;
            /**
             * Each Width In Cm
             * Width of one unit in cm.
             */
            each_width_in_cm?: number;
            /**
             * Each Length In Cm
             * Length of one unit in cm.
             */
            each_length_in_cm?: number;
            /**
             * Each Height In Cm
             * Height of one unit in cm.
             */
            each_height_in_cm?: number;
            /**
             * Each Volume In Cm3
             * Volume of one unit in cm3.
             */
            each_volume_in_cm3?: number;
            /**
             * Cardboard Box Width In Cm
             * Width of one cardboard box in cm.
             */
            cardboard_box_width_in_cm?: number;
            /**
             * Cardboard Box Length In Cm
             * Length of one cardboard box in cm.
             */
            cardboard_box_length_in_cm?: number;
            /**
             * Cardboard Box Height In Cm
             * Height of one cardboard box in cm.
             */
            cardboard_box_height_in_cm?: number;
            /**
             * Cardboard Box Volume In Cm3
             * Volume of one cardboard box in cm3.
             */
            cardboard_box_volume_in_cm3?: number;
            /**
             * Pallet Width In Cm
             * Width of one pallet in cm.
             */
            pallet_width_in_cm?: number;
            /**
             * Pallet Length In Cm
             * Length of one pallet in cm.
             */
            pallet_length_in_cm?: number;
            /**
             * Pallet Height In Cm
             * Height of one pallet in cm.
             */
            pallet_height_in_cm?: number;
            /**
             * Pallet Gross Weight In Kg
             * Gross weight of a complete pallet in kg (pallet weight included).
             */
            pallet_gross_weight_in_kg?: number;
            /**
             * Pallet Net Weight In Kg
             * Net weight of a complete pallet in kg (pallet weight excluded).
             */
            pallet_net_weight_in_kg?: number;
            /**
             * Cardboard Box Gross Weight In Kg
             * Gross cardboard box weight in kg (packaging weight included).
             */
            cardboard_box_gross_weight_in_kg?: number;
            /**
             * Cardboard Box Net Weight In Kg
             * Net weight of a cardboard box in kg (packaging weight excluded).
             */
            cardboard_box_net_weight_in_kg?: number;
            /**
             * Each Gross Weight In Kg
             * Gross weight of a unit in kg (packaging weight included).
             */
            each_gross_weight_in_kg?: number;
            /**
             * Each Net Weight In Kg
             * Net weight of a unit in kg (packaging weight excluded).
             */
            each_net_weight_in_kg?: number;
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Custom Fields
             * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
            /**
             * Archived At
             * Date of the archive of the reference.
             */
            archived_at?: string; // date-time
        }
        /**
         * InputPostBatch
         * example:
         * {
         *   "name": "batch nb0001",
         *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "edi_erp_id": "EDI_ERP_ID",
         *   "edi_wms_id": "EDI_WMS_ID",
         *   "edi_tms_id": "EDI_TMS_ID",
         *   "batch_edi_erp_id": "BAT-E0001",
         *   "batch_edi_wms_id": "BAT-W0001",
         *   "batch_edi_tms_id": "BAT-T0001"
         * }
         */
        export interface InputPostBatch {
            /**
             * Name
             * Name of the batch.
             */
            name: string;
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id?: string; // uuid
            /**
             * Item Reference
             * Unique reference code associated.
             */
            item_reference?: string;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
        }
        /**
         * InputPostEvent
         */
        export interface InputPostEvent {
            /**
             * EventTypeEnum
             * Type of the event.
             */
            type?: "STARTED" | "SUCCESS" | "NO_CONTENT_SUCCESS" | "PARTIAL_SUCCESS" | "PRECONDITION_FAILED_ERROR" | "INVALID_REQUEST_DATA_ERROR" | "INVALID_REQUEST_FORMAT_ERROR" | "UNKNOWN_ERROR" | "NETWORK_ERROR" | "IO_ERROR" | "INTERNAL_ERROR" | "TEST";
            /**
             * Message
             * Message of the event.
             */
            message?: string;
            /**
             * Data
             * The data of the event.
             */
            data: {
                /**
                 * Shipper Account Id
                 * Main identifier of the associated shipper.
                 */
                shipper_account_id: string; // uuid
                /**
                 * Warehouse Id
                 * Main identifier of the associated warehouse.
                 */
                warehouse_id: string; // uuid
            };
            /**
             * Meta
             * Extra data.
             */
            meta?: {
                [key: string]: any;
            };
        }
        /**
         * InputPostInventoryAdjustement
         * example:
         * {
         *   "shipper_account_id": "2f8b8f84-dedd-43d7-9b3d-54a6aa32dfce",
         *   "warehouse_id": "33505a58-7875-40a4-8fb9-ff4ca591e1a6",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "comment": "Some products have been found and other have been lost",
         *   "inventory_adjustement_items": [
         *     {
         *       "master_item_id": "7df9d108-ad99-47f8-92fd-25cf46babf16",
         *       "batch_name": "batch nb 0001",
         *       "position": 1,
         *       "item_packaging_type": "PALLET",
         *       "actual_quantity_in_stock": 3,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "df549cb3-4c37-4010-ac5f-361ed5185d30",
         *       "sscc_stock_entry_date": "2023-10-24T00:00:00.000Z"
         *     },
         *     {
         *       "master_item_id": "b0ab07d8-c1eb-4ca9-9175-df3a76c79608",
         *       "batch_id": "7ebfea97-648e-4623-82d7-e5b76805cf6b",
         *       "batch_name": "batch nb 0001",
         *       "position": 2,
         *       "item_packaging_type": "EACH",
         *       "actual_difference_quantity": 32,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "c1398ccc-708f-4cb0-b0c6-b741818af782",
         *       "sscc_stock_entry_date": "2023-08-01T00:00:00.000Z"
         *     },
         *     {
         *       "master_item_id": "5d01237d-6f0e-419b-a919-9bd969884e95",
         *       "batch_id": "3f49f7fe-fe71-4375-85cd-9dfda8905114",
         *       "batch_name": "batch nb 0001",
         *       "position": 3,
         *       "item_packaging_type": "EACH",
         *       "actual_difference_quantity": -7,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "dec6583c-5ac7-46c8-b61f-75e89b51d03d"
         *     }
         *   ]
         * }
         */
        export interface InputPostInventoryAdjustement {
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id?: string; // uuid
            /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            warehouse_id?: string; // uuid
            /**
             * Edi Erp Shipper Id
             * Shipper identifier used in the ERP software.
             */
            edi_erp_shipper_id?: string;
            /**
             * Edi Wms Shipper Id
             * Shipper identifier used in the WMS software.
             */
            edi_wms_shipper_id?: string;
            /**
             * Edi Tms Shipper Id
             * Shipper identifier used in the TMS software.
             */
            edi_tms_shipper_id?: string;
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Comment
             * Add any comment regarding the inventory adjustment here.
             */
            comment?: string;
            /**
             * Inventory Adjustement Items
             * List of inventory adjustment items with information (reference, batch, SSCC, actual quantity, difference ).
             */
            inventory_adjustement_items?: /* InputInventoryAdjustementItem */ InputInventoryAdjustementItem[];
        }
        /**
         * InputPostMasterItem
         * example:
         * {
         *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "category": "shirt"
         *   }
         * }
         */
        export interface InputPostMasterItem {
            /**
             * Id
             * Technical reference identifer.
             */
            id?: string; // uuid
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id?: string; // uuid
            /**
             * Edi Erp Shipper Id
             * Shipper identifier used in the ERP software.
             */
            edi_erp_shipper_id?: string;
            /**
             * Edi Wms Shipper Id
             * Shipper identifier used in the WMS software.
             */
            edi_wms_shipper_id?: string;
            /**
             * Edi Tms Shipper Id
             * Shipper identifier used in the TMS software.
             */
            edi_tms_shipper_id?: string;
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference: string;
            /**
             * Designation
             * Reference designation.
             */
            designation?: string;
            /**
             * Cardboard Box Quantity By Pallet
             * Quantity of cardboard boxes per pallet.
             */
            cardboard_box_quantity_by_pallet?: number;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            each_barcode_type?: "EAN" | "UPC";
            /**
             * Each Barcode
             * Unit barcode.
             */
            each_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            cardboard_box_barcode_type?: "EAN" | "UPC";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            cardboard_box_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            pallet_barcode_type?: "EAN" | "UPC";
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            pallet_barcode?: string;
            /**
             * Each Quantity By Cardboard Box
             * Quantity of units per cardboard box.
             */
            each_quantity_by_cardboard_box?: number;
            /**
             * Each Quantity By Pallet
             * Quantity of units per pallet.
             */
            each_quantity_by_pallet?: number;
            /**
             * Each Is Stackable
             * Boolean to specify if units are stackable.
             */
            each_is_stackable?: boolean;
            /**
             * Cardboard Box Is Stackable
             * Boolean to specify if cardboard boxes are stackable.
             */
            cardboard_box_is_stackable?: boolean;
            /**
             * Pallet Is Stackable
             * Boolean to specify if pallets are stackable.
             */
            pallet_is_stackable?: boolean;
            /**
             * Each Width In Cm
             * Width of one unit in cm.
             */
            each_width_in_cm?: number;
            /**
             * Each Length In Cm
             * Length of one unit in cm.
             */
            each_length_in_cm?: number;
            /**
             * Each Height In Cm
             * Height of one unit in cm.
             */
            each_height_in_cm?: number;
            /**
             * Each Volume In Cm3
             * Volume of one unit in cm3.
             */
            each_volume_in_cm3?: number;
            /**
             * Cardboard Box Width In Cm
             * Width of one cardboard box in cm.
             */
            cardboard_box_width_in_cm?: number;
            /**
             * Cardboard Box Length In Cm
             * Length of one cardboard box in cm.
             */
            cardboard_box_length_in_cm?: number;
            /**
             * Cardboard Box Height In Cm
             * Height of one cardboard box in cm.
             */
            cardboard_box_height_in_cm?: number;
            /**
             * Cardboard Box Volume In Cm3
             * Volume of one cardboard box in cm3.
             */
            cardboard_box_volume_in_cm3?: number;
            /**
             * Pallet Width In Cm
             * Width of one pallet in cm.
             */
            pallet_width_in_cm?: number;
            /**
             * Pallet Length In Cm
             * Length of one pallet in cm.
             */
            pallet_length_in_cm?: number;
            /**
             * Pallet Height In Cm
             * Height of one pallet in cm.
             */
            pallet_height_in_cm?: number;
            /**
             * Pallet Gross Weight In Kg
             * Gross weight of a complete pallet in kg (pallet weight included).
             */
            pallet_gross_weight_in_kg?: number;
            /**
             * Pallet Net Weight In Kg
             * Net weight of a complete pallet in kg (pallet weight excluded).
             */
            pallet_net_weight_in_kg?: number;
            /**
             * Cardboard Box Gross Weight In Kg
             * Gross cardboard box weight in kg (packaging weight included).
             */
            cardboard_box_gross_weight_in_kg?: number;
            /**
             * Cardboard Box Net Weight In Kg
             * Net weight of a cardboard box in kg (packaging weight excluded).
             */
            cardboard_box_net_weight_in_kg?: number;
            /**
             * Each Gross Weight In Kg
             * Gross weight of a unit in kg (packaging weight included).
             */
            each_gross_weight_in_kg?: number;
            /**
             * Each Net Weight In Kg
             * Net weight of a unit in kg (packaging weight excluded).
             */
            each_net_weight_in_kg?: number;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Custom Fields
             * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * InputPutBatch
         * example:
         * {
         *   "name": "batch nb0001",
         *   "batch_edi_erp_id": "BAT-E0001",
         *   "batch_edi_wms_id": "BAT-W0001",
         *   "batch_edi_tms_id": "BAT-T0001"
         * }
         */
        export interface InputPutBatch {
            /**
             * Name
             * Name of the batch.
             */
            name: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
        }
        /**
         * InputPutMasterItem
         * example:
         * {
         *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "category": "shirt"
         *   }
         * }
         */
        export interface InputPutMasterItem {
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference?: string;
            /**
             * Designation
             * Reference designation.
             */
            designation?: string;
            /**
             * Cardboard Box Quantity By Pallet
             * Quantity of cardboard boxes per pallet.
             */
            cardboard_box_quantity_by_pallet?: number;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            each_barcode_type?: "EAN" | "UPC";
            /**
             * Each Barcode
             * Unit barcode.
             */
            each_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            cardboard_box_barcode_type?: "EAN" | "UPC";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            cardboard_box_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            pallet_barcode_type?: "EAN" | "UPC";
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            pallet_barcode?: string;
            /**
             * Each Quantity By Cardboard Box
             * Quantity of units per cardboard box.
             */
            each_quantity_by_cardboard_box?: number;
            /**
             * Each Quantity By Pallet
             * Quantity of units per pallet.
             */
            each_quantity_by_pallet?: number;
            /**
             * Each Is Stackable
             * Boolean to specify if units are stackable.
             */
            each_is_stackable?: boolean;
            /**
             * Cardboard Box Is Stackable
             * Boolean to specify if cardboard boxes are stackable.
             */
            cardboard_box_is_stackable?: boolean;
            /**
             * Pallet Is Stackable
             * Boolean to specify if pallets are stackable.
             */
            pallet_is_stackable?: boolean;
            /**
             * Each Width In Cm
             * Width of one unit in cm.
             */
            each_width_in_cm?: number;
            /**
             * Each Length In Cm
             * Length of one unit in cm.
             */
            each_length_in_cm?: number;
            /**
             * Each Height In Cm
             * Height of one unit in cm.
             */
            each_height_in_cm?: number;
            /**
             * Each Volume In Cm3
             * Volume of one unit in cm3.
             */
            each_volume_in_cm3?: number;
            /**
             * Cardboard Box Width In Cm
             * Width of one cardboard box in cm.
             */
            cardboard_box_width_in_cm?: number;
            /**
             * Cardboard Box Length In Cm
             * Length of one cardboard box in cm.
             */
            cardboard_box_length_in_cm?: number;
            /**
             * Cardboard Box Height In Cm
             * Height of one cardboard box in cm.
             */
            cardboard_box_height_in_cm?: number;
            /**
             * Cardboard Box Volume In Cm3
             * Volume of one cardboard box in cm3.
             */
            cardboard_box_volume_in_cm3?: number;
            /**
             * Pallet Width In Cm
             * Width of one pallet in cm.
             */
            pallet_width_in_cm?: number;
            /**
             * Pallet Length In Cm
             * Length of one pallet in cm.
             */
            pallet_length_in_cm?: number;
            /**
             * Pallet Height In Cm
             * Height of one pallet in cm.
             */
            pallet_height_in_cm?: number;
            /**
             * Pallet Gross Weight In Kg
             * Gross weight of a complete pallet in kg (pallet weight included).
             */
            pallet_gross_weight_in_kg?: number;
            /**
             * Pallet Net Weight In Kg
             * Net weight of a complete pallet in kg (pallet weight excluded).
             */
            pallet_net_weight_in_kg?: number;
            /**
             * Cardboard Box Gross Weight In Kg
             * Gross cardboard box weight in kg (packaging weight included).
             */
            cardboard_box_gross_weight_in_kg?: number;
            /**
             * Cardboard Box Net Weight In Kg
             * Net weight of a cardboard box in kg (packaging weight excluded).
             */
            cardboard_box_net_weight_in_kg?: number;
            /**
             * Each Gross Weight In Kg
             * Gross weight of a unit in kg (packaging weight included).
             */
            each_gross_weight_in_kg?: number;
            /**
             * Each Net Weight In Kg
             * Net weight of a unit in kg (packaging weight excluded).
             */
            each_net_weight_in_kg?: number;
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Custom Fields
             * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
            /**
             * Archived At
             * Date of the archive of the reference.
             */
            archived_at?: string; // date-time
        }
        /**
         * InputShipperUpdateOrderAction
         * example:
         * {
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2022-05-27T13:22:47.917Z",
         *     "datetime_to": "2022-05-27T13:22:47.917Z"
         *   },
         *   "exit_final_recipient_planned_datetime_range": {
         *     "datetime_from": "2022-04-28T15:05:55.935Z",
         *     "datetime_to": "2022-04-28T15:05:55.935Z"
         *   },
         *   "comment": "string",
         *   "tms_status": "string",
         *   "shipper_order_reference": "string",
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "order_items": {
         *     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *     "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *     "item_packaging_type": "PALLET",
         *     "expected_quantity": 1,
         *     "custom_fields": {
         *       "key1": "value1",
         *       "key2": "value2"
         *     }
         *   }
         * }
         */
        export interface InputShipperUpdateOrderAction {
            /**
             * Shipper Order Reference
             * Unique reference code.
             */
            shipper_order_reference?: string;
            /**
             * Comment
             * Any comment regarding the order.
             */
            comment?: string;
            /**
             * Planned Execution Datetime Range
             * Date range for the execution of the planned order.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            planned_execution_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Transport Phone Number
             * Transport unit phone number
             */
            transport_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Name
             * Transport unit name
             */
            transport_name?: string;
            /**
             * Transport Carrier Id
             * Identifier of carrier company in charge of transport
             */
            transport_carrier_id?: string; // uuid
            /**
             * Entry Expeditor
             * Address name for the sender.
             */
            entry_expeditor?: string;
            /**
             * Entry Expeditor Address Line1
             * Line of the sender's address.
             */
            entry_expeditor_address_line1?: string;
            /**
             * Entry Expeditor Address Zip
             * Postal code of the sender's address.
             */
            entry_expeditor_address_zip?: string;
            /**
             * Entry Expeditor Address Details
             * Sender's contact information.
             */
            entry_expeditor_address_details?: string;
            /**
             * Entry Expeditor Address City
             * City of the sender's address.
             */
            entry_expeditor_address_city?: string;
            /**
             * Entry Expeditor Address Country
             * Country of the sender's address.<br />Deprecated, use `entry_expeditor_address_country_code` instead
             */
            entry_expeditor_address_country?: string;
            /**
             * Entry Expeditor Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the sender's address.
             */
            entry_expeditor_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Entry Expeditor Address Lat
             * Latitude of the sender's address.
             */
            entry_expeditor_address_lat?: string;
            /**
             * Entry Expeditor Address Lng
             * Longitude of the sender's address.
             */
            entry_expeditor_address_lng?: string;
            /**
             * Entry Expeditor Planned Datetime Range
             * Sender's collection date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            entry_expeditor_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Exit Final Recipient
             * Address name for the recipient.
             */
            exit_final_recipient?: string;
            /**
             * Exit Final Recipient Address Line1
             * Line of the recipient's address.
             */
            exit_final_recipient_address_line1?: string;
            /**
             * Exit Final Recipient Address Zip
             * ZIP code of the recipient's address.
             */
            exit_final_recipient_address_zip?: string;
            /**
             * Exit Final Recipient Address Details
             * Recipient's contact information.
             */
            exit_final_recipient_address_details?: string;
            /**
             * Exit Final Recipient Address City
             * City of the recipient's address.
             */
            exit_final_recipient_address_city?: string;
            /**
             * Exit Final Recipient Address Country
             * Country of the recipient's address.<br />Deprecated, use `exit_final_recipient_address_country_code` instead.
             */
            exit_final_recipient_address_country?: string;
            /**
             * Exit Final Recipient Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the recipient's address.
             */
            exit_final_recipient_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Exit Final Recipient Address Lat
             * Latitude of the recipient's address.
             */
            exit_final_recipient_address_lat?: string;
            /**
             * Exit Final Recipient Address Lng
             * Longitude of the recipient's address.
             */
            exit_final_recipient_address_lng?: string;
            /**
             * Exit Final Recipient Planned Datetime Range
             * Recipient's reception date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            exit_final_recipient_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items?: /**
             * InputShipperUpdateOrderActionOrderItem
             * example:
             * {
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_packaging_type": "PALLET",
             *   "expected_quantity": 1,
             *   "batch_name": "batch nb0001",
             *   "batch_edi_erp_id": "11ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "batch_edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd"
             * }
             */
            InputShipperUpdateOrderActionOrderItem[];
            /**
             * Tms Status
             * Status in the TMS software.
             */
            tms_status?: string;
            /**
             * Carrier Id
             * Deprecated, use transport_carrier_id instead
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             * Deprecated, use transport_name instead
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             * Deprecated, use transport_phone_number instead
             */
            carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * OrderTransportManagementOwnerEnum
             * Deprecated, use transport_carrier_id instead
             */
            transport_management_owner?: "PROVIDER" | "SHIPPER";
        }
        /**
         * InputShipperUpdateOrderActionOrderItem
         * example:
         * {
         *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_packaging_type": "PALLET",
         *   "expected_quantity": 1,
         *   "batch_name": "batch nb0001",
         *   "batch_edi_erp_id": "11ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "batch_edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "batch_edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd"
         * }
         */
        export interface InputShipperUpdateOrderActionOrderItem {
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id: string; // uuid
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * Pallet Sscc
             * Deprecated, serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            pallet_sscc?: string;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Expected Quantity
             * Expected quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed the quantity in pallet.
             */
            expected_quantity: number;
            /**
             * Sscc Id
             * Technical sscc identifer.
             */
            sscc_id?: string; // uuid
            /**
             * Serial Shipping Container Code
             * Name of the sscc
             */
            serial_shipping_container_code?: string;
            /**
             * Custom Fields
             * Custom fields on order items are used to store additional information about the items in your orders. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * InputTransportModel
         * example:
         * {
         *   "status": "AT_PICKUP_LOCATION",
         *   "status_updated_at": "2021-01-01T00:00:00Z"
         * }
         */
        export interface InputTransportModel {
            status: /**
             * TransportStatusEnum
             * Transport status enum.
             */
            RessourcesTransportsModelsTransportStatusEnum;
            /**
             * Status Updated At
             */
            status_updated_at?: string; // date-time
        }
        /**
         * InputWarehouseAcknowledgesReceiptOfOrderActionOrderItem
         */
        export interface InputWarehouseAcknowledgesReceiptOfOrderActionOrderItem {
            /**
             * Id
             */
            id?: string; // uuid
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id?: string; // uuid
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference?: string;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * Pallet Sscc
             * Deprecated, serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            pallet_sscc?: string;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type?: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Actual Quantity
             * Actual quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed in pallets.
             */
            actual_quantity?: number;
            /**
             * Sscc Id
             * Technical sscc identifer.
             */
            sscc_id?: string; // uuid
            /**
             * Serial Shipping Container Code
             * Name of the sscc
             */
            serial_shipping_container_code?: string;
            /**
             * Custom Fields
             * Custom fields on order items are used to store additional information about the items in your orders. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * InputWarehouseCreatesOrderAction
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "shipper_account_id": "1de9c987-08ab-32fe-e218-89c124cd0001",
         *   "warehouse_id": "d8bdc728-242b-4039-99a3-0aa239650001",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2022-05-11T06:00:00.000Z",
         *     "datetime_to": "2022-05-11T10:00:00.000Z"
         *   },
         *   "order_type": "ENTRY",
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "comment": "string",
         *   "shipper_order_reference": "string",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2022-05-11T06:00:00.000Z",
         *     "datetime_to": "2022-05-11T10:00:00.000Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "entry_expeditor": "Name 0001",
         *   "entry_expeditor_address_line1": "29 rue poissonière",
         *   "entry_expeditor_address_zip": "75009",
         *   "entry_expeditor_address_details": "some details about the customer address",
         *   "entry_expeditor_address_city": "Paris",
         *   "entry_expeditor_address_country_code": "FR",
         *   "entry_expeditor_address_lat": "48.843900",
         *   "entry_expeditor_address_lng": "2.358800",
         *   "entry_expeditor_customer_address_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "exit_final_recipient": "Name 0001",
         *   "exit_final_recipient_address_line1": "29 rue poissonière",
         *   "exit_final_recipient_address_zip": "75009",
         *   "exit_final_recipient_address_details": "some details about the customer address",
         *   "exit_final_recipient_address_city": "Paris",
         *   "exit_final_recipient_address_country_code": "FR",
         *   "exit_final_recipient_address_lat": "48.843900",
         *   "exit_final_recipient_address_lng": "2.358800",
         *   "exit_final_recipient_customer_address_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "order_items": [
         *     {
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 1",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 10,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     },
         *     {
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 1",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "CARDBOARD_BOX",
         *       "expected_quantity": 5,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     },
         *     {
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 1",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "EACH",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        export interface InputWarehouseCreatesOrderAction {
            /**
             * Id
             * Order main identifier.
             */
            id?: string; // uuid
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id?: string; // uuid
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            warehouse_id?: string; // uuid
            /**
             * Edi Erp Shipper Id
             * Shipper identifier used in the ERP software.
             */
            edi_erp_shipper_id?: string;
            /**
             * Edi Wms Shipper Id
             * Shipper identifier used in the WMS software.
             */
            edi_wms_shipper_id?: string;
            /**
             * Edi Tms Shipper Id
             * Shipper identifier used in the TMS software.
             */
            edi_tms_shipper_id?: string;
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * OrderTypeEnum
             * Type of the order.
             */
            order_type: "ENTRY" | "EXIT";
            /**
             * Comment
             * Any comment regarding the order.
             */
            comment?: string;
            /**
             * Shipper Order Reference
             * Unique reference code.
             */
            shipper_order_reference: string;
            /**
             * Planned Execution Datetime Range
             * Date range for the execution of the planned order.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            planned_execution_datetime_range: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Transport Phone Number
             * Transport unit phone number
             */
            transport_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Name
             * Transport unit name
             */
            transport_name?: string;
            /**
             * Transport Carrier Id
             * Identifier of carrier company in charge of transport
             */
            transport_carrier_id?: string; // uuid
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Entry Expeditor
             * Address name for the sender.
             */
            entry_expeditor?: string;
            /**
             * Entry Expeditor Address Line1
             * Line of the sender's address.
             */
            entry_expeditor_address_line1?: string;
            /**
             * Entry Expeditor Address Zip
             * Postal code of the sender's address.
             */
            entry_expeditor_address_zip?: string;
            /**
             * Entry Expeditor Address Details
             * Sender's contact information.
             */
            entry_expeditor_address_details?: string;
            /**
             * Entry Expeditor Address City
             * City of the sender's address.
             */
            entry_expeditor_address_city?: string;
            /**
             * Entry Expeditor Address Country
             * Country of the sender's address.<br />Deprecated, use `entry_expeditor_address_country_code` instead.
             */
            entry_expeditor_address_country?: string;
            /**
             * Entry Expeditor Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the sender's address.
             */
            entry_expeditor_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Entry Expeditor Address Lat
             * Latitude of the sender's address.
             */
            entry_expeditor_address_lat?: string;
            /**
             * Entry Expeditor Address Lng
             * Longitude of the sender's address.
             */
            entry_expeditor_address_lng?: string;
            /**
             * Entry Expeditor Customer Address Id
             * Sender's address main identifier.
             */
            entry_expeditor_customer_address_id?: string; // uuid
            /**
             * Exit Final Recipient
             * Address name for the recipient.
             */
            exit_final_recipient?: string;
            /**
             * Exit Final Recipient Address Line1
             * Line of the recipient's address.
             */
            exit_final_recipient_address_line1?: string;
            /**
             * Exit Final Recipient Address Zip
             * ZIP code of the recipient's address.
             */
            exit_final_recipient_address_zip?: string;
            /**
             * Exit Final Recipient Address Details
             * Recipient's contact information.
             */
            exit_final_recipient_address_details?: string;
            /**
             * Exit Final Recipient Address City
             * City of the recipient's address.
             */
            exit_final_recipient_address_city?: string;
            /**
             * Exit Final Recipient Address Country
             * Country of the recipient's address.<br />Deprecated, use `exit_final_recipient_address_country_code` instead.
             */
            exit_final_recipient_address_country?: string;
            /**
             * Exit Final Recipient Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the recipient's address.
             */
            exit_final_recipient_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Exit Final Recipient Address Lat
             * Latitude of the recipient's address.
             */
            exit_final_recipient_address_lat?: string;
            /**
             * Exit Final Recipient Address Lng
             * Longitude of the recipient's address.
             */
            exit_final_recipient_address_lng?: string;
            /**
             * Exit Final Recipient Customer Address Id
             * Recipient's address main identifier.
             */
            exit_final_recipient_customer_address_id?: string; // uuid
            /**
             * Entry Expeditor Planned Datetime Range
             * Sender's collection date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            entry_expeditor_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Exit Final Recipient Planned Datetime Range
             * Recipient's reception date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            exit_final_recipient_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items?: /* InputWarehouseCreatesOrderActionOrderItem */ InputWarehouseCreatesOrderActionOrderItem[];
            /**
             * Carrier Id
             * Deprecated, use transport_carrier_id instead
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             * Deprecated, use transport_name instead
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             * Deprecated, use transport_phone_number instead
             */
            carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * OrderTransportManagementOwnerEnum
             * Deprecated, use transport_carrier_id instead
             */
            transport_management_owner?: "PROVIDER" | "SHIPPER";
        }
        /**
         * InputWarehouseCreatesOrderActionOrderItem
         */
        export interface InputWarehouseCreatesOrderActionOrderItem {
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id?: string; // uuid
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference?: string;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Expected Quantity
             * Expected quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed the quantity in pallet.
             */
            expected_quantity: number;
            /**
             * Order Id
             * Order main identifier.
             */
            order_id?: string; // uuid
            /**
             * Sscc Id
             * Technical sscc identifer.
             */
            sscc_id?: string; // uuid
            /**
             * Serial Shipping Container Code
             * Name of the sscc
             */
            serial_shipping_container_code?: string;
            /**
             * Custom Fields
             * Custom fields on order items are used to store additional information about the items in your orders. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * ItemPackagingTypeEnum
         * An enumeration.
         */
        export type ItemPackagingTypeEnum = "PALLET" | "CARDBOARD_BOX" | "EACH";
        /**
         * ItemSelectionMethodEnum
         * An enumeration.
         */
        export type ItemSelectionMethodEnum = "WHATEVER_THE_BATCH";
        /**
         * OrderStatusEnum
         * An enumeration.
         */
        export type OrderStatusEnum = "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE" | "SHIPPER_NEEDS_TO_SUGGEST_NEW_PLANNED_EXECUTION_DATE_STATE" | "ORDER_IS_READY_TO_BE_EXECUTED_STATE" | "UNLOADING_STARTED_STATE" | "UNLOADING_FINISHED_STATE" | "PREPARATION_STARTED_STATE" | "PREPARATION_FINISHED_STATE" | "CANCELED_ORDER_STATE" | "COMPLETED_ORDER_STATE" | "FAILED_ORDER_STATE" | "DRAFT_ORDER_STATE";
        /**
         * OrderTransportManagementOwnerEnum
         * An enumeration.
         */
        export type OrderTransportManagementOwnerEnum = "PROVIDER" | "SHIPPER";
        /**
         * OrderTypeEnum
         * An enumeration.
         */
        export type OrderTypeEnum = "ENTRY" | "EXIT";
        /**
         * OutputBatch
         * example:
         * {
         *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
         *   "name": "batch nb0001",
         *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "created_at": "2022-04-27T15:02:42.599Z",
         *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "updated_at": "2022-04-27T15:03:07.845Z",
         *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "edi_erp_id": "BAT-E0001",
         *   "edi_wms_id": "BAT-W0001",
         *   "edi_tms_id": "BAT-T0001"
         * }
         */
        export interface OutputBatch {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Name
             * Name of the batch.
             */
            name: string;
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id: string; // uuid
            /**
             * Created At
             */
            created_at?: string; // date-time
            /**
             * Created By
             */
            created_by?: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
            /**
             * Deleted At
             */
            deleted_at?: string; // date-time
            /**
             * Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            edi_tms_id?: string;
        }
        /**
         * OutputBatchForecastedStockByWarehouse
         */
        export interface OutputBatchForecastedStockByWarehouse {
            /**
             * Warehouse Id
             */
            warehouse_id: string; // uuid
            /**
             * Warehouse Reference
             */
            warehouse_reference?: string;
            /**
             * Date
             * Date of the forecasted quantity
             */
            date: string; // date
            /**
             * Number Of Complete Pallet
             * Number of complete pallet
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             * Number of incomplete pallet
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             * Number of complete cardboard box
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             * Number of incomplete cardboard box
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Each
             * Number of each
             */
            number_of_each?: number;
        }
        /**
         * OutputBatchGlobalForecastedStock
         */
        export interface OutputBatchGlobalForecastedStock {
            /**
             * Date
             * Date of the forecasted quantity
             */
            date: string; // date
            /**
             * Number Of Complete Pallet
             * Number of complete pallet
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             * Number of incomplete pallet
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             * Number of complete cardboard box
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             * Number of incomplete cardboard box
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Each
             * Number of each
             */
            number_of_each?: number;
        }
        /**
         * OutputBatchWithStock
         * example:
         * {
         *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
         *   "name": "batch nb0001",
         *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "created_at": "2022-04-27T15:02:42.599Z",
         *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "updated_at": "2022-04-27T15:03:07.845Z",
         *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "edi_erp_id": "BAT-E0001",
         *   "edi_wms_id": "BAT-W0001",
         *   "edi_tms_id": "BAT-T0001",
         *   "global_stock_by_batch": {
         *     "number_of_complete_pallet": 2,
         *     "number_of_incomplete_pallet": 1,
         *     "number_of_complete_cardboard_box": 6,
         *     "number_of_incomplete_cardboard_box": 0,
         *     "number_of_each": 100
         *   },
         *   "stock_by_warehouse_by_batch": [
         *     {
         *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
         *       "warehouse_reference": "warehouse1",
         *       "number_of_complete_pallet": 1,
         *       "number_of_incomplete_pallet": 1,
         *       "number_of_complete_cardboard_box": 3,
         *       "number_of_incomplete_cardboard_box": 0,
         *       "number_of_each": 50
         *     },
         *     {
         *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
         *       "warehouse_reference": "warehouse2",
         *       "number_of_complete_pallet": 1,
         *       "number_of_incomplete_pallet": 0,
         *       "number_of_complete_cardboard_box": 3,
         *       "number_of_incomplete_cardboard_box": 0,
         *       "number_of_each": 50
         *     }
         *   ]
         * }
         */
        export interface OutputBatchWithStock {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Name
             * Name of the batch.
             */
            name: string;
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id: string; // uuid
            /**
             * Created At
             */
            created_at?: string; // date-time
            /**
             * Created By
             */
            created_by?: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
            /**
             * Deleted At
             */
            deleted_at?: string; // date-time
            /**
             * Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Global Stock By Batch
             * Global stock by batch.
             */
            global_stock_by_batch?: {
                /**
                 * Number Of Complete Pallet
                 */
                number_of_complete_pallet?: number;
                /**
                 * Number Of Incomplete Pallet
                 */
                number_of_incomplete_pallet?: number;
                /**
                 * Number Of Complete Cardboard Box
                 */
                number_of_complete_cardboard_box?: number;
                /**
                 * Number Of Incomplete Cardboard Box
                 */
                number_of_incomplete_cardboard_box?: number;
                /**
                 * Number Of Each
                 */
                number_of_each?: number;
            };
            /**
             * Stock By Warehouse By Batch
             * Stock by warehouses by batch.
             */
            stock_by_warehouse_by_batch?: /* OutputStockByWarehouseByBatch */ OutputStockByWarehouseByBatch[];
            /**
             * Global Forecasted Stock By Batch
             * Forecasted global stock by batch.
             */
            global_forecasted_stock_by_batch?: {
                /**
                 * Date
                 * Date of the forecasted quantity
                 */
                date: string; // date
                /**
                 * Number Of Complete Pallet
                 * Number of complete pallet
                 */
                number_of_complete_pallet?: number;
                /**
                 * Number Of Incomplete Pallet
                 * Number of incomplete pallet
                 */
                number_of_incomplete_pallet?: number;
                /**
                 * Number Of Complete Cardboard Box
                 * Number of complete cardboard box
                 */
                number_of_complete_cardboard_box?: number;
                /**
                 * Number Of Incomplete Cardboard Box
                 * Number of incomplete cardboard box
                 */
                number_of_incomplete_cardboard_box?: number;
                /**
                 * Number Of Each
                 * Number of each
                 */
                number_of_each?: number;
            };
            /**
             * Forecasted Stock By Warehouse By Batch
             * Forecasted global stock by warehouse by batch.
             */
            forecasted_stock_by_warehouse_by_batch?: /* OutputBatchForecastedStockByWarehouse */ OutputBatchForecastedStockByWarehouse[];
        }
        /**
         * OutputCarrier
         * example:
         * {
         *   "id": "dddddddd-dddd-dddd-dddd-dddddddddddd",
         *   "company": "Company 001",
         *   "email": "carrier@example.com",
         *   "phone_number": "+33611111111",
         *   "created_at": "2022-05-17T09:00:00.000Z",
         *   "created_by": "dddddddd-dddd-dddd-dddd-dddddddddddd",
         *   "updated_at": "2022-05-17T09:00:00.000Z",
         *   "updated_by": "dddddddd-dddd-dddd-dddd-dddddddddddd"
         * }
         */
        export interface OutputCarrier {
            /**
             * Id
             * Carrier main identifier.
             */
            id: string; // uuid
            /**
             * Company
             * Name of the company.
             */
            company?: string;
            /**
             * Phone Number
             * Transport unit phone number
             */
            phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Email
             * Carrier company phone number
             */
            email?: string; // ^[\w\.\_\%\-\+]+@[\w._%-]+\.[A-Za-z]{2,8}$
            /**
             * Warehouses
             * Warehouse ids of service provider associated with the carrier
             */
            warehouses?: string /* uuid */[];
            /**
             * Created At
             */
            created_at: string; // date-time
            /**
             * Created By
             */
            created_by?: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
        }
        /**
         * OutputGlobalStockByBatch
         */
        export interface OutputGlobalStockByBatch {
            /**
             * Number Of Complete Pallet
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Each
             */
            number_of_each?: number;
        }
        /**
         * OutputInventoryAdjustement
         * example:
         * {
         *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
         *   "iid": "ADJ-20220504-001",
         *   "shipper_account_id": "2f8b8f84-dedd-43d7-9b3d-54a6aa32dfce",
         *   "warehouse_id": "33505a58-7875-40a4-8fb9-ff4ca591e1a6",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "comment": "Some products have been found and other have been lost",
         *   "adjustment_date": "2022-05-04 17:00:00",
         *   "created_at": "2022-05-04 17:00.00",
         *   "created_by": "08a55b13-6844-42d4-aad6-6d296d6d893c",
         *   "updated_at": "2022-04-27T15:03:07.845Z",
         *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "inventory_adjustement_items": [
         *     {
         *       "id": "81d6e772-3268-4d15-bfe0-7dd6da32ec0a",
         *       "master_item_id": "7df9d108-ad99-47f8-92fd-25cf46babf16",
         *       "edi_erp_id": "third erp master item is",
         *       "edi_wms_id": "third wms master item is",
         *       "edi_tms_id": "third tms master item is",
         *       "position": 1,
         *       "item_packaging_type": "PALLET",
         *       "initial_quantity": 3,
         *       "difference_quantity": 1,
         *       "sscc_id": "2cb7587b-6c9e-48a6-b0aa-d39f640276ce",
         *       "sscc_stock_entry_date": "2023-10-24T00:00:00.000Z"
         *     },
         *     {
         *       "id": "b77b5d64-e765-496d-beb5-0f0add15ffab",
         *       "master_item_id": "b0ab07d8-c1eb-4ca9-9175-df3a76c79608",
         *       "edi_erp_id": "third erp master item is",
         *       "edi_wms_id": "third wms master item is",
         *       "edi_tms_id": "third tms master item is",
         *       "batch_id": "7ebfea97-648e-4623-82d7-e5b76805cf6b",
         *       "position": 2,
         *       "item_packaging_type": "EACH",
         *       "initial_quantity": 40,
         *       "difference_quantity": 72,
         *       "sscc_id": "649e09cf-0ff2-43f2-ac17-a51eec7ff815",
         *       "sscc_stock_entry_date": "2023-08-01T00:00:00.000Z"
         *     },
         *     {
         *       "id": "f2d4d94e-2dac-4167-a66c-37010fec5e25",
         *       "master_item_id": "5d01237d-6f0e-419b-a919-9bd969884e95",
         *       "edi_erp_id": "third erp master item is",
         *       "edi_wms_id": "third wms master item is",
         *       "edi_tms_id": "third tms master item is",
         *       "batch_id": "3f49f7fe-fe71-4375-85cd-9dfda8905114",
         *       "position": 3,
         *       "item_packaging_type": "EACH",
         *       "initial_quantity": 10,
         *       "difference_quantity": 3,
         *       "sscc_id": "a896670c-7b15-475a-b632-414dc2bf0fa6"
         *     }
         *   ]
         * }
         */
        export interface OutputInventoryAdjustement {
            /**
             * Id
             * Technical reference identifer.
             */
            id: string; // uuid
            /**
             * Iid
             * Interface identifier in the Spacefill software.
             */
            iid: string;
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            warehouse_id: string; // uuid
            /**
             * Edi Erp Shipper Id
             * Shipper identifier used in the ERP software.
             */
            edi_erp_shipper_id?: string;
            /**
             * Edi Wms Shipper Id
             * Shipper identifier used in the WMS software.
             */
            edi_wms_shipper_id?: string;
            /**
             * Edi Tms Shipper Id
             * Shipper identifier used in the TMS software.
             */
            edi_tms_shipper_id?: string;
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Comment
             * Add any comment regarding the inventory adjustment here.
             */
            comment?: string;
            /**
             * Adjustment Date
             */
            adjustment_date: string; // date-time
            /**
             * Created At
             */
            created_at: string; // date-time
            /**
             * Created By
             */
            created_by: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Inventory Adjustement Items
             * List of inventory adjustment items with information (reference, batch, SSCC, actual quantity, difference ).
             */
            inventory_adjustement_items?: /* OutputInventoryAdjustementItem */ OutputInventoryAdjustementItem[];
        }
        /**
         * OutputInventoryAdjustementItem
         */
        export interface OutputInventoryAdjustementItem {
            /**
             * Id
             * Main identifier of the inventory adjustment item.
             */
            id: string; // uuid
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id: string; // uuid
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * Pallet Sscc
             * Serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            pallet_sscc?: string;
            /**
             * Sscc Id
             * Technical 'Serial Shipping Container Code' identifier
             */
            sscc_id?: string; // uuid
            /**
             * Sscc Stock Entry Date
             * Date of stock entry for item and batch on SSCC
             */
            sscc_stock_entry_date?: string; // date-time
            /**
             * Serial Shipping Container Code
             * Deprecated, serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            serial_shipping_container_code?: string;
            /**
             * Position
             * Position of the item in the queue.
             */
            position?: number;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Initial Quantity
             * Initial quantity before adjustment.
             */
            initial_quantity: number;
            /**
             * Difference Quantity
             * Actual quantity minus initial quantity.
             */
            difference_quantity: number;
        }
        /**
         * OutputListMasterItem
         * example:
         * {
         *   "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "created_at": "2022-04-27T15:02:42.599Z",
         *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "updated_at": "2022-04-27T15:03:07.845Z",
         *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "archived_at": "2022-03-15T11:00:00+00:00",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "brand": "Evian",
         *     "category": "beverage"
         *   }
         * }
         */
        export interface OutputListMasterItem {
            /**
             * Id
             * Technical reference identifer.
             */
            id: string; // uuid
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference: string;
            /**
             * Designation
             * Reference designation.
             */
            designation?: string;
            /**
             * Cardboard Box Quantity By Pallet
             * Quantity of cardboard boxes per pallet.
             */
            cardboard_box_quantity_by_pallet?: number;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            each_barcode_type?: "EAN" | "UPC";
            /**
             * Each Barcode
             * Unit barcode.
             */
            each_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            cardboard_box_barcode_type?: "EAN" | "UPC";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            cardboard_box_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            pallet_barcode_type?: "EAN" | "UPC";
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            pallet_barcode?: string;
            /**
             * Each Quantity By Cardboard Box
             * Quantity of units per cardboard box.
             */
            each_quantity_by_cardboard_box?: number;
            /**
             * Each Quantity By Pallet
             * Quantity of units per pallet.
             */
            each_quantity_by_pallet?: number;
            /**
             * Each Is Stackable
             * Boolean to specify if units are stackable.
             */
            each_is_stackable?: boolean;
            /**
             * Cardboard Box Is Stackable
             * Boolean to specify if cardboard boxes are stackable.
             */
            cardboard_box_is_stackable?: boolean;
            /**
             * Pallet Is Stackable
             * Boolean to specify if pallets are stackable.
             */
            pallet_is_stackable?: boolean;
            /**
             * Each Width In Cm
             * Width of one unit in cm.
             */
            each_width_in_cm?: number;
            /**
             * Each Length In Cm
             * Length of one unit in cm.
             */
            each_length_in_cm?: number;
            /**
             * Each Height In Cm
             * Height of one unit in cm.
             */
            each_height_in_cm?: number;
            /**
             * Each Volume In Cm3
             * Volume of one unit in cm3.
             */
            each_volume_in_cm3?: number;
            /**
             * Cardboard Box Width In Cm
             * Width of one cardboard box in cm.
             */
            cardboard_box_width_in_cm?: number;
            /**
             * Cardboard Box Length In Cm
             * Length of one cardboard box in cm.
             */
            cardboard_box_length_in_cm?: number;
            /**
             * Cardboard Box Height In Cm
             * Height of one cardboard box in cm.
             */
            cardboard_box_height_in_cm?: number;
            /**
             * Cardboard Box Volume In Cm3
             * Volume of one cardboard box in cm3.
             */
            cardboard_box_volume_in_cm3?: number;
            /**
             * Pallet Width In Cm
             * Width of one pallet in cm.
             */
            pallet_width_in_cm?: number;
            /**
             * Pallet Length In Cm
             * Length of one pallet in cm.
             */
            pallet_length_in_cm?: number;
            /**
             * Pallet Height In Cm
             * Height of one pallet in cm.
             */
            pallet_height_in_cm?: number;
            /**
             * Pallet Gross Weight In Kg
             * Gross weight of a complete pallet in kg (pallet weight included).
             */
            pallet_gross_weight_in_kg?: number;
            /**
             * Pallet Net Weight In Kg
             * Net weight of a complete pallet in kg (pallet weight excluded).
             */
            pallet_net_weight_in_kg?: number;
            /**
             * Cardboard Box Gross Weight In Kg
             * Gross cardboard box weight in kg (packaging weight included).
             */
            cardboard_box_gross_weight_in_kg?: number;
            /**
             * Cardboard Box Net Weight In Kg
             * Net weight of a cardboard box in kg (packaging weight excluded).
             */
            cardboard_box_net_weight_in_kg?: number;
            /**
             * Each Gross Weight In Kg
             * Gross weight of a unit in kg (packaging weight included).
             */
            each_gross_weight_in_kg?: number;
            /**
             * Each Net Weight In Kg
             * Net weight of a unit in kg (packaging weight excluded).
             */
            each_net_weight_in_kg?: number;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Created At
             */
            created_at?: string; // date-time
            /**
             * Created By
             */
            created_by?: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
            /**
             * Archived At
             */
            archived_at?: string; // date-time
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Custom Fields
             * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * OutputMasterItem
         * example:
         * {
         *   "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "created_at": "2022-04-27T15:02:42.599Z",
         *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "updated_at": "2022-04-27T15:03:07.845Z",
         *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "archived_at": "2022-03-15T11:00:00+00:00",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "category": "shirt"
         *   },
         *   "global_stock": {
         *     "number_of_complete_pallet": 2,
         *     "number_of_incomplete_pallet": 1,
         *     "number_of_complete_cardboard_box": 6,
         *     "number_of_incomplete_cardboard_box": 0,
         *     "number_of_eaches": 100
         *   },
         *   "stock_by_warehouse": [
         *     {
         *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
         *       "warehouse_reference": "warehouse1",
         *       "number_of_complete_pallet": 1,
         *       "number_of_incomplete_pallet": 1,
         *       "number_of_complete_cardboard_box": 3,
         *       "number_of_incomplete_cardboard_box": 0,
         *       "number_of_eaches": 50
         *     },
         *     {
         *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
         *       "warehouse_reference": "warehouse2",
         *       "number_of_complete_pallet": 1,
         *       "number_of_incomplete_pallet": 0,
         *       "number_of_complete_cardboard_box": 3,
         *       "number_of_incomplete_cardboard_box": 0,
         *       "number_of_eaches": 50
         *     }
         *   ],
         *   "global_forecasted_quantity": {
         *     "date": "2022-04-06",
         *     "number_of_complete_pallet": 20,
         *     "number_of_incomplete_pallet": 1,
         *     "number_of_complete_cardboard_box": 60,
         *     "number_of_incomplete_cardboard_box": 0,
         *     "number_of_eaches": 500
         *   },
         *   "forecasted_quantity_by_warehouse": [
         *     {
         *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
         *       "warehouse_reference": "warehouse1",
         *       "date": "2022-04-06",
         *       "number_of_complete_pallet": 10,
         *       "number_of_incomplete_pallet": 1,
         *       "number_of_complete_cardboard_box": 30,
         *       "number_of_incomplete_cardboard_box": 0,
         *       "number_of_eaches": 250
         *     },
         *     {
         *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
         *       "warehouse_reference": "warehouse2",
         *       "date": "2022-04-06",
         *       "number_of_complete_pallet": 10,
         *       "number_of_incomplete_pallet": 0,
         *       "number_of_complete_cardboard_box": 30,
         *       "number_of_incomplete_cardboard_box": 0,
         *       "number_of_eaches": 250
         *     }
         *   ]
         * }
         */
        export interface OutputMasterItem {
            /**
             * Id
             * Technical reference identifer.
             */
            id: string; // uuid
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference: string;
            /**
             * Designation
             * Reference designation.
             */
            designation?: string;
            /**
             * Cardboard Box Quantity By Pallet
             * Quantity of cardboard boxes per pallet.
             */
            cardboard_box_quantity_by_pallet?: number;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            each_barcode_type?: "EAN" | "UPC";
            /**
             * Each Barcode
             * Unit barcode.
             */
            each_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            cardboard_box_barcode_type?: "EAN" | "UPC";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            cardboard_box_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            pallet_barcode_type?: "EAN" | "UPC";
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            pallet_barcode?: string;
            /**
             * Each Quantity By Cardboard Box
             * Quantity of units per cardboard box.
             */
            each_quantity_by_cardboard_box?: number;
            /**
             * Each Quantity By Pallet
             * Quantity of units per pallet.
             */
            each_quantity_by_pallet?: number;
            /**
             * Each Is Stackable
             * Boolean to specify if units are stackable.
             */
            each_is_stackable?: boolean;
            /**
             * Cardboard Box Is Stackable
             * Boolean to specify if cardboard boxes are stackable.
             */
            cardboard_box_is_stackable?: boolean;
            /**
             * Pallet Is Stackable
             * Boolean to specify if pallets are stackable.
             */
            pallet_is_stackable?: boolean;
            /**
             * Each Width In Cm
             * Width of one unit in cm.
             */
            each_width_in_cm?: number;
            /**
             * Each Length In Cm
             * Length of one unit in cm.
             */
            each_length_in_cm?: number;
            /**
             * Each Height In Cm
             * Height of one unit in cm.
             */
            each_height_in_cm?: number;
            /**
             * Each Volume In Cm3
             * Volume of one unit in cm3.
             */
            each_volume_in_cm3?: number;
            /**
             * Cardboard Box Width In Cm
             * Width of one cardboard box in cm.
             */
            cardboard_box_width_in_cm?: number;
            /**
             * Cardboard Box Length In Cm
             * Length of one cardboard box in cm.
             */
            cardboard_box_length_in_cm?: number;
            /**
             * Cardboard Box Height In Cm
             * Height of one cardboard box in cm.
             */
            cardboard_box_height_in_cm?: number;
            /**
             * Cardboard Box Volume In Cm3
             * Volume of one cardboard box in cm3.
             */
            cardboard_box_volume_in_cm3?: number;
            /**
             * Pallet Width In Cm
             * Width of one pallet in cm.
             */
            pallet_width_in_cm?: number;
            /**
             * Pallet Length In Cm
             * Length of one pallet in cm.
             */
            pallet_length_in_cm?: number;
            /**
             * Pallet Height In Cm
             * Height of one pallet in cm.
             */
            pallet_height_in_cm?: number;
            /**
             * Pallet Gross Weight In Kg
             * Gross weight of a complete pallet in kg (pallet weight included).
             */
            pallet_gross_weight_in_kg?: number;
            /**
             * Pallet Net Weight In Kg
             * Net weight of a complete pallet in kg (pallet weight excluded).
             */
            pallet_net_weight_in_kg?: number;
            /**
             * Cardboard Box Gross Weight In Kg
             * Gross cardboard box weight in kg (packaging weight included).
             */
            cardboard_box_gross_weight_in_kg?: number;
            /**
             * Cardboard Box Net Weight In Kg
             * Net weight of a cardboard box in kg (packaging weight excluded).
             */
            cardboard_box_net_weight_in_kg?: number;
            /**
             * Each Gross Weight In Kg
             * Gross weight of a unit in kg (packaging weight included).
             */
            each_gross_weight_in_kg?: number;
            /**
             * Each Net Weight In Kg
             * Net weight of a unit in kg (packaging weight excluded).
             */
            each_net_weight_in_kg?: number;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Transfer date of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Transfer date of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Transfer date of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Created At
             */
            created_at?: string; // date-time
            /**
             * Created By
             */
            created_by?: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
            /**
             * Archived At
             */
            archived_at?: string; // date-time
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Custom Fields
             * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
            /**
             * Global Stock
             * Global stock.
             */
            global_stock?: {
                /**
                 * Number Of Complete Pallet
                 * Number of complete pallets.
                 */
                number_of_complete_pallet?: number;
                /**
                 * Number Of Incomplete Pallet
                 * Number of incomplete pallets.
                 */
                number_of_incomplete_pallet?: number;
                /**
                 * Number Of Complete Cardboard Box
                 * Number of incomplete cardboard boxes.
                 */
                number_of_complete_cardboard_box?: number;
                /**
                 * Number Of Incomplete Cardboard Box
                 * Number of complete cardboard boxes.
                 */
                number_of_incomplete_cardboard_box?: number;
                /**
                 * Number Of Eaches
                 * Number of units.
                 */
                number_of_eaches?: number;
                /**
                 * Each Allocated Quantity
                 * All planned exits stocks in eaches.
                 */
                each_allocated_quantity?: number;
                /**
                 * Cardboard Box Allocated Quantity
                 * All planned exits stocks in cardboard boxes.
                 */
                cardboard_box_allocated_quantity?: number;
                /**
                 * Pallet Allocated Quantity
                 * All planned exits stocks in pallets.
                 */
                pallet_allocated_quantity?: number;
                /**
                 * Each Awaited Quantity
                 * All planned entries stocks in eaches.
                 */
                each_awaited_quantity?: number;
                /**
                 * Cardboard Box Awaited Quantity
                 * All planned entries stocks in cardboard boxes.
                 */
                cardboard_box_awaited_quantity?: number;
                /**
                 * Pallet Awaited Quantity
                 * All planned entries stocks in pallets.
                 */
                pallet_awaited_quantity?: number;
                /**
                 * Each Actual Quantity
                 * Deprecated, use `number_of_eaches` fields instead.
                 */
                each_actual_quantity?: number;
                /**
                 * Cardboard Box Actual Quantity
                 * Deprecated, use `number_of_complete_cardboard_box` and `number_of_incomplete_cardboard_box` fields instead.
                 */
                cardboard_box_actual_quantity?: number;
                /**
                 * Pallet Actual Quantity
                 * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
                 */
                pallet_actual_quantity?: number;
            };
            /**
             * Stock By Warehouse
             * Stock by warehouses.
             */
            stock_by_warehouse?: /* OutputWarehouseMasterItemStock */ OutputWarehouseMasterItemStock[];
            /**
             * Global Forecasted Quantity
             * Global forecasted stock.
             */
            global_forecasted_quantity?: {
                /**
                 * Date
                 * Date for which the forecasted quantities are provided.
                 */
                date: string; // date
                /**
                 * Number Of Complete Pallet
                 * Number of forecasted complete pallets.
                 */
                number_of_complete_pallet?: number;
                /**
                 * Number Of Incomplete Pallet
                 * Number of forecasted incomplete pallets.
                 */
                number_of_incomplete_pallet?: number;
                /**
                 * Number Of Complete Cardboard Box
                 * Number of forecasted complete cardboard boxes.
                 */
                number_of_complete_cardboard_box?: number;
                /**
                 * Number Of Incomplete Cardboard Box
                 * Number of forecasted incomplete cardboard boxes.
                 */
                number_of_incomplete_cardboard_box?: number;
                /**
                 * Number Of Eaches
                 * Number of forecasted units.
                 */
                number_of_eaches?: number;
                /**
                 * Each Forecasted Quantity
                 * Deprecated, use `number_of_eaches` fields instead.
                 */
                each_forecasted_quantity?: number;
                /**
                 * Cardboard Box Forecasted Quantity
                 * Deprecated, use `complete_cardboard_box_quantity` and `number_of_incomplete_cardboard_box` fields instead.
                 */
                cardboard_box_forecasted_quantity?: number;
                /**
                 * Pallet Forecasted Quantity
                 * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
                 */
                pallet_forecasted_quantity?: number;
            };
            /**
             * Forecasted Quantity By Warehouse
             * Forecasted quantity by warehouses.
             */
            forecasted_quantity_by_warehouse?: /* OutputMasterItemForecastedQuantityByWarehouse */ OutputMasterItemForecastedQuantityByWarehouse[];
        }
        /**
         * OutputMasterItemForecastedQuantityByWarehouse
         */
        export interface OutputMasterItemForecastedQuantityByWarehouse {
            /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            warehouse_id: string; // uuid
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Warehouse Reference
             * Reference of the warehouse.
             */
            warehouse_reference?: string;
            /**
             * Date
             */
            date: string; // date
            /**
             * Number Of Complete Pallet
             * Number of complete pallets.
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             * Number of forecasted incomplete pallets.
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             * Number of forecasted complete cardboard boxes.
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             * Number of forecasted incomplete cardboard boxes.
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Eaches
             * Number of units.
             */
            number_of_eaches?: number;
            /**
             * Each Forecasted Whole Quantity
             * Deprecated, use `number_of_eaches` fields instead.
             */
            each_forecasted_whole_quantity?: number;
            /**
             * Cardboard Box Forecasted Whole Quantity
             * Deprecated, use `number_of_complete_cardboard_box` and `number_of_incomplete_cardboard_box` fields instead.
             */
            cardboard_box_forecasted_whole_quantity?: number;
            /**
             * Pallet Forecasted Whole Quantity
             * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
             */
            pallet_forecasted_whole_quantity?: number;
            /**
             * Each Forecasted Quantity
             * Deprecated, use `number_of_eaches` field instead.
             */
            each_forecasted_quantity?: number;
            /**
             * Cardboard Box Forecasted Quantity
             * Deprecated, use `number_of_complete_cardboard_box` and `number_of_incomplete_cardboard_box` fields instead.
             */
            cardboard_box_forecasted_quantity?: number;
            /**
             * Pallet Forecasted Quantity
             * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
             */
            pallet_forecasted_quantity?: number;
        }
        /**
         * OutputMasterItemGlobalForecastedQuantity
         */
        export interface OutputMasterItemGlobalForecastedQuantity {
            /**
             * Date
             * Date for which the forecasted quantities are provided.
             */
            date: string; // date
            /**
             * Number Of Complete Pallet
             * Number of forecasted complete pallets.
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             * Number of forecasted incomplete pallets.
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             * Number of forecasted complete cardboard boxes.
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             * Number of forecasted incomplete cardboard boxes.
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Eaches
             * Number of forecasted units.
             */
            number_of_eaches?: number;
            /**
             * Each Forecasted Quantity
             * Deprecated, use `number_of_eaches` fields instead.
             */
            each_forecasted_quantity?: number;
            /**
             * Cardboard Box Forecasted Quantity
             * Deprecated, use `complete_cardboard_box_quantity` and `number_of_incomplete_cardboard_box` fields instead.
             */
            cardboard_box_forecasted_quantity?: number;
            /**
             * Pallet Forecasted Quantity
             * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
             */
            pallet_forecasted_quantity?: number;
        }
        /**
         * OutputMasterItemStock
         */
        export interface OutputMasterItemStock {
            /**
             * Number Of Complete Pallet
             * Number of complete pallets.
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             * Number of incomplete pallets.
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             * Number of incomplete cardboard boxes.
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             * Number of complete cardboard boxes.
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Eaches
             * Number of units.
             */
            number_of_eaches?: number;
            /**
             * Each Allocated Quantity
             * All planned exits stocks in eaches.
             */
            each_allocated_quantity?: number;
            /**
             * Cardboard Box Allocated Quantity
             * All planned exits stocks in cardboard boxes.
             */
            cardboard_box_allocated_quantity?: number;
            /**
             * Pallet Allocated Quantity
             * All planned exits stocks in pallets.
             */
            pallet_allocated_quantity?: number;
            /**
             * Each Awaited Quantity
             * All planned entries stocks in eaches.
             */
            each_awaited_quantity?: number;
            /**
             * Cardboard Box Awaited Quantity
             * All planned entries stocks in cardboard boxes.
             */
            cardboard_box_awaited_quantity?: number;
            /**
             * Pallet Awaited Quantity
             * All planned entries stocks in pallets.
             */
            pallet_awaited_quantity?: number;
            /**
             * Each Actual Quantity
             * Deprecated, use `number_of_eaches` fields instead.
             */
            each_actual_quantity?: number;
            /**
             * Cardboard Box Actual Quantity
             * Deprecated, use `number_of_complete_cardboard_box` and `number_of_incomplete_cardboard_box` fields instead.
             */
            cardboard_box_actual_quantity?: number;
            /**
             * Pallet Actual Quantity
             * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
             */
            pallet_actual_quantity?: number;
        }
        /**
         * OutputOrder
         * example:
         * {
         *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "iid": "string",
         *   "shipper_order_reference": "string",
         *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "order_type": "ENTRY",
         *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
         *   "comment": "string",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2022-05-17T09:37:15.337Z",
         *     "datetime_to": "2022-05-17T09:37:15.337Z"
         *   },
         *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
         *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transport_phone_number": "+33611111111",
         *   "transport_name": "John Doe",
         *   "transport_status": "SCHEDULED",
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transport_carrier_company": "ACME",
         *   "transport_carrier_phone_number": "+33611111111",
         *   "transport_carrier_email": "support@acme.example",
         *   "entry_expeditor": "string",
         *   "entry_expeditor_company": "string",
         *   "entry_expeditor_address_line1": "string",
         *   "entry_expeditor_address_zip": "string",
         *   "entry_expeditor_address_details": "string",
         *   "entry_expeditor_address_city": "string",
         *   "entry_expeditor_address_country_code": "string",
         *   "entry_expeditor_address_lat": "string",
         *   "entry_expeditor_address_lng": "string",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2022-05-17T09:37:15.337Z",
         *     "datetime_to": "2022-05-17T09:37:15.337Z"
         *   },
         *   "exit_final_recipient": "string",
         *   "exit_final_recipient_company": "string",
         *   "exit_final_recipient_address_line1": "string",
         *   "exit_final_recipient_address_zip": "string",
         *   "exit_final_recipient_address_details": "string",
         *   "exit_final_recipient_address_city": "string",
         *   "exit_final_recipient_address_country_code": "string",
         *   "exit_final_recipient_address_lat": "string",
         *   "exit_final_recipient_address_lng": "string",
         *   "exit_final_recipient_planned_datetime_range": {
         *     "datetime_from": "2022-05-17T09:37:15.337Z",
         *     "datetime_to": "2022-05-17T09:37:15.337Z"
         *   },
         *   "edi_erp_id": "string",
         *   "edi_wms_id": "string",
         *   "edi_tms_id": "string",
         *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
         *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
         *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
         *   "created_at": "2022-05-17T09:37:15.337Z",
         *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "updated_at": "2022-05-17T09:37:15.337Z",
         *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "metadata": {},
         *   "documents": [
         *     {
         *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *       "name": "string",
         *       "type": [
         *         "string"
         *       ],
         *       "created_at": "2022-05-17T09:37:15.337Z"
         *     }
         *   ],
         *   "is_unfulfillable": false,
         *   "order_items": [
         *     {
         *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "edi_erp_id": "third erp master item id",
         *       "edi_wms_id": "third wms master item id",
         *       "edi_tms_id": "third tms master item id",
         *       "batch_name": "batch nb 0004",
         *       "batch_edi_erp_id": "BAT-E0004",
         *       "batch_edi_wms_id": "BAT-W0004",
         *       "batch_edi_tms_id": "BAT-T0004",
         *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
         *       "position": 1,
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "actual_quantity": 0,
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     },
         *     {
         *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
         *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
         *       "edi_erp_id": "third erp master item id",
         *       "edi_wms_id": "third wms master item id",
         *       "edi_tms_id": "third tms master item id",
         *       "position": 2,
         *       "item_packaging_type": "CARDBOARD_BOX",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        export interface OutputOrder {
            /**
             * Id
             * Order main identifier.
             */
            id: string; // uuid
            /**
             * Iid
             * Interface identifier in the Spacefill software.
             */
            iid?: string;
            /**
             * Shipper Order Reference
             * Unique reference code.
             */
            shipper_order_reference?: string;
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            warehouse_id: string; // uuid
            /**
             * Edi Erp Shipper Id
             * Shipper identifier used in the ERP software.
             */
            edi_erp_shipper_id?: string;
            /**
             * Edi Wms Shipper Id
             * Shipper identifier used in the WMS software.
             */
            edi_wms_shipper_id?: string;
            /**
             * Edi Tms Shipper Id
             * Shipper identifier used in the TMS software.
             */
            edi_tms_shipper_id?: string;
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * OrderTypeEnum
             * Type of the order.
             */
            order_type: "ENTRY" | "EXIT";
            status: /**
             * OrderStatusEnum
             * An enumeration.
             */
            OrderStatusEnum;
            /**
             * Tms Status
             * Status in the TMS software.
             */
            tms_status?: string;
            /**
             * Comment
             * Any comment regarding the order.
             */
            comment?: string;
            /**
             * Planned Execution Datetime Range
             * Date range for the execution of the planned order.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            planned_execution_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Effective Executed At
             * Effective execution date of the order
             */
            effective_executed_at?: string; // date-time
            /**
             * Transport Id
             * Transport unit associated with this order
             */
            transport_id?: string; // uuid
            /**
             * Transport Phone Number
             * Transport unit phone number
             */
            transport_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Name
             * Transport unit name
             */
            transport_name?: string;
            /**
             * TransportStatusEnum
             * Status of transport unit associated with this order
             */
            transport_status?: "NOT_MANAGED_BY_SPACEFILL" | "DRAFT" | "SCHEDULED" | "DELIVERED" | "AT_PICKUP_LOCATION" | "PICKUP_COMPLETED" | "DELIVERY_IN_PROGRESS" | "AT_DELIVERY_LOCATION" | "PICKUP_MISSED" | "DELIVERY_MISSED" | "CANCELED";
            /**
             * Transport Carrier Id
             * Identifier of carrier company in charge of transport
             */
            transport_carrier_id?: string; // uuid
            /**
             * Transport Carrier Company
             * Carrier company name
             */
            transport_carrier_company?: string;
            /**
             * Transport Carrier Phone Number
             * Carrier company phone number
             */
            transport_carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Carrier Email
             * Carrier company phone number
             */
            transport_carrier_email?: string; // ^[\w\.\_\%\-\+]+@[\w._%-]+\.[A-Za-z]{2,8}$
            /**
             * Entry Expeditor
             * Address name for the sender.
             */
            entry_expeditor?: string;
            /**
             * Entry Expeditor Company
             * Sender's company.
             */
            entry_expeditor_company?: string;
            /**
             * Entry Expeditor Address Line1
             * Line of the sender's address.
             */
            entry_expeditor_address_line1?: string;
            /**
             * Entry Expeditor Address Zip
             * Postal code of the sender's address.
             */
            entry_expeditor_address_zip?: string;
            /**
             * Entry Expeditor Address Details
             * Sender's contact information.
             */
            entry_expeditor_address_details?: string;
            /**
             * Entry Expeditor Address City
             * City of the sender's address.
             */
            entry_expeditor_address_city?: string;
            /**
             * Entry Expeditor Address Country
             * Country of the sender's address.<br />Deprecated, use `entry_expeditor_address_country_code` instead.
             */
            entry_expeditor_address_country?: string;
            /**
             * Entry Expeditor Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the sender's address.
             */
            entry_expeditor_address_country_code?: string;
            /**
             * Entry Expeditor Address Lat
             * Latitude of the sender's address.
             */
            entry_expeditor_address_lat?: string;
            /**
             * Entry Expeditor Address Lng
             * Longitude of the sender's address.
             */
            entry_expeditor_address_lng?: string;
            /**
             * Entry Expeditor Planned Datetime Range
             * Sender's collection date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            entry_expeditor_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Exit Final Recipient
             * Address name for the recipient.
             */
            exit_final_recipient?: string;
            /**
             * Exit Final Recipient Company
             */
            exit_final_recipient_company?: string;
            /**
             * Exit Final Recipient Address Line1
             * Line of the recipient's address.
             */
            exit_final_recipient_address_line1?: string;
            /**
             * Exit Final Recipient Address Zip
             * ZIP code of the recipient's address.
             */
            exit_final_recipient_address_zip?: string;
            /**
             * Exit Final Recipient Address Details
             * Recipient's contact information.
             */
            exit_final_recipient_address_details?: string;
            /**
             * Exit Final Recipient Address City
             * City of the recipient's address.
             */
            exit_final_recipient_address_city?: string;
            /**
             * Exit Final Recipient Address Country
             * Country of the recipient's address.<br />Deprecated, use `exit_final_recipient_address_country_code` instead.
             */
            exit_final_recipient_address_country?: string;
            /**
             * Exit Final Recipient Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the recipient's address.
             */
            exit_final_recipient_address_country_code?: string;
            /**
             * Exit Final Recipient Address Lat
             * Latitude of the recipient's address.
             */
            exit_final_recipient_address_lat?: string;
            /**
             * Exit Final Recipient Address Lng
             * Longitude of the recipient's address.
             */
            exit_final_recipient_address_lng?: string;
            /**
             * Exit Final Recipient Planned Datetime Range
             * Recipient's reception date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            exit_final_recipient_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * OrderTransportManagementOwnerEnum
             * Deprecated, use transport_carrier_id instead
             */
            transport_management_owner?: "PROVIDER" | "SHIPPER";
            /**
             * Carrier Id
             * Deprecated, use transport_carrier_id instead
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             * Deprecated, use transport_name instead
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             * Deprecated, use transport_phone_number instead
             */
            carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Created At
             */
            created_at: string; // date-time
            /**
             * Created By
             */
            created_by: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Documents
             * List of documents linked to an order.
             */
            documents?: /* OutputOrderDocument */ OutputOrderDocument[];
            /**
             * Is Unfulfillable
             * If `true`, at least one of the `order_item` of this order will not have enough stock at the time of execution.
             */
            is_unfulfillable: boolean;
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items?: /* OutputOrderItem */ OutputOrderItem[];
        }
        /**
         * OutputOrderDocument
         */
        export interface OutputOrderDocument {
            /**
             * Id
             * Document main identifier.
             */
            id: string; // uuid
            /**
             * Name
             * Name of the document.
             */
            name: string;
            /**
             * Type
             * Type of the document.
             */
            type?: string[];
            /**
             * Created At
             * Creation date of the document.
             */
            created_at: string; // date-time
        }
        /**
         * OutputOrderEmbedded
         * example:
         * {
         *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "iid": "string",
         *   "shipper_order_reference": "string",
         *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "order_type": "ENTRY",
         *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
         *   "comment": "string",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2022-05-17T09:37:15.337Z",
         *     "datetime_to": "2022-05-17T09:37:15.337Z"
         *   },
         *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
         *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transport_phone_number": "+33611111111",
         *   "transport_name": "John Doe",
         *   "transport_status": "SCHEDULED",
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transport_carrier_company": "ACME",
         *   "transport_carrier_phone_number": "+33611111111",
         *   "transport_carrier_email": "support@acme.example",
         *   "entry_expeditor": "string",
         *   "entry_expeditor_company": "string",
         *   "entry_expeditor_address_line1": "string",
         *   "entry_expeditor_address_zip": "string",
         *   "entry_expeditor_address_details": "string",
         *   "entry_expeditor_address_city": "string",
         *   "entry_expeditor_address_country_code": "string",
         *   "entry_expeditor_address_lat": "string",
         *   "entry_expeditor_address_lng": "string",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2022-05-17T09:37:15.337Z",
         *     "datetime_to": "2022-05-17T09:37:15.337Z"
         *   },
         *   "exit_final_recipient": "string",
         *   "exit_final_recipient_company": "string",
         *   "exit_final_recipient_address_line1": "string",
         *   "exit_final_recipient_address_zip": "string",
         *   "exit_final_recipient_address_details": "string",
         *   "exit_final_recipient_address_city": "string",
         *   "exit_final_recipient_address_country_code": "string",
         *   "exit_final_recipient_address_lat": "string",
         *   "exit_final_recipient_address_lng": "string",
         *   "exit_final_recipient_planned_datetime_range": {
         *     "datetime_from": "2022-05-17T09:37:15.337Z",
         *     "datetime_to": "2022-05-17T09:37:15.337Z"
         *   },
         *   "edi_erp_id": "string",
         *   "edi_wms_id": "string",
         *   "edi_tms_id": "string",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
         *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
         *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
         *   "created_at": "2022-05-17T09:37:15.337Z",
         *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "updated_at": "2022-05-17T09:37:15.337Z",
         *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *   "metadata": {},
         *   "documents": [
         *     {
         *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *       "name": "string",
         *       "type": [
         *         "string"
         *       ],
         *       "created_at": "2022-05-17T09:37:15.337Z"
         *     }
         *   ],
         *   "is_unfulfillable": false,
         *   "order_items": [
         *     {
         *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "edi_wms_id": "third wms master item is",
         *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
         *       "batch_name": "batch nb00001",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "position": 1,
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "actual_quantity": 0,
         *       "_embedded": {
         *         "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
         *         "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *         "item_reference": "404-600-01",
         *         "designation": "Water bottles",
         *         "cardboard_box_quantity_by_pallet": 1,
         *         "each_barcode_type": "EAN",
         *         "each_barcode": "1234567890123",
         *         "cardboard_box_barcode_type": "EAN",
         *         "cardboard_box_barcode": "1234567890123",
         *         "pallet_barcode_type": "UPC",
         *         "pallet_barcode": "1234567890",
         *         "each_quantity_by_cardboard_box": 1,
         *         "each_quantity_by_pallet": 1,
         *         "each_is_stackable": "true",
         *         "cardboard_box_is_stackable": "false",
         *         "pallet_is_stackable": "false",
         *         "each_width_in_cm": 1.5,
         *         "each_length_in_cm": 1.5,
         *         "each_height_in_cm": 1.5,
         *         "each_volume_in_cm3": 1.5,
         *         "cardboard_box_width_in_cm": 1.5,
         *         "cardboard_box_length_in_cm": 1.5,
         *         "cardboard_box_height_in_cm": 1.5,
         *         "cardboard_box_volume_in_cm3": 1.5,
         *         "pallet_width_in_cm": 1.5,
         *         "pallet_length_in_cm": 1.5,
         *         "pallet_height_in_cm": 1.5,
         *         "pallet_gross_weight_in_kg": 1.5,
         *         "pallet_net_weight_in_kg": 1.5,
         *         "cardboard_box_gross_weight_in_kg": 1.5,
         *         "cardboard_box_net_weight_in_kg": 1.5,
         *         "each_gross_weight_in_kg": 1.5,
         *         "each_net_weight_in_kg": 1.5,
         *         "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *         "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *         "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *         "created_at": "2022-04-27T15:02:42.599Z",
         *         "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *         "updated_at": "2022-04-27T15:03:07.845Z",
         *         "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *         "metadata": {
         *           "internal_code": "A2NJ34-034",
         *           "driver_licence_plate": "XX-123-XX",
         *           "plant": "My plant"
         *         },
         *         "custom_fields": {
         *           "category": "chemise"
         *         },
         *         "global_stock": {
         *           "each_actual_quantity": 10,
         *           "cardboard_box_actual_quantity": 20,
         *           "pallet_actual_quantity": 50,
         *           "each_allocated_quantity": 0,
         *           "cardboard_box_allocated_quantity": 8,
         *           "pallet_allocated_quantity": 0,
         *           "each_awaited_quantity": 0,
         *           "cardboard_box_awaited_quantity": 0,
         *           "pallet_awaited_quantity": 1
         *         },
         *         "stock_by_warehouse": [
         *           {
         *             "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
         *             "warehouse_reference": "warehouse1",
         *             "each_actual_quantity": 10,
         *             "cardboard_box_actual_quantity": 20,
         *             "pallet_actual_quantity": 40,
         *             "each_allocated_quantity": 0,
         *             "cardboard_box_allocated_quantity": 8,
         *             "pallet_allocated_quantity": 0,
         *             "each_awaited_quantity": 0,
         *             "cardboard_box_awaited_quantity": 0,
         *             "pallet_awaited_quantity": 1
         *           },
         *           {
         *             "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
         *             "warehouse_reference": "warehouse2",
         *             "each_actual_quantity": 0,
         *             "cardboard_box_actual_quantity": 0,
         *             "pallet_actual_quantity": 10,
         *             "each_allocated_quantity": 0,
         *             "cardboard_box_allocated_quantity": 0,
         *             "pallet_allocated_quantity": 0,
         *             "each_awaited_quantity": 0,
         *             "cardboard_box_awaited_quantity": 0,
         *             "pallet_awaited_quantity": 0
         *           }
         *         ],
         *         "global_forecasted_quantity": {
         *           "date": "2022-04-06",
         *           "each_forecasted_quantity": 2000,
         *           "pallet_forecasted_quantity": 20
         *         },
         *         "forecasted_quantity_by_warehouse": [
         *           {
         *             "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
         *             "warehouse_reference": "warehouse1",
         *             "date": "2022-04-06",
         *             "each_forecasted_quantity": 2000,
         *             "pallet_forecasted_quantity": 20
         *           }
         *         ]
         *       },
         *       "custom_fields": {
         *         "key": "pair"
         *       }
         *     },
         *     {
         *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
         *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
         *       "edi_tms_id": "third tms master item is",
         *       "position": 2,
         *       "item_packaging_type": "CARDBOARD_BOX",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key": "pair"
         *       }
         *     }
         *   ]
         * }
         */
        export interface OutputOrderEmbedded {
            /**
             * Id
             * Order main identifier.
             */
            id: string; // uuid
            /**
             * Iid
             * Interface identifier in the Spacefill software.
             */
            iid?: string;
            /**
             * Shipper Order Reference
             * Unique reference code.
             */
            shipper_order_reference?: string;
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            warehouse_id: string; // uuid
            /**
             * OrderTypeEnum
             * Type of the order.
             */
            order_type: "ENTRY" | "EXIT";
            status: /**
             * OrderStatusEnum
             * An enumeration.
             */
            OrderStatusEnum;
            /**
             * Tms Status
             * Status in the TMS software.
             */
            tms_status?: string;
            /**
             * Comment
             * Any comment regarding the order.
             */
            comment?: string;
            /**
             * Planned Execution Datetime Range
             * Date range for the execution of the planned order.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            planned_execution_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Effective Executed At
             * Effective execution date of the order
             */
            effective_executed_at?: string; // date-time
            /**
             * Transport Id
             * Transport unit associated with this order
             */
            transport_id?: string; // uuid
            /**
             * Transport Phone Number
             * Transport unit phone number
             */
            transport_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Name
             * Transport unit name
             */
            transport_name?: string;
            /**
             * TransportStatusEnum
             * Status of transport unit associated with this order
             */
            transport_status?: "NOT_MANAGED_BY_SPACEFILL" | "DRAFT" | "SCHEDULED" | "DELIVERED" | "AT_PICKUP_LOCATION" | "PICKUP_COMPLETED" | "DELIVERY_IN_PROGRESS" | "AT_DELIVERY_LOCATION" | "PICKUP_MISSED" | "DELIVERY_MISSED" | "CANCELED";
            /**
             * Transport Carrier Id
             * Identifier of carrier company in charge of transport
             */
            transport_carrier_id?: string; // uuid
            /**
             * Transport Carrier Company
             * Carrier company name
             */
            transport_carrier_company?: string;
            /**
             * Transport Carrier Phone Number
             * Carrier company phone number
             */
            transport_carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Transport Carrier Email
             * Carrier company phone number
             */
            transport_carrier_email?: string; // ^[\w\.\_\%\-\+]+@[\w._%-]+\.[A-Za-z]{2,8}$
            /**
             * Entry Expeditor
             * Address name for the sender.
             */
            entry_expeditor?: string;
            /**
             * Entry Expeditor Company
             * Sender's company.
             */
            entry_expeditor_company?: string;
            /**
             * Entry Expeditor Address Line1
             * Line of the sender's address.
             */
            entry_expeditor_address_line1?: string;
            /**
             * Entry Expeditor Address Zip
             * Postal code of the sender's address.
             */
            entry_expeditor_address_zip?: string;
            /**
             * Entry Expeditor Address Details
             * Sender's contact information.
             */
            entry_expeditor_address_details?: string;
            /**
             * Entry Expeditor Address City
             * City of the sender's address.
             */
            entry_expeditor_address_city?: string;
            /**
             * Entry Expeditor Address Country
             * Country of the sender's address.<br />Deprecated, use `entry_expeditor_address_country_code` instead.
             */
            entry_expeditor_address_country?: string;
            /**
             * Entry Expeditor Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the sender's address.
             */
            entry_expeditor_address_country_code?: string;
            /**
             * Entry Expeditor Address Lat
             * Latitude of the sender's address.
             */
            entry_expeditor_address_lat?: string;
            /**
             * Entry Expeditor Address Lng
             * Longitude of the sender's address.
             */
            entry_expeditor_address_lng?: string;
            /**
             * Entry Expeditor Planned Datetime Range
             * Sender's collection date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            entry_expeditor_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Exit Final Recipient
             * Address name for the recipient.
             */
            exit_final_recipient?: string;
            /**
             * Exit Final Recipient Company
             */
            exit_final_recipient_company?: string;
            /**
             * Exit Final Recipient Address Line1
             * Line of the recipient's address.
             */
            exit_final_recipient_address_line1?: string;
            /**
             * Exit Final Recipient Address Zip
             * ZIP code of the recipient's address.
             */
            exit_final_recipient_address_zip?: string;
            /**
             * Exit Final Recipient Address Details
             * Recipient's contact information.
             */
            exit_final_recipient_address_details?: string;
            /**
             * Exit Final Recipient Address City
             * City of the recipient's address.
             */
            exit_final_recipient_address_city?: string;
            /**
             * Exit Final Recipient Address Country
             * Country of the recipient's address.<br />Deprecated, use `exit_final_recipient_address_country_code` instead.
             */
            exit_final_recipient_address_country?: string;
            /**
             * Exit Final Recipient Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the sender's address.
             */
            exit_final_recipient_address_country_code?: string;
            /**
             * Exit Final Recipient Address Lat
             * Latitude of the recipient's address.
             */
            exit_final_recipient_address_lat?: string;
            /**
             * Exit Final Recipient Address Lng
             * Longitude of the recipient's address.
             */
            exit_final_recipient_address_lng?: string;
            /**
             * Exit Final Recipient Planned Datetime Range
             * Recipient's reception date range.
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            exit_final_recipient_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Edi Erp Shipper Id
             * Shipper identifier used in the ERP software.
             */
            edi_erp_shipper_id?: string;
            /**
             * Edi Wms Shipper Id
             * Shipper identifier used in the WMS software.
             */
            edi_wms_shipper_id?: string;
            /**
             * Edi Tms Shipper Id
             * Shipper identifier used in the TMS software.
             */
            edi_tms_shipper_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * OrderTransportManagementOwnerEnum
             * Deprecated, use transport_carrier_id instead
             */
            transport_management_owner?: "PROVIDER" | "SHIPPER";
            /**
             * Carrier Id
             * Deprecated, use transport_carrier_id instead
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             * Deprecated, use transport_name instead
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             * Deprecated, use transport_phone_number instead
             */
            carrier_phone_number?: string; // ^\+[1-9]\d{1,14}$
            /**
             * Created At
             */
            created_at: string; // date-time
            /**
             * Created By
             */
            created_by: string; // uuid
            /**
             * Updated At
             */
            updated_at?: string; // date-time
            /**
             * Updated By
             */
            updated_by?: string; // uuid
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Documents
             * List of documents linked to an order.
             */
            documents?: /* OutputOrderDocument */ OutputOrderDocument[];
            /**
             * Is Unfulfillable
             * If `true`, at least one of the `order_item` of this order will not have enough stock at the time of execution.
             */
            is_unfulfillable?: boolean;
            /**
             * Order Items
             * List of order items with information (reference, batch, packaging type, expected quantity).
             */
            order_items?: /* OutputOrderItemEmbedded */ OutputOrderItemEmbedded[];
        }
        /**
         * OutputOrderItem
         */
        export interface OutputOrderItem {
            /**
             * Id
             * Order main identifier.
             */
            id: string; // uuid
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id: string; // uuid
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference: string;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * ItemSelectionMethodEnum
             * Selection method chosen by the shipper when creating the order.<br />`WHATEVER_THE_BATCH` if the sender lets the warehouse choose the batch, null otherwise.
             */
            item_selection_method?: "WHATEVER_THE_BATCH";
            /**
             * Pallet Sscc
             * Deprecated, serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            pallet_sscc?: string;
            /**
             * Position
             * Position of the item in the queue.
             */
            position: number;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Expected Quantity
             * Expected quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed the quantity in pallet.
             */
            expected_quantity: number;
            /**
             * Actual Quantity
             * Actual quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed in pallets.
             */
            actual_quantity?: number;
            /**
             * Sscc Id
             * Technical sscc identifier.
             */
            sscc_id?: string; // uuid
            /**
             * Serial Shipping Container Code
             * Name of the sscc
             */
            serial_shipping_container_code?: string;
            /**
             * Custom Fields
             * Custom fields on order items are used to store additional information about the items in your orders. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * OutputOrderItemEmbedded
         */
        export interface OutputOrderItemEmbedded {
            /**
             * Id
             * Order main identifier.
             */
            id: string; // uuid
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id: string; // uuid
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * ItemSelectionMethodEnum
             * Selection method chosen by the shipper when creating the order.<br />`WHATEVER_THE_BATCH` if the sender lets the warehouse choose the batch, null otherwise.
             */
            item_selection_method?: "WHATEVER_THE_BATCH";
            /**
             * Batch Edi Erp Id
             * Batch identifier used in the ERP software.
             */
            batch_edi_erp_id?: string;
            /**
             * Batch Edi Wms Id
             * Batch identifier used in the WMS software.
             */
            batch_edi_wms_id?: string;
            /**
             * Batch Edi Tms Id
             * Batch identifier used in the TMS software.
             */
            batch_edi_tms_id?: string;
            /**
             * Pallet Sscc
             * Deprecated, serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            pallet_sscc?: string;
            /**
             * Position
             * Position of the item in the queue.
             */
            position: number;
            /**
             * ItemPackagingTypeEnum
             * Packaging type used for the quantity.
             */
            item_packaging_type: "PALLET" | "CARDBOARD_BOX" | "EACH";
            /**
             * Expected Quantity
             * Expected quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed the quantity in pallet.
             */
            expected_quantity: number;
            /**
             * Actual Quantity
             * Actual quantity, i.e. if `item_packaging_type`="PALLET", the quantity is expressed in pallets.
             */
            actual_quantity?: number;
            _embedded?: /**
             * OutputMasterItem
             * example:
             * {
             *   "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
             *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_reference": "404-600-01",
             *   "designation": "Water bottles",
             *   "cardboard_box_quantity_by_pallet": 1,
             *   "each_barcode_type": "EAN",
             *   "each_barcode": "1234567890123",
             *   "cardboard_box_barcode_type": "EAN",
             *   "cardboard_box_barcode": "1234567890123",
             *   "pallet_barcode_type": "UPC",
             *   "pallet_barcode": "1234567890",
             *   "each_quantity_by_cardboard_box": 1,
             *   "each_quantity_by_pallet": 1,
             *   "each_is_stackable": "true",
             *   "cardboard_box_is_stackable": "false",
             *   "pallet_is_stackable": "false",
             *   "each_width_in_cm": 1.5,
             *   "each_length_in_cm": 1.5,
             *   "each_height_in_cm": 1.5,
             *   "each_volume_in_cm3": 1.5,
             *   "cardboard_box_width_in_cm": 1.5,
             *   "cardboard_box_length_in_cm": 1.5,
             *   "cardboard_box_height_in_cm": 1.5,
             *   "cardboard_box_volume_in_cm3": 1.5,
             *   "pallet_width_in_cm": 1.5,
             *   "pallet_length_in_cm": 1.5,
             *   "pallet_height_in_cm": 1.5,
             *   "pallet_gross_weight_in_kg": 1.5,
             *   "pallet_net_weight_in_kg": 1.5,
             *   "cardboard_box_gross_weight_in_kg": 1.5,
             *   "cardboard_box_net_weight_in_kg": 1.5,
             *   "each_gross_weight_in_kg": 1.5,
             *   "each_net_weight_in_kg": 1.5,
             *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "archived_at": "2022-03-15T11:00:00+00:00",
             *   "metadata": {
             *     "internal_code": "A2NJ34-034",
             *     "driver_licence_plate": "XX-123-XX",
             *     "plant": "My plant"
             *   },
             *   "custom_fields": {
             *     "category": "shirt"
             *   },
             *   "global_stock": {
             *     "number_of_complete_pallet": 2,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 6,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 100
             *   },
             *   "stock_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     }
             *   ],
             *   "global_forecasted_quantity": {
             *     "date": "2022-04-06",
             *     "number_of_complete_pallet": 20,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 60,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 500
             *   },
             *   "forecasted_quantity_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     }
             *   ]
             * }
             */
            OutputMasterItem;
            /**
             * Sscc Id
             * Technical sscc identifier.
             */
            sscc_id?: string; // uuid
            /**
             * Serial Shipping Container Code
             * Name of the sscc
             */
            serial_shipping_container_code?: string;
            /**
             * Custom Fields
             * Custom fields on order items are used to store additional information about the items in your orders. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
        }
        /**
         * OutputPatchMasterItem
         * example:
         * {
         *   "id": "29bcae63-3ee4-40b6-ba60-32159f122552",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "archived_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "category": "shirt"
         *   }
         * }
         */
        export interface OutputPatchMasterItem {
            /**
             * Id
             * Technical reference identifer.
             */
            id: string; // uuid
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference: string;
            /**
             * Designation
             * Reference designation.
             */
            designation?: string;
            /**
             * Cardboard Box Quantity By Pallet
             * Quantity of cardboard boxes per pallet.
             */
            cardboard_box_quantity_by_pallet?: number;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            each_barcode_type?: "EAN" | "UPC";
            /**
             * Each Barcode
             * Unit barcode.
             */
            each_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            cardboard_box_barcode_type?: "EAN" | "UPC";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            cardboard_box_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            pallet_barcode_type?: "EAN" | "UPC";
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            pallet_barcode?: string;
            /**
             * Each Quantity By Cardboard Box
             * Quantity of units per cardboard box.
             */
            each_quantity_by_cardboard_box?: number;
            /**
             * Each Quantity By Pallet
             * Quantity of units per pallet.
             */
            each_quantity_by_pallet?: number;
            /**
             * Each Is Stackable
             * Boolean to specify if units are stackable.
             */
            each_is_stackable?: boolean;
            /**
             * Cardboard Box Is Stackable
             * Boolean to specify if cardboard boxes are stackable.
             */
            cardboard_box_is_stackable?: boolean;
            /**
             * Pallet Is Stackable
             * Boolean to specify if pallets are stackable.
             */
            pallet_is_stackable?: boolean;
            /**
             * Each Width In Cm
             * Width of one unit in cm.
             */
            each_width_in_cm?: number;
            /**
             * Each Length In Cm
             * Length of one unit in cm.
             */
            each_length_in_cm?: number;
            /**
             * Each Height In Cm
             * Height of one unit in cm.
             */
            each_height_in_cm?: number;
            /**
             * Each Volume In Cm3
             * Volume of one unit in cm3.
             */
            each_volume_in_cm3?: number;
            /**
             * Cardboard Box Width In Cm
             * Width of one cardboard box in cm.
             */
            cardboard_box_width_in_cm?: number;
            /**
             * Cardboard Box Length In Cm
             * Length of one cardboard box in cm.
             */
            cardboard_box_length_in_cm?: number;
            /**
             * Cardboard Box Height In Cm
             * Height of one cardboard box in cm.
             */
            cardboard_box_height_in_cm?: number;
            /**
             * Cardboard Box Volume In Cm3
             * Volume of one cardboard box in cm3.
             */
            cardboard_box_volume_in_cm3?: number;
            /**
             * Pallet Width In Cm
             * Width of one pallet in cm.
             */
            pallet_width_in_cm?: number;
            /**
             * Pallet Length In Cm
             * Length of one pallet in cm.
             */
            pallet_length_in_cm?: number;
            /**
             * Pallet Height In Cm
             * Height of one pallet in cm.
             */
            pallet_height_in_cm?: number;
            /**
             * Pallet Gross Weight In Kg
             * Gross weight of a complete pallet in kg (pallet weight included).
             */
            pallet_gross_weight_in_kg?: number;
            /**
             * Pallet Net Weight In Kg
             * Net weight of a complete pallet in kg (pallet weight excluded).
             */
            pallet_net_weight_in_kg?: number;
            /**
             * Cardboard Box Gross Weight In Kg
             * Gross cardboard box weight in kg (packaging weight included).
             */
            cardboard_box_gross_weight_in_kg?: number;
            /**
             * Cardboard Box Net Weight In Kg
             * Net weight of a cardboard box in kg (packaging weight excluded).
             */
            cardboard_box_net_weight_in_kg?: number;
            /**
             * Each Gross Weight In Kg
             * Gross weight of a unit in kg (packaging weight included).
             */
            each_gross_weight_in_kg?: number;
            /**
             * Each Net Weight In Kg
             * Net weight of a unit in kg (packaging weight excluded).
             */
            each_net_weight_in_kg?: number;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Custom Fields
             * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
            /**
             * Archived At
             */
            archived_at?: string; // date-time
        }
        /**
         * OutputPutMasterItem
         * example:
         * {
         *   "id": "29bcae63-3ee4-40b6-ba60-32159f122552",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "archived_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "category": "shirt"
         *   }
         * }
         */
        export interface OutputPutMasterItem {
            /**
             * Id
             * Technical reference identifer.
             */
            id: string; // uuid
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            shipper_account_id: string; // uuid
            /**
             * Item Reference
             * Unique reference code.
             */
            item_reference: string;
            /**
             * Designation
             * Reference designation.
             */
            designation?: string;
            /**
             * Cardboard Box Quantity By Pallet
             * Quantity of cardboard boxes per pallet.
             */
            cardboard_box_quantity_by_pallet?: number;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            each_barcode_type?: "EAN" | "UPC";
            /**
             * Each Barcode
             * Unit barcode.
             */
            each_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            cardboard_box_barcode_type?: "EAN" | "UPC";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            cardboard_box_barcode?: string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            pallet_barcode_type?: "EAN" | "UPC";
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            pallet_barcode?: string;
            /**
             * Each Quantity By Cardboard Box
             * Quantity of units per cardboard box.
             */
            each_quantity_by_cardboard_box?: number;
            /**
             * Each Quantity By Pallet
             * Quantity of units per pallet.
             */
            each_quantity_by_pallet?: number;
            /**
             * Each Is Stackable
             * Boolean to specify if units are stackable.
             */
            each_is_stackable?: boolean;
            /**
             * Cardboard Box Is Stackable
             * Boolean to specify if cardboard boxes are stackable.
             */
            cardboard_box_is_stackable?: boolean;
            /**
             * Pallet Is Stackable
             * Boolean to specify if pallets are stackable.
             */
            pallet_is_stackable?: boolean;
            /**
             * Each Width In Cm
             * Width of one unit in cm.
             */
            each_width_in_cm?: number;
            /**
             * Each Length In Cm
             * Length of one unit in cm.
             */
            each_length_in_cm?: number;
            /**
             * Each Height In Cm
             * Height of one unit in cm.
             */
            each_height_in_cm?: number;
            /**
             * Each Volume In Cm3
             * Volume of one unit in cm3.
             */
            each_volume_in_cm3?: number;
            /**
             * Cardboard Box Width In Cm
             * Width of one cardboard box in cm.
             */
            cardboard_box_width_in_cm?: number;
            /**
             * Cardboard Box Length In Cm
             * Length of one cardboard box in cm.
             */
            cardboard_box_length_in_cm?: number;
            /**
             * Cardboard Box Height In Cm
             * Height of one cardboard box in cm.
             */
            cardboard_box_height_in_cm?: number;
            /**
             * Cardboard Box Volume In Cm3
             * Volume of one cardboard box in cm3.
             */
            cardboard_box_volume_in_cm3?: number;
            /**
             * Pallet Width In Cm
             * Width of one pallet in cm.
             */
            pallet_width_in_cm?: number;
            /**
             * Pallet Length In Cm
             * Length of one pallet in cm.
             */
            pallet_length_in_cm?: number;
            /**
             * Pallet Height In Cm
             * Height of one pallet in cm.
             */
            pallet_height_in_cm?: number;
            /**
             * Pallet Gross Weight In Kg
             * Gross weight of a complete pallet in kg (pallet weight included).
             */
            pallet_gross_weight_in_kg?: number;
            /**
             * Pallet Net Weight In Kg
             * Net weight of a complete pallet in kg (pallet weight excluded).
             */
            pallet_net_weight_in_kg?: number;
            /**
             * Cardboard Box Gross Weight In Kg
             * Gross cardboard box weight in kg (packaging weight included).
             */
            cardboard_box_gross_weight_in_kg?: number;
            /**
             * Cardboard Box Net Weight In Kg
             * Net weight of a cardboard box in kg (packaging weight excluded).
             */
            cardboard_box_net_weight_in_kg?: number;
            /**
             * Each Gross Weight In Kg
             * Gross weight of a unit in kg (packaging weight included).
             */
            each_gross_weight_in_kg?: number;
            /**
             * Each Net Weight In Kg
             * Net weight of a unit in kg (packaging weight excluded).
             */
            each_net_weight_in_kg?: number;
            /**
             * Edi Erp Id
             * Reference identifier used in the ERP software.
             */
            edi_erp_id?: string;
            /**
             * Edi Wms Id
             * Reference identifier used in the WMS software.
             */
            edi_wms_id?: string;
            /**
             * Edi Tms Id
             * Reference identifier used in the TMS software.
             */
            edi_tms_id?: string;
            /**
             * Transfered To Erp At
             * Date of the transfer of the reference in the ERP software.
             */
            transfered_to_erp_at?: string; // date-time
            /**
             * Transfered To Wms At
             * Date of the transfer of the reference in the WMS software.
             */
            transfered_to_wms_at?: string; // date-time
            /**
             * Transfered To Tms At
             * Date of the transfer of the reference in the TMS software.
             */
            transfered_to_tms_at?: string; // date-time
            /**
             * Metadata
             * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Custom Fields
             * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
             */
            custom_fields?: {
                [key: string]: any;
            };
            /**
             * Archived At
             */
            archived_at?: string; // date-time
        }
        /**
         * OutputSscc
         */
        export interface OutputSscc {
            /**
             * Sscc Id
             * Serial Shipping Container Code identifier.
             */
            sscc_id?: string; // uuid
            /**
             * Sscc Stock Entry Date
             * Date of stock entry for item and batch on SSCC
             */
            sscc_stock_entry_date?: string; // date-time
            /**
             * Serial Shipping Container Code
             * Serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            serial_shipping_container_code?: string;
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            master_item_id?: string; // uuid
            /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            warehouse_id?: string; // uuid
            /**
             * Warehouse Reference
             * Reference of the warehouse.
             */
            warehouse_reference?: string;
            /**
             * Batch Id
             * Technical batch identifer.
             */
            batch_id?: string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            batch_name?: string;
            /**
             * Each Actual Equivalent Quantity
             * Equivalent quantity of complete each.
             */
            each_actual_equivalent_quantity?: number;
            /**
             * Cardboard Box Actual Equivalent Quantity
             * Equivalent quantity of complete cardboard boxes.
             */
            cardboard_box_actual_equivalent_quantity?: number;
            /**
             * Master Item
             * Embedded master item.
             * example:
             * {
             *   "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
             *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_reference": "404-600-01",
             *   "designation": "Water bottles",
             *   "cardboard_box_quantity_by_pallet": 1,
             *   "each_barcode_type": "EAN",
             *   "each_barcode": "1234567890123",
             *   "cardboard_box_barcode_type": "EAN",
             *   "cardboard_box_barcode": "1234567890123",
             *   "pallet_barcode_type": "UPC",
             *   "pallet_barcode": "1234567890",
             *   "each_quantity_by_cardboard_box": 1,
             *   "each_quantity_by_pallet": 1,
             *   "each_is_stackable": "true",
             *   "cardboard_box_is_stackable": "false",
             *   "pallet_is_stackable": "false",
             *   "each_width_in_cm": 1.5,
             *   "each_length_in_cm": 1.5,
             *   "each_height_in_cm": 1.5,
             *   "each_volume_in_cm3": 1.5,
             *   "cardboard_box_width_in_cm": 1.5,
             *   "cardboard_box_length_in_cm": 1.5,
             *   "cardboard_box_height_in_cm": 1.5,
             *   "cardboard_box_volume_in_cm3": 1.5,
             *   "pallet_width_in_cm": 1.5,
             *   "pallet_length_in_cm": 1.5,
             *   "pallet_height_in_cm": 1.5,
             *   "pallet_gross_weight_in_kg": 1.5,
             *   "pallet_net_weight_in_kg": 1.5,
             *   "cardboard_box_gross_weight_in_kg": 1.5,
             *   "cardboard_box_net_weight_in_kg": 1.5,
             *   "each_gross_weight_in_kg": 1.5,
             *   "each_net_weight_in_kg": 1.5,
             *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "archived_at": "2022-03-15T11:00:00+00:00",
             *   "metadata": {
             *     "internal_code": "A2NJ34-034",
             *     "driver_licence_plate": "XX-123-XX",
             *     "plant": "My plant"
             *   },
             *   "custom_fields": {
             *     "category": "shirt"
             *   },
             *   "global_stock": {
             *     "number_of_complete_pallet": 2,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 6,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 100
             *   },
             *   "stock_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     }
             *   ],
             *   "global_forecasted_quantity": {
             *     "date": "2022-04-06",
             *     "number_of_complete_pallet": 20,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 60,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 500
             *   },
             *   "forecasted_quantity_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     }
             *   ]
             * }
             */
            master_item?: {
                /**
                 * Id
                 * Technical reference identifer.
                 */
                id: string; // uuid
                /**
                 * Shipper Account Id
                 * Main identifier of the associated shipper.
                 */
                shipper_account_id: string; // uuid
                /**
                 * Item Reference
                 * Unique reference code.
                 */
                item_reference: string;
                /**
                 * Designation
                 * Reference designation.
                 */
                designation?: string;
                /**
                 * Cardboard Box Quantity By Pallet
                 * Quantity of cardboard boxes per pallet.
                 */
                cardboard_box_quantity_by_pallet?: number;
                /**
                 * BarcodeTypeEnum
                 * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
                 */
                each_barcode_type?: "EAN" | "UPC";
                /**
                 * Each Barcode
                 * Unit barcode.
                 */
                each_barcode?: string;
                /**
                 * BarcodeTypeEnum
                 * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
                 */
                cardboard_box_barcode_type?: "EAN" | "UPC";
                /**
                 * Cardboard Box Barcode
                 * Box barcode.
                 */
                cardboard_box_barcode?: string;
                /**
                 * BarcodeTypeEnum
                 * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
                 */
                pallet_barcode_type?: "EAN" | "UPC";
                /**
                 * Pallet Barcode
                 * Pallet barcode.
                 */
                pallet_barcode?: string;
                /**
                 * Each Quantity By Cardboard Box
                 * Quantity of units per cardboard box.
                 */
                each_quantity_by_cardboard_box?: number;
                /**
                 * Each Quantity By Pallet
                 * Quantity of units per pallet.
                 */
                each_quantity_by_pallet?: number;
                /**
                 * Each Is Stackable
                 * Boolean to specify if units are stackable.
                 */
                each_is_stackable?: boolean;
                /**
                 * Cardboard Box Is Stackable
                 * Boolean to specify if cardboard boxes are stackable.
                 */
                cardboard_box_is_stackable?: boolean;
                /**
                 * Pallet Is Stackable
                 * Boolean to specify if pallets are stackable.
                 */
                pallet_is_stackable?: boolean;
                /**
                 * Each Width In Cm
                 * Width of one unit in cm.
                 */
                each_width_in_cm?: number;
                /**
                 * Each Length In Cm
                 * Length of one unit in cm.
                 */
                each_length_in_cm?: number;
                /**
                 * Each Height In Cm
                 * Height of one unit in cm.
                 */
                each_height_in_cm?: number;
                /**
                 * Each Volume In Cm3
                 * Volume of one unit in cm3.
                 */
                each_volume_in_cm3?: number;
                /**
                 * Cardboard Box Width In Cm
                 * Width of one cardboard box in cm.
                 */
                cardboard_box_width_in_cm?: number;
                /**
                 * Cardboard Box Length In Cm
                 * Length of one cardboard box in cm.
                 */
                cardboard_box_length_in_cm?: number;
                /**
                 * Cardboard Box Height In Cm
                 * Height of one cardboard box in cm.
                 */
                cardboard_box_height_in_cm?: number;
                /**
                 * Cardboard Box Volume In Cm3
                 * Volume of one cardboard box in cm3.
                 */
                cardboard_box_volume_in_cm3?: number;
                /**
                 * Pallet Width In Cm
                 * Width of one pallet in cm.
                 */
                pallet_width_in_cm?: number;
                /**
                 * Pallet Length In Cm
                 * Length of one pallet in cm.
                 */
                pallet_length_in_cm?: number;
                /**
                 * Pallet Height In Cm
                 * Height of one pallet in cm.
                 */
                pallet_height_in_cm?: number;
                /**
                 * Pallet Gross Weight In Kg
                 * Gross weight of a complete pallet in kg (pallet weight included).
                 */
                pallet_gross_weight_in_kg?: number;
                /**
                 * Pallet Net Weight In Kg
                 * Net weight of a complete pallet in kg (pallet weight excluded).
                 */
                pallet_net_weight_in_kg?: number;
                /**
                 * Cardboard Box Gross Weight In Kg
                 * Gross cardboard box weight in kg (packaging weight included).
                 */
                cardboard_box_gross_weight_in_kg?: number;
                /**
                 * Cardboard Box Net Weight In Kg
                 * Net weight of a cardboard box in kg (packaging weight excluded).
                 */
                cardboard_box_net_weight_in_kg?: number;
                /**
                 * Each Gross Weight In Kg
                 * Gross weight of a unit in kg (packaging weight included).
                 */
                each_gross_weight_in_kg?: number;
                /**
                 * Each Net Weight In Kg
                 * Net weight of a unit in kg (packaging weight excluded).
                 */
                each_net_weight_in_kg?: number;
                /**
                 * Edi Erp Id
                 * Reference identifier used in the ERP software.
                 */
                edi_erp_id?: string;
                /**
                 * Edi Wms Id
                 * Reference identifier used in the WMS software.
                 */
                edi_wms_id?: string;
                /**
                 * Edi Tms Id
                 * Reference identifier used in the TMS software.
                 */
                edi_tms_id?: string;
                /**
                 * Transfered To Erp At
                 * Transfer date of the reference in the ERP software.
                 */
                transfered_to_erp_at?: string; // date-time
                /**
                 * Transfered To Wms At
                 * Transfer date of the reference in the WMS software.
                 */
                transfered_to_wms_at?: string; // date-time
                /**
                 * Transfered To Tms At
                 * Transfer date of the reference in the TMS software.
                 */
                transfered_to_tms_at?: string; // date-time
                /**
                 * Created At
                 */
                created_at?: string; // date-time
                /**
                 * Created By
                 */
                created_by?: string; // uuid
                /**
                 * Updated At
                 */
                updated_at?: string; // date-time
                /**
                 * Updated By
                 */
                updated_by?: string; // uuid
                /**
                 * Archived At
                 */
                archived_at?: string; // date-time
                /**
                 * Metadata
                 * Metadata is used to pass your internal information. Metadata is passed in a JSON key:value format.
                 */
                metadata?: {
                    [key: string]: any;
                };
                /**
                 * Custom Fields
                 * Custom fields are used to store additional information about your references. These fields must first be created on Spacefill platform, before being populated by an API call. Custom fields are passed in a JSON key:value format.
                 */
                custom_fields?: {
                    [key: string]: any;
                };
                /**
                 * Global Stock
                 * Global stock.
                 */
                global_stock?: {
                    /**
                     * Number Of Complete Pallet
                     * Number of complete pallets.
                     */
                    number_of_complete_pallet?: number;
                    /**
                     * Number Of Incomplete Pallet
                     * Number of incomplete pallets.
                     */
                    number_of_incomplete_pallet?: number;
                    /**
                     * Number Of Complete Cardboard Box
                     * Number of incomplete cardboard boxes.
                     */
                    number_of_complete_cardboard_box?: number;
                    /**
                     * Number Of Incomplete Cardboard Box
                     * Number of complete cardboard boxes.
                     */
                    number_of_incomplete_cardboard_box?: number;
                    /**
                     * Number Of Eaches
                     * Number of units.
                     */
                    number_of_eaches?: number;
                    /**
                     * Each Allocated Quantity
                     * All planned exits stocks in eaches.
                     */
                    each_allocated_quantity?: number;
                    /**
                     * Cardboard Box Allocated Quantity
                     * All planned exits stocks in cardboard boxes.
                     */
                    cardboard_box_allocated_quantity?: number;
                    /**
                     * Pallet Allocated Quantity
                     * All planned exits stocks in pallets.
                     */
                    pallet_allocated_quantity?: number;
                    /**
                     * Each Awaited Quantity
                     * All planned entries stocks in eaches.
                     */
                    each_awaited_quantity?: number;
                    /**
                     * Cardboard Box Awaited Quantity
                     * All planned entries stocks in cardboard boxes.
                     */
                    cardboard_box_awaited_quantity?: number;
                    /**
                     * Pallet Awaited Quantity
                     * All planned entries stocks in pallets.
                     */
                    pallet_awaited_quantity?: number;
                    /**
                     * Each Actual Quantity
                     * Deprecated, use `number_of_eaches` fields instead.
                     */
                    each_actual_quantity?: number;
                    /**
                     * Cardboard Box Actual Quantity
                     * Deprecated, use `number_of_complete_cardboard_box` and `number_of_incomplete_cardboard_box` fields instead.
                     */
                    cardboard_box_actual_quantity?: number;
                    /**
                     * Pallet Actual Quantity
                     * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
                     */
                    pallet_actual_quantity?: number;
                };
                /**
                 * Stock By Warehouse
                 * Stock by warehouses.
                 */
                stock_by_warehouse?: /* OutputWarehouseMasterItemStock */ OutputWarehouseMasterItemStock[];
                /**
                 * Global Forecasted Quantity
                 * Global forecasted stock.
                 */
                global_forecasted_quantity?: {
                    /**
                     * Date
                     * Date for which the forecasted quantities are provided.
                     */
                    date: string; // date
                    /**
                     * Number Of Complete Pallet
                     * Number of forecasted complete pallets.
                     */
                    number_of_complete_pallet?: number;
                    /**
                     * Number Of Incomplete Pallet
                     * Number of forecasted incomplete pallets.
                     */
                    number_of_incomplete_pallet?: number;
                    /**
                     * Number Of Complete Cardboard Box
                     * Number of forecasted complete cardboard boxes.
                     */
                    number_of_complete_cardboard_box?: number;
                    /**
                     * Number Of Incomplete Cardboard Box
                     * Number of forecasted incomplete cardboard boxes.
                     */
                    number_of_incomplete_cardboard_box?: number;
                    /**
                     * Number Of Eaches
                     * Number of forecasted units.
                     */
                    number_of_eaches?: number;
                    /**
                     * Each Forecasted Quantity
                     * Deprecated, use `number_of_eaches` fields instead.
                     */
                    each_forecasted_quantity?: number;
                    /**
                     * Cardboard Box Forecasted Quantity
                     * Deprecated, use `complete_cardboard_box_quantity` and `number_of_incomplete_cardboard_box` fields instead.
                     */
                    cardboard_box_forecasted_quantity?: number;
                    /**
                     * Pallet Forecasted Quantity
                     * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
                     */
                    pallet_forecasted_quantity?: number;
                };
                /**
                 * Forecasted Quantity By Warehouse
                 * Forecasted quantity by warehouses.
                 */
                forecasted_quantity_by_warehouse?: /* OutputMasterItemForecastedQuantityByWarehouse */ OutputMasterItemForecastedQuantityByWarehouse[];
            };
        }
        /**
         * OutputStockByWarehouseByBatch
         */
        export interface OutputStockByWarehouseByBatch {
            /**
             * Warehouse Id
             */
            warehouse_id: string; // uuid
            /**
             * Warehouse Reference
             */
            warehouse_reference?: string;
            /**
             * Number Of Complete Pallet
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Each
             */
            number_of_each?: number;
        }
        /**
         * OutputTotalSsccInStock
         */
        export interface OutputTotalSsccInStock {
            /**
             * Total
             * Total of SSCCs currently in stock
             */
            total: number;
        }
        /**
         * OutputTransport
         * example:
         * {
         *   "id": "5ac167e9-08c9-4b69-b8dc-3ab5bc500001",
         *   "status": "AT_PICKUP_LOCATION",
         *   "comment": "Comment",
         *   "carrier_id": "5ac167e9-08c9-4b69-b8dc-3ab5bc500001",
         *   "carrier_name": "Carrier 001",
         *   "carrier_phone_number": "+33600000000",
         *   "pickup_address_name": "Pickup address name",
         *   "pickup_address_company": "Pickup address company",
         *   "pickup_address_address_line_1": "Pickup address line 1",
         *   "pickup_address_zip_code": "75001",
         *   "pickup_address_details": "Pickup address details",
         *   "pickup_address_city": "Paris",
         *   "pickup_address_country": "France",
         *   "pickup_address_country_code": "FR",
         *   "pickup_address_latitude": "48.856614",
         *   "pickup_address_longitude": "2.3522219",
         *   "delivery_address_name": "Delivery address name",
         *   "delivery_address_company": "Delivery address company",
         *   "delivery_address_address_line_1": "Delivery address line 1",
         *   "delivery_address_zip_code": "75001",
         *   "delivery_address_details": "Delivery address details",
         *   "delivery_address_city": "Paris",
         *   "delivery_address_country": "France",
         *   "delivery_address_country_code": "FR",
         *   "delivery_address_latitude": "48.856614",
         *   "delivery_address_longitude": "2.3522219",
         *   "pickup_planned_datetime_range": {
         *     "datetime_from": "2021-01-01T00:00:00Z",
         *     "datetime_to": "2021-01-01T00:00:00Z"
         *   },
         *   "delivery_planned_datetime_range": {
         *     "datetime_from": "2021-01-01T00:00:00Z",
         *     "datetime_to": "2021-01-01T00:00:00Z"
         *   },
         *   "pickup_effective_execution_date": "2021-01-01T00:00:00Z",
         *   "delivery_effective_execution_date": "2021-01-01T00:00:00Z",
         *   "created_at": "2021-01-01T00:00:00Z",
         *   "updated_at": "2021-01-01T00:00:00Z"
         * }
         */
        export interface OutputTransport {
            /**
             * Id
             * The transport ID
             */
            id?: string; // uuid
            status: /**
             * TransportStatusEnum
             * Transport status enum.
             */
            RessourcesTransportsModelsTransportStatusEnum;
            /**
             * Comment
             * The transport comment
             */
            comment?: string;
            /**
             * Carrier Id
             * The carrier ID
             */
            carrier_id?: string; // uuid
            /**
             * Carrier Name
             */
            carrier_name?: string;
            /**
             * Carrier Phone Number
             */
            carrier_phone_number?: string;
            /**
             * Pickup Address Name
             * Address name for the pickup location
             */
            pickup_address_name?: string;
            /**
             * Pickup Address Company
             * Company name of the pickup address.
             */
            pickup_address_company?: string;
            /**
             * Pickup Address Address Line 1
             * Line of the pickup address.
             */
            pickup_address_address_line_1?: string;
            /**
             * Pickup Address Zip Code
             * Postal code of the pickup address.
             */
            pickup_address_zip_code?: string;
            /**
             * Pickup Address Details
             * Pickup contact information.
             */
            pickup_address_details?: string;
            /**
             * Pickup Address City
             * City of the pickup address.
             */
            pickup_address_city?: string;
            /**
             * Pickup Address Country
             * Country of the pickup address.<br />Deprecated, use `pickup_address_country_code` instead.
             */
            pickup_address_country?: string;
            /**
             * Pickup Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the pickup address.
             */
            pickup_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Pickup Address Latitude
             * Latitude of the pickup address.
             */
            pickup_address_latitude?: string;
            /**
             * Pickup Address Longitude
             * Longitude of the pickup address.
             */
            pickup_address_longitude?: string;
            /**
             * Delivery Address Name
             * Address name for the delivery location
             */
            delivery_address_name?: string;
            /**
             * Delivery Address Company
             * Company name of the pickup address.
             */
            delivery_address_company?: string;
            /**
             * Delivery Address Address Line 1
             * Line of the delivery address.
             */
            delivery_address_address_line_1?: string;
            /**
             * Delivery Address Zip Code
             * Postal code of the delivery address.
             */
            delivery_address_zip_code?: string;
            /**
             * Delivery Address Details
             * Delivery contact information.
             */
            delivery_address_details?: string;
            /**
             * Delivery Address City
             * City of the delivery address.
             */
            delivery_address_city?: string;
            /**
             * Delivery Address Country
             * Country of the delivery address.<br />Deprecated, use `delivery_address_country_code` instead.
             */
            delivery_address_country?: string;
            /**
             * Delivery Address Country Code
             * Country code (ISO 3166-1 alpha-2) of the delivery address.
             */
            delivery_address_country_code?: string; // ^[A-Z]{2}$
            /**
             * Delivery Address Latitude
             * Latitude of the delivery address.
             */
            delivery_address_latitude?: string;
            /**
             * Delivery Address Longitude
             * Longitude of the delivery address.
             */
            delivery_address_longitude?: string;
            /**
             * Pickup Planned Datetime Range
             * The pickup planned datetime range
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            pickup_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Delivery Planned Datetime Range
             * The delivery planned datetime range
             * example:
             * {
             *   "datetime_from": "2021-05-31T12:00:00.000Z",
             *   "datetime_to": "2021-05-31T16:00:00.000Z"
             * }
             */
            delivery_planned_datetime_range?: {
                /**
                 * Datetime From
                 */
                datetime_from?: string; // date-time
                /**
                 * Datetime To
                 */
                datetime_to?: string; // date-time
            };
            /**
             * Pickup Effective Execution Date
             * The pickup effective execution date
             */
            pickup_effective_execution_date?: string; // date-time
            /**
             * Delivery Effective Execution Date
             * The delivery effective execution date
             */
            delivery_effective_execution_date?: string; // date-time
            /**
             * Created At
             * The transport creation date
             */
            created_at?: string; // date-time
            /**
             * Updated At
             * The transport last update date
             */
            updated_at?: string; // date-time
        }
        /**
         * OutputWarehouseMasterItemStock
         */
        export interface OutputWarehouseMasterItemStock {
            /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            warehouse_id: string; // uuid
            /**
             * Edi Erp Warehouse Id
             * Warehouse identifier used in the ERP software.
             */
            edi_erp_warehouse_id?: string;
            /**
             * Edi Wms Warehouse Id
             * Warehouse identifier used in the WMS software.
             */
            edi_wms_warehouse_id?: string;
            /**
             * Edi Tms Warehouse Id
             * Warehouse identifier used in the TMS software.
             */
            edi_tms_warehouse_id?: string;
            /**
             * Warehouse Reference
             * Reference of the warehouse.
             */
            warehouse_reference?: string;
            /**
             * Number Of Complete Pallet
             * Number of complete pallets in the warehouse.
             */
            number_of_complete_pallet?: number;
            /**
             * Number Of Incomplete Pallet
             * Number of incomplete pallets in the warehouse.
             */
            number_of_incomplete_pallet?: number;
            /**
             * Number Of Complete Cardboard Box
             * Number of complete cardboard boxes in the warehouse.
             */
            number_of_complete_cardboard_box?: number;
            /**
             * Number Of Incomplete Cardboard Box
             * Number of incomplete cardboard boxes in the warehouse.
             */
            number_of_incomplete_cardboard_box?: number;
            /**
             * Number Of Eaches
             * Number of units in the warehouse.
             */
            number_of_eaches?: number;
            /**
             * Each Actual Quantity
             * Deprecated, use `number_of_eaches` fields instead.
             */
            each_actual_quantity?: number;
            /**
             * Cardboard Box Actual Quantity
             * Deprecated, use `number_of_complete_cardboard_box` and `number_of_incomplete_cardboard_box` fields instead.
             */
            cardboard_box_actual_quantity?: number;
            /**
             * Pallet Actual Quantity
             * Deprecated, use `number_of_complete_pallet` and `number_of_incomplete_pallet` fields instead.
             */
            pallet_actual_quantity?: number;
            /**
             * Each Allocated Quantity
             * All planned exits stocks in eaches.
             */
            each_allocated_quantity?: number;
            /**
             * Cardboard Box Allocated Quantity
             * All planned exits stocks in cardboard boxes.
             */
            cardboard_box_allocated_quantity?: number;
            /**
             * Pallet Allocated Quantity
             * All planned exits stocks in pallets.
             */
            pallet_allocated_quantity?: number;
            /**
             * Each Awaited Quantity
             * All planned entries stocks in eaches.
             */
            each_awaited_quantity?: number;
            /**
             * Cardboard Box Awaited Quantity
             * All planned entries stocks in cardboard boxes.
             */
            cardboard_box_awaited_quantity?: number;
            /**
             * Pallet Awaited Quantity
             * All planned entries stocks in pallets.
             */
            pallet_awaited_quantity?: number;
        }
        /**
         * PaginationResponseModel[OutputBatch]
         */
        export interface PaginationResponseModelOutputBatch {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /**
             * OutputBatch
             * example:
             * {
             *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
             *   "name": "batch nb0001",
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_id": "BAT-E0001",
             *   "edi_wms_id": "BAT-W0001",
             *   "edi_tms_id": "BAT-T0001"
             * }
             */
            OutputBatch[];
        }
        /**
         * PaginationResponseModel[OutputCarrier]
         */
        export interface PaginationResponseModelOutputCarrier {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /**
             * OutputCarrier
             * example:
             * {
             *   "id": "dddddddd-dddd-dddd-dddd-dddddddddddd",
             *   "company": "Company 001",
             *   "email": "carrier@example.com",
             *   "phone_number": "+33611111111",
             *   "created_at": "2022-05-17T09:00:00.000Z",
             *   "created_by": "dddddddd-dddd-dddd-dddd-dddddddddddd",
             *   "updated_at": "2022-05-17T09:00:00.000Z",
             *   "updated_by": "dddddddd-dddd-dddd-dddd-dddddddddddd"
             * }
             */
            OutputCarrier[];
        }
        /**
         * PaginationResponseModel[OutputInventoryAdjustement]
         */
        export interface PaginationResponseModelOutputInventoryAdjustement {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /**
             * OutputInventoryAdjustement
             * example:
             * {
             *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
             *   "iid": "ADJ-20220504-001",
             *   "shipper_account_id": "2f8b8f84-dedd-43d7-9b3d-54a6aa32dfce",
             *   "warehouse_id": "33505a58-7875-40a4-8fb9-ff4ca591e1a6",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "comment": "Some products have been found and other have been lost",
             *   "adjustment_date": "2022-05-04 17:00:00",
             *   "created_at": "2022-05-04 17:00.00",
             *   "created_by": "08a55b13-6844-42d4-aad6-6d296d6d893c",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "inventory_adjustement_items": [
             *     {
             *       "id": "81d6e772-3268-4d15-bfe0-7dd6da32ec0a",
             *       "master_item_id": "7df9d108-ad99-47f8-92fd-25cf46babf16",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "initial_quantity": 3,
             *       "difference_quantity": 1,
             *       "sscc_id": "2cb7587b-6c9e-48a6-b0aa-d39f640276ce",
             *       "sscc_stock_entry_date": "2023-10-24T00:00:00.000Z"
             *     },
             *     {
             *       "id": "b77b5d64-e765-496d-beb5-0f0add15ffab",
             *       "master_item_id": "b0ab07d8-c1eb-4ca9-9175-df3a76c79608",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "batch_id": "7ebfea97-648e-4623-82d7-e5b76805cf6b",
             *       "position": 2,
             *       "item_packaging_type": "EACH",
             *       "initial_quantity": 40,
             *       "difference_quantity": 72,
             *       "sscc_id": "649e09cf-0ff2-43f2-ac17-a51eec7ff815",
             *       "sscc_stock_entry_date": "2023-08-01T00:00:00.000Z"
             *     },
             *     {
             *       "id": "f2d4d94e-2dac-4167-a66c-37010fec5e25",
             *       "master_item_id": "5d01237d-6f0e-419b-a919-9bd969884e95",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "batch_id": "3f49f7fe-fe71-4375-85cd-9dfda8905114",
             *       "position": 3,
             *       "item_packaging_type": "EACH",
             *       "initial_quantity": 10,
             *       "difference_quantity": 3,
             *       "sscc_id": "a896670c-7b15-475a-b632-414dc2bf0fa6"
             *     }
             *   ]
             * }
             */
            OutputInventoryAdjustement[];
        }
        /**
         * PaginationResponseModel[OutputListMasterItem]
         */
        export interface PaginationResponseModelOutputListMasterItem {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /**
             * OutputListMasterItem
             * example:
             * {
             *   "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
             *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_reference": "404-600-01",
             *   "designation": "Water bottles",
             *   "cardboard_box_quantity_by_pallet": 1,
             *   "each_barcode_type": "EAN",
             *   "each_barcode": "1234567890123",
             *   "cardboard_box_barcode_type": "EAN",
             *   "cardboard_box_barcode": "1234567890123",
             *   "pallet_barcode_type": "UPC",
             *   "pallet_barcode": "1234567890",
             *   "each_quantity_by_cardboard_box": 1,
             *   "each_quantity_by_pallet": 1,
             *   "each_is_stackable": "true",
             *   "cardboard_box_is_stackable": "false",
             *   "pallet_is_stackable": "false",
             *   "each_width_in_cm": 1.5,
             *   "each_length_in_cm": 1.5,
             *   "each_height_in_cm": 1.5,
             *   "each_volume_in_cm3": 1.5,
             *   "cardboard_box_width_in_cm": 1.5,
             *   "cardboard_box_length_in_cm": 1.5,
             *   "cardboard_box_height_in_cm": 1.5,
             *   "cardboard_box_volume_in_cm3": 1.5,
             *   "pallet_width_in_cm": 1.5,
             *   "pallet_length_in_cm": 1.5,
             *   "pallet_height_in_cm": 1.5,
             *   "pallet_gross_weight_in_kg": 1.5,
             *   "pallet_net_weight_in_kg": 1.5,
             *   "cardboard_box_gross_weight_in_kg": 1.5,
             *   "cardboard_box_net_weight_in_kg": 1.5,
             *   "each_gross_weight_in_kg": 1.5,
             *   "each_net_weight_in_kg": 1.5,
             *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "archived_at": "2022-03-15T11:00:00+00:00",
             *   "metadata": {
             *     "internal_code": "A2NJ34-034",
             *     "driver_licence_plate": "XX-123-XX",
             *     "plant": "My plant"
             *   },
             *   "custom_fields": {
             *     "brand": "Evian",
             *     "category": "beverage"
             *   }
             * }
             */
            OutputListMasterItem[];
        }
        /**
         * PaginationResponseModel[OutputOrder]
         */
        export interface PaginationResponseModelOutputOrder {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            OutputOrder[];
        }
        /**
         * PaginationResponseModel[OutputOrderDocument]
         */
        export interface PaginationResponseModelOutputOrderDocument {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /* OutputOrderDocument */ OutputOrderDocument[];
        }
        /**
         * PaginationResponseModel[OutputSscc]
         */
        export interface PaginationResponseModelOutputSscc {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /* OutputSscc */ OutputSscc[];
        }
        /**
         * PaginationResponseModel[OutputTransport]
         */
        export interface PaginationResponseModelOutputTransport {
            /**
             * Total
             */
            total: number;
            /**
             * First
             */
            first?: string;
            /**
             * Last
             */
            last?: string;
            /**
             * Next
             */
            next?: string;
            /**
             * Prev
             */
            prev?: string;
            /**
             * Items
             */
            items: /**
             * OutputTransport
             * example:
             * {
             *   "id": "5ac167e9-08c9-4b69-b8dc-3ab5bc500001",
             *   "status": "AT_PICKUP_LOCATION",
             *   "comment": "Comment",
             *   "carrier_id": "5ac167e9-08c9-4b69-b8dc-3ab5bc500001",
             *   "carrier_name": "Carrier 001",
             *   "carrier_phone_number": "+33600000000",
             *   "pickup_address_name": "Pickup address name",
             *   "pickup_address_company": "Pickup address company",
             *   "pickup_address_address_line_1": "Pickup address line 1",
             *   "pickup_address_zip_code": "75001",
             *   "pickup_address_details": "Pickup address details",
             *   "pickup_address_city": "Paris",
             *   "pickup_address_country": "France",
             *   "pickup_address_country_code": "FR",
             *   "pickup_address_latitude": "48.856614",
             *   "pickup_address_longitude": "2.3522219",
             *   "delivery_address_name": "Delivery address name",
             *   "delivery_address_company": "Delivery address company",
             *   "delivery_address_address_line_1": "Delivery address line 1",
             *   "delivery_address_zip_code": "75001",
             *   "delivery_address_details": "Delivery address details",
             *   "delivery_address_city": "Paris",
             *   "delivery_address_country": "France",
             *   "delivery_address_country_code": "FR",
             *   "delivery_address_latitude": "48.856614",
             *   "delivery_address_longitude": "2.3522219",
             *   "pickup_planned_datetime_range": {
             *     "datetime_from": "2021-01-01T00:00:00Z",
             *     "datetime_to": "2021-01-01T00:00:00Z"
             *   },
             *   "delivery_planned_datetime_range": {
             *     "datetime_from": "2021-01-01T00:00:00Z",
             *     "datetime_to": "2021-01-01T00:00:00Z"
             *   },
             *   "pickup_effective_execution_date": "2021-01-01T00:00:00Z",
             *   "delivery_effective_execution_date": "2021-01-01T00:00:00Z",
             *   "created_at": "2021-01-01T00:00:00Z",
             *   "updated_at": "2021-01-01T00:00:00Z"
             * }
             */
            OutputTransport[];
        }
        /**
         * TransportStatusEnum
         * Transport status enum.
         */
        export type RessourcesSharedTransportStatusEnum = "NOT_MANAGED_BY_SPACEFILL" | "DRAFT" | "SCHEDULED" | "DELIVERED" | "AT_PICKUP_LOCATION" | "PICKUP_COMPLETED" | "DELIVERY_IN_PROGRESS" | "AT_DELIVERY_LOCATION" | "PICKUP_MISSED" | "DELIVERY_MISSED" | "CANCELED";
        /**
         * TransportStatusEnum
         * Transport status enum.
         */
        export type RessourcesTransportsModelsTransportStatusEnum = "NOT_MANAGED_BY_SPACEFILL" | "DRAFT" | "SCHEDULED" | "DELIVERED" | "AT_PICKUP_LOCATION" | "PICKUP_COMPLETED" | "DELIVERY_IN_PROGRESS" | "AT_DELIVERY_LOCATION" | "PICKUP_MISSED" | "DELIVERY_MISSED" | "CANCELED";
        /**
         * ValidationError
         */
        export interface ValidationError {
            /**
             * Location
             */
            loc: (string | number)[];
            /**
             * Message
             */
            msg: string;
            /**
             * Error Type
             */
            type: string;
        }
    }
}
declare namespace Paths {
    namespace GetV1CarrierList {
        namespace Parameters {
            /**
             * Limit
             * The number of records to retrieve.
             */
            export type Limit = number;
            /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            export type Offset = number;
        }
        export interface QueryParameters {
            offset?: /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            Parameters.Offset;
            limit?: /**
             * Limit
             * The number of records to retrieve.
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputCarrier] */ Components.Schemas.PaginationResponseModelOutputCarrier;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementBatch {
        namespace Parameters {
            /**
             * Batch Id
             * Technical batch identifer.
             */
            export type BatchId = string; // uuid
            /**
             * Include Forecasted Quantity At
             * Use this parameter to include forecasted stock at given date
             */
            export type IncludeForecastedQuantityAt = string; // date
        }
        export interface PathParameters {
            batch_id: /**
             * Batch Id
             * Technical batch identifer.
             */
            Parameters.BatchId /* uuid */;
        }
        export interface QueryParameters {
            include_forecasted_quantity_at?: /**
             * Include Forecasted Quantity At
             * Use this parameter to include forecasted stock at given date
             */
            Parameters.IncludeForecastedQuantityAt /* date */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputBatchWithStock
             * example:
             * {
             *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
             *   "name": "batch nb0001",
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_id": "BAT-E0001",
             *   "edi_wms_id": "BAT-W0001",
             *   "edi_tms_id": "BAT-T0001",
             *   "global_stock_by_batch": {
             *     "number_of_complete_pallet": 2,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 6,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_each": 100
             *   },
             *   "stock_by_warehouse_by_batch": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_each": 50
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_each": 50
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputBatchWithStock;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementBatchList {
        namespace Parameters {
            /**
             * ArchivedFilterEnum
             * An enumeration.
             */
            export type Archived = "yes" | "all" | "no";
            /**
             * Archived After
             * Use this parameter to filter orders archived after date time
             */
            export type ArchivedAfter = string;
            /**
             * Archived Before
             * Use this parameter to filter orders archived before date time
             */
            export type ArchivedBefore = string;
            /**
             * Created After
             * Use this parameter to filter batches created after date time
             */
            export type CreatedAfter = string;
            /**
             * Created Before
             * Use this parameter to filter batches created before date time
             */
            export type CreatedBefore = string;
            /**
             * Limit
             * The number of records to retrieve.
             */
            export type Limit = number;
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            export type MasterItemId = string; // uuid
            /**
             * Name
             * Name of the batch.
             */
            export type Name = string;
            /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            export type Offset = number;
            /**
             * Updated After
             * Use this parameter to filter batches updated after date time
             */
            export type UpdatedAfter = string;
            /**
             * Updated Before
             * Use this parameter to filter batches updated before date time
             */
            export type UpdatedBefore = string;
        }
        export interface QueryParameters {
            master_item_id?: /**
             * Master Item Id
             * Technical reference identifer.
             */
            Parameters.MasterItemId /* uuid */;
            name?: /**
             * Name
             * Name of the batch.
             */
            Parameters.Name;
            offset?: /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            Parameters.Offset;
            limit?: /**
             * Limit
             * The number of records to retrieve.
             */
            Parameters.Limit;
            created_before?: /**
             * Created Before
             * Use this parameter to filter batches created before date time
             */
            Parameters.CreatedBefore;
            created_after?: /**
             * Created After
             * Use this parameter to filter batches created after date time
             */
            Parameters.CreatedAfter;
            updated_before?: /**
             * Updated Before
             * Use this parameter to filter batches updated before date time
             */
            Parameters.UpdatedBefore;
            updated_after?: /**
             * Updated After
             * Use this parameter to filter batches updated after date time
             */
            Parameters.UpdatedAfter;
            archived?: /**
             * ArchivedFilterEnum
             * An enumeration.
             */
            Parameters.Archived;
            archived_before?: /**
             * Archived Before
             * Use this parameter to filter orders archived before date time
             */
            Parameters.ArchivedBefore;
            archived_after?: /**
             * Archived After
             * Use this parameter to filter orders archived after date time
             */
            Parameters.ArchivedAfter;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputBatch] */ Components.Schemas.PaginationResponseModelOutputBatch;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementInventoryAdjustement {
        namespace Parameters {
            /**
             * Inventory Adjustment Id
             */
            export type InventoryAdjustmentId = string; // uuid
        }
        export interface PathParameters {
            inventory_adjustment_id: /* Inventory Adjustment Id */ Parameters.InventoryAdjustmentId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputInventoryAdjustement
             * example:
             * {
             *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
             *   "iid": "ADJ-20220504-001",
             *   "shipper_account_id": "2f8b8f84-dedd-43d7-9b3d-54a6aa32dfce",
             *   "warehouse_id": "33505a58-7875-40a4-8fb9-ff4ca591e1a6",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "comment": "Some products have been found and other have been lost",
             *   "adjustment_date": "2022-05-04 17:00:00",
             *   "created_at": "2022-05-04 17:00.00",
             *   "created_by": "08a55b13-6844-42d4-aad6-6d296d6d893c",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "inventory_adjustement_items": [
             *     {
             *       "id": "81d6e772-3268-4d15-bfe0-7dd6da32ec0a",
             *       "master_item_id": "7df9d108-ad99-47f8-92fd-25cf46babf16",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "initial_quantity": 3,
             *       "difference_quantity": 1,
             *       "sscc_id": "2cb7587b-6c9e-48a6-b0aa-d39f640276ce",
             *       "sscc_stock_entry_date": "2023-10-24T00:00:00.000Z"
             *     },
             *     {
             *       "id": "b77b5d64-e765-496d-beb5-0f0add15ffab",
             *       "master_item_id": "b0ab07d8-c1eb-4ca9-9175-df3a76c79608",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "batch_id": "7ebfea97-648e-4623-82d7-e5b76805cf6b",
             *       "position": 2,
             *       "item_packaging_type": "EACH",
             *       "initial_quantity": 40,
             *       "difference_quantity": 72,
             *       "sscc_id": "649e09cf-0ff2-43f2-ac17-a51eec7ff815",
             *       "sscc_stock_entry_date": "2023-08-01T00:00:00.000Z"
             *     },
             *     {
             *       "id": "f2d4d94e-2dac-4167-a66c-37010fec5e25",
             *       "master_item_id": "5d01237d-6f0e-419b-a919-9bd969884e95",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "batch_id": "3f49f7fe-fe71-4375-85cd-9dfda8905114",
             *       "position": 3,
             *       "item_packaging_type": "EACH",
             *       "initial_quantity": 10,
             *       "difference_quantity": 3,
             *       "sscc_id": "a896670c-7b15-475a-b632-414dc2bf0fa6"
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputInventoryAdjustement;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementInventoryAdjustementList {
        namespace Parameters {
            /**
             * Limit
             * The number of records to retrieve.
             */
            export type Limit = number;
            /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            export type Offset = number;
        }
        export interface QueryParameters {
            offset?: /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            Parameters.Offset;
            limit?: /**
             * Limit
             * The number of records to retrieve.
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputInventoryAdjustement] */ Components.Schemas.PaginationResponseModelOutputInventoryAdjustement;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementMasterItem {
        namespace Parameters {
            /**
             * Include Forecasted Quantity At
             * Use this parameter to include forecasted stock at given date
             */
            export type IncludeForecastedQuantityAt = string; // date
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            export type MasterItemId = string; // uuid
        }
        export interface PathParameters {
            master_item_id: /**
             * Master Item Id
             * Technical reference identifer.
             */
            Parameters.MasterItemId /* uuid */;
        }
        export interface QueryParameters {
            include_forecasted_quantity_at?: /**
             * Include Forecasted Quantity At
             * Use this parameter to include forecasted stock at given date
             */
            Parameters.IncludeForecastedQuantityAt /* date */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputMasterItem
             * example:
             * {
             *   "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
             *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_reference": "404-600-01",
             *   "designation": "Water bottles",
             *   "cardboard_box_quantity_by_pallet": 1,
             *   "each_barcode_type": "EAN",
             *   "each_barcode": "1234567890123",
             *   "cardboard_box_barcode_type": "EAN",
             *   "cardboard_box_barcode": "1234567890123",
             *   "pallet_barcode_type": "UPC",
             *   "pallet_barcode": "1234567890",
             *   "each_quantity_by_cardboard_box": 1,
             *   "each_quantity_by_pallet": 1,
             *   "each_is_stackable": "true",
             *   "cardboard_box_is_stackable": "false",
             *   "pallet_is_stackable": "false",
             *   "each_width_in_cm": 1.5,
             *   "each_length_in_cm": 1.5,
             *   "each_height_in_cm": 1.5,
             *   "each_volume_in_cm3": 1.5,
             *   "cardboard_box_width_in_cm": 1.5,
             *   "cardboard_box_length_in_cm": 1.5,
             *   "cardboard_box_height_in_cm": 1.5,
             *   "cardboard_box_volume_in_cm3": 1.5,
             *   "pallet_width_in_cm": 1.5,
             *   "pallet_length_in_cm": 1.5,
             *   "pallet_height_in_cm": 1.5,
             *   "pallet_gross_weight_in_kg": 1.5,
             *   "pallet_net_weight_in_kg": 1.5,
             *   "cardboard_box_gross_weight_in_kg": 1.5,
             *   "cardboard_box_net_weight_in_kg": 1.5,
             *   "each_gross_weight_in_kg": 1.5,
             *   "each_net_weight_in_kg": 1.5,
             *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "archived_at": "2022-03-15T11:00:00+00:00",
             *   "metadata": {
             *     "internal_code": "A2NJ34-034",
             *     "driver_licence_plate": "XX-123-XX",
             *     "plant": "My plant"
             *   },
             *   "custom_fields": {
             *     "category": "shirt"
             *   },
             *   "global_stock": {
             *     "number_of_complete_pallet": 2,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 6,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 100
             *   },
             *   "stock_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     }
             *   ],
             *   "global_forecasted_quantity": {
             *     "date": "2022-04-06",
             *     "number_of_complete_pallet": 20,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 60,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 500
             *   },
             *   "forecasted_quantity_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputMasterItem;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementMasterItemList {
        namespace Parameters {
            /**
             * ArchivedFilterEnum
             * An enumeration.
             */
            export type Archived = "yes" | "all" | "no";
            /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            export type CardboardBoxBarcode = string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            export type CardboardBoxBarcodeType = "EAN" | "UPC";
            /**
             * Created After
             * Use this parameter to filter master items created after date time
             */
            export type CreatedAfter = string;
            /**
             * Created Before
             * Use this parameter to filter master items created before date time
             */
            export type CreatedBefore = string;
            /**
             * Designation
             * Reference designation.
             */
            export type Designation = string;
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            export type EdiErpId = string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            export type EdiTmsId = string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            export type EdiWmsId = string;
            /**
             * Is Transfered To Erp
             * Boolean to specify if the reference exists in the ERP software.
             */
            export type IsTransferedToErp = boolean;
            /**
             * Is Transfered To Tms
             * Boolean to specify if the reference exists in the TMS software.
             */
            export type IsTransferedToTms = boolean;
            /**
             * Is Transfered To Wms
             * Boolean to specify if the reference exists in the WMS software.
             */
            export type IsTransferedToWms = boolean;
            /**
             * Item Reference
             * Unique reference code.
             */
            export type ItemReference = string;
            /**
             * Limit
             * The number of records to retrieve.
             */
            export type Limit = number;
            /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            export type Offset = number;
            /**
             * Pallet Barcode
             * Pallet barcode.
             */
            export type PalletBarcode = string;
            /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            export type PalletBarcodeType = "EAN" | "UPC";
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            export type ShipperAccountId = string; // uuid
            /**
             * Updated After
             * Use this parameter to filter master items updated after date time
             */
            export type UpdatedAfter = string;
            /**
             * Updated Before
             * Use this parameter to filter master items updated before date time
             */
            export type UpdatedBefore = string;
        }
        export interface QueryParameters {
            item_reference?: /**
             * Item Reference
             * Unique reference code.
             */
            Parameters.ItemReference;
            designation?: /**
             * Designation
             * Reference designation.
             */
            Parameters.Designation;
            shipper_account_id?: /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            Parameters.ShipperAccountId /* uuid */;
            cardboard_box_barcode_type?: /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            Parameters.CardboardBoxBarcodeType;
            cardboard_box_barcode?: /**
             * Cardboard Box Barcode
             * Box barcode.
             */
            Parameters.CardboardBoxBarcode;
            pallet_barcode_type?: /**
             * BarcodeTypeEnum
             * Type of the barcode on the cardboard box. [More information about EAN](https://en.wikipedia.org/wiki/International_Article_Number)
             */
            Parameters.PalletBarcodeType;
            pallet_barcode?: /**
             * Pallet Barcode
             * Pallet barcode.
             */
            Parameters.PalletBarcode;
            created_before?: /**
             * Created Before
             * Use this parameter to filter master items created before date time
             */
            Parameters.CreatedBefore;
            created_after?: /**
             * Created After
             * Use this parameter to filter master items created after date time
             */
            Parameters.CreatedAfter;
            updated_before?: /**
             * Updated Before
             * Use this parameter to filter master items updated before date time
             */
            Parameters.UpdatedBefore;
            updated_after?: /**
             * Updated After
             * Use this parameter to filter master items updated after date time
             */
            Parameters.UpdatedAfter;
            archived?: /**
             * ArchivedFilterEnum
             * An enumeration.
             */
            Parameters.Archived;
            is_transfered_to_erp?: /**
             * Is Transfered To Erp
             * Boolean to specify if the reference exists in the ERP software.
             */
            Parameters.IsTransferedToErp;
            is_transfered_to_wms?: /**
             * Is Transfered To Wms
             * Boolean to specify if the reference exists in the WMS software.
             */
            Parameters.IsTransferedToWms;
            is_transfered_to_tms?: /**
             * Is Transfered To Tms
             * Boolean to specify if the reference exists in the TMS software.
             */
            Parameters.IsTransferedToTms;
            edi_erp_id?: /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            Parameters.EdiErpId;
            edi_wms_id?: /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            Parameters.EdiWmsId;
            edi_tms_id?: /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            Parameters.EdiTmsId;
            offset?: /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            Parameters.Offset;
            limit?: /**
             * Limit
             * The number of records to retrieve.
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputListMasterItem] */ Components.Schemas.PaginationResponseModelOutputListMasterItem;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementOrder {
        namespace Parameters {
            /**
             * Embed
             */
            export type Embed = string[];
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        export interface QueryParameters {
            embed?: /* Embed */ Parameters.Embed;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrderEmbedded
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_wms_id": "third wms master item is",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "batch_name": "batch nb00001",
             *       "batch_edi_erp_id": "BAT-E0001",
             *       "batch_edi_wms_id": "BAT-W0001",
             *       "batch_edi_tms_id": "BAT-T0001",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "_embedded": {
             *         "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
             *         "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *         "item_reference": "404-600-01",
             *         "designation": "Water bottles",
             *         "cardboard_box_quantity_by_pallet": 1,
             *         "each_barcode_type": "EAN",
             *         "each_barcode": "1234567890123",
             *         "cardboard_box_barcode_type": "EAN",
             *         "cardboard_box_barcode": "1234567890123",
             *         "pallet_barcode_type": "UPC",
             *         "pallet_barcode": "1234567890",
             *         "each_quantity_by_cardboard_box": 1,
             *         "each_quantity_by_pallet": 1,
             *         "each_is_stackable": "true",
             *         "cardboard_box_is_stackable": "false",
             *         "pallet_is_stackable": "false",
             *         "each_width_in_cm": 1.5,
             *         "each_length_in_cm": 1.5,
             *         "each_height_in_cm": 1.5,
             *         "each_volume_in_cm3": 1.5,
             *         "cardboard_box_width_in_cm": 1.5,
             *         "cardboard_box_length_in_cm": 1.5,
             *         "cardboard_box_height_in_cm": 1.5,
             *         "cardboard_box_volume_in_cm3": 1.5,
             *         "pallet_width_in_cm": 1.5,
             *         "pallet_length_in_cm": 1.5,
             *         "pallet_height_in_cm": 1.5,
             *         "pallet_gross_weight_in_kg": 1.5,
             *         "pallet_net_weight_in_kg": 1.5,
             *         "cardboard_box_gross_weight_in_kg": 1.5,
             *         "cardboard_box_net_weight_in_kg": 1.5,
             *         "each_gross_weight_in_kg": 1.5,
             *         "each_net_weight_in_kg": 1.5,
             *         "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *         "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *         "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *         "created_at": "2022-04-27T15:02:42.599Z",
             *         "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *         "updated_at": "2022-04-27T15:03:07.845Z",
             *         "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *         "metadata": {
             *           "internal_code": "A2NJ34-034",
             *           "driver_licence_plate": "XX-123-XX",
             *           "plant": "My plant"
             *         },
             *         "custom_fields": {
             *           "category": "chemise"
             *         },
             *         "global_stock": {
             *           "each_actual_quantity": 10,
             *           "cardboard_box_actual_quantity": 20,
             *           "pallet_actual_quantity": 50,
             *           "each_allocated_quantity": 0,
             *           "cardboard_box_allocated_quantity": 8,
             *           "pallet_allocated_quantity": 0,
             *           "each_awaited_quantity": 0,
             *           "cardboard_box_awaited_quantity": 0,
             *           "pallet_awaited_quantity": 1
             *         },
             *         "stock_by_warehouse": [
             *           {
             *             "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *             "warehouse_reference": "warehouse1",
             *             "each_actual_quantity": 10,
             *             "cardboard_box_actual_quantity": 20,
             *             "pallet_actual_quantity": 40,
             *             "each_allocated_quantity": 0,
             *             "cardboard_box_allocated_quantity": 8,
             *             "pallet_allocated_quantity": 0,
             *             "each_awaited_quantity": 0,
             *             "cardboard_box_awaited_quantity": 0,
             *             "pallet_awaited_quantity": 1
             *           },
             *           {
             *             "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *             "warehouse_reference": "warehouse2",
             *             "each_actual_quantity": 0,
             *             "cardboard_box_actual_quantity": 0,
             *             "pallet_actual_quantity": 10,
             *             "each_allocated_quantity": 0,
             *             "cardboard_box_allocated_quantity": 0,
             *             "pallet_allocated_quantity": 0,
             *             "each_awaited_quantity": 0,
             *             "cardboard_box_awaited_quantity": 0,
             *             "pallet_awaited_quantity": 0
             *           }
             *         ],
             *         "global_forecasted_quantity": {
             *           "date": "2022-04-06",
             *           "each_forecasted_quantity": 2000,
             *           "pallet_forecasted_quantity": 20
             *         },
             *         "forecasted_quantity_by_warehouse": [
             *           {
             *             "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *             "warehouse_reference": "warehouse1",
             *             "date": "2022-04-06",
             *             "each_forecasted_quantity": 2000,
             *             "pallet_forecasted_quantity": 20
             *           }
             *         ]
             *       },
             *       "custom_fields": {
             *         "key": "pair"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_tms_id": "third tms master item is",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key": "pair"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrderEmbedded;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementOrderDocumentsList {
        namespace Parameters {
            /**
             * Limit
             */
            export type Limit = number;
            /**
             * Offset
             */
            export type Offset = number;
            /**
             * Order Id
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /* Order Id */ Parameters.OrderId /* uuid */;
        }
        export interface QueryParameters {
            offset?: /* Offset */ Parameters.Offset;
            limit?: /* Limit */ Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputOrderDocument] */ Components.Schemas.PaginationResponseModelOutputOrderDocument;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementOrderDownloadDocument {
        namespace Parameters {
            /**
             * Document Id
             * Document main identifier.
             */
            export type DocumentId = string; // uuid
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
            document_id: /**
             * Document Id
             * Document main identifier.
             */
            Parameters.DocumentId /* uuid */;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementOrderList {
        namespace Parameters {
            /**
             * Created After
             * Use this parameter to filter orders created after date time
             */
            export type CreatedAfter = string;
            /**
             * Created Before
             * Use this parameter to filter orders created before date time
             */
            export type CreatedBefore = string;
            /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            export type EdiErpId = string;
            /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            export type EdiTmsId = string;
            /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            export type EdiWmsId = string;
            /**
             * Id
             * Order main identifier.
             */
            export type Id = string;
            /**
             * Iid
             * Interface identifier in the Spacefill software.
             */
            export type Iid = string;
            /**
             * Is Transfered To Erp
             * Boolean to specify if the reference exists in the ERP software.
             */
            export type IsTransferedToErp = boolean;
            /**
             * Is Transfered To Tms
             * Boolean to specify if the reference exists in the TMS software.
             */
            export type IsTransferedToTms = boolean;
            /**
             * Is Transfered To Wms
             * Boolean to specify if the reference exists in the WMS software.
             */
            export type IsTransferedToWms = boolean;
            /**
             * Limit
             * The number of records to retrieve.
             */
            export type Limit = number;
            /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            export type Offset = number;
            /**
             * OrderTypeEnum
             * Type of the order.
             */
            export type OrderType = "ENTRY" | "EXIT";
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            export type ShipperAccountId = string; // uuid
            /**
             * Shipper Order Reference
             * Shipper order identifier.
             */
            export type ShipperOrderReference = string;
            export type Status = /**
             * OrderStatusEnum
             * An enumeration.
             */
            Components.Schemas.OrderStatusEnum;
            /**
             * Tms Status
             * Status in the TMS software.
             */
            export type TmsStatus = string;
            /**
             * Updated After
             * Use this parameter to filter orders updated after date time
             */
            export type UpdatedAfter = string;
            /**
             * Updated Before
             * Use this parameter to filter orders updated before date time
             */
            export type UpdatedBefore = string;
            /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            export type WarehouseId = string; // uuid
        }
        export interface QueryParameters {
            id?: /**
             * Id
             * Order main identifier.
             */
            Parameters.Id;
            iid?: /**
             * Iid
             * Interface identifier in the Spacefill software.
             */
            Parameters.Iid;
            shipper_order_reference?: /**
             * Shipper Order Reference
             * Shipper order identifier.
             */
            Parameters.ShipperOrderReference;
            shipper_account_id?: /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            Parameters.ShipperAccountId /* uuid */;
            warehouse_id?: /**
             * Warehouse Id
             * Main identifier of the associated warehouse.
             */
            Parameters.WarehouseId /* uuid */;
            order_type?: /**
             * OrderTypeEnum
             * Type of the order.
             */
            Parameters.OrderType;
            status?: Parameters.Status;
            tms_status?: /**
             * Tms Status
             * Status in the TMS software.
             */
            Parameters.TmsStatus;
            offset?: /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            Parameters.Offset;
            limit?: /**
             * Limit
             * The number of records to retrieve.
             */
            Parameters.Limit;
            created_before?: /**
             * Created Before
             * Use this parameter to filter orders created before date time
             */
            Parameters.CreatedBefore;
            created_after?: /**
             * Created After
             * Use this parameter to filter orders created after date time
             */
            Parameters.CreatedAfter;
            updated_before?: /**
             * Updated Before
             * Use this parameter to filter orders updated before date time
             */
            Parameters.UpdatedBefore;
            updated_after?: /**
             * Updated After
             * Use this parameter to filter orders updated after date time
             */
            Parameters.UpdatedAfter;
            edi_erp_id?: /**
             * Edi Erp Id
             * Order identifier used in the ERP software.
             */
            Parameters.EdiErpId;
            edi_wms_id?: /**
             * Edi Wms Id
             * Order identifier used in the WMS software.
             */
            Parameters.EdiWmsId;
            edi_tms_id?: /**
             * Edi Tms Id
             * Order identifier used in the TMS software.
             */
            Parameters.EdiTmsId;
            is_transfered_to_erp?: /**
             * Is Transfered To Erp
             * Boolean to specify if the reference exists in the ERP software.
             */
            Parameters.IsTransferedToErp;
            is_transfered_to_wms?: /**
             * Is Transfered To Wms
             * Boolean to specify if the reference exists in the WMS software.
             */
            Parameters.IsTransferedToWms;
            is_transfered_to_tms?: /**
             * Is Transfered To Tms
             * Boolean to specify if the reference exists in the TMS software.
             */
            Parameters.IsTransferedToTms;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputOrder] */ Components.Schemas.PaginationResponseModelOutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementShipperAcknowledgesReceiptOfAdjustmentAction {
        namespace Parameters {
            /**
             * Order Id
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /* Order Id */ Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementShipperRescheduleOrderAction {
        namespace Parameters {
            /**
             * Order Id
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /* Order Id */ Parameters.OrderId /* uuid */;
        }
        export type RequestBody = /**
         * DateTimeRange
         * example:
         * {
         *   "datetime_from": "2021-05-31T12:00:00.000Z",
         *   "datetime_to": "2021-05-31T16:00:00.000Z"
         * }
         */
        Components.Schemas.DateTimeRange;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementShipperSuggestsPlannedExecutionDateAction {
        namespace Parameters {
            /**
             * Order Id
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /* Order Id */ Parameters.OrderId /* uuid */;
        }
        export type RequestBody = /**
         * DateTimeRange
         * example:
         * {
         *   "datetime_from": "2021-05-31T12:00:00.000Z",
         *   "datetime_to": "2021-05-31T16:00:00.000Z"
         * }
         */
        Components.Schemas.DateTimeRange;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementSsccList {
        namespace Parameters {
            /**
             * Batch Id
             * Technical batch identifer.
             */
            export type BatchId = string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            export type BatchName = string;
            /**
             * Embedded
             */
            export type Embedded = string[];
            /**
             * Include Stock At Zero
             * Include SSCC having stock at 0
             */
            export type IncludeStockAtZero = boolean;
            /**
             * Item Reference
             * Unique reference code associated.
             */
            export type ItemReference = string;
            /**
             * Limit
             * The number of records to retrieve.
             */
            export type Limit = number;
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            export type MasterItemId = string; // uuid
            /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            export type Offset = number;
            /**
             * Serial Shipping Container Code
             * Serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            export type SerialShippingContainerCode = string;
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            export type ShipperAccountId = string; // uuid
            /**
             * Sscc Id
             * Serial Shipping Container Code identifier.
             */
            export type SsccId = string; // uuid
            /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            export type WarehouseId = string; // uuid
            /**
             * Warehouse Reference
             * Reference of the warehouse.
             */
            export type WarehouseReference = string;
        }
        export interface QueryParameters {
            sscc_id?: /**
             * Sscc Id
             * Serial Shipping Container Code identifier.
             */
            Parameters.SsccId /* uuid */;
            serial_shipping_container_code?: /**
             * Serial Shipping Container Code
             * Serial Shipping Container Code. More info [here](https://www.gs1.org/standards/id-keys/sscc).
             */
            Parameters.SerialShippingContainerCode;
            shipper_account_id?: /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            Parameters.ShipperAccountId /* uuid */;
            master_item_id?: /**
             * Master Item Id
             * Technical reference identifer.
             */
            Parameters.MasterItemId /* uuid */;
            item_reference?: /**
             * Item Reference
             * Unique reference code associated.
             */
            Parameters.ItemReference;
            batch_id?: /**
             * Batch Id
             * Technical batch identifer.
             */
            Parameters.BatchId /* uuid */;
            batch_name?: /**
             * Batch Name
             * Name of the batch.
             */
            Parameters.BatchName;
            warehouse_id?: /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            Parameters.WarehouseId /* uuid */;
            warehouse_reference?: /**
             * Warehouse Reference
             * Reference of the warehouse.
             */
            Parameters.WarehouseReference;
            include_stock_at_zero?: /**
             * Include Stock At Zero
             * Include SSCC having stock at 0
             */
            Parameters.IncludeStockAtZero;
            offset?: /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            Parameters.Offset;
            limit?: /**
             * Limit
             * The number of records to retrieve.
             */
            Parameters.Limit;
            embedded?: /* Embedded */ Parameters.Embedded;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputSscc] */ Components.Schemas.PaginationResponseModelOutputSscc;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementSsccTotalInStock {
        namespace Parameters {
            /**
             * Batch Id
             * Technical batch identifer.
             */
            export type BatchId = string; // uuid
            /**
             * Batch Name
             * Name of the batch.
             */
            export type BatchName = string;
            /**
             * Item Reference
             * Unique reference code associated.
             */
            export type ItemReference = string;
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            export type MasterItemId = string; // uuid
            /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            export type ShipperAccountId = string; // uuid
            /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            export type WarehouseId = string; // uuid
            /**
             * Warehouse Reference
             * Reference of the warehouse.
             */
            export type WarehouseReference = string;
        }
        export interface QueryParameters {
            shipper_account_id?: /**
             * Shipper Account Id
             * Main identifier of the associated shipper.
             */
            Parameters.ShipperAccountId /* uuid */;
            master_item_id?: /**
             * Master Item Id
             * Technical reference identifer.
             */
            Parameters.MasterItemId /* uuid */;
            item_reference?: /**
             * Item Reference
             * Unique reference code associated.
             */
            Parameters.ItemReference;
            batch_id?: /**
             * Batch Id
             * Technical batch identifer.
             */
            Parameters.BatchId /* uuid */;
            batch_name?: /**
             * Batch Name
             * Name of the batch.
             */
            Parameters.BatchName;
            warehouse_id?: /**
             * Warehouse Id
             * Warehouse main identifier.
             */
            Parameters.WarehouseId /* uuid */;
            warehouse_reference?: /**
             * Warehouse Reference
             * Reference of the warehouse.
             */
            Parameters.WarehouseReference;
        }
        namespace Responses {
            export type $200 = /* OutputTotalSsccInStock */ Components.Schemas.OutputTotalSsccInStock;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementWarehouseConfirmsPlannedExecutionDateAction {
        namespace Parameters {
            /**
             * Order Id
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /* Order Id */ Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1LogisticManagementWarehouseDeclinesPlannedExecutionDateAction {
        namespace Parameters {
            /**
             * Comment
             */
            export type Comment = string;
            /**
             * Order Id
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /* Order Id */ Parameters.OrderId /* uuid */;
        }
        export interface QueryParameters {
            comment: /* Comment */ Parameters.Comment;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetV1Ping {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace GetV1Transports {
        namespace Parameters {
            /**
             * Limit
             * The number of records to retrieve.
             */
            export type Limit = number;
            /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            export type Offset = number;
        }
        export interface QueryParameters {
            offset?: /**
             * Offset
             * Starting position or index of the first record to be retrieved in a result.
             */
            Parameters.Offset;
            limit?: /**
             * Limit
             * The number of records to retrieve.
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* PaginationResponseModel[OutputTransport] */ Components.Schemas.PaginationResponseModelOutputTransport;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PatchV1LogisticManagementMasterItem {
        namespace Parameters {
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            export type MasterItemId = string; // uuid
        }
        export interface PathParameters {
            master_item_id: /**
             * Master Item Id
             * Technical reference identifer.
             */
            Parameters.MasterItemId /* uuid */;
        }
        export type RequestBody = /* InputPatchMasterItem */ Components.Schemas.InputPatchMasterItem;
        namespace Responses {
            export type $200 = /**
             * OutputPatchMasterItem
             * example:
             * {
             *   "id": "29bcae63-3ee4-40b6-ba60-32159f122552",
             *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_reference": "404-600-01",
             *   "designation": "Water bottles",
             *   "cardboard_box_quantity_by_pallet": 1,
             *   "each_barcode_type": "EAN",
             *   "each_barcode": "1234567890123",
             *   "cardboard_box_barcode_type": "EAN",
             *   "cardboard_box_barcode": "1234567890123",
             *   "pallet_barcode_type": "UPC",
             *   "pallet_barcode": "1234567890",
             *   "each_quantity_by_cardboard_box": 1,
             *   "each_quantity_by_pallet": 1,
             *   "each_is_stackable": "true",
             *   "cardboard_box_is_stackable": "false",
             *   "pallet_is_stackable": "false",
             *   "each_width_in_cm": 1.5,
             *   "each_length_in_cm": 1.5,
             *   "each_height_in_cm": 1.5,
             *   "each_volume_in_cm3": 1.5,
             *   "cardboard_box_width_in_cm": 1.5,
             *   "cardboard_box_length_in_cm": 1.5,
             *   "cardboard_box_height_in_cm": 1.5,
             *   "cardboard_box_volume_in_cm3": 1.5,
             *   "pallet_width_in_cm": 1.5,
             *   "pallet_length_in_cm": 1.5,
             *   "pallet_height_in_cm": 1.5,
             *   "pallet_gross_weight_in_kg": 1.5,
             *   "pallet_net_weight_in_kg": 1.5,
             *   "cardboard_box_gross_weight_in_kg": 1.5,
             *   "cardboard_box_net_weight_in_kg": 1.5,
             *   "each_gross_weight_in_kg": 1.5,
             *   "each_net_weight_in_kg": 1.5,
             *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *   "archived_at": "2022-04-25T09:43:07.742Z",
             *   "metadata": {
             *     "internal_code": "A2NJ34-034",
             *     "driver_licence_plate": "XX-123-XX",
             *     "plant": "My plant"
             *   },
             *   "custom_fields": {
             *     "category": "shirt"
             *   }
             * }
             */
            Components.Schemas.OutputPatchMasterItem;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PatchV1LogisticManagementOrder {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        export type RequestBody = /* InputOrderPatch */ Components.Schemas.InputOrderPatch;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PatchV1TransportStatus {
        namespace Parameters {
            /**
             * Transport Id
             * The transport ID
             */
            export type TransportId = string; // uuid
        }
        export interface PathParameters {
            transport_id: /**
             * Transport Id
             * The transport ID
             */
            Parameters.TransportId /* uuid */;
        }
        export type RequestBody = /**
         * InputTransportModel
         * example:
         * {
         *   "status": "AT_PICKUP_LOCATION",
         *   "status_updated_at": "2021-01-01T00:00:00Z"
         * }
         */
        Components.Schemas.InputTransportModel;
        namespace Responses {
            export type $200 = /**
             * OutputTransport
             * example:
             * {
             *   "id": "5ac167e9-08c9-4b69-b8dc-3ab5bc500001",
             *   "status": "AT_PICKUP_LOCATION",
             *   "comment": "Comment",
             *   "carrier_id": "5ac167e9-08c9-4b69-b8dc-3ab5bc500001",
             *   "carrier_name": "Carrier 001",
             *   "carrier_phone_number": "+33600000000",
             *   "pickup_address_name": "Pickup address name",
             *   "pickup_address_company": "Pickup address company",
             *   "pickup_address_address_line_1": "Pickup address line 1",
             *   "pickup_address_zip_code": "75001",
             *   "pickup_address_details": "Pickup address details",
             *   "pickup_address_city": "Paris",
             *   "pickup_address_country": "France",
             *   "pickup_address_country_code": "FR",
             *   "pickup_address_latitude": "48.856614",
             *   "pickup_address_longitude": "2.3522219",
             *   "delivery_address_name": "Delivery address name",
             *   "delivery_address_company": "Delivery address company",
             *   "delivery_address_address_line_1": "Delivery address line 1",
             *   "delivery_address_zip_code": "75001",
             *   "delivery_address_details": "Delivery address details",
             *   "delivery_address_city": "Paris",
             *   "delivery_address_country": "France",
             *   "delivery_address_country_code": "FR",
             *   "delivery_address_latitude": "48.856614",
             *   "delivery_address_longitude": "2.3522219",
             *   "pickup_planned_datetime_range": {
             *     "datetime_from": "2021-01-01T00:00:00Z",
             *     "datetime_to": "2021-01-01T00:00:00Z"
             *   },
             *   "delivery_planned_datetime_range": {
             *     "datetime_from": "2021-01-01T00:00:00Z",
             *     "datetime_to": "2021-01-01T00:00:00Z"
             *   },
             *   "pickup_effective_execution_date": "2021-01-01T00:00:00Z",
             *   "delivery_effective_execution_date": "2021-01-01T00:00:00Z",
             *   "created_at": "2021-01-01T00:00:00Z",
             *   "updated_at": "2021-01-01T00:00:00Z"
             * }
             */
            Components.Schemas.OutputTransport;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1AsyncLogisticManagementInventoryAdjustement {
        namespace Parameters {
            /**
             * Set To Zero Missing Master Items
             * Set this parameter to true to set all master_items in stock not in inventory_adjustement_items field list to zero
             */
            export type SetToZeroMissingMasterItems = boolean;
        }
        export interface QueryParameters {
            set_to_zero_missing_master_items?: /**
             * Set To Zero Missing Master Items
             * Set this parameter to true to set all master_items in stock not in inventory_adjustement_items field list to zero
             */
            Parameters.SetToZeroMissingMasterItems;
        }
        export type RequestBody = /**
         * InputPostInventoryAdjustement
         * example:
         * {
         *   "shipper_account_id": "2f8b8f84-dedd-43d7-9b3d-54a6aa32dfce",
         *   "warehouse_id": "33505a58-7875-40a4-8fb9-ff4ca591e1a6",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "comment": "Some products have been found and other have been lost",
         *   "inventory_adjustement_items": [
         *     {
         *       "master_item_id": "7df9d108-ad99-47f8-92fd-25cf46babf16",
         *       "batch_name": "batch nb 0001",
         *       "position": 1,
         *       "item_packaging_type": "PALLET",
         *       "actual_quantity_in_stock": 3,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "df549cb3-4c37-4010-ac5f-361ed5185d30",
         *       "sscc_stock_entry_date": "2023-10-24T00:00:00.000Z"
         *     },
         *     {
         *       "master_item_id": "b0ab07d8-c1eb-4ca9-9175-df3a76c79608",
         *       "batch_id": "7ebfea97-648e-4623-82d7-e5b76805cf6b",
         *       "batch_name": "batch nb 0001",
         *       "position": 2,
         *       "item_packaging_type": "EACH",
         *       "actual_difference_quantity": 32,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "c1398ccc-708f-4cb0-b0c6-b741818af782",
         *       "sscc_stock_entry_date": "2023-08-01T00:00:00.000Z"
         *     },
         *     {
         *       "master_item_id": "5d01237d-6f0e-419b-a919-9bd969884e95",
         *       "batch_id": "3f49f7fe-fe71-4375-85cd-9dfda8905114",
         *       "batch_name": "batch nb 0001",
         *       "position": 3,
         *       "item_packaging_type": "EACH",
         *       "actual_difference_quantity": -7,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "dec6583c-5ac7-46c8-b61f-75e89b51d03d"
         *     }
         *   ]
         * }
         */
        Components.Schemas.InputPostInventoryAdjustement;
        namespace Responses {
            export type $200 = /* AsyncResponse */ Components.Schemas.AsyncResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1Carrier {
        export type RequestBody = /**
         * InputCarrier
         * example:
         * {
         *   "company": "Company 001",
         *   "email": "carrier@example.com",
         *   "phone_number": "+33611111111"
         * }
         */
        Components.Schemas.InputCarrier;
        namespace Responses {
            export type $200 = /**
             * OutputCarrier
             * example:
             * {
             *   "id": "dddddddd-dddd-dddd-dddd-dddddddddddd",
             *   "company": "Company 001",
             *   "email": "carrier@example.com",
             *   "phone_number": "+33611111111",
             *   "created_at": "2022-05-17T09:00:00.000Z",
             *   "created_by": "dddddddd-dddd-dddd-dddd-dddddddddddd",
             *   "updated_at": "2022-05-17T09:00:00.000Z",
             *   "updated_by": "dddddddd-dddd-dddd-dddd-dddddddddddd"
             * }
             */
            Components.Schemas.OutputCarrier;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementBatch {
        export type RequestBody = /**
         * InputPostBatch
         * example:
         * {
         *   "name": "batch nb0001",
         *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "edi_erp_id": "EDI_ERP_ID",
         *   "edi_wms_id": "EDI_WMS_ID",
         *   "edi_tms_id": "EDI_TMS_ID",
         *   "batch_edi_erp_id": "BAT-E0001",
         *   "batch_edi_wms_id": "BAT-W0001",
         *   "batch_edi_tms_id": "BAT-T0001"
         * }
         */
        Components.Schemas.InputPostBatch;
        namespace Responses {
            export type $200 = /**
             * OutputBatch
             * example:
             * {
             *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
             *   "name": "batch nb0001",
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_id": "BAT-E0001",
             *   "edi_wms_id": "BAT-W0001",
             *   "edi_tms_id": "BAT-T0001"
             * }
             */
            Components.Schemas.OutputBatch;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementCreateWebhookWebhook {
        namespace Parameters {
            /**
             * Target Url
             */
            export type TargetUrl = string;
        }
        export interface QueryParameters {
            target_url: /* Target Url */ Parameters.TargetUrl;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementEvent {
        export type RequestBody = /* InputPostEvent */ Components.Schemas.InputPostEvent;
        namespace Responses {
            /**
             * Response Post V1 Logistic Management Event V1 Logistic Management Events  Post
             */
            export interface $200 {
            }
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementInventoryAdjustement {
        namespace Parameters {
            /**
             * Set To Zero Missing Master Items
             * Set this parameter to true to set all master_items in stock not in inventory_adjustement_items field list to zero
             */
            export type SetToZeroMissingMasterItems = boolean;
        }
        export interface QueryParameters {
            set_to_zero_missing_master_items?: /**
             * Set To Zero Missing Master Items
             * Set this parameter to true to set all master_items in stock not in inventory_adjustement_items field list to zero
             */
            Parameters.SetToZeroMissingMasterItems;
        }
        export type RequestBody = /**
         * InputPostInventoryAdjustement
         * example:
         * {
         *   "shipper_account_id": "2f8b8f84-dedd-43d7-9b3d-54a6aa32dfce",
         *   "warehouse_id": "33505a58-7875-40a4-8fb9-ff4ca591e1a6",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "comment": "Some products have been found and other have been lost",
         *   "inventory_adjustement_items": [
         *     {
         *       "master_item_id": "7df9d108-ad99-47f8-92fd-25cf46babf16",
         *       "batch_name": "batch nb 0001",
         *       "position": 1,
         *       "item_packaging_type": "PALLET",
         *       "actual_quantity_in_stock": 3,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "df549cb3-4c37-4010-ac5f-361ed5185d30",
         *       "sscc_stock_entry_date": "2023-10-24T00:00:00.000Z"
         *     },
         *     {
         *       "master_item_id": "b0ab07d8-c1eb-4ca9-9175-df3a76c79608",
         *       "batch_id": "7ebfea97-648e-4623-82d7-e5b76805cf6b",
         *       "batch_name": "batch nb 0001",
         *       "position": 2,
         *       "item_packaging_type": "EACH",
         *       "actual_difference_quantity": 32,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "c1398ccc-708f-4cb0-b0c6-b741818af782",
         *       "sscc_stock_entry_date": "2023-08-01T00:00:00.000Z"
         *     },
         *     {
         *       "master_item_id": "5d01237d-6f0e-419b-a919-9bd969884e95",
         *       "batch_id": "3f49f7fe-fe71-4375-85cd-9dfda8905114",
         *       "batch_name": "batch nb 0001",
         *       "position": 3,
         *       "item_packaging_type": "EACH",
         *       "actual_difference_quantity": -7,
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "sscc_id": "dec6583c-5ac7-46c8-b61f-75e89b51d03d"
         *     }
         *   ]
         * }
         */
        Components.Schemas.InputPostInventoryAdjustement;
        namespace Responses {
            export type $200 = /**
             * OutputInventoryAdjustement
             * example:
             * {
             *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
             *   "iid": "ADJ-20220504-001",
             *   "shipper_account_id": "2f8b8f84-dedd-43d7-9b3d-54a6aa32dfce",
             *   "warehouse_id": "33505a58-7875-40a4-8fb9-ff4ca591e1a6",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "comment": "Some products have been found and other have been lost",
             *   "adjustment_date": "2022-05-04 17:00:00",
             *   "created_at": "2022-05-04 17:00.00",
             *   "created_by": "08a55b13-6844-42d4-aad6-6d296d6d893c",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "inventory_adjustement_items": [
             *     {
             *       "id": "81d6e772-3268-4d15-bfe0-7dd6da32ec0a",
             *       "master_item_id": "7df9d108-ad99-47f8-92fd-25cf46babf16",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "initial_quantity": 3,
             *       "difference_quantity": 1,
             *       "sscc_id": "2cb7587b-6c9e-48a6-b0aa-d39f640276ce",
             *       "sscc_stock_entry_date": "2023-10-24T00:00:00.000Z"
             *     },
             *     {
             *       "id": "b77b5d64-e765-496d-beb5-0f0add15ffab",
             *       "master_item_id": "b0ab07d8-c1eb-4ca9-9175-df3a76c79608",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "batch_id": "7ebfea97-648e-4623-82d7-e5b76805cf6b",
             *       "position": 2,
             *       "item_packaging_type": "EACH",
             *       "initial_quantity": 40,
             *       "difference_quantity": 72,
             *       "sscc_id": "649e09cf-0ff2-43f2-ac17-a51eec7ff815",
             *       "sscc_stock_entry_date": "2023-08-01T00:00:00.000Z"
             *     },
             *     {
             *       "id": "f2d4d94e-2dac-4167-a66c-37010fec5e25",
             *       "master_item_id": "5d01237d-6f0e-419b-a919-9bd969884e95",
             *       "edi_erp_id": "third erp master item is",
             *       "edi_wms_id": "third wms master item is",
             *       "edi_tms_id": "third tms master item is",
             *       "batch_id": "3f49f7fe-fe71-4375-85cd-9dfda8905114",
             *       "position": 3,
             *       "item_packaging_type": "EACH",
             *       "initial_quantity": 10,
             *       "difference_quantity": 3,
             *       "sscc_id": "a896670c-7b15-475a-b632-414dc2bf0fa6"
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputInventoryAdjustement;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementMasterItem {
        export type RequestBody = /**
         * InputPostMasterItem
         * example:
         * {
         *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "category": "shirt"
         *   }
         * }
         */
        Components.Schemas.InputPostMasterItem;
        namespace Responses {
            export type $200 = /**
             * OutputMasterItem
             * example:
             * {
             *   "id": "45a1d586-2615-4137-a59b-e2bf1ac6db12",
             *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_reference": "404-600-01",
             *   "designation": "Water bottles",
             *   "cardboard_box_quantity_by_pallet": 1,
             *   "each_barcode_type": "EAN",
             *   "each_barcode": "1234567890123",
             *   "cardboard_box_barcode_type": "EAN",
             *   "cardboard_box_barcode": "1234567890123",
             *   "pallet_barcode_type": "UPC",
             *   "pallet_barcode": "1234567890",
             *   "each_quantity_by_cardboard_box": 1,
             *   "each_quantity_by_pallet": 1,
             *   "each_is_stackable": "true",
             *   "cardboard_box_is_stackable": "false",
             *   "pallet_is_stackable": "false",
             *   "each_width_in_cm": 1.5,
             *   "each_length_in_cm": 1.5,
             *   "each_height_in_cm": 1.5,
             *   "each_volume_in_cm3": 1.5,
             *   "cardboard_box_width_in_cm": 1.5,
             *   "cardboard_box_length_in_cm": 1.5,
             *   "cardboard_box_height_in_cm": 1.5,
             *   "cardboard_box_volume_in_cm3": 1.5,
             *   "pallet_width_in_cm": 1.5,
             *   "pallet_length_in_cm": 1.5,
             *   "pallet_height_in_cm": 1.5,
             *   "pallet_gross_weight_in_kg": 1.5,
             *   "pallet_net_weight_in_kg": 1.5,
             *   "cardboard_box_gross_weight_in_kg": 1.5,
             *   "cardboard_box_net_weight_in_kg": 1.5,
             *   "each_gross_weight_in_kg": 1.5,
             *   "each_net_weight_in_kg": 1.5,
             *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "archived_at": "2022-03-15T11:00:00+00:00",
             *   "metadata": {
             *     "internal_code": "A2NJ34-034",
             *     "driver_licence_plate": "XX-123-XX",
             *     "plant": "My plant"
             *   },
             *   "custom_fields": {
             *     "category": "shirt"
             *   },
             *   "global_stock": {
             *     "number_of_complete_pallet": 2,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 6,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 100
             *   },
             *   "stock_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "number_of_complete_pallet": 1,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 3,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 50
             *     }
             *   ],
             *   "global_forecasted_quantity": {
             *     "date": "2022-04-06",
             *     "number_of_complete_pallet": 20,
             *     "number_of_incomplete_pallet": 1,
             *     "number_of_complete_cardboard_box": 60,
             *     "number_of_incomplete_cardboard_box": 0,
             *     "number_of_eaches": 500
             *   },
             *   "forecasted_quantity_by_warehouse": [
             *     {
             *       "warehouse_id": "83dfacb6-b86f-4178-a5b2-c8918ad5423c",
             *       "warehouse_reference": "warehouse1",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 1,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     },
             *     {
             *       "warehouse_id": "1cf18767-1e08-4b2e-ac49-0ad9dee77d72",
             *       "warehouse_reference": "warehouse2",
             *       "date": "2022-04-06",
             *       "number_of_complete_pallet": 10,
             *       "number_of_incomplete_pallet": 0,
             *       "number_of_complete_cardboard_box": 30,
             *       "number_of_incomplete_cardboard_box": 0,
             *       "number_of_eaches": 250
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputMasterItem;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementOrderUploadDocument {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        export type RequestBody = /* Body_post_v1_logistic_management_order_upload_document_v1_logistic_management_orders__order_id__documents__post */ Components.Schemas.BodyPostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost;
        namespace Responses {
            export type $200 = /* OutputOrderDocument */ Components.Schemas.OutputOrderDocument;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementShipperCancelsOrderAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementShipperCreateEntryOrderAction {
        export type RequestBody = /**
         * InputOrderEntry
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "shipper_order_reference": "REF_01",
         *   "warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "comment": "Additional comment",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "entry_expeditor": "string",
         *   "entry_expeditor_address_line1": "string",
         *   "entry_expeditor_address_zip": "string",
         *   "entry_expeditor_address_details": "string",
         *   "entry_expeditor_address_city": "string",
         *   "entry_expeditor_address_country_code": "string",
         *   "entry_expeditor_address_lat": "12.0001",
         *   "entry_expeditor_address_lng": "12.0001",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "key": "value"
         *   },
         *   "order_items": [
         *     {
         *       "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 0001",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        Components.Schemas.InputOrderEntry;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementShipperCreateOrUpdateDraftOrderAction {
        export type RequestBody = /**
         * InputOrderDraft
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "order_type": "ENTRY",
         *   "shipper_order_reference": "REF_01",
         *   "warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "comment": "Additional comment",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "entry_expeditor": "string",
         *   "entry_expeditor_address_line1": "string",
         *   "entry_expeditor_address_line2": "string",
         *   "entry_expeditor_address_line3": "string",
         *   "entry_expeditor_address_zip": "string",
         *   "entry_expeditor_address_details": "string",
         *   "entry_expeditor_address_city": "string",
         *   "entry_expeditor_address_country_code": "string",
         *   "entry_expeditor_address_lat": "12.0001",
         *   "entry_expeditor_address_lng": "12.0001",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2025-09-28T14:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "key": "value"
         *   },
         *   "order_items": [
         *     {
         *       "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        Components.Schemas.InputOrderDraft;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementShipperCreatesOrderExitAction {
        export type RequestBody = /**
         * InputOrderExit
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "shipper_order_reference": "REF_01",
         *   "warehouse_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "comment": "Additional comment",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2025-09-28T15:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "exit_final_recipient": "string",
         *   "exit_final_recipient_address_line1": "string",
         *   "exit_final_recipient_address_zip": "string",
         *   "exit_final_recipient_address_details": "string",
         *   "exit_final_recipient_address_city": "string",
         *   "exit_final_recipient_address_country_code": "string",
         *   "exit_final_recipient_address_lat": "12.34",
         *   "exit_final_recipient_address_lng": "2.34",
         *   "exit_final_recipient_planned_datetime_range": {
         *     "datetime_from": "2025-09-28T15:12:41.538Z",
         *     "datetime_to": "2025-09-28T15:12:41.538Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "key": "value"
         *   },
         *   "order_items": [
         *     {
         *       "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb0001",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        Components.Schemas.InputOrderExit;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementShipperUpdatesOrderAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        export type RequestBody = /**
         * InputShipperUpdateOrderAction
         * example:
         * {
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2022-05-27T13:22:47.917Z",
         *     "datetime_to": "2022-05-27T13:22:47.917Z"
         *   },
         *   "exit_final_recipient_planned_datetime_range": {
         *     "datetime_from": "2022-04-28T15:05:55.935Z",
         *     "datetime_to": "2022-04-28T15:05:55.935Z"
         *   },
         *   "comment": "string",
         *   "tms_status": "string",
         *   "shipper_order_reference": "string",
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "order_items": {
         *     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
         *     "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *     "item_packaging_type": "PALLET",
         *     "expected_quantity": 1,
         *     "custom_fields": {
         *       "key1": "value1",
         *       "key2": "value2"
         *     }
         *   }
         * }
         */
        Components.Schemas.InputShipperUpdateOrderAction;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementShipperValidateDraftOrderAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        export type RequestBody = /* Body_post_v1_logistic_management_warehouse_acknowledges_receipt_of_order_action_v1_logistic_management_orders__order_id__warehouse_acknowledges_receipt_of_order_action_post */ Components.Schemas.BodyPostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderActionV1LogisticManagementOrdersOrderIdWarehouseAcknowledgesReceiptOfOrderActionPost;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        export type RequestBody = /* Body_post_v1_logistic_management_warehouse_adjust_stock_after_order_is_completed_action_v1_logistic_management_orders__order_id__warehouse_adjust_stock_after_order_is_completed_action_post */ Components.Schemas.BodyPostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedActionV1LogisticManagementOrdersOrderIdWarehouseAdjustStockAfterOrderIsCompletedActionPost;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseCreatesOrderAction {
        export type RequestBody = /**
         * InputWarehouseCreatesOrderAction
         * example:
         * {
         *   "id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "shipper_account_id": "1de9c987-08ab-32fe-e218-89c124cd0001",
         *   "warehouse_id": "d8bdc728-242b-4039-99a3-0aa239650001",
         *   "planned_execution_datetime_range": {
         *     "datetime_from": "2022-05-11T06:00:00.000Z",
         *     "datetime_to": "2022-05-11T10:00:00.000Z"
         *   },
         *   "order_type": "ENTRY",
         *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "comment": "string",
         *   "shipper_order_reference": "string",
         *   "entry_expeditor_planned_datetime_range": {
         *     "datetime_from": "2022-05-11T06:00:00.000Z",
         *     "datetime_to": "2022-05-11T10:00:00.000Z"
         *   },
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_erp_warehouse_id": "string",
         *   "edi_wms_warehouse_id": "string",
         *   "edi_tms_warehouse_id": "string",
         *   "edi_erp_shipper_id": "string",
         *   "edi_wms_shipper_id": "string",
         *   "edi_tms_shipper_id": "string",
         *   "entry_expeditor": "Name 0001",
         *   "entry_expeditor_address_line1": "29 rue poissonière",
         *   "entry_expeditor_address_zip": "75009",
         *   "entry_expeditor_address_details": "some details about the customer address",
         *   "entry_expeditor_address_city": "Paris",
         *   "entry_expeditor_address_country_code": "FR",
         *   "entry_expeditor_address_lat": "48.843900",
         *   "entry_expeditor_address_lng": "2.358800",
         *   "entry_expeditor_customer_address_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "exit_final_recipient": "Name 0001",
         *   "exit_final_recipient_address_line1": "29 rue poissonière",
         *   "exit_final_recipient_address_zip": "75009",
         *   "exit_final_recipient_address_details": "some details about the customer address",
         *   "exit_final_recipient_address_city": "Paris",
         *   "exit_final_recipient_address_country_code": "FR",
         *   "exit_final_recipient_address_lat": "48.843900",
         *   "exit_final_recipient_address_lng": "2.358800",
         *   "exit_final_recipient_customer_address_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "order_items": [
         *     {
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 1",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "PALLET",
         *       "expected_quantity": 10,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     },
         *     {
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 1",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "CARDBOARD_BOX",
         *       "expected_quantity": 5,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     },
         *     {
         *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
         *       "batch_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *       "batch_name": "batch nb 1",
         *       "batch_edi_erp_id": "BAT-E0001",
         *       "batch_edi_wms_id": "BAT-W0001",
         *       "batch_edi_tms_id": "BAT-T0001",
         *       "item_packaging_type": "EACH",
         *       "expected_quantity": 1,
         *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
         *       "serial_shipping_container_code": "xxxxxxxx",
         *       "custom_fields": {
         *         "key1": "Value",
         *         "key2": "Value"
         *       }
         *     }
         *   ]
         * }
         */
        Components.Schemas.InputWarehouseCreatesOrderAction;
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseEmitsOrderReceiptErrorAction {
        namespace Parameters {
            /**
             * Comment
             */
            export type Comment = string;
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        export interface QueryParameters {
            comment?: /* Comment */ Parameters.Comment;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseFinishesPreparationAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseFinishesUnloadingAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseStartsPreparationAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PostV1LogisticManagementWarehouseStartsUnloadingAction {
        namespace Parameters {
            /**
             * Order Id
             * Order main identifier.
             */
            export type OrderId = string; // uuid
        }
        export interface PathParameters {
            order_id: /**
             * Order Id
             * Order main identifier.
             */
            Parameters.OrderId /* uuid */;
        }
        namespace Responses {
            export type $200 = /**
             * OutputOrder
             * example:
             * {
             *   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "iid": "string",
             *   "shipper_order_reference": "string",
             *   "customer_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "warehouse_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_shipper_id": "string",
             *   "edi_wms_shipper_id": "string",
             *   "edi_tms_shipper_id": "string",
             *   "edi_erp_warehouse_id": "string",
             *   "edi_wms_warehouse_id": "string",
             *   "edi_tms_warehouse_id": "string",
             *   "order_type": "ENTRY",
             *   "status": "WAREHOUSE_NEEDS_TO_CONFIRM_PLANNED_EXECUTION_DATE_STATE",
             *   "comment": "string",
             *   "planned_execution_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "effective_executed_at": "2022-05-17T09:37:15.337Z",
             *   "transport_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_phone_number": "+33611111111",
             *   "transport_name": "John Doe",
             *   "transport_status": "SCHEDULED",
             *   "transport_carrier_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "transport_carrier_company": "ACME",
             *   "transport_carrier_phone_number": "+33611111111",
             *   "transport_carrier_email": "support@acme.example",
             *   "entry_expeditor": "string",
             *   "entry_expeditor_company": "string",
             *   "entry_expeditor_address_line1": "string",
             *   "entry_expeditor_address_zip": "string",
             *   "entry_expeditor_address_details": "string",
             *   "entry_expeditor_address_city": "string",
             *   "entry_expeditor_address_country_code": "string",
             *   "entry_expeditor_address_lat": "string",
             *   "entry_expeditor_address_lng": "string",
             *   "entry_expeditor_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "exit_final_recipient": "string",
             *   "exit_final_recipient_company": "string",
             *   "exit_final_recipient_address_line1": "string",
             *   "exit_final_recipient_address_zip": "string",
             *   "exit_final_recipient_address_details": "string",
             *   "exit_final_recipient_address_city": "string",
             *   "exit_final_recipient_address_country_code": "string",
             *   "exit_final_recipient_address_lat": "string",
             *   "exit_final_recipient_address_lng": "string",
             *   "exit_final_recipient_planned_datetime_range": {
             *     "datetime_from": "2022-05-17T09:37:15.337Z",
             *     "datetime_to": "2022-05-17T09:37:15.337Z"
             *   },
             *   "edi_erp_id": "string",
             *   "edi_wms_id": "string",
             *   "edi_tms_id": "string",
             *   "transfered_to_erp_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_wms_at": "2022-05-17T09:37:15.337Z",
             *   "transfered_to_tms_at": "2022-05-17T09:37:15.337Z",
             *   "created_at": "2022-05-17T09:37:15.337Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-05-17T09:37:15.337Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "metadata": {},
             *   "documents": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "name": "string",
             *       "type": [
             *         "string"
             *       ],
             *       "created_at": "2022-05-17T09:37:15.337Z"
             *     }
             *   ],
             *   "is_unfulfillable": false,
             *   "order_items": [
             *     {
             *       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *       "master_item_id": "13acc10a-a6ab-4099-b600-fb33fa6c0001",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "batch_name": "batch nb 0004",
             *       "batch_edi_erp_id": "BAT-E0004",
             *       "batch_edi_wms_id": "BAT-W0004",
             *       "batch_edi_tms_id": "BAT-T0004",
             *       "batch_id": "2a701f4a-0de9-46d2-bdb2-6c45af2df334",
             *       "position": 1,
             *       "item_packaging_type": "PALLET",
             *       "expected_quantity": 1,
             *       "actual_quantity": 0,
             *       "custom_fields": {
             *         "key1": "Value",
             *         "key2": "Value"
             *       }
             *     },
             *     {
             *       "id": "dd16a6fb-e940-4fd8-a5a0-7276bcf3dd12",
             *       "master_item_id": "0d64acd0-e8b2-406c-891f-e5df8d01d5b0",
             *       "edi_erp_id": "third erp master item id",
             *       "edi_wms_id": "third wms master item id",
             *       "edi_tms_id": "third tms master item id",
             *       "position": 2,
             *       "item_packaging_type": "CARDBOARD_BOX",
             *       "expected_quantity": 1,
             *       "sscc_id": "d5f2e82d-b7ab-48dd-b4f4-9ff32420be14",
             *       "serial_shipping_container_code": "xxxxxxxx",
             *       "custom_fields": {
             *         "key2": "Value"
             *       }
             *     }
             *   ]
             * }
             */
            Components.Schemas.OutputOrder;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PutV1LogisticManagementBatch {
        namespace Parameters {
            /**
             * Batch Id
             */
            export type BatchId = string; // uuid
        }
        export interface PathParameters {
            batch_id: /* Batch Id */ Parameters.BatchId /* uuid */;
        }
        export type RequestBody = /**
         * InputPutBatch
         * example:
         * {
         *   "name": "batch nb0001",
         *   "batch_edi_erp_id": "BAT-E0001",
         *   "batch_edi_wms_id": "BAT-W0001",
         *   "batch_edi_tms_id": "BAT-T0001"
         * }
         */
        Components.Schemas.InputPutBatch;
        namespace Responses {
            export type $200 = /**
             * OutputBatch
             * example:
             * {
             *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
             *   "name": "batch nb0001",
             *   "master_item_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "created_at": "2022-04-27T15:02:42.599Z",
             *   "created_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "updated_at": "2022-04-27T15:03:07.845Z",
             *   "updated_by": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
             *   "edi_erp_id": "BAT-E0001",
             *   "edi_wms_id": "BAT-W0001",
             *   "edi_tms_id": "BAT-T0001"
             * }
             */
            Components.Schemas.OutputBatch;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace PutV1LogisticManagementMasterItem {
        namespace Parameters {
            /**
             * Master Item Id
             * Technical reference identifer.
             */
            export type MasterItemId = string; // uuid
        }
        export interface PathParameters {
            master_item_id: /**
             * Master Item Id
             * Technical reference identifer.
             */
            Parameters.MasterItemId /* uuid */;
        }
        export type RequestBody = /**
         * InputPutMasterItem
         * example:
         * {
         *   "id": "6f726d52-e1dc-4870-b0ed-7a777e83ba3e",
         *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "item_reference": "404-600-01",
         *   "designation": "Water bottles",
         *   "cardboard_box_quantity_by_pallet": 1,
         *   "each_barcode_type": "EAN",
         *   "each_barcode": "1234567890123",
         *   "cardboard_box_barcode_type": "EAN",
         *   "cardboard_box_barcode": "1234567890123",
         *   "pallet_barcode_type": "UPC",
         *   "pallet_barcode": "1234567890",
         *   "each_quantity_by_cardboard_box": 1,
         *   "each_quantity_by_pallet": 1,
         *   "each_is_stackable": "true",
         *   "cardboard_box_is_stackable": "false",
         *   "pallet_is_stackable": "false",
         *   "each_width_in_cm": 1.5,
         *   "each_length_in_cm": 1.5,
         *   "each_height_in_cm": 1.5,
         *   "each_volume_in_cm3": 1.5,
         *   "cardboard_box_width_in_cm": 1.5,
         *   "cardboard_box_length_in_cm": 1.5,
         *   "cardboard_box_height_in_cm": 1.5,
         *   "cardboard_box_volume_in_cm3": 1.5,
         *   "pallet_width_in_cm": 1.5,
         *   "pallet_length_in_cm": 1.5,
         *   "pallet_height_in_cm": 1.5,
         *   "pallet_gross_weight_in_kg": 1.5,
         *   "pallet_net_weight_in_kg": 1.5,
         *   "cardboard_box_gross_weight_in_kg": 1.5,
         *   "cardboard_box_net_weight_in_kg": 1.5,
         *   "each_gross_weight_in_kg": 1.5,
         *   "each_net_weight_in_kg": 1.5,
         *   "edi_erp_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_wms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "edi_tms_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
         *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
         *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
         *   "metadata": {
         *     "internal_code": "A2NJ34-034",
         *     "driver_licence_plate": "XX-123-XX",
         *     "plant": "My plant"
         *   },
         *   "custom_fields": {
         *     "category": "shirt"
         *   }
         * }
         */
        Components.Schemas.InputPutMasterItem;
        namespace Responses {
            export type $200 = /**
             * OutputPutMasterItem
             * example:
             * {
             *   "id": "29bcae63-3ee4-40b6-ba60-32159f122552",
             *   "shipper_account_id": "1ddddddd-1ddd-1ddd-1ddd-1dddddddddd",
             *   "item_reference": "404-600-01",
             *   "designation": "Water bottles",
             *   "cardboard_box_quantity_by_pallet": 1,
             *   "each_barcode_type": "EAN",
             *   "each_barcode": "1234567890123",
             *   "cardboard_box_barcode_type": "EAN",
             *   "cardboard_box_barcode": "1234567890123",
             *   "pallet_barcode_type": "UPC",
             *   "pallet_barcode": "1234567890",
             *   "each_quantity_by_cardboard_box": 1,
             *   "each_quantity_by_pallet": 1,
             *   "each_is_stackable": "true",
             *   "cardboard_box_is_stackable": "false",
             *   "pallet_is_stackable": "false",
             *   "each_width_in_cm": 1.5,
             *   "each_length_in_cm": 1.5,
             *   "each_height_in_cm": 1.5,
             *   "each_volume_in_cm3": 1.5,
             *   "cardboard_box_width_in_cm": 1.5,
             *   "cardboard_box_length_in_cm": 1.5,
             *   "cardboard_box_height_in_cm": 1.5,
             *   "cardboard_box_volume_in_cm3": 1.5,
             *   "pallet_width_in_cm": 1.5,
             *   "pallet_length_in_cm": 1.5,
             *   "pallet_height_in_cm": 1.5,
             *   "pallet_gross_weight_in_kg": 1.5,
             *   "pallet_net_weight_in_kg": 1.5,
             *   "cardboard_box_gross_weight_in_kg": 1.5,
             *   "cardboard_box_net_weight_in_kg": 1.5,
             *   "each_gross_weight_in_kg": 1.5,
             *   "each_net_weight_in_kg": 1.5,
             *   "transfered_to_erp_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_wms_at": "2022-04-25T09:43:07.742Z",
             *   "transfered_to_tms_at": "2022-04-25T09:43:07.742Z",
             *   "archived_at": "2022-04-25T09:43:07.742Z",
             *   "metadata": {
             *     "internal_code": "A2NJ34-034",
             *     "driver_licence_plate": "XX-123-XX",
             *     "plant": "My plant"
             *   },
             *   "custom_fields": {
             *     "category": "shirt"
             *   }
             * }
             */
            Components.Schemas.OutputPutMasterItem;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace _ {
        namespace Get {
            namespace Responses {
                export interface $307 {
                }
            }
        }
    }
}

export interface OperationMethods {
  /**
   * get_v1_ping - Ping API Rest
   */
  'get_v1_ping'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1Ping.Responses.$200>
  /**
   * get_v1_logistic_management_master_item_list - List references
   * 
   * List and filter <<glossary:reference>>s.
   */
  'get_v1_logistic_management_master_item_list'(
    parameters?: Parameters<Paths.GetV1LogisticManagementMasterItemList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementMasterItemList.Responses.$200>
  /**
   * post_v1_logistic_management_master_item - Create a reference
   * 
   * Create a <<glossary:reference>>.
   * 
   * > 🚧 Avoiding conflict:
   * >
   * > Setting a value for the `each_quantity_by_pallet` field conflicts with the values of the `cardboard_box_quantity_by_pallet` and `each_quantity_by_cardboard_box` fields.
   * > Furthermore, you should set a value to `each_quantity_by_cardboard_box` when setting a value to `cardboard_box_quantity_by_pallet`.
   * 
   * > Reference creation is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly to prevent anomalies.
   */
  'post_v1_logistic_management_master_item'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementMasterItem.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementMasterItem.Responses.$200>
  /**
   * get_v1_logistic_management_master_item - View a reference
   * 
   * View the details of a <<glossary:reference>> with current and forecasted stock quantities.
   */
  'get_v1_logistic_management_master_item'(
    parameters?: Parameters<Paths.GetV1LogisticManagementMasterItem.PathParameters & Paths.GetV1LogisticManagementMasterItem.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementMasterItem.Responses.$200>
  /**
   * put_v1_logistic_management_master_item - Replace a reference
   * 
   * Replace all the fields of a <<glossary:reference>>, if the transfered_to_xxx_at and metadata fields are missing, it will be replaced by null.
   * 
   * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
   */
  'put_v1_logistic_management_master_item'(
    parameters?: Parameters<Paths.PutV1LogisticManagementMasterItem.PathParameters> | null,
    data?: Paths.PutV1LogisticManagementMasterItem.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutV1LogisticManagementMasterItem.Responses.$200>
  /**
   * patch_v1_logistic_management_master_item - Update a reference
   * 
   * Update one or several fields of a <<glossary:reference>> without overwriting existing fields.
   * 
   * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
   */
  'patch_v1_logistic_management_master_item'(
    parameters?: Parameters<Paths.PatchV1LogisticManagementMasterItem.PathParameters> | null,
    data?: Paths.PatchV1LogisticManagementMasterItem.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchV1LogisticManagementMasterItem.Responses.$200>
  /**
   * get_v1_logistic_management_batch_list - List batches
   * 
   * List and filter <<glossary:batch>>es.
   */
  'get_v1_logistic_management_batch_list'(
    parameters?: Parameters<Paths.GetV1LogisticManagementBatchList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementBatchList.Responses.$200>
  /**
   * post_v1_logistic_management_batch - Create a batch
   */
  'post_v1_logistic_management_batch'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementBatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementBatch.Responses.$200>
  /**
   * get_v1_logistic_management_batch - View a batch
   * 
   * View the details of a <<glossary:batch>> with current stock quantities.
   */
  'get_v1_logistic_management_batch'(
    parameters?: Parameters<Paths.GetV1LogisticManagementBatch.PathParameters & Paths.GetV1LogisticManagementBatch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementBatch.Responses.$200>
  /**
   * put_v1_logistic_management_batch - Replace Batch resource
   */
  'put_v1_logistic_management_batch'(
    parameters?: Parameters<Paths.PutV1LogisticManagementBatch.PathParameters> | null,
    data?: Paths.PutV1LogisticManagementBatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutV1LogisticManagementBatch.Responses.$200>
  /**
   * get_v1_logistic_management_order_list - List orders
   * 
   * List and filter <<glossary:order>>s.
   */
  'get_v1_logistic_management_order_list'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrderList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrderList.Responses.$200>
  /**
   * get_v1_logistic_management_order - View an order
   * 
   * View the details of an order and all order items associated.
   */
  'get_v1_logistic_management_order'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrder.PathParameters & Paths.GetV1LogisticManagementOrder.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrder.Responses.$200>
  /**
   * patch_v1_logistic_management_order - Update an order
   * 
   * Update one or several fields of <<glossary:order>>.
   */
  'patch_v1_logistic_management_order'(
    parameters?: Parameters<Paths.PatchV1LogisticManagementOrder.PathParameters> | null,
    data?: Paths.PatchV1LogisticManagementOrder.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchV1LogisticManagementOrder.Responses.$200>
  /**
   * post_v1_logistic_management_shipper_create_entry_order_action - Create an entry order
   * 
   * Create an <<glossary:entry order>>.
   * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
   * 
   * ```
   * entry_expeditor
   * entry_expeditor_address_line1
   * entry_expeditor_address_zip
   * entry_expeditor_address_city
   * entry_expeditor_address_country
   * entry_expeditor_address_country_code
   * ```
   * 
   * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
   */
  'post_v1_logistic_management_shipper_create_entry_order_action'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementShipperCreateEntryOrderAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementShipperCreateEntryOrderAction.Responses.$200>
  /**
   * post_v1_logistic_management_shipper_creates_order_exit_action - Create an exit order
   * 
   * Create an <<glossary:exit order>>.
   * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
   * 
   * ```
   * exit_final_recipient
   * exit_final_recipient_address_line1
   * exit_final_recipient_address_zip
   * exit_final_recipient_address_city
   * exit_final_recipient_address_country
   * exit_final_recipient_address_country_code
   * ```
   * 
   * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
   */
  'post_v1_logistic_management_shipper_creates_order_exit_action'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementShipperCreatesOrderExitAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementShipperCreatesOrderExitAction.Responses.$200>
  /**
   * get_v1_logistic_management_order_documents_list - List order documents
   */
  'get_v1_logistic_management_order_documents_list'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrderDocumentsList.PathParameters & Paths.GetV1LogisticManagementOrderDocumentsList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrderDocumentsList.Responses.$200>
  /**
   * get_v1_logistic_management_order_download_document - Download a document
   */
  'get_v1_logistic_management_order_download_document'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrderDownloadDocument.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrderDownloadDocument.Responses.$200>
  /**
   * post_v1_logistic_management_order_upload_document - Attach document to an order
   */
  'post_v1_logistic_management_order_upload_document'(
    parameters?: Parameters<Paths.PostV1LogisticManagementOrderUploadDocument.PathParameters> | null,
    data?: Paths.PostV1LogisticManagementOrderUploadDocument.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementOrderUploadDocument.Responses.$200>
  /**
   * get_v1_logistic_management_warehouse_confirms_planned_execution_date_action - With this endpoint, the warehouse/logistic-provider user can confirm the planned execution date proposed by the shipper user
   */
  'get_v1_logistic_management_warehouse_confirms_planned_execution_date_action'(
    parameters?: Parameters<Paths.GetV1LogisticManagementWarehouseConfirmsPlannedExecutionDateAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementWarehouseConfirmsPlannedExecutionDateAction.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_acknowledges_receipt_of_order_action - Acknowledge reception of an order
   * 
   * Confirm receipt or exit of the <<glossary:order>> to the <<glossary:Shipper>>.
   */
  'post_v1_logistic_management_warehouse_acknowledges_receipt_of_order_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderAction.PathParameters> | null,
    data?: Paths.PostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderAction.Responses.$200>
  /**
   * get_v1_logistic_management_shipper_acknowledges_receipt_of_adjustment_action - With this endpoint, a shipper-user can acknowledge that the order items have been updated by the warehouse after order completion
   */
  'get_v1_logistic_management_shipper_acknowledges_receipt_of_adjustment_action'(
    parameters?: Parameters<Paths.GetV1LogisticManagementShipperAcknowledgesReceiptOfAdjustmentAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementShipperAcknowledgesReceiptOfAdjustmentAction.Responses.$200>
  /**
   * post_v1_logistic_management_shipper_cancels_order_action - Cancel an order
   */
  'post_v1_logistic_management_shipper_cancels_order_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementShipperCancelsOrderAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementShipperCancelsOrderAction.Responses.$200>
  /**
   * get_v1_logistic_management_shipper_reschedule_order_action - With this endpoint, a shipper-user can reschedule a planned order
   */
  'get_v1_logistic_management_shipper_reschedule_order_action'(
    parameters?: Parameters<Paths.GetV1LogisticManagementShipperRescheduleOrderAction.PathParameters> | null,
    data?: Paths.GetV1LogisticManagementShipperRescheduleOrderAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementShipperRescheduleOrderAction.Responses.$200>
  /**
   * get_v1_logistic_management_shipper_suggests_planned_execution_date_action - With this endpoint, a shipper-user can reschedule an order whose previous planned execution date has been refused by the warehouse/logistic-provider-user
   */
  'get_v1_logistic_management_shipper_suggests_planned_execution_date_action'(
    parameters?: Parameters<Paths.GetV1LogisticManagementShipperSuggestsPlannedExecutionDateAction.PathParameters> | null,
    data?: Paths.GetV1LogisticManagementShipperSuggestsPlannedExecutionDateAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementShipperSuggestsPlannedExecutionDateAction.Responses.$200>
  /**
   * post_v1_logistic_management_shipper_updates_order_action - Update an order
   * 
   * Update an <<glossary:entry order>> or <<glossary:exit order>>. You will be able to validate the draft later.
   * 
   * The accepted fields depend on the `order_type` field:
   * 
   * - If you need to update an <<glossary:entry order>>, please use the dedicated fields that start with `entry_expeditor_` to specify the sender information.
   * 
   * - If you need to update an <<glossary:exit order>>, please use the dedicated fields that start with `exit_final_recipient_` to specify the final recipient information.
   * 
   * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
   * 
   * ```
   * entry_expeditor
   * entry_expeditor_address_line1
   * entry_expeditor_address_zip
   * entry_expeditor_address_city
   * entry_expeditor_address_country
   * entry_expeditor_address_country_code
   * ```
   * 
   * OR
   * 
   * ```
   * exit_final_recipient
   * exit_final_recipient_address_line1
   * exit_final_recipient_address_zip
   * exit_final_recipient_address_city
   * exit_final_recipient_address_country
   * ```
   * 
   * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
   */
  'post_v1_logistic_management_shipper_updates_order_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementShipperUpdatesOrderAction.PathParameters> | null,
    data?: Paths.PostV1LogisticManagementShipperUpdatesOrderAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementShipperUpdatesOrderAction.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_adjust_stock_after_order_is_completed_action - Adjust stock after order completion
   */
  'post_v1_logistic_management_warehouse_adjust_stock_after_order_is_completed_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedAction.PathParameters> | null,
    data?: Paths.PostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedAction.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_creates_order_action - Create an order
   * 
   * Create an <<glossary:order>>. The accepted fields depend on the `order_type` field:
   * - If you need to create an <<glossary:entry order>>, you need to use the fields that start with `entry_expeditor_` to specify the sender information.
   * - If you need to create an <<glossary:exit order>>, you need to use the fields that start with `exit_final_recipient_` to specify the final recipient information.
   * 
   * If the following fields correspond to an existing address in the shipper [address-book](https://app.spacefill.fr/settings/address-book/):
   * 
   * ```
   * entry_expeditor_address_line1
   * entry_expeditor_address_zip
   * entry_expeditor_address_city
   * entry_expeditor_address_country
   * entry_expeditor_address_country_code
   * ```
   * 
   * OR
   * 
   * ```
   * exit_final_recipient_address_line1
   * exit_final_recipient_address_zip
   * exit_final_recipient_address_city
   * exit_final_recipient_address_country
   * exit_final_recipient_address_country_code
   * ```
   * 
   * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
   */
  'post_v1_logistic_management_warehouse_creates_order_action'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementWarehouseCreatesOrderAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseCreatesOrderAction.Responses.$200>
  /**
   * get_v1_logistic_management_warehouse_declines_planned_execution_date_action - With this endpoint, the warehouse/logistic-provider user can notify the shipper-user that the planned execution date is not available
   */
  'get_v1_logistic_management_warehouse_declines_planned_execution_date_action'(
    parameters?: Parameters<Paths.GetV1LogisticManagementWarehouseDeclinesPlannedExecutionDateAction.PathParameters & Paths.GetV1LogisticManagementWarehouseDeclinesPlannedExecutionDateAction.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementWarehouseDeclinesPlannedExecutionDateAction.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_emits_order_receipt_error_action - Order not received
   * 
   * Inform the <<glossary:shipper>> that the <<glossary:order>> has not been received.
   */
  'post_v1_logistic_management_warehouse_emits_order_receipt_error_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseEmitsOrderReceiptErrorAction.PathParameters & Paths.PostV1LogisticManagementWarehouseEmitsOrderReceiptErrorAction.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseEmitsOrderReceiptErrorAction.Responses.$200>
  /**
   * post_v1_logistic_management_create_webhook_webhook - Create a order webhook
   */
  'post_v1_logistic_management_create_webhook_webhook'(
    parameters?: Parameters<Paths.PostV1LogisticManagementCreateWebhookWebhook.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementCreateWebhookWebhook.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_starts_unloading_action - Order unloading has begun
   * 
   * Inform the <<glossary:shipper>> that the <<glossary:order>> unloading has begun.
   */
  'post_v1_logistic_management_warehouse_starts_unloading_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseStartsUnloadingAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseStartsUnloadingAction.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_finishes_unloading_action - Order unloading has ended
   * 
   * Inform the <<glossary:shipper>> that the <<glossary:order>> unloading has ended.
   */
  'post_v1_logistic_management_warehouse_finishes_unloading_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseFinishesUnloadingAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseFinishesUnloadingAction.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_starts_preparation_action - Order preparation has begun
   * 
   * Inform the <<glossary:shipper>> that the <<glossary:order>> preparation has begun.
   */
  'post_v1_logistic_management_warehouse_starts_preparation_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseStartsPreparationAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseStartsPreparationAction.Responses.$200>
  /**
   * post_v1_logistic_management_warehouse_finishes_preparation_action - Order preparation has ended
   * 
   * Inform the <<glossary:shipper>> that the <<glossary:order>> preparation has ended.
   */
  'post_v1_logistic_management_warehouse_finishes_preparation_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseFinishesPreparationAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementWarehouseFinishesPreparationAction.Responses.$200>
  /**
   * post_v1_logistic_management_shipper_create_or_update_draft_order_action - Create/update a draft order
   * 
   * Create/update a draft entry or exit order. You will be able to validate the draft later.
   * 
   * The accepted fields depend on the `order_type` field:
   * 
   * - If you need to write an <<glossary:entry order>>, please use the dedicated fields that start with `entry_expeditor_` to specify the sender information.
   * 
   * - If you need to write an <<glossary:exit order>>, please use the dedicated fields that start with `exit_final_recipient_` to specify the final recipient information.
   * 
   * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
   * 
   * ```
   * entry_expeditor
   * entry_expeditor_address_line1
   * entry_expeditor_address_zip
   * entry_expeditor_address_city
   * entry_expeditor_address_country
   * entry_expeditor_address_country_code
   * ```
   * 
   * or
   * 
   * ```
   * exit_final_recipient
   * exit_final_recipient_address_line1
   * exit_final_recipient_address_zip
   * exit_final_recipient_address_city
   * exit_final_recipient_address_country
   * exit_final_recipient_address_country_code
   * ```
   * 
   * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
   */
  'post_v1_logistic_management_shipper_create_or_update_draft_order_action'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementShipperCreateOrUpdateDraftOrderAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementShipperCreateOrUpdateDraftOrderAction.Responses.$200>
  /**
   * post_v1_logistic_management_shipper_validate_draft_order_action - Validate a draft order
   */
  'post_v1_logistic_management_shipper_validate_draft_order_action'(
    parameters?: Parameters<Paths.PostV1LogisticManagementShipperValidateDraftOrderAction.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementShipperValidateDraftOrderAction.Responses.$200>
  /**
   * get_v1_logistic_management_inventory_adjustement_list - List inventory adjustments
   */
  'get_v1_logistic_management_inventory_adjustement_list'(
    parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustementList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustementList.Responses.$200>
  /**
   * post_v1_logistic_management_inventory_adjustement - Create an inventory adjustment
   */
  'post_v1_logistic_management_inventory_adjustement'(
    parameters?: Parameters<Paths.PostV1LogisticManagementInventoryAdjustement.QueryParameters> | null,
    data?: Paths.PostV1LogisticManagementInventoryAdjustement.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementInventoryAdjustement.Responses.$200>
  /**
   * post_v1_async_logistic_management_inventory_adjustement - Create an inventory adjustment (asynchronously)
   */
  'post_v1_async_logistic_management_inventory_adjustement'(
    parameters?: Parameters<Paths.PostV1AsyncLogisticManagementInventoryAdjustement.QueryParameters> | null,
    data?: Paths.PostV1AsyncLogisticManagementInventoryAdjustement.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1AsyncLogisticManagementInventoryAdjustement.Responses.$200>
  /**
   * get_v1_logistic_management_inventory_adjustement - View an inventory adjustment
   */
  'get_v1_logistic_management_inventory_adjustement'(
    parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustement.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustement.Responses.$200>
  /**
   * get_v1_logistic_management_sscc_list - List SSCC informations and stock
   */
  'get_v1_logistic_management_sscc_list'(
    parameters?: Parameters<Paths.GetV1LogisticManagementSsccList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementSsccList.Responses.$200>
  /**
   * get_v1_logistic_management_sscc_total_in_stock - Get total of SSCC currently in stock
   */
  'get_v1_logistic_management_sscc_total_in_stock'(
    parameters?: Parameters<Paths.GetV1LogisticManagementSsccTotalInStock.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementSsccTotalInStock.Responses.$200>
  /**
   * get_v1_carrier_list - List carriers from carriers book and from LSP
   */
  'get_v1_carrier_list'(
    parameters?: Parameters<Paths.GetV1CarrierList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1CarrierList.Responses.$200>
  /**
   * post_v1_carrier - Create a carrier
   */
  'post_v1_carrier'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1Carrier.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1Carrier.Responses.$200>
  /**
   * get_v1_transports - Get V1 Transports
   * 
   * Return all transports for a given carrier
   */
  'get_v1_transports'(
    parameters?: Parameters<Paths.GetV1Transports.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1Transports.Responses.$200>
  /**
   * patch_v1_transport_status - Patch V1 Transport Status
   * 
   * Update a transport
   */
  'patch_v1_transport_status'(
    parameters?: Parameters<Paths.PatchV1TransportStatus.PathParameters> | null,
    data?: Paths.PatchV1TransportStatus.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchV1TransportStatus.Responses.$200>
  /**
   * post_v1_logistic_management_event - Post an event
   * 
   * Post an event.
   */
  'post_v1_logistic_management_event'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementEvent.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementEvent.Responses.$200>
}

export interface PathsDictionary {
  ['/']: {
  }
  ['/v1/ping']: {
    /**
     * get_v1_ping - Ping API Rest
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1Ping.Responses.$200>
  }
  ['/v1/logistic_management/master_items/']: {
    /**
     * get_v1_logistic_management_master_item_list - List references
     * 
     * List and filter <<glossary:reference>>s.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementMasterItemList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementMasterItemList.Responses.$200>
    /**
     * post_v1_logistic_management_master_item - Create a reference
     * 
     * Create a <<glossary:reference>>.
     * 
     * > 🚧 Avoiding conflict:
     * >
     * > Setting a value for the `each_quantity_by_pallet` field conflicts with the values of the `cardboard_box_quantity_by_pallet` and `each_quantity_by_cardboard_box` fields.
     * > Furthermore, you should set a value to `each_quantity_by_cardboard_box` when setting a value to `cardboard_box_quantity_by_pallet`.
     * 
     * > Reference creation is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly to prevent anomalies.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementMasterItem.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementMasterItem.Responses.$200>
  }
  ['/v1/logistic_management/master_items/{master_item_id}/']: {
    /**
     * get_v1_logistic_management_master_item - View a reference
     * 
     * View the details of a <<glossary:reference>> with current and forecasted stock quantities.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementMasterItem.PathParameters & Paths.GetV1LogisticManagementMasterItem.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementMasterItem.Responses.$200>
    /**
     * put_v1_logistic_management_master_item - Replace a reference
     * 
     * Replace all the fields of a <<glossary:reference>>, if the transfered_to_xxx_at and metadata fields are missing, it will be replaced by null.
     * 
     * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
     */
    'put'(
      parameters?: Parameters<Paths.PutV1LogisticManagementMasterItem.PathParameters> | null,
      data?: Paths.PutV1LogisticManagementMasterItem.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutV1LogisticManagementMasterItem.Responses.$200>
    /**
     * patch_v1_logistic_management_master_item - Update a reference
     * 
     * Update one or several fields of a <<glossary:reference>> without overwriting existing fields.
     * 
     * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
     */
    'patch'(
      parameters?: Parameters<Paths.PatchV1LogisticManagementMasterItem.PathParameters> | null,
      data?: Paths.PatchV1LogisticManagementMasterItem.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchV1LogisticManagementMasterItem.Responses.$200>
  }
  ['/v1/logistic_management/batches/']: {
    /**
     * get_v1_logistic_management_batch_list - List batches
     * 
     * List and filter <<glossary:batch>>es.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementBatchList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementBatchList.Responses.$200>
    /**
     * post_v1_logistic_management_batch - Create a batch
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementBatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementBatch.Responses.$200>
  }
  ['/v1/logistic_management/batches/{batch_id}/']: {
    /**
     * get_v1_logistic_management_batch - View a batch
     * 
     * View the details of a <<glossary:batch>> with current stock quantities.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementBatch.PathParameters & Paths.GetV1LogisticManagementBatch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementBatch.Responses.$200>
    /**
     * put_v1_logistic_management_batch - Replace Batch resource
     */
    'put'(
      parameters?: Parameters<Paths.PutV1LogisticManagementBatch.PathParameters> | null,
      data?: Paths.PutV1LogisticManagementBatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutV1LogisticManagementBatch.Responses.$200>
  }
  ['/v1/logistic_management/orders/']: {
    /**
     * get_v1_logistic_management_order_list - List orders
     * 
     * List and filter <<glossary:order>>s.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrderList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrderList.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/']: {
    /**
     * get_v1_logistic_management_order - View an order
     * 
     * View the details of an order and all order items associated.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrder.PathParameters & Paths.GetV1LogisticManagementOrder.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrder.Responses.$200>
    /**
     * patch_v1_logistic_management_order - Update an order
     * 
     * Update one or several fields of <<glossary:order>>.
     */
    'patch'(
      parameters?: Parameters<Paths.PatchV1LogisticManagementOrder.PathParameters> | null,
      data?: Paths.PatchV1LogisticManagementOrder.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchV1LogisticManagementOrder.Responses.$200>
  }
  ['/v1/logistic_management/orders/entry/']: {
    /**
     * post_v1_logistic_management_shipper_create_entry_order_action - Create an entry order
     * 
     * Create an <<glossary:entry order>>.
     * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
     * 
     * ```
     * entry_expeditor
     * entry_expeditor_address_line1
     * entry_expeditor_address_zip
     * entry_expeditor_address_city
     * entry_expeditor_address_country
     * entry_expeditor_address_country_code
     * ```
     * 
     * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementShipperCreateEntryOrderAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementShipperCreateEntryOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/exit/']: {
    /**
     * post_v1_logistic_management_shipper_creates_order_exit_action - Create an exit order
     * 
     * Create an <<glossary:exit order>>.
     * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
     * 
     * ```
     * exit_final_recipient
     * exit_final_recipient_address_line1
     * exit_final_recipient_address_zip
     * exit_final_recipient_address_city
     * exit_final_recipient_address_country
     * exit_final_recipient_address_country_code
     * ```
     * 
     * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementShipperCreatesOrderExitAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementShipperCreatesOrderExitAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/documents']: {
    /**
     * get_v1_logistic_management_order_documents_list - List order documents
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrderDocumentsList.PathParameters & Paths.GetV1LogisticManagementOrderDocumentsList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrderDocumentsList.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/documents/{document_id}/download']: {
    /**
     * get_v1_logistic_management_order_download_document - Download a document
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrderDownloadDocument.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrderDownloadDocument.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/documents/']: {
    /**
     * post_v1_logistic_management_order_upload_document - Attach document to an order
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementOrderUploadDocument.PathParameters> | null,
      data?: Paths.PostV1LogisticManagementOrderUploadDocument.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementOrderUploadDocument.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_confirms_planned_execution_date']: {
    /**
     * get_v1_logistic_management_warehouse_confirms_planned_execution_date_action - With this endpoint, the warehouse/logistic-provider user can confirm the planned execution date proposed by the shipper user
     */
    'post'(
      parameters?: Parameters<Paths.GetV1LogisticManagementWarehouseConfirmsPlannedExecutionDateAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementWarehouseConfirmsPlannedExecutionDateAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_acknowledges_receipt_of_order_action']: {
    /**
     * post_v1_logistic_management_warehouse_acknowledges_receipt_of_order_action - Acknowledge reception of an order
     * 
     * Confirm receipt or exit of the <<glossary:order>> to the <<glossary:Shipper>>.
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderAction.PathParameters> | null,
      data?: Paths.PostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseAcknowledgesReceiptOfOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/shipper_acknowledges_receipt_of_adjustment_action']: {
    /**
     * get_v1_logistic_management_shipper_acknowledges_receipt_of_adjustment_action - With this endpoint, a shipper-user can acknowledge that the order items have been updated by the warehouse after order completion
     */
    'post'(
      parameters?: Parameters<Paths.GetV1LogisticManagementShipperAcknowledgesReceiptOfAdjustmentAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementShipperAcknowledgesReceiptOfAdjustmentAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/shipper_cancels_order_action']: {
    /**
     * post_v1_logistic_management_shipper_cancels_order_action - Cancel an order
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementShipperCancelsOrderAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementShipperCancelsOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/shipper_reschedule_order_action']: {
    /**
     * get_v1_logistic_management_shipper_reschedule_order_action - With this endpoint, a shipper-user can reschedule a planned order
     */
    'post'(
      parameters?: Parameters<Paths.GetV1LogisticManagementShipperRescheduleOrderAction.PathParameters> | null,
      data?: Paths.GetV1LogisticManagementShipperRescheduleOrderAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementShipperRescheduleOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/shipper_suggests_planned_execution_date_action']: {
    /**
     * get_v1_logistic_management_shipper_suggests_planned_execution_date_action - With this endpoint, a shipper-user can reschedule an order whose previous planned execution date has been refused by the warehouse/logistic-provider-user
     */
    'post'(
      parameters?: Parameters<Paths.GetV1LogisticManagementShipperSuggestsPlannedExecutionDateAction.PathParameters> | null,
      data?: Paths.GetV1LogisticManagementShipperSuggestsPlannedExecutionDateAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementShipperSuggestsPlannedExecutionDateAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/shipper_updates_order_action']: {
    /**
     * post_v1_logistic_management_shipper_updates_order_action - Update an order
     * 
     * Update an <<glossary:entry order>> or <<glossary:exit order>>. You will be able to validate the draft later.
     * 
     * The accepted fields depend on the `order_type` field:
     * 
     * - If you need to update an <<glossary:entry order>>, please use the dedicated fields that start with `entry_expeditor_` to specify the sender information.
     * 
     * - If you need to update an <<glossary:exit order>>, please use the dedicated fields that start with `exit_final_recipient_` to specify the final recipient information.
     * 
     * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
     * 
     * ```
     * entry_expeditor
     * entry_expeditor_address_line1
     * entry_expeditor_address_zip
     * entry_expeditor_address_city
     * entry_expeditor_address_country
     * entry_expeditor_address_country_code
     * ```
     * 
     * OR
     * 
     * ```
     * exit_final_recipient
     * exit_final_recipient_address_line1
     * exit_final_recipient_address_zip
     * exit_final_recipient_address_city
     * exit_final_recipient_address_country
     * ```
     * 
     * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementShipperUpdatesOrderAction.PathParameters> | null,
      data?: Paths.PostV1LogisticManagementShipperUpdatesOrderAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementShipperUpdatesOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_adjust_stock_after_order_is_completed_action']: {
    /**
     * post_v1_logistic_management_warehouse_adjust_stock_after_order_is_completed_action - Adjust stock after order completion
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedAction.PathParameters> | null,
      data?: Paths.PostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseAdjustStockAfterOrderIsCompletedAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/warehouse_creates_order_action']: {
    /**
     * post_v1_logistic_management_warehouse_creates_order_action - Create an order
     * 
     * Create an <<glossary:order>>. The accepted fields depend on the `order_type` field:
     * - If you need to create an <<glossary:entry order>>, you need to use the fields that start with `entry_expeditor_` to specify the sender information.
     * - If you need to create an <<glossary:exit order>>, you need to use the fields that start with `exit_final_recipient_` to specify the final recipient information.
     * 
     * If the following fields correspond to an existing address in the shipper [address-book](https://app.spacefill.fr/settings/address-book/):
     * 
     * ```
     * entry_expeditor_address_line1
     * entry_expeditor_address_zip
     * entry_expeditor_address_city
     * entry_expeditor_address_country
     * entry_expeditor_address_country_code
     * ```
     * 
     * OR
     * 
     * ```
     * exit_final_recipient_address_line1
     * exit_final_recipient_address_zip
     * exit_final_recipient_address_city
     * exit_final_recipient_address_country
     * exit_final_recipient_address_country_code
     * ```
     * 
     * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementWarehouseCreatesOrderAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseCreatesOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_declines_planned_execution_date_action']: {
    /**
     * get_v1_logistic_management_warehouse_declines_planned_execution_date_action - With this endpoint, the warehouse/logistic-provider user can notify the shipper-user that the planned execution date is not available
     */
    'post'(
      parameters?: Parameters<Paths.GetV1LogisticManagementWarehouseDeclinesPlannedExecutionDateAction.PathParameters & Paths.GetV1LogisticManagementWarehouseDeclinesPlannedExecutionDateAction.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementWarehouseDeclinesPlannedExecutionDateAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_emits_order_receipt_error_action']: {
    /**
     * post_v1_logistic_management_warehouse_emits_order_receipt_error_action - Order not received
     * 
     * Inform the <<glossary:shipper>> that the <<glossary:order>> has not been received.
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseEmitsOrderReceiptErrorAction.PathParameters & Paths.PostV1LogisticManagementWarehouseEmitsOrderReceiptErrorAction.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseEmitsOrderReceiptErrorAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/hooks']: {
    /**
     * post_v1_logistic_management_create_webhook_webhook - Create a order webhook
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementCreateWebhookWebhook.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementCreateWebhookWebhook.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_starts_unloading_action']: {
    /**
     * post_v1_logistic_management_warehouse_starts_unloading_action - Order unloading has begun
     * 
     * Inform the <<glossary:shipper>> that the <<glossary:order>> unloading has begun.
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseStartsUnloadingAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseStartsUnloadingAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_finishes_unloading_action']: {
    /**
     * post_v1_logistic_management_warehouse_finishes_unloading_action - Order unloading has ended
     * 
     * Inform the <<glossary:shipper>> that the <<glossary:order>> unloading has ended.
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseFinishesUnloadingAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseFinishesUnloadingAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_starts_preparation_action']: {
    /**
     * post_v1_logistic_management_warehouse_starts_preparation_action - Order preparation has begun
     * 
     * Inform the <<glossary:shipper>> that the <<glossary:order>> preparation has begun.
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseStartsPreparationAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseStartsPreparationAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/warehouse_finishes_preparation_action']: {
    /**
     * post_v1_logistic_management_warehouse_finishes_preparation_action - Order preparation has ended
     * 
     * Inform the <<glossary:shipper>> that the <<glossary:order>> preparation has ended.
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementWarehouseFinishesPreparationAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementWarehouseFinishesPreparationAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/shipper_create_or_update_draft_order_action']: {
    /**
     * post_v1_logistic_management_shipper_create_or_update_draft_order_action - Create/update a draft order
     * 
     * Create/update a draft entry or exit order. You will be able to validate the draft later.
     * 
     * The accepted fields depend on the `order_type` field:
     * 
     * - If you need to write an <<glossary:entry order>>, please use the dedicated fields that start with `entry_expeditor_` to specify the sender information.
     * 
     * - If you need to write an <<glossary:exit order>>, please use the dedicated fields that start with `exit_final_recipient_` to specify the final recipient information.
     * 
     * If the following fields correspond to an existing address in your [address-book](https://app.spacefill.fr/settings/address-book/):
     * 
     * ```
     * entry_expeditor
     * entry_expeditor_address_line1
     * entry_expeditor_address_zip
     * entry_expeditor_address_city
     * entry_expeditor_address_country
     * entry_expeditor_address_country_code
     * ```
     * 
     * or
     * 
     * ```
     * exit_final_recipient
     * exit_final_recipient_address_line1
     * exit_final_recipient_address_zip
     * exit_final_recipient_address_city
     * exit_final_recipient_address_country
     * exit_final_recipient_address_country_code
     * ```
     * 
     * Then it is reused, otherwise, a new address is created when validating the draft order and can be reused next time.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementShipperCreateOrUpdateDraftOrderAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementShipperCreateOrUpdateDraftOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/shipper_validate_draft_order_action']: {
    /**
     * post_v1_logistic_management_shipper_validate_draft_order_action - Validate a draft order
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementShipperValidateDraftOrderAction.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementShipperValidateDraftOrderAction.Responses.$200>
  }
  ['/v1/logistic_management/inventory_adjustments/']: {
    /**
     * get_v1_logistic_management_inventory_adjustement_list - List inventory adjustments
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustementList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustementList.Responses.$200>
    /**
     * post_v1_logistic_management_inventory_adjustement - Create an inventory adjustment
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementInventoryAdjustement.QueryParameters> | null,
      data?: Paths.PostV1LogisticManagementInventoryAdjustement.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementInventoryAdjustement.Responses.$200>
  }
  ['/v1/async/logistic_management/inventory_adjustments/']: {
    /**
     * post_v1_async_logistic_management_inventory_adjustement - Create an inventory adjustment (asynchronously)
     */
    'post'(
      parameters?: Parameters<Paths.PostV1AsyncLogisticManagementInventoryAdjustement.QueryParameters> | null,
      data?: Paths.PostV1AsyncLogisticManagementInventoryAdjustement.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1AsyncLogisticManagementInventoryAdjustement.Responses.$200>
  }
  ['/v1/logistic_management/inventory_adjustments/{inventory_adjustment_id}/']: {
    /**
     * get_v1_logistic_management_inventory_adjustement - View an inventory adjustment
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustement.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustement.Responses.$200>
  }
  ['/v1/logistic_management/serial_shipping_container_codes/']: {
    /**
     * get_v1_logistic_management_sscc_list - List SSCC informations and stock
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementSsccList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementSsccList.Responses.$200>
  }
  ['/v1/logistic_management/sscc_total_in_stock/']: {
    /**
     * get_v1_logistic_management_sscc_total_in_stock - Get total of SSCC currently in stock
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementSsccTotalInStock.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementSsccTotalInStock.Responses.$200>
  }
  ['/v1/transport_management/carriers/']: {
    /**
     * get_v1_carrier_list - List carriers from carriers book and from LSP
     */
    'get'(
      parameters?: Parameters<Paths.GetV1CarrierList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1CarrierList.Responses.$200>
    /**
     * post_v1_carrier - Create a carrier
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1Carrier.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1Carrier.Responses.$200>
  }
  ['/v1/transport_management/transports']: {
    /**
     * get_v1_transports - Get V1 Transports
     * 
     * Return all transports for a given carrier
     */
    'get'(
      parameters?: Parameters<Paths.GetV1Transports.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1Transports.Responses.$200>
  }
  ['/v1/transport_management/transports/{transport_id}']: {
    /**
     * patch_v1_transport_status - Patch V1 Transport Status
     * 
     * Update a transport
     */
    'patch'(
      parameters?: Parameters<Paths.PatchV1TransportStatus.PathParameters> | null,
      data?: Paths.PatchV1TransportStatus.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchV1TransportStatus.Responses.$200>
  }
  ['/v1/logistic_management/events/']: {
    /**
     * post_v1_logistic_management_event - Post an event
     * 
     * Post an event.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementEvent.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementEvent.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
