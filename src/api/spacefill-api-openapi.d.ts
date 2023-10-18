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
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
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
         *       "sscc_id": "2cb7587b-6c9e-48a6-b0aa-d39f640276ce"
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
         *       "sscc_id": "649e09cf-0ff2-43f2-ac17-a51eec7ff815"
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
             *       "sscc_id": "2cb7587b-6c9e-48a6-b0aa-d39f640276ce"
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
             *       "sscc_id": "649e09cf-0ff2-43f2-ac17-a51eec7ff815"
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
         * TransportStatusEnum
         * Transport status enum.
         */
        export type RessourcesSharedTransportStatusEnum = "NOT_MANAGED_BY_SPACEFILL" | "DRAFT" | "SCHEDULED" | "DELIVERED" | "AT_PICKUP_LOCATION" | "PICKUP_COMPLETED" | "DELIVERY_IN_PROGRESS" | "AT_DELIVERY_LOCATION" | "PICKUP_MISSED" | "DELIVERY_MISSED" | "CANCELED";
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
    namespace GetV1LogisticManagementBatchListV1LogisticManagementBatchesGet {
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
    namespace GetV1LogisticManagementBatchV1LogisticManagementBatchesBatchIdGet {
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
    namespace GetV1LogisticManagementInventoryAdjustementListV1LogisticManagementInventoryAdjustmentsGet {
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
    namespace GetV1LogisticManagementInventoryAdjustementV1LogisticManagementInventoryAdjustmentsInventoryAdjustmentIdGet {
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
             *       "sscc_id": "2cb7587b-6c9e-48a6-b0aa-d39f640276ce"
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
             *       "sscc_id": "649e09cf-0ff2-43f2-ac17-a51eec7ff815"
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
    namespace GetV1LogisticManagementMasterItemListV1LogisticManagementMasterItemsGet {
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
    namespace GetV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdGet {
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
    namespace GetV1LogisticManagementOrderDocumentsListV1LogisticManagementOrdersOrderIdDocumentsGet {
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
    namespace GetV1LogisticManagementOrderDownloadDocumentV1LogisticManagementOrdersOrderIdDocumentsDocumentIdDownloadGet {
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
    namespace GetV1LogisticManagementOrderListV1LogisticManagementOrdersGet {
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
    namespace GetV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdGet {
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
    namespace GetV1LogisticManagementSsccListV1LogisticManagementSerialShippingContainerCodesGet {
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
    namespace GetV1LogisticManagementSsccTotalInStockV1LogisticManagementSsccTotalInStockGet {
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
    namespace PatchV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPatch {
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
    namespace PatchV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdPatch {
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
    namespace PostV1LogisticManagementBatchV1LogisticManagementBatchesPost {
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
    namespace PostV1LogisticManagementMasterItemV1LogisticManagementMasterItemsPost {
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
    namespace PostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost {
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
    namespace PutV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPut {
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
}

export interface OperationMethods {
  /**
   * get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get - List references
   * 
   * List and filter <<glossary:reference>>s.
   */
  'get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementMasterItemListV1LogisticManagementMasterItemsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementMasterItemListV1LogisticManagementMasterItemsGet.Responses.$200>
  /**
   * post_v1_logistic_management_master_item_v1_logistic_management_master_items__post - Create a reference
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
  'post_v1_logistic_management_master_item_v1_logistic_management_master_items__post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementMasterItemV1LogisticManagementMasterItemsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementMasterItemV1LogisticManagementMasterItemsPost.Responses.$200>
  /**
   * get_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___get - View a reference
   * 
   * View the details of a <<glossary:reference>> with current and forecasted stock quantities.
   */
  'get_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdGet.PathParameters & Paths.GetV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdGet.Responses.$200>
  /**
   * put_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___put - Replace a reference
   * 
   * Replace all the fields of a <<glossary:reference>>, if the transfered_to_xxx_at and metadata fields are missing, it will be replaced by null.
   * 
   * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
   */
  'put_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___put'(
    parameters?: Parameters<Paths.PutV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPut.PathParameters> | null,
    data?: Paths.PutV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPut.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPut.Responses.$200>
  /**
   * patch_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___patch - Update a reference
   * 
   * Update one or several fields of a <<glossary:reference>> without overwriting existing fields.
   * 
   * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
   */
  'patch_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___patch'(
    parameters?: Parameters<Paths.PatchV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPatch.PathParameters> | null,
    data?: Paths.PatchV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPatch.Responses.$200>
  /**
   * get_v1_logistic_management_batch_list_v1_logistic_management_batches__get - List batches
   * 
   * List and filter <<glossary:batch>>es.
   */
  'get_v1_logistic_management_batch_list_v1_logistic_management_batches__get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementBatchListV1LogisticManagementBatchesGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementBatchListV1LogisticManagementBatchesGet.Responses.$200>
  /**
   * post_v1_logistic_management_batch_v1_logistic_management_batches__post - Create a batch
   */
  'post_v1_logistic_management_batch_v1_logistic_management_batches__post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostV1LogisticManagementBatchV1LogisticManagementBatchesPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementBatchV1LogisticManagementBatchesPost.Responses.$200>
  /**
   * get_v1_logistic_management_batch_v1_logistic_management_batches__batch_id___get - View a batch
   * 
   * View the details of a <<glossary:batch>> with current stock quantities.
   */
  'get_v1_logistic_management_batch_v1_logistic_management_batches__batch_id___get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementBatchV1LogisticManagementBatchesBatchIdGet.PathParameters & Paths.GetV1LogisticManagementBatchV1LogisticManagementBatchesBatchIdGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementBatchV1LogisticManagementBatchesBatchIdGet.Responses.$200>
  /**
   * get_v1_logistic_management_order_list_v1_logistic_management_orders__get - List orders
   * 
   * List and filter <<glossary:order>>s.
   */
  'get_v1_logistic_management_order_list_v1_logistic_management_orders__get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrderListV1LogisticManagementOrdersGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrderListV1LogisticManagementOrdersGet.Responses.$200>
  /**
   * get_v1_logistic_management_order_v1_logistic_management_orders__order_id___get - View an order
   * 
   * View the details of an order and all order items associated.
   */
  'get_v1_logistic_management_order_v1_logistic_management_orders__order_id___get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdGet.PathParameters & Paths.GetV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdGet.Responses.$200>
  /**
   * patch_v1_logistic_management_order_v1_logistic_management_orders__order_id___patch - Update an order
   * 
   * Update one or several fields of <<glossary:order>>.
   */
  'patch_v1_logistic_management_order_v1_logistic_management_orders__order_id___patch'(
    parameters?: Parameters<Paths.PatchV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdPatch.PathParameters> | null,
    data?: Paths.PatchV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdPatch.Responses.$200>
  /**
   * get_v1_logistic_management_order_documents_list_v1_logistic_management_orders__order_id__documents_get - List order documents
   */
  'get_v1_logistic_management_order_documents_list_v1_logistic_management_orders__order_id__documents_get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrderDocumentsListV1LogisticManagementOrdersOrderIdDocumentsGet.PathParameters & Paths.GetV1LogisticManagementOrderDocumentsListV1LogisticManagementOrdersOrderIdDocumentsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrderDocumentsListV1LogisticManagementOrdersOrderIdDocumentsGet.Responses.$200>
  /**
   * get_v1_logistic_management_order_download_document_v1_logistic_management_orders__order_id__documents__document_id__download_get - Download a document
   */
  'get_v1_logistic_management_order_download_document_v1_logistic_management_orders__order_id__documents__document_id__download_get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementOrderDownloadDocumentV1LogisticManagementOrdersOrderIdDocumentsDocumentIdDownloadGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementOrderDownloadDocumentV1LogisticManagementOrdersOrderIdDocumentsDocumentIdDownloadGet.Responses.$200>
  /**
   * post_v1_logistic_management_order_upload_document_v1_logistic_management_orders__order_id__documents__post - Attach document to an order
   */
  'post_v1_logistic_management_order_upload_document_v1_logistic_management_orders__order_id__documents__post'(
    parameters?: Parameters<Paths.PostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost.PathParameters> | null,
    data?: Paths.PostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost.Responses.$200>
  /**
   * get_v1_logistic_management_inventory_adjustement_list_v1_logistic_management_inventory_adjustments__get - List inventory adjustments
   */
  'get_v1_logistic_management_inventory_adjustement_list_v1_logistic_management_inventory_adjustments__get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustementListV1LogisticManagementInventoryAdjustmentsGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustementListV1LogisticManagementInventoryAdjustmentsGet.Responses.$200>
  /**
   * get_v1_logistic_management_inventory_adjustement_v1_logistic_management_inventory_adjustments__inventory_adjustment_id___get - View an inventory adjustment
   */
  'get_v1_logistic_management_inventory_adjustement_v1_logistic_management_inventory_adjustments__inventory_adjustment_id___get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustementV1LogisticManagementInventoryAdjustmentsInventoryAdjustmentIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustementV1LogisticManagementInventoryAdjustmentsInventoryAdjustmentIdGet.Responses.$200>
  /**
   * get_v1_logistic_management_sscc_list_v1_logistic_management_serial_shipping_container_codes__get - List SSCC informations and stock
   */
  'get_v1_logistic_management_sscc_list_v1_logistic_management_serial_shipping_container_codes__get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementSsccListV1LogisticManagementSerialShippingContainerCodesGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementSsccListV1LogisticManagementSerialShippingContainerCodesGet.Responses.$200>
  /**
   * get_v1_logistic_management_sscc_total_in_stock_v1_logistic_management_sscc_total_in_stock__get - Get total of SSCC currently in stock
   */
  'get_v1_logistic_management_sscc_total_in_stock_v1_logistic_management_sscc_total_in_stock__get'(
    parameters?: Parameters<Paths.GetV1LogisticManagementSsccTotalInStockV1LogisticManagementSsccTotalInStockGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetV1LogisticManagementSsccTotalInStockV1LogisticManagementSsccTotalInStockGet.Responses.$200>
}

export interface PathsDictionary {
  ['/v1/logistic_management/master_items/']: {
    /**
     * get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get - List references
     * 
     * List and filter <<glossary:reference>>s.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementMasterItemListV1LogisticManagementMasterItemsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementMasterItemListV1LogisticManagementMasterItemsGet.Responses.$200>
    /**
     * post_v1_logistic_management_master_item_v1_logistic_management_master_items__post - Create a reference
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
      data?: Paths.PostV1LogisticManagementMasterItemV1LogisticManagementMasterItemsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementMasterItemV1LogisticManagementMasterItemsPost.Responses.$200>
  }
  ['/v1/logistic_management/master_items/{master_item_id}/']: {
    /**
     * get_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___get - View a reference
     * 
     * View the details of a <<glossary:reference>> with current and forecasted stock quantities.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdGet.PathParameters & Paths.GetV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdGet.Responses.$200>
    /**
     * put_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___put - Replace a reference
     * 
     * Replace all the fields of a <<glossary:reference>>, if the transfered_to_xxx_at and metadata fields are missing, it will be replaced by null.
     * 
     * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
     */
    'put'(
      parameters?: Parameters<Paths.PutV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPut.PathParameters> | null,
      data?: Paths.PutV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPut.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPut.Responses.$200>
    /**
     * patch_v1_logistic_management_master_item_v1_logistic_management_master_items__master_item_id___patch - Update a reference
     * 
     * Update one or several fields of a <<glossary:reference>> without overwriting existing fields.
     * 
     * > Reference edition is allowed even if the palettisation plan is not correct. However, the reference will be indicated as an anomaly.
     */
    'patch'(
      parameters?: Parameters<Paths.PatchV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPatch.PathParameters> | null,
      data?: Paths.PatchV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchV1LogisticManagementMasterItemV1LogisticManagementMasterItemsMasterItemIdPatch.Responses.$200>
  }
  ['/v1/logistic_management/batches/']: {
    /**
     * get_v1_logistic_management_batch_list_v1_logistic_management_batches__get - List batches
     * 
     * List and filter <<glossary:batch>>es.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementBatchListV1LogisticManagementBatchesGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementBatchListV1LogisticManagementBatchesGet.Responses.$200>
    /**
     * post_v1_logistic_management_batch_v1_logistic_management_batches__post - Create a batch
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostV1LogisticManagementBatchV1LogisticManagementBatchesPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementBatchV1LogisticManagementBatchesPost.Responses.$200>
  }
  ['/v1/logistic_management/batches/{batch_id}/']: {
    /**
     * get_v1_logistic_management_batch_v1_logistic_management_batches__batch_id___get - View a batch
     * 
     * View the details of a <<glossary:batch>> with current stock quantities.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementBatchV1LogisticManagementBatchesBatchIdGet.PathParameters & Paths.GetV1LogisticManagementBatchV1LogisticManagementBatchesBatchIdGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementBatchV1LogisticManagementBatchesBatchIdGet.Responses.$200>
  }
  ['/v1/logistic_management/orders/']: {
    /**
     * get_v1_logistic_management_order_list_v1_logistic_management_orders__get - List orders
     * 
     * List and filter <<glossary:order>>s.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrderListV1LogisticManagementOrdersGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrderListV1LogisticManagementOrdersGet.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/']: {
    /**
     * get_v1_logistic_management_order_v1_logistic_management_orders__order_id___get - View an order
     * 
     * View the details of an order and all order items associated.
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdGet.PathParameters & Paths.GetV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdGet.Responses.$200>
    /**
     * patch_v1_logistic_management_order_v1_logistic_management_orders__order_id___patch - Update an order
     * 
     * Update one or several fields of <<glossary:order>>.
     */
    'patch'(
      parameters?: Parameters<Paths.PatchV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdPatch.PathParameters> | null,
      data?: Paths.PatchV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchV1LogisticManagementOrderV1LogisticManagementOrdersOrderIdPatch.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/documents']: {
    /**
     * get_v1_logistic_management_order_documents_list_v1_logistic_management_orders__order_id__documents_get - List order documents
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrderDocumentsListV1LogisticManagementOrdersOrderIdDocumentsGet.PathParameters & Paths.GetV1LogisticManagementOrderDocumentsListV1LogisticManagementOrdersOrderIdDocumentsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrderDocumentsListV1LogisticManagementOrdersOrderIdDocumentsGet.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/documents/{document_id}/download']: {
    /**
     * get_v1_logistic_management_order_download_document_v1_logistic_management_orders__order_id__documents__document_id__download_get - Download a document
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementOrderDownloadDocumentV1LogisticManagementOrdersOrderIdDocumentsDocumentIdDownloadGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementOrderDownloadDocumentV1LogisticManagementOrdersOrderIdDocumentsDocumentIdDownloadGet.Responses.$200>
  }
  ['/v1/logistic_management/orders/{order_id}/documents/']: {
    /**
     * post_v1_logistic_management_order_upload_document_v1_logistic_management_orders__order_id__documents__post - Attach document to an order
     */
    'post'(
      parameters?: Parameters<Paths.PostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost.PathParameters> | null,
      data?: Paths.PostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostV1LogisticManagementOrderUploadDocumentV1LogisticManagementOrdersOrderIdDocumentsPost.Responses.$200>
  }
  ['/v1/logistic_management/inventory_adjustments/']: {
    /**
     * get_v1_logistic_management_inventory_adjustement_list_v1_logistic_management_inventory_adjustments__get - List inventory adjustments
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustementListV1LogisticManagementInventoryAdjustmentsGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustementListV1LogisticManagementInventoryAdjustmentsGet.Responses.$200>
  }
  ['/v1/logistic_management/inventory_adjustments/{inventory_adjustment_id}/']: {
    /**
     * get_v1_logistic_management_inventory_adjustement_v1_logistic_management_inventory_adjustments__inventory_adjustment_id___get - View an inventory adjustment
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementInventoryAdjustementV1LogisticManagementInventoryAdjustmentsInventoryAdjustmentIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementInventoryAdjustementV1LogisticManagementInventoryAdjustmentsInventoryAdjustmentIdGet.Responses.$200>
  }
  ['/v1/logistic_management/serial_shipping_container_codes/']: {
    /**
     * get_v1_logistic_management_sscc_list_v1_logistic_management_serial_shipping_container_codes__get - List SSCC informations and stock
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementSsccListV1LogisticManagementSerialShippingContainerCodesGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementSsccListV1LogisticManagementSerialShippingContainerCodesGet.Responses.$200>
  }
  ['/v1/logistic_management/sscc_total_in_stock/']: {
    /**
     * get_v1_logistic_management_sscc_total_in_stock_v1_logistic_management_sscc_total_in_stock__get - Get total of SSCC currently in stock
     */
    'get'(
      parameters?: Parameters<Paths.GetV1LogisticManagementSsccTotalInStockV1LogisticManagementSsccTotalInStockGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetV1LogisticManagementSsccTotalInStockV1LogisticManagementSsccTotalInStockGet.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
