import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from "openapi-client-axios";

declare namespace Definitions {
  /**
   * Access Token Request
   * Body for requesting access token
   */
  export interface AccessTokenRequest {
    /**
     * use 'password' for authentication 'refresh_token' for exchange the token
     */
    grant_type?: string;
    /**
     * Password
     */
    password: string;
    /**
     * Scope
     */
    scope: string;
    /**
     * Username
     */
    username: string;
  }
  /**
   * Access Token Response
   * Access Token Response
   */
  export interface AccessTokenResponse {
    /**
     * JWT Token
     */
    access_token: string;
    /**
     * Token expiration
     */
    expires_in: number;
    /**
     * Auth scope
     */
    scope: string;
    /**
     * Token type
     */
    token_type: string;
  }
  /**
   * Address
   * Address
   */
  export interface Address {
    address: /**
     * Address Detail
     * Address Detail
     */
    AddressDetail;
    company_name?: string;
    name: string;
    phone_number?: string;
  }
  /**
   * Address Detail
   * Address Detail
   */
  export interface AddressDetail {
    additional_info?: string;
    city?: string;
    country?: string;
    country_code?: string;
    email?: string;
    house_nr?: string;
    state?: string;
    street: string;
    zip?: string;
  }
  /**
   * Api Rate
   * Api Rate
   */
  export interface ApiRate {
    id?: number;
    name?: string;
    threshold?: number;
    unit_of_measure?: string;
  }
  /**
   * Assign Stock State Request
   * Assign Stock State Request
   */
  export interface AssignStockStateRequest {
    /**
     * Comment
     */
    comment: string;
    /**
     * Locations
     */
    locations: number[];
    /**
     * Stock State ID
     */
    stock_state_id: number;
  }
  /**
   * Attachment
   * Attachment
   */
  export interface Attachment {
    container?: string;
    container_id?: number;
    document_type?: string;
    extension?: string;
    file_type?: string;
    id?: string;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    name?: string;
    tenant_id?: number;
    type?: string;
    updated_at?: string;
  }
  /**
   * Packing box attachment metadata Request
   * Packing box attachment metadata Request
   */
  export interface AttachmentMetadataRequest {
    /**
     * Extension of the attachment
     */
    extension: string;
    /**
     * File type of the attachment
     */
    file_type: string;
    /**
     * The ID of the attachment in S3
     */
    filename: string;
    /**
     * Packing box to which the attachment belongs to
     */
    packing_box_id: number;
    /**
     * Packing order to which the packing box belongs to
     */
    packing_order_id: number;
    /**
     * Type of the attachment
     */
    type: string;
  }
  /**
   * Attachment Request
   * Body for requesting attachment
   */
  export interface AttachmentRequest {
    /**
     * Format Document in MIME type
     */
    content_type: string;
    /**
     * File name of file to attach
     */
    filename: string;
    /**
     * Path of file to attach
     */
    path: string;
    /**
     * Type of document to be attached, can be photo or label
     */
    type?: string;
  }
  /**
   * Attachment Response
   * Attachment response
   */
  export interface AttachmentResponse {
    /**
     * {
     *   "$ref": "#/definitions/BasicAttachment"
     * }
     */
    attachments?: any[];
    /**
     * Packing Box ID
     */
    packing_box_id?: number;
  }
  export type AttachmentResponseList =
    /**
     * Attachment Response
     * Attachment response
     */
    AttachmentResponse[];
  /**
   * Auth error
   * Auth error
   */
  export interface AuthError {
    /**
     * Error message
     */
    errors?: /**
     * Auth error message
     * Auth error message
     */
    AuthMessage;
  }
  /**
   * Auth error message
   * Auth error message
   */
  export interface AuthMessage {
    /**
     * Error message
     */
    message?: string;
  }
  /**
   * Availability
   * availability of a product
   */
  export interface Availability {
    /**
     * Available quantity of the product, calculated by the storage stock minus the stock reserved for sales order (in queue and picking) and replenishment orders (in queue and taken)
     */
    available_quantity?: number;
    /**
     * Id of the product
     */
    product_id?: string;
    /**
     * Quantity of the product in reception positions
     */
    reception_quantity?: number;
    /**
     * Rejected quantity of the product, calculated by the sum of the stocks stored in return positions
     */
    return_quantity?: number;
  }
  /**
   * Availability Batch
   * Availability Batch
   */
  export interface AvailabilityBatch {
    available_quantity?: number;
    batch_id?: number;
    id?: number;
    inserted_at?: string;
    location_type_id?: number;
    product_id?: number;
    reception_quantity?: number;
    updated_at?: string;
  }
  export type AvailabilityBatchResponseList =
    /**
     * Availability Batch
     * Availability Batch
     */
    AvailabilityBatch[];
  export type AvailabilityResponseList =
    /**
     * Availability
     * availability of a product
     */
    Availability[];
  /**
   * Barcode
   * Barcode
   */
  export interface Barcode {
    code?: string;
    id?: number;
    inserted_at?: string;
    product_id?: number;
    updated_at?: string;
  }
  export interface BasicAttachment {
    /**
     * Type of document to be attached, can be photo or label
     */
    type?: string;
    /**
     * Packing Box ID
     */
    url?: number;
  }
  /**
   * Batch
   * Batch
   */
  export interface Batch {
    client_id?: string;
    expiration_date?: string;
    id?: number;
    inserted_at?: string;
    number?: string;
    product_id?: number;
    third_party_id?: number;
    type?: string;
    updated_at?: string;
  }
  /**
   * Bulk Attachment Metadata Request
   * Body for attaching attachment metadata to a list of packing boxes
   */
  export interface BulkAttachmentMetadataRequest {
    /**
     * List of attachments metadata
     */
    _json: /**
     * Packing box attachment metadata Request
     * Packing box attachment metadata Request
     */
    AttachmentMetadataRequest[];
  }
  /**
   * Updated packings list
   * Updated packings list
   */
  export interface BulkErrorsPackingResponse {
    /**
     * Validation errors in packing process
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorPackingResponse[];
    /**
     * Updated Packings
     */
    updated?: /**
     * Updated Packings Response
     * Updated Packings Response
     */
    UpdatedPackingResponse[];
  }
  /**
   * Created pickings list
   * Created pickings list
   */
  export interface BulkErrorsPickingResponse {
    /**
     * Created Pickings
     */
    created?: /**
     * Created Pickings Response
     * Created Pickings Response
     */
    CreatedPickingResponse[];
    /**
     * Validation errors in picking creation
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorPickingResponse[];
  }
  /**
   * Created pickings list
   * Created pickings list
   */
  export interface BulkErrorsProductsResponse {
    /**
     * Created Products
     */
    created?: /**
     * Created Products list
     * Created Products list
     */
    BulkProductResponse[];
    /**
     * Validation errors in product creation
     */
    errors?: /**
     * Validation errors list
     * Validation errors list
     */
    ErrorsList[];
  }
  /**
   * Created Purchase Orders and errors list
   * Created Purchase Orders and errors list
   */
  export interface BulkErrorsPurchaseOrderResponse {
    /**
     * Created Purchase Orders
     */
    created?: /**
     * Purchase orders Response
     * Purchase orders Response
     */
    PurchaseOrderResponse[];
    /**
     * List of validation errors in purchase orders creation for each order
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorPurchaseOrderResponse;
  }
  /**
   * Created Sales Orders and errors list
   * Created Sales Orders and errors list
   */
  export interface BulkErrorsSalesOrderResponse {
    /**
     * Created Sales Orders
     */
    created?: /**
     * Sales orders Response
     * Sales orders Response
     */
    SalesOrderResponse[];
    /**
     * List of validation errors in sales orders creation for each order
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorSalesOrderResponse;
  }
  /**
   * Created Third parties and errors list
   * Created Third parties and errors list
   */
  export interface BulkErrorsThirdPartyResponse {
    /**
     * Created Third parties
     */
    created?: /**
     * Third parties Response
     * Third parties Response
     */
    ThirdPartyResponse[];
    /**
     * List of validation errors in third parties creation
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorThirdPartyResponse;
  }
  /**
   * Bulk Packing Actions Request
   * Body for requesting bulk creation of picking orders
   */
  export interface BulkPackingActionsRequest {
    /**
     * Actions to execute
     */
    actions: string[];
    /**
     * List of params to execute the actions
     */
    params: /**
     * Params Packing Actions Request
     * Params Packing Actions Request
     */
    ParamsActionRequest[];
  }
  /**
   * Updated packings list
   * Updated packings list
   */
  export interface BulkPackingResponse {
    /**
     * Updated Packings
     */
    updated?: /**
     * Updated Packings Response
     * Updated Packings Response
     */
    UpdatedPackingResponse[];
  }
  /**
   * Bulk Picking Request
   * Body for requesting bulk creation of picking orders
   */
  export interface BulkPickingRequest {
    /**
     * Amount of picking orders that will be created, it will split the given sales orders in picking orders with the same amount of items
     */
    orders_count?: number;
    /**
     * List of picker ids that will be assigned to the picking orders
     */
    pickers?: number[];
    /**
     * List of picking orders that will be created
     */
    picking_orders: /**
     * Picking Order Request
     * Picking Order Request
     */
    PickingOrderRequest[];
    /**
     * Validation error strings
     */
    sales_orders: number[];
    /**
     * If this is sent as true it will create a draft packing order and 1 packing box for each product unit, then it will attach a shipment label to each box
     */
    turbo_label?: boolean;
  }
  /**
   * Created pickings list
   * Created pickings list
   */
  export interface BulkPickingResponse {
    /**
     * Created Pickings
     */
    created?: /**
     * Created Pickings Response
     * Created Pickings Response
     */
    CreatedPickingResponse[];
  }
  /**
   * Created Products list
   * Created Products list
   */
  export interface BulkProductResponse {
    /**
     * Created products
     */
    created?: /**
     * Created Product Response
     * Created Product Response
     */
    ProductResponse[];
  }
  /**
   * Created Purchase Orders list
   * Created Purchase Orders list
   */
  export interface BulkPurchaseOrderResponse {
    /**
     * Created Purchase Orders
     */
    created?: /**
     * Purchase orders Response
     * Purchase orders Response
     */
    PurchaseOrderResponse[];
  }
  /**
   * Created Sales Orders list
   * Created Sales Orders list
   */
  export interface BulkSalesOrderResponse {
    /**
     * Created Sales Orders
     */
    created?: /**
     * Sales orders Response
     * Sales orders Response
     */
    SalesOrderResponse[];
  }
  /**
   * Created Third parties list
   * Created Third parties list
   */
  export interface BulkThirdPartyResponse {
    /**
     * Created Third parties
     */
    created?: /**
     * Third parties Response
     * Third parties Response
     */
    ThirdPartyResponse[];
  }
  /**
   * Updated pickings list
   * Updated pickings list
   */
  export interface BulkUpdateErrorsProductsResponse {
    /**
     * Validation errors in product update
     */
    errors?: /**
     * Validation errors list
     * Validation errors list
     */
    ErrorsList[];
    /**
     * Updated Products
     */
    updated?: /**
     * Created Product Response
     * Created Product Response
     */
    ProductResponse[];
  }
  /**
   * Updated Purchase Orders and errors list
   * Updated Purchase Orders and errors list
   */
  export interface BulkUpdateErrorsPurchaseOrderResponse {
    /**
     * List of validation errors in purchase orders creation for each order
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorPurchaseOrderResponse;
    /**
     * Updated Purchase Orders
     */
    updated?: /**
     * Purchase orders Response
     * Purchase orders Response
     */
    PurchaseOrderResponse[];
  }
  /**
   * Updated Sales Orders and errors list
   * Updated Sales Orders and errors list
   */
  export interface BulkUpdateErrorsSalesOrderResponse {
    /**
     * List of validation errors in sales orders update for each order
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorSalesOrderResponse;
    /**
     * Updated Sales Orders
     */
    updated?: /**
     * Sales orders Response
     * Sales orders Response
     */
    SalesOrderResponse[];
  }
  /**
   * Updated Third parties and errors list
   * Updated Third parties and errors list
   */
  export interface BulkUpdateErrorsThirdPartyResponse {
    /**
     * List of validation errors in third parties update
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    ErrorThirdPartyResponse;
    /**
     * Updated Third parties
     */
    updated?: /**
     * Third parties Response
     * Third parties Response
     */
    ThirdPartyResponse[];
  }
  /**
   * Updated locations and errors
   * Updated locations and errors
   */
  export interface BulkUpdateLocationsResponse {
    /**
     * Validation errors in locations update
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    Error[];
    /**
     * Updated Locations
     */
    updated?: /**
     * Created Location Response
     * Created Location Response
     */
    LocationResponse[];
  }
  /**
   * Updated Products list
   * Updated Products list
   */
  export interface BulkUpdateProductResponse {
    /**
     * Updated products
     */
    updated?: /**
     * Created Product Response
     * Created Product Response
     */
    ProductResponse[];
  }
  /**
   * Updated Purchase Orders list
   * Updated Purchase Orders list
   */
  export interface BulkUpdatePurchaseOrderResponse {
    /**
     * Updated Purchase Orders
     */
    updated?: /**
     * Purchase orders Response
     * Purchase orders Response
     */
    PurchaseOrderResponse[];
  }
  /**
   * Updated Sales Orders list
   * Updated Sales Orders list
   */
  export interface BulkUpdateSalesOrderResponse {
    /**
     * Updated Sales Orders
     */
    updated?: /**
     * Sales orders Response
     * Sales orders Response
     */
    SalesOrderResponse[];
  }
  /**
   * Updated Third parties list
   * Updated Third parties list
   */
  export interface BulkUpdateThirdPartyResponse {
    /**
     * Updated Third parties
     */
    updated?: /**
     * Third parties Response
     * Third parties Response
     */
    ThirdPartyResponse[];
  }
  /**
   * Cart Box
   * Cart Box
   */
  export interface CartBox {
    barcode?: string;
    fulfillment_order_id?: number;
    id?: number;
    inserted_at?: string;
    occupied?: boolean;
    sales_order_id?: number;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Channel
   * Channel
   */
  export interface Channel {
    active?: boolean;
    city?: string;
    country_code?: string;
    full_name?: string;
    id?: number;
    inserted_at?: string;
    is_default?: boolean;
    line1?: string;
    line2?: string;
    merchant_id?: number;
    name?: string;
    priority?: number;
    site?: string;
    slug?: string;
    state?: string;
    updated_at?: string;
    zip_code?: string;
  }
  /**
   * Client Log Request
   * Client Log Request
   */
  export interface ClientLogRequest {
    id?: number;
    level?: string;
    message?: string;
    metadata?: /**
     * Metadata
     * Metadata
     */
    Metadata;
  }
  /**
   * Connection
   * Connection
   */
  export interface Connection {
    destination_location_id: number;
    hallway?: number;
    id?: number;
    inserted_at?: string;
    origin_location_id: number;
    row?: number;
    updated_at?: string;
    weight: number;
  }
  /**
   * Counting Item
   * Counting Item
   */
  export interface CountingItem {
    batch_id?: number;
    count_iteration?: number;
    counter_id?: number;
    counting_task_id?: number;
    current_stock_quantity?: number;
    id?: number;
    inserted_at?: string;
    is_valid?: boolean;
    location_id?: number;
    product_id?: number;
    quantity?: number;
    updated_at?: string;
  }
  /**
   * Counting Item Reason Code
   * Counting Item Reason Code
   */
  export interface CountingItemReasonCode {
    counting_item_id?: number;
    id?: number;
    reason_code_id?: number;
    reason_type?: string;
  }
  /**
   * Counting reason
   * Add a reason to accounting task
   */
  export interface CountingReason {
    /**
     * reason id
     */
    reason_code_id: number;
    /**
     * reason_type
     */
    reason_type: string;
  }
  export type CountingReasons =
    /**
     * Counting reason
     * Add a reason to accounting task
     */
    CountingReason[];
  /**
   * Counting Task
   * Counting Task
   */
  export interface CountingTask {
    audited_at?: string;
    auditor_id?: number;
    count_iteration?: number;
    counter_id?: number;
    description?: string;
    group?: string;
    id?: number;
    inserted_at?: string;
    inventory_id?: number;
    items?: /**
     * Counting Item
     * Counting Item
     */
    CountingItem[];
    location_id?: number;
    owner_id?: number;
    product_id?: number;
    sequence_number?: string;
    state?: string;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Counting Task Reason Code
   * Counting Task Reason Code
   */
  export interface CountingTaskReasonCode {
    counting_task_id?: number;
    id?: number;
    reason_code_id?: number;
    reason_type?: string;
  }
  /**
   * Country
   * Country
   */
  export interface Country {
    alpha_2?: string;
    alpha_3?: string;
    country_code?: string;
    country_name?: string;
    id?: number;
    inserted_at?: string;
    intermediate_region?: string;
    iso_3166_2?: string;
    region?: string;
    sub_region?: string;
    updated_at?: string;
  }
  /**
   * Country Alias
   * Country Alias
   */
  export interface CountryAlias {
    alias_name?: string;
    country_id?: number;
    id?: number;
    inserted_at?: string;
    updated_at?: string;
  }
  /**
   * Created Pickings Response
   * Created Pickings Response
   */
  export interface CreatedPickingResponse {
    /**
     * Picking order's id
     */
    id: number;
    /**
     * Origin sales order num
     */
    order_num: string;
    /**
     * Picking order's sequence number
     */
    sequence_number: string;
  }
  /**
   * Custom Route Rule
   * Custom Route Rule
   */
  export interface CustomRouteRule {
    id?: number;
    inserted_at?: string;
    tenant_id?: number;
    type?: string;
    updated_at?: string;
    value?: string;
  }
  /**
   * Daily Summary Stat
   * Daily Summary Stat
   */
  export interface DailySummaryStat {
    cumulative_value?: number;
    id?: number;
    inserted_at?: string;
    key?: string;
    merchant_id?: number;
    origin_table?: string;
    tenant_id?: number;
    value?: number;
    value_date?: string;
    warehouse_id?: number;
  }
  /**
   * Device
   * Device
   */
  export interface Device {
    active?: boolean;
    id?: number;
    inserted_at?: string;
    instance_id?: string;
    serial?: string;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Document Sequence
   * Document Sequence
   */
  export interface DocumentSequence {
    id?: number;
    padding?: number;
    type?: string;
    warehouse_id?: number;
  }
  export interface EmptyLocationResponse {
    /**
     * Whether the location is empty or not
     */
    empty?: boolean;
    /**
     * Location id
     */
    location_id?: number;
  }
  /**
   * Locations and whether they are empty or not
   */
  export interface EmptyLocationsResponse {
    /**
     * Locations
     */
    locations?: EmptyLocationResponse[];
  }
  /**
   * Validation error
   * Validation error
   */
  export interface Error {
    /**
     * Error message (Key has column names, not "column")
     */
    column?: string;
  }
  /**
   * Validation error
   * Validation error
   */
  export interface ErrorPackingResponse {
    /**
     * Validation error
     */
    error?: string;
    /**
     * Packing order id
     */
    packing_order_id?: number;
  }
  /**
   * Validation error
   * Validation error
   */
  export interface ErrorPickingResponse {
    /**
     * Validation error
     */
    error?: string;
    /**
     * Origin sales order num
     */
    order_num?: string;
  }
  /**
   * Validation error
   * Validation error
   */
  export interface ErrorPurchaseOrderResponse {
    /**
     * Purchase order num with associated validation errors
     */
    purchase_order_num: /**
     * Validation error
     * Validation error
     */
    Error;
  }
  /**
   * Validation error
   * Validation error
   */
  export interface ErrorSalesOrderResponse {
    /**
     * Sales order num with associated validation errors
     */
    sales_order_num: /**
     * Validation error
     * Validation error
     */
    Error;
  }
  /**
   * Validation error
   * Validation error
   */
  export interface ErrorThirdPartyResponse {
    /**
     * Third party identifier number with associated validation errors
     */
    identifier_number: /**
     * Validation error
     * Validation error
     */
    Error;
  }
  /**
   * Validation errors list
   * Validation errors list
   */
  export interface ErrorsList {
    /**
     * Validation error strings
     */
    errors?: /**
     * Validation error
     * Validation error
     */
    Error[];
  }
  /**
   * Event
   * Event
   */
  export interface Event {
    data?: string;
    id?: string;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    pre_event_data?: string;
    status?: string;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Event Log
   * Event Log
   */
  export interface EventLog {
    code?: number;
    event_id?: string;
    id?: number;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    response?: string;
    updated_at?: string;
    webhook_id?: string;
  }
  /**
   * Fetch Location Strategy
   * Fetch Location Strategy
   */
  export interface FetchLocationStrategy {
    filters?: string[];
    priority?: string;
    strategy?: string;
  }
  /**
   * Finish Picking Request
   * Finish Picking Request
   */
  export interface FinishPickingRequest {
    /**
     * Fulfillment order id
     */
    fulfillment_order_id: number;
    /**
     * Packing location where user will put the products of given sales order
     */
    packing_location_id: number;
  }
  /**
   * Fulfillment Item
   * Fulfillment Item
   */
  export interface FulfillmentItem {
    attributes?: string;
    fulfilled_quantity?: number;
    fulfillment_order_id?: number;
    id?: number;
    inserted_at?: string;
    line_order_id?: string;
    notes?: string;
    product_id?: number;
    quantity?: number;
    required_date?: string;
    sales_item_id?: number;
    state?: string;
    updated_at?: string;
  }
  /**
   * Fulfillment Item Batch
   * Fulfillment Item Batch
   */
  export interface FulfillmentItemBatch {
    batch_id?: number;
    fulfillment_item_id?: number;
    id?: number;
    inserted_at?: string;
    suggested_quantity?: number;
    updated_at?: string;
  }
  /**
   * Fulfillment Order
   * Fulfillment Order
   */
  export interface FulfillmentOrder {
    attachments?: /**
     * Attachment
     * Attachment
     */
    Attachment[];
    attributes?: string;
    channel?: string;
    client_id?: string;
    client_name?: string;
    creator_id?: number;
    criterium?: string;
    custom_route_rule_id?: number;
    delivery_date?: string;
    destination_warehouse_id?: number;
    estimated_total_volume?: number;
    estimated_total_weight?: number;
    id?: number;
    inserted_at?: string;
    is_cart?: boolean;
    items?: /**
     * Fulfillment Item
     * Fulfillment Item
     */
    FulfillmentItem[];
    merchant_channel_id?: number;
    merchant_id?: number;
    missing_stock_items_cancelled?: boolean;
    notes?: string;
    order_num?: string;
    packing_location_id?: number;
    priority?: number;
    process_information_id?: number;
    purchase_order_id?: number;
    return_labels?: /**
     * Return Label
     * Return Label
     */
    ReturnLabel[];
    sales_order_id?: number;
    sequence_number?: string;
    service_point_id?: string;
    ship_to?: /**
     * Address
     * Address
     */
    Address;
    shipment_instructions?: SalesShipmentInstruction[];
    shipping_method_id?: number;
    state?: string;
    third_party_id?: number;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Incoming Good
   * Incoming Good
   */
  export interface IncomingGood {
    criterium?: string;
    document_type?: string;
    end_date?: string;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Incoming Good Item
     * Incoming Good Item
     */
    IncomingGoodItem[];
    merchant_channel_id?: number;
    merchant_id?: number;
    owner_id?: number;
    purchase_order_id?: number;
    sales_order_id?: number;
    sequence_number?: string;
    start_date?: string;
    third_party_id?: number;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Incoming Good Item
   * Incoming Good Item
   */
  export interface IncomingGoodItem {
    batch_id?: number;
    destination_location_id?: number;
    id?: number;
    incoming_good_id?: number;
    inserted_at?: string;
    notes?: string;
    product_id?: number;
    quantity?: number;
    reason_codes?: ReasonCode[];
    state?: string;
    updated_at?: string;
  }
  /**
   * Incoming Good Item Packaging
   * Incoming Good Item Packaging
   */
  export interface IncomingGoodItemPackaging {
    attributes?: string;
    barcode?: string;
    barcode_agency?: string;
    batch_expiration_date?: string;
    batch_number?: string;
    dimensions_height?: number;
    dimensions_length?: number;
    dimensions_weight?: number;
    dimensions_width?: number;
    id?: number;
    incoming_good_item_id?: number;
    inserted_at?: string;
    location_level_barcode?: string;
    packaging_level?: number;
    packaging_type?: string;
    quantity_in_package?: number;
    state?: string;
    updated_at?: string;
  }
  /**
   * Incoming Good Item Packing Box
   * Incoming Good Item Packing Box
   */
  export interface IncomingGoodItemPackingBox {
    id?: number;
    incoming_good_item_id?: number;
    packing_box_id?: number;
    quantity?: number;
  }
  /**
   * Inventory
   * Inventory
   */
  export interface Inventory {
    end_date?: string;
    id?: number;
    inserted_at?: string;
    notes?: string;
    owner_id?: number;
    start_date?: string;
    state?: string;
    title?: string;
    warehouse_id?: number;
  }
  /**
   * Kit
   * Kit
   */
  export interface Kit {
    active?: boolean;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Kit Item
     * Kit Item
     */
    KitItem[];
    name?: string;
    product_id?: number;
    tenant_id?: number;
    updated_at?: string;
  }
  /**
   * Kit Item
   * Kit Item
   */
  export interface KitItem {
    id?: number;
    inserted_at?: string;
    kit_id?: number;
    product_id?: number;
    quantity?: number;
    updated_at?: string;
  }
  /**
   * Kitting Item
   * Kitting Item
   */
  export interface KittingItem {
    assembled_quantity?: number;
    id?: number;
    inserted_at?: string;
    kit_id?: number;
    kitting_task_id?: number;
    quantity?: number;
    updated_at?: string;
  }
  /**
   * Kitting Replenishment
   * Kitting Replenishment
   */
  export interface KittingReplenishment {
    id?: number;
    kitting_task_id?: number;
    replenishment_order_id?: number;
  }
  /**
   * Kitting Task
   * Kitting Task
   */
  export interface KittingTask {
    destination_location_id?: number;
    end_date?: string;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Kitting Item
     * Kitting Item
     */
    KittingItem[];
    owner_id?: number;
    replenishment_orders?: /**
     * Replenishment Order
     * Replenishment Order
     */
    ReplenishmentOrder[];
    sequence_number?: string;
    start_date?: string;
    state?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Loaded Shipping Box
   * Loaded Shipping Box
   */
  export interface LoadedShippingBox {
    end_date?: string;
    id?: number;
    inserted_at?: string;
    owner_id?: number;
    sequence_number?: string;
    state?: string;
    truck_info?: string;
    truck_license_plate?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Loaded Shipping Box User Transition
   * Loaded Shipping Box User Transition
   */
  export interface LoadedShippingBoxUserTransition {
    id?: number;
    inserted_at?: string;
    loaded_shipping_box_id?: number;
    new_owner_id?: number;
    performer_id?: number;
    previous_owner_id?: number;
    updated_at?: string;
  }
  /**
   * Loading Unit Template
   * Loading Unit Template
   */
  export interface LoadingUnitTemplate {
    height?: number;
    id?: number;
    inserted_at?: string;
    is_default?: boolean;
    length?: number;
    merchant_id?: number;
    name?: string;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
    weight?: number;
    width?: number;
  }
  /**
   * Location
   * Location
   */
  export interface Location {
    active?: boolean;
    actual_location_id?: number;
    attributes?: string;
    base_height?: number;
    code: string;
    current_location_control_id?: number;
    deleted_at?: string;
    deleted_by?: number;
    dimension_depth?: number;
    dimension_height?: number;
    dimension_weight?: number;
    dimension_width?: number;
    hallway?: number;
    id?: number;
    inserted_at?: string;
    is_defined?: boolean;
    is_volume?: boolean;
    level?: number;
    location_type_id: number;
    module?: number;
    position?: number;
    priority?: number;
    product_categories?: /**
     * Product Category
     * Product Category
     */
    ProductCategory[];
    rack_id?: number;
    row?: number;
    stock_state_id?: number;
    updated_at?: string;
    user_id?: number;
    warehouse_id: number;
    zone_id: number;
  }
  /**
   * Location Control
   * Location Control
   */
  export interface LocationControl {
    comment?: string;
    id?: number;
    inserted_at?: string;
    location_id?: number;
    new_stock_state_id?: number;
    prev_stock_state_id?: number;
    updated_at?: string;
  }
  /**
   * Location Product Category
   * Location Product Category
   */
  export interface LocationProductCategory {
    id?: number;
    inserted_at?: string;
    location_id?: number;
    product_category_id?: number;
    updated_at?: string;
  }
  /**
   * Location Product Lock
   * Location Product Lock
   */
  export interface LocationProductLock {
    id?: number;
    location_id?: number;
    product_id?: number;
  }
  /**
   * Created Location Response
   * Created Location Response
   */
  export interface LocationResponse {
    /**
     * Location code
     */
    code: string;
    /**
     * Location id
     */
    id: number;
  }
  /**
   * Location Type
   * Location Type
   */
  export interface LocationType {
    id?: number;
    inserted_at?: string;
    name?: string;
    updated_at?: string;
  }
  /**
   * Location Zone Distance
   * Location Zone Distance
   */
  export interface LocationZoneDistance {
    distance?: number;
    inserted_at?: string;
    location_id?: number;
    updated_at?: string;
    zone_id?: number;
  }
  /**
   * Merchant
   * Merchant
   */
  export interface Merchant {
    active?: boolean;
    city?: string;
    country_code?: string;
    email?: string;
    fulfillment_warehouse_id?: number;
    full_name?: string;
    id?: number;
    inserted_at?: string;
    is_default?: boolean;
    line1?: string;
    line2?: string;
    name?: string;
    phone_number?: string;
    priority?: number;
    site?: string;
    slug?: string;
    state?: string;
    tenant_id?: number;
    updated_at?: string;
    users?: /**
     * User
     * User
     */
    User[];
    zip_code?: string;
  }
  /**
   * Message
   * Message
   */
  export interface Message {
    body?: string;
    checked?: boolean;
    event?: string;
    id?: number;
    inserted_at?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Metadata
   * Metadata
   */
  export interface Metadata {
    app?: string;
    id?: number;
    last_url?: string;
  }
  /**
   * Missing Product
   * Missing Product
   */
  export interface MissingProduct {
    cart_box_id?: number;
    id?: number;
    product_id?: number;
    quantity?: number;
  }
  /**
   * Order State
   * Order State
   */
  export interface OrderState {
    id?: number;
    order_type?: string;
    priority?: number;
    state?: string;
  }
  export interface OwnerUser {
    first_name?: string;
    id?: number;
    last_name?: string;
    username?: string;
  }
  /**
   * Packing Box
   * Packing Box
   */
  export interface PackingBox {
    attributes?: string;
    box_number?: number;
    height?: number;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Packing Box Item
     * Packing Box Item
     */
    PackingBoxItem[];
    length?: number;
    loaded_shipping_box_id?: number;
    name?: string;
    packing_order_id?: number;
    state?: string;
    updated_at?: string;
    weight?: number;
    width?: number;
  }
  /**
   * Packing Box Item
   * Packing Box Item
   */
  export interface PackingBoxItem {
    id?: number;
    inserted_at?: string;
    line_order_id?: string;
    packing_box_id?: number;
    product_id?: number;
    quantity?: number;
    updated_at?: string;
  }
  /**
   * Packing Item
   * Packing Item
   */
  export interface PackingItem {
    id?: number;
    inserted_at?: string;
    packed_quantity?: number;
    packing_order_id?: number;
    product_id?: number;
    requested_quantity?: number;
    updated_at?: string;
  }
  /**
   * Packing Item Batch
   * Packing Item Batch
   */
  export interface PackingItemBatch {
    batch_id?: number;
    cart_box_id?: number;
    id?: number;
    inserted_at?: string;
    packing_item_id?: number;
    quantity?: number;
    updated_at?: string;
  }
  /**
   * Packing Order
   * Packing Order
   */
  export interface PackingOrder {
    destination_location_id?: number;
    end_date?: string;
    fulfillment_order_id?: number;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Packing Item
     * Packing Item
     */
    PackingItem[];
    origin_location_id?: number;
    owner_id?: number;
    sales_order_id?: number;
    sales_order_ref?: string;
    sequence_number?: string;
    start_date?: string;
    state?: string;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Packing Order State Transition
   * Packing Order State Transition
   */
  export interface PackingOrderStateTransition {
    id?: number;
    new_state?: string;
    packing_order_id?: number;
    performer_id?: number;
    previous_state?: string;
    updated_at?: string;
  }
  /**
   * Params Packing Actions Request
   * Params Packing Actions Request
   */
  export interface ParamsActionRequest {
    /**
     * Packing order id
     */
    packing_order_id: number;
    /**
     * Shipping location id
     */
    shipping_location_id: number;
  }
  /**
   * Patch
   * Patch
   */
  export interface Patch {
    id?: number;
    op?: string;
    path?: string;
    value?: string;
  }
  /**
   * Permission
   * Permission
   */
  export interface Permission {
    action?: string;
    controller?: string;
    id?: number;
    key?: string;
  }
  /**
   * Picking Item
   * Picking Item
   */
  export interface PickingItem {
    fulfillment_order_id?: number;
    id?: number;
    inserted_at?: string;
    picked_quantity?: number;
    picking_order_id?: number;
    product_id?: number;
    requested_quantity?: number;
    sales_order_id?: number;
    updated_at?: string;
  }
  /**
   * Picking Item Batch
   * Picking Item Batch
   */
  export interface PickingItemBatch {
    batch_id?: number;
    cart_box_id?: number;
    id?: number;
    inserted_at?: string;
    origin_location_id?: number;
    picking_item_id?: number;
    quantity?: number;
    updated_at?: string;
  }
  /**
   * Picking Item Request
   * Picking Item Request
   */
  export interface PickingItemRequest {
    /**
     * Product id of the requested item
     */
    product_id?: number;
    /**
     * Request item's quantity
     */
    requested_quantity: number;
    /**
     * Origin sales order
     */
    sales_order_id: number;
  }
  /**
   * Picking Order
   * Picking Order
   */
  export interface PickingOrder {
    attributes?: string;
    creator_id?: number;
    end_date?: string;
    from_return_locations?: boolean;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Picking Item
     * Picking Item
     */
    PickingItem[];
    notes?: string;
    owner_id?: number;
    sequence_number?: string;
    start_date?: string;
    state?: string;
    turbo_label_standard_pick?: boolean;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Picking Order Request
   * Picking Order Request
   */
  export interface PickingOrderRequest {
    /**
     * Items for the picking order
     */
    items: /**
     * Picking Item Request
     * Picking Item Request
     */
    PickingItemRequest[];
    /**
     * Origin warehouse to which the order belongs to
     */
    warehouse_id: number;
  }
  /**
   * Picking Request
   * Picking Request
   */
  export interface PickingRequest {
    attributes?: string;
    creator_id?: number;
    from_return_locations?: boolean;
    id?: number;
    items?: string;
    notes?: string;
    owner_id?: number;
    turbo_label_standard_pick?: boolean;
    type?: string;
    warehouse_id?: number;
  }
  /**
   * Print Station
   * Print Station
   */
  export interface PrintStation {
    active?: boolean;
    id?: number;
    inserted_at?: string;
    mac_address?: string;
    name?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Process
   * Process
   */
  export interface Process {
    id?: number;
    inserted_at?: string;
    name?: string;
    reason_codes?: ReasonCode[];
    updated_at?: string;
  }
  /**
   * Process Information
   * Process Information
   */
  export interface ProcessInformation {
    attributes?: string;
    errors?: string;
    id?: number;
    inserted_at?: string;
    process?: string;
    status?: string;
    tenant_id?: number;
    updated_at?: string;
    value?: string;
  }
  /**
   * Product
   * Product
   */
  export interface Product {
    active?: boolean;
    attributes?: string;
    barcodes?: string[];
    batch_control?: boolean;
    cost_price?: number;
    deprecated_supplier_product_id?: string;
    height?: number;
    hs_code?: string;
    id?: number;
    inserted_at?: string;
    length?: number;
    management_type?: string;
    merchant_id?: number;
    minimum_purchase_unit?: number;
    minimum_sales_unit?: number;
    origin_country?: string;
    product_categories?: /**
     * Product Category
     * Product Category
     */
    ProductCategory[];
    purchase_measure_units?: string;
    sales_measure_units?: string;
    stackable?: boolean;
    tenant_id?: number;
    units_per_pallet?: number;
    units_per_purchase_package?: number;
    units_per_sales_package?: number;
    updated_at?: string;
    volume?: number;
    weight?: number;
    width?: number;
  }
  /**
   * Product Category
   * Product Category
   */
  export interface ProductCategory {
    code?: string;
    id?: number;
    inserted_at?: string;
    name?: string;
    tenant_id?: number;
    updated_at?: string;
  }
  /**
   * Products Actions Request
   * list of products
   */
  export type ProductListRequest =
    /**
     * Product
     * Product
     */
    Product[];
  /**
   * Product Product Category
   * Product Product Category
   */
  export interface ProductProductCategory {
    id?: number;
    inserted_at?: string;
    product_category_id?: number;
    product_id?: number;
    updated_at?: string;
  }
  /**
   * Product Quantity Alert
   * Product Quantity Alert
   */
  export interface ProductQuantityAlert {
    id?: number;
    inserted_at?: string;
    location_id?: number;
    product_id?: number;
    updated_at?: string;
    user_id?: number;
  }
  export interface ProductReference {
    /**
     * Product id
     */
    id?: number;
    /**
     * Product sku
     */
    sku?: string;
  }
  export type ProductReferenceIdList = number[][];
  export type ProductReferenceSkuList = string[][];
  export type ProductReferenceStructList = ProductReference[];
  /**
   * Product Report
   * Product Report
   */
  export interface ProductReport {
    name?: string;
    product_id?: number;
    sku?: string;
    tenant_id?: number;
  }
  /**
   * Created Product Response
   * Created Product Response
   */
  export interface ProductResponse {
    /**
     * Product id
     */
    id: number;
    /**
     * Product SKU
     */
    sku: string;
  }
  /**
   * Product Sku
   * Product Sku
   */
  export interface ProductSku {
    active?: boolean;
    description?: string;
    id?: number;
    inserted_at?: string;
    is_default?: boolean;
    merchant_channel_ids?: number[];
    merchant_id?: number;
    name?: string;
    product_id?: number;
    sku?: string;
    supplier_product_id?: string;
    tenant_id?: number;
    third_party_id?: number;
    updated_at?: string;
  }
  /**
   * Product Sku Channel
   * Product Sku Channel
   */
  export interface ProductSkuChannel {
    active?: boolean;
    id?: number;
    inserted_at?: string;
    merchant_channel_id?: number;
    sku_id?: number;
    updated_at?: string;
  }
  /**
   * Profile
   * Profile
   */
  export interface Profile {
    id?: number;
    key?: string;
    permissions?: /**
     * Permission
     * Permission
     */
    Permission[];
  }
  /**
   * Profile Permission
   * Profile Permission
   */
  export interface ProfilePermission {
    id?: number;
    permission_id?: number;
    profile_id?: number;
  }
  /**
   * Purchase Item
   * Purchase Item
   */
  export interface PurchaseItem {
    attributes?: string;
    checked_quantity?: number;
    id?: number;
    inserted_at?: string;
    line_item_number?: string;
    product_id?: number;
    purchase_order_id?: number;
    reason_codes?: ReasonCode[];
    requested_quantity?: number;
    state?: string;
    updated_at?: string;
  }
  /**
   * Purchase Item Packaging
   * Purchase Item Packaging
   */
  export interface PurchaseItemPackaging {
    attributes?: string;
    barcode?: string;
    barcode_agency?: string;
    batch_expiration_date?: string;
    batch_number?: string;
    dimensions_height?: number;
    dimensions_length?: number;
    dimensions_weight?: number;
    dimensions_width?: number;
    id?: number;
    inserted_at?: string;
    line_item_number?: string;
    location_level_barcode?: string;
    packaging_level?: number;
    packaging_type?: string;
    purchase_item_id?: number;
    quantity_in_package?: number;
    state?: string;
    updated_at?: string;
  }
  export interface PurchaseOrder {
    attributes?: string;
    criterium?: string;
    delivery_date?: string;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Purchase Item
     * Purchase Item
     */
    PurchaseItem[];
    merchant_channel_id?: number;
    merchant_id?: number;
    notes?: string;
    number_finished_early_events?: number;
    order_num?: string;
    order_state_id?: number;
    packagings?: /**
     * Purchase Item Packaging
     * Purchase Item Packaging
     */
    PurchaseItemPackaging[];
    sales_order_id?: number;
    supplier_id?: string;
    supplier_name?: string;
    third_party_id?: number;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  export interface PurchaseOrderReference {
    id?: number;
    order_num?: string;
  }
  export type PurchaseOrderReferenceIdList = number[];
  export type PurchaseOrderReferenceOrderNumList = string[];
  export type PurchaseOrderReferenceStructList = PurchaseOrderReference[];
  /**
   * Purchase orders Response
   * Purchase orders Response
   */
  export interface PurchaseOrderResponse {
    /**
     * Purchase order id
     */
    id: number;
    /**
     * Purchase order num
     */
    order_num: string;
  }
  /**
   * Rack
   * Rack
   */
  export interface Rack {
    active?: boolean;
    attributes?: string;
    code?: string;
    deleted_at?: string;
    deleted_by?: number;
    hallway?: number;
    id?: number;
    inserted_at?: string;
    is_defined: boolean;
    position_height: number;
    position_left: number;
    position_top: number;
    position_width: number;
    row?: number;
    updated_at?: string;
    zone_id: number;
  }
  export interface ReasonCode {
    active?: boolean;
    allowed_processes?: string[];
    code?: string;
    id?: number;
    inserted_at?: string;
    internal_reason?: boolean;
    name?: string;
    tenant_id?: number;
    updated_at?: string;
  }
  export interface ReasonCodeRequest {
    id?: number;
  }
  /**
   * Reason Codes Processes
   * Reason Codes Processes
   */
  export interface ReasonCodesProcesses {
    id?: number;
    inserted_at?: string;
    process_id?: number;
    reason_code_id?: number;
    updated_at?: string;
  }
  /**
   * Replenishment Item
   * Replenishment Item
   */
  export interface ReplenishmentItem {
    confirmed_quantity?: number;
    destination_location_id?: number;
    id?: number;
    inserted_at?: string;
    loading_unit_location_id?: number;
    origin_location_id?: number;
    product_id?: number;
    replenishment_order_id?: number;
    requested_quantity?: number;
    updated_at?: string;
  }
  /**
   * Replenishment Item Batch
   * Replenishment Item Batch
   */
  export interface ReplenishmentItemBatch {
    batch_id?: number;
    id?: number;
    inserted_at?: string;
    quantity?: number;
    replenishment_item_id?: number;
    updated_at?: string;
  }
  /**
   * Replenishment Order
   * Replenishment Order
   */
  export interface ReplenishmentOrder {
    end_date?: string;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Replenishment Item
     * Replenishment Item
     */
    ReplenishmentItem[];
    owner_id?: number;
    sequence_number?: string;
    start_date?: string;
    state?: string;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Replenishment Route Item
   * Replenishment Route Item
   */
  export interface ReplenishmentRouteItem {
    action?: string;
    id?: string;
    location_id?: number;
    priority?: number;
    replenishment_item_id?: number;
    stocks?: string;
  }
  /**
   * Addresses Request List
   * Address Request List
   */
  export type RequestListAddress =
    /**
     * Address
     * Address
     */
    Address[];
  /**
   * Address Details Request List
   * AddressDetail Request List
   */
  export type RequestListAddressDetail =
    /**
     * Address Detail
     * Address Detail
     */
    AddressDetail[];
  /**
   * Api Rates Request List
   * ApiRate Request List
   */
  export type RequestListApiRate =
    /**
     * Api Rate
     * Api Rate
     */
    ApiRate[];
  /**
   * Attachments Request List
   * Attachment Request List
   */
  export type RequestListAttachment =
    /**
     * Attachment
     * Attachment
     */
    Attachment[];
  /**
   * Availability Batches Request List
   * AvailabilityBatch Request List
   */
  export type RequestListAvailabilityBatch =
    /**
     * Availability Batch
     * Availability Batch
     */
    AvailabilityBatch[];
  /**
   * Barcodes Request List
   * Barcode Request List
   */
  export type RequestListBarcode =
    /**
     * Barcode
     * Barcode
     */
    Barcode[];
  /**
   * Batches Request List
   * Batch Request List
   */
  export type RequestListBatch =
    /**
     * Batch
     * Batch
     */
    Batch[];
  /**
   * Cart Boxes Request List
   * CartBox Request List
   */
  export type RequestListCartBox =
    /**
     * Cart Box
     * Cart Box
     */
    CartBox[];
  /**
   * Channels Request List
   * Channel Request List
   */
  export type RequestListChannel =
    /**
     * Channel
     * Channel
     */
    Channel[];
  /**
   * Client Log Requests Request List
   * ClientLogRequest Request List
   */
  export type RequestListClientLogRequest =
    /**
     * Client Log Request
     * Client Log Request
     */
    ClientLogRequest[];
  /**
   * Connections Request List
   * Connection Request List
   */
  export type RequestListConnection =
    /**
     * Connection
     * Connection
     */
    Connection[];
  /**
   * Counting Items Request List
   * CountingItem Request List
   */
  export type RequestListCountingItem =
    /**
     * Counting Item
     * Counting Item
     */
    CountingItem[];
  /**
   * Counting Item Reason Codes Request List
   * CountingItemReasonCode Request List
   */
  export type RequestListCountingItemReasonCode =
    /**
     * Counting Item Reason Code
     * Counting Item Reason Code
     */
    CountingItemReasonCode[];
  /**
   * Counting Tasks Request List
   * CountingTask Request List
   */
  export type RequestListCountingTask =
    /**
     * Counting Task
     * Counting Task
     */
    CountingTask[];
  /**
   * Counting Task Reason Codes Request List
   * CountingTaskReasonCode Request List
   */
  export type RequestListCountingTaskReasonCode =
    /**
     * Counting Task Reason Code
     * Counting Task Reason Code
     */
    CountingTaskReasonCode[];
  /**
   * Countries Request List
   * Country Request List
   */
  export type RequestListCountry =
    /**
     * Country
     * Country
     */
    Country[];
  /**
   * Country Aliases Request List
   * CountryAlias Request List
   */
  export type RequestListCountryAlias =
    /**
     * Country Alias
     * Country Alias
     */
    CountryAlias[];
  /**
   * Custom Route Rules Request List
   * CustomRouteRule Request List
   */
  export type RequestListCustomRouteRule =
    /**
     * Custom Route Rule
     * Custom Route Rule
     */
    CustomRouteRule[];
  /**
   * Daily Summary Stats Request List
   * DailySummaryStat Request List
   */
  export type RequestListDailySummaryStat =
    /**
     * Daily Summary Stat
     * Daily Summary Stat
     */
    DailySummaryStat[];
  /**
   * Devices Request List
   * Device Request List
   */
  export type RequestListDevice =
    /**
     * Device
     * Device
     */
    Device[];
  /**
   * Document Sequences Request List
   * DocumentSequence Request List
   */
  export type RequestListDocumentSequence =
    /**
     * Document Sequence
     * Document Sequence
     */
    DocumentSequence[];
  /**
   * Events Request List
   * Event Request List
   */
  export type RequestListEvent =
    /**
     * Event
     * Event
     */
    Event[];
  /**
   * Event Logs Request List
   * EventLog Request List
   */
  export type RequestListEventLog =
    /**
     * Event Log
     * Event Log
     */
    EventLog[];
  /**
   * Fetch Location Strategies Request List
   * FetchLocationStrategy Request List
   */
  export type RequestListFetchLocationStrategy =
    /**
     * Fetch Location Strategy
     * Fetch Location Strategy
     */
    FetchLocationStrategy[];
  /**
   * Finish Picking Requests Request List
   * FinishPickingRequest Request List
   */
  export type RequestListFinishPickingRequest =
    /**
     * Finish Picking Request
     * Finish Picking Request
     */
    FinishPickingRequest[];
  /**
   * Fulfillment Items Request List
   * FulfillmentItem Request List
   */
  export type RequestListFulfillmentItem =
    /**
     * Fulfillment Item
     * Fulfillment Item
     */
    FulfillmentItem[];
  /**
   * Fulfillment Item Batches Request List
   * FulfillmentItemBatch Request List
   */
  export type RequestListFulfillmentItemBatch =
    /**
     * Fulfillment Item Batch
     * Fulfillment Item Batch
     */
    FulfillmentItemBatch[];
  /**
   * Fulfillment Orders Request List
   * FulfillmentOrder Request List
   */
  export type RequestListFulfillmentOrder =
    /**
     * Fulfillment Order
     * Fulfillment Order
     */
    FulfillmentOrder[];
  /**
   * Incoming Goods Request List
   * IncomingGood Request List
   */
  export type RequestListIncomingGood =
    /**
     * Incoming Good
     * Incoming Good
     */
    IncomingGood[];
  /**
   * Incoming Good Items Request List
   * IncomingGoodItem Request List
   */
  export type RequestListIncomingGoodItem =
    /**
     * Incoming Good Item
     * Incoming Good Item
     */
    IncomingGoodItem[];
  /**
   * Incoming Good Item Packagings Request List
   * IncomingGoodItemPackaging Request List
   */
  export type RequestListIncomingGoodItemPackaging =
    /**
     * Incoming Good Item Packaging
     * Incoming Good Item Packaging
     */
    IncomingGoodItemPackaging[];
  /**
   * Incoming Good Item Packing Boxes Request List
   * IncomingGoodItemPackingBox Request List
   */
  export type RequestListIncomingGoodItemPackingBox =
    /**
     * Incoming Good Item Packing Box
     * Incoming Good Item Packing Box
     */
    IncomingGoodItemPackingBox[];
  /**
   * Inventories Request List
   * Inventory Request List
   */
  export type RequestListInventory =
    /**
     * Inventory
     * Inventory
     */
    Inventory[];
  /**
   * Kits Request List
   * Kit Request List
   */
  export type RequestListKit =
    /**
     * Kit
     * Kit
     */
    Kit[];
  /**
   * Kit Items Request List
   * KitItem Request List
   */
  export type RequestListKitItem =
    /**
     * Kit Item
     * Kit Item
     */
    KitItem[];
  /**
   * Kitting Items Request List
   * KittingItem Request List
   */
  export type RequestListKittingItem =
    /**
     * Kitting Item
     * Kitting Item
     */
    KittingItem[];
  /**
   * Kitting Replenishments Request List
   * KittingReplenishment Request List
   */
  export type RequestListKittingReplenishment =
    /**
     * Kitting Replenishment
     * Kitting Replenishment
     */
    KittingReplenishment[];
  /**
   * Kitting Tasks Request List
   * KittingTask Request List
   */
  export type RequestListKittingTask =
    /**
     * Kitting Task
     * Kitting Task
     */
    KittingTask[];
  /**
   * Loaded Shipping Boxes Request List
   * LoadedShippingBox Request List
   */
  export type RequestListLoadedShippingBox =
    /**
     * Loaded Shipping Box
     * Loaded Shipping Box
     */
    LoadedShippingBox[];
  /**
   * Loaded Shipping Box User Transitions Request List
   * LoadedShippingBoxUserTransition Request List
   */
  export type RequestListLoadedShippingBoxUserTransition =
    /**
     * Loaded Shipping Box User Transition
     * Loaded Shipping Box User Transition
     */
    LoadedShippingBoxUserTransition[];
  /**
   * Loading Unit Templates Request List
   * LoadingUnitTemplate Request List
   */
  export type RequestListLoadingUnitTemplate =
    /**
     * Loading Unit Template
     * Loading Unit Template
     */
    LoadingUnitTemplate[];
  /**
   * Locations Request List
   * Location Request List
   */
  export type RequestListLocation =
    /**
     * Location
     * Location
     */
    Location[];
  /**
   * Location Controls Request List
   * LocationControl Request List
   */
  export type RequestListLocationControl =
    /**
     * Location Control
     * Location Control
     */
    LocationControl[];
  /**
   * Location Product Categories Request List
   * LocationProductCategory Request List
   */
  export type RequestListLocationProductCategory =
    /**
     * Location Product Category
     * Location Product Category
     */
    LocationProductCategory[];
  /**
   * Location Product Locks Request List
   * LocationProductLock Request List
   */
  export type RequestListLocationProductLock =
    /**
     * Location Product Lock
     * Location Product Lock
     */
    LocationProductLock[];
  /**
   * Location Types Request List
   * LocationType Request List
   */
  export type RequestListLocationType =
    /**
     * Location Type
     * Location Type
     */
    LocationType[];
  /**
   * Location Zone Distances Request List
   * LocationZoneDistance Request List
   */
  export type RequestListLocationZoneDistance =
    /**
     * Location Zone Distance
     * Location Zone Distance
     */
    LocationZoneDistance[];
  /**
   * Merchants Request List
   * Merchant Request List
   */
  export type RequestListMerchant =
    /**
     * Merchant
     * Merchant
     */
    Merchant[];
  /**
   * Messages Request List
   * Message Request List
   */
  export type RequestListMessage =
    /**
     * Message
     * Message
     */
    Message[];
  /**
   * Metadata Request List
   * Metadata Request List
   */
  export type RequestListMetadata =
    /**
     * Metadata
     * Metadata
     */
    Metadata[];
  /**
   * Missing Products Request List
   * MissingProduct Request List
   */
  export type RequestListMissingProduct =
    /**
     * Missing Product
     * Missing Product
     */
    MissingProduct[];
  /**
   * Order States Request List
   * OrderState Request List
   */
  export type RequestListOrderState =
    /**
     * Order State
     * Order State
     */
    OrderState[];
  /**
   * Packing Boxes Request List
   * PackingBox Request List
   */
  export type RequestListPackingBox =
    /**
     * Packing Box
     * Packing Box
     */
    PackingBox[];
  /**
   * Packing Box Items Request List
   * PackingBoxItem Request List
   */
  export type RequestListPackingBoxItem =
    /**
     * Packing Box Item
     * Packing Box Item
     */
    PackingBoxItem[];
  /**
   * Packing Items Request List
   * PackingItem Request List
   */
  export type RequestListPackingItem =
    /**
     * Packing Item
     * Packing Item
     */
    PackingItem[];
  /**
   * Packing Item Batches Request List
   * PackingItemBatch Request List
   */
  export type RequestListPackingItemBatch =
    /**
     * Packing Item Batch
     * Packing Item Batch
     */
    PackingItemBatch[];
  /**
   * Packing Orders Request List
   * PackingOrder Request List
   */
  export type RequestListPackingOrder =
    /**
     * Packing Order
     * Packing Order
     */
    PackingOrder[];
  /**
   * Packing Order State Transitions Request List
   * PackingOrderStateTransition Request List
   */
  export type RequestListPackingOrderStateTransition =
    /**
     * Packing Order State Transition
     * Packing Order State Transition
     */
    PackingOrderStateTransition[];
  /**
   * Patches Request List
   * Patch Request List
   */
  export type RequestListPatch =
    /**
     * Patch
     * Patch
     */
    Patch[];
  /**
   * Permissions Request List
   * Permission Request List
   */
  export type RequestListPermission =
    /**
     * Permission
     * Permission
     */
    Permission[];
  /**
   * Picking Items Request List
   * PickingItem Request List
   */
  export type RequestListPickingItem =
    /**
     * Picking Item
     * Picking Item
     */
    PickingItem[];
  /**
   * Picking Item Batches Request List
   * PickingItemBatch Request List
   */
  export type RequestListPickingItemBatch =
    /**
     * Picking Item Batch
     * Picking Item Batch
     */
    PickingItemBatch[];
  /**
   * Picking Orders Request List
   * PickingOrder Request List
   */
  export type RequestListPickingOrder =
    /**
     * Picking Order
     * Picking Order
     */
    PickingOrder[];
  /**
   * Picking Requests Request List
   * PickingRequest Request List
   */
  export type RequestListPickingRequest =
    /**
     * Picking Request
     * Picking Request
     */
    PickingRequest[];
  /**
   * Print Stations Request List
   * PrintStation Request List
   */
  export type RequestListPrintStation =
    /**
     * Print Station
     * Print Station
     */
    PrintStation[];
  /**
   * Processes Request List
   * Process Request List
   */
  export type RequestListProcess =
    /**
     * Process
     * Process
     */
    Process[];
  /**
   * Process Informations Request List
   * ProcessInformation Request List
   */
  export type RequestListProcessInformation =
    /**
     * Process Information
     * Process Information
     */
    ProcessInformation[];
  /**
   * Products Request List
   * Product Request List
   */
  export type RequestListProduct =
    /**
     * Product
     * Product
     */
    Product[];
  /**
   * Product Categories Request List
   * ProductCategory Request List
   */
  export type RequestListProductCategory =
    /**
     * Product Category
     * Product Category
     */
    ProductCategory[];
  /**
   * Product Product Categories Request List
   * ProductProductCategory Request List
   */
  export type RequestListProductProductCategory =
    /**
     * Product Product Category
     * Product Product Category
     */
    ProductProductCategory[];
  /**
   * Product Quantity Alerts Request List
   * ProductQuantityAlert Request List
   */
  export type RequestListProductQuantityAlert =
    /**
     * Product Quantity Alert
     * Product Quantity Alert
     */
    ProductQuantityAlert[];
  /**
   * Product Reports Request List
   * ProductReport Request List
   */
  export type RequestListProductReport =
    /**
     * Product Report
     * Product Report
     */
    ProductReport[];
  /**
   * Product Skus Request List
   * ProductSku Request List
   */
  export type RequestListProductSku =
    /**
     * Product Sku
     * Product Sku
     */
    ProductSku[];
  /**
   * Product Sku Channels Request List
   * ProductSkuChannel Request List
   */
  export type RequestListProductSkuChannel =
    /**
     * Product Sku Channel
     * Product Sku Channel
     */
    ProductSkuChannel[];
  /**
   * Profiles Request List
   * Profile Request List
   */
  export type RequestListProfile =
    /**
     * Profile
     * Profile
     */
    Profile[];
  /**
   * Profile Permissions Request List
   * ProfilePermission Request List
   */
  export type RequestListProfilePermission =
    /**
     * Profile Permission
     * Profile Permission
     */
    ProfilePermission[];
  /**
   * Purchase Items Request List
   * PurchaseItem Request List
   */
  export type RequestListPurchaseItem =
    /**
     * Purchase Item
     * Purchase Item
     */
    PurchaseItem[];
  /**
   * Purchase Item Packagings Request List
   * PurchaseItemPackaging Request List
   */
  export type RequestListPurchaseItemPackaging =
    /**
     * Purchase Item Packaging
     * Purchase Item Packaging
     */
    PurchaseItemPackaging[];
  /**
   * Purchase Orders Request List
   * PurchaseOrder Request List
   */
  export type RequestListPurchaseOrder = PurchaseOrder[];
  /**
   * Racks Request List
   * Rack Request List
   */
  export type RequestListRack =
    /**
     * Rack
     * Rack
     */
    Rack[];
  /**
   * Reason Codes Request List
   * ReasonCode Request List
   */
  export type RequestListReasonCode = ReasonCode[];
  /**
   * Reason Codes Processes Request List
   * ReasonCodesProcesses Request List
   */
  export type RequestListReasonCodesProcesses =
    /**
     * Reason Codes Processes
     * Reason Codes Processes
     */
    ReasonCodesProcesses[];
  /**
   * Replenishment Items Request List
   * ReplenishmentItem Request List
   */
  export type RequestListReplenishmentItem =
    /**
     * Replenishment Item
     * Replenishment Item
     */
    ReplenishmentItem[];
  /**
   * Replenishment Item Batches Request List
   * ReplenishmentItemBatch Request List
   */
  export type RequestListReplenishmentItemBatch =
    /**
     * Replenishment Item Batch
     * Replenishment Item Batch
     */
    ReplenishmentItemBatch[];
  /**
   * Replenishment Orders Request List
   * ReplenishmentOrder Request List
   */
  export type RequestListReplenishmentOrder =
    /**
     * Replenishment Order
     * Replenishment Order
     */
    ReplenishmentOrder[];
  /**
   * Replenishment Route Items Request List
   * ReplenishmentRouteItem Request List
   */
  export type RequestListReplenishmentRouteItem =
    /**
     * Replenishment Route Item
     * Replenishment Route Item
     */
    ReplenishmentRouteItem[];
  /**
   * Return Labels Request List
   * ReturnLabel Request List
   */
  export type RequestListReturnLabel =
    /**
     * Return Label
     * Return Label
     */
    ReturnLabel[];
  /**
   * Route Items Request List
   * RouteItem Request List
   */
  export type RequestListRouteItem =
    /**
     * Route Item
     * Route Item
     */
    RouteItem[];
  /**
   * Sales Items Request List
   * SalesItem Request List
   */
  export type RequestListSalesItem = SalesItem[];
  /**
   * Sales Item Batches Request List
   * SalesItemBatch Request List
   */
  export type RequestListSalesItemBatch =
    /**
     * Sales Item Batch
     * Sales Item Batch
     */
    SalesItemBatch[];
  /**
   * Sales Orders Request List
   * SalesOrder Request List
   */
  export type RequestListSalesOrder = SalesOrder[];
  /**
   * Sales Order Reason Codes Request List
   * SalesOrderReasonCode Request List
   */
  export type RequestListSalesOrderReasonCode =
    /**
     * Sales Order Reason Code
     * Sales Order Reason Code
     */
    SalesOrderReasonCode[];
  /**
   * Sales Order State Transitions Request List
   * SalesOrderStateTransition Request List
   */
  export type RequestListSalesOrderStateTransition =
    /**
     * Sales Order State Transition
     * Sales Order State Transition
     */
    SalesOrderStateTransition[];
  /**
   * Sales Shipment Instructions Request List
   * SalesShipmentInstruction Request List
   */
  export type RequestListSalesShipmentInstruction = SalesShipmentInstruction[];
  /**
   * Settings Request List
   * Setting Request List
   */
  export type RequestListSetting =
    /**
     * Setting
     * Setting
     */
    Setting[];
  /**
   * Shipment Box Templates Request List
   * ShipmentBoxTemplate Request List
   */
  export type RequestListShipmentBoxTemplate =
    /**
     * Shipment Box Template
     * Shipment Box Template
     */
    ShipmentBoxTemplate[];
  /**
   * Shipment Instruction Stops Request List
   * ShipmentInstructionStop Request List
   */
  export type RequestListShipmentInstructionStop =
    /**
     * Shipment Instruction Stop
     * Shipment Instruction Stop
     */
    ShipmentInstructionStop[];
  /**
   * Shipment Trackings Request List
   * ShipmentTracking Request List
   */
  export type RequestListShipmentTracking =
    /**
     * Shipment Tracking
     * Shipment Tracking
     */
    ShipmentTracking[];
  /**
   * Shipping Items Request List
   * ShippingItem Request List
   */
  export type RequestListShippingItem =
    /**
     * Shipping Item
     * Shipping Item
     */
    ShippingItem[];
  /**
   * Shipping Methods Request List
   * ShippingMethod Request List
   */
  export type RequestListShippingMethod =
    /**
     * Shipping Method
     * Shipping Method
     */
    ShippingMethod[];
  /**
   * Shipping Orders Request List
   * ShippingOrder Request List
   */
  export type RequestListShippingOrder =
    /**
     * Shipping Order
     * Shipping Order
     */
    ShippingOrder[];
  /**
   * Socket Permissions Request List
   * SocketPermission Request List
   */
  export type RequestListSocketPermission =
    /**
     * Socket Permission
     * Socket Permission
     */
    SocketPermission[];
  /**
   * Socket Profiles Request List
   * SocketProfile Request List
   */
  export type RequestListSocketProfile =
    /**
     * Socket Profile
     * Socket Profile
     */
    SocketProfile[];
  /**
   * Socket Profile Socket Permissions Request List
   * SocketProfileSocketPermission Request List
   */
  export type RequestListSocketProfileSocketPermission =
    /**
     * Socket Profile Socket Permission
     * Socket Profile Socket Permission
     */
    SocketProfileSocketPermission[];
  /**
   * Split Replenishment Items Request List
   * SplitReplenishmentItem Request List
   */
  export type RequestListSplitReplenishmentItem =
    /**
     * Split Replenishment Item
     * Split Replenishment Item
     */
    SplitReplenishmentItem[];
  /**
   * Stocks Request List
   * Stock Request List
   */
  export type RequestListStock =
    /**
     * Stock
     * Stock
     */
    Stock[];
  /**
   * Stock Corrections Request List
   * StockCorrection Request List
   */
  export type RequestListStockCorrection = StockCorrection[];
  /**
   * Stock Correction Items Request List
   * StockCorrectionItem Request List
   */
  export type RequestListStockCorrectionItem =
    /**
     * Stock Correction Item
     * Stock Correction Item
     */
    StockCorrectionItem[];
  /**
   * Stock Loading Units Request List
   * StockLoadingUnit Request List
   */
  export type RequestListStockLoadingUnit =
    /**
     * Stock Loading Unit
     * Stock Loading Unit
     */
    StockLoadingUnit[];
  /**
   * Stock Modifications Request List
   * StockModification Request List
   */
  export type RequestListStockModification =
    /**
     * Stock Modification
     * Stock Modification
     */
    StockModification[];
  /**
   * Stock Movements Request List
   * StockMovement Request List
   */
  export type RequestListStockMovement =
    /**
     * Stock Movement
     * Stock Movement
     */
    StockMovement[];
  /**
   * Stock Records Request List
   * StockRecord Request List
   */
  export type RequestListStockRecord =
    /**
     * Stock Record
     * Stock Record
     */
    StockRecord[];
  /**
   * Stock States Request List
   * StockState Request List
   */
  export type RequestListStockState =
    /**
     * Stock State
     * Stock State
     */
    StockState[];
  /**
   * Stock Stock Loading Units Request List
   * StockStockLoadingUnit Request List
   */
  export type RequestListStockStockLoadingUnit =
    /**
     * Stock Stock Loading Unit
     * Stock Stock Loading Unit
     */
    StockStockLoadingUnit[];
  /**
   * Stock Thresholds Request List
   * StockThreshold Request List
   */
  export type RequestListStockThreshold =
    /**
     * Stock Threshold
     * Stock Threshold
     */
    StockThreshold[];
  /**
   * Stock Threshold Categories Request List
   * StockThresholdCategory Request List
   */
  export type RequestListStockThresholdCategory =
    /**
     * Stock Threshold Category
     * Stock Threshold Category
     */
    StockThresholdCategory[];
  /**
   * Suggested Batches Request List
   * SuggestedBatch Request List
   */
  export type RequestListSuggestedBatch =
    /**
     * Suggested Batch
     * Suggested Batch
     */
    SuggestedBatch[];
  /**
   * Tenants Request List
   * Tenant Request List
   */
  export type RequestListTenant =
    /**
     * Tenant
     * Tenant
     */
    Tenant[];
  /**
   * Third Parties Request List
   * ThirdParty Request List
   */
  export type RequestListThirdParty =
    /**
     * Third Party
     * Third Party
     */
    ThirdParty[];
  /**
   * Users Request List
   * User Request List
   */
  export type RequestListUser =
    /**
     * User
     * User
     */
    User[];
  /**
   * User Product Categories Request List
   * UserProductCategory Request List
   */
  export type RequestListUserProductCategory =
    /**
     * User Product Category
     * User Product Category
     */
    UserProductCategory[];
  /**
   * User Profiles Request List
   * UserProfile Request List
   */
  export type RequestListUserProfile =
    /**
     * User Profile
     * User Profile
     */
    UserProfile[];
  /**
   * User Sessions Request List
   * UserSession Request List
   */
  export type RequestListUserSession =
    /**
     * User Session
     * User Session
     */
    UserSession[];
  /**
   * User Socket Profiles Request List
   * UserSocketProfile Request List
   */
  export type RequestListUserSocketProfile =
    /**
     * User Socket Profile
     * User Socket Profile
     */
    UserSocketProfile[];
  /**
   * User Warehouses Request List
   * UserWarehouse Request List
   */
  export type RequestListUserWarehouse =
    /**
     * User Warehouse
     * User Warehouse
     */
    UserWarehouse[];
  /**
   * Warehouses Request List
   * Warehouse Request List
   */
  export type RequestListWarehouse =
    /**
     * Warehouse
     * Warehouse
     */
    Warehouse[];
  /**
   * Warehouse Aliases Request List
   * WarehouseAlias Request List
   */
  export type RequestListWarehouseAlias =
    /**
     * Warehouse Alias
     * Warehouse Alias
     */
    WarehouseAlias[];
  /**
   * Webhooks Request List
   * Webhook Request List
   */
  export type RequestListWebhook =
    /**
     * Webhook
     * Webhook
     */
    Webhook[];
  /**
   * Webhook Clients Request List
   * WebhookClient Request List
   */
  export type RequestListWebhookClient =
    /**
     * Webhook Client
     * Webhook Client
     */
    WebhookClient[];
  /**
   * Webhook Credentials Request List
   * WebhookCredential Request List
   */
  export type RequestListWebhookCredential =
    /**
     * Webhook Credential
     * Webhook Credential
     */
    WebhookCredential[];
  /**
   * Zones Request List
   * Zone Request List
   */
  export type RequestListZone =
    /**
     * Zone
     * Zone
     */
    Zone[];
  /**
   * Zone Sequences Request List
   * ZoneSequence Request List
   */
  export type RequestListZoneSequence =
    /**
     * Zone Sequence
     * Zone Sequence
     */
    ZoneSequence[];
  /**
   * Addresses Response List
   * Address Response List
   */
  export interface ResponseListAddress {
    addresses?: /**
     * Address
     * Address
     */
    Address[];
    total_results?: number;
  }
  /**
   * Address Details Response List
   * AddressDetail Response List
   */
  export interface ResponseListAddressDetail {
    address_details?: /**
     * Address Detail
     * Address Detail
     */
    AddressDetail[];
    total_results?: number;
  }
  /**
   * Api Rates Response List
   * ApiRate Response List
   */
  export interface ResponseListApiRate {
    api_rates?: /**
     * Api Rate
     * Api Rate
     */
    ApiRate[];
    total_results?: number;
  }
  /**
   * Attachments Response List
   * Attachment Response List
   */
  export interface ResponseListAttachment {
    attachments?: /**
     * Attachment
     * Attachment
     */
    Attachment[];
    total_results?: number;
  }
  /**
   * Availability Batches Response List
   * AvailabilityBatch Response List
   */
  export interface ResponseListAvailabilityBatch {
    availability_batches?: /**
     * Availability Batch
     * Availability Batch
     */
    AvailabilityBatch[];
    total_results?: number;
  }
  /**
   * Barcodes Response List
   * Barcode Response List
   */
  export interface ResponseListBarcode {
    barcodes?: /**
     * Barcode
     * Barcode
     */
    Barcode[];
    total_results?: number;
  }
  /**
   * Batches Response List
   * Batch Response List
   */
  export interface ResponseListBatch {
    batches?: /**
     * Batch
     * Batch
     */
    Batch[];
    total_results?: number;
  }
  /**
   * Cart Boxes Response List
   * CartBox Response List
   */
  export interface ResponseListCartBox {
    cart_boxes?: /**
     * Cart Box
     * Cart Box
     */
    CartBox[];
    total_results?: number;
  }
  /**
   * Channels Response List
   * Channel Response List
   */
  export interface ResponseListChannel {
    channels?: /**
     * Channel
     * Channel
     */
    Channel[];
    total_results?: number;
  }
  /**
   * Client Log Requests Response List
   * ClientLogRequest Response List
   */
  export interface ResponseListClientLogRequest {
    client_log_requests?: /**
     * Client Log Request
     * Client Log Request
     */
    ClientLogRequest[];
    total_results?: number;
  }
  /**
   * Connections Response List
   * Connection Response List
   */
  export interface ResponseListConnection {
    connections?: /**
     * Connection
     * Connection
     */
    Connection[];
    total_results?: number;
  }
  /**
   * Counting Items Response List
   * CountingItem Response List
   */
  export interface ResponseListCountingItem {
    counting_items?: /**
     * Counting Item
     * Counting Item
     */
    CountingItem[];
    total_results?: number;
  }
  /**
   * Counting Item Reason Codes Response List
   * CountingItemReasonCode Response List
   */
  export interface ResponseListCountingItemReasonCode {
    counting_item_reason_codes?: /**
     * Counting Item Reason Code
     * Counting Item Reason Code
     */
    CountingItemReasonCode[];
    total_results?: number;
  }
  /**
   * Counting Tasks Response List
   * CountingTask Response List
   */
  export interface ResponseListCountingTask {
    counting_tasks?: /**
     * Counting Task
     * Counting Task
     */
    CountingTask[];
    total_results?: number;
  }
  /**
   * Counting Task Reason Codes Response List
   * CountingTaskReasonCode Response List
   */
  export interface ResponseListCountingTaskReasonCode {
    counting_task_reason_codes?: /**
     * Counting Task Reason Code
     * Counting Task Reason Code
     */
    CountingTaskReasonCode[];
    total_results?: number;
  }
  /**
   * Countries Response List
   * Country Response List
   */
  export interface ResponseListCountry {
    countries?: /**
     * Country
     * Country
     */
    Country[];
    total_results?: number;
  }
  /**
   * Country Aliases Response List
   * CountryAlias Response List
   */
  export interface ResponseListCountryAlias {
    country_aliases?: /**
     * Country Alias
     * Country Alias
     */
    CountryAlias[];
    total_results?: number;
  }
  /**
   * Custom Route Rules Response List
   * CustomRouteRule Response List
   */
  export interface ResponseListCustomRouteRule {
    custom_route_rules?: /**
     * Custom Route Rule
     * Custom Route Rule
     */
    CustomRouteRule[];
    total_results?: number;
  }
  /**
   * Daily Summary Stats Response List
   * DailySummaryStat Response List
   */
  export interface ResponseListDailySummaryStat {
    daily_summary_stats?: /**
     * Daily Summary Stat
     * Daily Summary Stat
     */
    DailySummaryStat[];
    total_results?: number;
  }
  /**
   * Devices Response List
   * Device Response List
   */
  export interface ResponseListDevice {
    devices?: /**
     * Device
     * Device
     */
    Device[];
    total_results?: number;
  }
  /**
   * Document Sequences Response List
   * DocumentSequence Response List
   */
  export interface ResponseListDocumentSequence {
    document_sequences?: /**
     * Document Sequence
     * Document Sequence
     */
    DocumentSequence[];
    total_results?: number;
  }
  /**
   * Events Response List
   * Event Response List
   */
  export interface ResponseListEvent {
    events?: /**
     * Event
     * Event
     */
    Event[];
    total_results?: number;
  }
  /**
   * Event Logs Response List
   * EventLog Response List
   */
  export interface ResponseListEventLog {
    event_logs?: /**
     * Event Log
     * Event Log
     */
    EventLog[];
    total_results?: number;
  }
  /**
   * Fetch Location Strategies Response List
   * FetchLocationStrategy Response List
   */
  export interface ResponseListFetchLocationStrategy {
    fetch_location_strategies?: /**
     * Fetch Location Strategy
     * Fetch Location Strategy
     */
    FetchLocationStrategy[];
    total_results?: number;
  }
  /**
   * Finish Picking Requests Response List
   * FinishPickingRequest Response List
   */
  export interface ResponseListFinishPickingRequest {
    finish_picking_requests?: /**
     * Finish Picking Request
     * Finish Picking Request
     */
    FinishPickingRequest[];
    total_results?: number;
  }
  /**
   * Fulfillment Items Response List
   * FulfillmentItem Response List
   */
  export interface ResponseListFulfillmentItem {
    fulfillment_items?: /**
     * Fulfillment Item
     * Fulfillment Item
     */
    FulfillmentItem[];
    total_results?: number;
  }
  /**
   * Fulfillment Item Batches Response List
   * FulfillmentItemBatch Response List
   */
  export interface ResponseListFulfillmentItemBatch {
    fulfillment_item_batches?: /**
     * Fulfillment Item Batch
     * Fulfillment Item Batch
     */
    FulfillmentItemBatch[];
    total_results?: number;
  }
  /**
   * Fulfillment Orders Response List
   * FulfillmentOrder Response List
   */
  export interface ResponseListFulfillmentOrder {
    fulfillment_orders?: /**
     * Fulfillment Order
     * Fulfillment Order
     */
    FulfillmentOrder[];
    total_results?: number;
  }
  /**
   * Incoming Goods Response List
   * IncomingGood Response List
   */
  export interface ResponseListIncomingGood {
    incoming_goods?: /**
     * Incoming Good
     * Incoming Good
     */
    IncomingGood[];
    total_results?: number;
  }
  /**
   * Incoming Good Items Response List
   * IncomingGoodItem Response List
   */
  export interface ResponseListIncomingGoodItem {
    incoming_good_items?: /**
     * Incoming Good Item
     * Incoming Good Item
     */
    IncomingGoodItem[];
    total_results?: number;
  }
  /**
   * Incoming Good Item Packagings Response List
   * IncomingGoodItemPackaging Response List
   */
  export interface ResponseListIncomingGoodItemPackaging {
    incoming_good_item_packagings?: /**
     * Incoming Good Item Packaging
     * Incoming Good Item Packaging
     */
    IncomingGoodItemPackaging[];
    total_results?: number;
  }
  /**
   * Incoming Good Item Packing Boxes Response List
   * IncomingGoodItemPackingBox Response List
   */
  export interface ResponseListIncomingGoodItemPackingBox {
    incoming_good_item_packing_boxes?: /**
     * Incoming Good Item Packing Box
     * Incoming Good Item Packing Box
     */
    IncomingGoodItemPackingBox[];
    total_results?: number;
  }
  /**
   * Inventories Response List
   * Inventory Response List
   */
  export interface ResponseListInventory {
    inventories?: /**
     * Inventory
     * Inventory
     */
    Inventory[];
    total_results?: number;
  }
  /**
   * Kits Response List
   * Kit Response List
   */
  export interface ResponseListKit {
    kits?: /**
     * Kit
     * Kit
     */
    Kit[];
    total_results?: number;
  }
  /**
   * Kit Items Response List
   * KitItem Response List
   */
  export interface ResponseListKitItem {
    kit_items?: /**
     * Kit Item
     * Kit Item
     */
    KitItem[];
    total_results?: number;
  }
  /**
   * Kitting Items Response List
   * KittingItem Response List
   */
  export interface ResponseListKittingItem {
    kitting_items?: /**
     * Kitting Item
     * Kitting Item
     */
    KittingItem[];
    total_results?: number;
  }
  /**
   * Kitting Replenishments Response List
   * KittingReplenishment Response List
   */
  export interface ResponseListKittingReplenishment {
    kitting_replenishments?: /**
     * Kitting Replenishment
     * Kitting Replenishment
     */
    KittingReplenishment[];
    total_results?: number;
  }
  /**
   * Kitting Tasks Response List
   * KittingTask Response List
   */
  export interface ResponseListKittingTask {
    kitting_tasks?: /**
     * Kitting Task
     * Kitting Task
     */
    KittingTask[];
    total_results?: number;
  }
  /**
   * Loaded Shipping Boxes Response List
   * LoadedShippingBox Response List
   */
  export interface ResponseListLoadedShippingBox {
    loaded_shipping_boxes?: /**
     * Loaded Shipping Box
     * Loaded Shipping Box
     */
    LoadedShippingBox[];
    total_results?: number;
  }
  /**
   * Loaded Shipping Box User Transitions Response List
   * LoadedShippingBoxUserTransition Response List
   */
  export interface ResponseListLoadedShippingBoxUserTransition {
    loaded_shipping_box_user_transitions?: /**
     * Loaded Shipping Box User Transition
     * Loaded Shipping Box User Transition
     */
    LoadedShippingBoxUserTransition[];
    total_results?: number;
  }
  /**
   * Loading Unit Templates Response List
   * LoadingUnitTemplate Response List
   */
  export interface ResponseListLoadingUnitTemplate {
    loading_unit_templates?: /**
     * Loading Unit Template
     * Loading Unit Template
     */
    LoadingUnitTemplate[];
    total_results?: number;
  }
  /**
   * Locations Response List
   * Location Response List
   */
  export interface ResponseListLocation {
    locations?: /**
     * Location
     * Location
     */
    Location[];
    total_results?: number;
  }
  /**
   * Location Controls Response List
   * LocationControl Response List
   */
  export interface ResponseListLocationControl {
    location_controls?: /**
     * Location Control
     * Location Control
     */
    LocationControl[];
    total_results?: number;
  }
  /**
   * Location Product Categories Response List
   * LocationProductCategory Response List
   */
  export interface ResponseListLocationProductCategory {
    location_product_categories?: /**
     * Location Product Category
     * Location Product Category
     */
    LocationProductCategory[];
    total_results?: number;
  }
  /**
   * Location Product Locks Response List
   * LocationProductLock Response List
   */
  export interface ResponseListLocationProductLock {
    location_product_locks?: /**
     * Location Product Lock
     * Location Product Lock
     */
    LocationProductLock[];
    total_results?: number;
  }
  /**
   * Location Types Response List
   * LocationType Response List
   */
  export interface ResponseListLocationType {
    location_types?: /**
     * Location Type
     * Location Type
     */
    LocationType[];
    total_results?: number;
  }
  /**
   * Location Zone Distances Response List
   * LocationZoneDistance Response List
   */
  export interface ResponseListLocationZoneDistance {
    location_zone_distances?: /**
     * Location Zone Distance
     * Location Zone Distance
     */
    LocationZoneDistance[];
    total_results?: number;
  }
  /**
   * Merchants Response List
   * Merchant Response List
   */
  export interface ResponseListMerchant {
    merchants?: /**
     * Merchant
     * Merchant
     */
    Merchant[];
    total_results?: number;
  }
  /**
   * Messages Response List
   * Message Response List
   */
  export interface ResponseListMessage {
    messages?: /**
     * Message
     * Message
     */
    Message[];
    total_results?: number;
  }
  /**
   * Metadata Response List
   * Metadata Response List
   */
  export interface ResponseListMetadata {
    metadata?: /**
     * Metadata
     * Metadata
     */
    Metadata[];
    total_results?: number;
  }
  /**
   * Missing Products Response List
   * MissingProduct Response List
   */
  export interface ResponseListMissingProduct {
    missing_products?: /**
     * Missing Product
     * Missing Product
     */
    MissingProduct[];
    total_results?: number;
  }
  /**
   * Order States Response List
   * OrderState Response List
   */
  export interface ResponseListOrderState {
    order_states?: /**
     * Order State
     * Order State
     */
    OrderState[];
    total_results?: number;
  }
  /**
   * Packing Boxes Response List
   * PackingBox Response List
   */
  export interface ResponseListPackingBox {
    packing_boxes?: /**
     * Packing Box
     * Packing Box
     */
    PackingBox[];
    total_results?: number;
  }
  /**
   * Packing Box Items Response List
   * PackingBoxItem Response List
   */
  export interface ResponseListPackingBoxItem {
    packing_box_items?: /**
     * Packing Box Item
     * Packing Box Item
     */
    PackingBoxItem[];
    total_results?: number;
  }
  /**
   * Packing Items Response List
   * PackingItem Response List
   */
  export interface ResponseListPackingItem {
    packing_items?: /**
     * Packing Item
     * Packing Item
     */
    PackingItem[];
    total_results?: number;
  }
  /**
   * Packing Item Batches Response List
   * PackingItemBatch Response List
   */
  export interface ResponseListPackingItemBatch {
    packing_item_batches?: /**
     * Packing Item Batch
     * Packing Item Batch
     */
    PackingItemBatch[];
    total_results?: number;
  }
  /**
   * Packing Orders Response List
   * PackingOrder Response List
   */
  export interface ResponseListPackingOrder {
    packing_orders?: /**
     * Packing Order
     * Packing Order
     */
    PackingOrder[];
    total_results?: number;
  }
  /**
   * Packing Order State Transitions Response List
   * PackingOrderStateTransition Response List
   */
  export interface ResponseListPackingOrderStateTransition {
    packing_order_state_transitions?: /**
     * Packing Order State Transition
     * Packing Order State Transition
     */
    PackingOrderStateTransition[];
    total_results?: number;
  }
  /**
   * Patches Response List
   * Patch Response List
   */
  export interface ResponseListPatch {
    patches?: /**
     * Patch
     * Patch
     */
    Patch[];
    total_results?: number;
  }
  /**
   * Permissions Response List
   * Permission Response List
   */
  export interface ResponseListPermission {
    permissions?: /**
     * Permission
     * Permission
     */
    Permission[];
    total_results?: number;
  }
  /**
   * Picking Items Response List
   * PickingItem Response List
   */
  export interface ResponseListPickingItem {
    picking_items?: /**
     * Picking Item
     * Picking Item
     */
    PickingItem[];
    total_results?: number;
  }
  /**
   * Picking Item Batches Response List
   * PickingItemBatch Response List
   */
  export interface ResponseListPickingItemBatch {
    picking_item_batches?: /**
     * Picking Item Batch
     * Picking Item Batch
     */
    PickingItemBatch[];
    total_results?: number;
  }
  /**
   * Picking Orders Response List
   * PickingOrder Response List
   */
  export interface ResponseListPickingOrder {
    picking_orders?: /**
     * Picking Order
     * Picking Order
     */
    PickingOrder[];
    total_results?: number;
  }
  /**
   * Picking Requests Response List
   * PickingRequest Response List
   */
  export interface ResponseListPickingRequest {
    picking_requests?: /**
     * Picking Request
     * Picking Request
     */
    PickingRequest[];
    total_results?: number;
  }
  /**
   * Print Stations Response List
   * PrintStation Response List
   */
  export interface ResponseListPrintStation {
    print_stations?: /**
     * Print Station
     * Print Station
     */
    PrintStation[];
    total_results?: number;
  }
  /**
   * Processes Response List
   * Process Response List
   */
  export interface ResponseListProcess {
    processes?: /**
     * Process
     * Process
     */
    Process[];
    total_results?: number;
  }
  /**
   * Process Informations Response List
   * ProcessInformation Response List
   */
  export interface ResponseListProcessInformation {
    process_informations?: /**
     * Process Information
     * Process Information
     */
    ProcessInformation[];
    total_results?: number;
  }
  /**
   * Products Response List
   * Product Response List
   */
  export interface ResponseListProduct {
    products?: /**
     * Product
     * Product
     */
    Product[];
    total_results?: number;
  }
  /**
   * Product Categories Response List
   * ProductCategory Response List
   */
  export interface ResponseListProductCategory {
    product_categories?: /**
     * Product Category
     * Product Category
     */
    ProductCategory[];
    total_results?: number;
  }
  /**
   * Product Product Categories Response List
   * ProductProductCategory Response List
   */
  export interface ResponseListProductProductCategory {
    product_product_categories?: /**
     * Product Product Category
     * Product Product Category
     */
    ProductProductCategory[];
    total_results?: number;
  }
  /**
   * Product Quantity Alerts Response List
   * ProductQuantityAlert Response List
   */
  export interface ResponseListProductQuantityAlert {
    product_quantity_alerts?: /**
     * Product Quantity Alert
     * Product Quantity Alert
     */
    ProductQuantityAlert[];
    total_results?: number;
  }
  /**
   * Product Reports Response List
   * ProductReport Response List
   */
  export interface ResponseListProductReport {
    product_reports?: /**
     * Product Report
     * Product Report
     */
    ProductReport[];
    total_results?: number;
  }
  /**
   * Product Skus Response List
   * ProductSku Response List
   */
  export interface ResponseListProductSku {
    product_skus?: /**
     * Product Sku
     * Product Sku
     */
    ProductSku[];
    total_results?: number;
  }
  /**
   * Product Sku Channels Response List
   * ProductSkuChannel Response List
   */
  export interface ResponseListProductSkuChannel {
    product_sku_channels?: /**
     * Product Sku Channel
     * Product Sku Channel
     */
    ProductSkuChannel[];
    total_results?: number;
  }
  /**
   * Profiles Response List
   * Profile Response List
   */
  export interface ResponseListProfile {
    profiles?: /**
     * Profile
     * Profile
     */
    Profile[];
    total_results?: number;
  }
  /**
   * Profile Permissions Response List
   * ProfilePermission Response List
   */
  export interface ResponseListProfilePermission {
    profile_permissions?: /**
     * Profile Permission
     * Profile Permission
     */
    ProfilePermission[];
    total_results?: number;
  }
  /**
   * Purchase Items Response List
   * PurchaseItem Response List
   */
  export interface ResponseListPurchaseItem {
    purchase_items?: /**
     * Purchase Item
     * Purchase Item
     */
    PurchaseItem[];
    total_results?: number;
  }
  /**
   * Purchase Item Packagings Response List
   * PurchaseItemPackaging Response List
   */
  export interface ResponseListPurchaseItemPackaging {
    purchase_item_packagings?: /**
     * Purchase Item Packaging
     * Purchase Item Packaging
     */
    PurchaseItemPackaging[];
    total_results?: number;
  }
  /**
   * Purchase Orders Response List
   * PurchaseOrder Response List
   */
  export interface ResponseListPurchaseOrder {
    purchase_orders?: PurchaseOrder[];
    total_results?: number;
  }
  /**
   * Racks Response List
   * Rack Response List
   */
  export interface ResponseListRack {
    racks?: /**
     * Rack
     * Rack
     */
    Rack[];
    total_results?: number;
  }
  /**
   * Reason Codes Response List
   * ReasonCode Response List
   */
  export interface ResponseListReasonCode {
    reason_codes?: ReasonCode[];
    total_results?: number;
  }
  /**
   * Reason Codes Processes Response List
   * ReasonCodesProcesses Response List
   */
  export interface ResponseListReasonCodesProcesses {
    reason_codes_processes?: /**
     * Reason Codes Processes
     * Reason Codes Processes
     */
    ReasonCodesProcesses[];
    total_results?: number;
  }
  /**
   * Replenishment Items Response List
   * ReplenishmentItem Response List
   */
  export interface ResponseListReplenishmentItem {
    replenishment_items?: /**
     * Replenishment Item
     * Replenishment Item
     */
    ReplenishmentItem[];
    total_results?: number;
  }
  /**
   * Replenishment Item Batches Response List
   * ReplenishmentItemBatch Response List
   */
  export interface ResponseListReplenishmentItemBatch {
    replenishment_item_batches?: /**
     * Replenishment Item Batch
     * Replenishment Item Batch
     */
    ReplenishmentItemBatch[];
    total_results?: number;
  }
  /**
   * Replenishment Orders Response List
   * ReplenishmentOrder Response List
   */
  export interface ResponseListReplenishmentOrder {
    replenishment_orders?: /**
     * Replenishment Order
     * Replenishment Order
     */
    ReplenishmentOrder[];
    total_results?: number;
  }
  /**
   * Replenishment Route Items Response List
   * ReplenishmentRouteItem Response List
   */
  export interface ResponseListReplenishmentRouteItem {
    replenishment_route_items?: /**
     * Replenishment Route Item
     * Replenishment Route Item
     */
    ReplenishmentRouteItem[];
    total_results?: number;
  }
  /**
   * Return Labels Response List
   * ReturnLabel Response List
   */
  export interface ResponseListReturnLabel {
    return_labels?: /**
     * Return Label
     * Return Label
     */
    ReturnLabel[];
    total_results?: number;
  }
  /**
   * Route Items Response List
   * RouteItem Response List
   */
  export interface ResponseListRouteItem {
    route_items?: /**
     * Route Item
     * Route Item
     */
    RouteItem[];
    total_results?: number;
  }
  /**
   * Sales Items Response List
   * SalesItem Response List
   */
  export interface ResponseListSalesItem {
    sales_items?: SalesItem[];
    total_results?: number;
  }
  /**
   * Sales Item Batches Response List
   * SalesItemBatch Response List
   */
  export interface ResponseListSalesItemBatch {
    sales_item_batches?: /**
     * Sales Item Batch
     * Sales Item Batch
     */
    SalesItemBatch[];
    total_results?: number;
  }
  /**
   * Sales Orders Response List
   * SalesOrder Response List
   */
  export interface ResponseListSalesOrder {
    sales_orders?: SalesOrder[];
    total_results?: number;
  }
  /**
   * Sales Order Reason Codes Response List
   * SalesOrderReasonCode Response List
   */
  export interface ResponseListSalesOrderReasonCode {
    sales_order_reason_codes?: /**
     * Sales Order Reason Code
     * Sales Order Reason Code
     */
    SalesOrderReasonCode[];
    total_results?: number;
  }
  /**
   * Sales Order State Transitions Response List
   * SalesOrderStateTransition Response List
   */
  export interface ResponseListSalesOrderStateTransition {
    sales_order_state_transitions?: /**
     * Sales Order State Transition
     * Sales Order State Transition
     */
    SalesOrderStateTransition[];
    total_results?: number;
  }
  /**
   * Sales Shipment Instructions Response List
   * SalesShipmentInstruction Response List
   */
  export interface ResponseListSalesShipmentInstruction {
    sales_shipment_instructions?: SalesShipmentInstruction[];
    total_results?: number;
  }
  /**
   * Settings Response List
   * Setting Response List
   */
  export interface ResponseListSetting {
    settings?: /**
     * Setting
     * Setting
     */
    Setting[];
    total_results?: number;
  }
  /**
   * Shipment Box Templates Response List
   * ShipmentBoxTemplate Response List
   */
  export interface ResponseListShipmentBoxTemplate {
    shipment_box_templates?: /**
     * Shipment Box Template
     * Shipment Box Template
     */
    ShipmentBoxTemplate[];
    total_results?: number;
  }
  /**
   * Shipment Instruction Stops Response List
   * ShipmentInstructionStop Response List
   */
  export interface ResponseListShipmentInstructionStop {
    shipment_instruction_stops?: /**
     * Shipment Instruction Stop
     * Shipment Instruction Stop
     */
    ShipmentInstructionStop[];
    total_results?: number;
  }
  /**
   * Shipment Trackings Response List
   * ShipmentTracking Response List
   */
  export interface ResponseListShipmentTracking {
    shipment_trackings?: /**
     * Shipment Tracking
     * Shipment Tracking
     */
    ShipmentTracking[];
    total_results?: number;
  }
  /**
   * Shipping Items Response List
   * ShippingItem Response List
   */
  export interface ResponseListShippingItem {
    shipping_items?: /**
     * Shipping Item
     * Shipping Item
     */
    ShippingItem[];
    total_results?: number;
  }
  /**
   * Shipping Methods Response List
   * ShippingMethod Response List
   */
  export interface ResponseListShippingMethod {
    shipping_methods?: /**
     * Shipping Method
     * Shipping Method
     */
    ShippingMethod[];
    total_results?: number;
  }
  /**
   * Shipping Orders Response List
   * ShippingOrder Response List
   */
  export interface ResponseListShippingOrder {
    shipping_orders?: /**
     * Shipping Order
     * Shipping Order
     */
    ShippingOrder[];
    total_results?: number;
  }
  /**
   * Socket Permissions Response List
   * SocketPermission Response List
   */
  export interface ResponseListSocketPermission {
    socket_permissions?: /**
     * Socket Permission
     * Socket Permission
     */
    SocketPermission[];
    total_results?: number;
  }
  /**
   * Socket Profiles Response List
   * SocketProfile Response List
   */
  export interface ResponseListSocketProfile {
    socket_profiles?: /**
     * Socket Profile
     * Socket Profile
     */
    SocketProfile[];
    total_results?: number;
  }
  /**
   * Socket Profile Socket Permissions Response List
   * SocketProfileSocketPermission Response List
   */
  export interface ResponseListSocketProfileSocketPermission {
    socket_profile_socket_permissions?: /**
     * Socket Profile Socket Permission
     * Socket Profile Socket Permission
     */
    SocketProfileSocketPermission[];
    total_results?: number;
  }
  /**
   * Split Replenishment Items Response List
   * SplitReplenishmentItem Response List
   */
  export interface ResponseListSplitReplenishmentItem {
    split_replenishment_items?: /**
     * Split Replenishment Item
     * Split Replenishment Item
     */
    SplitReplenishmentItem[];
    total_results?: number;
  }
  /**
   * Stocks Response List
   * Stock Response List
   */
  export interface ResponseListStock {
    stocks?: /**
     * Stock
     * Stock
     */
    Stock[];
    total_results?: number;
  }
  /**
   * Stock Corrections Response List
   * StockCorrection Response List
   */
  export interface ResponseListStockCorrection {
    stock_corrections?: StockCorrection[];
    total_results?: number;
  }
  /**
   * Stock Correction Items Response List
   * StockCorrectionItem Response List
   */
  export interface ResponseListStockCorrectionItem {
    stock_correction_items?: /**
     * Stock Correction Item
     * Stock Correction Item
     */
    StockCorrectionItem[];
    total_results?: number;
  }
  /**
   * Stock Loading Units Response List
   * StockLoadingUnit Response List
   */
  export interface ResponseListStockLoadingUnit {
    stock_loading_units?: /**
     * Stock Loading Unit
     * Stock Loading Unit
     */
    StockLoadingUnit[];
    total_results?: number;
  }
  /**
   * Stock Modifications Response List
   * StockModification Response List
   */
  export interface ResponseListStockModification {
    stock_modifications?: /**
     * Stock Modification
     * Stock Modification
     */
    StockModification[];
    total_results?: number;
  }
  /**
   * Stock Movements Response List
   * StockMovement Response List
   */
  export interface ResponseListStockMovement {
    stock_movements?: /**
     * Stock Movement
     * Stock Movement
     */
    StockMovement[];
    total_results?: number;
  }
  /**
   * Stock Records Response List
   * StockRecord Response List
   */
  export interface ResponseListStockRecord {
    stock_records?: /**
     * Stock Record
     * Stock Record
     */
    StockRecord[];
    total_results?: number;
  }
  /**
   * Stock States Response List
   * StockState Response List
   */
  export interface ResponseListStockState {
    stock_states?: /**
     * Stock State
     * Stock State
     */
    StockState[];
    total_results?: number;
  }
  /**
   * Stock Stock Loading Units Response List
   * StockStockLoadingUnit Response List
   */
  export interface ResponseListStockStockLoadingUnit {
    stock_stock_loading_units?: /**
     * Stock Stock Loading Unit
     * Stock Stock Loading Unit
     */
    StockStockLoadingUnit[];
    total_results?: number;
  }
  /**
   * Stock Thresholds Response List
   * StockThreshold Response List
   */
  export interface ResponseListStockThreshold {
    stock_thresholds?: /**
     * Stock Threshold
     * Stock Threshold
     */
    StockThreshold[];
    total_results?: number;
  }
  /**
   * Stock Threshold Categories Response List
   * StockThresholdCategory Response List
   */
  export interface ResponseListStockThresholdCategory {
    stock_threshold_categories?: /**
     * Stock Threshold Category
     * Stock Threshold Category
     */
    StockThresholdCategory[];
    total_results?: number;
  }
  /**
   * Suggested Batches Response List
   * SuggestedBatch Response List
   */
  export interface ResponseListSuggestedBatch {
    suggested_batches?: /**
     * Suggested Batch
     * Suggested Batch
     */
    SuggestedBatch[];
    total_results?: number;
  }
  /**
   * Tenants Response List
   * Tenant Response List
   */
  export interface ResponseListTenant {
    tenants?: /**
     * Tenant
     * Tenant
     */
    Tenant[];
    total_results?: number;
  }
  /**
   * Third Parties Response List
   * ThirdParty Response List
   */
  export interface ResponseListThirdParty {
    third_parties?: /**
     * Third Party
     * Third Party
     */
    ThirdParty[];
    total_results?: number;
  }
  /**
   * Users Response List
   * User Response List
   */
  export interface ResponseListUser {
    total_results?: number;
    users?: /**
     * User
     * User
     */
    User[];
  }
  /**
   * User Product Categories Response List
   * UserProductCategory Response List
   */
  export interface ResponseListUserProductCategory {
    total_results?: number;
    user_product_categories?: /**
     * User Product Category
     * User Product Category
     */
    UserProductCategory[];
  }
  /**
   * User Profiles Response List
   * UserProfile Response List
   */
  export interface ResponseListUserProfile {
    total_results?: number;
    user_profiles?: /**
     * User Profile
     * User Profile
     */
    UserProfile[];
  }
  /**
   * User Sessions Response List
   * UserSession Response List
   */
  export interface ResponseListUserSession {
    total_results?: number;
    user_sessions?: /**
     * User Session
     * User Session
     */
    UserSession[];
  }
  /**
   * User Socket Profiles Response List
   * UserSocketProfile Response List
   */
  export interface ResponseListUserSocketProfile {
    total_results?: number;
    user_socket_profiles?: /**
     * User Socket Profile
     * User Socket Profile
     */
    UserSocketProfile[];
  }
  /**
   * User Warehouses Response List
   * UserWarehouse Response List
   */
  export interface ResponseListUserWarehouse {
    total_results?: number;
    user_warehouses?: /**
     * User Warehouse
     * User Warehouse
     */
    UserWarehouse[];
  }
  /**
   * Warehouses Response List
   * Warehouse Response List
   */
  export interface ResponseListWarehouse {
    total_results?: number;
    warehouses?: /**
     * Warehouse
     * Warehouse
     */
    Warehouse[];
  }
  /**
   * Warehouse Aliases Response List
   * WarehouseAlias Response List
   */
  export interface ResponseListWarehouseAlias {
    total_results?: number;
    warehouse_aliases?: /**
     * Warehouse Alias
     * Warehouse Alias
     */
    WarehouseAlias[];
  }
  /**
   * Webhooks Response List
   * Webhook Response List
   */
  export interface ResponseListWebhook {
    total_results?: number;
    webhooks?: /**
     * Webhook
     * Webhook
     */
    Webhook[];
  }
  /**
   * Webhook Clients Response List
   * WebhookClient Response List
   */
  export interface ResponseListWebhookClient {
    total_results?: number;
    webhook_clients?: /**
     * Webhook Client
     * Webhook Client
     */
    WebhookClient[];
  }
  /**
   * Webhook Credentials Response List
   * WebhookCredential Response List
   */
  export interface ResponseListWebhookCredential {
    total_results?: number;
    webhook_credentials?: /**
     * Webhook Credential
     * Webhook Credential
     */
    WebhookCredential[];
  }
  /**
   * Zones Response List
   * Zone Response List
   */
  export interface ResponseListZone {
    total_results?: number;
    zones?: /**
     * Zone
     * Zone
     */
    Zone[];
  }
  /**
   * Zone Sequences Response List
   * ZoneSequence Response List
   */
  export interface ResponseListZoneSequence {
    total_results?: number;
    zone_sequences?: /**
     * Zone Sequence
     * Zone Sequence
     */
    ZoneSequence[];
  }
  /**
   * Return Label
   * Return Label
   */
  export interface ReturnLabel {
    id?: number;
    return_code?: string;
    sales_order_id?: number;
    tenant_id?: number;
  }
  /**
   * Return Label codes
   * A list of return label code
   */
  export type ReturnLabelCodes = string[];
  /**
   * Route Item
   * Route Item
   */
  export interface RouteItem {
    id?: number;
    inserted_at?: string;
    location_id?: number;
    picking_item_id?: number;
    priority?: number;
    product_id?: number;
    requested_quantity?: number;
    updated_at?: string;
  }
  export interface SalesItem {
    attributes?: string;
    batches?: /**
     * Sales Item Batch
     * Sales Item Batch
     */
    SalesItemBatch[];
    fulfilled_quantity?: number;
    id?: number;
    inserted_at?: string;
    line_order_id?: string;
    notes?: string;
    product_id?: number;
    quantity?: number;
    required_date?: string;
    sales_order_id?: number;
    state?: string;
    updated_at?: string;
  }
  /**
   * Sales Item Batch
   * Sales Item Batch
   */
  export interface SalesItemBatch {
    batch_id: number;
    id?: number;
    inserted_at?: string;
    sales_item_id?: number;
    suggested_quantity: number;
    updated_at?: string;
  }
  export interface SalesItemBatchRequest {
    batch_id?: number;
    suggested_quantity?: number;
  }
  export interface SalesItemBodyRequest {
    attributes?: string;
    batches?: SalesItemBatchRequest[];
    line_order_id?: string;
    notes?: string;
    product_id?: number;
    quantity?: number;
    required_date?: string;
  }
  export interface SalesOrder {
    attributes?: string;
    channel?: string;
    client_id?: string;
    client_name?: string;
    creator_id?: number;
    criterium?: string;
    custom_route_rule_id?: number;
    delivery_date?: string;
    destination_warehouse_id?: number;
    estimated_total_volume?: number;
    estimated_total_weight?: number;
    id?: number;
    inserted_at?: string;
    is_cart?: boolean;
    items?: SalesItem[];
    merchant_channel_id?: number;
    merchant_id?: number;
    missing_stock_items_cancelled?: boolean;
    notes?: string;
    order_num?: string;
    packing_location_id?: number;
    priority?: number;
    process_information_id?: number;
    purchase_order_id?: number;
    service_point_id?: string;
    ship_to?: /**
     * Address
     * Address
     */
    Address;
    shipment_instructions?: SalesShipmentInstruction[];
    shipping_method_id?: number;
    state?: string;
    third_party_id?: number;
    type?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  export interface SalesOrderBodyRequest {
    attributes?: string;
    channel?: string;
    client_id?: string;
    client_name?: string;
    criterium?: string;
    custom_route_rule_id?: number;
    delivery_date?: string;
    destination_warehouse_id?: number;
    estimated_total_volume?: number;
    estimated_total_weight?: number;
    is_cart?: boolean;
    items?: SalesItemBodyRequest[];
    merchant_channel_id?: number;
    merchant_id?: number;
    missing_stock_items_cancelled?: boolean;
    notes?: string;
    order_num?: string;
    packing_location_id?: number;
    priority?: number;
    purchase_order_id?: number;
    return_labels?: string[];
    service_point_id?: string;
    ship_to?: /**
     * Address
     * Address
     */
    Address;
    shipment_instructions?: SalesShipmentInstructionBodyRequest;
    shipping_method_id?: number;
    third_party_id?: number;
    type?: string;
    warehouse_id?: number;
  }
  export type SalesOrderBodyRequestList = SalesOrderBodyRequest[];
  /**
   * Sales order search
   * Sales Order search request body
   */
  export interface SalesOrderPostSearch {
    /**
     * The map with extra attributes that sales order could need
     */
    attributes?: string;
    /**
     * Customer ID to which are sold the items
     */
    client_id?: string;
    /**
     * Customer name
     */
    client_name?: string;
    /**
     * The rule id with the strategy to be picked
     */
    custom_route_rule_id?: string;
    /**
     * Date of delivery YYYY-MM-DD
     */
    delivery_date?: string;
    /**
     * The warehouse the order arrives in in case it's of type `warehouse_movement`
     */
    destination_warehouse_id?: string;
    /**
     * unique ID of the sales order
     */
    id?: string;
    /**
     * Date of creation YYYY-MM-DD hh:mm:ss
     */
    inserted_at?: string;
    /**
     * `true` if the sales order will be picked in cart
     */
    is_cart?: boolean;
    /**
     * Limit value to pagination
     */
    limit?: number;
    /**
     * True if items were removed from sales order for missing stock
     */
    missing_stock_items_cancelled?: boolean;
    /**
     * Sales orders that NOT contains the product ID
     */
    not_product_id?: string;
    /**
     * Notes or observations about the sales order
     */
    notes?: string;
    /**
     * Offset value to pagination
     */
    offset?: number;
    /**
     * Total number of sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
     */
    order_items_count?: number;
    /**
     * Unique Identifier for Sales Order
     */
    order_num?: string;
    /**
     * Total number of products per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value`, `between:min_value,max_value` or `value` (for exact value)
     */
    order_products_qty?: number;
    /**
     * Packing location where sales order will be moved
     */
    packing_location_id?: string;
    /**
     * Determines priority of picking
     */
    priority?: string;
    /**
     * Sales orders that contains the product ID
     */
    product_id?: string;
    /**
     * List of return labels to add to a sales order. Does not accept duplicate return codes
     */
    return_labels?: any[];
    /**
     * Shipping method id for shipping method when have to delivered sales order
     */
    shipping_method_id?: string;
    /**
     * The available states are `queue`, `picking`, `packing`, `ended`, `cancelled`
     */
    state?: string;
    /**
     * Unique ID of the third party
     */
    third_party_id?: string;
    /**
     * The available types are `sales_order`, `warehouse_movement`, `return`, `POS_external`
     */
    type?: string;
    /**
     * Date of last update YYYY-MM-DD hh:mm:ss
     */
    updated_at?: string;
    /**
     * List of attributes to show in the response. No associations supported. An empty list shows all attributes
     */
    view_attributes?: string[];
    /**
     * Unique ID of the warehouse
     */
    warehouse_id?: string;
  }
  /**
   * Sales Order Reason Code
   * Sales Order Reason Code
   */
  export interface SalesOrderReasonCode {
    id?: number;
    reason_code_id?: number;
    reason_type?: string;
    sales_order_id?: number;
  }
  export interface SalesOrderReference {
    id?: number;
    order_num?: string;
  }
  export type SalesOrderReferenceIdList = number[];
  export type SalesOrderReferenceOrderNumList = string[];
  export type SalesOrderReferenceStructList = SalesOrderReference[];
  /**
   * Sales orders Response
   * Sales orders Response
   */
  export interface SalesOrderResponse {
    /**
     * Sales order id
     */
    id: number;
    /**
     * Sales order num
     */
    order_num: string;
  }
  export interface SalesOrderReturnLabelReference {
    return_label_codes?: string[];
    sales_order_id?: number;
  }
  export type SalesOrderReturnLabelReferenceStructList = SalesOrderReturnLabelReference[];
  /**
   * Sales Order State Transition
   * Sales Order State Transition
   */
  export interface SalesOrderStateTransition {
    id?: number;
    new_state?: string;
    performer_id?: number;
    previous_state?: string;
    sales_order_id?: number;
    updated_at?: string;
  }
  export interface SalesShipmentInstruction {
    id?: number;
    inserted_at?: string;
    sales_order_id?: number;
    shipment_terms_code?: string;
    shipment_terms_location?: string;
    shipping_method_id?: number;
    stops?: /**
     * Shipment Instruction Stop
     * Shipment Instruction Stop
     */
    ShipmentInstructionStop[];
    trip_number?: string;
    updated_at?: string;
  }
  export interface SalesShipmentInstructionBodyRequest {
    sales_order_id?: number;
    shipment_terms_code?: string;
    shipment_terms_location?: string;
    shipping_method_id?: number;
    stops?: /**
     * Shipment Instruction Stop
     * Shipment Instruction Stop
     */
    ShipmentInstructionStop[];
    trip_number?: string;
  }
  /**
   * Setting
   * Setting
   */
  export interface Setting {
    enabled: boolean;
    id?: number;
    key: string;
    tenant_id: number;
    user_id?: number;
    value: string;
    warehouse_id?: number;
  }
  /**
   * Shipment Box Template
   * Shipment Box Template
   */
  export interface ShipmentBoxTemplate {
    height?: number;
    id?: number;
    inserted_at?: string;
    is_default?: boolean;
    length?: number;
    merchant_channel_id?: number;
    merchant_id?: number;
    name?: string;
    updated_at?: string;
    warehouse_id?: number;
    weight?: number;
    width?: number;
  }
  /**
   * Shipment Instruction Stop
   * Shipment Instruction Stop
   */
  export interface ShipmentInstructionStop {
    address?: /**
     * Address Detail
     * Address Detail
     */
    AddressDetail;
    name?: string;
    stop_number?: string;
    stop_type?: string;
  }
  /**
   * Shipment Tracking
   * Shipment Tracking
   */
  export interface ShipmentTracking {
    attributes?: string;
    carrier_code?: string;
    error_message?: string;
    id?: number;
    inserted_at?: string;
    packing_box_id?: number;
    printed?: boolean;
    service_point_id?: string;
    shipment_cost?: number;
    status?: string;
    tracking_code?: string;
    tracking_url?: string;
    updated_at?: string;
  }
  /**
   * Shipping Item
   * Shipping Item
   */
  export interface ShippingItem {
    id?: number;
    packing_box_id?: number;
    shipping_order_id?: number;
  }
  /**
   * Shipping Method
   * Shipping Method
   */
  export interface ShippingMethod {
    carrier?: string;
    fetch_label?: boolean;
    id?: number;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    name?: string;
    service?: string;
    tenant_id?: number;
    updated_at?: string;
  }
  /**
   * Shipping Order
   * Shipping Order
   */
  export interface ShippingOrder {
    fulfillment_order_id?: number;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Shipping Item
     * Shipping Item
     */
    ShippingItem[];
    owner_id?: number;
    sales_order_id?: number;
    sequence_number?: string;
    shipping_location_id?: number;
    state?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Socket Permission
   * Socket Permission
   */
  export interface SocketPermission {
    id?: number;
    key?: string;
    subtopic?: string;
    topic?: string;
  }
  /**
   * Socket Profile
   * Socket Profile
   */
  export interface SocketProfile {
    id?: number;
    key?: string;
    socket_permissions?: /**
     * Socket Permission
     * Socket Permission
     */
    SocketPermission[];
  }
  /**
   * Socket Profile Socket Permission
   * Socket Profile Socket Permission
   */
  export interface SocketProfileSocketPermission {
    id?: number;
    socket_permission_id?: number;
    socket_profile_id?: number;
  }
  /**
   * Split Replenishment Item
   * Split Replenishment Item
   */
  export interface SplitReplenishmentItem {
    id?: number;
    performer_id?: number;
    replenishment_item_id?: number;
    replenishment_order_id?: number;
    splits?: string;
  }
  /**
   * Stock
   * Stock
   */
  export interface Stock {
    batch_id?: number;
    id?: number;
    inserted_at?: string;
    location_id?: number;
    product_id?: number;
    quantity?: number;
    stock_state_id?: number;
    updated_at?: string;
  }
  export interface StockCorrection {
    comment?: string;
    id?: number;
    inserted_at?: string;
    items?: /**
     * Stock Correction Item
     * Stock Correction Item
     */
    StockCorrectionItem[];
    owner?: OwnerUser;
    owner_id?: number;
    reason_codes?: ReasonCode[];
    sequence_number?: string;
    warehouse_id?: number;
  }
  /**
   * Stock Correction Item
   * Stock Correction Item
   */
  export interface StockCorrectionItem {
    id?: number;
    inserted_at?: string;
    location_id?: number;
    product_id?: number;
    quantity?: number;
    stock_correction_id?: number;
    updated_at?: string;
  }
  /**
   * Stock Correction Item Batch Request
   */
  export interface StockCorrectionItemBatchRequest {
    /**
     * Id of the lot or serial that will be corrected
     */
    batch_id: number;
    /**
     * The number to be added or removed from the batch (use negative value for removal)
     */
    quantity: number;
  }
  /**
   * Stock Correction Item Request
   */
  export interface StockCorrectionItemRequest {
    /**
     * Add them if the product has lots or serials, the sum of the quantities must match
     */
    item_batches?: /* Stock Correction Item Batch Request */ StockCorrectionItemBatchRequest[];
    /**
     * Id of the location where the correction is executed
     */
    location_id: number;
    /**
     * Id of the product that will be corrected
     */
    product_id: number;
    /**
     * The number to be added or removed from the product (use negative value for removal)
     */
    quantity: number;
  }
  /**
   * Stock Correction Request
   * Model for creating a new stock request
   */
  export interface StockCorrectionRequest {
    /**
     * Items that will be corrected
     */
    items: /* Stock Correction Item Request */ StockCorrectionItemRequest[];
    /**
     * Add them if some reason code must be reported
     */
    reason_codes?: ReasonCodeRequest[];
    /**
     * Warehouse id of the stock correction
     */
    warehouse_id: number;
  }
  /**
   * Stock Loading Unit
   * Stock Loading Unit
   */
  export interface StockLoadingUnit {
    id?: number;
    inserted_at?: string;
    location_id?: number;
    packaging_level?: number;
    packaging_type?: string;
    products_quantity?: number;
    updated_at?: string;
  }
  /**
   * Stock Modification
   * Stock Modification
   */
  export interface StockModification {
    batch_id?: number;
    id?: number;
    inserted_at?: string;
    location_id?: number;
    owner_id?: number;
    product_id?: number;
    quantity?: number;
    sequence_number?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Stock Movement
   * Stock Movement
   */
  export interface StockMovement {
    batch_id?: number;
    destination_location_id?: number;
    id?: number;
    origin_location_id?: number;
    product_id?: number;
    quantity?: number;
  }
  /**
   * Stock Record
   * Stock Record
   */
  export interface StockRecord {
    batch_id?: number;
    id?: number;
    inserted_at?: string;
    location_control_id?: number;
    location_id?: number;
    merchant_id?: number;
    operated_at?: string;
    previous_quantity?: number;
    product_id?: number;
    quantity?: number;
    sequence_number?: string;
    stock_state_id?: number;
    task_id?: number;
    tenant_id?: number;
    type?: string;
    updated_at?: string;
    user_id?: number;
    warehouse_id?: number;
  }
  /**
   * Stock State
   * Stock State
   */
  export interface StockState {
    available?: boolean;
    id?: number;
    inserted_at?: string;
    name?: string;
    tenant_id?: number;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Stock Stock Loading Unit
   * Stock Stock Loading Unit
   */
  export interface StockStockLoadingUnit {
    id?: number;
    inserted_at?: string;
    partial_quantity?: number;
    stock_id?: number;
    stock_loading_unit_id?: number;
    updated_at?: string;
  }
  /**
   * Stock summary
   * Stock summary for a product
   */
  export interface StockSummary {
    /**
     * Available quantity of the product, calculated by the storage stock minus the stock reserved for sales order (in queue and picking) and replenishment orders (in queue and taken)
     */
    available?: number;
    /**
     * Last stock movement date for the product
     */
    last_movement?: string;
    /**
     * Name of the product
     */
    name?: string;
    /**
     * Id of the product
     */
    product_id?: string;
    /**
     * Rejected quantity of the product, calculated by the sum of the stocks stored in return positions
     */
    rejected?: number;
    /**
     * Sku of the product
     */
    sku?: string;
    /**
     * Available quantity of the product, calculated by the sum of the stocks stored in storage, kitting, reception, packing, shipping and unavailable positions
     */
    total?: number;
    /**
     * Unavailable quantity of the product, calculated by the sum of reserved stock, kitting stock and unavailable positions stock
     */
    unavailable?: number;
  }
  export type StockSummaryResponseList =
    /**
     * Stock summary
     * Stock summary for a product
     */
    StockSummary[];
  /**
   * Stock Threshold
   * Stock Threshold
   */
  export interface StockThreshold {
    categories?: /**
     * Product Category
     * Product Category
     */
    ProductCategory[];
    id?: number;
    inserted_at?: string;
    location_id?: number;
    max?: number;
    min?: number;
    name?: string;
    product_id?: number;
    round_option?: string;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Stock Threshold Category
   * Stock Threshold Category
   */
  export interface StockThresholdCategory {
    id?: number;
    inserted_at?: string;
    product_category_id?: number;
    stock_threshold_id?: number;
    updated_at?: string;
  }
  /**
   * Suggested Batch
   * Suggested Batch
   */
  export interface SuggestedBatch {
    batch_id?: number;
    id?: number;
    inserted_at?: string;
    packing_item_id?: number;
    picking_item_id?: number;
    quantity?: number;
    updated_at?: string;
  }
  /**
   * Tenant
   * Tenant
   */
  export interface Tenant {
    active?: boolean;
    api_rate_id?: number;
    id?: number;
    industry?: string;
    inserted_at?: string;
    name?: string;
    timezone?: string;
    updated_at?: string;
    url?: string;
  }
  /**
   * Third Party
   * Third Party
   */
  export interface ThirdParty {
    active?: boolean;
    attributes?: string;
    deleted_at?: string;
    deleted_by?: number;
    email?: string;
    erp_code?: string;
    erp_id?: string;
    id?: number;
    identifier_number: string;
    identifier_type: string;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    name: string;
    tenant_id: number;
    third_type: string;
    updated_at?: string;
  }
  export interface ThirdPartyReference {
    id?: number;
    identifier_number?: string;
  }
  export type ThirdPartyReferenceIdList = number[];
  export type ThirdPartyReferenceOrderNumList = string[];
  export type ThirdPartyReferenceStructList = ThirdPartyReference[];
  /**
   * Third parties Response
   * Third parties Response
   */
  export interface ThirdPartyResponse {
    /**
     * Third party id
     */
    id: number;
    /**
     * Third party identifier number
     */
    identifier_number: string;
  }
  /**
   * Updated Packings Response
   * Updated Packings Response
   */
  export interface UpdatedPackingResponse {
    /**
     * Packing order ID
     */
    id: number;
  }
  /**
   * User
   * User
   */
  export interface User {
    active?: boolean;
    deleted_at?: string;
    deleted_by?: number;
    email?: string;
    employee_id?: string;
    first_name?: string;
    id?: number;
    inserted_at?: string;
    language?: string;
    last_name?: string;
    merchants?: /**
     * Merchant
     * Merchant
     */
    Merchant[];
    password?: string;
    permissions?: /**
     * Permission
     * Permission
     */
    Permission[];
    product_categories?: /**
     * Product Category
     * Product Category
     */
    ProductCategory[];
    profiles?: /**
     * Profile
     * Profile
     */
    Profile[];
    socket_permissions?: /**
     * Socket Permission
     * Socket Permission
     */
    SocketPermission[];
    socket_profiles?: /**
     * Socket Profile
     * Socket Profile
     */
    SocketProfile[];
    tenant_id?: number;
    type?: string;
    updated_at?: string;
    username?: string;
    warehouses?: /**
     * Warehouse
     * Warehouse
     */
    Warehouse[];
  }
  /**
   * User Product Category
   * User Product Category
   */
  export interface UserProductCategory {
    id?: number;
    inserted_at?: string;
    product_category_id?: number;
    updated_at?: string;
    user_id?: number;
  }
  /**
   * User Profile
   * User Profile
   */
  export interface UserProfile {
    id?: number;
    profile_id?: number;
    user_id?: number;
  }
  /**
   * User Session
   * User Session
   */
  export interface UserSession {
    id?: number;
    inserted_at?: string;
    login_source?: string;
    login_timestamp?: string;
    resolution?: string;
    tenant_id?: number;
    tenant_name?: string;
    updated_at?: string;
    user_id?: number;
    username?: string;
  }
  /**
   * User Socket Profile
   * User Socket Profile
   */
  export interface UserSocketProfile {
    id?: number;
    socket_profile_id?: number;
    user_id?: number;
  }
  /**
   * User Warehouse
   * User Warehouse
   */
  export interface UserWarehouse {
    id?: number;
    user_id?: number;
    warehouse_id?: number;
  }
  /**
   * Warehouse
   * Warehouse
   */
  export interface Warehouse {
    active: boolean;
    city?: string;
    company_name?: string;
    country_code?: string;
    email?: string;
    fax?: string;
    id?: number;
    inserted_at?: string;
    line1: string;
    line2?: string;
    name: string;
    phone?: string;
    priority?: number;
    site?: string;
    state?: string;
    tenant_id: number;
    updated_at?: string;
    zip_code?: string;
  }
  /**
   * Warehouse Alias
   * Warehouse Alias
   */
  export interface WarehouseAlias {
    alias?: string;
    id?: number;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    updated_at?: string;
    warehouse_id?: number;
  }
  /**
   * Webhook
   * Webhook
   */
  export interface Webhook {
    allowed_types?: string[];
    client_id?: number;
    enabled?: boolean;
    id?: string;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    method?: string;
    request_module?: string;
    response_module?: string;
    updated_at?: string;
    url?: string;
    warehouse_id?: number;
  }
  /**
   * Webhook Client
   * Webhook Client
   */
  export interface WebhookClient {
    credentials?: /**
     * Webhook Credential
     * Webhook Credential
     */
    WebhookCredential[];
    id?: number;
    inserted_at?: string;
    merchant_channel_id?: number;
    merchant_id?: number;
    name?: string;
    type?: string;
    updated_at?: string;
  }
  /**
   * Webhook Credential
   * Webhook Credential
   */
  export interface WebhookCredential {
    client_id?: number;
    id?: number;
    inserted_at?: string;
    label?: string;
    location?: string;
    type?: string;
    updated_at?: string;
    value?: string;
  }
  /**
   * Zone
   * Zone
   */
  export interface Zone {
    attributes?: string;
    client_zone?: string;
    code: string;
    id?: number;
    inserted_at?: string;
    is_defined?: boolean;
    name: string;
    position_height?: number;
    position_left?: number;
    position_top?: number;
    position_width?: number;
    priority: number;
    updated_at?: string;
    warehouse_id: number;
  }
  /**
   * Zone Sequence
   * Zone Sequence
   */
  export interface ZoneSequence {
    id?: number;
    sequence_number?: number;
    warehouse_id?: number;
  }
}
declare namespace Paths {
  namespace WmsAuthAuthControllerRequestToken {
    export interface BodyParameters {
      access_token_request?: Parameters.AccessTokenRequest;
    }
    namespace Parameters {
      export type AccessTokenRequest =
        /**
         * Access Token Request
         * Body for requesting access token
         */
        Definitions.AccessTokenRequest;
    }
    namespace Responses {
      export type $200 =
        /**
         * Access Token Response
         * Access Token Response
         */
        Definitions.AccessTokenResponse;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsCountingCountingTaskControllerAddItem {
    export interface FormDataParameters {
      quantity?: /* Counting item quantity */ Parameters.Quantity;
      product_id?: /* Counting item product ID */ Parameters.ProductId;
      batch_id?: /* Counting item batch ID */ Parameters.BatchId;
      location_id?: /* Counting item location ID */ Parameters.LocationId;
    }
    namespace Parameters {
      /**
       * Counting item batch ID
       */
      export type BatchId = number;
      /**
       * Counting task ID
       */
      export type Id = number;
      /**
       * Counting item location ID
       */
      export type LocationId = number;
      /**
       * Counting item product ID
       */
      export type ProductId = number;
      /**
       * Counting item quantity
       */
      export type Quantity = number;
    }
    export interface PathParameters {
      id: /* Counting task ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerAssign {
    export interface FormDataParameters {
      counter_id?: /* User ID of counter that counting task */ Parameters.CounterId;
      counting_tasks_id?: /* Counting Tasks ids to be assigned by the user */ Parameters.CountingTasksId;
    }
    namespace Parameters {
      /**
       * User ID of counter that counting task
       */
      export type CounterId = number;
      /**
       * Counting Tasks ids to be assigned by the user
       */
      export type CountingTasksId = number;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerCancel {
    namespace Parameters {
      /**
       * Counting task ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Counting task ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerCreate {
    export interface BodyParameters {
      counting_tasks_list?: Parameters.CountingTasksList;
      counting_task?: Parameters.CountingTask;
    }
    namespace Parameters {
      export type CountingTask =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type CountingTasksList =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask[];
    }
    namespace Responses {
      export type $201 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerDeleteItem {
    export interface FormDataParameters {
      quantity?: /* Counting item quantity */ Parameters.Quantity;
      product_id?: /* Counting item product ID */ Parameters.ProductId;
      batch_id?: /* Counting item batch ID */ Parameters.BatchId;
      location_id?: /* Counting item location ID */ Parameters.LocationId;
    }
    namespace Parameters {
      /**
       * Counting item batch ID
       */
      export type BatchId = number;
      /**
       * Counting task ID
       */
      export type Id = number;
      /**
       * Counting item ID
       */
      export type ItemId = number;
      /**
       * Counting item location ID
       */
      export type LocationId = number;
      /**
       * Counting item product ID
       */
      export type ProductId = number;
      /**
       * Counting item quantity
       */
      export type Quantity = number;
    }
    export interface PathParameters {
      id: /* Counting task ID */ Parameters.Id;
      item_id: /* Counting item ID */ Parameters.ItemId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerFinish {
    namespace Parameters {
      /**
       * Counting task ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Counting task ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerSearch {
    namespace Parameters {
      /**
       * User ID of counter that counting task
       */
      export type CounterId = number;
      /**
       * Description of counting task
       */
      export type Description = string;
      /**
       * Text to grouping the counting task, works like a tag
       */
      export type Group = string;
      /**
       * ID of counting task
       */
      export type Id = number;
      /**
       * Date with format YYYY-MM-DD
       */
      export type InsertedAt = string;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Location ID that counting task belongs
       */
      export type LocationId = number;
      /**
       * Page offset
       */
      export type Offset = number;
      /**
       * Owner ID of counting task
       */
      export type OwnerId = number;
      /**
       * Product ID that counting task belongs
       */
      export type ProductId = number;
      /**
       * Sequence number of counting task
       */
      export type SequenceNumber = string;
      /**
       * `open`, `finished`, `cancelled`, `in_progress`, `closed`
       */
      export type State = string;
      /**
       * `product`, `location`, `product_location`
       */
      export type Type = string;
    }
    export interface QueryParameters {
      type?: /* `product`, `location`, `product_location` */ Parameters.Type;
      state?: /* `open`, `finished`, `cancelled`, `in_progress`, `closed` */ Parameters.State;
      description?: /* Description of counting task */ Parameters.Description;
      group?: /* Text to grouping the counting task, works like a tag */ Parameters.Group;
      product_id?: /* Product ID that counting task belongs */ Parameters.ProductId;
      location_id?: /* Location ID that counting task belongs */ Parameters.LocationId;
      owner_id?: /* Owner ID of counting task */ Parameters.OwnerId;
      id?: /* ID of counting task */ Parameters.Id;
      counter_id?: /* User ID of counter that counting task */ Parameters.CounterId;
      sequence_number?: /* Sequence number of counting task */ Parameters.SequenceNumber;
      inserted_at?: /* Date with format YYYY-MM-DD */ Parameters.InsertedAt;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Tasks Response List
         * CountingTask Response List
         */
        Definitions.ResponseListCountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerShow {
    namespace Parameters {
      /**
       * Counting task ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Counting task ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerUpdate {
    export interface FormDataParameters {
      op?: /* `replace` */ Parameters.Op;
      path?: /* Can be `/state` or `/counter_id` */ Parameters.Path;
      value?: /* Value for state, can be `open`, `finished`, `cancelled` */ Parameters.Value;
    }
    namespace Parameters {
      /**
       * `replace`
       */
      export type Op = string;
      /**
       * Can be `/state` or `/counter_id`
       */
      export type Path = string;
      /**
       * Value for state, can be `open`, `finished`, `cancelled`
       */
      export type Value = string;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerUpdateItem {
    export interface FormDataParameters {
      quantity?: /* Counting item quantity */ Parameters.Quantity;
      product_id?: /* Counting item product ID */ Parameters.ProductId;
      batch_id?: /* Counting item batch ID */ Parameters.BatchId;
      location_id?: /* Counting item location ID */ Parameters.LocationId;
    }
    namespace Parameters {
      /**
       * Counting item batch ID
       */
      export type BatchId = number;
      /**
       * Counting task ID
       */
      export type Id = number;
      /**
       * Counting item ID
       */
      export type ItemId = number;
      /**
       * Counting item location ID
       */
      export type LocationId = number;
      /**
       * Counting item product ID
       */
      export type ProductId = number;
      /**
       * Counting item quantity
       */
      export type Quantity = number;
    }
    export interface PathParameters {
      id: /* Counting task ID */ Parameters.Id;
      item_id: /* Counting item ID */ Parameters.ItemId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerUploadItemAttachment {
    export interface FormDataParameters {
      attachment?: /* Path to document file */ Parameters.Attachment;
      filename?: /* Name of the attachment */ Parameters.Filename;
      type?: /* Type of the attachment */ Parameters.Type;
    }
    namespace Parameters {
      /**
       * Path to document file
       */
      export type Attachment = string;
      /**
       * Name of the attachment
       */
      export type Filename = string;
      /**
       * Counting Task ID
       */
      export type Id = number;
      /**
       * Counting Item ID
       */
      export type ItemId = number;
      /**
       * Type of the attachment
       */
      export type Type = string;
    }
    export interface PathParameters {
      id: /* Counting Task ID */ Parameters.Id;
      item_id: /* Counting Item ID */ Parameters.ItemId;
    }
    namespace Responses {
      export type $201 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountingCountingTaskControllerUpsertReasonCodes {
    export interface FormDataParameters {
      reason_type?: /* `auditor` or `counter` */ Parameters.ReasonType;
      reason_code_ids?: /* List of reason code ids */ Parameters.ReasonCodeIds;
    }
    namespace Parameters {
      /**
       * List of reason code ids
       */
      export type ReasonCodeIds = string;
      /**
       * `auditor` or `counter`
       */
      export type ReasonType = string;
    }
    namespace Responses {
      export type $200 =
        /**
         * Counting Task
         * Counting Task
         */
        Definitions.CountingTask;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountryCountryAliasControllerSearch {
    namespace Parameters {
      /**
       * Country alias name
       */
      export type AliasName = string;
      /**
       * Country ID
       */
      export type CountryId = number;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Page offset
       */
      export type Offset = number;
    }
    export interface PathParameters {
      country_id: /* Country ID */ Parameters.CountryId;
    }
    export interface QueryParameters {
      alias_name?: /* Country alias name */ Parameters.AliasName;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Country Aliases Response List
         * CountryAlias Response List
         */
        Definitions.ResponseListCountryAlias;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsCountryCountryControllerSearch {
    namespace Parameters {
      /**
       * Country code in alpha_2 format
       */
      export type Alpha2 = string;
      /**
       * Country code in alpha_3 format
       */
      export type Alpha3 = string;
      /**
       * Country code
       */
      export type CountryCode = string;
      /**
       * Country name
       */
      export type CountryName = string;
      /**
       * Country intermediate region
       */
      export type IntermediateRegion = string;
      /**
       * Country code in iso_3166-2
       */
      export type Iso31662 = string;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Page offset
       */
      export type Offset = number;
      /**
       * Country region
       */
      export type Region = string;
      /**
       * Country sub region
       */
      export type SubRegion = string;
    }
    export interface QueryParameters {
      country_name?: /* Country name */ Parameters.CountryName;
      alpha_2?: /* Country code in alpha_2 format */ Parameters.Alpha2;
      alpha_3?: /* Country code in alpha_3 format */ Parameters.Alpha3;
      country_code?: /* Country code */ Parameters.CountryCode;
      iso_3166_2?: /* Country code in iso_3166-2 */ Parameters.Iso31662;
      region?: /* Country region */ Parameters.Region;
      sub_region?: /* Country sub region */ Parameters.SubRegion;
      intermediate_region?: /* Country intermediate region */ Parameters.IntermediateRegion;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Countries Response List
         * Country Response List
         */
        Definitions.ResponseListCountry;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsDeviceDeviceControllerCreate {
    export interface FormDataParameters {
      serial?: /* Serial of the device */ Parameters.Serial;
      type?: /* Type of the device */ Parameters.Type;
      instance_id?: /* Instance ID of Google */ Parameters.InstanceId;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Instance ID of Google
       */
      export type InstanceId = string;
      /**
       * Serial of the device
       */
      export type Serial = string;
      /**
       * Type of the device
       */
      export type Type = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
    namespace Responses {
      export type $201 =
        /**
         * Device
         * Device
         */
        Definitions.Device;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsDeviceDeviceControllerShow {
    namespace Parameters {
      /**
       * Device ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Device ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Device
         * Device
         */
        Definitions.Device;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsDeviceDeviceControllerUpdate {
    namespace Parameters {
      /**
       * Device ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Device ID */ Parameters.Id;
    }
    namespace Responses {
      export type $201 =
        /**
         * Device
         * Device
         */
        Definitions.Device;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamBulkBulkThirdPartyControllerBulkCreate {
    export interface BodyParameters {
      third_party_request_list?: Parameters.ThirdPartyRequestList;
    }
    namespace Parameters {
      export type ThirdPartyRequestList =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty[];
    }
    namespace Responses {
      export type $201 =
        /**
         * Created Third parties list
         * Created Third parties list
         */
        Definitions.BulkThirdPartyResponse;
      export type $400 =
        /**
         * Created Third parties and errors list
         * Created Third parties and errors list
         */
        Definitions.BulkErrorsThirdPartyResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsIamBulkBulkThirdPartyControllerBulkUpdate {
    export interface BodyParameters {
      third_parties_request_list?: Parameters.ThirdPartiesRequestList;
    }
    namespace Parameters {
      export type ThirdPartiesRequestList =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty[];
    }
    namespace Responses {
      export type $201 =
        /**
         * Created Third parties list
         * Created Third parties list
         */
        Definitions.BulkThirdPartyResponse;
      export type $400 =
        /**
         * Updated Third parties and errors list
         * Updated Third parties and errors list
         */
        Definitions.BulkUpdateErrorsThirdPartyResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsIamIamControllerSearchProfiles {
    namespace Parameters {
      /**
       * Profile ID
       */
      export type Id = number;
      /**
       * Key of profile
       */
      export type Key = string;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
    }
    export interface QueryParameters {
      id?: /* Profile ID */ Parameters.Id;
      key?: /* Key of profile */ Parameters.Key;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Profiles Response List
         * Profile Response List
         */
        Definitions.ResponseListProfile;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamIamControllerSearchSocketProfiles {
    namespace Parameters {
      /**
       * Socket profile ID
       */
      export type Id = number;
      /**
       * Key of socket profile
       */
      export type Key = string;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
    }
    export interface QueryParameters {
      id?: /* Socket profile ID */ Parameters.Id;
      key?: /* Key of socket profile */ Parameters.Key;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
    namespace Responses {
      export type $201 =
        /**
         * Device
         * Device
         */
        Definitions.Device;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamIamControllerShowProfile {
    namespace Parameters {
      /**
       * Profile ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Profile ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Profile
         * Profile
         */
        Definitions.Profile;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamIamControllerShowSocketProfile {
    namespace Parameters {
      /**
       * Socket profile ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Socket profile ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Socket Profile
         * Socket Profile
         */
        Definitions.SocketProfile;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamTenantControllerCreate {
    export interface BodyParameters {
      single_tenant?: Parameters.SingleTenant;
    }
    namespace Parameters {
      export type SingleTenant =
        /**
         * Tenant
         * Tenant
         */
        Definitions.Tenant;
    }
  }
  namespace WmsIamTenantControllerSearch {
    namespace Parameters {
      /**
       * Whether a Tenant is valid or not
       */
      export type Active = boolean;
      /**
       * Name of industry
       */
      export type Industry = string;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Name of Tenant
       */
      export type Name = string;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
    }
    export interface QueryParameters {
      name?: /* Name of Tenant */ Parameters.Name;
      industry?: /* Name of industry */ Parameters.Industry;
      active?: /* Whether a Tenant is valid or not */ Parameters.Active;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsIamTenantControllerShow {
    namespace Parameters {
      /**
       * Tenant ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Tenant ID */ Parameters.Id;
    }
  }
  namespace WmsIamTenantControllerUpdate {
    export interface FormDataParameters {
      name?: /* Name of Tenant */ Parameters.Name;
      industry?: /* Name of industry */ Parameters.Industry;
      active?: /* Whether a Tenant is valid or not */ Parameters.Active;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
    namespace Parameters {
      /**
       * Whether a Tenant is valid or not
       */
      export type Active = boolean;
      /**
       * Tenant ID
       */
      export type Id = number;
      /**
       * Name of industry
       */
      export type Industry = string;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Name of Tenant
       */
      export type Name = string;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
    }
    export interface PathParameters {
      id: /* Tenant ID */ Parameters.Id;
    }
  }
  namespace WmsIamThirdPartyControllerCreate {
    export interface BodyParameters {
      third_party?: Parameters.ThirdParty;
    }
    namespace Parameters {
      export type ThirdParty =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty;
    }
    namespace Responses {
      export type $201 =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamThirdPartyControllerDelete {
    namespace Parameters {
      /**
       * Third Party ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Third Party ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamThirdPartyControllerSearch {
    namespace Parameters {
      /**
       * Whether a third party is active or not
       */
      export type Active = string;
      /**
       * Extra attributes
       */
      export type Attributes = string;
      /**
       * Code of third party in ERP
       */
      export type ErpCode = string;
      /**
       * ID of third party in ERP
       */
      export type ErpId = string;
      /**
       * Alphanumerical code to identify the third party
       */
      export type IdentifierNumber = string;
      /**
       * Type of identifier of third party
       */
      export type IdentifierType = string;
      /**
       * Filter by a given merchant else use the default merchant_id
       */
      export type MerchantId = number;
      /**
       * Name of third party
       */
      export type Name = string;
      /**
       * Delivery date of related orders for customers. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      export type RelatedOrdersDeliveryDate = string;
      /**
       * State of the related orders for customers
       */
      export type RelatedOrdersState = string;
      /**
       * Type can be `S` for supplier or `C` for customer
       */
      export type ThirdType = string;
    }
    export interface QueryParameters {
      identifier_type?: /* Type of identifier of third party */ Parameters.IdentifierType;
      identifier_number?: /* Alphanumerical code to identify the third party */ Parameters.IdentifierNumber;
      name?: /* Name of third party */ Parameters.Name;
      third_type?: /* Type can be `S` for supplier or `C` for customer */ Parameters.ThirdType;
      active?: /* Whether a third party is active or not */ Parameters.Active;
      attributes?: /* Extra attributes */ Parameters.Attributes;
      erp_code?: /* Code of third party in ERP */ Parameters.ErpCode;
      erp_id?: /* ID of third party in ERP */ Parameters.ErpId;
      related_orders_delivery_date?: /**
       * Delivery date of related orders for customers. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      Parameters.RelatedOrdersDeliveryDate;
      related_orders_state?: /* State of the related orders for customers */ Parameters.RelatedOrdersState;
      merchant_id?: /* Filter by a given merchant else use the default merchant_id */ Parameters.MerchantId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Third Parties Response List
         * ThirdParty Response List
         */
        Definitions.ResponseListThirdParty;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsIamThirdPartyControllerShow {
    namespace Parameters {
      /**
       * Third party ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Third party ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamThirdPartyControllerUpdate {
    export interface BodyParameters {
      third_party?: Parameters.ThirdParty;
    }
    namespace Parameters {
      /**
       * Third party ID
       */
      export type Id = number;
      export type ThirdParty =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty;
    }
    export interface PathParameters {
      id: /* Third party ID */ Parameters.Id;
    }
    namespace Responses {
      export type $201 =
        /**
         * Third Party
         * Third Party
         */
        Definitions.ThirdParty;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamThirdPartyControllerUpload {
    export interface FormDataParameters {
      file?: /* Path to CSV file */ Parameters.File;
    }
    namespace Parameters {
      /**
       * Path to CSV file
       */
      export type File = string;
    }
  }
  namespace WmsIamUserControllerAllowedWarehouses {
    namespace Parameters {
      /**
       * User ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* User ID */ Parameters.Id;
    }
  }
  namespace WmsIamUserControllerAssignMerchants {
    namespace Parameters {
      /**
       * User ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* User ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * User
         * User
         */
        Definitions.User;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamUserControllerCreate {
    export interface FormDataParameters {
      username?: /* User nickname */ Parameters.Username;
      password?: /* Password */ Parameters.Password;
      employee_id?: /* The id for the employee within the company */ Parameters.EmployeeId;
      email?: /* the email for the user */ Parameters.Email;
      first_name?: /* First name */ Parameters.FirstName;
      last_name?: /* Last name */ Parameters.LastName;
      type?: /* Type option: user admin root */ Parameters.Type;
      tenant_id?: /* Id for tenant */ Parameters.TenantId;
      active?: /* Determines if an user can access to the system */ Parameters.Active;
    }
    namespace Parameters {
      /**
       * Determines if an user can access to the system
       */
      export type Active = boolean;
      /**
       * the email for the user
       */
      export type Email = string;
      /**
       * The id for the employee within the company
       */
      export type EmployeeId = string;
      /**
       * First name
       */
      export type FirstName = string;
      /**
       * Last name
       */
      export type LastName = string;
      /**
       * Password
       */
      export type Password = string;
      /**
       * Id for tenant
       */
      export type TenantId = number;
      /**
       * Type option: user admin root
       */
      export type Type = boolean;
      /**
       * User nickname
       */
      export type Username = string;
    }
  }
  namespace WmsIamUserControllerDelete {
    namespace Parameters {
      /**
       * User ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* User ID */ Parameters.Id;
    }
  }
  namespace WmsIamUserControllerMe {
    namespace Responses {
      export type $200 =
        /**
         * User
         * User
         */
        Definitions.User;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsIamUserControllerMerchants {
    namespace Parameters {
      /**
       * User ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* User ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * User
         * User
         */
        Definitions.User;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsIamUserControllerPendingTasks {
    namespace Parameters {
      /**
       * User ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* User ID */ Parameters.Id;
    }
  }
  namespace WmsIamUserControllerSearch {
    namespace Parameters {
      /**
       * User active status
       */
      export type Active = string;
      /**
       * User email
       */
      export type Email = string;
      /**
       * User employee ID
       */
      export type EmployeeId = string;
      /**
       * User firstname
       */
      export type FirstName = string;
      /**
       * User ID
       */
      export type Id = string;
      /**
       * User lastname
       */
      export type LastName = string;
      /**
       * User permissions
       */
      export type Permission = string;
      /**
       * User categories
       */
      export type ProductCategories = string;
      /**
       * User profiles
       */
      export type Profile = string;
      /**
       * User username
       */
      export type Username = string;
    }
    export interface QueryParameters {
      id?: /* User ID */ Parameters.Id;
      username?: /* User username */ Parameters.Username;
      employee_id?: /* User employee ID */ Parameters.EmployeeId;
      email?: /* User email */ Parameters.Email;
      first_name?: /* User firstname */ Parameters.FirstName;
      last_name?: /* User lastname */ Parameters.LastName;
      profile?: /* User profiles */ Parameters.Profile;
      permission?: /* User permissions */ Parameters.Permission;
      active?: /* User active status */ Parameters.Active;
      product_categories?: /* User categories */ Parameters.ProductCategories;
    }
  }
  namespace WmsIamUserControllerSearchBasicInfo {
    namespace Parameters {
      /**
       * User active status
       */
      export type Active = string;
      /**
       * User email
       */
      export type Email = string;
      /**
       * User employee ID
       */
      export type EmployeeId = string;
      /**
       * User firstname
       */
      export type FirstName = string;
      /**
       * User ID
       */
      export type Id = string;
      /**
       * User lastname
       */
      export type LastName = string;
      /**
       * User permissions
       */
      export type Permission = string;
      /**
       * User categories
       */
      export type ProductCategories = string;
      /**
       * User profiles
       */
      export type Profile = string;
      /**
       * User username
       */
      export type Username = string;
    }
    export interface QueryParameters {
      id?: /* User ID */ Parameters.Id;
      username?: /* User username */ Parameters.Username;
      employee_id?: /* User employee ID */ Parameters.EmployeeId;
      email?: /* User email */ Parameters.Email;
      first_name?: /* User firstname */ Parameters.FirstName;
      last_name?: /* User lastname */ Parameters.LastName;
      profile?: /* User profiles */ Parameters.Profile;
      permission?: /* User permissions */ Parameters.Permission;
      active?: /* User active status */ Parameters.Active;
      product_categories?: /* User categories */ Parameters.ProductCategories;
    }
  }
  namespace WmsIamUserControllerShow {
    namespace Parameters {
      /**
       * User ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* User ID */ Parameters.Id;
    }
  }
  namespace WmsIamUserControllerUpdate {
    export interface FormDataParameters {
      username?: /* User nickname */ Parameters.Username;
      password?: /* Password */ Parameters.Password;
      employee_id?: /* The id for the employee within the company */ Parameters.EmployeeId;
      email?: /* the email for the user */ Parameters.Email;
      first_name?: /* First name */ Parameters.FirstName;
      last_name?: /* Last name */ Parameters.LastName;
      type?: /* Type option: user admin root */ Parameters.Type;
      tenant_id?: /* Id for tenant */ Parameters.TenantId;
      active?: /* Determines if an user can access to the system */ Parameters.Active;
    }
    namespace Parameters {
      /**
       * Determines if an user can access to the system
       */
      export type Active = boolean;
      /**
       * the email for the user
       */
      export type Email = string;
      /**
       * The id for the employee within the company
       */
      export type EmployeeId = string;
      /**
       * First name
       */
      export type FirstName = string;
      /**
       * User ID
       */
      export type Id = number;
      /**
       * Last name
       */
      export type LastName = string;
      /**
       * Password
       */
      export type Password = string;
      /**
       * Id for tenant
       */
      export type TenantId = number;
      /**
       * Type option: user admin root
       */
      export type Type = boolean;
      /**
       * User nickname
       */
      export type Username = string;
    }
    export interface PathParameters {
      id: /* User ID */ Parameters.Id;
    }
  }
  namespace WmsIamUserControllerUpdateSession {
    export interface BodyParameters {
      user_session?: Parameters.UserSession;
    }
    namespace Parameters {
      /**
       * Session ID
       */
      export type Id = number;
      export type UserSession =
        /**
         * User Session
         * User Session
         */
        Definitions.UserSession;
    }
    export interface PathParameters {
      id: /* Session ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * User Session
         * User Session
         */
        Definitions.UserSession;
    }
  }
  namespace WmsInventoryBatchControllerCreate {
    export interface FormDataParameters {
      number?: /* Alphanumerical number of batch */ Parameters.Number;
      type?: /* Type of batch `lot`, `serial`, `none` */ Parameters.Type;
      expiration_date?: /* Expiration Date of batch, Format YYYY-MM-DD */ Parameters.ExpirationDate;
      client_id?: /* Client Identifier associated to batch */ Parameters.ClientId;
      third_party_id?: /* Supplier ID for the batch */ Parameters.ThirdPartyId;
    }
    namespace Parameters {
      /**
       * Client Identifier associated to batch
       */
      export type ClientId = string;
      /**
       * Expiration Date of batch, Format YYYY-MM-DD
       */
      export type ExpirationDate = string;
      /**
       * Alphanumerical number of batch
       */
      export type Number = string;
      /**
       * Supplier ID for the batch
       */
      export type ThirdPartyId = string;
      /**
       * Type of batch `lot`, `serial`, `none`
       */
      export type Type = string;
    }
  }
  namespace WmsInventoryBatchControllerPostSearch {
    namespace Parameters {
      /**
       * Client Identifier associated to batch
       */
      export type ClientId = string;
      /**
       * Expiration Date of batch, Format YYYY-MM-DD
       */
      export type ExpirationDate = string;
      /**
       * Limit number for pagination
       */
      export type Limit = number;
      /**
       * Alphanumerical number of batch
       */
      export type Number = string;
      /**
       * Offset number for pagination
       */
      export type Offset = number;
      /**
       * Product ID
       */
      export type ProductId = number;
      /**
       * Type of batch `lot`, `serial`, `none`
       */
      export type Type = string;
    }
    export interface QueryParameters {
      product_id?: /* Product ID */ Parameters.ProductId;
      number?: /* Alphanumerical number of batch */ Parameters.Number;
      type?: /* Type of batch `lot`, `serial`, `none` */ Parameters.Type;
      expiration_date?: /* Expiration Date of batch, Format YYYY-MM-DD */ Parameters.ExpirationDate;
      client_id?: /* Client Identifier associated to batch */ Parameters.ClientId;
      limit?: /* Limit number for pagination */ Parameters.Limit;
      offset?: /* Offset number for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryBatchControllerSearch {
    namespace Parameters {
      /**
       * Client Identifier associated to batch
       */
      export type ClientId = string;
      /**
       * If true returns only batches with existing stock in available locations
       */
      export type ExistingStock = boolean;
      /**
       * Expiration Date of batch, Format YYYY-MM-DD
       */
      export type ExpirationDate = string;
      /**
       * Limit number for pagination
       */
      export type Limit = number;
      /**
       * Alphanumerical number of batch
       */
      export type Number = string;
      /**
       * Offset number for pagination
       */
      export type Offset = number;
      /**
       * Product ID
       */
      export type ProductId = number;
      /**
       * If true includes batches with stock in unavailable locations
       */
      export type ShowUnavailableStock = boolean;
      /**
       * Type of batch `lot`, `serial`, `none`
       */
      export type Type = string;
    }
    export interface QueryParameters {
      product_id?: /* Product ID */ Parameters.ProductId;
      number?: /* Alphanumerical number of batch */ Parameters.Number;
      type?: /* Type of batch `lot`, `serial`, `none` */ Parameters.Type;
      expiration_date?: /* Expiration Date of batch, Format YYYY-MM-DD */ Parameters.ExpirationDate;
      client_id?: /* Client Identifier associated to batch */ Parameters.ClientId;
      limit?: /* Limit number for pagination */ Parameters.Limit;
      offset?: /* Offset number for pagination */ Parameters.Offset;
      existing_stock?: /* If true returns only batches with existing stock in available locations */ Parameters.ExistingStock;
      show_unavailable_stock?: /* If true includes batches with stock in unavailable locations */ Parameters.ShowUnavailableStock;
    }
  }
  namespace WmsInventoryBatchControllerSearchByProduct {
    namespace Parameters {
      /**
       * Client Identifier associated to batch
       */
      export type ClientId = string;
      /**
       * Expiration Date of batch, Format YYYY-MM-DD
       */
      export type ExpirationDate = string;
      /**
       * Product ID
       */
      export type Id = number;
      /**
       * Limit number for pagination
       */
      export type Limit = number;
      /**
       * Alphanumerical number of batch
       */
      export type Number = string;
      /**
       * Offset number for pagination
       */
      export type Offset = number;
      /**
       * Type of batch `lot`, `serial`, `none`
       */
      export type Type = string;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
    }
    export interface QueryParameters {
      number?: /* Alphanumerical number of batch */ Parameters.Number;
      type?: /* Type of batch `lot`, `serial`, `none` */ Parameters.Type;
      expiration_date?: /* Expiration Date of batch, Format YYYY-MM-DD */ Parameters.ExpirationDate;
      client_id?: /* Client Identifier associated to batch */ Parameters.ClientId;
      limit?: /* Limit number for pagination */ Parameters.Limit;
      offset?: /* Offset number for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryBatchControllerShow {
    namespace Parameters {
      /**
       * Batch ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Batch ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryBatchControllerUpdate {
    export interface FormDataParameters {
      number?: /* Alphanumerical number of batch */ Parameters.Number;
      type?: /* Type of batch `lot`, `serial`, `none` */ Parameters.Type;
      expiration_date?: /* Expiration Date of batch, Format YYYY-MM-DD */ Parameters.ExpirationDate;
      client_id?: /* Client Identifier associated to batch */ Parameters.ClientId;
      third_party_id?: /* Supplier ID for the batch */ Parameters.ThirdPartyId;
    }
    namespace Parameters {
      /**
       * Client Identifier associated to batch
       */
      export type ClientId = string;
      /**
       * Expiration Date of batch, Format YYYY-MM-DD
       */
      export type ExpirationDate = string;
      /**
       * Batch ID
       */
      export type Id = number;
      /**
       * Alphanumerical number of batch
       */
      export type Number = string;
      /**
       * Supplier ID for the batch
       */
      export type ThirdPartyId = string;
      /**
       * Type of batch `lot`, `serial`, `none`
       */
      export type Type = string;
    }
    export interface PathParameters {
      id: /* Batch ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryBulkBulkProductControllerBulkCreate {
    export interface BodyParameters {
      product_list_request?: Parameters.ProductListRequest;
    }
    namespace Parameters {
      export type ProductListRequest =
        /**
         * Products Actions Request
         * list of products
         */
        Definitions.ProductListRequest;
    }
    namespace Responses {
      export type $201 =
        /**
         * Created Products list
         * Created Products list
         */
        Definitions.BulkProductResponse;
      export type $400 =
        /**
         * Created pickings list
         * Created pickings list
         */
        Definitions.BulkErrorsProductsResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryBulkBulkProductControllerBulkDelete {
    export interface BodyParameters {
      product_reference_struct_list?: Parameters.ProductReferenceStructList;
      product_reference_id_list?: Parameters.ProductReferenceIdList;
      product_reference_sku_list?: Parameters.ProductReferenceSkuList;
    }
    namespace Parameters {
      export type ProductReferenceIdList = Definitions.ProductReferenceIdList;
      export type ProductReferenceSkuList = Definitions.ProductReferenceSkuList;
      export type ProductReferenceStructList = Definitions.ProductReferenceStructList;
    }
  }
  namespace WmsInventoryBulkBulkProductControllerBulkUpdate {
    export interface BodyParameters {
      products_request_list?: Parameters.ProductsRequestList;
    }
    namespace Parameters {
      export type ProductsRequestList =
        /**
         * Product
         * Product
         */
        Definitions.Product[];
    }
    namespace Responses {
      export type $201 =
        /**
         * Updated Products list
         * Updated Products list
         */
        Definitions.BulkUpdateProductResponse;
      export type $400 =
        /**
         * Updated pickings list
         * Updated pickings list
         */
        Definitions.BulkUpdateErrorsProductsResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryInventoryControllerCreate {
    export interface FormDataParameters {
      title?: /* Title of Inventory */ Parameters.Title;
      notes?: /* Note of inventory */ Parameters.Notes;
      start_date?: /* Start date of inventory in YYYY-MM-DD */ Parameters.StartDate;
      end_date?: /* End Date of inventory in YYYY-MM-DD */ Parameters.EndDate;
      state?: /* State of the inventory `queue`, `in_progress`, `finished` */ Parameters.State;
      owner_id?: /* ID of the Owner of inventory */ Parameters.OwnerId;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * End Date of inventory in YYYY-MM-DD
       */
      export type EndDate = string;
      /**
       * Note of inventory
       */
      export type Notes = string;
      /**
       * ID of the Owner of inventory
       */
      export type OwnerId = number;
      /**
       * Start date of inventory in YYYY-MM-DD
       */
      export type StartDate = string;
      /**
       * State of the inventory `queue`, `in_progress`, `finished`
       */
      export type State = string;
      /**
       * Title of Inventory
       */
      export type Title = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsInventoryInventoryControllerDelete {
    namespace Parameters {
      /**
       * Inventory ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Inventory ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryInventoryControllerSearch {
    namespace Parameters {
      /**
       * End Date of inventory in YYYY-MM-DD
       */
      export type EndDate = string;
      /**
       * Inventory ID
       */
      export type Id = number;
      /**
       * Note of inventory
       */
      export type Notes = string;
      /**
       * ID of the Owner of inventory
       */
      export type OwnerId = number;
      /**
       * Start date of inventory in YYYY-MM-DD
       */
      export type StartDate = string;
      /**
       * State of the inventory `queue`, `in_progress`, `finished`
       */
      export type State = string;
      /**
       * Title of Inventory
       */
      export type Title = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      id?: /* Inventory ID */ Parameters.Id;
      title?: /* Title of Inventory */ Parameters.Title;
      notes?: /* Note of inventory */ Parameters.Notes;
      start_date?: /* Start date of inventory in YYYY-MM-DD */ Parameters.StartDate;
      end_date?: /* End Date of inventory in YYYY-MM-DD */ Parameters.EndDate;
      state?: /* State of the inventory `queue`, `in_progress`, `finished` */ Parameters.State;
      owner_id?: /* ID of the Owner of inventory */ Parameters.OwnerId;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
  }
  namespace WmsInventoryInventoryControllerShow {
    namespace Parameters {
      /**
       * Inventory ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Inventory ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryInventoryControllerUpdate {
    export interface FormDataParameters {
      title?: /* Title of Inventory */ Parameters.Title;
      notes?: /* Note of inventory */ Parameters.Notes;
      start_date?: /* Start date of inventory in YYYY-MM-DD */ Parameters.StartDate;
      end_date?: /* End Date of inventory in YYYY-MM-DD */ Parameters.EndDate;
      state?: /* State of the inventory `queue`, `in_progress`, `finished` */ Parameters.State;
      owner_id?: /* ID of the Owner of inventory */ Parameters.OwnerId;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * End Date of inventory in YYYY-MM-DD
       */
      export type EndDate = string;
      /**
       * Inventory ID
       */
      export type Id = number;
      /**
       * Note of inventory
       */
      export type Notes = string;
      /**
       * ID of the Owner of inventory
       */
      export type OwnerId = number;
      /**
       * Start date of inventory in YYYY-MM-DD
       */
      export type StartDate = string;
      /**
       * State of the inventory `queue`, `in_progress`, `finished`
       */
      export type State = string;
      /**
       * Title of Inventory
       */
      export type Title = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
    export interface PathParameters {
      id: /* Inventory ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryKitControllerDeactivate {
    namespace Parameters {
      /**
       * Kit ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Kit ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryKitControllerSearch {
    namespace Parameters {
      /**
       * Kit ID
       */
      export type Id = number;
      /**
       * Location id
       */
      export type LocationId = number;
      /**
       * Product id
       */
      export type ProductId = number;
    }
    export interface QueryParameters {
      id?: /* Kit ID */ Parameters.Id;
      product_id?: /* Product id */ Parameters.ProductId;
      location_id?: /* Location id */ Parameters.LocationId;
    }
  }
  namespace WmsInventoryKitControllerShow {
    namespace Parameters {
      /**
       * Kit ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Kit ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryLoadingUnitTemplateControllerCreate {
    export interface FormDataParameters {
      name?: /* Loading unit template Name */ Parameters.Name;
      type?: /* Type of the loading unit template, valid ones are `bag`, `bin`, `box`, `mix_container`, `pallet` */ Parameters.Type;
      weight?: /* Weight of an empty loading unit template */ Parameters.Weight /* float */;
      height?: /* Height of loading unit template */ Parameters.Height /* float */;
      width?: /* Width of loading unit template */ Parameters.Width /* float */;
      length?: /* Length of loading unit template */ Parameters.Length /* float */;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
      merchant_id?: /* Merchant ID */ Parameters.MerchantId;
      is_default?: /* Is default loading unit template */ Parameters.IsDefault;
    }
    namespace Parameters {
      /**
       * Height of loading unit template
       */
      export type Height = number; // float
      /**
       * Is default loading unit template
       */
      export type IsDefault = boolean;
      /**
       * Length of loading unit template
       */
      export type Length = number; // float
      /**
       * Merchant ID
       */
      export type MerchantId = number;
      /**
       * Loading unit template Name
       */
      export type Name = string;
      /**
       * Type of the loading unit template, valid ones are `bag`, `bin`, `box`, `mix_container`, `pallet`
       */
      export type Type = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
      /**
       * Weight of an empty loading unit template
       */
      export type Weight = number; // float
      /**
       * Width of loading unit template
       */
      export type Width = number; // float
    }
    namespace Responses {
      export type $201 =
        /**
         * Loading Unit Template
         * Loading Unit Template
         */
        Definitions.LoadingUnitTemplate;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryLoadingUnitTemplateControllerDelete {
    namespace Parameters {
      /**
       * Loading unit template ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Loading unit template ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Loading Unit Template
         * Loading Unit Template
         */
        Definitions.LoadingUnitTemplate;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryLoadingUnitTemplateControllerSearch {
    namespace Parameters {
      /**
       * ID of the loading unit template
       */
      export type Id = number;
      /**
       * Merchant ID
       */
      export type MerchantId = number;
      /**
       * Name of the loading unit template
       */
      export type Name = string;
      /**
       * Type of the loading unit template
       */
      export type Type = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      id?: /* ID of the loading unit template */ Parameters.Id;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
      merchant_id?: /* Merchant ID */ Parameters.MerchantId;
      name?: /* Name of the loading unit template */ Parameters.Name;
      type?: /* Type of the loading unit template */ Parameters.Type;
    }
    namespace Responses {
      export type $200 =
        /**
         * Loading Unit Templates Response List
         * LoadingUnitTemplate Response List
         */
        Definitions.ResponseListLoadingUnitTemplate;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryLoadingUnitTemplateControllerUpdate {
    export interface FormDataParameters {
      name?: /* Loading unit template Name */ Parameters.Name;
      type?: /* Type of the loading unit template, valid ones are `bag`, `bin`, `box`, `mix_container`, `pallet` */ Parameters.Type;
      weight?: /* Weight of an empty loading unit template */ Parameters.Weight /* float */;
      height?: /* Height of loading unit template */ Parameters.Height /* float */;
      width?: /* Width of loading unit template */ Parameters.Width /* float */;
      length?: /* Length of loading unit template */ Parameters.Length /* float */;
      is_default?: /* Is default loading unit template */ Parameters.IsDefault;
    }
    namespace Parameters {
      /**
       * Height of loading unit template
       */
      export type Height = number; // float
      /**
       * Loading unit template ID
       */
      export type Id = number;
      /**
       * Is default loading unit template
       */
      export type IsDefault = boolean;
      /**
       * Length of loading unit template
       */
      export type Length = number; // float
      /**
       * Loading unit template Name
       */
      export type Name = string;
      /**
       * Type of the loading unit template, valid ones are `bag`, `bin`, `box`, `mix_container`, `pallet`
       */
      export type Type = string;
      /**
       * Weight of an empty loading unit template
       */
      export type Weight = number; // float
      /**
       * Width of loading unit template
       */
      export type Width = number; // float
    }
    export interface PathParameters {
      id: /* Loading unit template ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Loading Unit Template
         * Loading Unit Template
         */
        Definitions.LoadingUnitTemplate;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductCategoryControllerCreate {
    export interface BodyParameters {
      product_category?: Parameters.ProductCategory;
    }
    namespace Parameters {
      export type ProductCategory =
        /**
         * Product Category
         * Product Category
         */
        Definitions.ProductCategory;
    }
    namespace Responses {
      export type $201 =
        /**
         * Product Category
         * Product Category
         */
        Definitions.ProductCategory;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductCategoryControllerDelete {
    namespace Parameters {
      /**
       * ID of product category
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* ID of product category */ Parameters.Id;
    }
  }
  namespace WmsInventoryProductCategoryControllerSearch {
    namespace Parameters {
      /**
       * Code of product category
       */
      export type Code = string;
      /**
       * ID of product category
       */
      export type Id = number;
      /**
       * Name of product category
       */
      export type Name = string;
    }
    export interface QueryParameters {
      id?: /* ID of product category */ Parameters.Id;
      code?: /* Code of product category */ Parameters.Code;
      name?: /* Name of product category */ Parameters.Name;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product Categories Response List
         * ProductCategory Response List
         */
        Definitions.ResponseListProductCategory;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryProductCategoryControllerShow {
    namespace Parameters {
      /**
       * ID of product category
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* ID of product category */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product Category
         * Product Category
         */
        Definitions.ProductCategory;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductCategoryControllerUpdate {
    export interface BodyParameters {
      product_category?: Parameters.ProductCategory;
    }
    namespace Parameters {
      /**
       * ID of product category to edit
       */
      export type Id = number;
      export type ProductCategory =
        /**
         * Product Category
         * Product Category
         */
        Definitions.ProductCategory;
    }
    export interface PathParameters {
      id: /* ID of product category to edit */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product Category
         * Product Category
         */
        Definitions.ProductCategory;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductControllerAttach {
    export interface FormDataParameters {
      attachment?: /* Path to document file */ Parameters.Attachment;
      filename?: /* Name of the attachment */ Parameters.Filename;
      type?: /* Type of the attachment */ Parameters.Type;
    }
    namespace Parameters {
      /**
       * Path to document file
       */
      export type Attachment = string;
      /**
       * Name of the attachment
       */
      export type Filename = string;
      /**
       * Product ID
       */
      export type ID = number;
      /**
       * Type of the attachment
       */
      export type Type = string;
    }
    export interface PathParameters {
      ID: /* Product ID */ Parameters.ID;
    }
  }
  namespace WmsInventoryProductControllerBatchUpdate {
    export interface BodyParameters {
      product_list_request?: Parameters.ProductListRequest;
    }
    namespace Parameters {
      export type ProductListRequest =
        /**
         * Products Actions Request
         * list of products
         */
        Definitions.ProductListRequest;
    }
    namespace Responses {
      export type $200 =
        /**
         * Products Response List
         * Product Response List
         */
        Definitions.ResponseListProduct;
    }
  }
  namespace WmsInventoryProductControllerCreate {
    export interface BodyParameters {
      product?: Parameters.Product;
    }
    namespace Parameters {
      export type Product =
        /**
         * Product
         * Product
         */
        Definitions.Product;
    }
    namespace Responses {
      export type $201 =
        /**
         * Product
         * Product
         */
        Definitions.Product;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductControllerDelete {
    namespace Parameters {
      /**
       * Product ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryProductControllerOSearch {
    namespace Parameters {
      /**
       * Whether a product is active or not
       */
      export type Active = boolean;
      /**
       * Product Barcode
       */
      export type Barcode = string;
      /**
       * Description of product
       */
      export type Description = string;
      /**
       * Product ID
       */
      export type Id = string;
      /**
       * Type of management `serial`, `lot` or `none`
       */
      export type ManagementType = string;
      /**
       * Merchant unique ID
       */
      export type MerchantId = string;
      /**
       * Product Name
       */
      export type Name = string;
      /**
       * Delivery date of related orders of products. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      export type RelatedOrdersDeliveryDate = string;
      /**
       * State of related orders of products
       */
      export type RelatedOrdersState = string;
      /**
       * Product SKU
       */
      export type Sku = string;
      /**
       * Third party unique ID
       */
      export type ThirdPartyId = string;
    }
    export interface QueryParameters {
      id?: /* Product ID */ Parameters.Id;
      sku?: /* Product SKU */ Parameters.Sku;
      barcode?: /* Product Barcode */ Parameters.Barcode;
      name?: /* Product Name */ Parameters.Name;
      description?: /* Description of product */ Parameters.Description;
      management_type?: /* Type of management `serial`, `lot` or `none` */ Parameters.ManagementType;
      third_party_id?: /* Third party unique ID */ Parameters.ThirdPartyId;
      merchant_id?: /* Merchant unique ID */ Parameters.MerchantId;
      active?: /* Whether a product is active or not */ Parameters.Active;
      related_orders_delivery_date?: /**
       * Delivery date of related orders of products. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      Parameters.RelatedOrdersDeliveryDate;
      related_orders_state?: /* State of related orders of products */ Parameters.RelatedOrdersState;
    }
    namespace Responses {
      export type $200 =
        /**
         * Products Response List
         * Product Response List
         */
        Definitions.ResponseListProduct;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryProductControllerPostOsearch {
    export interface FormDataParameters {
      id?: /* Product ID */ Parameters.Id;
      sku?: /* Product SKU */ Parameters.Sku;
      barcode?: /* Product Barcode */ Parameters.Barcode;
      name?: /* Product Name */ Parameters.Name;
      description?: /* Description of product */ Parameters.Description;
      management_type?: /* Type of management `serial`, `lot` or `none` */ Parameters.ManagementType;
      active?: /* Whether a product is active or not */ Parameters.Active;
    }
    namespace Parameters {
      /**
       * Whether a product is active or not
       */
      export type Active = boolean;
      /**
       * Product Barcode
       */
      export type Barcode = string;
      /**
       * Description of product
       */
      export type Description = string;
      /**
       * Product ID
       */
      export type Id = number;
      /**
       * Type of management `serial`, `lot` or `none`
       */
      export type ManagementType = string;
      /**
       * Product Name
       */
      export type Name = string;
      /**
       * Product SKU
       */
      export type Sku = string;
    }
    namespace Responses {
      export type $200 =
        /**
         * Products Response List
         * Product Response List
         */
        Definitions.ResponseListProduct;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryProductControllerPostSearch {
    export interface FormDataParameters {
      id?: /* Product ID */ Parameters.Id;
      sku?: /* Product SKU */ Parameters.Sku;
      barcode?: /* Product Barcode */ Parameters.Barcode;
      name?: /* Product Name */ Parameters.Name;
      description?: /* Description of product */ Parameters.Description;
      management_type?: /* Type of management `serial`, `lot` or `none` */ Parameters.ManagementType;
      third_party_id?: /* Third party unique ID */ Parameters.ThirdPartyId;
      active?: /* Whether a product is active or not */ Parameters.Active;
    }
    namespace Parameters {
      /**
       * Whether a product is active or not
       */
      export type Active = boolean;
      /**
       * Product Barcode
       */
      export type Barcode = string;
      /**
       * Description of product
       */
      export type Description = string;
      /**
       * Product ID
       */
      export type Id = string;
      /**
       * Type of management `serial`, `lot` or `none`
       */
      export type ManagementType = string;
      /**
       * Product Name
       */
      export type Name = string;
      /**
       * Delivery date of related orders of products. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      export type RelatedOrdersDeliveryDate = string;
      /**
       * State of related orders of products
       */
      export type RelatedOrdersState = string;
      /**
       * Product SKU
       */
      export type Sku = string;
      /**
       * Third party unique ID
       */
      export type ThirdPartyId = string;
    }
    export interface QueryParameters {
      related_orders_delivery_date?: /**
       * Delivery date of related orders of products. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      Parameters.RelatedOrdersDeliveryDate;
      related_orders_state?: /* State of related orders of products */ Parameters.RelatedOrdersState;
    }
    namespace Responses {
      export type $200 =
        /**
         * Products Response List
         * Product Response List
         */
        Definitions.ResponseListProduct;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryProductControllerSearch {
    namespace Parameters {
      /**
       * Whether a product is active or not
       */
      export type Active = boolean;
      /**
       * Product Barcode
       */
      export type Barcode = string;
      /**
       * Description of product
       */
      export type Description = string;
      /**
       * Product ID
       */
      export type Id = number;
      /**
       * Type of management `serial`, `lot` or `none`
       */
      export type ManagementType = string;
      /**
       * Product Name
       */
      export type Name = string;
      /**
       * Delivery date of related orders of products. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      export type RelatedOrdersDeliveryDate = string;
      /**
       * State of related orders of products
       */
      export type RelatedOrdersState = string;
      /**
       * Product SKU
       */
      export type Sku = string;
      /**
       * Third party unique ID
       */
      export type ThirdPartyId = string;
    }
    export interface QueryParameters {
      id?: /* Product ID */ Parameters.Id;
      sku?: /* Product SKU */ Parameters.Sku;
      barcode?: /* Product Barcode */ Parameters.Barcode;
      name?: /* Product Name */ Parameters.Name;
      description?: /* Description of product */ Parameters.Description;
      management_type?: /* Type of management `serial`, `lot` or `none` */ Parameters.ManagementType;
      third_party_id?: /* Third party unique ID */ Parameters.ThirdPartyId;
      active?: /* Whether a product is active or not */ Parameters.Active;
      related_orders_delivery_date?: /**
       * Delivery date of related orders of products. Available filters are `gte:date`, `gt:date`, `lte:date`, `lt:date`, `between:date1,date2` or `date`
       *  `gte: grater than or equal`, gt: `greater than`, lte: `less than or equal`, lt: `less than`
       */
      Parameters.RelatedOrdersDeliveryDate;
      related_orders_state?: /* State of related orders of products */ Parameters.RelatedOrdersState;
    }
    namespace Responses {
      export type $200 =
        /**
         * Products Response List
         * Product Response List
         */
        Definitions.ResponseListProduct;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryProductControllerShow {
    namespace Parameters {
      /**
       * Product ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product
         * Product
         */
        Definitions.Product;
    }
  }
  namespace WmsInventoryProductControllerUpdate {
    export interface BodyParameters {
      product?: Parameters.Product;
    }
    namespace Parameters {
      /**
       * Product ID
       */
      export type Id = number;
      export type Product =
        /**
         * Product
         * Product
         */
        Definitions.Product;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product
         * Product
         */
        Definitions.Product;
    }
  }
  namespace WmsInventoryProductControllerUpload {
    export interface FormDataParameters {
      file?: /* Path to CSV file */ Parameters.File;
    }
    namespace Parameters {
      /**
       * Path to CSV file
       */
      export type File = string;
    }
  }
  namespace WmsInventoryProductQuantityAlertControllerCreate {
    export interface FormDataParameters {
      user_id?: /* User ID */ Parameters.UserId;
      product_id?: /* Product ID */ Parameters.ProductId;
      location_id?: /* Location ID */ Parameters.LocationId;
    }
    namespace Parameters {
      /**
       * Location ID
       */
      export type LocationId = number;
      /**
       * Product ID
       */
      export type ProductId = number;
      /**
       * User ID
       */
      export type UserId = number;
    }
  }
  namespace WmsInventoryProductQuantityAlertControllerDelete {
    namespace Parameters {
      /**
       * Product quantity alert ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Product quantity alert ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryProductQuantityAlertControllerIndex {
    namespace Parameters {
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Location ID
       */
      export type LocationId = number;
      /**
       * Limit value for pagination
       */
      export type Offset = number;
      /**
       * Product ID
       */
      export type ProductId = number;
      /**
       * User ID
       */
      export type UserId = number;
    }
    export interface QueryParameters {
      user_id?: /* User ID */ Parameters.UserId;
      product_id?: /* Product ID */ Parameters.ProductId;
      location_id?: /* Location ID */ Parameters.LocationId;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Limit value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryProductQuantityAlertControllerShow {
    namespace Parameters {
      /**
       * Product quantity alert ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Product quantity alert ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryProductSkuControllerCreate {
    export interface BodyParameters {
      product_sku?: Parameters.ProductSku;
    }
    namespace Parameters {
      export type ProductSku =
        /**
         * Product Sku
         * Product Sku
         */
        Definitions.ProductSku;
    }
    namespace Responses {
      export type $201 =
        /**
         * Product Sku
         * Product Sku
         */
        Definitions.ProductSku;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductSkuControllerDelete {
    namespace Parameters {
      /**
       * Product ID
       */
      export type Id = number;
      /**
       * Product sku ID
       */
      export type SkuId = number;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
      sku_id: /* Product sku ID */ Parameters.SkuId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product Sku
         * Product Sku
         */
        Definitions.ProductSku;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductSkuControllerSearch {
    namespace Parameters {
      /**
       * The state of the product
       */
      export type Active = boolean;
      /**
       * Description of the product sku
       */
      export type Desciption = string;
      /**
       * Product ID
       */
      export type Id = number;
      /**
       * Default state of the product sku
       */
      export type IsDefault = boolean;
      /**
       * Limit number for pagination
       */
      export type Limit = number;
      /**
       * Name of the product sku
       */
      export type Name = string;
      /**
       * Offset number for pagination
       */
      export type Offset = number;
      /**
       * The product sku
       */
      export type Sku = string;
      /**
       * Supplier product ID
       */
      export type SupplierProductId = number;
      /**
       * Third party ID
       */
      export type ThirdPartyId = number;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
    }
    export interface QueryParameters {
      active?: /* The state of the product */ Parameters.Active;
      is_default?: /* Default state of the product sku */ Parameters.IsDefault;
      sku?: /* The product sku */ Parameters.Sku;
      supplier_product_id?: /* Supplier product ID */ Parameters.SupplierProductId;
      name?: /* Name of the product sku */ Parameters.Name;
      desciption?: /* Description of the product sku */ Parameters.Desciption;
      third_party_id?: /* Third party ID */ Parameters.ThirdPartyId;
      limit?: /* Limit number for pagination */ Parameters.Limit;
      offset?: /* Offset number for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryProductSkuControllerShow {
    namespace Parameters {
      /**
       * Product ID
       */
      export type Id = number;
      /**
       * SKU ID
       */
      export type SkuId = number;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
      sku_id: /* SKU ID */ Parameters.SkuId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product Sku
         * Product Sku
         */
        Definitions.ProductSku;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryProductSkuControllerUpdate {
    export interface BodyParameters {
      product_sku?: Parameters.ProductSku;
    }
    namespace Parameters {
      /**
       * Product ID
       */
      export type Id = number;
      export type ProductSku =
        /**
         * Product Sku
         * Product Sku
         */
        Definitions.ProductSku;
      /**
       * Product sku ID
       */
      export type SkuId = number;
    }
    export interface PathParameters {
      id: /* Product ID */ Parameters.Id;
      sku_id: /* Product sku ID */ Parameters.SkuId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Product Sku
         * Product Sku
         */
        Definitions.ProductSku;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryStockControllerAdd {
    export interface FormDataParameters {
      quantity?: /* Quantity to add */ Parameters.Quantity;
      location_id?: /* Location of stock */ Parameters.LocationId;
      product_id?: /* Product of stock */ Parameters.ProductId;
      batch_id?: /* Batch of stock */ Parameters.BatchId;
    }
    namespace Parameters {
      /**
       * Batch of stock
       */
      export type BatchId = number;
      /**
       * Location of stock
       */
      export type LocationId = number;
      /**
       * Product of stock
       */
      export type ProductId = number;
      /**
       * Quantity to add
       */
      export type Quantity = number;
    }
  }
  namespace WmsInventoryStockControllerAvailability {
    namespace Parameters {
      /**
       * List of product IDs
       */
      export type Id = number;
      /**
       * List of warehouse IDs
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      id?: /* List of product IDs */ Parameters.Id;
      warehouse_id?: /* List of warehouse IDs */ Parameters.WarehouseId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Availability
         * availability of a product
         */
        Definitions.Availability;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryStockControllerCorrect {
    export interface BodyParameters {
      stock_correction_request?: Parameters.StockCorrectionRequest;
    }
    namespace Parameters {
      export type StockCorrectionRequest =
        /**
         * Stock Correction Request
         * Model for creating a new stock request
         */
        Definitions.StockCorrectionRequest;
    }
    namespace Responses {
      export type $201 = Definitions.StockCorrection;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $403 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryStockControllerCount {
    namespace Parameters {
      /**
       * Batch ID of stock
       */
      export type BatchId = number;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Location ID of stock
       */
      export type LocationId = number;
      /**
       * Location Type ID
       */
      export type LocationTypeId = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
      /**
       * Product ID of stock
       */
      export type ProductId = number;
      /**
       * Stock State ID
       */
      export type StockStateId = number;
      /**
       * Zone ID of stock
       */
      export type ZoneId = number;
    }
    export interface QueryParameters {
      product_id?: /* Product ID of stock */ Parameters.ProductId;
      location_id?: /* Location ID of stock */ Parameters.LocationId;
      zone_id?: /* Zone ID of stock */ Parameters.ZoneId;
      location_type_id?: /* Location Type ID */ Parameters.LocationTypeId;
      stock_state_id?: /* Stock State ID */ Parameters.StockStateId;
      batch_id?: /* Batch ID of stock */ Parameters.BatchId;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryStockControllerExpiring {
    namespace Parameters {
      /**
       * Batch ID of stock
       */
      export type BatchId = number;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Location ID of stock
       */
      export type LocationId = number;
      /**
       * Location Type ID
       */
      export type LocationTypeId = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
      /**
       * Product ID of stock
       */
      export type ProductId = number;
      /**
       * Stock State ID
       */
      export type StockStateId = number;
      /**
       * Zone ID of stock
       */
      export type ZoneId = number;
    }
    export interface QueryParameters {
      product_id?: /* Product ID of stock */ Parameters.ProductId;
      location_id?: /* Location ID of stock */ Parameters.LocationId;
      zone_id?: /* Zone ID of stock */ Parameters.ZoneId;
      location_type_id?: /* Location Type ID */ Parameters.LocationTypeId;
      stock_state_id?: /* Stock State ID */ Parameters.StockStateId;
      batch_id?: /* Batch ID of stock */ Parameters.BatchId;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryStockControllerIncomingOutgoing {
    export interface FormDataParameters {
      product_id?: /* Product ID filter */ Parameters.ProductId;
      date?: /* Date filter */ Parameters.Date;
    }
    namespace Parameters {
      /**
       * Date filter
       */
      export type Date = string;
      /**
       * Product ID filter
       */
      export type ProductId = number;
    }
  }
  namespace WmsInventoryStockControllerIndex {
    namespace Parameters {
      /**
       * Batch ID of stock
       */
      export type BatchId = number;
      /**
       * Hallway of the location
       */
      export type Hallway = number;
      /**
       * Level of the location
       */
      export type Level = number;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Location ID of stock
       */
      export type LocationId = number;
      /**
       * Location Type ID
       */
      export type LocationTypeId = number;
      /**
       * Module of the location
       */
      export type Module = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
      /**
       * Position of the location
       */
      export type Position = number;
      /**
       * Product barcodes of stock
       */
      export type ProductBarcode = string;
      /**
       * Product ID of stock
       */
      export type ProductId = number;
      /**
       * Rack ID of stock
       */
      export type RackId = number;
      /**
       * Row of the location
       */
      export type Row = number;
      /**
       * Stock State ID
       */
      export type StockStateId = number;
      /**
       * Zone ID of stock
       */
      export type ZoneId = number;
    }
    export interface QueryParameters {
      product_id?: /* Product ID of stock */ Parameters.ProductId;
      location_id?: /* Location ID of stock */ Parameters.LocationId;
      batch_id?: /* Batch ID of stock */ Parameters.BatchId;
      zone_id?: /* Zone ID of stock */ Parameters.ZoneId;
      rack_id?: /* Rack ID of stock */ Parameters.RackId;
      location_type_id?: /* Location Type ID */ Parameters.LocationTypeId;
      stock_state_id?: /* Stock State ID */ Parameters.StockStateId;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
      hallway?: /* Hallway of the location */ Parameters.Hallway;
      row?: /* Row of the location */ Parameters.Row;
      module?: /* Module of the location */ Parameters.Module;
      level?: /* Level of the location */ Parameters.Level;
      product_barcode?: /* Product barcodes of stock */ Parameters.ProductBarcode;
      position?: /* Position of the location */ Parameters.Position;
    }
    namespace Responses {
      export type $200 =
        /**
         * Stocks Response List
         * Stock Response List
         */
        Definitions.ResponseListStock;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryStockControllerMove {
    export interface FormDataParameters {
      origin_location_id?: /* Origin location ID */ Parameters.OriginLocationId;
      destination_location_id?: /* Destination Location ID */ Parameters.DestinationLocationId;
      quantity?: /* Quantity to move */ Parameters.Quantity;
    }
    namespace Parameters {
      /**
       * Destination Location ID
       */
      export type DestinationLocationId = number;
      /**
       * Origin location ID
       */
      export type OriginLocationId = number;
      /**
       * Quantity to move
       */
      export type Quantity = number;
    }
  }
  namespace WmsInventoryStockControllerPostAvailability {
    namespace Parameters {
      /**
       * list of product IDs
       */
      export type Id = number;
      /**
       * list of warehouse IDs
       */
      export type WarehouseId = number;
    }
    export interface PathParameters {
      id: /* list of product IDs */ Parameters.Id;
      warehouse_id: /* list of warehouse IDs */ Parameters.WarehouseId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Availability
         * availability of a product
         */
        Definitions.Availability;
    }
  }
  namespace WmsInventoryStockControllerRemove {
    export interface FormDataParameters {
      quantity?: /* Quantity to remove */ Parameters.Quantity;
      location_id?: /* Location of stock */ Parameters.LocationId;
      product_id?: /* Product of stock */ Parameters.ProductId;
      batch_id?: /* Batch of stock */ Parameters.BatchId;
    }
    namespace Parameters {
      /**
       * Batch of stock
       */
      export type BatchId = number;
      /**
       * Location of stock
       */
      export type LocationId = number;
      /**
       * Product of stock
       */
      export type ProductId = number;
      /**
       * Quantity to remove
       */
      export type Quantity = number;
    }
  }
  namespace WmsInventoryStockControllerSearch {
    namespace Parameters {
      /**
       * Batch ID of stock
       */
      export type BatchId = number;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Location ID of stock
       */
      export type LocationId = number;
      /**
       * Location Type ID
       */
      export type LocationTypeId = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
      /**
       * Product ID of stock
       */
      export type ProductId = number;
      /**
       * Stock State ID
       */
      export type StockStateId = number;
      /**
       * Zone ID of stock
       */
      export type ZoneId = number;
    }
    export interface QueryParameters {
      product_id?: /* Product ID of stock */ Parameters.ProductId;
      location_id?: /* Location ID of stock */ Parameters.LocationId;
      zone_id?: /* Zone ID of stock */ Parameters.ZoneId;
      location_type_id?: /* Location Type ID */ Parameters.LocationTypeId;
      stock_state_id?: /* Stock State ID */ Parameters.StockStateId;
      batch_id?: /* Batch ID of stock */ Parameters.BatchId;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryStockControllerSearchByProductAndLocation {
    namespace Parameters {
      /**
       * Batch ID of stock
       */
      export type BatchId = number;
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Location code of stock
       */
      export type LocationCode = string;
      /**
       * Location ID of stock
       */
      export type LocationId = number;
      /**
       * Location Type ID
       */
      export type LocationTypeId = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
      /**
       * Product barcodes of stock
       */
      export type ProductBarcode = string;
      /**
       * Product ID of stock
       */
      export type ProductId = number;
      /**
       * Product name of stock
       */
      export type ProductName = string;
      /**
       * Product sku of stock
       */
      export type ProductSku = string;
      /**
       * Stock State ID
       */
      export type StockStateId = number;
    }
    export interface QueryParameters {
      product_id?: /* Product ID of stock */ Parameters.ProductId;
      location_id?: /* Location ID of stock */ Parameters.LocationId;
      batch_id?: /* Batch ID of stock */ Parameters.BatchId;
      location_type_id?: /* Location Type ID */ Parameters.LocationTypeId;
      stock_state_id?: /* Stock State ID */ Parameters.StockStateId;
      product_name?: /* Product name of stock */ Parameters.ProductName;
      product_barcode?: /* Product barcodes of stock */ Parameters.ProductBarcode;
      product_sku?: /* Product sku of stock */ Parameters.ProductSku;
      location_code?: /* Location code of stock */ Parameters.LocationCode;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Stocks Response List
         * Stock Response List
         */
        Definitions.ResponseListStock;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryStockControllerSearchStockCorrections {
    namespace Parameters {
      /**
       * Timestamp
       */
      export type InsertedAt = string;
      /**
       * Location code of the stock correction
       */
      export type LocationCode = string;
      /**
       * Product sku of the stock correction
       */
      export type ProductName = string;
      /**
       * Product name of the stock correction
       */
      export type ProductSku = string;
    }
    export interface QueryParameters {
      product_sku?: /* Product name of the stock correction */ Parameters.ProductSku;
      product_name?: /* Product sku of the stock correction */ Parameters.ProductName;
      location_code?: /* Location code of the stock correction */ Parameters.LocationCode;
      inserted_at?: /* Timestamp */ Parameters.InsertedAt;
    }
    namespace Responses {
      export type $200 =
        /**
         * Stock Corrections Response List
         * StockCorrection Response List
         */
        Definitions.ResponseListStockCorrection;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $403 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryStockControllerStockAvailabilityBatch {
    namespace Parameters {
      /**
       * list of product IDs
       */
      export type ProductId = number;
      /**
       * list of warehouse IDs
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      product_id?: /* list of product IDs */ Parameters.ProductId;
      warehouse_id?: /* list of warehouse IDs */ Parameters.WarehouseId;
    }
    namespace Responses {
      export type $200 = Definitions.AvailabilityBatchResponseList;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryStockControllerSummaryStock {
    namespace Parameters {
      /**
       * list of product IDs
       */
      export type ProductId = number;
      /**
       * list of warehouse IDs
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      product_id?: /* list of product IDs */ Parameters.ProductId;
      warehouse_id?: /* list of warehouse IDs */ Parameters.WarehouseId;
    }
    namespace Responses {
      export type $200 = Definitions.StockSummaryResponseList;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsInventoryStockControllerSummaryStockCsv {
    namespace Parameters {
      /**
       * list of product IDs
       */
      export type ProductId = number;
      /**
       * list of warehouse IDs
       */
      export type WarehouseId = number;
    }
    export interface PathParameters {
      product_id: /* list of product IDs */ Parameters.ProductId;
      warehouse_id: /* list of warehouse IDs */ Parameters.WarehouseId;
    }
  }
  namespace WmsInventoryStockControllerUpdateField {
    export interface FormDataParameters {
      op?: /* replace */ Parameters.Op;
      path?: /* /stock_state_id */ Parameters.Path;
      value?: /* Value of stock state ID */ Parameters.Value;
    }
    namespace Parameters {
      /**
       * replace
       */
      export type Op = string;
      /**
       * /stock_state_id
       */
      export type Path = string;
      /**
       * Value of stock state ID
       */
      export type Value = number;
    }
  }
  namespace WmsInventoryStockHistoryControllerHistoricalData {
    namespace Parameters {
      /**
       * Timestamp
       */
      export type InsertedAt = number;
      /**
       * Location Code of stock
       */
      export type LocationCode = string;
      /**
       * Location ID of stock
       */
      export type LocationId = number;
      /**
       * Timestamp
       */
      export type OperatedAt = number;
      /**
       * Product ID of stock
       */
      export type ProductId = number;
      /**
       * Product SKU of stock
       */
      export type ProductSku = string;
      /**
       * Origin of the transaction, available types are:
       *  `picking packing shipping movement counting kitting incoming_good stock_mod initial_stock`
       */
      export type Type = number;
      /**
       * Timestamp
       */
      export type UpdatedAt = number;
      /**
       * User which made the stock transaction
       */
      export type UserId = number;
      /**
       * Warehouse of the stock
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      product_sku?: /* Product SKU of stock */ Parameters.ProductSku;
      location_code?: /* Location Code of stock */ Parameters.LocationCode;
      product_id?: /* Product ID of stock */ Parameters.ProductId;
      location_id?: /* Location ID of stock */ Parameters.LocationId;
      inserted_at?: /* Timestamp */ Parameters.InsertedAt;
      updated_at?: /* Timestamp */ Parameters.UpdatedAt;
      operated_at?: /* Timestamp */ Parameters.OperatedAt;
      warehouse_id?: /* Warehouse of the stock */ Parameters.WarehouseId;
      user_id?: /* User which made the stock transaction */ Parameters.UserId;
      type?: /**
       * Origin of the transaction, available types are:
       *  `picking packing shipping movement counting kitting incoming_good stock_mod initial_stock`
       */
      Parameters.Type;
    }
    namespace Responses {
      export type $200 =
        /**
         * Stock Records Response List
         * StockRecord Response List
         */
        Definitions.ResponseListStockRecord;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsInventoryStockHistoryControllerHistoricalDataCsv {
    namespace Parameters {
      /**
       * Timestamp
       */
      export type InsertedAt = number;
      /**
       * Location ID of stock
       */
      export type LocationId = number;
      /**
       * Timestamp
       */
      export type OperatedAt = number;
      /**
       * Product ID of stock
       */
      export type ProductId = number;
      /**
       * Origin of the transaction, available types are:
       *  `picking packing shipping movement counting kitting incoming_good stock_mod initial_stock`
       */
      export type Type = number;
      /**
       * Timestamp
       */
      export type UpdatedAt = number;
      /**
       * User which made the stock transaction
       */
      export type UserId = number;
      /**
       * Warehouse of the stock
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      product_id?: /* Product ID of stock */ Parameters.ProductId;
      location_id?: /* Location ID of stock */ Parameters.LocationId;
      inserted_at?: /* Timestamp */ Parameters.InsertedAt;
      updated_at?: /* Timestamp */ Parameters.UpdatedAt;
      operated_at?: /* Timestamp */ Parameters.OperatedAt;
      warehouse_id?: /* Warehouse of the stock */ Parameters.WarehouseId;
      user_id?: /* User which made the stock transaction */ Parameters.UserId;
      type?: /**
       * Origin of the transaction, available types are:
       *  `picking packing shipping movement counting kitting incoming_good stock_mod initial_stock`
       */
      Parameters.Type;
    }
  }
  namespace WmsInventoryStockStateControllerIndex {
    namespace Parameters {
      /**
       * Availability of stock state
       */
      export type Available = boolean;
      /**
       * Limit value for pagination
       */
      export type Limit = string;
      /**
       * Name of stock state
       */
      export type Name = string;
      /**
       * Offset value for pagination
       */
      export type Offset = string;
      /**
       * Warehouse ID of stock state
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      name?: /* Name of stock state */ Parameters.Name;
      available?: /* Availability of stock state */ Parameters.Available;
      warehouse_id?: /* Warehouse ID of stock state */ Parameters.WarehouseId;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryStockStateControllerShow {
    namespace Parameters {
      /**
       * Stock state ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Stock state ID */ Parameters.Id;
    }
  }
  namespace WmsInventoryStockThresholdControllerIndex {
    namespace Parameters {
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Location ID
       */
      export type LocationId = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
      /**
       * Product ID
       */
      export type ProductId = number;
      /**
       * Receives a string with the search syntax allowing the model's fields plus product_name, product_sku and location_code
       */
      export type Search = string;
    }
    export interface QueryParameters {
      product_id?: /* Product ID */ Parameters.ProductId;
      location_id?: /* Location ID */ Parameters.LocationId;
      __search?: /* Receives a string with the search syntax allowing the model's fields plus product_name, product_sku and location_code */ Parameters.Search;
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsInventoryStockThresholdControllerMerge {
    export interface FormDataParameters {
      id?: /* Id of the stock threshold - for updating */ Parameters.Id;
      max?: /* Maximum quantity allowed in location */ Parameters.Max;
      min?: /* Minimum quantity allowed in location */ Parameters.Min;
      round_option?: /* Round option for replenishment quantities based on units_per_purchase_package of the product. Valid options are `exact`, `round_up` and `round_down` */ Parameters.RoundOption;
      product_id?: /* Product ID */ Parameters.ProductId;
      location_id?: /* Location ID */ Parameters.LocationId;
    }
    namespace Parameters {
      /**
       * Id of the stock threshold - for updating
       */
      export type Id = number;
      /**
       * Location ID
       */
      export type LocationId = number;
      /**
       * Maximum quantity allowed in location
       */
      export type Max = number;
      /**
       * Minimum quantity allowed in location
       */
      export type Min = number;
      /**
       * Product ID
       */
      export type ProductId = number;
      /**
       * Round option for replenishment quantities based on units_per_purchase_package of the product. Valid options are `exact`, `round_up` and `round_down`
       */
      export type RoundOption = string;
    }
  }
  namespace WmsKittingKittingTaskControllerCancel {
    namespace Parameters {
      /**
       * Kitting Task ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Kitting Task ID */ Parameters.Id;
    }
  }
  namespace WmsKittingKittingTaskControllerCreate {
    export interface FormDataParameters {
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
      owner_id?: /* Owner ID */ Parameters.OwnerId;
      destination_location_id?: /* Destination Location ID */ Parameters.DestinationLocationId;
    }
    namespace Parameters {
      /**
       * Destination Location ID
       */
      export type DestinationLocationId = number;
      /**
       * Owner ID
       */
      export type OwnerId = number;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsKittingKittingTaskControllerSearch {
    namespace Parameters {
      /**
       * Kitting task ID
       */
      export type Id = number;
      /**
       * Consecutive number of task
       */
      export type SequenceNumber = string;
      /**
       * Task state
       */
      export type State = string;
    }
    export interface QueryParameters {
      id?: /* Kitting task ID */ Parameters.Id;
      sequence_number?: /* Consecutive number of task */ Parameters.SequenceNumber;
      state?: /* Task state */ Parameters.State;
    }
  }
  namespace WmsKittingKittingTaskControllerShow {
    namespace Parameters {
      /**
       * Kitting task ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Kitting task ID */ Parameters.Id;
    }
  }
  namespace WmsKittingKittingTaskControllerUpdate {
    namespace Parameters {
      /**
       * Kit ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Kit ID */ Parameters.Id;
    }
  }
  namespace WmsMerchantChannelControllerCreate {
    export interface BodyParameters {
      channel?: Parameters.Channel;
    }
    namespace Parameters {
      export type Channel =
        /**
         * Channel
         * Channel
         */
        Definitions.Channel;
    }
    namespace Responses {
      export type $201 =
        /**
         * Channel
         * Channel
         */
        Definitions.Channel;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsMerchantChannelControllerGetChannel {
    namespace Parameters {
      /**
       * Channel ID
       */
      export type ChannelId = number;
      /**
       * Merchant ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Merchant ID */ Parameters.Id;
      channel_id: /* Channel ID */ Parameters.ChannelId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Channel
         * Channel
         */
        Definitions.Channel;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsMerchantChannelControllerSearch {
    namespace Parameters {
      /**
       * Whether a channel is active or not
       */
      export type Active = boolean;
      /**
       * City of the channel
       */
      export type City = string;
      /**
       * Country code of the channel
       */
      export type CountryCode = string;
      /**
       * Full name of the channel
       */
      export type FullName = string;
      /**
       * ID of the channels, to filter for multiple channel ids: `id:to_list:1,2,3`
       */
      export type Id = number;
      /**
       * Whether a channel is default or not
       */
      export type IsDefault = boolean;
      /**
       * Line address of the channel
       */
      export type Line1 = string;
      /**
       * Line address of the channel
       */
      export type Line2 = string;
      /**
       * Name of the channel
       */
      export type Name = string;
      /**
       * Priority of the channel
       */
      export type Priority = number;
      /**
       * Site of the channel
       */
      export type Site = string;
      /**
       * State of the channel
       */
      export type State = string;
      /**
       * Postal code of the channel
       */
      export type ZipCode = string;
    }
    export interface QueryParameters {
      id?: /* ID of the channels, to filter for multiple channel ids: `id:to_list:1,2,3` */ Parameters.Id;
      name?: /* Name of the channel */ Parameters.Name;
      full_name?: /* Full name of the channel */ Parameters.FullName;
      is_default?: /* Whether a channel is default or not */ Parameters.IsDefault;
      active?: /* Whether a channel is active or not */ Parameters.Active;
      city?: /* City of the channel */ Parameters.City;
      state?: /* State of the channel */ Parameters.State;
      country_code?: /* Country code of the channel */ Parameters.CountryCode;
      site?: /* Site of the channel */ Parameters.Site;
      line1?: /* Line address of the channel */ Parameters.Line1;
      line2?: /* Line address of the channel */ Parameters.Line2;
      zip_code?: /* Postal code of the channel */ Parameters.ZipCode;
      priority?: /* Priority of the channel */ Parameters.Priority;
    }
    namespace Responses {
      export type $200 =
        /**
         * Channels Response List
         * Channel Response List
         */
        Definitions.ResponseListChannel;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsMerchantChannelControllerUpdateChannel {
    export interface BodyParameters {
      channel?: Parameters.Channel;
    }
    namespace Parameters {
      export type Channel =
        /**
         * Channel
         * Channel
         */
        Definitions.Channel;
      /**
       * Channel ID
       */
      export type ChannelId = number;
      /**
       * Merchant ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Merchant ID */ Parameters.Id;
      channel_id: /* Channel ID */ Parameters.ChannelId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Channel
         * Channel
         */
        Definitions.Channel;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsMerchantMerchantControllerCreate {
    export interface BodyParameters {
      merchant?: Parameters.Merchant;
    }
    namespace Parameters {
      export type Merchant =
        /**
         * Merchant
         * Merchant
         */
        Definitions.Merchant;
    }
    namespace Responses {
      export type $201 =
        /**
         * Merchant
         * Merchant
         */
        Definitions.Merchant;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsMerchantMerchantControllerSearch {
    namespace Parameters {
      /**
       * Whether a merchant is active or not
       */
      export type Active = boolean;
      /**
       * City of the merchant
       */
      export type City = string;
      /**
       * Country code of the merchant
       */
      export type CountryCode = string;
      /**
       * Email of the merchant
       */
      export type Email = string;
      /**
       * Fulfillment warehouse of the merchant
       */
      export type FulfillmentWarehouseId = number;
      /**
       * Full name of the merchant
       */
      export type FullName = string;
      /**
       * ID of the merchants, to filter for multiple merchant ids: `id:to_list:1,2,3`
       */
      export type Id = number;
      /**
       * Whether a merchant is default or not
       */
      export type IsDefault = boolean;
      /**
       * Name of the merchant
       */
      export type Name = string;
      /**
       * Phone number of the merchant
       */
      export type PhoneNumber = string;
      /**
       * Priority of the merchant
       */
      export type Priority = number;
      /**
       * Site of the merchant
       */
      export type Site = string;
      /**
       * State of the merchant
       */
      export type State = string;
    }
    export interface QueryParameters {
      id?: /* ID of the merchants, to filter for multiple merchant ids: `id:to_list:1,2,3` */ Parameters.Id;
      name?: /* Name of the merchant */ Parameters.Name;
      full_name?: /* Full name of the merchant */ Parameters.FullName;
      phone_number?: /* Phone number of the merchant */ Parameters.PhoneNumber;
      email?: /* Email of the merchant */ Parameters.Email;
      is_default?: /* Whether a merchant is default or not */ Parameters.IsDefault;
      active?: /* Whether a merchant is active or not */ Parameters.Active;
      city?: /* City of the merchant */ Parameters.City;
      state?: /* State of the merchant */ Parameters.State;
      country_code?: /* Country code of the merchant */ Parameters.CountryCode;
      site?: /* Site of the merchant */ Parameters.Site;
      fulfillment_warehouse_id?: /* Fulfillment warehouse of the merchant */ Parameters.FulfillmentWarehouseId;
      priority?: /* Priority of the merchant */ Parameters.Priority;
    }
    namespace Responses {
      export type $200 =
        /**
         * Merchants Response List
         * Merchant Response List
         */
        Definitions.ResponseListMerchant;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsMerchantMerchantControllerShow {
    namespace Parameters {
      /**
       * Merchant ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Merchant ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Merchant
         * Merchant
         */
        Definitions.Merchant;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsMerchantMerchantControllerUpdate {
    export interface BodyParameters {
      merchant?: Parameters.Merchant;
    }
    namespace Parameters {
      /**
       * Merchant ID
       */
      export type Id = number;
      export type Merchant =
        /**
         * Merchant
         * Merchant
         */
        Definitions.Merchant;
    }
    export interface PathParameters {
      id: /* Merchant ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Merchant
         * Merchant
         */
        Definitions.Merchant;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsNotificationNotificationControllerDelete {
    namespace Parameters {
      /**
       * Message ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Message ID */ Parameters.Id;
    }
  }
  namespace WmsNotificationNotificationControllerIndex {
    namespace Parameters {
      /**
       * Content of Message (json)
       */
      export type Body = string;
      /**
       * Event of Message
       */
      export type Checked = boolean;
      /**
       * Event of Message
       */
      export type Event = string;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      event?: /* Event of Message */ Parameters.Event;
      checked?: /* Event of Message */ Parameters.Checked;
      body?: /* Content of Message (json) */ Parameters.Body;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
    }
  }
  namespace WmsNotificationNotificationControllerShow {
    namespace Parameters {
      /**
       * Message ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Message ID */ Parameters.Id;
    }
  }
  namespace WmsNotificationNotificationControllerUpdate {
    export interface FormDataParameters {
      event?: /* Event of Message */ Parameters.Event;
      checked?: /* Event of Message */ Parameters.Checked;
      body?: /* Content of Message */ Parameters.Body;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Content of Message
       */
      export type Body = string;
      /**
       * Event of Message
       */
      export type Checked = boolean;
      /**
       * Event of Message
       */
      export type Event = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsPackingPackingBoxControllerCreate {
    export interface FormDataParameters {
      product_id?: /* Product ID in the box */ Parameters.ProductId;
      box_number?: /* Represent the number of  */ Parameters.BoxNumber;
      quantity?: /* Quantity of products in Box */ Parameters.Quantity;
    }
    namespace Parameters {
      /**
       * Represent the number of
       */
      export type BoxNumber = number;
      /**
       * Packing order ID
       */
      export type PackingOrderId = number;
      /**
       * Product ID in the box
       */
      export type ProductId = number;
      /**
       * Quantity of products in Box
       */
      export type Quantity = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing order ID */ Parameters.PackingOrderId;
    }
    namespace Responses {
      export type $201 =
        /**
         * Packing Box
         * Packing Box
         */
        Definitions.PackingBox;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingPackingBoxControllerCreateBox {
    export interface FormDataParameters {
      product_id?: /* Product ID in the box */ Parameters.ProductId;
      box_number?: /* Represent the number of  */ Parameters.BoxNumber;
      quantity?: /* Quantity of products in Box */ Parameters.Quantity;
    }
    namespace Parameters {
      /**
       * Represent the number of
       */
      export type BoxNumber = number;
      /**
       * Packing order ID
       */
      export type PackingOrderId = number;
      /**
       * Product ID in the box
       */
      export type ProductId = number;
      /**
       * Quantity of products in Box
       */
      export type Quantity = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing order ID */ Parameters.PackingOrderId;
    }
    namespace Responses {
      export type $201 =
        /**
         * Packing Box
         * Packing Box
         */
        Definitions.PackingBox;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingPackingBoxControllerFetchAttachments {
    namespace Responses {
      export type $200 = Definitions.AttachmentResponseList;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingPackingBoxControllerIndex {
    namespace Parameters {
      /**
       * Box number
       */
      export type BoxNumber = number;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Channel ID where the packing box belongs
       */
      export type MerchantChannelId = number;
      /**
       * Merchant ID where the packing box belongs
       */
      export type MerchantId = number;
      /**
       * Box name
       */
      export type Name = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * ID of the product packed in box
       */
      export type ProductId = number;
      /**
       * Shipping location of the packing box
       */
      export type ShippingLocationCode = string;
      /**
       * Shipment tracking code
       */
      export type TrackingCode = string;
      /**
       * Warehouse ID where the packing box belongs
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      box_number?: /* Box number */ Parameters.BoxNumber;
      name?: /* Box name */ Parameters.Name;
      product_id?: /* ID of the product packed in box */ Parameters.ProductId;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      tracking_code?: /* Shipment tracking code */ Parameters.TrackingCode;
      shipping_location_code?: /* Shipping location of the packing box */ Parameters.ShippingLocationCode;
      warehouse_id?: /* Warehouse ID where the packing box belongs */ Parameters.WarehouseId;
      merchant_id?: /* Merchant ID where the packing box belongs */ Parameters.MerchantId;
      merchant_channel_id?: /* Channel ID where the packing box belongs */ Parameters.MerchantChannelId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Boxes Response List
         * PackingBox Response List
         */
        Definitions.ResponseListPackingBox;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingPackingBoxControllerRegisterAttachment {
    export interface FormDataParameters {
      id?: /* The file S3 ID */ Parameters.Id;
      filename?: /* User file name */ Parameters.Filename;
      file_type?: /* File type */ Parameters.FileType;
      type?: /* What the type of the attachment eg - label */ Parameters.Type;
      extension?: /* file extention ie, pdf */ Parameters.Extension;
    }
    namespace Parameters {
      /**
       * Packing box ID
       */
      export type BoxId = number;
      /**
       * file extention ie, pdf
       */
      export type Extension = string;
      /**
       * File type
       */
      export type FileType = string;
      /**
       * User file name
       */
      export type Filename = string;
      /**
       * The file S3 ID
       */
      export type Id = string;
      /**
       * Packing order ID
       */
      export type PackingOrderId = number;
      /**
       * What the type of the attachment eg - label
       */
      export type Type = string;
    }
    export interface PathParameters {
      packing_order_id: /* Packing order ID */ Parameters.PackingOrderId;
      box_id: /* Packing box ID */ Parameters.BoxId;
    }
    namespace Responses {
      export type $201 =
        /**
         * Packing Box
         * Packing Box
         */
        Definitions.PackingBox;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingPackingBoxControllerRegisterAttachmentInBulk {
    export interface BodyParameters {
      bulk_attachment_metadata_request?: Parameters.BulkAttachmentMetadataRequest;
    }
    namespace Parameters {
      export type BulkAttachmentMetadataRequest =
        /**
         * Bulk Attachment Metadata Request
         * Body for attaching attachment metadata to a list of packing boxes
         */
        Definitions.BulkAttachmentMetadataRequest;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Boxes Response List
         * PackingBox Response List
         */
        Definitions.ResponseListPackingBox;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingPackingBoxControllerSearch {
    namespace Parameters {
      /**
       * Box number
       */
      export type BoxNumber = number;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Box name
       */
      export type Name = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * Packing order ID
       */
      export type PackingOrderId = number;
      /**
       * ID of the product packed in box
       */
      export type ProductId = number;
      /**
       * Shipment tracking code
       */
      export type TrackingCode = string;
    }
    export interface PathParameters {
      packing_order_id: /* Packing order ID */ Parameters.PackingOrderId;
    }
    export interface QueryParameters {
      box_number?: /* Box number */ Parameters.BoxNumber;
      name?: /* Box name */ Parameters.Name;
      product_id?: /* ID of the product packed in box */ Parameters.ProductId;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      tracking_code?: /* Shipment tracking code */ Parameters.TrackingCode;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Boxes Response List
         * PackingBox Response List
         */
        Definitions.ResponseListPackingBox;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingPackingBoxControllerShow {
    namespace Parameters {
      /**
       * Packing box ID
       */
      export type BoxId = number;
      /**
       * Packing order ID
       */
      export type PackingOrderId = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing order ID */ Parameters.PackingOrderId;
      box_id: /* Packing box ID */ Parameters.BoxId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Order
         * Packing Order
         */
        Definitions.PackingOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingPackingBoxControllerUpdate {
    export interface FormDataParameters {
      attributes?: /* Attributes for the packing box */ Parameters.Attributes;
    }
    namespace Parameters {
      /**
       * Attributes for the packing box
       */
      export type Attributes = string;
      /**
       * Packing box ID
       */
      export type BoxId = number;
      /**
       * Packing order ID
       */
      export type PackingOrderId = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing order ID */ Parameters.PackingOrderId;
      box_id: /* Packing box ID */ Parameters.BoxId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Box
         * Packing Box
         */
        Definitions.PackingBox;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingPackingBoxControllerUploadAttachment {
    export interface BodyParameters {
      attachment_request?: Parameters.AttachmentRequest;
    }
    namespace Parameters {
      export type AttachmentRequest =
        /**
         * Attachment Request
         * Body for requesting attachment
         */
        Definitions.AttachmentRequest;
      /**
       * Packing box ID
       */
      export type BoxId = number;
      /**
       * Packing order ID
       */
      export type PackingOrderId = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing order ID */ Parameters.PackingOrderId;
      box_id: /* Packing box ID */ Parameters.BoxId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Boxes Response List
         * PackingBox Response List
         */
        Definitions.ResponseListPackingBox;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingPackingOrderControllerAccept {
    namespace Parameters {
      /**
       * Packing order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
    }
  }
  namespace WmsPackingPackingOrderControllerAssign {
    export interface FormDataParameters {
      owner_id?: /* Onwer ID */ Parameters.OwnerId;
    }
    namespace Parameters {
      /**
       * Packing order ID
       */
      export type Id = number;
      /**
       * Onwer ID
       */
      export type OwnerId = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
    }
  }
  namespace WmsPackingPackingOrderControllerBulkActions {
    export interface BodyParameters {
      bulk_packing_actions_request?: Parameters.BulkPackingActionsRequest;
    }
    namespace Parameters {
      export type BulkPackingActionsRequest =
        /**
         * Bulk Packing Actions Request
         * Body for requesting bulk creation of picking orders
         */
        Definitions.BulkPackingActionsRequest;
    }
    namespace Responses {
      export type $201 =
        /**
         * Updated packings list
         * Updated packings list
         */
        Definitions.BulkPackingResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Updated packings list
         * Updated packings list
         */
        Definitions.BulkErrorsPackingResponse;
    }
  }
  namespace WmsPackingPackingOrderControllerClose {
    namespace Parameters {
      /**
       * Packing order ID
       */
      export type Id = number;
      /**
       * Packing order ID
       */
      export type ShippingLocationId = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
      shipping_location_id: /* Packing order ID */ Parameters.ShippingLocationId;
    }
  }
  namespace WmsPackingPackingOrderControllerFinish {
    namespace Parameters {
      /**
       * Packing order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
    }
  }
  namespace WmsPackingPackingOrderControllerLock {
    namespace Parameters {
      /**
       * Packing order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
    }
  }
  namespace WmsPackingPackingOrderControllerMissing {
    export interface FormDataParameters {
      packing_item_id?: /* Packing Item ID */ Parameters.PackingItemId;
      batch_id?: /* Product ID */ Parameters.BatchId;
      missing_quantity?: /* Missing quantity */ Parameters.MissingQuantity;
    }
    namespace Parameters {
      /**
       * Product ID
       */
      export type BatchId = number;
      /**
       * Packing order ID
       */
      export type Id = number;
      /**
       * Missing quantity
       */
      export type MissingQuantity = number;
      /**
       * Packing Item ID
       */
      export type PackingItemId = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
    }
  }
  namespace WmsPackingPackingOrderControllerPackingLocations {
    namespace Parameters {
      /**
       * Fulfillment Order ID
       */
      export type FulfillmentOrderId = number;
    }
    export interface QueryParameters {
      fulfillment_order_id?: /* Fulfillment Order ID */ Parameters.FulfillmentOrderId;
    }
  }
  namespace WmsPackingPackingOrderControllerPostSearch {
    namespace Parameters {
      /**
       * Shipping location id associated to the packing
       */
      export type DestinationLocationId = number;
      /**
       * End date in format YYYY-MM-DD hh:mm:ss between:date1,date2
       */
      export type EndDate = string;
      /**
       * Creation date in format YYYY-MM-DD between:date1,date2
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Channel's ID of the sales order associated to the packing
       */
      export type MerchantChannelId = number;
      /**
       * Merchant's ID of the sales order associated to the packing
       */
      export type MerchantId = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * Packing location ID
       */
      export type OriginLocationId = number;
      /**
       * Owner's ID of the packing order
       */
      export type OwnerId = number;
      /**
       * Sales order ID associated to the packing
       */
      export type SalesOrderId = number;
      /**
       * Start date in format YYYY-MM-DD hh:mm:ss
       */
      export type StartDate = string;
      /**
       * State of packing order, the states available are `queue`, `taken`, `ended`, `closed`, `locked`, `cancelled`, `draft`
       */
      export type State = string;
      /**
       * Date of last update YYYY-MM-DD hh:mm:ss
       */
      export type UpdatedAt = string;
      /**
       * List of attributes separated by `,` to show in the response. An empty string shows all attributes. e.g.: *id,sequence_number,state*
       */
      export type ViewAttributes = string;
      /**
       * Unique ID of the warehouse
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      sales_order_id?: /* Sales order ID associated to the packing */ Parameters.SalesOrderId;
      warehouse_id?: /* Unique ID of the warehouse */ Parameters.WarehouseId;
      state?: /* State of packing order, the states available are `queue`, `taken`, `ended`, `closed`, `locked`, `cancelled`, `draft` */ Parameters.State;
      owner_id?: /* Owner's ID of the packing order */ Parameters.OwnerId;
      merchant_id?: /* Merchant's ID of the sales order associated to the packing */ Parameters.MerchantId;
      merchant_channel_id?: /* Channel's ID of the sales order associated to the packing */ Parameters.MerchantChannelId;
      view_attributes?: /* List of attributes separated by `,` to show in the response. An empty string shows all attributes. e.g.: *id,sequence_number,state* */ Parameters.ViewAttributes;
      origin_location_id?: /* Packing location ID */ Parameters.OriginLocationId;
      destination_location_id?: /* Shipping location id associated to the packing */ Parameters.DestinationLocationId;
      start_date?: /* Start date in format YYYY-MM-DD hh:mm:ss */ Parameters.StartDate;
      end_date?: /* End date in format YYYY-MM-DD hh:mm:ss between:date1,date2 */ Parameters.EndDate;
      inserted_at?: /* Creation date in format YYYY-MM-DD between:date1,date2 */ Parameters.InsertedAt;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      updated_at?: /* Date of last update YYYY-MM-DD hh:mm:ss */ Parameters.UpdatedAt;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Orders Response List
         * PackingOrder Response List
         */
        Definitions.ResponseListPackingOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingPackingOrderControllerSearch {
    namespace Parameters {
      /**
       * Shipping location id associated to the packing
       */
      export type DestinationLocationId = number;
      /**
       * End date in format YYYY-MM-DD hh:mm:ss
       */
      export type EndDate = string;
      /**
       * Creation date in format YYYY-MM-DD
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Channel's ID of the sales order associated to the packing
       */
      export type MerchantChannelId = number;
      /**
       * Merchant's ID of the sales order associated to the packing
       */
      export type MerchantId = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * Packing location code associated to the packing
       */
      export type OriginLocationCode = string;
      /**
       * Packing location ID
       */
      export type OriginLocationId = number;
      /**
       * Owner's ID of the packing order
       */
      export type OwnerId = number;
      /**
       * Sales order ID associated to the packing
       */
      export type SalesOrderId = number;
      /**
       * Start date in format YYYY-MM-DD hh:mm:ss
       */
      export type StartDate = string;
      /**
       * State of packing order, the states available are `queue`, `taken`, `ended`, `closed`, `locked`, `cancelled`, `draft`
       */
      export type State = string;
      /**
       * Date of last update YYYY-MM-DD hh:mm:ss
       */
      export type UpdatedAt = string;
      /**
       * List of attributes separated by `,` to show in the response. An empty string shows all attributes. e.g.: *id,sequence_number,state*
       */
      export type ViewAttributes = string;
      /**
       * Unique ID of the warehouse
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      sales_order_id?: /* Sales order ID associated to the packing */ Parameters.SalesOrderId;
      warehouse_id?: /* Unique ID of the warehouse */ Parameters.WarehouseId;
      state?: /* State of packing order, the states available are `queue`, `taken`, `ended`, `closed`, `locked`, `cancelled`, `draft` */ Parameters.State;
      owner_id?: /* Owner's ID of the packing order */ Parameters.OwnerId;
      merchant_id?: /* Merchant's ID of the sales order associated to the packing */ Parameters.MerchantId;
      merchant_channel_id?: /* Channel's ID of the sales order associated to the packing */ Parameters.MerchantChannelId;
      view_attributes?: /* List of attributes separated by `,` to show in the response. An empty string shows all attributes. e.g.: *id,sequence_number,state* */ Parameters.ViewAttributes;
      origin_location_id?: /* Packing location ID */ Parameters.OriginLocationId;
      destination_location_id?: /* Shipping location id associated to the packing */ Parameters.DestinationLocationId;
      origin_location_code?: /* Packing location code associated to the packing */ Parameters.OriginLocationCode;
      start_date?: /* Start date in format YYYY-MM-DD hh:mm:ss */ Parameters.StartDate;
      end_date?: /* End date in format YYYY-MM-DD hh:mm:ss */ Parameters.EndDate;
      inserted_at?: /* Creation date in format YYYY-MM-DD */ Parameters.InsertedAt;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      updated_at?: /* Date of last update YYYY-MM-DD hh:mm:ss */ Parameters.UpdatedAt;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Orders Response List
         * PackingOrder Response List
         */
        Definitions.ResponseListPackingOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingPackingOrderControllerShippingLocations {
    namespace Parameters {
      /**
       * Packing Order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Packing Order ID */ Parameters.Id;
    }
  }
  namespace WmsPackingPackingOrderControllerShow {
    namespace Parameters {
      /**
       * Packing order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Packing Order
         * Packing Order
         */
        Definitions.PackingOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingPackingOrderControllerUnlock {
    namespace Parameters {
      /**
       * Packing order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Packing order ID */ Parameters.Id;
    }
  }
  namespace WmsPackingShipmentBoxTemplateControllerCreate {
    export interface FormDataParameters {
      name?: /* Box Name */ Parameters.Name;
      weight?: /* Weight of an empty shipment box */ Parameters.Weight /* float */;
      height?: /* Height of shipment box */ Parameters.Height /* float */;
      width?: /* Width of shipment box */ Parameters.Width /* float */;
      length?: /* Lenght of shipment box */ Parameters.Length /* float */;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Height of shipment box
       */
      export type Height = number; // float
      /**
       * Lenght of shipment box
       */
      export type Length = number; // float
      /**
       * Box Name
       */
      export type Name = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
      /**
       * Weight of an empty shipment box
       */
      export type Weight = number; // float
      /**
       * Width of shipment box
       */
      export type Width = number; // float
    }
  }
  namespace WmsPackingShipmentBoxTemplateControllerDelete {
    namespace Parameters {
      /**
       * Shipment box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Shipment box ID */ Parameters.Id;
    }
  }
  namespace WmsPackingShipmentBoxTemplateControllerSearch {
    namespace Parameters {
      /**
       * Height of shipment box
       */
      export type Height = number; // float
      /**
       * Lenght of shipment box
       */
      export type Length = number; // float
      /**
       * Box Name
       */
      export type Name = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
      /**
       * Weight of an empty shipment box
       */
      export type Weight = number; // float
      /**
       * Width of shipment box
       */
      export type Width = number; // float
    }
    export interface QueryParameters {
      name?: /* Box Name */ Parameters.Name;
      weight?: /* Weight of an empty shipment box */ Parameters.Weight /* float */;
      height?: /* Height of shipment box */ Parameters.Height /* float */;
      width?: /* Width of shipment box */ Parameters.Width /* float */;
      length?: /* Lenght of shipment box */ Parameters.Length /* float */;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
  }
  namespace WmsPackingShipmentBoxTemplateControllerShow {
    namespace Parameters {
      /**
       * Shipment box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Shipment box ID */ Parameters.Id;
    }
  }
  namespace WmsPackingShipmentBoxTemplateControllerUpdate {
    namespace Parameters {
      /**
       * Shipment Box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Shipment Box ID */ Parameters.Id;
    }
  }
  namespace WmsPackingShipmentTrackingControllerBulkActions {
    export interface BodyParameters {
      shipment_tracking_request_list?: Parameters.ShipmentTrackingRequestList;
    }
    namespace Parameters {
      export type ShipmentTrackingRequestList =
        /**
         * Shipment Tracking
         * Shipment Tracking
         */
        Definitions.ShipmentTracking[];
    }
    namespace Responses {
      export type $200 =
        /**
         * Shipment Trackings Response List
         * ShipmentTracking Response List
         */
        Definitions.ResponseListShipmentTracking;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingShipmentTrackingControllerCreate {
    export interface BodyParameters {
      shipment_tracking?: Parameters.ShipmentTracking;
    }
    namespace Parameters {
      /**
       * Packing Box ID
       */
      export type BoxId = number;
      /**
       * Packing Order ID
       */
      export type PackingOrderId = number;
      export type ShipmentTracking =
        /**
         * Shipment Tracking
         * Shipment Tracking
         */
        Definitions.ShipmentTracking;
    }
    export interface PathParameters {
      packing_order_id: /* Packing Order ID */ Parameters.PackingOrderId;
      box_id: /* Packing Box ID */ Parameters.BoxId;
    }
    namespace Responses {
      export type $201 =
        /**
         * Shipment Tracking
         * Shipment Tracking
         */
        Definitions.ShipmentTracking;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingShipmentTrackingControllerDelete {
    namespace Parameters {
      /**
       * Packing Box ID
       */
      export type BoxId = number;
      /**
       * Packing Order ID
       */
      export type PackingOrderId = number;
      /**
       * Shipment tracking ID
       */
      export type TrackingId = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing Order ID */ Parameters.PackingOrderId;
      box_id: /* Packing Box ID */ Parameters.BoxId;
      tracking_id: /* Shipment tracking ID */ Parameters.TrackingId;
    }
  }
  namespace WmsPackingShipmentTrackingControllerSearch {
    namespace Parameters {
      /**
       * Packing Box ID
       */
      export type BoxId = number;
      /**
       * Packing Order ID
       */
      export type PackingOrderId = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing Order ID */ Parameters.PackingOrderId;
      box_id: /* Packing Box ID */ Parameters.BoxId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Shipment Trackings Response List
         * ShipmentTracking Response List
         */
        Definitions.ResponseListShipmentTracking;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPackingShipmentTrackingControllerShow {
    namespace Parameters {
      /**
       * Packing Box ID
       */
      export type BoxId = number;
      /**
       * Packing Order ID
       */
      export type PackingOrderId = number;
      /**
       * Shipment tracking ID
       */
      export type TrackingId = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing Order ID */ Parameters.PackingOrderId;
      box_id: /* Packing Box ID */ Parameters.BoxId;
      tracking_id: /* Shipment tracking ID */ Parameters.TrackingId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Shipment Tracking
         * Shipment Tracking
         */
        Definitions.ShipmentTracking;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPackingShipmentTrackingControllerUpdate {
    export interface BodyParameters {
      shipment_tracking?: Parameters.ShipmentTracking;
    }
    namespace Parameters {
      /**
       * Packing Box ID
       */
      export type BoxId = number;
      /**
       * Packing Order ID
       */
      export type PackingOrderId = number;
      export type ShipmentTracking =
        /**
         * Shipment Tracking
         * Shipment Tracking
         */
        Definitions.ShipmentTracking;
      /**
       * Shipment tracking ID
       */
      export type TrackingId = number;
    }
    export interface PathParameters {
      packing_order_id: /* Packing Order ID */ Parameters.PackingOrderId;
      box_id: /* Packing Box ID */ Parameters.BoxId;
      tracking_id: /* Shipment tracking ID */ Parameters.TrackingId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Shipment Tracking
         * Shipment Tracking
         */
        Definitions.ShipmentTracking;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsPickingBulkBulkPickingOrderControllerBulkCreate {
    export interface BodyParameters {
      bulk_picking_request?: Parameters.BulkPickingRequest;
    }
    namespace Parameters {
      export type BulkPickingRequest =
        /**
         * Bulk Picking Request
         * Body for requesting bulk creation of picking orders
         */
        Definitions.BulkPickingRequest;
    }
    namespace Responses {
      export type $201 =
        /**
         * Created pickings list
         * Created pickings list
         */
        Definitions.BulkPickingResponse;
      export type $400 =
        /**
         * Created pickings list
         * Created pickings list
         */
        Definitions.BulkErrorsPickingResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPickingBulkBulkPickingOrderControllerBulkTurboCreate {
    export interface BodyParameters {
      bulk_picking_request?: Parameters.BulkPickingRequest;
    }
    namespace Parameters {
      export type BulkPickingRequest =
        /**
         * Bulk Picking Request
         * Body for requesting bulk creation of picking orders
         */
        Definitions.BulkPickingRequest;
    }
    namespace Responses {
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPickingCartBoxControllerAssignCartbox {
    export interface FormDataParameters {
      sales_order_id?: /* Sales Order ID */ Parameters.SalesOrderId;
      barcode?: /* optional Barcode of cart box */ Parameters.Barcode;
      fulfillment_order_id?: /* optional Fulfillment Order ID */ Parameters.FulfillmentOrderId;
    }
    namespace Parameters {
      /**
       * optional Barcode of cart box
       */
      export type Barcode = string;
      /**
       * optional Fulfillment Order ID
       */
      export type FulfillmentOrderId = number;
      /**
       * Sales Order ID
       */
      export type SalesOrderId = number;
    }
  }
  namespace WmsPickingCartBoxControllerCreate {
    export interface FormDataParameters {
      barcode?: /* Barcode printed in box */ Parameters.Barcode;
      sales_order_id?: /* Sales order ID */ Parameters.SalesOrderId;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Barcode printed in box
       */
      export type Barcode = string;
      /**
       * Sales order ID
       */
      export type SalesOrderId = number;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsPickingCartBoxControllerSearch {
    namespace Parameters {
      /**
       * Barcode printed in box
       */
      export type Barcode = string;
      /**
       * Fulfillment order ID
       */
      export type FulfillmentOrderId = number;
      /**
       * If the cart box is occupied in sales order or not
       */
      export type Occupied = boolean;
      /**
       * Sales order ID
       */
      export type SalesOrderId = number;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      barcode?: /* Barcode printed in box */ Parameters.Barcode;
      sales_order_id?: /* Sales order ID */ Parameters.SalesOrderId;
      fulfillment_order_id?: /* Fulfillment order ID */ Parameters.FulfillmentOrderId;
      occupied?: /* If the cart box is occupied in sales order or not */ Parameters.Occupied;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
  }
  namespace WmsPickingCartBoxControllerShow {
    namespace Parameters {
      /**
       * Cartbox box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Cartbox box ID */ Parameters.Id;
    }
  }
  namespace WmsPickingCartBoxControllerUpdate {
    namespace Parameters {
      /**
       * Cartbox Box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Cartbox Box ID */ Parameters.Id;
    }
  }
  namespace WmsPickingPickingOrderControllerCreate {
    export interface FormDataParameters {
      sales_orders?: /* List of sales order ids that will be passed to picking */ Parameters.SalesOrders;
      picking_orders?: /* List of picking orders that will be created */ Parameters.PickingOrders;
      orders_count?: /**
       * Amount of picking orders that will be created, it will split the given sales orders in
       *  picking orders with the same amount of items
       */
      Parameters.OrdersCount;
      turbo_label?: /**
       * If this is sent as true it will create a draft packing order and 1 packing box for each
       *  product unit, then it will attach a shipment label to each box
       */
      Parameters.TurboLabel;
      cart?: /* If this is sent as true it will mark all sales orders with is_cart=true */ Parameters.Cart;
    }
    namespace Parameters {
      /**
       * If this is sent as true it will mark all sales orders with is_cart=true
       */
      export type Cart = boolean;
      /**
       * Amount of picking orders that will be created, it will split the given sales orders in
       *  picking orders with the same amount of items
       */
      export type OrdersCount = number;
      /**
       * List of picking orders that will be created
       */
      export type PickingOrders = string;
      /**
       * List of sales order ids that will be passed to picking
       */
      export type SalesOrders = string;
      /**
       * If this is sent as true it will create a draft packing order and 1 packing box for each
       *  product unit, then it will attach a shipment label to each box
       */
      export type TurboLabel = boolean;
    }
  }
  namespace WmsPickingPickingOrderControllerFinish {
    export interface BodyParameters {
      finish_picking_request_list?: Parameters.FinishPickingRequestList;
    }
    namespace Parameters {
      export type FinishPickingRequestList =
        /**
         * Finish Picking Request
         * Finish Picking Request
         */
        Definitions.FinishPickingRequest[];
      /**
       * Packing location where picking order will be moved
       */
      export type PackingLocationId = string;
      /**
       * Shipping location where picking order will be moved when using turbo packing
       */
      export type ShippingLocationId = string;
    }
    export interface QueryParameters {
      packing_location_id?: /* Packing location where picking order will be moved */ Parameters.PackingLocationId;
      shipping_location_id?: /* Shipping location where picking order will be moved when using turbo packing */ Parameters.ShippingLocationId;
    }
  }
  namespace WmsPickingPickingOrderControllerFinishPartial {
    export interface BodyParameters {
      finish_picking_request_list?: Parameters.FinishPickingRequestList;
    }
    namespace Parameters {
      export type FinishPickingRequestList =
        /**
         * Finish Picking Request
         * Finish Picking Request
         */
        Definitions.FinishPickingRequest[];
      /**
       * Packing location where picking order will be moved
       */
      export type PackingLocationId = string;
    }
    export interface QueryParameters {
      packing_location_id?: /* Packing location where picking order will be moved */ Parameters.PackingLocationId;
    }
  }
  namespace WmsPickingPickingOrderControllerSearch {
    namespace Parameters {
      /**
       * Packing location id associated to the packing
       */
      export type DestinationLocationId = number;
      /**
       * End date of picking tasks in format YYYY-MM-DD hh:mm:ss
       */
      export type EndDate = string;
      /**
       * ID of the picking orders, to filter for multiple picking orders: `id:to_list:1,2,3`
       */
      export type Id = string;
      /**
       * Inserted at of picking tasks in format YYYY-MM-DD hh:mm:ss
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Categories matching products inside the picking orders
       */
      export type MatchCategories = string;
      /**
       * Unique ID of the merchant channel
       */
      export type MerchantChannelId = number;
      /**
       * Unique ID of the merchant
       */
      export type MerchantId = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * Owner's ID of the picking order
       */
      export type OwnerId = number;
      /**
       * Sales order id which the picking belongs
       */
      export type SalesOrderId = number;
      /**
       * Start date of picking tasks in format YYYY-MM-DD hh:mm:ss
       */
      export type StartDate = string;
      /**
       * State of picking order, the states available are `queue`, `taken`, `ended`, `locked`, `cancelled`, `mixed`
       */
      export type State = string;
      /**
       * Date of last update YYYY-MM-DD hh:mm:ss
       */
      export type UpdatedAt = string;
      /**
       * Unique ID of the warehouse
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      id?: /* ID of the picking orders, to filter for multiple picking orders: `id:to_list:1,2,3` */ Parameters.Id;
      state?: /* State of picking order, the states available are `queue`, `taken`, `ended`, `locked`, `cancelled`, `mixed` */ Parameters.State;
      start_date?: /* Start date of picking tasks in format YYYY-MM-DD hh:mm:ss */ Parameters.StartDate;
      end_date?: /* End date of picking tasks in format YYYY-MM-DD hh:mm:ss */ Parameters.EndDate;
      inserted_at?: /* Inserted at of picking tasks in format YYYY-MM-DD hh:mm:ss */ Parameters.InsertedAt;
      owner_id?: /* Owner's ID of the picking order */ Parameters.OwnerId;
      sales_order_id?: /* Sales order id which the picking belongs */ Parameters.SalesOrderId;
      warehouse_id?: /* Unique ID of the warehouse */ Parameters.WarehouseId;
      merchant_id?: /* Unique ID of the merchant */ Parameters.MerchantId;
      merchant_channel_id?: /* Unique ID of the merchant channel */ Parameters.MerchantChannelId;
      destination_location_id?: /* Packing location id associated to the packing */ Parameters.DestinationLocationId;
      match_categories?: /* Categories matching products inside the picking orders  */ Parameters.MatchCategories;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      updated_at?: /* Date of last update YYYY-MM-DD hh:mm:ss */ Parameters.UpdatedAt;
    }
    namespace Responses {
      export type $200 =
        /**
         * Picking Orders Response List
         * PickingOrder Response List
         */
        Definitions.ResponseListPickingOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsPickingPickingOrderControllerTurboCreate {
    export interface FormDataParameters {
      sales_orders?: /* List of sales order ids that will be passed to picking */ Parameters.SalesOrders;
      picking_orders?: /* List of picking orders that will be created */ Parameters.PickingOrders;
      orders_count?: /**
       * Amount of picking orders that will be created, it will split the given sales orders in
       *  picking orders with the same amount of items
       */
      Parameters.OrdersCount;
    }
    namespace Parameters {
      /**
       * Amount of picking orders that will be created, it will split the given sales orders in
       *  picking orders with the same amount of items
       */
      export type OrdersCount = number;
      /**
       * List of picking orders that will be created
       */
      export type PickingOrders = string;
      /**
       * List of sales order ids that will be passed to picking
       */
      export type SalesOrders = string;
    }
  }
  namespace WmsPickingPickingOrderControllerUnlock {
    namespace Parameters {
      /**
       * Picking order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Picking order ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Picking Order
         * Picking Order
         */
        Definitions.PickingOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsReasonReasonCodeControllerCreate {
    export interface BodyParameters {
      reason_code?: Parameters.ReasonCode;
    }
    namespace Parameters {
      export type ReasonCode = Definitions.ReasonCode;
    }
    namespace Responses {
      export type $201 = Definitions.ReasonCode;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsReasonReasonCodeControllerSearch {
    namespace Parameters {
      /**
       * State of the reason
       */
      export type Active = boolean;
      /**
       * The reason code
       */
      export type Code = string;
      /**
       * The name of the reason
       */
      export type Name = string;
      /**
       * The process name
       */
      export type ProcessName = string;
    }
    export interface QueryParameters {
      code?: /* The reason code */ Parameters.Code;
      name?: /* The name of the reason */ Parameters.Name;
      active?: /* State of the reason */ Parameters.Active;
      process_name?: /* The process name */ Parameters.ProcessName;
    }
    namespace Responses {
      export type $200 =
        /**
         * Reason Codes Response List
         * ReasonCode Response List
         */
        Definitions.ResponseListReasonCode;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsReasonReasonCodeControllerUpdate {
    export interface BodyParameters {
      reason_code?: Parameters.ReasonCode;
    }
    namespace Parameters {
      /**
       * Reason Code ID
       */
      export type Id = number;
      export type ReasonCode = Definitions.ReasonCode;
    }
    export interface PathParameters {
      id: /* Reason Code ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = Definitions.ReasonCode;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsReceptionBulkBulkPurchaseOrderControllerBulkCreate {
    export interface BodyParameters {
      purchase_order_request_list?: Parameters.PurchaseOrderRequestList;
    }
    namespace Parameters {
      export type PurchaseOrderRequestList = Definitions.PurchaseOrder[];
    }
    namespace Responses {
      export type $201 =
        /**
         * Created Purchase Orders list
         * Created Purchase Orders list
         */
        Definitions.BulkPurchaseOrderResponse;
      export type $400 =
        /**
         * Created Purchase Orders and errors list
         * Created Purchase Orders and errors list
         */
        Definitions.BulkErrorsPurchaseOrderResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsReceptionBulkBulkPurchaseOrderControllerBulkUpdate {
    export interface BodyParameters {
      purchase_order_request_list?: Parameters.PurchaseOrderRequestList;
    }
    namespace Parameters {
      export type PurchaseOrderRequestList = Definitions.PurchaseOrder[];
    }
    namespace Responses {
      export type $201 =
        /**
         * Updated Purchase Orders list
         * Updated Purchase Orders list
         */
        Definitions.BulkUpdatePurchaseOrderResponse;
      export type $400 =
        /**
         * Updated Purchase Orders and errors list
         * Updated Purchase Orders and errors list
         */
        Definitions.BulkUpdateErrorsPurchaseOrderResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsReceptionIncomingGoodControllerCreate {
    export interface FormDataParameters {
      purchase_order_id?: /* Purchase order ID */ Parameters.PurchaseOrderId;
      sales_order_id?: /* Associated sales order ID */ Parameters.SalesOrderId;
      document_type?: /* Document type, the available types are `none`, `purchase_order` or `return` */ Parameters.DocumentType;
      start_date?: /* Date in format YYYY-MM-DD */ Parameters.StartDate;
      end_date?: /* Date in format YYYY-MM-DD */ Parameters.EndDate;
      owner_id?: /* User ID that Incoming belongs */ Parameters.OwnerId;
      third_party_id?: /* The third party ID to which incoming good belongs */ Parameters.ThirdPartyId;
      warehouse_id?: /* The warehouse id to which incoming good belongs */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Document type, the available types are `none`, `purchase_order` or `return`
       */
      export type DocumentType = string;
      /**
       * Date in format YYYY-MM-DD
       */
      export type EndDate = string;
      /**
       * User ID that Incoming belongs
       */
      export type OwnerId = number;
      /**
       * Purchase order ID
       */
      export type PurchaseOrderId = number;
      /**
       * Associated sales order ID
       */
      export type SalesOrderId = number;
      /**
       * Date in format YYYY-MM-DD
       */
      export type StartDate = string;
      /**
       * The third party ID to which incoming good belongs
       */
      export type ThirdPartyId = number;
      /**
       * The warehouse id to which incoming good belongs
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsReceptionIncomingGoodControllerSearch {
    namespace Parameters {
      /**
       * Document type, the available types are `none`, `purchase_order` or `return`
       */
      export type DocumentType = string;
      /**
       * Date in format YYYY-MM-DD
       */
      export type EndDate = string;
      /**
       * Date in format YYYY-MM-DD
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * One of the user`s merchants id
       */
      export type MerchantId = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * User ID that Incoming belongs
       */
      export type OwnerId = number;
      /**
       * Purchase order ID
       */
      export type PurchaseOrderId = number;
      /**
       * Sequence number of incoming good
       */
      export type SequenceNumber = string;
      /**
       * Date in format YYYY-MM-DD
       */
      export type StartDate = string;
    }
    export interface QueryParameters {
      purchase_order_id?: /* Purchase order ID */ Parameters.PurchaseOrderId;
      start_date?: /* Date in format YYYY-MM-DD */ Parameters.StartDate;
      end_date?: /* Date in format YYYY-MM-DD */ Parameters.EndDate;
      owner_id?: /* User ID that Incoming belongs */ Parameters.OwnerId;
      document_type?: /* Document type, the available types are `none`, `purchase_order` or `return` */ Parameters.DocumentType;
      inserted_at?: /* Date in format YYYY-MM-DD */ Parameters.InsertedAt;
      sequence_number?: /* Sequence number of incoming good */ Parameters.SequenceNumber;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      merchant_id?: /* One of the user`s merchants id */ Parameters.MerchantId;
    }
  }
  namespace WmsReceptionIncomingGoodControllerShow {
    namespace Parameters {
      /**
       * Incoming good ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Incoming good ID */ Parameters.Id;
    }
  }
  namespace WmsReceptionIncomingGoodControllerTurboReception {
    namespace Parameters {
      /**
       * Destination location ID
       */
      export type DestinationLocationId = number;
      /**
       * Purchase order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Purchase order ID */ Parameters.Id;
    }
    export interface QueryParameters {
      destination_location_id?: /* Destination location ID */ Parameters.DestinationLocationId;
    }
  }
  namespace WmsReceptionIncomingGoodControllerUploadItemAttachment {
    export interface FormDataParameters {
      attachment?: /* Path to document file */ Parameters.Attachment;
      filename?: /* Name of the attachment */ Parameters.Filename;
      type?: /* Type of the attachment */ Parameters.Type;
    }
    namespace Parameters {
      /**
       * Path to document file
       */
      export type Attachment = string;
      /**
       * Name of the attachment
       */
      export type Filename = string;
      /**
       * Incoming Good ID
       */
      export type ID = number;
      /**
       * Incoming Good Item ID
       */
      export type ItemId = number;
      /**
       * Type of the attachment
       */
      export type Type = string;
    }
    export interface PathParameters {
      ID: /* Incoming Good ID */ Parameters.ID;
      item_id: /* Incoming Good Item ID */ Parameters.ItemId;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerCreate {
    export interface BodyParameters {
      purchase_order?: Parameters.PurchaseOrder;
    }
    namespace Parameters {
      export type PurchaseOrder = Definitions.PurchaseOrder;
    }
    namespace Responses {
      export type $201 = Definitions.PurchaseOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerDelete {
    namespace Parameters {
      /**
       * Purchase order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Purchase order ID */ Parameters.Id;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerDeleteAttachment {
    namespace Parameters {
      /**
       * purchase order id
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* purchase order id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = Definitions.PurchaseOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerSearch {
    namespace Parameters {
      /**
       * Delivery date in format YYYY-MM-DD hh:mm:ss
       */
      export type DeliveryDate = string;
      /**
       * Purchase order id
       */
      export type Id = number;
      /**
       * Date of creation in format YYYY-MM-DD hh:mm:ss
       */
      export type InsertedAt = string;
      /**
       * Unique identifier for Sales Order
       */
      export type OrderNum = string;
      /**
       * State for purchase orders, available states are `queue`, `checking` or `closed`
       */
      export type State = string;
      /**
       * Supplier of the purchase order
       */
      export type SupplierId = number;
    }
    export interface QueryParameters {
      id?: /* Purchase order id */ Parameters.Id;
      delivery_date?: /* Delivery date in format YYYY-MM-DD hh:mm:ss */ Parameters.DeliveryDate;
      inserted_at?: /* Date of creation in format YYYY-MM-DD hh:mm:ss */ Parameters.InsertedAt;
      order_num?: /* Unique identifier for Sales Order */ Parameters.OrderNum;
      state?: /* State for purchase orders, available states are `queue`, `checking` or `closed` */ Parameters.State;
      supplier_id?: /* Supplier of the purchase order */ Parameters.SupplierId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Purchase Orders Response List
         * PurchaseOrder Response List
         */
        Definitions.ResponseListPurchaseOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerShow {
    namespace Parameters {
      /**
       * Purchase order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Purchase order ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = Definitions.PurchaseOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerUpdate {
    export interface FormDataParameters {
      items?: /* Items to be updated */ Parameters.Items;
    }
    namespace Parameters {
      /**
       * Purchase order ID
       */
      export type Id = number;
      /**
       * Items to be updated
       */
      export type Items = string;
    }
    export interface PathParameters {
      id: /* Purchase order ID */ Parameters.Id;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerUpdateField {
    export interface FormDataParameters {
      op?: /* replace */ Parameters.Op;
      path?: /* /order_state_id */ Parameters.Path;
      value?: /* State string to replace */ Parameters.Value;
    }
    namespace Parameters {
      /**
       * replace
       */
      export type Op = string;
      /**
       * /order_state_id
       */
      export type Path = string;
      /**
       * State string to replace
       */
      export type Value = string;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerUpload {
    export interface FormDataParameters {
      file?: /* Path to CSV file */ Parameters.File;
      warehouse_id?: /**
       * Warehouse ID to which purchase
       *  order belongs
       */
      Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Path to CSV file
       */
      export type File = string;
      /**
       * Warehouse ID to which purchase
       *  order belongs
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsReceptionPurchaseOrderControllerUploadAttachment {
    export interface FormDataParameters {
      attachment?: /* Path to document file */ Parameters.Attachment;
      filename?: /* Name of the attachment */ Parameters.Filename;
      type?: /* Type of the attachment */ Parameters.Type;
    }
    namespace Parameters {
      /**
       * Path to document file
       */
      export type Attachment = string;
      /**
       * Name of the attachment
       */
      export type Filename = string;
      /**
       * Purchase Order ID
       */
      export type ID = number;
      /**
       * Type of the attachment
       */
      export type Type = string;
    }
    export interface PathParameters {
      ID: /* Purchase Order ID */ Parameters.ID;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerAccept {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerAlerts {
    export interface FormDataParameters {
      product_quantity_alert_ids?: /* Product quantity alert */ Parameters.ProductQuantityAlertIds;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Product quantity alert
       */
      export type ProductQuantityAlertIds = number;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerCancel {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerCreate {
    export interface FormDataParameters {
      end_date?: /* Date in format YYYY-MM-DD */ Parameters.EndDate;
      state?: /* State of Replenishment `queue`, `taken */ Parameters.State;
      type?: /* Type of Replenishment `manual`, `incoming_goods`, `supply`, `sales_order_cancelled`, `return` */ Parameters.Type;
    }
    namespace Parameters {
      /**
       * Date in format YYYY-MM-DD
       */
      export type EndDate = string;
      /**
       * State of Replenishment `queue`, `taken
       */
      export type State = string;
      /**
       * Type of Replenishment `manual`, `incoming_goods`, `supply`, `sales_order_cancelled`, `return`
       */
      export type Type = string;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerCreateRoute {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerFinish {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerItems {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerPickItem {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerSearch {
    namespace Parameters {
      /**
       * Date in format YYYY-MM-DD
       */
      export type EndDate = string;
      /**
       * Date in format YYYY-MM-DD
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * User ID that replenishment belongs
       */
      export type OwnerId = string;
      /**
       * Date in format YYYY-MM-DD
       */
      export type StartDate = string;
      /**
       * State of Replenishment `queue`, `taken
       */
      export type State = string;
      /**
       * Type of Replenishment `manual`, `incoming_goods`, `supply`, `sales_order_cancelled`, `return`
       */
      export type Type = string;
    }
    export interface QueryParameters {
      start_date?: /* Date in format YYYY-MM-DD */ Parameters.StartDate;
      end_date?: /* Date in format YYYY-MM-DD */ Parameters.EndDate;
      state?: /* State of Replenishment `queue`, `taken */ Parameters.State;
      type?: /* Type of Replenishment `manual`, `incoming_goods`, `supply`, `sales_order_cancelled`, `return` */ Parameters.Type;
      owner_id?: /* User ID that replenishment belongs */ Parameters.OwnerId;
      inserted_at?: /* Date in format YYYY-MM-DD */ Parameters.InsertedAt;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerShow {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerSplitItem {
    export interface FormDataParameters {
      replenishment_item_id?: /* Replenishment item ID */ Parameters.ReplenishmentItemId;
      splits?: /* List of json with location_id and quantity */ Parameters.Splits;
    }
    namespace Parameters {
      /**
       * Replenishment item ID
       */
      export type ReplenishmentItemId = number;
      /**
       * List of json with location_id and quantity
       */
      export type Splits = string;
    }
  }
  namespace WmsReplenishmentReplenishmentOrderControllerUpdateOwner {
    namespace Parameters {
      /**
       * Replenishment order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Replenishment order ID */ Parameters.Id;
    }
  }
  namespace WmsSalesBulkBulkFulfillmentOrderControllerBulkPause {
    export interface BodyParameters {
      sales_order_reference_struct_list?: Parameters.SalesOrderReferenceStructList;
      sales_order_reference_id_list?: Parameters.SalesOrderReferenceIdList;
    }
    namespace Parameters {
      export type SalesOrderReferenceIdList = Definitions.SalesOrderReferenceIdList;
      export type SalesOrderReferenceStructList = Definitions.SalesOrderReferenceStructList;
    }
  }
  namespace WmsSalesBulkBulkFulfillmentOrderControllerBulkResume {
    export interface BodyParameters {
      sales_order_reference_struct_list?: Parameters.SalesOrderReferenceStructList;
      sales_order_reference_id_list?: Parameters.SalesOrderReferenceIdList;
      sales_order_reference_order_num_list?: Parameters.SalesOrderReferenceOrderNumList;
    }
    namespace Parameters {
      export type SalesOrderReferenceIdList = Definitions.SalesOrderReferenceIdList;
      export type SalesOrderReferenceOrderNumList = Definitions.SalesOrderReferenceOrderNumList;
      export type SalesOrderReferenceStructList = Definitions.SalesOrderReferenceStructList;
    }
  }
  namespace WmsSalesBulkBulkSalesOrderControllerBulkAttachReturnLabels {
    export interface BodyParameters {
      sales_order_return_label_reference_struct_list?: Parameters.SalesOrderReturnLabelReferenceStructList;
    }
    namespace Parameters {
      export type SalesOrderReturnLabelReferenceStructList =
        Definitions.SalesOrderReturnLabelReferenceStructList;
    }
  }
  namespace WmsSalesBulkBulkSalesOrderControllerBulkCancel {
    export interface BodyParameters {
      sales_order_reference_struct_list?: Parameters.SalesOrderReferenceStructList;
      sales_order_reference_id_list?: Parameters.SalesOrderReferenceIdList;
      sales_order_reference_order_num_list?: Parameters.SalesOrderReferenceOrderNumList;
    }
    namespace Parameters {
      export type SalesOrderReferenceIdList = Definitions.SalesOrderReferenceIdList;
      export type SalesOrderReferenceOrderNumList = Definitions.SalesOrderReferenceOrderNumList;
      export type SalesOrderReferenceStructList = Definitions.SalesOrderReferenceStructList;
    }
  }
  namespace WmsSalesBulkBulkSalesOrderControllerBulkCreate {
    export interface BodyParameters {
      sales_order_body_request_list?: Parameters.SalesOrderBodyRequestList;
    }
    namespace Parameters {
      export type SalesOrderBodyRequestList = Definitions.SalesOrderBodyRequestList;
    }
    namespace Responses {
      export type $201 =
        /**
         * Created Sales Orders list
         * Created Sales Orders list
         */
        Definitions.BulkSalesOrderResponse;
      export type $400 =
        /**
         * Created Sales Orders and errors list
         * Created Sales Orders and errors list
         */
        Definitions.BulkErrorsSalesOrderResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesBulkBulkSalesOrderControllerBulkPause {
    export interface BodyParameters {
      sales_order_reference_struct_list?: Parameters.SalesOrderReferenceStructList;
      sales_order_reference_id_list?: Parameters.SalesOrderReferenceIdList;
      sales_order_reference_order_num_list?: Parameters.SalesOrderReferenceOrderNumList;
    }
    namespace Parameters {
      export type SalesOrderReferenceIdList = Definitions.SalesOrderReferenceIdList;
      export type SalesOrderReferenceOrderNumList = Definitions.SalesOrderReferenceOrderNumList;
      export type SalesOrderReferenceStructList = Definitions.SalesOrderReferenceStructList;
    }
  }
  namespace WmsSalesBulkBulkSalesOrderControllerBulkQuickCreate {
    export interface BodyParameters {
      sales_order_body_request_list?: Parameters.SalesOrderBodyRequestList;
    }
    namespace Parameters {
      export type SalesOrderBodyRequestList = Definitions.SalesOrderBodyRequestList;
    }
    namespace Responses {
      export type $201 =
        /**
         * Created Sales Orders list
         * Created Sales Orders list
         */
        Definitions.BulkSalesOrderResponse;
      export type $400 =
        /**
         * Created Sales Orders and errors list
         * Created Sales Orders and errors list
         */
        Definitions.BulkErrorsSalesOrderResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesBulkBulkSalesOrderControllerBulkResume {
    export interface BodyParameters {
      sales_order_reference_struct_list?: Parameters.SalesOrderReferenceStructList;
      sales_order_reference_id_list?: Parameters.SalesOrderReferenceIdList;
      sales_order_reference_order_num_list?: Parameters.SalesOrderReferenceOrderNumList;
    }
    namespace Parameters {
      export type SalesOrderReferenceIdList = Definitions.SalesOrderReferenceIdList;
      export type SalesOrderReferenceOrderNumList = Definitions.SalesOrderReferenceOrderNumList;
      export type SalesOrderReferenceStructList = Definitions.SalesOrderReferenceStructList;
    }
    namespace Responses {
      export type $201 =
        /**
         * Updated Sales Orders list
         * Updated Sales Orders list
         */
        Definitions.BulkUpdateSalesOrderResponse;
      export type $400 =
        /**
         * Updated Sales Orders and errors list
         * Updated Sales Orders and errors list
         */
        Definitions.BulkUpdateErrorsSalesOrderResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesBulkBulkSalesOrderControllerBulkUpdate {
    export interface BodyParameters {
      sales_order_body_request_list?: Parameters.SalesOrderBodyRequestList;
    }
    namespace Parameters {
      export type SalesOrderBodyRequestList = Definitions.SalesOrderBodyRequestList;
    }
    namespace Responses {
      export type $201 =
        /**
         * Updated Sales Orders list
         * Updated Sales Orders list
         */
        Definitions.BulkUpdateSalesOrderResponse;
      export type $400 =
        /**
         * Updated Sales Orders and errors list
         * Updated Sales Orders and errors list
         */
        Definitions.BulkUpdateErrorsSalesOrderResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesFulfillmentOrderControllerAssignCustomRouteRule {
    export interface FormDataParameters {
      type?: /* Type of the rule, can be by `/tag` or is `/zone_name` */ Parameters.Type;
      value?: /* Value of the rule, if type tag should be an existing tag name assigned at least to one location, if type zone_name should be an existing zone name */ Parameters.Value;
    }
    namespace Parameters {
      /**
       * Id of Fulfillment Order
       */
      export type FulfillmentOrderId = number;
      /**
       * Id of Sales Order
       */
      export type SalesOrderId = number;
      /**
       * Type of the rule, can be by `/tag` or is `/zone_name`
       */
      export type Type = string;
      /**
       * Value of the rule, if type tag should be an existing tag name assigned at least to one location, if type zone_name should be an existing zone name
       */
      export type Value = string;
    }
    export interface PathParameters {
      sales_order_id: /* Id of Sales Order */ Parameters.SalesOrderId;
      fulfillment_order_id: /* Id of Fulfillment Order */ Parameters.FulfillmentOrderId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Fulfillment Order
         * Fulfillment Order
         */
        Definitions.FulfillmentOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsSalesFulfillmentOrderControllerSearch {
    namespace Parameters {
      /**
       * Sales orders channel
       */
      export type Channel = string;
      /**
       * Customer ID to which are sold the items
       */
      export type ClientId = string;
      /**
       * Sales orders criterium you can search a list by using to_list:
       */
      export type Criterium = string;
      /**
       * Date of delivery YYYY-MM-DD hh:mm:ss
       */
      export type DeliveryDate = string;
      /**
       * Total volume of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type EstimatedTotalVolume = string;
      /**
       * Total weight of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type EstimatedTotalWeight = string;
      /**
       * unique ID of the sales order
       */
      export type Id = string;
      /**
       * Date of creation YYYY-MM-DD hh:mm:ss
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = string;
      /**
       * Sales orders that NOT contains the product ID
       */
      export type NotProductId = string;
      /**
       * Offset value to pagination
       */
      export type Offset = string;
      /**
       * Total number of sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type OrderItemsCount = string;
      /**
       * Unique Identifier for Fulfillment Order
       */
      export type OrderNum = string;
      /**
       * Total number of products per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value`, `between:min_value,max_value` or `value` (for exact value)
       */
      export type OrderProductsQty = string;
      /**
       * Sales orders priority, you can search a list by using to_list:
       */
      export type Priority = string;
      /**
       * Products inside sales order matching given product categories. Available filters are `includes_all:value` , `includes_some:value`, `includes_only:value`, `includes_none:value`
       */
      export type ProductCategoryId = string;
      /**
       * Sales orders that contains the product ID. For and search use: includes:product_id_lists
       */
      export type ProductId = string;
      /**
       * Return label code from origin sales order
       */
      export type ReturnLabel = string;
      /**
       * Origin sales order ID of the fulfillment order
       */
      export type SalesOrderId = string;
      /**
       * Sequence number of the fulfillment order
       */
      export type SequenceNumber = string;
      /**
       * The available states are `queue`, `picking`, `packing`, `ended`, `cancelled`
       */
      export type State = string;
      /**
       * Unique ID of the third party
       */
      export type ThirdPartyId = string;
      /**
       * Date of last update YYYY-MM-DD hh:mm:ss
       */
      export type UpdatedAt = string;
      /**
       * List of attributes to show in the response. No associations supported. An empty list shows all attributes
       */
      export type ViewAttributes = string;
      /**
       * Unique ID of the warehouse
       */
      export type WarehouseId = string;
    }
    export interface QueryParameters {
      client_id?: /* Customer ID to which are sold the items */ Parameters.ClientId;
      order_num?: /* Unique Identifier for Fulfillment Order */ Parameters.OrderNum;
      sequence_number?: /* Sequence number of the fulfillment order */ Parameters.SequenceNumber;
      sales_order_id?: /* Origin sales order ID of the fulfillment order */ Parameters.SalesOrderId;
      state?: /* The available states are `queue`, `picking`, `packing`, `ended`, `cancelled` */ Parameters.State;
      view_attributes?: /* List of attributes to show in the response. No associations supported. An empty list shows all attributes */ Parameters.ViewAttributes;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      order_items_count?: /* Total number of sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.OrderItemsCount;
      order_products_qty?: /* Total number of products per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value`, `between:min_value,max_value` or `value` (for exact value) */ Parameters.OrderProductsQty;
      inserted_at?: /* Date of creation YYYY-MM-DD hh:mm:ss */ Parameters.InsertedAt;
      updated_at?: /* Date of last update YYYY-MM-DD hh:mm:ss */ Parameters.UpdatedAt;
      id?: /* unique ID of the sales order */ Parameters.Id;
      delivery_date?: /* Date of delivery YYYY-MM-DD hh:mm:ss */ Parameters.DeliveryDate;
      third_party_id?: /* Unique ID of the third party */ Parameters.ThirdPartyId;
      warehouse_id?: /* Unique ID of the warehouse */ Parameters.WarehouseId;
      return_label?: /* Return label code from origin sales order */ Parameters.ReturnLabel;
      product_id?: /* Sales orders that contains the product ID. For and search use: includes:product_id_lists */ Parameters.ProductId;
      not_product_id?: /* Sales orders that NOT contains the product ID */ Parameters.NotProductId;
      channel?: /* Sales orders channel */ Parameters.Channel;
      priority?: /* Sales orders priority, you can search a list by using to_list: */ Parameters.Priority;
      criterium?: /* Sales orders criterium you can search a list by using to_list: */ Parameters.Criterium;
      product_category_id?: /* Products inside sales order matching given product categories. Available filters are `includes_all:value` , `includes_some:value`, `includes_only:value`, `includes_none:value` */ Parameters.ProductCategoryId;
      estimated_total_volume?: /* Total volume of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.EstimatedTotalVolume;
      estimated_total_weight?: /* Total weight of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.EstimatedTotalWeight;
    }
    namespace Responses {
      export type $200 =
        /**
         * Fulfillment Orders Response List
         * FulfillmentOrder Response List
         */
        Definitions.ResponseListFulfillmentOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesFulfillmentOrderControllerSearchBySalesOrderId {
    namespace Parameters {
      /**
       * Sales orders channel
       */
      export type Channel = string;
      /**
       * Customer ID to which are sold the items
       */
      export type ClientId = string;
      /**
       * Sales orders criterium you can search a list by using to_list:
       */
      export type Criterium = string;
      /**
       * Date of delivery YYYY-MM-DD hh:mm:ss
       */
      export type DeliveryDate = string;
      /**
       * Total volume of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type EstimatedTotalVolume = string;
      /**
       * Total weight of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type EstimatedTotalWeight = string;
      /**
       * unique ID of the sales order
       */
      export type Id = string;
      /**
       * Date of creation YYYY-MM-DD hh:mm:ss
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = string;
      /**
       * Sales orders that NOT contains the product ID
       */
      export type NotProductId = string;
      /**
       * Offset value to pagination
       */
      export type Offset = string;
      /**
       * Total number of sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type OrderItemsCount = string;
      /**
       * Unique Identifier for Fulfillment Order
       */
      export type OrderNum = string;
      /**
       * Total number of products per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value`, `between:min_value,max_value` or `value` (for exact value)
       */
      export type OrderProductsQty = string;
      /**
       * Sales orders priority, you can search a list by using to_list:
       */
      export type Priority = string;
      /**
       * Products inside sales order matching given product categories. Available filters are `includes_all:value` , `includes_some:value`, `includes_only:value`, `includes_none:value`
       */
      export type ProductCategoryId = string;
      /**
       * Sales orders that contains the product ID. For and search use: includes:product_id_lists
       */
      export type ProductId = string;
      /**
       * Return label code from origin sales order
       */
      export type ReturnLabel = string;
      /**
       * Sales order ID which the fulfillment belongs to
       */
      export type SalesOrderId = number;
      /**
       * Sequence number of the fulfillment order
       */
      export type SequenceNumber = string;
      /**
       * The available states are `queue`, `picking`, `packing`, `ended`, `cancelled`
       */
      export type State = string;
      /**
       * Unique ID of the third party
       */
      export type ThirdPartyId = string;
      /**
       * Date of last update YYYY-MM-DD hh:mm:ss
       */
      export type UpdatedAt = string;
      /**
       * List of attributes to show in the response. No associations supported. An empty list shows all attributes
       */
      export type ViewAttributes = string;
      /**
       * Unique ID of the warehouse
       */
      export type WarehouseId = string;
    }
    export interface PathParameters {
      sales_order_id: /* Sales order ID which the fulfillment belongs to */ Parameters.SalesOrderId;
    }
    export interface QueryParameters {
      client_id?: /* Customer ID to which are sold the items */ Parameters.ClientId;
      order_num?: /* Unique Identifier for Fulfillment Order */ Parameters.OrderNum;
      sequence_number?: /* Sequence number of the fulfillment order */ Parameters.SequenceNumber;
      sales_order_id?: /* Sales order ID which the fulfillment belongs to */ Parameters.SalesOrderId;
      state?: /* The available states are `queue`, `picking`, `packing`, `ended`, `cancelled` */ Parameters.State;
      view_attributes?: /* List of attributes to show in the response. No associations supported. An empty list shows all attributes */ Parameters.ViewAttributes;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      order_items_count?: /* Total number of sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.OrderItemsCount;
      order_products_qty?: /* Total number of products per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value`, `between:min_value,max_value` or `value` (for exact value) */ Parameters.OrderProductsQty;
      inserted_at?: /* Date of creation YYYY-MM-DD hh:mm:ss */ Parameters.InsertedAt;
      updated_at?: /* Date of last update YYYY-MM-DD hh:mm:ss */ Parameters.UpdatedAt;
      id?: /* unique ID of the sales order */ Parameters.Id;
      delivery_date?: /* Date of delivery YYYY-MM-DD hh:mm:ss */ Parameters.DeliveryDate;
      third_party_id?: /* Unique ID of the third party */ Parameters.ThirdPartyId;
      warehouse_id?: /* Unique ID of the warehouse */ Parameters.WarehouseId;
      return_label?: /* Return label code from origin sales order */ Parameters.ReturnLabel;
      product_id?: /* Sales orders that contains the product ID. For and search use: includes:product_id_lists */ Parameters.ProductId;
      not_product_id?: /* Sales orders that NOT contains the product ID */ Parameters.NotProductId;
      channel?: /* Sales orders channel */ Parameters.Channel;
      priority?: /* Sales orders priority, you can search a list by using to_list: */ Parameters.Priority;
      criterium?: /* Sales orders criterium you can search a list by using to_list: */ Parameters.Criterium;
      product_category_id?: /* Products inside sales order matching given product categories. Available filters are `includes_all:value` , `includes_some:value`, `includes_only:value`, `includes_none:value` */ Parameters.ProductCategoryId;
      estimated_total_volume?: /* Total volume of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.EstimatedTotalVolume;
      estimated_total_weight?: /* Total weight of products in the sales items per fulfillment order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.EstimatedTotalWeight;
    }
    namespace Responses {
      export type $200 =
        /**
         * Fulfillment Orders Response List
         * FulfillmentOrder Response List
         */
        Definitions.ResponseListFulfillmentOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesFulfillmentOrderControllerShow {
    namespace Parameters {
      /**
       * Fulfillment order ID
       */
      export type FulfillmentOrderId = number;
      /**
       * Sales order ID which the fulfillment belongs to
       */
      export type SalesOrderId = number;
    }
    export interface PathParameters {
      sales_order_id: /* Sales order ID which the fulfillment belongs to */ Parameters.SalesOrderId;
      fulfillment_order_id: /* Fulfillment order ID */ Parameters.FulfillmentOrderId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Fulfillment Order
         * Fulfillment Order
         */
        Definitions.FulfillmentOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsSalesFulfillmentOrderControllerUpdateField {
    export interface FormDataParameters {
      op?: /* replace */ Parameters.Op;
      path?: /* Field to be changed, can be `/priority` or is `/ship_to` */ Parameters.Path;
      value?: /* Value to replace */ Parameters.Value;
    }
    namespace Parameters {
      /**
       * Id of Fulfillment Order
       */
      export type FulfillmentOrderId = number;
      /**
       * replace
       */
      export type Op = string;
      /**
       * Field to be changed, can be `/priority` or is `/ship_to`
       */
      export type Path = string;
      /**
       * Id of Sales Order
       */
      export type SalesOrderId = number;
      /**
       * Value to replace
       */
      export type Value = string;
    }
    export interface PathParameters {
      sales_order_id: /* Id of Sales Order */ Parameters.SalesOrderId;
      fulfillment_order_id: /* Id of Fulfillment Order */ Parameters.FulfillmentOrderId;
    }
  }
  namespace WmsSalesSalesOrderControllerAttachReturnLabels {
    export interface BodyParameters {
      return_label_codes?: Parameters.ReturnLabelCodes;
    }
    namespace Parameters {
      export type ReturnLabelCodes =
        /**
         * Return Label codes
         * A list of return label code
         */
        Definitions.ReturnLabelCodes;
    }
    namespace Responses {
      export type $200 = Definitions.SalesOrder;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesSalesOrderControllerCancel {
    namespace Parameters {
      /**
       * Sales Order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Sales Order ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = Definitions.SalesOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsSalesSalesOrderControllerCreate {
    export interface BodyParameters {
      sales_order_body_request?: Parameters.SalesOrderBodyRequest;
    }
    namespace Parameters {
      export type SalesOrderBodyRequest = Definitions.SalesOrderBodyRequest;
    }
    namespace Responses {
      export type $201 = Definitions.SalesOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsSalesSalesOrderControllerCreateQuickSales {
    export interface BodyParameters {
      sales_order_body_request?: Parameters.SalesOrderBodyRequest;
    }
    namespace Parameters {
      export type SalesOrderBodyRequest = Definitions.SalesOrderBodyRequest;
    }
    namespace Responses {
      export type $200 = Definitions.SalesOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsSalesSalesOrderControllerDeleteAttachment {
    namespace Parameters {
      /**
       * sales order id
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* sales order id */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = Definitions.SalesOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesSalesOrderControllerDispatched {
    namespace Parameters {
      /**
       * Sales order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Sales order ID */ Parameters.Id;
    }
  }
  namespace WmsSalesSalesOrderControllerFilterCriteria {
    namespace Parameters {
      /**
       * Criteria
       */
      export type Filter = string;
    }
    export interface QueryParameters {
      filter?: /* Criteria */ Parameters.Filter;
    }
  }
  namespace WmsSalesSalesOrderControllerGetReturnData {
    namespace Parameters {
      /**
       * Sales order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Sales order ID */ Parameters.Id;
    }
  }
  namespace WmsSalesSalesOrderControllerPause {
    namespace Parameters {
      /**
       * Sales order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Sales order ID */ Parameters.Id;
    }
  }
  namespace WmsSalesSalesOrderControllerPostSearch {
    export interface BodyParameters {
      sales_order_post_search?: Parameters.SalesOrderPostSearch;
    }
    namespace Parameters {
      export type SalesOrderPostSearch =
        /**
         * Sales order search
         * Sales Order search request body
         */
        Definitions.SalesOrderPostSearch;
    }
    namespace Responses {
      export type $200 =
        /**
         * Sales Orders Response List
         * SalesOrder Response List
         */
        Definitions.ResponseListSalesOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesSalesOrderControllerRegisterAttachment {
    export interface FormDataParameters {
      id?: /* Sales Order ID */ Parameters.Id;
      filename?: /* User file name */ Parameters.Filename;
      file_type?: /* File type */ Parameters.FileType;
      type?: /* What the type of the attachment eg - label */ Parameters.Type;
      extension?: /* file extention ie, pdf */ Parameters.Extension;
    }
    namespace Parameters {
      /**
       * file extention ie, pdf
       */
      export type Extension = string;
      /**
       * File type
       */
      export type FileType = string;
      /**
       * User file name
       */
      export type Filename = string;
      /**
       * Sales Order ID
       */
      export type Id = number;
      /**
       * What the type of the attachment eg - label
       */
      export type Type = string;
    }
    export interface PathParameters {
      id: /* Sales Order ID */ Parameters.Id;
    }
    namespace Responses {
      export type $201 = Definitions.SalesOrder;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesSalesOrderControllerResume {
    namespace Parameters {
      /**
       * Sales Order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Sales Order ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = Definitions.SalesOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsSalesSalesOrderControllerSearch {
    namespace Parameters {
      /**
       * Sales orders channel
       */
      export type Channel = string;
      /**
       * Customer ID to which are sold the items
       */
      export type ClientId = string;
      /**
       * Sales orders criterium you can search a list by using to_list:
       */
      export type Criterium = string;
      /**
       * Date of delivery YYYY-MM-DD hh:mm:ss
       */
      export type DeliveryDate = string;
      /**
       * Total volume of products in the sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type EstimatedTotalVolume = string;
      /**
       * Total weight of products in the sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type EstimatedTotalWeight = string;
      /**
       * unique ID of the sales order
       */
      export type Id = string;
      /**
       * Date of creation YYYY-MM-DD hh:mm:ss
       */
      export type InsertedAt = string;
      /**
       * Limit value to pagination
       */
      export type Limit = string;
      /**
       * Sales orders that NOT contains the product ID
       */
      export type NotProductId = string;
      /**
       * Offset value to pagination
       */
      export type Offset = string;
      /**
       * Total number of sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value`
       */
      export type OrderItemsCount = string;
      /**
       * Unique Identifier for Sales Order
       */
      export type OrderNum = string;
      /**
       * Total number of products per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value`, `between:min_value,max_value` or `value` (for exact value)
       */
      export type OrderProductsQty = string;
      /**
       * Sales orders priority, you can search a list by using to_list:
       */
      export type Priority = string;
      /**
       * Products inside sales order matching given product categories. Available filters are `includes_all:value` , `includes_some:value`, `includes_only:value`, `includes_none:value`
       */
      export type ProductCategoryId = string;
      /**
       * Sales orders that contains the product ID. For and search use: includes:product_id_lists
       */
      export type ProductId = string;
      /**
       * Return label code
       */
      export type ReturnLabel = string;
      /**
       * The available states are `queue`, `picking`, `packing`, `ended`, `cancelled`
       */
      export type State = string;
      /**
       * Unique ID of the third party
       */
      export type ThirdPartyId = string;
      /**
       * Date of last update YYYY-MM-DD hh:mm:ss
       */
      export type UpdatedAt = string;
      /**
       * List of attributes to show in the response. No associations supported. An empty list shows all attributes
       */
      export type ViewAttributes = string;
      /**
       * Unique ID of the warehouse
       */
      export type WarehouseId = string;
    }
    export interface QueryParameters {
      client_id?: /* Customer ID to which are sold the items */ Parameters.ClientId;
      order_num?: /* Unique Identifier for Sales Order */ Parameters.OrderNum;
      state?: /* The available states are `queue`, `picking`, `packing`, `ended`, `cancelled` */ Parameters.State;
      view_attributes?: /* List of attributes to show in the response. No associations supported. An empty list shows all attributes */ Parameters.ViewAttributes;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
      order_items_count?: /* Total number of sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.OrderItemsCount;
      estimated_total_volume?: /* Total volume of products in the sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.EstimatedTotalVolume;
      estimated_total_weight?: /* Total weight of products in the sales items per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value` or `value` */ Parameters.EstimatedTotalWeight;
      order_products_qty?: /* Total number of products per sales order. Available filters are `gte:value` , `gt:value`, `lte:value`, `lt:value`, `between:min_value,max_value` or `value` (for exact value) */ Parameters.OrderProductsQty;
      inserted_at?: /* Date of creation YYYY-MM-DD hh:mm:ss */ Parameters.InsertedAt;
      updated_at?: /* Date of last update YYYY-MM-DD hh:mm:ss */ Parameters.UpdatedAt;
      id?: /* unique ID of the sales order */ Parameters.Id;
      delivery_date?: /* Date of delivery YYYY-MM-DD hh:mm:ss */ Parameters.DeliveryDate;
      third_party_id?: /* Unique ID of the third party */ Parameters.ThirdPartyId;
      warehouse_id?: /* Unique ID of the warehouse */ Parameters.WarehouseId;
      return_label?: /* Return label code */ Parameters.ReturnLabel;
      product_id?: /* Sales orders that contains the product ID. For and search use: includes:product_id_lists */ Parameters.ProductId;
      not_product_id?: /* Sales orders that NOT contains the product ID */ Parameters.NotProductId;
      channel?: /* Sales orders channel */ Parameters.Channel;
      priority?: /* Sales orders priority, you can search a list by using to_list: */ Parameters.Priority;
      criterium?: /* Sales orders criterium you can search a list by using to_list: */ Parameters.Criterium;
      product_category_id?: /* Products inside sales order matching given product categories. Available filters are `includes_all:value` , `includes_some:value`, `includes_only:value`, `includes_none:value` */ Parameters.ProductCategoryId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Sales Orders Response List
         * SalesOrder Response List
         */
        Definitions.ResponseListSalesOrder;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSalesSalesOrderControllerShow {
    namespace Parameters {
      /**
       * Sales order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Sales order ID */ Parameters.Id;
    }
  }
  namespace WmsSalesSalesOrderControllerUpdate {
    export interface BodyParameters {
      sales_order_body_request?: Parameters.SalesOrderBodyRequest;
    }
    namespace Parameters {
      /**
       * Sales Order ID
       */
      export type Id = number;
      export type SalesOrderBodyRequest = Definitions.SalesOrderBodyRequest;
    }
    export interface PathParameters {
      id: /* Sales Order ID */ Parameters.Id;
    }
  }
  namespace WmsSalesSalesOrderControllerUpdateField {
    export interface FormDataParameters {
      op?: /* replace */ Parameters.Op;
      path?: /* Field to be changed, can be `/priority` or is `/ship_to` */ Parameters.Path;
      value?: /* Value to replace */ Parameters.Value;
    }
    namespace Parameters {
      /**
       * Id of Sales Order
       */
      export type Id = number;
      /**
       * replace
       */
      export type Op = string;
      /**
       * Field to be changed, can be `/priority` or is `/ship_to`
       */
      export type Path = string;
      /**
       * Value to replace
       */
      export type Value = string;
    }
    export interface PathParameters {
      id: /* Id of Sales Order */ Parameters.Id;
    }
  }
  namespace WmsSalesSalesOrderControllerUpload {
    export interface FormDataParameters {
      file?: /* Path to CSV file */ Parameters.File;
      warehouse_id?: /* Warehouse ID to which sales order belongs */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Path to CSV file
       */
      export type File = string;
      /**
       * Warehouse ID to which sales order belongs
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsSalesSalesOrderControllerUploadAttachment {
    export interface FormDataParameters {
      attachment?: /* Path to document file */ Parameters.Attachment;
      filename?: /* Name of the attachment */ Parameters.Filename;
      type?: /* Type of the attachment, supported types are `document`, `label`, `photo` or `undefined` */ Parameters.Type;
    }
    namespace Parameters {
      /**
       * Path to document file
       */
      export type Attachment = string;
      /**
       * Name of the attachment
       */
      export type Filename = string;
      /**
       * Sales Order ID
       */
      export type Id = number;
      /**
       * Type of the attachment, supported types are `document`, `label`, `photo` or `undefined`
       */
      export type Type = string;
    }
    export interface PathParameters {
      id: /* Sales Order ID */ Parameters.Id;
    }
    namespace Responses {
      export type $201 = Definitions.SalesOrder;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsSettingSettingControllerCreate {
    export interface BodyParameters {
      setting?: Parameters.Setting;
    }
    namespace Parameters {
      export type Setting =
        /**
         * Setting
         * Setting
         */
        Definitions.Setting;
    }
  }
  namespace WmsSettingSettingControllerDelete {
    namespace Parameters {
      /**
       * Setting ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Setting ID */ Parameters.Id;
    }
  }
  namespace WmsSettingSettingControllerSearch {
    namespace Parameters {
      /**
       * Enabled
       */
      export type Enabled = string;
      /**
       * Setting ID
       */
      export type Id = string;
      /**
       * Setting key
       */
      export type Key = string;
      /**
       * Tenant ID
       */
      export type TenantId = string;
      /**
       * User ID
       */
      export type UserId = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = string;
    }
    export interface QueryParameters {
      id?: /* Setting ID */ Parameters.Id;
      key?: /* Setting key */ Parameters.Key;
      tenant_id?: /* Tenant ID */ Parameters.TenantId;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
      user_id?: /* User ID */ Parameters.UserId;
      enabled?: /* Enabled */ Parameters.Enabled;
    }
  }
  namespace WmsSettingSettingControllerShow {
    namespace Parameters {
      /**
       * Setting ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Setting ID */ Parameters.Id;
    }
  }
  namespace WmsSettingSettingControllerUpdate {
    export interface BodyParameters {
      setting?: Parameters.Setting;
    }
    namespace Parameters {
      /**
       * Setting ID
       */
      export type Id = number;
      export type Setting =
        /**
         * Setting
         * Setting
         */
        Definitions.Setting;
    }
    export interface PathParameters {
      id: /* Setting ID */ Parameters.Id;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerCreate {
    export interface FormDataParameters {
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
      truck_license_plate?: /* Truck license plate */ Parameters.TruckLicensePlate;
      truck_info?: /* Additional information about the truck */ Parameters.TruckInfo;
    }
    namespace Parameters {
      /**
       * Additional information about the truck
       */
      export type TruckInfo = string;
      /**
       * Truck license plate
       */
      export type TruckLicensePlate = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerDeleteBox {
    export interface FormDataParameters {
      box_id?: /* Packing Box ID */ Parameters.BoxId;
    }
    namespace Parameters {
      /**
       * Packing Box ID
       */
      export type BoxId = number;
      /**
       * Loaded Shipping Box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Loaded Shipping Box ID */ Parameters.Id;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerDeleteLoadedShippingBox {
    namespace Parameters {
      /**
       * Loaded Shipping Box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Loaded Shipping Box ID */ Parameters.Id;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerFinish {
    namespace Parameters {
      /**
       * Loaded Shipping Box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Loaded Shipping Box ID */ Parameters.Id;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerFinishPartial {
    export interface FormDataParameters {
      packing_box_ids?: /* List of packing box ids to be loaded */ Parameters.PackingBoxIds;
    }
    namespace Parameters {
      /**
       * Loaded Shipping Box ID
       */
      export type Id = number;
      /**
       * List of packing box ids to be loaded
       */
      export type PackingBoxIds = string;
    }
    export interface PathParameters {
      id: /* Loaded Shipping Box ID */ Parameters.Id;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerLoadBoxes {
    export interface FormDataParameters {
      packing_box_ids?: /* List of packing box ids to be loaded */ Parameters.PackingBoxIds;
    }
    namespace Parameters {
      /**
       * Loaded Shipping Box ID
       */
      export type Id = number;
      /**
       * List of packing box ids to be loaded
       */
      export type PackingBoxIds = string;
    }
    export interface PathParameters {
      id: /* Loaded Shipping Box ID */ Parameters.Id;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerReassign {
    export interface FormDataParameters {
      new_owner_id?: /* New user ID */ Parameters.NewOwnerId;
    }
    namespace Parameters {
      /**
       * Loaded Shipping Box ID
       */
      export type Id = number;
      /**
       * New user ID
       */
      export type NewOwnerId = number;
    }
    export interface PathParameters {
      id: /* Loaded Shipping Box ID */ Parameters.Id;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerSearch {
    namespace Parameters {
      /**
       * Tracking codes of the items
       */
      export type PackingBoxTrackingCode = string;
      /**
       * Related packing orders sequence number of which items are from
       */
      export type PackingOrderSequenceNumber = string;
      /**
       * Related sales order numbers of which items are from
       */
      export type SalesOrderNum = string;
      /**
       * The available states are `in_progress`, `paused`, `finished`
       */
      export type State = string;
      /**
       * Warehouse ID
       */
      export type WarehouseId = string;
    }
    export interface QueryParameters {
      state?: /* The available states are `in_progress`, `paused`, `finished` */ Parameters.State;
      packing_order_sequence_number?: /* Related packing orders sequence number of which items are from */ Parameters.PackingOrderSequenceNumber;
      sales_order_num?: /* Related sales order numbers of which items are from */ Parameters.SalesOrderNum;
      packing_box_tracking_code?: /* Tracking codes of the items */ Parameters.PackingBoxTrackingCode;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Loaded Shipping Boxes Response List
         * LoadedShippingBox Response List
         */
        Definitions.ResponseListLoadedShippingBox;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsShippingLoadedShippingBoxControllerShow {
    namespace Parameters {
      /**
       * Loaded shipping box ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Loaded shipping box ID */ Parameters.Id;
    }
  }
  namespace WmsShippingShippingMethodControllerBulkUpsert {
    export interface FormDataParameters {
      name?: /* Shipping method name */ Parameters.Name;
      service?: /* Shipping methd service */ Parameters.Service;
      carrier?: /* Shipping method carrier */ Parameters.Carrier;
    }
    namespace Parameters {
      /**
       * Shipping method carrier
       */
      export type Carrier = string;
      /**
       * Shipping method name
       */
      export type Name = string;
      /**
       * Shipping methd service
       */
      export type Service = string;
    }
  }
  namespace WmsShippingShippingMethodControllerCreate {
    export interface FormDataParameters {
      name?: /* Shipping method name */ Parameters.Name;
      service?: /* Shipping methd service */ Parameters.Service;
      carrier?: /* Shipping method carrier */ Parameters.Carrier;
      merchant_id?: /* Merchant ID */ Parameters.MerchantId;
      merchant_channel_id?: /* Merchant Channel ID */ Parameters.MerchantChannelId;
    }
    namespace Parameters {
      /**
       * Shipping method carrier
       */
      export type Carrier = string;
      /**
       * Merchant Channel ID
       */
      export type MerchantChannelId = number;
      /**
       * Merchant ID
       */
      export type MerchantId = number;
      /**
       * Shipping method name
       */
      export type Name = string;
      /**
       * Shipping methd service
       */
      export type Service = string;
    }
  }
  namespace WmsShippingShippingMethodControllerDelete {
    namespace Parameters {
      /**
       * ID of shipping method
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* ID of shipping method */ Parameters.Id;
    }
  }
  namespace WmsShippingShippingMethodControllerSearch {
    namespace Parameters {
      /**
       * Shipping method Carrier
       */
      export type Carrier = string;
      /**
       * Shipping method Name
       */
      export type Name = string;
    }
    export interface QueryParameters {
      name?: /* Shipping method Name */ Parameters.Name;
      carrier?: /* Shipping method Carrier */ Parameters.Carrier;
    }
  }
  namespace WmsShippingShippingMethodControllerShow {
    namespace Parameters {
      /**
       * Shipping method ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Shipping method ID */ Parameters.Id;
    }
  }
  namespace WmsShippingShippingMethodControllerUpdate {
    namespace Parameters {
      /**
       * Shipping item ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Shipping item ID */ Parameters.Id;
    }
  }
  namespace WmsShippingShippingOrderControllerFinish {
    namespace Parameters {
      /**
       * Shipping order ID to be ended
       */
      export type ShippingOrderId = number;
    }
    export interface PathParameters {
      shipping_order_id: /* Shipping order ID to be ended */ Parameters.ShippingOrderId;
    }
  }
  namespace WmsShippingShippingOrderControllerMove {
    export interface FormDataParameters {
      shipping_location_id?: /* Shipping location ID to be moved */ Parameters.ShippingLocationId;
    }
    namespace Parameters {
      /**
       * Shipping location ID to be moved
       */
      export type ShippingLocationId = number;
      /**
       * Shipping order ID to be moved
       */
      export type ShippingOrderId = number;
    }
    export interface PathParameters {
      shipping_order_id: /* Shipping order ID to be moved */ Parameters.ShippingOrderId;
    }
  }
  namespace WmsShippingShippingOrderControllerSearch {
    namespace Parameters {
      /**
       * Datetime where shipping order was inserted
       */
      export type InsertedAt = string;
      /**
       * Sales order to which the shipping order is associated to
       */
      export type SalesOrderId = string;
      /**
       * Sequence number of shipping order
       */
      export type SequenceNumber = string;
      /**
       * Location where the shipping is placed
       */
      export type ShippingLocationId = string;
      /**
       * Datetime where shipping order was updated last time
       */
      export type UpdatedAt = string;
      /**
       * Warehouse
       */
      export type WarehouseId = string;
    }
    export interface QueryParameters {
      sequence_number?: /* Sequence number of shipping order */ Parameters.SequenceNumber;
      warehouse_id?: /* Warehouse */ Parameters.WarehouseId;
      sales_order_id?: /* Sales order to which the shipping order is associated to */ Parameters.SalesOrderId;
      shipping_location_id?: /* Location where the shipping is placed */ Parameters.ShippingLocationId;
      inserted_at?: /* Datetime where shipping order was inserted */ Parameters.InsertedAt;
      updated_at?: /* Datetime where shipping order was updated last time */ Parameters.UpdatedAt;
    }
  }
  namespace WmsShippingShippingOrderControllerShow {
    namespace Parameters {
      /**
       * Shipping order ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Shipping order ID */ Parameters.Id;
    }
  }
  namespace WmsWarehouseConnectionControllerCreate {
    export interface BodyParameters {
      connection?: Parameters.Connection;
    }
    namespace Parameters {
      export type Connection =
        /**
         * Connection
         * Connection
         */
        Definitions.Connection;
    }
    namespace Responses {
      export type $201 =
        /**
         * Connection
         * Connection
         */
        Definitions.Connection;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseConnectionControllerDelete {
    namespace Parameters {
      /**
       * Connection ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Connection ID */ Parameters.Id;
    }
  }
  namespace WmsWarehouseConnectionControllerDeleteByLocations {
    namespace Parameters {
      /**
       * Destination Location ID
       */
      export type DestinationLocationId = number;
      /**
       * Location ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Location ID */ Parameters.Id;
      destination_location_id: /* Destination Location ID */ Parameters.DestinationLocationId;
    }
  }
  namespace WmsWarehouseConnectionControllerSearch {
    namespace Parameters {
      /**
       * ID of the connection
       */
      export type Id = number;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * ID for origin or destination location
       */
      export type LocationId = number;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * Origin location id of the connection
       */
      export type OriginLocationId = number;
      /**
       * Zone id of the origin or destination location
       */
      export type ZoneId = number;
    }
    export interface QueryParameters {
      id?: /* ID of the connection */ Parameters.Id;
      zone_id?: /* Zone id of the origin or destination location */ Parameters.ZoneId;
      origin_location_id?: /* Origin location id of the connection */ Parameters.OriginLocationId;
      location_id?: /* ID for origin or destination location */ Parameters.LocationId;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Connection
         * Connection
         */
        Definitions.Connection;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWarehouseConnectionControllerSearchByLocations {
    namespace Parameters {
      /**
       * Destination Location ID
       */
      export type DestinationLocationId = number;
      /**
       * Location ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Location ID */ Parameters.Id;
      destination_location_id: /* Destination Location ID */ Parameters.DestinationLocationId;
    }
  }
  namespace WmsWarehouseConnectionControllerShow {
    namespace Parameters {
      /**
       * Connection ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Connection ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Connection
         * Connection
         */
        Definitions.Connection;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseConnectionControllerUpdate {
    export interface FormDataParameters {
      origin_location_id?: /* Origin location ID */ Parameters.OriginLocationId;
      destination_location_id?: /* Destination Location ID */ Parameters.DestinationLocationId;
      weight?: /* Weight of connection */ Parameters.Weight;
    }
    namespace Parameters {
      /**
       * Destination Location ID
       */
      export type DestinationLocationId = number;
      /**
       * Connection ID
       */
      export type Id = number;
      /**
       * Origin location ID
       */
      export type OriginLocationId = number;
      /**
       * Weight of connection
       */
      export type Weight = number;
    }
    export interface PathParameters {
      id: /* Connection ID */ Parameters.Id;
    }
  }
  namespace WmsWarehouseLocationControllerAssignStockStates {
    export interface BodyParameters {
      assign_stock_state_request?: Parameters.AssignStockStateRequest;
    }
    namespace Parameters {
      export type AssignStockStateRequest =
        /**
         * Assign Stock State Request
         * Assign Stock State Request
         */
        Definitions.AssignStockStateRequest;
    }
    namespace Responses {
      export type $201 =
        /**
         * Updated locations and errors
         * Updated locations and errors
         */
        Definitions.BulkUpdateLocationsResponse;
      export type $400 =
        /**
         * Updated locations and errors
         * Updated locations and errors
         */
        Definitions.BulkUpdateLocationsResponse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWarehouseLocationControllerCreate {
    export interface BodyParameters {
      location?: Parameters.Location;
    }
    namespace Parameters {
      export type Location =
        /**
         * Location
         * Location
         */
        Definitions.Location;
    }
    namespace Responses {
      export type $201 =
        /**
         * Location
         * Location
         */
        Definitions.Location;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseLocationControllerDelete {
    namespace Parameters {
      /**
       * Location ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Location ID */ Parameters.Id;
    }
  }
  namespace WmsWarehouseLocationControllerIndex {
    namespace Parameters {
      /**
       * Alphanumerical code for location
       */
      export type Code = string;
      /**
       * Hallway coordinate in location
       */
      export type Hallway = number;
      /**
       * Level coordinate in location
       */
      export type Level = number;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Location type id
       */
      export type LocationTypeId = number;
      /**
       * Module coordinate in location
       */
      export type Module = number;
      /**
       * Page offset
       */
      export type Offset = number;
      /**
       * Position coordinate in location
       */
      export type Position = number;
      /**
       * ID of the product to search stock in
       */
      export type ProductId = number;
      /**
       * Rack ID of the location
       */
      export type RackId = number;
      /**
       * Row coordinate in location
       */
      export type Row = number;
      /**
       * Whether the location has stock or not
       */
      export type StockLoaded = boolean;
      /**
       * Location zone ID
       */
      export type ZoneId = number;
    }
    export interface QueryParameters {
      code?: /* Alphanumerical code for location */ Parameters.Code;
      zone_id?: /* Location zone ID */ Parameters.ZoneId;
      hallway?: /* Hallway coordinate in location */ Parameters.Hallway;
      row?: /* Row coordinate in location */ Parameters.Row;
      module?: /* Module coordinate in location */ Parameters.Module;
      level?: /* Level coordinate in location */ Parameters.Level;
      position?: /* Position coordinate in location */ Parameters.Position;
      stock_loaded?: /* Whether the location has stock or not */ Parameters.StockLoaded;
      location_type_id?: /* Location type id */ Parameters.LocationTypeId;
      product_id?: /* ID of the product to search stock in */ Parameters.ProductId;
      rack_id?: /* Rack ID of the location */ Parameters.RackId;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Locations Response List
         * Location Response List
         */
        Definitions.ResponseListLocation;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWarehouseLocationControllerIndexByZone {
    namespace Parameters {
      /**
       * Alphanumerical code for location
       */
      export type Code = string;
      /**
       * Hallway coordenate in location
       */
      export type Hallway = number;
      /**
       * Wheter or not a location is volume
       */
      export type IsVolume = boolean;
      /**
       * Level coordenate in location
       */
      export type Level = number;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Location type id
       */
      export type LocationTypeId = number;
      /**
       * Module coordenate in location
       */
      export type Module = number;
      /**
       * Page offset
       */
      export type Offset = number;
      /**
       * Position coordenate in location
       */
      export type Position = number;
      /**
       * Row coordenate in location
       */
      export type Row = number;
      /**
       * Zone ID of location
       */
      export type ZoneId = number;
    }
    export interface PathParameters {
      zone_id: /* Zone ID of location */ Parameters.ZoneId;
    }
    export interface QueryParameters {
      hallway?: /* Hallway coordenate in location */ Parameters.Hallway;
      row?: /* Row coordenate in location */ Parameters.Row;
      module?: /* Module coordenate in location */ Parameters.Module;
      level?: /* Level coordenate in location */ Parameters.Level;
      position?: /* Position coordenate in location */ Parameters.Position;
      code?: /* Alphanumerical code for location */ Parameters.Code;
      is_volume?: /* Wheter or not a location is volume */ Parameters.IsVolume;
      location_type_id?: /* Location type id */ Parameters.LocationTypeId;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
  }
  namespace WmsWarehouseLocationControllerPostIndex {
    namespace Parameters {
      /**
       * Alphanumerical code for location
       */
      export type Code = string;
      /**
       * Hallway coordenate in location
       */
      export type Hallway = number;
      /**
       * Wheter or not a location is volume
       */
      export type IsVolume = boolean;
      /**
       * Level coordenate in location
       */
      export type Level = number;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Location type id
       */
      export type LocationTypeId = number;
      /**
       * Module coordenate in location
       */
      export type Module = number;
      /**
       * Page offset
       */
      export type Offset = number;
      /**
       * Position coordenate in location
       */
      export type Position = number;
      /**
       * Row coordenate in location
       */
      export type Row = number;
    }
    export interface QueryParameters {
      hallway?: /* Hallway coordenate in location */ Parameters.Hallway;
      row?: /* Row coordenate in location */ Parameters.Row;
      module?: /* Module coordenate in location */ Parameters.Module;
      level?: /* Level coordenate in location */ Parameters.Level;
      position?: /* Position coordenate in location */ Parameters.Position;
      code?: /* Alphanumerical code for location */ Parameters.Code;
      is_volume?: /* Wheter or not a location is volume */ Parameters.IsVolume;
      location_type_id?: /* Location type id */ Parameters.LocationTypeId;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
  }
  namespace WmsWarehouseLocationControllerShow {
    namespace Parameters {
      /**
       * Location ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Location ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Location
         * Location
         */
        Definitions.Location;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseLocationControllerUpdate {
    export interface FormDataParameters {
      hallway?: /* Hallway coordinate in location */ Parameters.Hallway;
      row?: /* Row coordinate in location */ Parameters.Row;
      module?: /* Module coordinate in location */ Parameters.Module;
      level?: /* Level coordinate in location */ Parameters.Level;
      position?: /* Position coordinate in location */ Parameters.Position;
      code?: /* Alphanumerical code for location */ Parameters.Code;
      is_volume?: /* Wether or not a location is volume */ Parameters.IsVolume;
      location_type_id?: /* Location type id */ Parameters.LocationTypeId;
      zone_id?: /* Zone ID of location */ Parameters.ZoneId;
    }
    namespace Parameters {
      /**
       * Alphanumerical code for location
       */
      export type Code = string;
      /**
       * Hallway coordinate in location
       */
      export type Hallway = number;
      /**
       * Location ID
       */
      export type Id = number;
      /**
       * Wether or not a location is volume
       */
      export type IsVolume = boolean;
      /**
       * Level coordinate in location
       */
      export type Level = number;
      /**
       * Location type id
       */
      export type LocationTypeId = number;
      /**
       * Module coordinate in location
       */
      export type Module = number;
      /**
       * Position coordinate in location
       */
      export type Position = number;
      /**
       * Row coordinate in location
       */
      export type Row = number;
      /**
       * Zone ID of location
       */
      export type ZoneId = number;
    }
    export interface PathParameters {
      id: /* Location ID */ Parameters.Id;
    }
    namespace Responses {
      export type $201 =
        /**
         * Location
         * Location
         */
        Definitions.Location;
      export type $403 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseLocationTypeControllerSearch {
    namespace Parameters {
      /**
       * Limit value for pagination
       */
      export type Limit = number;
      /**
       * Offset value for pagination
       */
      export type Offset = number;
    }
    export interface QueryParameters {
      limit?: /* Limit value for pagination */ Parameters.Limit;
      offset?: /* Offset value for pagination */ Parameters.Offset;
    }
  }
  namespace WmsWarehouseLocationTypeControllerShow {
    namespace Parameters {
      /**
       * Location type ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Location type ID */ Parameters.Id;
    }
  }
  namespace WmsWarehouseRackControllerCreate {
    export interface BodyParameters {
      rack?: Parameters.Rack;
    }
    namespace Parameters {
      export type Rack =
        /**
         * Rack
         * Rack
         */
        Definitions.Rack;
    }
    namespace Responses {
      export type $201 =
        /**
         * Rack
         * Rack
         */
        Definitions.Rack;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseRackControllerSearch {
    namespace Parameters {
      /**
       * The integer id of the rack.
       */
      export type Id = number;
      /**
       * Says if the rack is already defined and ready to be used.
       */
      export type IsDefined = boolean;
      /**
       * Height of the rack seen from above.
       */
      export type PositionHeight = number;
      /**
       * Position x with respect to the zone layout.
       */
      export type PositionLeft = number;
      /**
       * Position y with respect to the zone layout.
       */
      export type PositionTop = number;
      /**
       * Width of the rack seen from above.
       */
      export type PositionWidth = number;
      /**
       * Product categories of the rack locations.
       */
      export type ProductCategories = string;
      /**
       * Products ids to have with stock in the rack.
       */
      export type ProductId = string;
      /**
       * Defines if locations in the rack has stock.
       */
      export type StockLoaded = boolean;
      /**
       * Zone ID of the rack.
       */
      export type ZoneId = number;
    }
    export interface QueryParameters {
      id?: /* The integer id of the rack. */ Parameters.Id;
      zone_id?: /* Zone ID of the rack. */ Parameters.ZoneId;
      is_defined?: /* Says if the rack is already defined and ready to be used. */ Parameters.IsDefined;
      position_left?: /* Position x with respect to the zone layout. */ Parameters.PositionLeft;
      position_top?: /* Position y with respect to the zone layout. */ Parameters.PositionTop;
      position_width?: /* Width of the rack seen from above. */ Parameters.PositionWidth;
      position_height?: /* Height of the rack seen from above. */ Parameters.PositionHeight;
      stock_loaded?: /* Defines if locations in the rack has stock. */ Parameters.StockLoaded;
      product_categories?: /* Product categories of the rack locations. */ Parameters.ProductCategories;
      product_id?: /* Products ids to have with stock in the rack. */ Parameters.ProductId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Racks Response List
         * Rack Response List
         */
        Definitions.ResponseListRack;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWarehouseRackControllerShow {
    namespace Parameters {
      /**
       * Rack ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Rack ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Rack
         * Rack
         */
        Definitions.Rack;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseRackControllerUpdate {
    export interface BodyParameters {
      single_rack?: Parameters.SingleRack;
    }
    namespace Parameters {
      /**
       * Rack ID
       */
      export type Id = number;
      export type SingleRack =
        /**
         * Rack
         * Rack
         */
        Definitions.Rack;
    }
    export interface PathParameters {
      id: /* Rack ID */ Parameters.Id;
    }
    namespace Responses {
      export type $201 =
        /**
         * Rack
         * Rack
         */
        Definitions.Rack;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseWarehouseControllerCreate {
    export interface BodyParameters {
      warehouse?: Parameters.Warehouse;
    }
    namespace Parameters {
      export type Warehouse =
        /**
         * Warehouse
         * Warehouse
         */
        Definitions.Warehouse;
    }
    namespace Responses {
      export type $201 =
        /**
         * Warehouse
         * Warehouse
         */
        Definitions.Warehouse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseWarehouseControllerDownloadPrioritiesCsvTemplate {
    namespace Parameters {
      /**
       * Warehouse ID
       */
      export type ID = number;
    }
    export interface PathParameters {
      ID: /* Warehouse ID */ Parameters.ID;
    }
  }
  namespace WmsWarehouseWarehouseControllerGetLocations {
    namespace Parameters {
      /**
       * Warehouse ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Warehouse ID */ Parameters.Id;
    }
  }
  namespace WmsWarehouseWarehouseControllerGetSuggestedLocations {
    namespace Parameters {
      /**
       * Warehouse ID
       */
      export type Id = number;
      /**
       * Product id
       */
      export type ProductId = number;
    }
    export interface PathParameters {
      id: /* Warehouse ID */ Parameters.Id;
    }
    export interface QueryParameters {
      product_id?: /* Product id */ Parameters.ProductId;
    }
  }
  namespace WmsWarehouseWarehouseControllerIndex {
    namespace Parameters {
      /**
       * Whether or not a warehouse is active
       */
      export type Active = string;
      /**
       * City where is located the warehouse
       */
      export type City = string;
      /**
       * Country where is located the warehouse
       */
      export type Country = string;
      /**
       * Email of the warehouse
       */
      export type Email = string;
      /**
       * Fax number
       */
      export type Fax = number;
      /**
       * ID of the warehouse
       */
      export type Id = number;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Address line number
       */
      export type Line1 = string;
      /**
       * Address line number
       */
      export type Line2 = string;
      /**
       * Warehouse Name
       */
      export type Name = string;
      /**
       * Page offset
       */
      export type Offset = number;
      /**
       * Phone number of the warehouse
       */
      export type Phone = string;
      /**
       * Priority of a warehouse in a site
       */
      export type Priority = number;
      /**
       * Address in a warehouse site
       */
      export type Site = string;
      /**
       * Test state
       */
      export type State = string;
      /**
       * Zip code number
       */
      export type ZipCode = string;
    }
    export interface QueryParameters {
      id?: /* ID of the warehouse */ Parameters.Id;
      city?: /* City where is located the warehouse */ Parameters.City;
      country?: /* Country where is located the warehouse */ Parameters.Country;
      fax?: /* Fax number */ Parameters.Fax;
      line1?: /* Address line number */ Parameters.Line1;
      line2?: /* Address line number */ Parameters.Line2;
      name?: /* Warehouse Name */ Parameters.Name;
      phone?: /* Phone number of the warehouse */ Parameters.Phone;
      email?: /* Email of the warehouse */ Parameters.Email;
      state?: /* Test state */ Parameters.State;
      zip_code?: /* Zip code number */ Parameters.ZipCode;
      active?: /* Whether or not a warehouse is active */ Parameters.Active;
      site?: /* Address in a warehouse site */ Parameters.Site;
      priority?: /* Priority of a warehouse in a site */ Parameters.Priority;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Warehouses Response List
         * Warehouse Response List
         */
        Definitions.ResponseListWarehouse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWarehouseWarehouseControllerPostGetLocations {
    namespace Parameters {
      /**
       * Warehouse ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Warehouse ID */ Parameters.Id;
    }
  }
  namespace WmsWarehouseWarehouseControllerSearchEmptyLocations {
    export interface FormDataParameters {
      location_ids?: /* List of location ids to search (json) */ Parameters.LocationIds;
    }
    namespace Parameters {
      /**
       * Warehouse ID
       */
      export type Id = number;
      /**
       * List of location ids to search (json)
       */
      export type LocationIds = string;
    }
    export interface PathParameters {
      id: /* Warehouse ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 = /* Locations and whether they are empty or not */ Definitions.EmptyLocationsResponse;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWarehouseWarehouseControllerShow {
    namespace Parameters {
      /**
       * Warehouse ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Warehouse ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Warehouse
         * Warehouse
         */
        Definitions.Warehouse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseWarehouseControllerUpdate {
    export interface FormDataParameters {
      city?: /* City where is located the warehouse */ Parameters.City;
      country?: /* Country where is located the warehouse */ Parameters.Country;
      fax?: /* Fax number */ Parameters.Fax;
      line1?: /* Address line number */ Parameters.Line1;
      line2?: /* Address line number */ Parameters.Line2;
      name?: /* Warehouse Name */ Parameters.Name;
      phone?: /* Phone number of the warehouse */ Parameters.Phone;
      email?: /* Email of the warehouse */ Parameters.Email;
      state?: /* Test state */ Parameters.State;
      zip_code?: /* Zip code number */ Parameters.ZipCode;
      site?: /* Address in a warehouse site */ Parameters.Site;
      priority?: /* Priority of a warehouse in a site */ Parameters.Priority;
    }
    namespace Parameters {
      /**
       * City where is located the warehouse
       */
      export type City = string;
      /**
       * Country where is located the warehouse
       */
      export type Country = string;
      /**
       * Email of the warehouse
       */
      export type Email = string;
      /**
       * Fax number
       */
      export type Fax = number;
      /**
       * Warehouse ID
       */
      export type Id = number;
      /**
       * Address line number
       */
      export type Line1 = string;
      /**
       * Address line number
       */
      export type Line2 = string;
      /**
       * Warehouse Name
       */
      export type Name = string;
      /**
       * Phone number of the warehouse
       */
      export type Phone = string;
      /**
       * Priority of a warehouse in a site
       */
      export type Priority = number;
      /**
       * Address in a warehouse site
       */
      export type Site = string;
      /**
       * Test state
       */
      export type State = string;
      /**
       * Zip code number
       */
      export type ZipCode = string;
    }
    export interface PathParameters {
      id: /* Warehouse ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Warehouse
         * Warehouse
         */
        Definitions.Warehouse;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseWarehouseControllerUploadLocationPriorities {
    export interface FormDataParameters {
      file?: /* Path to CSV file */ Parameters.File;
    }
    namespace Parameters {
      /**
       * Path to CSV file
       */
      export type File = string;
      /**
       * Warehouse ID
       */
      export type ID = number;
    }
    export interface PathParameters {
      ID: /* Warehouse ID */ Parameters.ID;
    }
  }
  namespace WmsWarehouseZoneControllerCreate {
    export interface BodyParameters {
      zone?: Parameters.Zone;
    }
    namespace Parameters {
      export type Zone =
        /**
         * Zone
         * Zone
         */
        Definitions.Zone;
    }
    namespace Responses {
      export type $201 =
        /**
         * Zone
         * Zone
         */
        Definitions.Zone;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseZoneControllerSearch {
    namespace Parameters {
      /**
       * Equivalent zone in client ERP system
       */
      export type ClientZone = string;
      /**
       * Code of the zone
       */
      export type Code = string;
      /**
       * ID of the zone
       */
      export type Id = number;
      /**
       * Whether the zone is already draw in the wizard or not
       */
      export type IsDefined = boolean;
      /**
       * Limit value to pagination
       */
      export type Limit = number;
      /**
       * Name of the zone
       */
      export type Name = string;
      /**
       * Offset value to pagination
       */
      export type Offset = number;
      /**
       * Priority assigned to the zone
       */
      export type Priority = number;
      /**
       * ID of the warehouse which zone belongs to
       */
      export type WarehouseId = number;
    }
    export interface QueryParameters {
      id?: /* ID of the zone */ Parameters.Id;
      code?: /* Code of the zone */ Parameters.Code;
      name?: /* Name of the zone */ Parameters.Name;
      priority?: /* Priority assigned to the zone */ Parameters.Priority;
      client_zone?: /* Equivalent zone in client ERP system */ Parameters.ClientZone;
      warehouse_id?: /* ID of the warehouse which zone belongs to */ Parameters.WarehouseId;
      is_defined?: /* Whether the zone is already draw in the wizard or not */ Parameters.IsDefined;
      limit?: /* Limit value to pagination */ Parameters.Limit;
      offset?: /* Offset value to pagination */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Zones Response List
         * Zone Response List
         */
        Definitions.ResponseListZone;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWarehouseZoneControllerShow {
    namespace Parameters {
      /**
       * Zone ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Zone ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Zone
         * Zone
         */
        Definitions.Zone;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWarehouseZoneControllerUpdate {
    export interface FormDataParameters {
      name?: /* Name of zone */ Parameters.Name;
      priority?: /* Priority of zone */ Parameters.Priority;
      client_zone?: /* Client zone name */ Parameters.ClientZone;
      warehouse_id?: /* Warehouse ID */ Parameters.WarehouseId;
    }
    namespace Parameters {
      /**
       * Client zone name
       */
      export type ClientZone = string;
      /**
       * Zone ID
       */
      export type Id = number;
      /**
       * Name of zone
       */
      export type Name = string;
      /**
       * Priority of zone
       */
      export type Priority = number;
      /**
       * Warehouse ID
       */
      export type WarehouseId = number;
    }
    export interface PathParameters {
      id: /* Zone ID */ Parameters.Id;
    }
  }
  namespace WmsWebhookEventLogControllerSearch {
    namespace Parameters {
      /**
       * See EventLog model
       */
      export type Code = string;
      /**
       * See Event model
       */
      export type EventStatus = string;
      /**
       * See Event model
       */
      export type EventTaskNumber = string;
      /**
       * See Event model
       */
      export type EventType = string;
      /**
       * Timestamp
       */
      export type InsertedAt = string;
      /**
       * Records per page
       */
      export type Limit = number;
      /**
       * Page offset
       */
      export type Offset = number;
      /**
       * See EventLog model
       */
      export type Response = string;
      /**
       * Timestamp
       */
      export type UpdatedAt = string;
    }
    export interface QueryParameters {
      code?: /* See EventLog model */ Parameters.Code;
      response?: /* See EventLog model */ Parameters.Response;
      event_status?: /* See Event model */ Parameters.EventStatus;
      event_type?: /* See Event model */ Parameters.EventType;
      event_task_number?: /* See Event model */ Parameters.EventTaskNumber;
      inserted_at?: /* Timestamp */ Parameters.InsertedAt;
      updated_at?: /* Timestamp */ Parameters.UpdatedAt;
      limit?: /* Records per page */ Parameters.Limit;
      offset?: /* Page offset */ Parameters.Offset;
    }
    namespace Responses {
      export type $200 =
        /**
         * Event Logs Response List
         * EventLog Response List
         */
        Definitions.ResponseListEventLog;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWebhookWebhookClientControllerCreate {
    export interface BodyParameters {
      webhook_client?: Parameters.WebhookClient;
    }
    namespace Parameters {
      export type WebhookClient =
        /**
         * Webhook Client
         * Webhook Client
         */
        Definitions.WebhookClient;
    }
    namespace Responses {
      export type $201 =
        /**
         * Webhook Clients Response List
         * WebhookClient Response List
         */
        Definitions.ResponseListWebhookClient;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWebhookWebhookClientControllerDelete {
    namespace Parameters {
      /**
       * Webhook Client Id
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Webhook Client Id */ Parameters.Id;
    }
  }
  namespace WmsWebhookWebhookClientControllerSearch {
    namespace Parameters {
      /**
       * Webhook Client ID
       */
      export type Id = string;
      /**
       * Webhook Client merchant channel ID
       */
      export type MerchantChannelId = number;
      /**
       * Webhook Client merchant ID
       */
      export type MerchantId = number;
      /**
       * Webhook Client name
       */
      export type Name = string;
      /**
       * Webhook Client type
       */
      export type Type = string;
    }
    export interface QueryParameters {
      id?: /* Webhook Client ID */ Parameters.Id;
      name?: /* Webhook Client name */ Parameters.Name;
      type?: /* Webhook Client type */ Parameters.Type;
      merchant_id?: /* Webhook Client merchant ID */ Parameters.MerchantId;
      merchant_channel_id?: /* Webhook Client merchant channel ID */ Parameters.MerchantChannelId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Webhook Clients Response List
         * WebhookClient Response List
         */
        Definitions.ResponseListWebhookClient;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWebhookWebhookClientControllerShow {
    namespace Parameters {
      /**
       * Webhook client ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Webhook client ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Webhook Client
         * Webhook Client
         */
        Definitions.WebhookClient;
      export type $422 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWebhookWebhookClientControllerUpdate {
    export interface BodyParameters {
      webhook_client?: Parameters.WebhookClient;
    }
    namespace Parameters {
      /**
       * Webhook Client ID
       */
      export type Id = number;
      export type WebhookClient =
        /**
         * Webhook Client
         * Webhook Client
         */
        Definitions.WebhookClient;
    }
    export interface PathParameters {
      id: /* Webhook Client ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Webhook Client
         * Webhook Client
         */
        Definitions.WebhookClient;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWebhookWebhookControllerCreate {
    export interface BodyParameters {
      single_webhook?: Parameters.SingleWebhook;
    }
    namespace Parameters {
      export type SingleWebhook =
        /**
         * Webhook
         * Webhook
         */
        Definitions.Webhook;
    }
    namespace Responses {
      export type $201 =
        /**
         * Webhooks Response List
         * Webhook Response List
         */
        Definitions.ResponseListWebhook;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
      export type $401 =
        /**
         * Auth error
         * Auth error
         */
        Definitions.AuthError;
    }
  }
  namespace WmsWebhookWebhookControllerDelete {
    namespace Parameters {
      /**
       * Webhook ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Webhook ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Webhook
         * Webhook
         */
        Definitions.Webhook;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWebhookWebhookControllerSearch {
    namespace Parameters {
      /**
       * Webhook enabled
       */
      export type Enabled = string;
      /**
       * Webhook ID
       */
      export type Id = string;
      /**
       * Webhook merchant channel ID
       */
      export type MerchantChannelId = number;
      /**
       * Webhook merchant ID
       */
      export type MerchantId = number;
      /**
       * Webhook method
       */
      export type Method = string;
      /**
       * Webhook URL
       */
      export type Url = string;
      /**
       * Webhook warehouse ID
       */
      export type WarehouseId = string;
    }
    export interface QueryParameters {
      id?: /* Webhook ID */ Parameters.Id;
      url?: /* Webhook URL */ Parameters.Url;
      method?: /* Webhook method */ Parameters.Method;
      enabled?: /* Webhook enabled */ Parameters.Enabled;
      warehouse_id?: /* Webhook warehouse ID */ Parameters.WarehouseId;
      merchant_id?: /* Webhook merchant ID */ Parameters.MerchantId;
      merchant_channel_id?: /* Webhook merchant channel ID */ Parameters.MerchantChannelId;
    }
    namespace Responses {
      export type $200 =
        /**
         * Webhooks Response List
         * Webhook Response List
         */
        Definitions.ResponseListWebhook;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWebhookWebhookControllerShow {
    namespace Parameters {
      /**
       * Webhook ID
       */
      export type Id = number;
    }
    export interface PathParameters {
      id: /* Webhook ID */ Parameters.Id;
    }
    namespace Responses {
      export type $201 =
        /**
         * Webhook
         * Webhook
         */
        Definitions.Webhook;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
  namespace WmsWebhookWebhookControllerUpdate {
    export interface BodyParameters {
      single_webhook?: Parameters.SingleWebhook;
    }
    namespace Parameters {
      /**
       * Webhook ID
       */
      export type Id = number;
      export type SingleWebhook =
        /**
         * Webhook
         * Webhook
         */
        Definitions.Webhook;
    }
    export interface PathParameters {
      id: /* Webhook ID */ Parameters.Id;
    }
    namespace Responses {
      export type $200 =
        /**
         * Webhook
         * Webhook
         */
        Definitions.Webhook;
      export type $400 =
        /**
         * Validation errors list
         * Validation errors list
         */
        Definitions.ErrorsList;
    }
  }
}

export interface OperationMethods {
  /**
   * Wms.Auth.AuthController.head_status - Checks server availability
   *
   * Checks server availability
   */
  "Wms.Auth.AuthController.head_status"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Attachment.AttachmentController.show - Show an attachment through its URL
   *
   *
   * Show an attachment through its URL
   *
   */
  "Wms.Attachment.AttachmentController.show"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Auth.AuthController.request_token - Generates a new JWT token for the asked user, Implements OAuht2.0 request token action to perform users login and retrieve users session data
   *
   * Generates a new JWT token for the asked user, Implements OAuht2.0 request token action to perform users login and retrieve users session data
   */
  "Wms.Auth.AuthController.request_token"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsAuthAuthControllerRequestToken.Responses.$200>;
  /**
   * Wms.Auth.AuthController.revoke_token - Revokes token for the asked user
   *
   * Revokes token for the asked user
   */
  "Wms.Auth.AuthController.revoke_token"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Counting.CountingTaskController.search - Searches a list of counting task given a counting task params
   *
   * Searches a list of counting task given a counting task params
   */
  "Wms.Counting.CountingTaskController.search"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerSearch.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.create - Create a counting task
   *
   * Create a counting task
   */
  "Wms.Counting.CountingTaskController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerCreate.Responses.$201>;
  /**
   * Wms.Counting.CountingTaskController.assign - Assign a valid counting id in counting task.
   *
   * Assign a valid counting id in counting task.
   */
  "Wms.Counting.CountingTaskController.assign"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerAssign.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.show - Searches a counting task by ID
   *
   * Searches a counting task by ID
   */
  "Wms.Counting.CountingTaskController.show"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerShow.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.update - Updates a specific field on counting task. Can update the state of counting task
   * or the counter_id to assign a counter to counting task
   *
   * Updates a specific field on counting task. Can update the state of counting task
   * or the counter_id to assign a counter to counting task
   */
  "Wms.Counting.CountingTaskController.update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerUpdate.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.cancel - Cancel a counting task, with a list of valid items
   *
   * Cancel a counting task, with a list of valid items
   */
  "Wms.Counting.CountingTaskController.cancel"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerCancel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerCancel.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.finish - Close a counting task, with a list of valid items
   *
   * Close a counting task, with a list of valid items
   */
  "Wms.Counting.CountingTaskController.finish"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerFinish.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerFinish.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.add_item - Adds an item for a counting task
   *
   * Adds an item for a counting task
   */
  "Wms.Counting.CountingTaskController.add_item"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerAddItem.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerAddItem.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.update_item - Updates an item for a counting task
   *
   * Updates an item for a counting task
   */
  "Wms.Counting.CountingTaskController.update_item"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerUpdateItem.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerUpdateItem.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.delete_item - Deletes an item for a counting task
   *
   * Deletes an item for a counting task
   */
  "Wms.Counting.CountingTaskController.delete_item"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerDeleteItem.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerDeleteItem.Responses.$200>;
  /**
   * Wms.Counting.CountingTaskController.upload_item_attachment - Attach a file with a counting task
   *
   * Attach a file with a counting task
   */
  "Wms.Counting.CountingTaskController.upload_item_attachment"(
    parameters?: Parameters<Paths.WmsCountingCountingTaskControllerUploadItemAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerUploadItemAttachment.Responses.$201>;
  /**
   * Wms.Counting.CountingTaskController.upsert_reason_codes - Replaces reason codes associated to a counting task.
   * The body includes the following:
   *
   * Replaces reason codes associated to a counting task.
   * The body includes the following:
   */
  "Wms.Counting.CountingTaskController.upsert_reason_codes"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountingCountingTaskControllerUpsertReasonCodes.Responses.$200>;
  /**
   * Wms.Country.CountryController.search - Lists countries with its regional codes
   *
   * Lists countries with its regional codes
   */
  "Wms.Country.CountryController.search"(
    parameters?: Parameters<Paths.WmsCountryCountryControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountryCountryControllerSearch.Responses.$200>;
  /**
   * Wms.Country.CountryAliasController.search - Lists the event logs from a tenant
   *
   * Lists the event logs from a tenant
   */
  "Wms.Country.CountryAliasController.search"(
    parameters?: Parameters<
      Paths.WmsCountryCountryAliasControllerSearch.PathParameters &
        Paths.WmsCountryCountryAliasControllerSearch.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsCountryCountryAliasControllerSearch.Responses.$200>;
  /**
   * Wms.Device.DeviceController.create - creates a device
   *
   * creates a device
   */
  "Wms.Device.DeviceController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsDeviceDeviceControllerCreate.Responses.$201>;
  /**
   * Wms.Device.DeviceController.show - Shows a device by given ID
   *
   * Shows a device by given ID
   */
  "Wms.Device.DeviceController.show"(
    parameters?: Parameters<Paths.WmsDeviceDeviceControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsDeviceDeviceControllerShow.Responses.$200>;
  /**
   * Wms.Device.DeviceController.update - updates a device by given ID
   *
   * updates a device by given ID
   */
  "Wms.Device.DeviceController.update"(
    parameters?: Parameters<Paths.WmsDeviceDeviceControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsDeviceDeviceControllerUpdate.Responses.$201>;
  /**
   * Wms.Iam.Bulk.BulkThirdPartyController.bulk_update - Update third parties in bulk.
   *
   * This endpoint works as bulk, it means that if any third party update fails it will continue with the others until the end.
   */
  "Wms.Iam.Bulk.BulkThirdPartyController.bulk_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamBulkBulkThirdPartyControllerBulkUpdate.Responses.$201>;
  /**
   * Wms.Iam.Bulk.BulkThirdPartyController.bulk_create - Create third parties in bulk.
   *
   * This endpoint works as bulk, it means that if any third party creation fails it will continue with the others until the end.
   */
  "Wms.Iam.Bulk.BulkThirdPartyController.bulk_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamBulkBulkThirdPartyControllerBulkCreate.Responses.$201>;
  /**
   * Wms.Iam.TenantController.search - Searches a list of users given a sku and barcode
   *
   * Searches a list of users given a sku and barcode
   */
  "Wms.Iam.TenantController.search"(
    parameters?: Parameters<Paths.WmsIamTenantControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.TenantController.create - Create a tenant
   *
   * Create a tenant
   */
  "Wms.Iam.TenantController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.IamController.search_profiles - Searches a list of profiles given an id(s), key(s)
   * The parameters are optional
   *
   * Searches a list of profiles given an id(s), key(s)
   * The parameters are optional
   */
  "Wms.Iam.IamController.search_profiles"(
    parameters?: Parameters<Paths.WmsIamIamControllerSearchProfiles.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamIamControllerSearchProfiles.Responses.$200>;
  /**
   * Wms.Iam.IamController.show_profile - Show a profile data from given ID
   *
   * Show a profile data from given ID
   */
  "Wms.Iam.IamController.show_profile"(
    parameters?: Parameters<Paths.WmsIamIamControllerShowProfile.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamIamControllerShowProfile.Responses.$200>;
  /**
   * Wms.Iam.IamController.search_socket_profiles - Searches a list of socket profiles given an id(s), key(s)
   *
   * Searches a list of socket profiles given an id(s), key(s)
   */
  "Wms.Iam.IamController.search_socket_profiles"(
    parameters?: Parameters<Paths.WmsIamIamControllerSearchSocketProfiles.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamIamControllerSearchSocketProfiles.Responses.$201>;
  /**
   * Wms.Iam.IamController.show_socket_profile - Show a socket profile data from given ID
   *
   * Show a socket profile data from given ID
   */
  "Wms.Iam.IamController.show_socket_profile"(
    parameters?: Parameters<Paths.WmsIamIamControllerShowSocketProfile.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamIamControllerShowSocketProfile.Responses.$200>;
  /**
   * Wms.Iam.TenantController.show - Show a tenant given ID
   *
   * Show a tenant given ID
   */
  "Wms.Iam.TenantController.show"(
    parameters?: Parameters<Paths.WmsIamTenantControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.TenantController.update - update a tenant given ID
   *
   * update a tenant given ID
   */
  "Wms.Iam.TenantController.update"(
    parameters?: Parameters<Paths.WmsIamTenantControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.ThirdPartyController.search - Searches a list of third parties by given parameters. The parameters are optional
   *
   * Searches a list of third parties by given parameters. The parameters are optional
   */
  "Wms.Iam.ThirdPartyController.search"(
    parameters?: Parameters<Paths.WmsIamThirdPartyControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamThirdPartyControllerSearch.Responses.$200>;
  /**
   * Wms.Iam.ThirdPartyController.create - Creates a third party
   *
   * Creates a third party
   */
  "Wms.Iam.ThirdPartyController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamThirdPartyControllerCreate.Responses.$201>;
  /**
   * Wms.Iam.ThirdPartyController.upload - Create multiple Third Party from a CSV file
   *
   * Create multiple Third Party from a CSV file
   */
  "Wms.Iam.ThirdPartyController.upload"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.ThirdPartyController.show - Shows a third party given ID
   *
   * Shows a third party given ID
   */
  "Wms.Iam.ThirdPartyController.show"(
    parameters?: Parameters<Paths.WmsIamThirdPartyControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamThirdPartyControllerShow.Responses.$200>;
  /**
   * Wms.Iam.ThirdPartyController.update - updates a third party given ID
   *
   * updates a third party given ID
   */
  "Wms.Iam.ThirdPartyController.update"(
    parameters?: Parameters<Paths.WmsIamThirdPartyControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamThirdPartyControllerUpdate.Responses.$201>;
  /**
   * Wms.Iam.ThirdPartyController.delete - Deletes a third party given Id
   *
   * Deletes a third party given Id
   */
  "Wms.Iam.ThirdPartyController.delete"(
    parameters?: Parameters<Paths.WmsIamThirdPartyControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamThirdPartyControllerDelete.Responses.$200>;
  /**
   * Wms.Iam.UserController.search - Searches a list of users given params
   *
   * Searches a list of users given params
   */
  "Wms.Iam.UserController.search"(
    parameters?: Parameters<Paths.WmsIamUserControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.create - Create an user
   *
   * Create an user
   */
  "Wms.Iam.UserController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.me - Returns logged in user data
   *
   * Returns logged in user data
   */
  "Wms.Iam.UserController.me"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamUserControllerMe.Responses.$200>;
  /**
   * Wms.Iam.UserController.search_basic_info - Searches a list of users with no embed objects according to given params
   *
   * Searches a list of users with no embed objects according to given params
   */
  "Wms.Iam.UserController.search_basic_info"(
    parameters?: Parameters<Paths.WmsIamUserControllerSearchBasicInfo.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.update_session - Updates user session
   *
   * Updates user session
   */
  "Wms.Iam.UserController.update_session"(
    parameters?: Parameters<Paths.WmsIamUserControllerUpdateSession.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamUserControllerUpdateSession.Responses.$200>;
  /**
   * Wms.Iam.UserController.show - Shows an user given ID
   *
   * Shows an user given ID
   */
  "Wms.Iam.UserController.show"(
    parameters?: Parameters<Paths.WmsIamUserControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.update - updates an user given ID
   *
   * updates an user given ID
   */
  "Wms.Iam.UserController.update"(
    parameters?: Parameters<Paths.WmsIamUserControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.delete - Delete a user given ID
   *
   * Delete a user given ID
   */
  "Wms.Iam.UserController.delete"(
    parameters?: Parameters<Paths.WmsIamUserControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.assign_categories - Assign a list of categories ids to an given user
   *
   *
   * Assign a list of categories ids to an given user
   *
   */
  "Wms.Iam.UserController.assign_categories"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.assign_device - Associates a device to a created user
   *
   *
   * Associates a device to a created user
   *
   */
  "Wms.Iam.UserController.assign_device"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.merchants - Shows an user and the merchants related by given user id
   *
   * Shows an user and the merchants related by given user id
   */
  "Wms.Iam.UserController.merchants"(
    parameters?: Parameters<Paths.WmsIamUserControllerMerchants.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamUserControllerMerchants.Responses.$200>;
  /**
   * Wms.Iam.UserController.assign_merchants - Assign a list of merchants ids to an given user
   *
   * Assign a list of merchants ids to an given user
   */
  "Wms.Iam.UserController.assign_merchants"(
    parameters?: Parameters<Paths.WmsIamUserControllerAssignMerchants.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsIamUserControllerAssignMerchants.Responses.$200>;
  /**
   * Wms.Iam.UserController.list_socket_profiles - Assign a list of socket profile ids to an given user
   *
   *
   * Assign a list of socket profile ids to an given user
   *
   */
  "Wms.Iam.UserController.list_socket_profiles"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.assign_socket_profiles - Assign a list of socket profile ids to an given user
   *
   *
   * Assign a list of socket profile ids to an given user
   *
   */
  "Wms.Iam.UserController.assign_socket_profiles"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.list_profiles - Assign a list of socket profile ids to an given user
   *
   *
   * Assign a list of socket profile ids to an given user
   *
   */
  "Wms.Iam.UserController.list_profiles"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.assign_profiles - Assign a list of profile ids to an given user
   *
   *
   * Assign a list of profile ids to an given user
   *
   */
  "Wms.Iam.UserController.assign_profiles"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.pending_tasks - shows all pending tasks related to an user
   *
   * shows all pending tasks related to an user
   */
  "Wms.Iam.UserController.pending_tasks"(
    parameters?: Parameters<Paths.WmsIamUserControllerPendingTasks.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.allowed_warehouses - shows an user and the warehouses allowed by given user id
   *
   * shows an user and the warehouses allowed by given user id
   */
  "Wms.Iam.UserController.allowed_warehouses"(
    parameters?: Parameters<Paths.WmsIamUserControllerAllowedWarehouses.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Iam.UserController.assign_warehouses - Assign a list of warehouse ids to an given user
   *
   *
   * Assign a list of warehouse ids to an given user
   *
   */
  "Wms.Iam.UserController.assign_warehouses"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.InventoryController.search - Searches a list of inventories given a list of criteria
   *
   * Searches a list of inventories given a list of criteria
   */
  "Wms.Inventory.InventoryController.search"(
    parameters?: Parameters<Paths.WmsInventoryInventoryControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.InventoryController.create - Create a inventory
   *
   * Create a inventory
   */
  "Wms.Inventory.InventoryController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.Bulk.BulkProductController.bulk_update - Updates products in bulk. This endpoint works as bulk, it means that if any product update fails it will continue with the others until the end.
   *
   * Updates products in bulk. This endpoint works as bulk, it means that if any product update fails it will continue with the others until the end.
   */
  "Wms.Inventory.Bulk.BulkProductController.bulk_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryBulkBulkProductControllerBulkUpdate.Responses.$201>;
  /**
   * Wms.Inventory.Bulk.BulkProductController.bulk_create - Create products in bulk. This endpoint works as bulk, it means that if any product creation fails it will continue with the others until the end.
   *
   * Create products in bulk. This endpoint works as bulk, it means that if any product creation fails it will continue with the others until the end.
   */
  "Wms.Inventory.Bulk.BulkProductController.bulk_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryBulkBulkProductControllerBulkCreate.Responses.$201>;
  /**
   * Wms.Inventory.Bulk.BulkProductController.bulk_delete - Delete products in bulk.
   *
   * Deletion payload have multiple formats due to different ways to specify which products should be deleted:
   * * A list of structs with sku: E.G. `[%{sku: "sku1"}, ...]`
   * * A list of skus: E.G. `["sku1", ...]`
   * * A list of structs with id: E.G. `[%{id: 1}, ...]`
   * * A list of ids: E.G. `[1, ...]`
   */
  "Wms.Inventory.Bulk.BulkProductController.bulk_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.KitController.search - Searches a list of kits
   *
   * Searches a list of kits
   */
  "Wms.Inventory.KitController.search"(
    parameters?: Parameters<Paths.WmsInventoryKitControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.KitController.create - Creates a Kit according to given params
   *
   * Creates a Kit according to given params
   */
  "Wms.Inventory.KitController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.KitController.show - Fetch a kit by given id
   *
   * Fetch a kit by given id
   */
  "Wms.Inventory.KitController.show"(
    parameters?: Parameters<Paths.WmsInventoryKitControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.KitController.deactivate - Deactivates a kit by given id
   *
   * Deactivates a kit by given id
   */
  "Wms.Inventory.KitController.deactivate"(
    parameters?: Parameters<Paths.WmsInventoryKitControllerDeactivate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.LoadingUnitTemplateController.search - Searches loading unit templates
   *
   * Searches loading unit templates
   */
  "Wms.Inventory.LoadingUnitTemplateController.search"(
    parameters?: Parameters<Paths.WmsInventoryLoadingUnitTemplateControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerSearch.Responses.$200>;
  /**
   * Wms.Inventory.LoadingUnitTemplateController.create - Creates a loading unit template
   *
   * Creates a loading unit template
   */
  "Wms.Inventory.LoadingUnitTemplateController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerCreate.Responses.$201>;
  /**
   * Wms.Inventory.LoadingUnitTemplateController.update - Updates a loading unit template with the given ID
   *
   * Updates a loading unit template with the given ID
   */
  "Wms.Inventory.LoadingUnitTemplateController.update"(
    parameters?: Parameters<Paths.WmsInventoryLoadingUnitTemplateControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerUpdate.Responses.$200>;
  /**
   * Wms.Inventory.LoadingUnitTemplateController.delete - Deletes a loading unit template according to the given id
   *
   * Deletes a loading unit template according to the given id
   */
  "Wms.Inventory.LoadingUnitTemplateController.delete"(
    parameters?: Parameters<Paths.WmsInventoryLoadingUnitTemplateControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerDelete.Responses.$200>;
  /**
   * Wms.Inventory.ProductController.search - Searches a list of products
   *
   * Searches a list of products
   */
  "Wms.Inventory.ProductController.search"(
    parameters?: Parameters<Paths.WmsInventoryProductControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerSearch.Responses.$200>;
  /**
   * Wms.Inventory.ProductController.batch_update - Updates a list of product
   *
   * Updates a list of product
   */
  "Wms.Inventory.ProductController.batch_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerBatchUpdate.Responses.$200>;
  /**
   * Wms.Inventory.ProductController.create - Creates a new product with its bar codes and its product categories
   *
   * Creates a new product with its bar codes and its product categories
   */
  "Wms.Inventory.ProductController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerCreate.Responses.$201>;
  /**
   * Wms.Inventory.BatchController.search - Searches batches given an optional criteria list
   *
   * Searches batches given an optional criteria list
   */
  "Wms.Inventory.BatchController.search"(
    parameters?: Parameters<Paths.WmsInventoryBatchControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.BatchController.post_search - Searches batches given an optional criteria list
   *
   * Searches batches given an optional criteria list
   */
  "Wms.Inventory.BatchController.post_search"(
    parameters?: Parameters<Paths.WmsInventoryBatchControllerPostSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.BatchController.show - Show a batch by given ID
   *
   * Show a batch by given ID
   */
  "Wms.Inventory.BatchController.show"(
    parameters?: Parameters<Paths.WmsInventoryBatchControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.BatchController.update - Update fields of batch by given ID
   *
   * Update fields of batch by given ID
   */
  "Wms.Inventory.BatchController.update"(
    parameters?: Parameters<Paths.WmsInventoryBatchControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductCategoryController.search - Lists the product_categories
   *
   * Lists the product_categories
   */
  "Wms.Inventory.ProductCategoryController.search"(
    parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductCategoryControllerSearch.Responses.$200>;
  /**
   * Wms.Inventory.ProductCategoryController.create - Creates and shows the new product_category according to given params
   *
   * Creates and shows the new product_category according to given params
   */
  "Wms.Inventory.ProductCategoryController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductCategoryControllerCreate.Responses.$201>;
  /**
   * Wms.Inventory.ProductCategoryController.show - Shows a product category by given ID
   *
   * Shows a product category by given ID
   */
  "Wms.Inventory.ProductCategoryController.show"(
    parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductCategoryControllerShow.Responses.$200>;
  /**
   * Wms.Inventory.ProductCategoryController.update - Updates fields of product_category by given id
   *
   * Updates fields of product_category by given id
   */
  "Wms.Inventory.ProductCategoryController.update"(
    parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductCategoryControllerUpdate.Responses.$200>;
  /**
   * Wms.Inventory.ProductCategoryController.delete - Deletes a product_category by given id
   *
   * Deletes a product_category by given id
   */
  "Wms.Inventory.ProductCategoryController.delete"(
    parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductController.o_search - Searches a list of products given a product params (open mode)
   * The parameters are optional
   *
   * Searches a list of products given a product params (open mode)
   * The parameters are optional
   */
  "Wms.Inventory.ProductController.o_search"(
    parameters?: Parameters<Paths.WmsInventoryProductControllerOSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerOSearch.Responses.$200>;
  /**
   * Wms.Inventory.ProductController.post_osearch - Searches a list of products given a product params (open mode)
   *
   * Searches a list of products given a product params (open mode)
   */
  "Wms.Inventory.ProductController.post_osearch"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerPostOsearch.Responses.$200>;
  /**
   * Wms.Inventory.ProductController.post_search - Searches a list of products given a product params
   * The parameters are optional
   *
   * Searches a list of products given a product params
   * The parameters are optional
   */
  "Wms.Inventory.ProductController.post_search"(
    parameters?: Parameters<Paths.WmsInventoryProductControllerPostSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerPostSearch.Responses.$200>;
  /**
   * Wms.Inventory.StockController.incoming_outgoing - Show incoming/outgoing movements resume.
   *
   * Show incoming/outgoing movements resume.
   */
  "Wms.Inventory.StockController.incoming_outgoing"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductController.upload - Create multiple products from a CSV file
   *
   * Create multiple products from a CSV file
   */
  "Wms.Inventory.ProductController.upload"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductController.show - Fetch a product
   *
   * Fetch a product
   */
  "Wms.Inventory.ProductController.show"(
    parameters?: Parameters<Paths.WmsInventoryProductControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerShow.Responses.$200>;
  /**
   * Wms.Inventory.ProductController.update - Updates a product
   *
   * Updates a product
   */
  "Wms.Inventory.ProductController.update"(
    parameters?: Parameters<Paths.WmsInventoryProductControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductControllerUpdate.Responses.$200>;
  /**
   * Wms.Inventory.ProductController.delete - Delete a product by given ID
   *
   * Delete a product by given ID
   */
  "Wms.Inventory.ProductController.delete"(
    parameters?: Parameters<Paths.WmsInventoryProductControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductController.attach - Attach a document with a product
   *
   * Attach a document with a product
   */
  "Wms.Inventory.ProductController.attach"(
    parameters?: Parameters<Paths.WmsInventoryProductControllerAttach.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.BatchController.search_by_product - Searches a list of batches given a product id
   *
   * Searches a list of batches given a product id
   */
  "Wms.Inventory.BatchController.search_by_product"(
    parameters?: Parameters<
      Paths.WmsInventoryBatchControllerSearchByProduct.PathParameters &
        Paths.WmsInventoryBatchControllerSearchByProduct.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.BatchController.create - Creates a batch
   *
   * Creates a batch
   */
  "Wms.Inventory.BatchController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductSkuController.search - Searches a list of product skus given a product id
   *
   * Searches a list of product skus given a product id
   */
  "Wms.Inventory.ProductSkuController.search"(
    parameters?: Parameters<
      Paths.WmsInventoryProductSkuControllerSearch.PathParameters &
        Paths.WmsInventoryProductSkuControllerSearch.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductSkuController.create - Creates a new product sku
   *
   * Creates a new product sku
   */
  "Wms.Inventory.ProductSkuController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductSkuControllerCreate.Responses.$201>;
  /**
   * Wms.Inventory.ProductSkuController.show - Gets a SKU of a product
   *
   * Gets a SKU of a product
   */
  "Wms.Inventory.ProductSkuController.show"(
    parameters?: Parameters<Paths.WmsInventoryProductSkuControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductSkuControllerShow.Responses.$200>;
  /**
   * Wms.Inventory.ProductSkuController.update - Updates a product sku
   *
   * Updates a product sku
   */
  "Wms.Inventory.ProductSkuController.update"(
    parameters?: Parameters<Paths.WmsInventoryProductSkuControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductSkuControllerUpdate.Responses.$200>;
  /**
   * Wms.Inventory.ProductSkuController.delete - Deletes a product sku
   *
   * Deletes a product sku
   */
  "Wms.Inventory.ProductSkuController.delete"(
    parameters?: Parameters<Paths.WmsInventoryProductSkuControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryProductSkuControllerDelete.Responses.$200>;
  /**
   * Wms.Inventory.StockController.index - Lists the stocks according the given parameters.
   *
   * Lists the stocks according the given parameters.
   */
  "Wms.Inventory.StockController.index"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerIndex.Responses.$200>;
  /**
   * Wms.Inventory.StockController.add - Adds a stock quantity.
   *
   * Adds a stock quantity.
   */
  "Wms.Inventory.StockController.add"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductQuantityAlertController.index - Lists the product_quantity_alerts according the given parameters
   *
   * Lists the product_quantity_alerts according the given parameters
   */
  "Wms.Inventory.ProductQuantityAlertController.index"(
    parameters?: Parameters<Paths.WmsInventoryProductQuantityAlertControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductQuantityAlertController.create - Creates or updates a product_quantity_alert
   *
   * Creates or updates a product_quantity_alert
   */
  "Wms.Inventory.ProductQuantityAlertController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductQuantityAlertController.show - Gets a product_quantity_alert by id
   *
   * Gets a product_quantity_alert by id
   */
  "Wms.Inventory.ProductQuantityAlertController.show"(
    parameters?: Parameters<Paths.WmsInventoryProductQuantityAlertControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.ProductQuantityAlertController.delete - Deletes a product_quantity_alert by id
   *
   * Deletes a product_quantity_alert by id
   */
  "Wms.Inventory.ProductQuantityAlertController.delete"(
    parameters?: Parameters<Paths.WmsInventoryProductQuantityAlertControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.availability - Lists the availability of a given product ID list
   * Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted.
   * Can receive a list in the query params
   *
   * Lists the availability of a given product ID list
   * Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted.
   * Can receive a list in the query params
   */
  "Wms.Inventory.StockController.availability"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerAvailability.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerAvailability.Responses.$200>;
  /**
   * Wms.Inventory.StockController.stock_availability_batch - Lists the batch availability of a given product ID
   *
   * Lists the batch availability of a given product ID
   */
  "Wms.Inventory.StockController.stock_availability_batch"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerStockAvailabilityBatch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerStockAvailabilityBatch.Responses.$200>;
  /**
   * Wms.Inventory.StockController.availability_batches - Lists the batch availability of a given product ID
   *
   * Lists the batch availability of a given product ID
   */
  "Wms.Inventory.StockController.availability_batches"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.post_availability - Lists the availability of a given product ID list, Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted. Can receive a list in the query params
   *
   * Lists the availability of a given product ID list, Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted. Can receive a list in the query params
   */
  "Wms.Inventory.StockController.post_availability"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerPostAvailability.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerPostAvailability.Responses.$200>;
  /**
   * Wms.Inventory.StockController.correct - Corrects the stock of a product in an specific location in the given warehouse
   *
   * Corrects the stock of a product in an specific location in the given warehouse
   */
  "Wms.Inventory.StockController.correct"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerCorrect.Responses.$201>;
  /**
   * Wms.Inventory.StockController.search_stock_corrections - Lists stock corrections filtering by following params
   *
   * Lists stock corrections filtering by following params
   */
  "Wms.Inventory.StockController.search_stock_corrections"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerSearchStockCorrections.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerSearchStockCorrections.Responses.$200>;
  /**
   * Wms.Inventory.StockController.count - Totalize the stocks according the given parameters
   *
   * Totalize the stocks according the given parameters
   */
  "Wms.Inventory.StockController.count"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.expiring - Lists the stocks with expiring date ascendant according to the given
   * parameters.
   *
   * Lists the stocks with expiring date ascendant according to the given
   * parameters.
   */
  "Wms.Inventory.StockController.expiring"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerExpiring.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockHistoryController.historical_data - Lists a historical of stocks transactions filtered by user's tenant.
   *
   * Lists a historical of stocks transactions filtered by user's tenant.
   */
  "Wms.Inventory.StockHistoryController.historical_data"(
    parameters?: Parameters<Paths.WmsInventoryStockHistoryControllerHistoricalData.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockHistoryControllerHistoricalData.Responses.$200>;
  /**
   * Wms.Inventory.StockHistoryController.historical_data_csv - Responses a CSV with a historical of stocks transactions filtered by user's tenant.
   *
   * Responses a CSV with a historical of stocks transactions filtered by user's tenant.
   */
  "Wms.Inventory.StockHistoryController.historical_data_csv"(
    parameters?: Parameters<Paths.WmsInventoryStockHistoryControllerHistoricalDataCsv.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.move - Moves a stock quantity from origin_location to destination_location
   *
   * Moves a stock quantity from origin_location to destination_location
   */
  "Wms.Inventory.StockController.move"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.occupied_locations - Report occupied positions tock according to given ID
   *
   * Report occupied positions tock according to given ID
   */
  "Wms.Inventory.StockController.occupied_locations"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.search_by_product_and_location - Lists the stocks grouped by product and location according to the given params
   *
   * Lists the stocks grouped by product and location according to the given params
   */
  "Wms.Inventory.StockController.search_by_product_and_location"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerSearchByProductAndLocation.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerSearchByProductAndLocation.Responses.$200>;
  /**
   * Wms.Inventory.StockController.remove - Removes a stock quantity
   *
   * Removes a stock quantity
   */
  "Wms.Inventory.StockController.remove"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.summary_stock_csv - Responses a CSV with the summary stock according to given list of
   * warehouse IDs and list of product IDs
   * if product IDs are not provided, it returns all products
   * if warehouse IDs are not provided, it returns all warehouses
   *
   * Responses a CSV with the summary stock according to given list of
   * warehouse IDs and list of product IDs
   * if product IDs are not provided, it returns all products
   * if warehouse IDs are not provided, it returns all warehouses
   */
  "Wms.Inventory.StockController.summary_stock_csv"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerSummaryStockCsv.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.search - Lists the stocks according the given parameters.
   *
   * Lists the stocks according the given parameters.
   */
  "Wms.Inventory.StockController.search"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockStateController.index - Lists the stock states according the given parameters
   *
   * Lists the stock states according the given parameters
   */
  "Wms.Inventory.StockStateController.index"(
    parameters?: Parameters<Paths.WmsInventoryStockStateControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockStateController.create - Creates a new stock state
   *
   * Creates a new stock state
   */
  "Wms.Inventory.StockStateController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockStateController.show - Fetch a stock state with by given id
   *
   * Fetch a stock state with by given id
   */
  "Wms.Inventory.StockStateController.show"(
    parameters?: Parameters<Paths.WmsInventoryStockStateControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.summary_stock - Returns a stock summary grouped by products
   * Can be filter by an specific list of warehouses and products
   *
   * Returns a stock summary grouped by products
   * Can be filter by an specific list of warehouses and products
   */
  "Wms.Inventory.StockController.summary_stock"(
    parameters?: Parameters<Paths.WmsInventoryStockControllerSummaryStock.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsInventoryStockControllerSummaryStock.Responses.$200>;
  /**
   * Wms.Inventory.StockThresholdController.index - Lists the stock_thresholds according the given parameters
   *
   * Lists the stock_thresholds according the given parameters
   */
  "Wms.Inventory.StockThresholdController.index"(
    parameters?: Parameters<Paths.WmsInventoryStockThresholdControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockThresholdController.merge - Creates or updates a stock threshold. For updating the id of the existing stock threshold must be sent. Product id and location id must be unique per stock threshold
   *
   * Creates or updates a stock threshold. For updating the id of the existing stock threshold must be sent. Product id and location id must be unique per stock threshold
   */
  "Wms.Inventory.StockThresholdController.merge"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockThresholdController.replenish - Calculates replenishment items according to given params
   *
   * Calculates replenishment items according to given params
   */
  "Wms.Inventory.StockThresholdController.replenish"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockThresholdController.show - Gets a stock_threshold by id
   *
   * Gets a stock_threshold by id
   */
  "Wms.Inventory.StockThresholdController.show"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockThresholdController.delete - Deletes a stock_threshold by ID
   *
   * Deletes a stock_threshold by ID
   */
  "Wms.Inventory.StockThresholdController.delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.StockController.update_field - Updates a specific field on stock controller
   *
   * Updates a specific field on stock controller
   */
  "Wms.Inventory.StockController.update_field"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.InventoryController.show - Show a inventory given ID
   *
   * Show a inventory given ID
   */
  "Wms.Inventory.InventoryController.show"(
    parameters?: Parameters<Paths.WmsInventoryInventoryControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.InventoryController.update - update a inventory given ID
   *
   * update a inventory given ID
   */
  "Wms.Inventory.InventoryController.update"(
    parameters?: Parameters<Paths.WmsInventoryInventoryControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Inventory.InventoryController.delete - Delete a inventory given Id
   *
   * Delete a inventory given Id
   */
  "Wms.Inventory.InventoryController.delete"(
    parameters?: Parameters<Paths.WmsInventoryInventoryControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Kitting.KittingTaskController.search - Searches a list of kitting tasks
   *
   * Searches a list of kitting tasks
   */
  "Wms.Kitting.KittingTaskController.search"(
    parameters?: Parameters<Paths.WmsKittingKittingTaskControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Kitting.KittingTaskController.create - Creates a Kitting task
   *
   * Creates a Kitting task
   */
  "Wms.Kitting.KittingTaskController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Kitting.KittingTaskController.show - Fetch a kitting task by given id
   *
   * Fetch a kitting task by given id
   */
  "Wms.Kitting.KittingTaskController.show"(
    parameters?: Parameters<Paths.WmsKittingKittingTaskControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Kitting.KittingTaskController.update - update a kit given ID
   *
   * update a kit given ID
   */
  "Wms.Kitting.KittingTaskController.update"(
    parameters?: Parameters<Paths.WmsKittingKittingTaskControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Kitting.KittingTaskController.cancel - Cancels a kitting task
   *
   * Cancels a kitting task
   */
  "Wms.Kitting.KittingTaskController.cancel"(
    parameters?: Parameters<Paths.WmsKittingKittingTaskControllerCancel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Merchant.MerchantController.search -  Searches a list of merchants by given parameters. The parameters are optional
   *
   *  Searches a list of merchants by given parameters. The parameters are optional
   */
  "Wms.Merchant.MerchantController.search"(
    parameters?: Parameters<Paths.WmsMerchantMerchantControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantMerchantControllerSearch.Responses.$200>;
  /**
   * Wms.Merchant.MerchantController.create - Create a Merchant
   *
   * Create a Merchant
   */
  "Wms.Merchant.MerchantController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantMerchantControllerCreate.Responses.$201>;
  /**
   * Wms.Merchant.MerchantController.show -  Get a single Merchant
   *
   *  Get a single Merchant
   */
  "Wms.Merchant.MerchantController.show"(
    parameters?: Parameters<Paths.WmsMerchantMerchantControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantMerchantControllerShow.Responses.$200>;
  /**
   * Wms.Merchant.MerchantController.update - Updates a merchant by a given ID
   *
   * Updates a merchant by a given ID
   */
  "Wms.Merchant.MerchantController.update"(
    parameters?: Parameters<Paths.WmsMerchantMerchantControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantMerchantControllerUpdate.Responses.$200>;
  /**
   * Wms.Merchant.ChannelController.search - Searches a list of channels by given parameters. The parameters are optional
   *
   * Searches a list of channels by given parameters. The parameters are optional
   */
  "Wms.Merchant.ChannelController.search"(
    parameters?: Parameters<Paths.WmsMerchantChannelControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantChannelControllerSearch.Responses.$200>;
  /**
   * Wms.Merchant.ChannelController.create - Create a Channel
   *
   * Create a Channel
   */
  "Wms.Merchant.ChannelController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantChannelControllerCreate.Responses.$201>;
  /**
   * Wms.Merchant.ChannelController.get_channel -  Get the channel
   *
   *  Get the channel
   */
  "Wms.Merchant.ChannelController.get_channel"(
    parameters?: Parameters<Paths.WmsMerchantChannelControllerGetChannel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantChannelControllerGetChannel.Responses.$200>;
  /**
   * Wms.Merchant.ChannelController.update_channel -  Update the merchant channel
   *
   *  Update the merchant channel
   */
  "Wms.Merchant.ChannelController.update_channel"(
    parameters?: Parameters<Paths.WmsMerchantChannelControllerUpdateChannel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsMerchantChannelControllerUpdateChannel.Responses.$200>;
  /**
   * Wms.Notification.NotificationController.index - Searches a list of notifications according to given params
   *
   * Searches a list of notifications according to given params
   */
  "Wms.Notification.NotificationController.index"(
    parameters?: Parameters<Paths.WmsNotificationNotificationControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Notification.NotificationController.show - Shows a notification by given id
   *
   * Shows a notification by given id
   */
  "Wms.Notification.NotificationController.show"(
    parameters?: Parameters<Paths.WmsNotificationNotificationControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Notification.NotificationController.update - Updates a notification by given ID
   *
   * Updates a notification by given ID
   */
  "Wms.Notification.NotificationController.update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Notification.NotificationController.delete - Deletes a notification by given id
   *
   * Deletes a notification by given id
   */
  "Wms.Notification.NotificationController.delete"(
    parameters?: Parameters<Paths.WmsNotificationNotificationControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.ShipmentBoxTemplateController.search - Searches a list of shipment box given params
   *
   * Searches a list of shipment box given params
   */
  "Wms.Packing.ShipmentBoxTemplateController.search"(
    parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.ShipmentBoxTemplateController.create - Creates a shipment box template definition
   *
   * Creates a shipment box template definition
   */
  "Wms.Packing.ShipmentBoxTemplateController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingBoxController.fetch_attachments - Fetches attachments from a list of packing box IDs
   *
   * Fetches attachments from a list of packing box IDs
   */
  "Wms.Packing.PackingBoxController.fetch_attachments"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerFetchAttachments.Responses.$200>;
  /**
   * Wms.Packing.PackingBoxController.register_attachment_in_bulk - Register file metadata from s3 response in bulk for packing boxes
   *
   * Register file metadata from s3 response in bulk for packing boxes
   */
  "Wms.Packing.PackingBoxController.register_attachment_in_bulk"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerRegisterAttachmentInBulk.Responses.$200>;
  /**
   * Wms.Packing.ShipmentBoxTemplateController.show - Show shipment box data according to the given id
   *
   * Show shipment box data according to the given id
   */
  "Wms.Packing.ShipmentBoxTemplateController.show"(
    parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.ShipmentBoxTemplateController.update - updates a shipment box given ID
   *
   * updates a shipment box given ID
   */
  "Wms.Packing.ShipmentBoxTemplateController.update"(
    parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.ShipmentBoxTemplateController.delete - Deletes a shipment box data according to the given id
   *
   * Deletes a shipment box data according to the given id
   */
  "Wms.Packing.ShipmentBoxTemplateController.delete"(
    parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.packing_locations - List the available packing locations for a picking task
   *
   * List the available packing locations for a picking task
   */
  "Wms.Packing.PackingOrderController.packing_locations"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerPackingLocations.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.search - Searches a list of packing orders given a packing order params
   *
   * Searches a list of packing orders given a packing order params
   */
  "Wms.Packing.PackingOrderController.search"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingOrderControllerSearch.Responses.$200>;
  /**
   * Wms.Packing.ShipmentTrackingController.bulk_actions - Operate create and update actions over Shipment Trackings.
   *
   * This endpoint works as bulk, it means that if any shipment trackings creation or update fails it will continue with the others until the end.
   */
  "Wms.Packing.ShipmentTrackingController.bulk_actions"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerBulkActions.Responses.$200>;
  /**
   * Wms.Packing.PackingBoxController.index - Searches a list of packing boxes. Can paginate, sending the query parameters: limit and offset, otherwise the
   * default limit and offset are 0 and 10
   *
   * Searches a list of packing boxes. Can paginate, sending the query parameters: limit and offset, otherwise the
   * default limit and offset are 0 and 10
   */
  "Wms.Packing.PackingBoxController.index"(
    parameters?: Parameters<Paths.WmsPackingPackingBoxControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerIndex.Responses.$200>;
  /**
   * Wms.Packing.PackingOrderController.bulk_actions - Operate actions over packing orders
   *
   * Operate actions over packing orders
   */
  "Wms.Packing.PackingOrderController.bulk_actions"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingOrderControllerBulkActions.Responses.$201>;
  /**
   * Wms.Packing.PackingOrderController.post_search - Searches a list of packing orders given a packing order params
   *
   * Searches a list of packing orders given a packing order params
   */
  "Wms.Packing.PackingOrderController.post_search"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerPostSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingOrderControllerPostSearch.Responses.$200>;
  /**
   * Wms.Packing.PackingOrderController.show - Shows a packing order by given ID
   *
   * Shows a packing order by given ID
   */
  "Wms.Packing.PackingOrderController.show"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingOrderControllerShow.Responses.$200>;
  /**
   * Wms.Packing.PackingOrderController.accept - Assign a packing order to a user
   *
   * Assign a packing order to a user
   */
  "Wms.Packing.PackingOrderController.accept"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerAccept.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.assign - Assigns owner to packing order
   *
   * Assigns owner to packing order
   */
  "Wms.Packing.PackingOrderController.assign"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerAssign.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.close -  Closes a packing order
   *
   *  Closes a packing order
   */
  "Wms.Packing.PackingOrderController.close"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerClose.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.finish - Finishes a packing order
   *
   * Finishes a packing order
   */
  "Wms.Packing.PackingOrderController.finish"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerFinish.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.lock -  Locks a packing order
   *
   *  Locks a packing order
   */
  "Wms.Packing.PackingOrderController.lock"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerLock.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.missing - Reports missing quantities for an apparently good finished packing order
   *
   * Reports missing quantities for an apparently good finished packing order
   */
  "Wms.Packing.PackingOrderController.missing"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerMissing.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.shipping_locations - List the available shipping locations for a packing task
   *
   * List the available shipping locations for a packing task
   */
  "Wms.Packing.PackingOrderController.shipping_locations"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerShippingLocations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingOrderController.unlock - Unlocks a packing order
   *
   * Unlocks a packing order
   */
  "Wms.Packing.PackingOrderController.unlock"(
    parameters?: Parameters<Paths.WmsPackingPackingOrderControllerUnlock.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Packing.PackingBoxController.create_box - creates a packing box according to the given params in
   * request_params
   *
   * creates a packing box according to the given params in
   * request_params
   */
  "Wms.Packing.PackingBoxController.create_box"(
    parameters?: Parameters<Paths.WmsPackingPackingBoxControllerCreateBox.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerCreateBox.Responses.$201>;
  /**
   * Wms.Packing.PackingBoxController.search - Searches a list of packing boxes given a packing order ID. Can paginate, sending the query parameters: limit and offset, otherwise the
   * default limit and offset are 0 and 10
   *
   * Searches a list of packing boxes given a packing order ID. Can paginate, sending the query parameters: limit and offset, otherwise the
   * default limit and offset are 0 and 10
   */
  "Wms.Packing.PackingBoxController.search"(
    parameters?: Parameters<
      Paths.WmsPackingPackingBoxControllerSearch.PathParameters &
        Paths.WmsPackingPackingBoxControllerSearch.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerSearch.Responses.$200>;
  /**
   * Wms.Packing.PackingBoxController.create - creates a list of packing boxes according to the given params in
   * request_params
   *
   * creates a list of packing boxes according to the given params in
   * request_params
   */
  "Wms.Packing.PackingBoxController.create"(
    parameters?: Parameters<Paths.WmsPackingPackingBoxControllerCreate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerCreate.Responses.$201>;
  /**
   * Wms.Packing.PackingBoxController.show - Show packing box data according to the given id
   *
   * Show packing box data according to the given id
   */
  "Wms.Packing.PackingBoxController.show"(
    parameters?: Parameters<Paths.WmsPackingPackingBoxControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerShow.Responses.$200>;
  /**
   * Wms.Packing.PackingBoxController.update - Updates packing box according to the given id
   * Updatable fields in packing boxes are: attributes
   *
   * Updates packing box according to the given id
   * Updatable fields in packing boxes are: attributes
   */
  "Wms.Packing.PackingBoxController.update"(
    parameters?: Parameters<Paths.WmsPackingPackingBoxControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerUpdate.Responses.$200>;
  /**
   * Wms.Packing.PackingBoxController.upload_attachment - Attach a document with a packing box
   *
   * Attach a document with a packing box
   */
  "Wms.Packing.PackingBoxController.upload_attachment"(
    parameters?: Parameters<Paths.WmsPackingPackingBoxControllerUploadAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerUploadAttachment.Responses.$200>;
  /**
   * Wms.Packing.PackingBoxController.register_attachment - Register file metadata from s3 response
   *
   * Register file metadata from s3 response
   */
  "Wms.Packing.PackingBoxController.register_attachment"(
    parameters?: Parameters<Paths.WmsPackingPackingBoxControllerRegisterAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingPackingBoxControllerRegisterAttachment.Responses.$201>;
  /**
   * Wms.Packing.ShipmentTrackingController.search - Searches shipment trackings given a packing box ID
   *
   * Searches shipment trackings given a packing box ID
   */
  "Wms.Packing.ShipmentTrackingController.search"(
    parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerSearch.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerSearch.Responses.$200>;
  /**
   * Wms.Packing.ShipmentTrackingController.create - Creates shipment tracking information for a packing box according to the given ID,
   * which will be related to its attachment information
   *
   * Creates shipment tracking information for a packing box according to the given ID,
   * which will be related to its attachment information
   */
  "Wms.Packing.ShipmentTrackingController.create"(
    parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerCreate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerCreate.Responses.$201>;
  /**
   * Wms.Packing.ShipmentTrackingController.show - Shows a shipment tracking data according to the given ID
   *
   * Shows a shipment tracking data according to the given ID
   */
  "Wms.Packing.ShipmentTrackingController.show"(
    parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerShow.Responses.$200>;
  /**
   * Wms.Packing.ShipmentTrackingController.update - Updates field of a shipment tracking by a given ID
   *
   * Updates field of a shipment tracking by a given ID
   */
  "Wms.Packing.ShipmentTrackingController.update"(
    parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerUpdate.Responses.$200>;
  /**
   * Wms.Packing.ShipmentTrackingController.delete - Deletes a shipment tracking data according to the given id
   *
   * Deletes a shipment tracking data according to the given id
   */
  "Wms.Packing.ShipmentTrackingController.delete"(
    parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.Bulk.BulkPickingOrderController.bulk_create - Creates a list of picking orders according to the given params, this endpoint works as bulk, it
   * means that if any picking creation fails it will continue with the others until the end.
   *
   * Creates a list of picking orders according to the given params, this endpoint works as bulk, it
   * means that if any picking creation fails it will continue with the others until the end.
   */
  "Wms.Picking.Bulk.BulkPickingOrderController.bulk_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPickingBulkBulkPickingOrderControllerBulkCreate.Responses.$201>;
  /**
   * Wms.Picking.Bulk.BulkPickingOrderController.bulk_turbo_create - Creates a list of picking orders according to the given params, this endpoint works as bulk, it
   * means that if any picking creation fails it will continue with the others until the end.
   * This endpoint works asynchronously and returns 204 No content
   *
   * Creates a list of picking orders according to the given params, this endpoint works as bulk, it
   * means that if any picking creation fails it will continue with the others until the end.
   * This endpoint works asynchronously and returns 204 No content
   */
  "Wms.Picking.Bulk.BulkPickingOrderController.bulk_turbo_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.CartBoxController.search - Searches a list of cart box given params
   *
   * Searches a list of cart box given params
   */
  "Wms.Picking.CartBoxController.search"(
    parameters?: Parameters<Paths.WmsPickingCartBoxControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.CartBoxController.create - Creates a cart box template definition
   *
   * Creates a cart box template definition
   */
  "Wms.Picking.CartBoxController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.CartBoxController.assign_cartbox - Assign a cart box with a sales order, if the cart box does not exist,
   * this process creates a new one
   * Assign a cartbox with a sales order according the given barcode
   *
   * Assign a cart box with a sales order, if the cart box does not exist,
   * this process creates a new one
   * Assign a cartbox with a sales order according the given barcode
   */
  "Wms.Picking.CartBoxController.assign_cartbox"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.CartBoxController.show - Show cart box data according to the given id
   *
   * Show cart box data according to the given id
   */
  "Wms.Picking.CartBoxController.show"(
    parameters?: Parameters<Paths.WmsPickingCartBoxControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.CartBoxController.update - updates a cart box given ID
   *
   * updates a cart box given ID
   */
  "Wms.Picking.CartBoxController.update"(
    parameters?: Parameters<Paths.WmsPickingCartBoxControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.search - Searches a list of picking orders given a picking order params.
   *
   * Searches a list of picking orders given a picking order params.
   */
  "Wms.Picking.PickingOrderController.search"(
    parameters?: Parameters<Paths.WmsPickingPickingOrderControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPickingPickingOrderControllerSearch.Responses.$200>;
  /**
   * Wms.Picking.PickingOrderController.create - creates a list of picking orders according to the given params
   *
   * creates a list of picking orders according to the given params
   */
  "Wms.Picking.PickingOrderController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.turbo_create - creates a list of turbo label picking orders according to the given params.
   * This endpoint works asynchronously and returns 204 No content
   *
   * creates a list of turbo label picking orders according to the given params.
   * This endpoint works asynchronously and returns 204 No content
   */
  "Wms.Picking.PickingOrderController.turbo_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.show - Show a picking order by given id.
   *
   *
   * Show a picking order by given id.
   *
   */
  "Wms.Picking.PickingOrderController.show"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.delete - Deletes a picking order
   *
   *
   * Deletes a picking order
   *
   */
  "Wms.Picking.PickingOrderController.delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.accept - Assign a picking order to a user and set the state to "taken"
   *
   *
   * Assign a picking order to a user and set the state to "taken"
   *
   */
  "Wms.Picking.PickingOrderController.accept"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.assign - Assign a picking order with state "queue" to a user
   *
   *
   * Assign a picking order with state "queue" to a user
   *
   */
  "Wms.Picking.PickingOrderController.assign"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.finish - Finishes a picking order.
   *
   * changes the status of sales order and moves the stock from the user to packing location.
   * If all picking orders associated to sales order were ended then creates a packing order.
   */
  "Wms.Picking.PickingOrderController.finish"(
    parameters?: Parameters<Paths.WmsPickingPickingOrderControllerFinish.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.finish_partial - Finishes a picking order partially.
   *
   * moves the stock from the user to packing location.
   */
  "Wms.Picking.PickingOrderController.finish_partial"(
    parameters?: Parameters<Paths.WmsPickingPickingOrderControllerFinishPartial.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.pick - Picks a list of picking item batches
   *
   *
   * Picks a list of picking item batches
   *
   */
  "Wms.Picking.PickingOrderController.pick"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.create_route - Creates a list of route items based the given picking order, By default
   * the route item algorithm is based in near locations except when the product is
   * lot type
   *
   *
   * Creates a list of route items based the given picking order, By default
   * the route item algorithm is based in near locations except when the product is
   * lot type
   *
   */
  "Wms.Picking.PickingOrderController.create_route"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.create_location_route - Creates a list of route items based the given picking order, The route item
   * algorithm is based in near locations.
   *
   *
   * Creates a list of route items based the given picking order, The route item
   * algorithm is based in near locations.
   *
   */
  "Wms.Picking.PickingOrderController.create_location_route"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.split - Split a list of picking orders according to the given params
   *
   *
   * Split a list of picking orders according to the given params
   *
   */
  "Wms.Picking.PickingOrderController.split"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.unassign - Unassign a picking order from a user and set the state to "queue"
   *
   *
   * Unassign a picking order from a user and set the state to "queue"
   *
   */
  "Wms.Picking.PickingOrderController.unassign"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Picking.PickingOrderController.unlock - Unlocks a picking order. Sets the state to `queue`
   *
   * Unlocks a picking order. Sets the state to `queue`
   */
  "Wms.Picking.PickingOrderController.unlock"(
    parameters?: Parameters<Paths.WmsPickingPickingOrderControllerUnlock.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsPickingPickingOrderControllerUnlock.Responses.$200>;
  /**
   * Wms.Reason.ReasonCodeController.search - List reason codes
   *
   * List reason codes
   */
  "Wms.Reason.ReasonCodeController.search"(
    parameters?: Parameters<Paths.WmsReasonReasonCodeControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReasonReasonCodeControllerSearch.Responses.$200>;
  /**
   * Wms.Reason.ReasonCodeController.create - Creates new reason codes according to given params
   *
   * Creates new reason codes according to given params
   */
  "Wms.Reason.ReasonCodeController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReasonReasonCodeControllerCreate.Responses.$201>;
  /**
   * Wms.Reason.ReasonCodeController.update - Updates a reason code by a given ID
   *
   * Updates a reason code by a given ID
   */
  "Wms.Reason.ReasonCodeController.update"(
    parameters?: Parameters<Paths.WmsReasonReasonCodeControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReasonReasonCodeControllerUpdate.Responses.$200>;
  /**
   * Wms.Reception.Bulk.BulkPurchaseOrderController.bulk_update - Update Purchase orders in bulk.
   *
   * This endpoint works as bulk, it means that if any Purchase order update fails it will continue with the others until the end.
   */
  "Wms.Reception.Bulk.BulkPurchaseOrderController.bulk_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReceptionBulkBulkPurchaseOrderControllerBulkUpdate.Responses.$201>;
  /**
   * Wms.Reception.Bulk.BulkPurchaseOrderController.bulk_create - Create purchase orders in bulk.
   *
   * This endpoint works as bulk, it means that if any purchase order creation fails it will continue with the others until the end.
   */
  "Wms.Reception.Bulk.BulkPurchaseOrderController.bulk_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReceptionBulkBulkPurchaseOrderControllerBulkCreate.Responses.$201>;
  /**
   * Wms.Reception.IncomingGoodController.search - Search incoming goods according to params
   *
   * Search incoming goods according to params
   */
  "Wms.Reception.IncomingGoodController.search"(
    parameters?: Parameters<Paths.WmsReceptionIncomingGoodControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.IncomingGoodController.create - creates an incoming good according to given params
   *
   * creates an incoming good according to given params
   */
  "Wms.Reception.IncomingGoodController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.IncomingGoodController.turbo_reception - creates an incoming good according to a purchase order
   *
   * creates an incoming good according to a purchase order
   */
  "Wms.Reception.IncomingGoodController.turbo_reception"(
    parameters?: Parameters<
      Paths.WmsReceptionIncomingGoodControllerTurboReception.PathParameters &
        Paths.WmsReceptionIncomingGoodControllerTurboReception.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.IncomingGoodController.show - Search an Incoming good document by valid id
   *
   * Search an Incoming good document by valid id
   */
  "Wms.Reception.IncomingGoodController.show"(
    parameters?: Parameters<Paths.WmsReceptionIncomingGoodControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.IncomingGoodController.upload_item_attachment - Attach a document with an Incoming Good Item
   *
   * Attach a document with an Incoming Good Item
   */
  "Wms.Reception.IncomingGoodController.upload_item_attachment"(
    parameters?: Parameters<Paths.WmsReceptionIncomingGoodControllerUploadItemAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.PurchaseOrderController.search - Searches a list of purchase orders given a purchase order params
   *
   * Searches a list of purchase orders given a purchase order params
   */
  "Wms.Reception.PurchaseOrderController.search"(
    parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerSearch.Responses.$200>;
  /**
   * Wms.Reception.PurchaseOrderController.create - Create a purchase order
   *
   * Create a purchase order
   */
  "Wms.Reception.PurchaseOrderController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerCreate.Responses.$201>;
  /**
   * Wms.Reception.PurchaseOrderController.upload - Create multiple purchase orders from a CSV file
   *
   * Create multiple purchase orders from a CSV file
   */
  "Wms.Reception.PurchaseOrderController.upload"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.PurchaseOrderController.show - Show a purchase order by given id
   *
   * Show a purchase order by given id
   */
  "Wms.Reception.PurchaseOrderController.show"(
    parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerShow.Responses.$200>;
  /**
   * Wms.Reception.PurchaseOrderController.update - Updates a purchase order
   *
   * Updates a purchase order
   */
  "Wms.Reception.PurchaseOrderController.update"(
    parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.PurchaseOrderController.update_field - Updates a specific field on purchase order
   *
   * Updates a specific field on purchase order
   */
  "Wms.Reception.PurchaseOrderController.update_field"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.PurchaseOrderController.delete - Delete a purchase order by given id
   *
   * Delete a purchase order by given id
   */
  "Wms.Reception.PurchaseOrderController.delete"(
    parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.PurchaseOrderController.upload_attachment - Attach a document with a purchase order
   *
   * Attach a document with a purchase order
   */
  "Wms.Reception.PurchaseOrderController.upload_attachment"(
    parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerUploadAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Reception.PurchaseOrderController.delete_attachment - Delete attachments
   *
   * Delete attachments
   */
  "Wms.Reception.PurchaseOrderController.delete_attachment"(
    parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerDeleteAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerDeleteAttachment.Responses.$200>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.search - Searches a list of replenishment orders
   *
   * Searches a list of replenishment orders
   */
  "Wms.Replenishment.ReplenishmentOrderController.search"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.create - Creates a manual replenishment order according to given params
   *
   * Creates a manual replenishment order according to given params
   */
  "Wms.Replenishment.ReplenishmentOrderController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.alerts - Create replenishment order based on product quantity alert ids
   *
   * Create replenishment order based on product quantity alert ids
   */
  "Wms.Replenishment.ReplenishmentOrderController.alerts"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.merge_orders - Merges a list of replenishment orders into one
   *
   * Merges a list of replenishment orders into one
   */
  "Wms.Replenishment.ReplenishmentOrderController.merge_orders"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.show - Gets a replenishment order by id
   *
   * Gets a replenishment order by id
   */
  "Wms.Replenishment.ReplenishmentOrderController.show"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.accept - Assign a replenishment order to a user and set the state to `taken`
   *
   * Assign a replenishment order to a user and set the state to `taken`
   */
  "Wms.Replenishment.ReplenishmentOrderController.accept"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerAccept.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.update_owner - Updates the owner_id from a replenishment order
   *
   * Updates the owner_id from a replenishment order
   */
  "Wms.Replenishment.ReplenishmentOrderController.update_owner"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerUpdateOwner.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.cancel - Cancels a replenishment order to a user
   *
   * Cancels a replenishment order to a user
   */
  "Wms.Replenishment.ReplenishmentOrderController.cancel"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerCancel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.finish - Ends a replenishment order
   *
   * Ends a replenishment order
   */
  "Wms.Replenishment.ReplenishmentOrderController.finish"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerFinish.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.items - Moves a list of items from a location to another location
   *
   * Moves a list of items from a location to another location
   */
  "Wms.Replenishment.ReplenishmentOrderController.items"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerItems.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.pick_item - Picks an item in the replenishment order
   *
   * Picks an item in the replenishment order
   */
  "Wms.Replenishment.ReplenishmentOrderController.pick_item"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerPickItem.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.create_route - Creates a list of replenishment route items
   *
   * Creates a list of replenishment route items
   */
  "Wms.Replenishment.ReplenishmentOrderController.create_route"(
    parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerCreateRoute.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.split_order - Split a replenishment order according to the given params
   *
   *
   * Split a replenishment order according to the given params
   *
   */
  "Wms.Replenishment.ReplenishmentOrderController.split_order"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Replenishment.ReplenishmentOrderController.split_item - Splits a replenishment item when the destination location change
   *
   * Splits a replenishment item when the destination location change
   */
  "Wms.Replenishment.ReplenishmentOrderController.split_item"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.Bulk.BulkSalesOrderController.bulk_update - Update sales orders in bulk.
   *
   * This endpoint works as bulk, it means that if any sales order update fails it will continue with the others until the end.
   */
  "Wms.Sales.Bulk.BulkSalesOrderController.bulk_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkUpdate.Responses.$201>;
  /**
   * Wms.Sales.Bulk.BulkSalesOrderController.bulk_create -  Create sales orders in bulk.
   *
   * This endpoint works as bulk, it means that if any sales order creation fails it will continue with the others until the end.
   */
  "Wms.Sales.Bulk.BulkSalesOrderController.bulk_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkCreate.Responses.$201>;
  /**
   * Wms.Sales.Bulk.BulkSalesOrderController.bulk_cancel - Cancel sales orders in bulk.
   *
   * Cancel payload have multiple formats due to different ways to specify which sales orders should be deleted:
   * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
   * * A list of order_nums: E.G. `["order_num1", ...]`
   * * A list of structs with id: E.G. `[%{id: 1}, ...]`
   * * A list of ids: E.G. `[1, ...]`
   */
  "Wms.Sales.Bulk.BulkSalesOrderController.bulk_cancel"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.Bulk.BulkFulfillmentOrderController.bulk_pause - Pause fulfillment orders in bulk.
   *
   * Pause payload have multiple formats due to different ways to specify which fulfillment orders should be paused:
   * * A list of structs with id: E.G. `[%{id: 1}, ...]`
   * * A list of ids: E.G. `[1, ...]`
   */
  "Wms.Sales.Bulk.BulkFulfillmentOrderController.bulk_pause"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.Bulk.BulkFulfillmentOrderController.bulk_resume - Resume fulfillment orders in bulk.
   *
   * Resume payload have multiple formats due to different ways to specify which fulfillment orders should be resumed:
   * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
   * * A list of order_nums: E.G. `["order_num1", ...]`
   * * A list of structs with id: E.G. `[%{id: 1}, ...]`
   * * A list of ids: E.G. `[1, ...]`
   */
  "Wms.Sales.Bulk.BulkFulfillmentOrderController.bulk_resume"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.Bulk.BulkSalesOrderController.bulk_pause - Pause sales orders in bulk.
   *
   * Pause payload have multiple formats due to different ways to specify which sales orders should be deleted:
   * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
   * * A list of order_nums: E.G. `["order_num1", ...]`
   * * A list of structs with id: E.G. `[%{id: 1}, ...]`
   * * A list of ids: E.G. `[1, ...]`
   */
  "Wms.Sales.Bulk.BulkSalesOrderController.bulk_pause"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.Bulk.BulkSalesOrderController.bulk_quick_create -  Create quick orders in bulk.
   *
   * This endpoint works as bulk, it means that if any sales order creation fails it will continue with the others until the end.
   */
  "Wms.Sales.Bulk.BulkSalesOrderController.bulk_quick_create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkQuickCreate.Responses.$201>;
  /**
   * Wms.Sales.Bulk.BulkSalesOrderController.bulk_resume - Resume sales orders in bulk.
   *
   * Resume payload have multiple formats due to different ways to specify which sales orders should be resumed:
   * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
   * * A list of order_nums: E.G. `["order_num1", ...]`
   * * A list of structs with id: E.G. `[%{id: 1}, ...]`
   * * A list of ids: E.G. `[1, ...]`
   */
  "Wms.Sales.Bulk.BulkSalesOrderController.bulk_resume"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkResume.Responses.$201>;
  /**
   * Wms.Sales.Bulk.BulkSalesOrderController.bulk_attach_return_labels - Bulk attach return labels to sales_orders
   *
   * Bulk attach return labels to sales_orders requires two parameters
   * * A list of sales order ids: E.G. `[1, ...]`
   * * A list of return labels codes
   */
  "Wms.Sales.Bulk.BulkSalesOrderController.bulk_attach_return_labels"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.search - Search Sales Orders, searches a list of existing sales orders given some of the following params
   *
   * Search Sales Orders, searches a list of existing sales orders given some of the following params
   */
  "Wms.Sales.SalesOrderController.search"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerSearch.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.create - Create and show the new sales order according to given params
   *
   * Create and show the new sales order according to given params
   */
  "Wms.Sales.SalesOrderController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerCreate.Responses.$201>;
  /**
   * Wms.Sales.SalesOrderController.filter_criteria - Search a list of sales orders according to given criteria
   *
   * Search a list of sales orders according to given criteria
   */
  "Wms.Sales.SalesOrderController.filter_criteria"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerFilterCriteria.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.FulfillmentOrderController.search - Search Fulfillment Orders, searches a list of existing fulfillment orders given some of the following params
   *
   * Search Fulfillment Orders, searches a list of existing fulfillment orders given some of the following params
   */
  "Wms.Sales.FulfillmentOrderController.search"(
    parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerSearch.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.products_summary
   */
  "Wms.Sales.SalesOrderController.products_summary"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.create_quick_sales - Create quick sales order
   * Creates a sales orders ended with a picking, a packing and a stock movement
   * No webhooks are triggered in this process
   *
   * Create quick sales order
   * Creates a sales orders ended with a picking, a packing and a stock movement
   * No webhooks are triggered in this process
   */
  "Wms.Sales.SalesOrderController.create_quick_sales"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerCreateQuickSales.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.post_search - Search Sales Orders, searches a list of existing sales orders given some of the following params
   *
   * Search Sales Orders, searches a list of existing sales orders given some of the following params
   */
  "Wms.Sales.SalesOrderController.post_search"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerPostSearch.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.upload - Create multiple sales orders from a CSV file
   *
   * Create multiple sales orders from a CSV file
   */
  "Wms.Sales.SalesOrderController.upload"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.show - Searches a sales orders by id
   *
   * Searches a sales orders by id
   */
  "Wms.Sales.SalesOrderController.show"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.update - Updates a sales order given Id.
   *
   * Updates a sales order given Id.
   */
  "Wms.Sales.SalesOrderController.update"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.update_field - Update a field in Sales Order
   * Updates priority or is_cart field on sales order
   *
   * Update a field in Sales Order
   * Updates priority or is_cart field on sales order
   */
  "Wms.Sales.SalesOrderController.update_field"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerUpdateField.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.upload_attachment - Attach a document with a sales order according to the given ID
   *
   * Attach a document with a sales order according to the given ID
   */
  "Wms.Sales.SalesOrderController.upload_attachment"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerUploadAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerUploadAttachment.Responses.$201>;
  /**
   * Wms.Sales.SalesOrderController.register_attachment - Register file metadata from s3 response
   *
   * Register file metadata from s3 response
   */
  "Wms.Sales.SalesOrderController.register_attachment"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerRegisterAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerRegisterAttachment.Responses.$201>;
  /**
   * Wms.Sales.SalesOrderController.delete_attachment - Delete attachments
   *
   * Delete attachments
   */
  "Wms.Sales.SalesOrderController.delete_attachment"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerDeleteAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerDeleteAttachment.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.cancel - Cancels a sales order
   * Orders in state ended can not be cancelled, neither orders in state picking when there are no available packing locations.
   * The result action depends of the sales order's state.
   *
   * Cancels a sales order
   * Orders in state ended can not be cancelled, neither orders in state picking when there are no available packing locations.
   * The result action depends of the sales order's state.
   */
  "Wms.Sales.SalesOrderController.cancel"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerCancel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerCancel.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.dispatched - Searches sales orders dispatched data by id
   *
   * Searches sales orders dispatched data by id
   */
  "Wms.Sales.SalesOrderController.dispatched"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerDispatched.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.pause - Pauses a sales orders by id, Just orders in state queue can be paused
   *
   * Pauses a sales orders by id, Just orders in state queue can be paused
   */
  "Wms.Sales.SalesOrderController.pause"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerPause.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.SalesOrderController.resume - Resumes a sales order
   * Orders in state `paused` can be resumed and changes its status to `queue`
   * The result action depends of the sales order's state.
   *
   * Resumes a sales order
   * Orders in state `paused` can be resumed and changes its status to `queue`
   * The result action depends of the sales order's state.
   */
  "Wms.Sales.SalesOrderController.resume"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerResume.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerResume.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.attach_return_labels - Attach a list of return labels on sales order of any status
   *
   * Attach a list of return labels on sales order of any status
   */
  "Wms.Sales.SalesOrderController.attach_return_labels"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesSalesOrderControllerAttachReturnLabels.Responses.$200>;
  /**
   * Wms.Sales.SalesOrderController.get_return_data - Get returned data given a sales order
   *
   * Get returned data given a sales order
   */
  "Wms.Sales.SalesOrderController.get_return_data"(
    parameters?: Parameters<Paths.WmsSalesSalesOrderControllerGetReturnData.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.FulfillmentOrderController.search_by_sales_order_id - Search Fulfillment Orders from a specific sales order, searches a list of existing fulfillment orders given some of the following params
   *
   * Search Fulfillment Orders from a specific sales order, searches a list of existing fulfillment orders given some of the following params
   */
  "Wms.Sales.FulfillmentOrderController.search_by_sales_order_id"(
    parameters?: Parameters<
      Paths.WmsSalesFulfillmentOrderControllerSearchBySalesOrderId.PathParameters &
        Paths.WmsSalesFulfillmentOrderControllerSearchBySalesOrderId.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerSearchBySalesOrderId.Responses.$200>;
  /**
   * Wms.Sales.FulfillmentOrderController.show - Searches a fulfillment order by id
   *
   * Searches a fulfillment order by id
   */
  "Wms.Sales.FulfillmentOrderController.show"(
    parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerShow.Responses.$200>;
  /**
   * Wms.Sales.FulfillmentOrderController.update_field - Update a field in Fulfillment Order
   * Updates priority or is_cart field on Fulfillment order
   *
   * Update a field in Fulfillment Order
   * Updates priority or is_cart field on Fulfillment order
   */
  "Wms.Sales.FulfillmentOrderController.update_field"(
    parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerUpdateField.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Sales.FulfillmentOrderController.assign_custom_route_rule - Assigns a custom picking route rule to the fulfillment order
   * If the fulfillment order is picked, the given rule will have priority when calculating the route
   *
   * Assigns a custom picking route rule to the fulfillment order
   * If the fulfillment order is picked, the given rule will have priority when calculating the route
   */
  "Wms.Sales.FulfillmentOrderController.assign_custom_route_rule"(
    parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerAssignCustomRouteRule.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerAssignCustomRouteRule.Responses.$200>;
  /**
   * Wms.Setting.SettingController.search - Searches a list of settings given params
   *
   * Searches a list of settings given params
   */
  "Wms.Setting.SettingController.search"(
    parameters?: Parameters<Paths.WmsSettingSettingControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Setting.SettingController.create - Create a setting
   *
   * ## Create settings
   * You can create it by:
   * * tenant_id
   * * warehouse_id
   * * user_id
   * **Note:** *key should be unique in combination with tenant_id, warehouse_id or user_id*
   */
  "Wms.Setting.SettingController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Setting.SettingController.show - Show an setting given ID
   *
   * Show an setting given ID
   */
  "Wms.Setting.SettingController.show"(
    parameters?: Parameters<Paths.WmsSettingSettingControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Setting.SettingController.update - update a setting given ID
   *
   * update a setting given ID
   */
  "Wms.Setting.SettingController.update"(
    parameters?: Parameters<Paths.WmsSettingSettingControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Setting.SettingController.delete - Delete an setting given ID
   *
   * Delete an setting given ID
   */
  "Wms.Setting.SettingController.delete"(
    parameters?: Parameters<Paths.WmsSettingSettingControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingMethodController.bulk_upsert - Creates or updates a shipping method according to given params
   *
   * Creates or updates a shipping method according to given params
   */
  "Wms.Shipping.ShippingMethodController.bulk_upsert"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.search - Searches Loaded shipping boxes given some of the following params
   *
   * Searches Loaded shipping boxes given some of the following params
   */
  "Wms.Shipping.LoadedShippingBoxController.search"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsShippingLoadedShippingBoxControllerSearch.Responses.$200>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.create - Creates a Loaded Shipping Box according to given params
   *
   * Creates a Loaded Shipping Box according to given params
   */
  "Wms.Shipping.LoadedShippingBoxController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.show - Shows a loaded shipping box data according to the given id
   *
   * Shows a loaded shipping box data according to the given id
   */
  "Wms.Shipping.LoadedShippingBoxController.show"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.delete_loaded_shipping_box - Deletes a Loaded Shipping Box in progress
   *
   * Deletes a Loaded Shipping Box in progress
   */
  "Wms.Shipping.LoadedShippingBoxController.delete_loaded_shipping_box"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerDeleteLoadedShippingBox.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.delete_box - Deletes a packing box from a Loaded Shipping Box in progress
   *
   * Deletes a packing box from a Loaded Shipping Box in progress
   */
  "Wms.Shipping.LoadedShippingBoxController.delete_box"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerDeleteBox.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.finish - Finishes a loaded shipping box
   *
   * Finishes a loaded shipping box
   */
  "Wms.Shipping.LoadedShippingBoxController.finish"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerFinish.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.finish_partial - Finishes partially a loaded shipping box
   *
   * Finishes partially a loaded shipping box
   */
  "Wms.Shipping.LoadedShippingBoxController.finish_partial"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerFinishPartial.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.load_boxes - Loads shipping boxes in a Loaded Shipping Box in progress
   *
   * Loads shipping boxes in a Loaded Shipping Box in progress
   */
  "Wms.Shipping.LoadedShippingBoxController.load_boxes"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerLoadBoxes.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.LoadedShippingBoxController.reassign - Re assign loaded shipping box to a new user
   *
   * Re assign loaded shipping box to a new user
   */
  "Wms.Shipping.LoadedShippingBoxController.reassign"(
    parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerReassign.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingOrderController.search - Searches a list of shipping orders given params
   *
   * Searches a list of shipping orders given params
   */
  "Wms.Shipping.ShippingOrderController.search"(
    parameters?: Parameters<Paths.WmsShippingShippingOrderControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingOrderController.show - Show shipping order data according to the given id
   *
   * Show shipping order data according to the given id
   */
  "Wms.Shipping.ShippingOrderController.show"(
    parameters?: Parameters<Paths.WmsShippingShippingOrderControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingOrderController.finish - Finish a shipping order
   *
   * Finish a shipping order
   */
  "Wms.Shipping.ShippingOrderController.finish"(
    parameters?: Parameters<Paths.WmsShippingShippingOrderControllerFinish.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingOrderController.move - Move a shipping order to another shipping location
   *
   * Move a shipping order to another shipping location
   */
  "Wms.Shipping.ShippingOrderController.move"(
    parameters?: Parameters<Paths.WmsShippingShippingOrderControllerMove.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingMethodController.search - Searches a list of shipping_methods
   *
   * Searches a list of shipping_methods
   */
  "Wms.Shipping.ShippingMethodController.search"(
    parameters?: Parameters<Paths.WmsShippingShippingMethodControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingMethodController.create - Creates a Shipping method according to given params
   *
   * Creates a Shipping method according to given params
   */
  "Wms.Shipping.ShippingMethodController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingMethodController.show - Fetch a shipping_method by given id
   *
   * Fetch a shipping_method by given id
   */
  "Wms.Shipping.ShippingMethodController.show"(
    parameters?: Parameters<Paths.WmsShippingShippingMethodControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingMethodController.update - update a shipping method given ID
   *
   * update a shipping method given ID
   */
  "Wms.Shipping.ShippingMethodController.update"(
    parameters?: Parameters<Paths.WmsShippingShippingMethodControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Shipping.ShippingMethodController.delete - Deletes a shipping_method by given id
   *
   * Deletes a shipping_method by given id
   */
  "Wms.Shipping.ShippingMethodController.delete"(
    parameters?: Parameters<Paths.WmsShippingShippingMethodControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.WarehouseController.index - Lists the warehouses from a user tenant
   *
   * Lists the warehouses from a user tenant
   */
  "Wms.Warehouse.WarehouseController.index"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseWarehouseControllerIndex.Responses.$200>;
  /**
   * Wms.Warehouse.WarehouseController.create - Creates a new warehouse
   *
   * Creates a new warehouse by passing the following fields:
   * * **name:** The string with the name of the warehouse
   * * **active:** Receives *true* or *false* and determines when a warehouse is enabled in a tenant
   * * **line1:** The string with address information
   * * **line2:** The string with aditional address information
   * * **city:** The string with the City where is located the warehouse
   * * **state:** The string with the State where is located the warehouse
   * * **country_code:** The string with the Country code where is located the warehouse
   * * **zip_code:** The string with the zipcode
   * * **phone:** The string with the phone number of warehouse
   * * **fax:** The string with the fax number of warehouse
   * * **tenant:** The tenant to which warehouse belongs
   * * **site:** The physical address which one or multiple warehouses can be located. This field is optional
   * * **priority:** The order of importance of a warehouse when it shares the same site with other warehouses. A priority can not be repeated for the same site. This field is optional
   * * **company_name:** The warehouse company name
   * * **email:** The warehouse email
   */
  "Wms.Warehouse.WarehouseController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseWarehouseControllerCreate.Responses.$201>;
  /**
   * Wms.Warehouse.ConnectionController.search - Searches a list of connections.
   * Can paginate, sending the query parameters: limit and offset, otherwise the
   * default limit and offset are 0 and 10.
   *
   * Searches a list of connections.
   * Can paginate, sending the query parameters: limit and offset, otherwise the
   * default limit and offset are 0 and 10.
   */
  "Wms.Warehouse.ConnectionController.search"(
    parameters?: Parameters<Paths.WmsWarehouseConnectionControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseConnectionControllerSearch.Responses.$200>;
  /**
   * Wms.Warehouse.ConnectionController.batch_update - Updates a list of connection
   *
   * Updates a list of connection
   */
  "Wms.Warehouse.ConnectionController.batch_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ConnectionController.create - Creates a connection. The changeset validates that the `connection code` is unique before insert.
   *
   * Creates a connection. The changeset validates that the `connection code` is unique before insert.
   */
  "Wms.Warehouse.ConnectionController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseConnectionControllerCreate.Responses.$201>;
  /**
   * Wms.Warehouse.ConnectionController.batch_delete - Updates a list of connection
   *
   * Updates a list of connection
   */
  "Wms.Warehouse.ConnectionController.batch_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ConnectionController.show - Show a connection by given id. The function validates whether the id is valid or not
   *
   * Show a connection by given id. The function validates whether the id is valid or not
   */
  "Wms.Warehouse.ConnectionController.show"(
    parameters?: Parameters<Paths.WmsWarehouseConnectionControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseConnectionControllerShow.Responses.$200>;
  /**
   * Wms.Warehouse.ConnectionController.update - Updates a connection
   *
   * Updates a connection
   */
  "Wms.Warehouse.ConnectionController.update"(
    parameters?: Parameters<Paths.WmsWarehouseConnectionControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ConnectionController.delete - Updates a connection
   *
   * Updates a connection
   */
  "Wms.Warehouse.ConnectionController.delete"(
    parameters?: Parameters<Paths.WmsWarehouseConnectionControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationTypeController.search - Searches a list of location types given an id(s), name(s)
   *
   * Searches a list of location types given an id(s), name(s)
   */
  "Wms.Warehouse.LocationTypeController.search"(
    parameters?: Parameters<Paths.WmsWarehouseLocationTypeControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationTypeController.show - Show a location type data from given ID
   *
   * Show a location type data from given ID
   */
  "Wms.Warehouse.LocationTypeController.show"(
    parameters?: Parameters<Paths.WmsWarehouseLocationTypeControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.index - Lists the locations. Filtered according the given fields in params
   *
   * Lists the locations. Filtered according the given fields in params
   */
  "Wms.Warehouse.LocationController.index"(
    parameters?: Parameters<Paths.WmsWarehouseLocationControllerIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseLocationControllerIndex.Responses.$200>;
  /**
   * Wms.Warehouse.LocationController.batch_update - Updates a list of locations
   *
   * Updates a list of locations
   */
  "Wms.Warehouse.LocationController.batch_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.create - Creates a location. The changeset validates that the `location code` is unique before insert
   *
   * Creates a location. The changeset validates that the `location code` is unique before insert
   */
  "Wms.Warehouse.LocationController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseLocationControllerCreate.Responses.$201>;
  /**
   * Wms.Warehouse.LocationController.batch_delete - Deletes a list of locations
   *
   * Deletes a list of locations
   */
  "Wms.Warehouse.LocationController.batch_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.assign_stock_states - Controls the inventory in locations, blocking or unblocking the stocks according the given params
   *
   * Controls the inventory in locations, blocking or unblocking the stocks according the given params
   */
  "Wms.Warehouse.LocationController.assign_stock_states"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseLocationControllerAssignStockStates.Responses.$201>;
  /**
   * Wms.Warehouse.LocationController.assign_tags - Assigns multiple product categories with multiple locations
   *
   * Assigns multiple product categories with multiple locations
   */
  "Wms.Warehouse.LocationController.assign_tags"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.post_index - Lists the locations
   *
   * Lists the locations
   */
  "Wms.Warehouse.LocationController.post_index"(
    parameters?: Parameters<Paths.WmsWarehouseLocationControllerPostIndex.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.show - Show a location by given id. The function validates if the id is valid or not
   *
   * Show a location by given id. The function validates if the id is valid or not
   */
  "Wms.Warehouse.LocationController.show"(
    parameters?: Parameters<Paths.WmsWarehouseLocationControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseLocationControllerShow.Responses.$200>;
  /**
   * Wms.Warehouse.LocationController.update - Update fields of location by given id
   *
   * Update fields of location by given id
   */
  "Wms.Warehouse.LocationController.update"(
    parameters?: Parameters<Paths.WmsWarehouseLocationControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseLocationControllerUpdate.Responses.$201>;
  /**
   * Wms.Warehouse.LocationController.delete - Deletes a location by given id
   *
   * Deletes a location by given id
   */
  "Wms.Warehouse.LocationController.delete"(
    parameters?: Parameters<Paths.WmsWarehouseLocationControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ConnectionController.search_by_locations - Searches a connection between two given location ids
   *
   * Searches a connection between two given location ids
   */
  "Wms.Warehouse.ConnectionController.search_by_locations"(
    parameters?: Parameters<Paths.WmsWarehouseConnectionControllerSearchByLocations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ConnectionController.delete_by_locations - Delete a connection between two given location ids
   *
   * Delete a connection between two given location ids
   */
  "Wms.Warehouse.ConnectionController.delete_by_locations"(
    parameters?: Parameters<Paths.WmsWarehouseConnectionControllerDeleteByLocations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.RackController.search - Searches a list of racks given filter params
   *
   * Searches a list of racks given filter params
   */
  "Wms.Warehouse.RackController.search"(
    parameters?: Parameters<Paths.WmsWarehouseRackControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseRackControllerSearch.Responses.$200>;
  /**
   * Wms.Warehouse.RackController.batch_update - Updates a list of racks
   *
   * Updates a list of racks
   */
  "Wms.Warehouse.RackController.batch_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.RackController.create - Creates a rack
   *
   * Creates a rack
   */
  "Wms.Warehouse.RackController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseRackControllerCreate.Responses.$201>;
  /**
   * Wms.Warehouse.RackController.batch_delete - Deletes a list of rack according to theirs ids, if one deletion fail all transaction will fail one deletion fail all transaction will fail
   *
   * Deletes a list of rack according to theirs ids, if one deletion fail all transaction will fail one deletion fail all transaction will fail
   */
  "Wms.Warehouse.RackController.batch_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.RackController.show - Show a rack by given id
   *
   * Show a rack by given id
   */
  "Wms.Warehouse.RackController.show"(
    parameters?: Parameters<Paths.WmsWarehouseRackControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseRackControllerShow.Responses.$200>;
  /**
   * Wms.Warehouse.RackController.update - Updates a rack
   *
   * Updates a rack
   */
  "Wms.Warehouse.RackController.update"(
    parameters?: Parameters<Paths.WmsWarehouseRackControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseRackControllerUpdate.Responses.$201>;
  /**
   * Wms.Warehouse.RackController.delete - Deletes a rack by id
   *
   * Deletes a rack by id
   */
  "Wms.Warehouse.RackController.delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ZoneController.search - Searches a list of zones given filter params
   *
   * Searches a list of zones given filter params
   */
  "Wms.Warehouse.ZoneController.search"(
    parameters?: Parameters<Paths.WmsWarehouseZoneControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseZoneControllerSearch.Responses.$200>;
  /**
   * Wms.Warehouse.ZoneController.batch_update - Updates a list of zones
   *
   * Updates a list of zones
   */
  "Wms.Warehouse.ZoneController.batch_update"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ZoneController.create - Creates a warehouse zone
   *
   * Creates a warehouse zone
   */
  "Wms.Warehouse.ZoneController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseZoneControllerCreate.Responses.$201>;
  /**
   * Wms.Warehouse.ZoneController.batch_delete - Deletes a list of locations
   *
   * Deletes a list of locations
   */
  "Wms.Warehouse.ZoneController.batch_delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ZoneController.show - Show a zone by given id
   *
   * Show a zone by given id
   */
  "Wms.Warehouse.ZoneController.show"(
    parameters?: Parameters<Paths.WmsWarehouseZoneControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseZoneControllerShow.Responses.$200>;
  /**
   * Wms.Warehouse.ZoneController.update - Updates a zone
   *
   * Updates a zone
   */
  "Wms.Warehouse.ZoneController.update"(
    parameters?: Parameters<Paths.WmsWarehouseZoneControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.ZoneController.delete - Deletes a zone by id
   *
   * Deletes a zone by id
   */
  "Wms.Warehouse.ZoneController.delete"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
   *
   * Lists the locations by zone
   */
  "Wms.Warehouse.LocationController.index_by_zone"(
    parameters?: Parameters<
      Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
        Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
   *
   * Lists the locations by zone
   */
  "Wms.Warehouse.LocationController.index_by_zone"(
    parameters?: Parameters<
      Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
        Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
   *
   * Lists the locations by zone
   */
  "Wms.Warehouse.LocationController.index_by_zone"(
    parameters?: Parameters<
      Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
        Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
   *
   * Lists the locations by zone
   */
  "Wms.Warehouse.LocationController.index_by_zone"(
    parameters?: Parameters<
      Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
        Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
   *
   * Lists the locations by zone
   */
  "Wms.Warehouse.LocationController.index_by_zone"(
    parameters?: Parameters<
      Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
        Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.WarehouseController.show - Fetch a warehouse by given id
   *
   * Fetch a warehouse by given id
   */
  "Wms.Warehouse.WarehouseController.show"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseWarehouseControllerShow.Responses.$200>;
  /**
   * Wms.Warehouse.WarehouseController.update - Update fields of warehouse by given id
   *
   * Update fields of warehouse by given id
   */
  "Wms.Warehouse.WarehouseController.update"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseWarehouseControllerUpdate.Responses.$200>;
  /**
   * Wms.Warehouse.WarehouseController.search_empty_locations -  Receives a list of location ids from a given warehouse
   *  and a list with each location and if its empty or not
   *
   *  Receives a list of location ids from a given warehouse
   *  and a list with each location and if its empty or not
   */
  "Wms.Warehouse.WarehouseController.search_empty_locations"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerSearchEmptyLocations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWarehouseWarehouseControllerSearchEmptyLocations.Responses.$200>;
  /**
   * Wms.Warehouse.WarehouseController.get_locations - Fetch locations associated to a warehouse given id
   *
   * Fetch locations associated to a warehouse given id
   */
  "Wms.Warehouse.WarehouseController.get_locations"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerGetLocations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.WarehouseController.download_priorities_csv_template - Returns a CSV with storage and cross docking locations
   * according to the given warehouse ID
   *
   * Returns a CSV with storage and cross docking locations
   * according to the given warehouse ID
   */
  "Wms.Warehouse.WarehouseController.download_priorities_csv_template"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerDownloadPrioritiesCsvTemplate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.WarehouseController.get_suggested_locations - Fetch locations associated to a warehouse given id and according to setting direct_storing_enabled.
   *
   * Fetch locations associated to a warehouse given id and according to setting direct_storing_enabled.
   */
  "Wms.Warehouse.WarehouseController.get_suggested_locations"(
    parameters?: Parameters<
      Paths.WmsWarehouseWarehouseControllerGetSuggestedLocations.PathParameters &
        Paths.WmsWarehouseWarehouseControllerGetSuggestedLocations.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.WarehouseController.upload_location_priorities - Updates warehousing location priorities
   *
   * Updates warehousing location priorities
   */
  "Wms.Warehouse.WarehouseController.upload_location_priorities"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerUploadLocationPriorities.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Warehouse.WarehouseController.post_get_locations - Fetch locations associated to a warehouse given id
   *
   * Fetch locations associated to a warehouse given id
   */
  "Wms.Warehouse.WarehouseController.post_get_locations"(
    parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerPostGetLocations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Webhook.WebhookController.search - Searches a list of webhooks given params
   *
   * Searches a list of webhooks given params
   */
  "Wms.Webhook.WebhookController.search"(
    parameters?: Parameters<Paths.WmsWebhookWebhookControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookControllerSearch.Responses.$200>;
  /**
   * Wms.Webhook.WebhookController.create - Create a webhook
   *
   * Allow a warehouse to pass data to another APIs through remote calls when an event is triggered.
   * When an event triggers a webhook, this is sent with an specific payload to the target endpoint according the event
   * allowed type. In this way, allowed_types values are going to send the data of the entity from the origin event
   * (See models section at the end of this page to see the structure for each one)
   * Following fields must by passed:
   * * **url:** Target endpoint to send/retrieve data
   * * **method:** Request method: *GET, POST*
   * * **allowed_types:** List of events to trigger this webhook. Currently supports:
   * *sales_order_created
   * sales_order_cancelled
   * sales_order_updated
   * sales_order_finished
   * picking_order_created
   * picking_order_finished
   * picking_order_cancelled
   * packing_order_created
   * packing_order_finished
   * packing_order_finished
   * packing_order_cancelled
   * turbo_label_packing_created
   * packing_box_closed
   * incoming_good_created
   * purchase_order_created
   * purchase_order_updated
   * purchase_order_deleted
   * purchase_order_finished
   * replenishment_order_created
   * replenishment_order_cancelled
   * replenishment_order_finished
   * shipment_tracking_updated
   * counting_task_created
   * counting_task_finished
   * counting_task_cancelled
   * counting_task_closed*
   * * **enabled:** enable or disable this webhook
   * * **request_module:** Request serialize module. Currently supports: *default*. This field is **not required**
   * * **response_module:** Response serialize module. Currently supports: *default* This field is **not required**
   * * **warehouse_id:** Warehouse to listen events defined in allowed types field
   */
  "Wms.Webhook.WebhookController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookControllerCreate.Responses.$201>;
  /**
   * Wms.Webhook.WebhookClientController.search - Searches a list of webhook clients by the given params
   *
   * Searches a list of webhook clients by the given params
   */
  "Wms.Webhook.WebhookClientController.search"(
    parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookClientControllerSearch.Responses.$200>;
  /**
   * Wms.Webhook.WebhookClientController.create -  Create a webhook client which can be attached to webhooks to authenticate their calls on trigger
   *
   *  Create a webhook client which can be attached to webhooks to authenticate their calls on trigger
   */
  "Wms.Webhook.WebhookClientController.create"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookClientControllerCreate.Responses.$201>;
  /**
   * Wms.Webhook.WebhookClientController.show - Show a webhook given ID
   *
   * Show a webhook given ID
   */
  "Wms.Webhook.WebhookClientController.show"(
    parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookClientControllerShow.Responses.$200>;
  /**
   * Wms.Webhook.WebhookClientController.update - Updates a Webhook Client by the given ID
   *
   * Updates a Webhook Client by the given ID
   */
  "Wms.Webhook.WebhookClientController.update"(
    parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookClientControllerUpdate.Responses.$200>;
  /**
   * Wms.Webhook.WebhookClientController.delete - Deletes a Webhook Client
   *
   * Deletes a Webhook Client
   */
  "Wms.Webhook.WebhookClientController.delete"(
    parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Webhook.EventLogController.search - Lists the event logs from a tenant
   *
   * Lists the event logs from a tenant
   */
  "Wms.Webhook.EventLogController.search"(
    parameters?: Parameters<Paths.WmsWebhookEventLogControllerSearch.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookEventLogControllerSearch.Responses.$200>;
  /**
   * Wms.Webhook.EventLogController.show - Gets a specific log event
   *
   *
   * Gets a specific log event
   *
   */
  "Wms.Webhook.EventLogController.show"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Webhook.WebhookController.retry
   */
  "Wms.Webhook.WebhookController.retry"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * Wms.Webhook.WebhookController.show - Show a webhook given ID
   *
   * Show a webhook given ID
   */
  "Wms.Webhook.WebhookController.show"(
    parameters?: Parameters<Paths.WmsWebhookWebhookControllerShow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookControllerShow.Responses.$201>;
  /**
   * Wms.Webhook.WebhookController.update - update a webhook given ID
   *
   * update a webhook given ID
   */
  "Wms.Webhook.WebhookController.update"(
    parameters?: Parameters<Paths.WmsWebhookWebhookControllerUpdate.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookControllerUpdate.Responses.$200>;
  /**
   * Wms.Webhook.WebhookController.delete - Delete a webhook given ID
   *
   * Delete a webhook given ID
   */
  "Wms.Webhook.WebhookController.delete"(
    parameters?: Parameters<Paths.WmsWebhookWebhookControllerDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.WmsWebhookWebhookControllerDelete.Responses.$200>;
}

export interface PathsDictionary {
  ["/"]: {
    /**
     * Wms.Auth.AuthController.head_status - Checks server availability
     *
     * Checks server availability
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/attachment/{id}"]: {
    /**
     * Wms.Attachment.AttachmentController.show - Show an attachment through its URL
     *
     *
     * Show an attachment through its URL
     *
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/auth"]: {
    /**
     * Wms.Auth.AuthController.request_token - Generates a new JWT token for the asked user, Implements OAuht2.0 request token action to perform users login and retrieve users session data
     *
     * Generates a new JWT token for the asked user, Implements OAuht2.0 request token action to perform users login and retrieve users session data
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsAuthAuthControllerRequestToken.Responses.$200>;
  };
  ["/auth/logout"]: {
    /**
     * Wms.Auth.AuthController.revoke_token - Revokes token for the asked user
     *
     * Revokes token for the asked user
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/counting/tasks"]: {
    /**
     * Wms.Counting.CountingTaskController.search - Searches a list of counting task given a counting task params
     *
     * Searches a list of counting task given a counting task params
     */
    "get"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerSearch.Responses.$200>;
    /**
     * Wms.Counting.CountingTaskController.create - Create a counting task
     *
     * Create a counting task
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerCreate.Responses.$201>;
  };
  ["/counting/tasks/assign"]: {
    /**
     * Wms.Counting.CountingTaskController.assign - Assign a valid counting id in counting task.
     *
     * Assign a valid counting id in counting task.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerAssign.Responses.$200>;
  };
  ["/counting/tasks/{id}"]: {
    /**
     * Wms.Counting.CountingTaskController.show - Searches a counting task by ID
     *
     * Searches a counting task by ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerShow.Responses.$200>;
    /**
     * Wms.Counting.CountingTaskController.update - Updates a specific field on counting task. Can update the state of counting task
     * or the counter_id to assign a counter to counting task
     *
     * Updates a specific field on counting task. Can update the state of counting task
     * or the counter_id to assign a counter to counting task
     */
    "patch"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerUpdate.Responses.$200>;
  };
  ["/counting/tasks/{id}/cancel"]: {
    /**
     * Wms.Counting.CountingTaskController.cancel - Cancel a counting task, with a list of valid items
     *
     * Cancel a counting task, with a list of valid items
     */
    "post"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerCancel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerCancel.Responses.$200>;
  };
  ["/counting/tasks/{id}/finish"]: {
    /**
     * Wms.Counting.CountingTaskController.finish - Close a counting task, with a list of valid items
     *
     * Close a counting task, with a list of valid items
     */
    "post"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerFinish.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerFinish.Responses.$200>;
  };
  ["/counting/tasks/{id}/items"]: {
    /**
     * Wms.Counting.CountingTaskController.add_item - Adds an item for a counting task
     *
     * Adds an item for a counting task
     */
    "post"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerAddItem.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerAddItem.Responses.$200>;
  };
  ["/counting/tasks/{id}/items/{item_id}"]: {
    /**
     * Wms.Counting.CountingTaskController.delete_item - Deletes an item for a counting task
     *
     * Deletes an item for a counting task
     */
    "delete"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerDeleteItem.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerDeleteItem.Responses.$200>;
    /**
     * Wms.Counting.CountingTaskController.update_item - Updates an item for a counting task
     *
     * Updates an item for a counting task
     */
    "put"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerUpdateItem.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerUpdateItem.Responses.$200>;
  };
  ["/counting/tasks/{id}/items/{item_id}/attach"]: {
    /**
     * Wms.Counting.CountingTaskController.upload_item_attachment - Attach a file with a counting task
     *
     * Attach a file with a counting task
     */
    "post"(
      parameters?: Parameters<Paths.WmsCountingCountingTaskControllerUploadItemAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerUploadItemAttachment.Responses.$201>;
  };
  ["/counting/tasks/{id}/reasons"]: {
    /**
     * Wms.Counting.CountingTaskController.upsert_reason_codes - Replaces reason codes associated to a counting task.
     * The body includes the following:
     *
     * Replaces reason codes associated to a counting task.
     * The body includes the following:
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountingCountingTaskControllerUpsertReasonCodes.Responses.$200>;
  };
  ["/countries/"]: {
    /**
     * Wms.Country.CountryController.search - Lists countries with its regional codes
     *
     * Lists countries with its regional codes
     */
    "get"(
      parameters?: Parameters<Paths.WmsCountryCountryControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountryCountryControllerSearch.Responses.$200>;
  };
  ["/countries/{id}/aliases"]: {
    /**
     * Wms.Country.CountryAliasController.search - Lists the event logs from a tenant
     *
     * Lists the event logs from a tenant
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsCountryCountryAliasControllerSearch.PathParameters &
          Paths.WmsCountryCountryAliasControllerSearch.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsCountryCountryAliasControllerSearch.Responses.$200>;
  };
  ["/device/"]: {
    /**
     * Wms.Device.DeviceController.create - creates a device
     *
     * creates a device
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsDeviceDeviceControllerCreate.Responses.$201>;
  };
  ["/device/{id}"]: {
    /**
     * Wms.Device.DeviceController.show - Shows a device by given ID
     *
     * Shows a device by given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsDeviceDeviceControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsDeviceDeviceControllerShow.Responses.$200>;
    /**
     * Wms.Device.DeviceController.update - updates a device by given ID
     *
     * updates a device by given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsDeviceDeviceControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsDeviceDeviceControllerUpdate.Responses.$201>;
  };
  ["/iam/bulk/third_parties"]: {
    /**
     * Wms.Iam.Bulk.BulkThirdPartyController.bulk_create - Create third parties in bulk.
     *
     * This endpoint works as bulk, it means that if any third party creation fails it will continue with the others until the end.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamBulkBulkThirdPartyControllerBulkCreate.Responses.$201>;
    /**
     * Wms.Iam.Bulk.BulkThirdPartyController.bulk_update - Update third parties in bulk.
     *
     * This endpoint works as bulk, it means that if any third party update fails it will continue with the others until the end.
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamBulkBulkThirdPartyControllerBulkUpdate.Responses.$201>;
  };
  ["/iam/tenants"]: {
    /**
     * Wms.Iam.TenantController.search - Searches a list of users given a sku and barcode
     *
     * Searches a list of users given a sku and barcode
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamTenantControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.TenantController.create - Create a tenant
     *
     * Create a tenant
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/tenants/profiles"]: {
    /**
     * Wms.Iam.IamController.search_profiles - Searches a list of profiles given an id(s), key(s)
     * The parameters are optional
     *
     * Searches a list of profiles given an id(s), key(s)
     * The parameters are optional
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamIamControllerSearchProfiles.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamIamControllerSearchProfiles.Responses.$200>;
  };
  ["/iam/tenants/profiles/{id}"]: {
    /**
     * Wms.Iam.IamController.show_profile - Show a profile data from given ID
     *
     * Show a profile data from given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamIamControllerShowProfile.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamIamControllerShowProfile.Responses.$200>;
  };
  ["/iam/tenants/socket_profiles"]: {
    /**
     * Wms.Iam.IamController.search_socket_profiles - Searches a list of socket profiles given an id(s), key(s)
     *
     * Searches a list of socket profiles given an id(s), key(s)
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamIamControllerSearchSocketProfiles.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamIamControllerSearchSocketProfiles.Responses.$201>;
  };
  ["/iam/tenants/socket_profiles/{id}"]: {
    /**
     * Wms.Iam.IamController.show_socket_profile - Show a socket profile data from given ID
     *
     * Show a socket profile data from given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamIamControllerShowSocketProfile.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamIamControllerShowSocketProfile.Responses.$200>;
  };
  ["/iam/tenants/{id}"]: {
    /**
     * Wms.Iam.TenantController.show - Show a tenant given ID
     *
     * Show a tenant given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamTenantControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.TenantController.update - update a tenant given ID
     *
     * update a tenant given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsIamTenantControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/third_parties"]: {
    /**
     * Wms.Iam.ThirdPartyController.search - Searches a list of third parties by given parameters. The parameters are optional
     *
     * Searches a list of third parties by given parameters. The parameters are optional
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamThirdPartyControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamThirdPartyControllerSearch.Responses.$200>;
    /**
     * Wms.Iam.ThirdPartyController.create - Creates a third party
     *
     * Creates a third party
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamThirdPartyControllerCreate.Responses.$201>;
  };
  ["/iam/third_parties/upload"]: {
    /**
     * Wms.Iam.ThirdPartyController.upload - Create multiple Third Party from a CSV file
     *
     * Create multiple Third Party from a CSV file
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/third_parties/{id}"]: {
    /**
     * Wms.Iam.ThirdPartyController.delete - Deletes a third party given Id
     *
     * Deletes a third party given Id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsIamThirdPartyControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamThirdPartyControllerDelete.Responses.$200>;
    /**
     * Wms.Iam.ThirdPartyController.show - Shows a third party given ID
     *
     * Shows a third party given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamThirdPartyControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamThirdPartyControllerShow.Responses.$200>;
    /**
     * Wms.Iam.ThirdPartyController.update - updates a third party given ID
     *
     * updates a third party given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsIamThirdPartyControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamThirdPartyControllerUpdate.Responses.$201>;
  };
  ["/iam/users"]: {
    /**
     * Wms.Iam.UserController.search - Searches a list of users given params
     *
     * Searches a list of users given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamUserControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.UserController.create - Create an user
     *
     * Create an user
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/me"]: {
    /**
     * Wms.Iam.UserController.me - Returns logged in user data
     *
     * Returns logged in user data
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamUserControllerMe.Responses.$200>;
  };
  ["/iam/users/name"]: {
    /**
     * Wms.Iam.UserController.search_basic_info - Searches a list of users with no embed objects according to given params
     *
     * Searches a list of users with no embed objects according to given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamUserControllerSearchBasicInfo.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/session/{id}"]: {
    /**
     * Wms.Iam.UserController.update_session - Updates user session
     *
     * Updates user session
     */
    "put"(
      parameters?: Parameters<Paths.WmsIamUserControllerUpdateSession.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamUserControllerUpdateSession.Responses.$200>;
  };
  ["/iam/users/{id}"]: {
    /**
     * Wms.Iam.UserController.delete - Delete a user given ID
     *
     * Delete a user given ID
     */
    "delete"(
      parameters?: Parameters<Paths.WmsIamUserControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.UserController.show - Shows an user given ID
     *
     * Shows an user given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamUserControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.UserController.update - updates an user given ID
     *
     * updates an user given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsIamUserControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/{id}/categories"]: {
    /**
     * Wms.Iam.UserController.assign_categories - Assign a list of categories ids to an given user
     *
     *
     * Assign a list of categories ids to an given user
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/{id}/device"]: {
    /**
     * Wms.Iam.UserController.assign_device - Associates a device to a created user
     *
     *
     * Associates a device to a created user
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/{id}/merchants"]: {
    /**
     * Wms.Iam.UserController.merchants - Shows an user and the merchants related by given user id
     *
     * Shows an user and the merchants related by given user id
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamUserControllerMerchants.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamUserControllerMerchants.Responses.$200>;
    /**
     * Wms.Iam.UserController.assign_merchants - Assign a list of merchants ids to an given user
     *
     * Assign a list of merchants ids to an given user
     */
    "post"(
      parameters?: Parameters<Paths.WmsIamUserControllerAssignMerchants.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsIamUserControllerAssignMerchants.Responses.$200>;
  };
  ["/iam/users/{id}/notification_profiles"]: {
    /**
     * Wms.Iam.UserController.list_socket_profiles - Assign a list of socket profile ids to an given user
     *
     *
     * Assign a list of socket profile ids to an given user
     *
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.UserController.assign_socket_profiles - Assign a list of socket profile ids to an given user
     *
     *
     * Assign a list of socket profile ids to an given user
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/{id}/profiles"]: {
    /**
     * Wms.Iam.UserController.list_profiles - Assign a list of socket profile ids to an given user
     *
     *
     * Assign a list of socket profile ids to an given user
     *
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.UserController.assign_profiles - Assign a list of profile ids to an given user
     *
     *
     * Assign a list of profile ids to an given user
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/{id}/tasks"]: {
    /**
     * Wms.Iam.UserController.pending_tasks - shows all pending tasks related to an user
     *
     * shows all pending tasks related to an user
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamUserControllerPendingTasks.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/iam/users/{id}/warehouses"]: {
    /**
     * Wms.Iam.UserController.allowed_warehouses - shows an user and the warehouses allowed by given user id
     *
     * shows an user and the warehouses allowed by given user id
     */
    "get"(
      parameters?: Parameters<Paths.WmsIamUserControllerAllowedWarehouses.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Iam.UserController.assign_warehouses - Assign a list of warehouse ids to an given user
     *
     *
     * Assign a list of warehouse ids to an given user
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/"]: {
    /**
     * Wms.Inventory.InventoryController.search - Searches a list of inventories given a list of criteria
     *
     * Searches a list of inventories given a list of criteria
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryInventoryControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.InventoryController.create - Create a inventory
     *
     * Create a inventory
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/bulk/products"]: {
    /**
     * Wms.Inventory.Bulk.BulkProductController.bulk_delete - Delete products in bulk.
     *
     * Deletion payload have multiple formats due to different ways to specify which products should be deleted:
     * * A list of structs with sku: E.G. `[%{sku: "sku1"}, ...]`
     * * A list of skus: E.G. `["sku1", ...]`
     * * A list of structs with id: E.G. `[%{id: 1}, ...]`
     * * A list of ids: E.G. `[1, ...]`
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.Bulk.BulkProductController.bulk_create - Create products in bulk. This endpoint works as bulk, it means that if any product creation fails it will continue with the others until the end.
     *
     * Create products in bulk. This endpoint works as bulk, it means that if any product creation fails it will continue with the others until the end.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryBulkBulkProductControllerBulkCreate.Responses.$201>;
    /**
     * Wms.Inventory.Bulk.BulkProductController.bulk_update - Updates products in bulk. This endpoint works as bulk, it means that if any product update fails it will continue with the others until the end.
     *
     * Updates products in bulk. This endpoint works as bulk, it means that if any product update fails it will continue with the others until the end.
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryBulkBulkProductControllerBulkUpdate.Responses.$201>;
  };
  ["/inventory/kits"]: {
    /**
     * Wms.Inventory.KitController.search - Searches a list of kits
     *
     * Searches a list of kits
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryKitControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.KitController.create - Creates a Kit according to given params
     *
     * Creates a Kit according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/kits/{id}"]: {
    /**
     * Wms.Inventory.KitController.show - Fetch a kit by given id
     *
     * Fetch a kit by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryKitControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/kits/{id}/deactivate"]: {
    /**
     * Wms.Inventory.KitController.deactivate - Deactivates a kit by given id
     *
     * Deactivates a kit by given id
     */
    "post"(
      parameters?: Parameters<Paths.WmsInventoryKitControllerDeactivate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/loading_unit_templates"]: {
    /**
     * Wms.Inventory.LoadingUnitTemplateController.search - Searches loading unit templates
     *
     * Searches loading unit templates
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryLoadingUnitTemplateControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerSearch.Responses.$200>;
    /**
     * Wms.Inventory.LoadingUnitTemplateController.create - Creates a loading unit template
     *
     * Creates a loading unit template
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerCreate.Responses.$201>;
  };
  ["/inventory/loading_unit_templates/{id}"]: {
    /**
     * Wms.Inventory.LoadingUnitTemplateController.delete - Deletes a loading unit template according to the given id
     *
     * Deletes a loading unit template according to the given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsInventoryLoadingUnitTemplateControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerDelete.Responses.$200>;
    /**
     * Wms.Inventory.LoadingUnitTemplateController.update - Updates a loading unit template with the given ID
     *
     * Updates a loading unit template with the given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsInventoryLoadingUnitTemplateControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryLoadingUnitTemplateControllerUpdate.Responses.$200>;
  };
  ["/inventory/products"]: {
    /**
     * Wms.Inventory.ProductController.search - Searches a list of products
     *
     * Searches a list of products
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerSearch.Responses.$200>;
    /**
     * Wms.Inventory.ProductController.create - Creates a new product with its bar codes and its product categories
     *
     * Creates a new product with its bar codes and its product categories
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerCreate.Responses.$201>;
    /**
     * Wms.Inventory.ProductController.batch_update - Updates a list of product
     *
     * Updates a list of product
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerBatchUpdate.Responses.$200>;
  };
  ["/inventory/products/batches"]: {
    /**
     * Wms.Inventory.BatchController.search - Searches batches given an optional criteria list
     *
     * Searches batches given an optional criteria list
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryBatchControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/products/batches/search"]: {
    /**
     * Wms.Inventory.BatchController.post_search - Searches batches given an optional criteria list
     *
     * Searches batches given an optional criteria list
     */
    "post"(
      parameters?: Parameters<Paths.WmsInventoryBatchControllerPostSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/products/batches/{id}"]: {
    /**
     * Wms.Inventory.BatchController.show - Show a batch by given ID
     *
     * Show a batch by given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryBatchControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.BatchController.update - Update fields of batch by given ID
     *
     * Update fields of batch by given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsInventoryBatchControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/products/categories"]: {
    /**
     * Wms.Inventory.ProductCategoryController.search - Lists the product_categories
     *
     * Lists the product_categories
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductCategoryControllerSearch.Responses.$200>;
    /**
     * Wms.Inventory.ProductCategoryController.create - Creates and shows the new product_category according to given params
     *
     * Creates and shows the new product_category according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductCategoryControllerCreate.Responses.$201>;
  };
  ["/inventory/products/categories/{id}"]: {
    /**
     * Wms.Inventory.ProductCategoryController.delete - Deletes a product_category by given id
     *
     * Deletes a product_category by given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.ProductCategoryController.show - Shows a product category by given ID
     *
     * Shows a product category by given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductCategoryControllerShow.Responses.$200>;
    /**
     * Wms.Inventory.ProductCategoryController.update - Updates fields of product_category by given id
     *
     * Updates fields of product_category by given id
     */
    "put"(
      parameters?: Parameters<Paths.WmsInventoryProductCategoryControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductCategoryControllerUpdate.Responses.$200>;
  };
  ["/inventory/products/open"]: {
    /**
     * Wms.Inventory.ProductController.o_search - Searches a list of products given a product params (open mode)
     * The parameters are optional
     *
     * Searches a list of products given a product params (open mode)
     * The parameters are optional
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductControllerOSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerOSearch.Responses.$200>;
  };
  ["/inventory/products/osearch"]: {
    /**
     * Wms.Inventory.ProductController.post_osearch - Searches a list of products given a product params (open mode)
     *
     * Searches a list of products given a product params (open mode)
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerPostOsearch.Responses.$200>;
  };
  ["/inventory/products/search"]: {
    /**
     * Wms.Inventory.ProductController.post_search - Searches a list of products given a product params
     * The parameters are optional
     *
     * Searches a list of products given a product params
     * The parameters are optional
     */
    "post"(
      parameters?: Parameters<Paths.WmsInventoryProductControllerPostSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerPostSearch.Responses.$200>;
  };
  ["/inventory/products/trace"]: {
    /**
     * Wms.Inventory.StockController.incoming_outgoing - Show incoming/outgoing movements resume.
     *
     * Show incoming/outgoing movements resume.
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/products/upload"]: {
    /**
     * Wms.Inventory.ProductController.upload - Create multiple products from a CSV file
     *
     * Create multiple products from a CSV file
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/products/{id}"]: {
    /**
     * Wms.Inventory.ProductController.delete - Delete a product by given ID
     *
     * Delete a product by given ID
     */
    "delete"(
      parameters?: Parameters<Paths.WmsInventoryProductControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.ProductController.show - Fetch a product
     *
     * Fetch a product
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerShow.Responses.$200>;
    /**
     * Wms.Inventory.ProductController.update - Updates a product
     *
     * Updates a product
     */
    "put"(
      parameters?: Parameters<Paths.WmsInventoryProductControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductControllerUpdate.Responses.$200>;
  };
  ["/inventory/products/{id}/attach"]: {
    /**
     * Wms.Inventory.ProductController.attach - Attach a document with a product
     *
     * Attach a document with a product
     */
    "post"(
      parameters?: Parameters<Paths.WmsInventoryProductControllerAttach.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/products/{id}/batches"]: {
    /**
     * Wms.Inventory.BatchController.search_by_product - Searches a list of batches given a product id
     *
     * Searches a list of batches given a product id
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsInventoryBatchControllerSearchByProduct.PathParameters &
          Paths.WmsInventoryBatchControllerSearchByProduct.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.BatchController.create - Creates a batch
     *
     * Creates a batch
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/products/{id}/skus"]: {
    /**
     * Wms.Inventory.ProductSkuController.search - Searches a list of product skus given a product id
     *
     * Searches a list of product skus given a product id
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsInventoryProductSkuControllerSearch.PathParameters &
          Paths.WmsInventoryProductSkuControllerSearch.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.ProductSkuController.create - Creates a new product sku
     *
     * Creates a new product sku
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductSkuControllerCreate.Responses.$201>;
  };
  ["/inventory/products/{id}/skus/{sku_id}"]: {
    /**
     * Wms.Inventory.ProductSkuController.delete - Deletes a product sku
     *
     * Deletes a product sku
     */
    "delete"(
      parameters?: Parameters<Paths.WmsInventoryProductSkuControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductSkuControllerDelete.Responses.$200>;
    /**
     * Wms.Inventory.ProductSkuController.show - Gets a SKU of a product
     *
     * Gets a SKU of a product
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductSkuControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductSkuControllerShow.Responses.$200>;
    /**
     * Wms.Inventory.ProductSkuController.update - Updates a product sku
     *
     * Updates a product sku
     */
    "put"(
      parameters?: Parameters<Paths.WmsInventoryProductSkuControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryProductSkuControllerUpdate.Responses.$200>;
  };
  ["/inventory/stocks"]: {
    /**
     * Wms.Inventory.StockController.index - Lists the stocks according the given parameters.
     *
     * Lists the stocks according the given parameters.
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerIndex.Responses.$200>;
  };
  ["/inventory/stocks/add"]: {
    /**
     * Wms.Inventory.StockController.add - Adds a stock quantity.
     *
     * Adds a stock quantity.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/alerts"]: {
    /**
     * Wms.Inventory.ProductQuantityAlertController.index - Lists the product_quantity_alerts according the given parameters
     *
     * Lists the product_quantity_alerts according the given parameters
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductQuantityAlertControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.ProductQuantityAlertController.create - Creates or updates a product_quantity_alert
     *
     * Creates or updates a product_quantity_alert
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/alerts/{id}"]: {
    /**
     * Wms.Inventory.ProductQuantityAlertController.delete - Deletes a product_quantity_alert by id
     *
     * Deletes a product_quantity_alert by id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsInventoryProductQuantityAlertControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.ProductQuantityAlertController.show - Gets a product_quantity_alert by id
     *
     * Gets a product_quantity_alert by id
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryProductQuantityAlertControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/availability"]: {
    /**
     * Wms.Inventory.StockController.availability - Lists the availability of a given product ID list
     * Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted.
     * Can receive a list in the query params
     *
     * Lists the availability of a given product ID list
     * Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted.
     * Can receive a list in the query params
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerAvailability.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerAvailability.Responses.$200>;
  };
  ["/inventory/stocks/availability/products/batches"]: {
    /**
     * Wms.Inventory.StockController.stock_availability_batch - Lists the batch availability of a given product ID
     *
     * Lists the batch availability of a given product ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerStockAvailabilityBatch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerStockAvailabilityBatch.Responses.$200>;
  };
  ["/inventory/stocks/availability/products/{id}/batches"]: {
    /**
     * Wms.Inventory.StockController.availability_batches - Lists the batch availability of a given product ID
     *
     * Lists the batch availability of a given product ID
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/availability/search"]: {
    /**
     * Wms.Inventory.StockController.post_availability - Lists the availability of a given product ID list, Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted. Can receive a list in the query params
     *
     * Lists the availability of a given product ID list, Product availability is the stock quantity (for only picking type locations) minus the quantity in sales order accepted. Can receive a list in the query params
     */
    "post"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerPostAvailability.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerPostAvailability.Responses.$200>;
  };
  ["/inventory/stocks/correct"]: {
    /**
     * Wms.Inventory.StockController.correct - Corrects the stock of a product in an specific location in the given warehouse
     *
     * Corrects the stock of a product in an specific location in the given warehouse
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerCorrect.Responses.$201>;
  };
  ["/inventory/stocks/corrections"]: {
    /**
     * Wms.Inventory.StockController.search_stock_corrections - Lists stock corrections filtering by following params
     *
     * Lists stock corrections filtering by following params
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerSearchStockCorrections.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerSearchStockCorrections.Responses.$200>;
  };
  ["/inventory/stocks/count"]: {
    /**
     * Wms.Inventory.StockController.count - Totalize the stocks according the given parameters
     *
     * Totalize the stocks according the given parameters
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/expiring"]: {
    /**
     * Wms.Inventory.StockController.expiring - Lists the stocks with expiring date ascendant according to the given
     * parameters.
     *
     * Lists the stocks with expiring date ascendant according to the given
     * parameters.
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerExpiring.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/historical"]: {
    /**
     * Wms.Inventory.StockHistoryController.historical_data - Lists a historical of stocks transactions filtered by user's tenant.
     *
     * Lists a historical of stocks transactions filtered by user's tenant.
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockHistoryControllerHistoricalData.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockHistoryControllerHistoricalData.Responses.$200>;
  };
  ["/inventory/stocks/historical/reports"]: {
    /**
     * Wms.Inventory.StockHistoryController.historical_data_csv - Responses a CSV with a historical of stocks transactions filtered by user's tenant.
     *
     * Responses a CSV with a historical of stocks transactions filtered by user's tenant.
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockHistoryControllerHistoricalDataCsv.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/move"]: {
    /**
     * Wms.Inventory.StockController.move - Moves a stock quantity from origin_location to destination_location
     *
     * Moves a stock quantity from origin_location to destination_location
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/occupied_locations"]: {
    /**
     * Wms.Inventory.StockController.occupied_locations - Report occupied positions tock according to given ID
     *
     * Report occupied positions tock according to given ID
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/products/locations"]: {
    /**
     * Wms.Inventory.StockController.search_by_product_and_location - Lists the stocks grouped by product and location according to the given params
     *
     * Lists the stocks grouped by product and location according to the given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerSearchByProductAndLocation.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerSearchByProductAndLocation.Responses.$200>;
  };
  ["/inventory/stocks/remove"]: {
    /**
     * Wms.Inventory.StockController.remove - Removes a stock quantity
     *
     * Removes a stock quantity
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/report"]: {
    /**
     * Wms.Inventory.StockController.summary_stock_csv - Responses a CSV with the summary stock according to given list of
     * warehouse IDs and list of product IDs
     * if product IDs are not provided, it returns all products
     * if warehouse IDs are not provided, it returns all warehouses
     *
     * Responses a CSV with the summary stock according to given list of
     * warehouse IDs and list of product IDs
     * if product IDs are not provided, it returns all products
     * if warehouse IDs are not provided, it returns all warehouses
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerSummaryStockCsv.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/search"]: {
    /**
     * Wms.Inventory.StockController.search - Lists the stocks according the given parameters.
     *
     * Lists the stocks according the given parameters.
     */
    "post"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/states"]: {
    /**
     * Wms.Inventory.StockStateController.index - Lists the stock states according the given parameters
     *
     * Lists the stock states according the given parameters
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockStateControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.StockStateController.create - Creates a new stock state
     *
     * Creates a new stock state
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/states/{id}"]: {
    /**
     * Wms.Inventory.StockStateController.show - Fetch a stock state with by given id
     *
     * Fetch a stock state with by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockStateControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/summary"]: {
    /**
     * Wms.Inventory.StockController.summary_stock - Returns a stock summary grouped by products
     * Can be filter by an specific list of warehouses and products
     *
     * Returns a stock summary grouped by products
     * Can be filter by an specific list of warehouses and products
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockControllerSummaryStock.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsInventoryStockControllerSummaryStock.Responses.$200>;
  };
  ["/inventory/stocks/thresholds"]: {
    /**
     * Wms.Inventory.StockThresholdController.index - Lists the stock_thresholds according the given parameters
     *
     * Lists the stock_thresholds according the given parameters
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryStockThresholdControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.StockThresholdController.merge - Creates or updates a stock threshold. For updating the id of the existing stock threshold must be sent. Product id and location id must be unique per stock threshold
     *
     * Creates or updates a stock threshold. For updating the id of the existing stock threshold must be sent. Product id and location id must be unique per stock threshold
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/thresholds/replenish"]: {
    /**
     * Wms.Inventory.StockThresholdController.replenish - Calculates replenishment items according to given params
     *
     * Calculates replenishment items according to given params
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/thresholds/{id}"]: {
    /**
     * Wms.Inventory.StockThresholdController.delete - Deletes a stock_threshold by ID
     *
     * Deletes a stock_threshold by ID
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.StockThresholdController.show - Gets a stock_threshold by id
     *
     * Gets a stock_threshold by id
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/stocks/{id}"]: {
    /**
     * Wms.Inventory.StockController.update_field - Updates a specific field on stock controller
     *
     * Updates a specific field on stock controller
     */
    "patch"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/inventory/{id}"]: {
    /**
     * Wms.Inventory.InventoryController.delete - Delete a inventory given Id
     *
     * Delete a inventory given Id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsInventoryInventoryControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.InventoryController.show - Show a inventory given ID
     *
     * Show a inventory given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsInventoryInventoryControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Inventory.InventoryController.update - update a inventory given ID
     *
     * update a inventory given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsInventoryInventoryControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/kitting/tasks"]: {
    /**
     * Wms.Kitting.KittingTaskController.search - Searches a list of kitting tasks
     *
     * Searches a list of kitting tasks
     */
    "get"(
      parameters?: Parameters<Paths.WmsKittingKittingTaskControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Kitting.KittingTaskController.create - Creates a Kitting task
     *
     * Creates a Kitting task
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/kitting/tasks/{id}"]: {
    /**
     * Wms.Kitting.KittingTaskController.show - Fetch a kitting task by given id
     *
     * Fetch a kitting task by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsKittingKittingTaskControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Kitting.KittingTaskController.update - update a kit given ID
     *
     * update a kit given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsKittingKittingTaskControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/kitting/tasks/{id}/cancel"]: {
    /**
     * Wms.Kitting.KittingTaskController.cancel - Cancels a kitting task
     *
     * Cancels a kitting task
     */
    "post"(
      parameters?: Parameters<Paths.WmsKittingKittingTaskControllerCancel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/merchants/"]: {
    /**
     * Wms.Merchant.MerchantController.search -  Searches a list of merchants by given parameters. The parameters are optional
     *
     *  Searches a list of merchants by given parameters. The parameters are optional
     */
    "get"(
      parameters?: Parameters<Paths.WmsMerchantMerchantControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantMerchantControllerSearch.Responses.$200>;
    /**
     * Wms.Merchant.MerchantController.create - Create a Merchant
     *
     * Create a Merchant
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantMerchantControllerCreate.Responses.$201>;
  };
  ["/merchants/{id}"]: {
    /**
     * Wms.Merchant.MerchantController.show -  Get a single Merchant
     *
     *  Get a single Merchant
     */
    "get"(
      parameters?: Parameters<Paths.WmsMerchantMerchantControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantMerchantControllerShow.Responses.$200>;
    /**
     * Wms.Merchant.MerchantController.update - Updates a merchant by a given ID
     *
     * Updates a merchant by a given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsMerchantMerchantControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantMerchantControllerUpdate.Responses.$200>;
  };
  ["/merchants/{id}/channels"]: {
    /**
     * Wms.Merchant.ChannelController.search - Searches a list of channels by given parameters. The parameters are optional
     *
     * Searches a list of channels by given parameters. The parameters are optional
     */
    "get"(
      parameters?: Parameters<Paths.WmsMerchantChannelControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantChannelControllerSearch.Responses.$200>;
    /**
     * Wms.Merchant.ChannelController.create - Create a Channel
     *
     * Create a Channel
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantChannelControllerCreate.Responses.$201>;
  };
  ["/merchants/{id}/channels/{channel_id}"]: {
    /**
     * Wms.Merchant.ChannelController.get_channel -  Get the channel
     *
     *  Get the channel
     */
    "get"(
      parameters?: Parameters<Paths.WmsMerchantChannelControllerGetChannel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantChannelControllerGetChannel.Responses.$200>;
    /**
     * Wms.Merchant.ChannelController.update_channel -  Update the merchant channel
     *
     *  Update the merchant channel
     */
    "put"(
      parameters?: Parameters<Paths.WmsMerchantChannelControllerUpdateChannel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsMerchantChannelControllerUpdateChannel.Responses.$200>;
  };
  ["/notification/"]: {
    /**
     * Wms.Notification.NotificationController.index - Searches a list of notifications according to given params
     *
     * Searches a list of notifications according to given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsNotificationNotificationControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/notification/{id}"]: {
    /**
     * Wms.Notification.NotificationController.delete - Deletes a notification by given id
     *
     * Deletes a notification by given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsNotificationNotificationControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Notification.NotificationController.show - Shows a notification by given id
     *
     * Shows a notification by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsNotificationNotificationControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Notification.NotificationController.update - Updates a notification by given ID
     *
     * Updates a notification by given ID
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/boxes"]: {
    /**
     * Wms.Packing.ShipmentBoxTemplateController.search - Searches a list of shipment box given params
     *
     * Searches a list of shipment box given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Packing.ShipmentBoxTemplateController.create - Creates a shipment box template definition
     *
     * Creates a shipment box template definition
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/boxes/attachments"]: {
    /**
     * Wms.Packing.PackingBoxController.fetch_attachments - Fetches attachments from a list of packing box IDs
     *
     * Fetches attachments from a list of packing box IDs
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerFetchAttachments.Responses.$200>;
  };
  ["/packing/boxes/bulk/attachments"]: {
    /**
     * Wms.Packing.PackingBoxController.register_attachment_in_bulk - Register file metadata from s3 response in bulk for packing boxes
     *
     * Register file metadata from s3 response in bulk for packing boxes
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerRegisterAttachmentInBulk.Responses.$200>;
  };
  ["/packing/boxes/{id}"]: {
    /**
     * Wms.Packing.ShipmentBoxTemplateController.delete - Deletes a shipment box data according to the given id
     *
     * Deletes a shipment box data according to the given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Packing.ShipmentBoxTemplateController.show - Show shipment box data according to the given id
     *
     * Show shipment box data according to the given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Packing.ShipmentBoxTemplateController.update - updates a shipment box given ID
     *
     * updates a shipment box given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsPackingShipmentBoxTemplateControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/locations"]: {
    /**
     * Wms.Packing.PackingOrderController.packing_locations - List the available packing locations for a picking task
     *
     * List the available packing locations for a picking task
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerPackingLocations.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders"]: {
    /**
     * Wms.Packing.PackingOrderController.search - Searches a list of packing orders given a packing order params
     *
     * Searches a list of packing orders given a packing order params
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingOrderControllerSearch.Responses.$200>;
  };
  ["/packing/orders/boxes/bulk/shipment_tracking"]: {
    /**
     * Wms.Packing.ShipmentTrackingController.bulk_actions - Operate create and update actions over Shipment Trackings.
     *
     * This endpoint works as bulk, it means that if any shipment trackings creation or update fails it will continue with the others until the end.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerBulkActions.Responses.$200>;
  };
  ["/packing/orders/boxes/search"]: {
    /**
     * Wms.Packing.PackingBoxController.index - Searches a list of packing boxes. Can paginate, sending the query parameters: limit and offset, otherwise the
     * default limit and offset are 0 and 10
     *
     * Searches a list of packing boxes. Can paginate, sending the query parameters: limit and offset, otherwise the
     * default limit and offset are 0 and 10
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingPackingBoxControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerIndex.Responses.$200>;
  };
  ["/packing/orders/bulk"]: {
    /**
     * Wms.Packing.PackingOrderController.bulk_actions - Operate actions over packing orders
     *
     * Operate actions over packing orders
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingOrderControllerBulkActions.Responses.$201>;
  };
  ["/packing/orders/search"]: {
    /**
     * Wms.Packing.PackingOrderController.post_search - Searches a list of packing orders given a packing order params
     *
     * Searches a list of packing orders given a packing order params
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerPostSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingOrderControllerPostSearch.Responses.$200>;
  };
  ["/packing/orders/{id}"]: {
    /**
     * Wms.Packing.PackingOrderController.show - Shows a packing order by given ID
     *
     * Shows a packing order by given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingOrderControllerShow.Responses.$200>;
  };
  ["/packing/orders/{id}/accept"]: {
    /**
     * Wms.Packing.PackingOrderController.accept - Assign a packing order to a user
     *
     * Assign a packing order to a user
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerAccept.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{id}/assign"]: {
    /**
     * Wms.Packing.PackingOrderController.assign - Assigns owner to packing order
     *
     * Assigns owner to packing order
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerAssign.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{id}/close"]: {
    /**
     * Wms.Packing.PackingOrderController.close -  Closes a packing order
     *
     *  Closes a packing order
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerClose.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{id}/finish"]: {
    /**
     * Wms.Packing.PackingOrderController.finish - Finishes a packing order
     *
     * Finishes a packing order
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerFinish.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{id}/lock"]: {
    /**
     * Wms.Packing.PackingOrderController.lock -  Locks a packing order
     *
     *  Locks a packing order
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerLock.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{id}/missing"]: {
    /**
     * Wms.Packing.PackingOrderController.missing - Reports missing quantities for an apparently good finished packing order
     *
     * Reports missing quantities for an apparently good finished packing order
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerMissing.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{id}/shipping_locations"]: {
    /**
     * Wms.Packing.PackingOrderController.shipping_locations - List the available shipping locations for a packing task
     *
     * List the available shipping locations for a packing task
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerShippingLocations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{id}/unlock"]: {
    /**
     * Wms.Packing.PackingOrderController.unlock - Unlocks a packing order
     *
     * Unlocks a packing order
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingOrderControllerUnlock.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/packing/orders/{packing_order_id}/box"]: {
    /**
     * Wms.Packing.PackingBoxController.create_box - creates a packing box according to the given params in
     * request_params
     *
     * creates a packing box according to the given params in
     * request_params
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingBoxControllerCreateBox.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerCreateBox.Responses.$201>;
  };
  ["/packing/orders/{packing_order_id}/boxes"]: {
    /**
     * Wms.Packing.PackingBoxController.search - Searches a list of packing boxes given a packing order ID. Can paginate, sending the query parameters: limit and offset, otherwise the
     * default limit and offset are 0 and 10
     *
     * Searches a list of packing boxes given a packing order ID. Can paginate, sending the query parameters: limit and offset, otherwise the
     * default limit and offset are 0 and 10
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsPackingPackingBoxControllerSearch.PathParameters &
          Paths.WmsPackingPackingBoxControllerSearch.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerSearch.Responses.$200>;
    /**
     * Wms.Packing.PackingBoxController.create - creates a list of packing boxes according to the given params in
     * request_params
     *
     * creates a list of packing boxes according to the given params in
     * request_params
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingBoxControllerCreate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerCreate.Responses.$201>;
  };
  ["/packing/orders/{packing_order_id}/boxes/{box_id}"]: {
    /**
     * Wms.Packing.PackingBoxController.show - Show packing box data according to the given id
     *
     * Show packing box data according to the given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingPackingBoxControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerShow.Responses.$200>;
    /**
     * Wms.Packing.PackingBoxController.update - Updates packing box according to the given id
     * Updatable fields in packing boxes are: attributes
     *
     * Updates packing box according to the given id
     * Updatable fields in packing boxes are: attributes
     */
    "put"(
      parameters?: Parameters<Paths.WmsPackingPackingBoxControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerUpdate.Responses.$200>;
  };
  ["/packing/orders/{packing_order_id}/boxes/{box_id}/attach"]: {
    /**
     * Wms.Packing.PackingBoxController.upload_attachment - Attach a document with a packing box
     *
     * Attach a document with a packing box
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingBoxControllerUploadAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerUploadAttachment.Responses.$200>;
  };
  ["/packing/orders/{packing_order_id}/boxes/{box_id}/attachment"]: {
    /**
     * Wms.Packing.PackingBoxController.register_attachment - Register file metadata from s3 response
     *
     * Register file metadata from s3 response
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingPackingBoxControllerRegisterAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingPackingBoxControllerRegisterAttachment.Responses.$201>;
  };
  ["/packing/orders/{packing_order_id}/boxes/{box_id}/shipment_tracking"]: {
    /**
     * Wms.Packing.ShipmentTrackingController.search - Searches shipment trackings given a packing box ID
     *
     * Searches shipment trackings given a packing box ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerSearch.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerSearch.Responses.$200>;
    /**
     * Wms.Packing.ShipmentTrackingController.create - Creates shipment tracking information for a packing box according to the given ID,
     * which will be related to its attachment information
     *
     * Creates shipment tracking information for a packing box according to the given ID,
     * which will be related to its attachment information
     */
    "post"(
      parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerCreate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerCreate.Responses.$201>;
  };
  ["/packing/orders/{packing_order_id}/boxes/{box_id}/shipment_tracking/{tracking_id}"]: {
    /**
     * Wms.Packing.ShipmentTrackingController.delete - Deletes a shipment tracking data according to the given id
     *
     * Deletes a shipment tracking data according to the given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Packing.ShipmentTrackingController.show - Shows a shipment tracking data according to the given ID
     *
     * Shows a shipment tracking data according to the given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerShow.Responses.$200>;
    /**
     * Wms.Packing.ShipmentTrackingController.update - Updates field of a shipment tracking by a given ID
     *
     * Updates field of a shipment tracking by a given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsPackingShipmentTrackingControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPackingShipmentTrackingControllerUpdate.Responses.$200>;
  };
  ["/picking/bulk/orders"]: {
    /**
     * Wms.Picking.Bulk.BulkPickingOrderController.bulk_create - Creates a list of picking orders according to the given params, this endpoint works as bulk, it
     * means that if any picking creation fails it will continue with the others until the end.
     *
     * Creates a list of picking orders according to the given params, this endpoint works as bulk, it
     * means that if any picking creation fails it will continue with the others until the end.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPickingBulkBulkPickingOrderControllerBulkCreate.Responses.$201>;
  };
  ["/picking/bulk/orders/turbo"]: {
    /**
     * Wms.Picking.Bulk.BulkPickingOrderController.bulk_turbo_create - Creates a list of picking orders according to the given params, this endpoint works as bulk, it
     * means that if any picking creation fails it will continue with the others until the end.
     * This endpoint works asynchronously and returns 204 No content
     *
     * Creates a list of picking orders according to the given params, this endpoint works as bulk, it
     * means that if any picking creation fails it will continue with the others until the end.
     * This endpoint works asynchronously and returns 204 No content
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/cartboxes"]: {
    /**
     * Wms.Picking.CartBoxController.search - Searches a list of cart box given params
     *
     * Searches a list of cart box given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsPickingCartBoxControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Picking.CartBoxController.create - Creates a cart box template definition
     *
     * Creates a cart box template definition
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/cartboxes/assign"]: {
    /**
     * Wms.Picking.CartBoxController.assign_cartbox - Assign a cart box with a sales order, if the cart box does not exist,
     * this process creates a new one
     * Assign a cartbox with a sales order according the given barcode
     *
     * Assign a cart box with a sales order, if the cart box does not exist,
     * this process creates a new one
     * Assign a cartbox with a sales order according the given barcode
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/cartboxes/{id}"]: {
    /**
     * Wms.Picking.CartBoxController.show - Show cart box data according to the given id
     *
     * Show cart box data according to the given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsPickingCartBoxControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Picking.CartBoxController.update - updates a cart box given ID
     *
     * updates a cart box given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsPickingCartBoxControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders"]: {
    /**
     * Wms.Picking.PickingOrderController.search - Searches a list of picking orders given a picking order params.
     *
     * Searches a list of picking orders given a picking order params.
     */
    "get"(
      parameters?: Parameters<Paths.WmsPickingPickingOrderControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPickingPickingOrderControllerSearch.Responses.$200>;
    /**
     * Wms.Picking.PickingOrderController.create - creates a list of picking orders according to the given params
     *
     * creates a list of picking orders according to the given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/turbo"]: {
    /**
     * Wms.Picking.PickingOrderController.turbo_create - creates a list of turbo label picking orders according to the given params.
     * This endpoint works asynchronously and returns 204 No content
     *
     * creates a list of turbo label picking orders according to the given params.
     * This endpoint works asynchronously and returns 204 No content
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}"]: {
    /**
     * Wms.Picking.PickingOrderController.delete - Deletes a picking order
     *
     *
     * Deletes a picking order
     *
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Picking.PickingOrderController.show - Show a picking order by given id.
     *
     *
     * Show a picking order by given id.
     *
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/accept"]: {
    /**
     * Wms.Picking.PickingOrderController.accept - Assign a picking order to a user and set the state to "taken"
     *
     *
     * Assign a picking order to a user and set the state to "taken"
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/assign"]: {
    /**
     * Wms.Picking.PickingOrderController.assign - Assign a picking order with state "queue" to a user
     *
     *
     * Assign a picking order with state "queue" to a user
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/finish"]: {
    /**
     * Wms.Picking.PickingOrderController.finish - Finishes a picking order.
     *
     * changes the status of sales order and moves the stock from the user to packing location.
     * If all picking orders associated to sales order were ended then creates a packing order.
     */
    "post"(
      parameters?: Parameters<Paths.WmsPickingPickingOrderControllerFinish.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/finish_early"]: {
    /**
     * Wms.Picking.PickingOrderController.finish_partial - Finishes a picking order partially.
     *
     * moves the stock from the user to packing location.
     */
    "post"(
      parameters?: Parameters<Paths.WmsPickingPickingOrderControllerFinishPartial.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/pick"]: {
    /**
     * Wms.Picking.PickingOrderController.pick - Picks a list of picking item batches
     *
     *
     * Picks a list of picking item batches
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/route"]: {
    /**
     * Wms.Picking.PickingOrderController.create_route - Creates a list of route items based the given picking order, By default
     * the route item algorithm is based in near locations except when the product is
     * lot type
     *
     *
     * Creates a list of route items based the given picking order, By default
     * the route item algorithm is based in near locations except when the product is
     * lot type
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/route_location"]: {
    /**
     * Wms.Picking.PickingOrderController.create_location_route - Creates a list of route items based the given picking order, The route item
     * algorithm is based in near locations.
     *
     *
     * Creates a list of route items based the given picking order, The route item
     * algorithm is based in near locations.
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/split"]: {
    /**
     * Wms.Picking.PickingOrderController.split - Split a list of picking orders according to the given params
     *
     *
     * Split a list of picking orders according to the given params
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/unassign"]: {
    /**
     * Wms.Picking.PickingOrderController.unassign - Unassign a picking order from a user and set the state to "queue"
     *
     *
     * Unassign a picking order from a user and set the state to "queue"
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/picking/orders/{id}/unlock"]: {
    /**
     * Wms.Picking.PickingOrderController.unlock - Unlocks a picking order. Sets the state to `queue`
     *
     * Unlocks a picking order. Sets the state to `queue`
     */
    "post"(
      parameters?: Parameters<Paths.WmsPickingPickingOrderControllerUnlock.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsPickingPickingOrderControllerUnlock.Responses.$200>;
  };
  ["/reasons/"]: {
    /**
     * Wms.Reason.ReasonCodeController.search - List reason codes
     *
     * List reason codes
     */
    "get"(
      parameters?: Parameters<Paths.WmsReasonReasonCodeControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReasonReasonCodeControllerSearch.Responses.$200>;
    /**
     * Wms.Reason.ReasonCodeController.create - Creates new reason codes according to given params
     *
     * Creates new reason codes according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReasonReasonCodeControllerCreate.Responses.$201>;
  };
  ["/reasons/{id}"]: {
    /**
     * Wms.Reason.ReasonCodeController.update - Updates a reason code by a given ID
     *
     * Updates a reason code by a given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsReasonReasonCodeControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReasonReasonCodeControllerUpdate.Responses.$200>;
  };
  ["/reception/bulk/purchase_orders"]: {
    /**
     * Wms.Reception.Bulk.BulkPurchaseOrderController.bulk_create - Create purchase orders in bulk.
     *
     * This endpoint works as bulk, it means that if any purchase order creation fails it will continue with the others until the end.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReceptionBulkBulkPurchaseOrderControllerBulkCreate.Responses.$201>;
    /**
     * Wms.Reception.Bulk.BulkPurchaseOrderController.bulk_update - Update Purchase orders in bulk.
     *
     * This endpoint works as bulk, it means that if any Purchase order update fails it will continue with the others until the end.
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReceptionBulkBulkPurchaseOrderControllerBulkUpdate.Responses.$201>;
  };
  ["/reception/incoming_goods"]: {
    /**
     * Wms.Reception.IncomingGoodController.search - Search incoming goods according to params
     *
     * Search incoming goods according to params
     */
    "get"(
      parameters?: Parameters<Paths.WmsReceptionIncomingGoodControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Reception.IncomingGoodController.create - creates an incoming good according to given params
     *
     * creates an incoming good according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/reception/incoming_goods/turbo_reception"]: {
    /**
     * Wms.Reception.IncomingGoodController.turbo_reception - creates an incoming good according to a purchase order
     *
     * creates an incoming good according to a purchase order
     */
    "post"(
      parameters?: Parameters<
        Paths.WmsReceptionIncomingGoodControllerTurboReception.PathParameters &
          Paths.WmsReceptionIncomingGoodControllerTurboReception.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/reception/incoming_goods/{id}"]: {
    /**
     * Wms.Reception.IncomingGoodController.show - Search an Incoming good document by valid id
     *
     * Search an Incoming good document by valid id
     */
    "get"(
      parameters?: Parameters<Paths.WmsReceptionIncomingGoodControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/reception/incoming_goods/{id}/items/{item_id}/attach"]: {
    /**
     * Wms.Reception.IncomingGoodController.upload_item_attachment - Attach a document with an Incoming Good Item
     *
     * Attach a document with an Incoming Good Item
     */
    "post"(
      parameters?: Parameters<Paths.WmsReceptionIncomingGoodControllerUploadItemAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/reception/purchase_orders"]: {
    /**
     * Wms.Reception.PurchaseOrderController.search - Searches a list of purchase orders given a purchase order params
     *
     * Searches a list of purchase orders given a purchase order params
     */
    "get"(
      parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerSearch.Responses.$200>;
    /**
     * Wms.Reception.PurchaseOrderController.create - Create a purchase order
     *
     * Create a purchase order
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerCreate.Responses.$201>;
  };
  ["/reception/purchase_orders/upload"]: {
    /**
     * Wms.Reception.PurchaseOrderController.upload - Create multiple purchase orders from a CSV file
     *
     * Create multiple purchase orders from a CSV file
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/reception/purchase_orders/{id}"]: {
    /**
     * Wms.Reception.PurchaseOrderController.delete - Delete a purchase order by given id
     *
     * Delete a purchase order by given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Reception.PurchaseOrderController.show - Show a purchase order by given id
     *
     * Show a purchase order by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerShow.Responses.$200>;
    /**
     * Wms.Reception.PurchaseOrderController.update_field - Updates a specific field on purchase order
     *
     * Updates a specific field on purchase order
     */
    "patch"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Reception.PurchaseOrderController.update - Updates a purchase order
     *
     * Updates a purchase order
     */
    "put"(
      parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/reception/purchase_orders/{id}/attach"]: {
    /**
     * Wms.Reception.PurchaseOrderController.upload_attachment - Attach a document with a purchase order
     *
     * Attach a document with a purchase order
     */
    "post"(
      parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerUploadAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/reception/purchase_orders/{id}/attachments/{attachment_id}"]: {
    /**
     * Wms.Reception.PurchaseOrderController.delete_attachment - Delete attachments
     *
     * Delete attachments
     */
    "delete"(
      parameters?: Parameters<Paths.WmsReceptionPurchaseOrderControllerDeleteAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsReceptionPurchaseOrderControllerDeleteAttachment.Responses.$200>;
  };
  ["/replenishment/orders"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.search - Searches a list of replenishment orders
     *
     * Searches a list of replenishment orders
     */
    "get"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Replenishment.ReplenishmentOrderController.create - Creates a manual replenishment order according to given params
     *
     * Creates a manual replenishment order according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/alerts"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.alerts - Create replenishment order based on product quantity alert ids
     *
     * Create replenishment order based on product quantity alert ids
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/merge"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.merge_orders - Merges a list of replenishment orders into one
     *
     * Merges a list of replenishment orders into one
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.show - Gets a replenishment order by id
     *
     * Gets a replenishment order by id
     */
    "get"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/accept"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.accept - Assign a replenishment order to a user and set the state to `taken`
     *
     * Assign a replenishment order to a user and set the state to `taken`
     */
    "post"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerAccept.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/assign"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.update_owner - Updates the owner_id from a replenishment order
     *
     * Updates the owner_id from a replenishment order
     */
    "post"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerUpdateOwner.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/cancel"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.cancel - Cancels a replenishment order to a user
     *
     * Cancels a replenishment order to a user
     */
    "post"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerCancel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/finish"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.finish - Ends a replenishment order
     *
     * Ends a replenishment order
     */
    "post"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerFinish.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/items"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.items - Moves a list of items from a location to another location
     *
     * Moves a list of items from a location to another location
     */
    "post"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerItems.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/pick_item"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.pick_item - Picks an item in the replenishment order
     *
     * Picks an item in the replenishment order
     */
    "post"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerPickItem.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/route"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.create_route - Creates a list of replenishment route items
     *
     * Creates a list of replenishment route items
     */
    "post"(
      parameters?: Parameters<Paths.WmsReplenishmentReplenishmentOrderControllerCreateRoute.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{id}/split"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.split_order - Split a replenishment order according to the given params
     *
     *
     * Split a replenishment order according to the given params
     *
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/replenishment/orders/{replenishment_order_id}/split_item/{id}"]: {
    /**
     * Wms.Replenishment.ReplenishmentOrderController.split_item - Splits a replenishment item when the destination location change
     *
     * Splits a replenishment item when the destination location change
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/bulk/orders"]: {
    /**
     * Wms.Sales.Bulk.BulkSalesOrderController.bulk_create -  Create sales orders in bulk.
     *
     * This endpoint works as bulk, it means that if any sales order creation fails it will continue with the others until the end.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkCreate.Responses.$201>;
    /**
     * Wms.Sales.Bulk.BulkSalesOrderController.bulk_update - Update sales orders in bulk.
     *
     * This endpoint works as bulk, it means that if any sales order update fails it will continue with the others until the end.
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkUpdate.Responses.$201>;
  };
  ["/sales/bulk/orders/cancel"]: {
    /**
     * Wms.Sales.Bulk.BulkSalesOrderController.bulk_cancel - Cancel sales orders in bulk.
     *
     * Cancel payload have multiple formats due to different ways to specify which sales orders should be deleted:
     * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
     * * A list of order_nums: E.G. `["order_num1", ...]`
     * * A list of structs with id: E.G. `[%{id: 1}, ...]`
     * * A list of ids: E.G. `[1, ...]`
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/bulk/orders/fulfillments/pause"]: {
    /**
     * Wms.Sales.Bulk.BulkFulfillmentOrderController.bulk_pause - Pause fulfillment orders in bulk.
     *
     * Pause payload have multiple formats due to different ways to specify which fulfillment orders should be paused:
     * * A list of structs with id: E.G. `[%{id: 1}, ...]`
     * * A list of ids: E.G. `[1, ...]`
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/bulk/orders/fulfillments/resume"]: {
    /**
     * Wms.Sales.Bulk.BulkFulfillmentOrderController.bulk_resume - Resume fulfillment orders in bulk.
     *
     * Resume payload have multiple formats due to different ways to specify which fulfillment orders should be resumed:
     * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
     * * A list of order_nums: E.G. `["order_num1", ...]`
     * * A list of structs with id: E.G. `[%{id: 1}, ...]`
     * * A list of ids: E.G. `[1, ...]`
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/bulk/orders/pause"]: {
    /**
     * Wms.Sales.Bulk.BulkSalesOrderController.bulk_pause - Pause sales orders in bulk.
     *
     * Pause payload have multiple formats due to different ways to specify which sales orders should be deleted:
     * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
     * * A list of order_nums: E.G. `["order_num1", ...]`
     * * A list of structs with id: E.G. `[%{id: 1}, ...]`
     * * A list of ids: E.G. `[1, ...]`
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/bulk/orders/quick"]: {
    /**
     * Wms.Sales.Bulk.BulkSalesOrderController.bulk_quick_create -  Create quick orders in bulk.
     *
     * This endpoint works as bulk, it means that if any sales order creation fails it will continue with the others until the end.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkQuickCreate.Responses.$201>;
  };
  ["/sales/bulk/orders/resume"]: {
    /**
     * Wms.Sales.Bulk.BulkSalesOrderController.bulk_resume - Resume sales orders in bulk.
     *
     * Resume payload have multiple formats due to different ways to specify which sales orders should be resumed:
     * * A list of structs with order_num: E.G. `[%{order_num: "order_num1"}, ...]`
     * * A list of order_nums: E.G. `["order_num1", ...]`
     * * A list of structs with id: E.G. `[%{id: 1}, ...]`
     * * A list of ids: E.G. `[1, ...]`
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesBulkBulkSalesOrderControllerBulkResume.Responses.$201>;
  };
  ["/sales/bulk/orders/return_labels"]: {
    /**
     * Wms.Sales.Bulk.BulkSalesOrderController.bulk_attach_return_labels - Bulk attach return labels to sales_orders
     *
     * Bulk attach return labels to sales_orders requires two parameters
     * * A list of sales order ids: E.G. `[1, ...]`
     * * A list of return labels codes
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders"]: {
    /**
     * Wms.Sales.SalesOrderController.search - Search Sales Orders, searches a list of existing sales orders given some of the following params
     *
     * Search Sales Orders, searches a list of existing sales orders given some of the following params
     */
    "get"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerSearch.Responses.$200>;
    /**
     * Wms.Sales.SalesOrderController.create - Create and show the new sales order according to given params
     *
     * Create and show the new sales order according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerCreate.Responses.$201>;
  };
  ["/sales/orders/criteria"]: {
    /**
     * Wms.Sales.SalesOrderController.filter_criteria - Search a list of sales orders according to given criteria
     *
     * Search a list of sales orders according to given criteria
     */
    "get"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerFilterCriteria.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/fulfillments"]: {
    /**
     * Wms.Sales.FulfillmentOrderController.search - Search Fulfillment Orders, searches a list of existing fulfillment orders given some of the following params
     *
     * Search Fulfillment Orders, searches a list of existing fulfillment orders given some of the following params
     */
    "get"(
      parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerSearch.Responses.$200>;
  };
  ["/sales/orders/products_summary"]: {
    /**
     * Wms.Sales.SalesOrderController.products_summary
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/quick"]: {
    /**
     * Wms.Sales.SalesOrderController.create_quick_sales - Create quick sales order
     * Creates a sales orders ended with a picking, a packing and a stock movement
     * No webhooks are triggered in this process
     *
     * Create quick sales order
     * Creates a sales orders ended with a picking, a packing and a stock movement
     * No webhooks are triggered in this process
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerCreateQuickSales.Responses.$200>;
  };
  ["/sales/orders/search"]: {
    /**
     * Wms.Sales.SalesOrderController.post_search - Search Sales Orders, searches a list of existing sales orders given some of the following params
     *
     * Search Sales Orders, searches a list of existing sales orders given some of the following params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerPostSearch.Responses.$200>;
  };
  ["/sales/orders/upload"]: {
    /**
     * Wms.Sales.SalesOrderController.upload - Create multiple sales orders from a CSV file
     *
     * Create multiple sales orders from a CSV file
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/{id}"]: {
    /**
     * Wms.Sales.SalesOrderController.show - Searches a sales orders by id
     *
     * Searches a sales orders by id
     */
    "get"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Sales.SalesOrderController.update_field - Update a field in Sales Order
     * Updates priority or is_cart field on sales order
     *
     * Update a field in Sales Order
     * Updates priority or is_cart field on sales order
     */
    "patch"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerUpdateField.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Sales.SalesOrderController.update - Updates a sales order given Id.
     *
     * Updates a sales order given Id.
     */
    "put"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/{id}/attach"]: {
    /**
     * Wms.Sales.SalesOrderController.upload_attachment - Attach a document with a sales order according to the given ID
     *
     * Attach a document with a sales order according to the given ID
     */
    "post"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerUploadAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerUploadAttachment.Responses.$201>;
  };
  ["/sales/orders/{id}/attachment"]: {
    /**
     * Wms.Sales.SalesOrderController.register_attachment - Register file metadata from s3 response
     *
     * Register file metadata from s3 response
     */
    "post"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerRegisterAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerRegisterAttachment.Responses.$201>;
  };
  ["/sales/orders/{id}/attachments/{attachment_id}"]: {
    /**
     * Wms.Sales.SalesOrderController.delete_attachment - Delete attachments
     *
     * Delete attachments
     */
    "delete"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerDeleteAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerDeleteAttachment.Responses.$200>;
  };
  ["/sales/orders/{id}/cancel"]: {
    /**
     * Wms.Sales.SalesOrderController.cancel - Cancels a sales order
     * Orders in state ended can not be cancelled, neither orders in state picking when there are no available packing locations.
     * The result action depends of the sales order's state.
     *
     * Cancels a sales order
     * Orders in state ended can not be cancelled, neither orders in state picking when there are no available packing locations.
     * The result action depends of the sales order's state.
     */
    "post"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerCancel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerCancel.Responses.$200>;
  };
  ["/sales/orders/{id}/dispatched"]: {
    /**
     * Wms.Sales.SalesOrderController.dispatched - Searches sales orders dispatched data by id
     *
     * Searches sales orders dispatched data by id
     */
    "get"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerDispatched.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/{id}/pause"]: {
    /**
     * Wms.Sales.SalesOrderController.pause - Pauses a sales orders by id, Just orders in state queue can be paused
     *
     * Pauses a sales orders by id, Just orders in state queue can be paused
     */
    "post"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerPause.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/{id}/resume"]: {
    /**
     * Wms.Sales.SalesOrderController.resume - Resumes a sales order
     * Orders in state `paused` can be resumed and changes its status to `queue`
     * The result action depends of the sales order's state.
     *
     * Resumes a sales order
     * Orders in state `paused` can be resumed and changes its status to `queue`
     * The result action depends of the sales order's state.
     */
    "post"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerResume.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerResume.Responses.$200>;
  };
  ["/sales/orders/{id}/return_labels"]: {
    /**
     * Wms.Sales.SalesOrderController.attach_return_labels - Attach a list of return labels on sales order of any status
     *
     * Attach a list of return labels on sales order of any status
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesSalesOrderControllerAttachReturnLabels.Responses.$200>;
  };
  ["/sales/orders/{id}/returns"]: {
    /**
     * Wms.Sales.SalesOrderController.get_return_data - Get returned data given a sales order
     *
     * Get returned data given a sales order
     */
    "get"(
      parameters?: Parameters<Paths.WmsSalesSalesOrderControllerGetReturnData.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/{sales_order_id}/fulfillments"]: {
    /**
     * Wms.Sales.FulfillmentOrderController.search_by_sales_order_id - Search Fulfillment Orders from a specific sales order, searches a list of existing fulfillment orders given some of the following params
     *
     * Search Fulfillment Orders from a specific sales order, searches a list of existing fulfillment orders given some of the following params
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsSalesFulfillmentOrderControllerSearchBySalesOrderId.PathParameters &
          Paths.WmsSalesFulfillmentOrderControllerSearchBySalesOrderId.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerSearchBySalesOrderId.Responses.$200>;
  };
  ["/sales/orders/{sales_order_id}/fulfillments/{fulfillment_order_id}"]: {
    /**
     * Wms.Sales.FulfillmentOrderController.show - Searches a fulfillment order by id
     *
     * Searches a fulfillment order by id
     */
    "get"(
      parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerShow.Responses.$200>;
    /**
     * Wms.Sales.FulfillmentOrderController.update_field - Update a field in Fulfillment Order
     * Updates priority or is_cart field on Fulfillment order
     *
     * Update a field in Fulfillment Order
     * Updates priority or is_cart field on Fulfillment order
     */
    "patch"(
      parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerUpdateField.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/sales/orders/{sales_order_id}/fulfillments/{fulfillment_order_id}/custom_route"]: {
    /**
     * Wms.Sales.FulfillmentOrderController.assign_custom_route_rule - Assigns a custom picking route rule to the fulfillment order
     * If the fulfillment order is picked, the given rule will have priority when calculating the route
     *
     * Assigns a custom picking route rule to the fulfillment order
     * If the fulfillment order is picked, the given rule will have priority when calculating the route
     */
    "post"(
      parameters?: Parameters<Paths.WmsSalesFulfillmentOrderControllerAssignCustomRouteRule.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsSalesFulfillmentOrderControllerAssignCustomRouteRule.Responses.$200>;
  };
  ["/setting/"]: {
    /**
     * Wms.Setting.SettingController.search - Searches a list of settings given params
     *
     * Searches a list of settings given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsSettingSettingControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Setting.SettingController.create - Create a setting
     *
     * ## Create settings
     * You can create it by:
     * * tenant_id
     * * warehouse_id
     * * user_id
     * **Note:** *key should be unique in combination with tenant_id, warehouse_id or user_id*
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/setting/{id}"]: {
    /**
     * Wms.Setting.SettingController.delete - Delete an setting given ID
     *
     * Delete an setting given ID
     */
    "delete"(
      parameters?: Parameters<Paths.WmsSettingSettingControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Setting.SettingController.show - Show an setting given ID
     *
     * Show an setting given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsSettingSettingControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Setting.SettingController.update - update a setting given ID
     *
     * update a setting given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsSettingSettingControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/bulk/shipping_methods"]: {
    /**
     * Wms.Shipping.ShippingMethodController.bulk_upsert - Creates or updates a shipping method according to given params
     *
     * Creates or updates a shipping method according to given params
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/loaded_shipping_boxes"]: {
    /**
     * Wms.Shipping.LoadedShippingBoxController.search - Searches Loaded shipping boxes given some of the following params
     *
     * Searches Loaded shipping boxes given some of the following params
     */
    "get"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsShippingLoadedShippingBoxControllerSearch.Responses.$200>;
    /**
     * Wms.Shipping.LoadedShippingBoxController.create - Creates a Loaded Shipping Box according to given params
     *
     * Creates a Loaded Shipping Box according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/loaded_shipping_boxes/{id}"]: {
    /**
     * Wms.Shipping.LoadedShippingBoxController.delete_loaded_shipping_box - Deletes a Loaded Shipping Box in progress
     *
     * Deletes a Loaded Shipping Box in progress
     */
    "delete"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerDeleteLoadedShippingBox.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Shipping.LoadedShippingBoxController.show - Shows a loaded shipping box data according to the given id
     *
     * Shows a loaded shipping box data according to the given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/loaded_shipping_boxes/{id}/boxes/{box_id}"]: {
    /**
     * Wms.Shipping.LoadedShippingBoxController.delete_box - Deletes a packing box from a Loaded Shipping Box in progress
     *
     * Deletes a packing box from a Loaded Shipping Box in progress
     */
    "delete"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerDeleteBox.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/loaded_shipping_boxes/{id}/finish"]: {
    /**
     * Wms.Shipping.LoadedShippingBoxController.finish - Finishes a loaded shipping box
     *
     * Finishes a loaded shipping box
     */
    "post"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerFinish.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/loaded_shipping_boxes/{id}/finish_partial"]: {
    /**
     * Wms.Shipping.LoadedShippingBoxController.finish_partial - Finishes partially a loaded shipping box
     *
     * Finishes partially a loaded shipping box
     */
    "post"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerFinishPartial.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/loaded_shipping_boxes/{id}/load"]: {
    /**
     * Wms.Shipping.LoadedShippingBoxController.load_boxes - Loads shipping boxes in a Loaded Shipping Box in progress
     *
     * Loads shipping boxes in a Loaded Shipping Box in progress
     */
    "post"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerLoadBoxes.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/loaded_shipping_boxes/{id}/reassign"]: {
    /**
     * Wms.Shipping.LoadedShippingBoxController.reassign - Re assign loaded shipping box to a new user
     *
     * Re assign loaded shipping box to a new user
     */
    "post"(
      parameters?: Parameters<Paths.WmsShippingLoadedShippingBoxControllerReassign.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/orders"]: {
    /**
     * Wms.Shipping.ShippingOrderController.search - Searches a list of shipping orders given params
     *
     * Searches a list of shipping orders given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsShippingShippingOrderControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/orders/{id}"]: {
    /**
     * Wms.Shipping.ShippingOrderController.show - Show shipping order data according to the given id
     *
     * Show shipping order data according to the given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsShippingShippingOrderControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/orders/{id}/finish"]: {
    /**
     * Wms.Shipping.ShippingOrderController.finish - Finish a shipping order
     *
     * Finish a shipping order
     */
    "post"(
      parameters?: Parameters<Paths.WmsShippingShippingOrderControllerFinish.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/orders/{id}/move"]: {
    /**
     * Wms.Shipping.ShippingOrderController.move - Move a shipping order to another shipping location
     *
     * Move a shipping order to another shipping location
     */
    "post"(
      parameters?: Parameters<Paths.WmsShippingShippingOrderControllerMove.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/shipping_methods"]: {
    /**
     * Wms.Shipping.ShippingMethodController.search - Searches a list of shipping_methods
     *
     * Searches a list of shipping_methods
     */
    "get"(
      parameters?: Parameters<Paths.WmsShippingShippingMethodControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Shipping.ShippingMethodController.create - Creates a Shipping method according to given params
     *
     * Creates a Shipping method according to given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/shipping/shipping_methods/{id}"]: {
    /**
     * Wms.Shipping.ShippingMethodController.delete - Deletes a shipping_method by given id
     *
     * Deletes a shipping_method by given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsShippingShippingMethodControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Shipping.ShippingMethodController.show - Fetch a shipping_method by given id
     *
     * Fetch a shipping_method by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsShippingShippingMethodControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Shipping.ShippingMethodController.update - update a shipping method given ID
     *
     * update a shipping method given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsShippingShippingMethodControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/"]: {
    /**
     * Wms.Warehouse.WarehouseController.index - Lists the warehouses from a user tenant
     *
     * Lists the warehouses from a user tenant
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseWarehouseControllerIndex.Responses.$200>;
    /**
     * Wms.Warehouse.WarehouseController.create - Creates a new warehouse
     *
     * Creates a new warehouse by passing the following fields:
     * * **name:** The string with the name of the warehouse
     * * **active:** Receives *true* or *false* and determines when a warehouse is enabled in a tenant
     * * **line1:** The string with address information
     * * **line2:** The string with aditional address information
     * * **city:** The string with the City where is located the warehouse
     * * **state:** The string with the State where is located the warehouse
     * * **country_code:** The string with the Country code where is located the warehouse
     * * **zip_code:** The string with the zipcode
     * * **phone:** The string with the phone number of warehouse
     * * **fax:** The string with the fax number of warehouse
     * * **tenant:** The tenant to which warehouse belongs
     * * **site:** The physical address which one or multiple warehouses can be located. This field is optional
     * * **priority:** The order of importance of a warehouse when it shares the same site with other warehouses. A priority can not be repeated for the same site. This field is optional
     * * **company_name:** The warehouse company name
     * * **email:** The warehouse email
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseWarehouseControllerCreate.Responses.$201>;
  };
  ["/warehouses/connections"]: {
    /**
     * Wms.Warehouse.ConnectionController.batch_delete - Updates a list of connection
     *
     * Updates a list of connection
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.ConnectionController.search - Searches a list of connections.
     * Can paginate, sending the query parameters: limit and offset, otherwise the
     * default limit and offset are 0 and 10.
     *
     * Searches a list of connections.
     * Can paginate, sending the query parameters: limit and offset, otherwise the
     * default limit and offset are 0 and 10.
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseConnectionControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseConnectionControllerSearch.Responses.$200>;
    /**
     * Wms.Warehouse.ConnectionController.create - Creates a connection. The changeset validates that the `connection code` is unique before insert.
     *
     * Creates a connection. The changeset validates that the `connection code` is unique before insert.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseConnectionControllerCreate.Responses.$201>;
    /**
     * Wms.Warehouse.ConnectionController.batch_update - Updates a list of connection
     *
     * Updates a list of connection
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/connections/{id}"]: {
    /**
     * Wms.Warehouse.ConnectionController.delete - Updates a connection
     *
     * Updates a connection
     */
    "delete"(
      parameters?: Parameters<Paths.WmsWarehouseConnectionControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.ConnectionController.show - Show a connection by given id. The function validates whether the id is valid or not
     *
     * Show a connection by given id. The function validates whether the id is valid or not
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseConnectionControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseConnectionControllerShow.Responses.$200>;
    /**
     * Wms.Warehouse.ConnectionController.update - Updates a connection
     *
     * Updates a connection
     */
    "put"(
      parameters?: Parameters<Paths.WmsWarehouseConnectionControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/location_types"]: {
    /**
     * Wms.Warehouse.LocationTypeController.search - Searches a list of location types given an id(s), name(s)
     *
     * Searches a list of location types given an id(s), name(s)
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseLocationTypeControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/location_types/{id}"]: {
    /**
     * Wms.Warehouse.LocationTypeController.show - Show a location type data from given ID
     *
     * Show a location type data from given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseLocationTypeControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/locations"]: {
    /**
     * Wms.Warehouse.LocationController.batch_delete - Deletes a list of locations
     *
     * Deletes a list of locations
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.LocationController.index - Lists the locations. Filtered according the given fields in params
     *
     * Lists the locations. Filtered according the given fields in params
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseLocationControllerIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseLocationControllerIndex.Responses.$200>;
    /**
     * Wms.Warehouse.LocationController.create - Creates a location. The changeset validates that the `location code` is unique before insert
     *
     * Creates a location. The changeset validates that the `location code` is unique before insert
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseLocationControllerCreate.Responses.$201>;
    /**
     * Wms.Warehouse.LocationController.batch_update - Updates a list of locations
     *
     * Updates a list of locations
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/locations/bulk/stocks/states"]: {
    /**
     * Wms.Warehouse.LocationController.assign_stock_states - Controls the inventory in locations, blocking or unblocking the stocks according the given params
     *
     * Controls the inventory in locations, blocking or unblocking the stocks according the given params
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseLocationControllerAssignStockStates.Responses.$201>;
  };
  ["/warehouses/locations/categories/assign"]: {
    /**
     * Wms.Warehouse.LocationController.assign_tags - Assigns multiple product categories with multiple locations
     *
     * Assigns multiple product categories with multiple locations
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/locations/search"]: {
    /**
     * Wms.Warehouse.LocationController.post_index - Lists the locations
     *
     * Lists the locations
     */
    "post"(
      parameters?: Parameters<Paths.WmsWarehouseLocationControllerPostIndex.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/locations/{id}"]: {
    /**
     * Wms.Warehouse.LocationController.delete - Deletes a location by given id
     *
     * Deletes a location by given id
     */
    "delete"(
      parameters?: Parameters<Paths.WmsWarehouseLocationControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.LocationController.show - Show a location by given id. The function validates if the id is valid or not
     *
     * Show a location by given id. The function validates if the id is valid or not
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseLocationControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseLocationControllerShow.Responses.$200>;
    /**
     * Wms.Warehouse.LocationController.update - Update fields of location by given id
     *
     * Update fields of location by given id
     */
    "put"(
      parameters?: Parameters<Paths.WmsWarehouseLocationControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseLocationControllerUpdate.Responses.$201>;
  };
  ["/warehouses/locations/{id}/connection/{destination_location_id}"]: {
    /**
     * Wms.Warehouse.ConnectionController.delete_by_locations - Delete a connection between two given location ids
     *
     * Delete a connection between two given location ids
     */
    "delete"(
      parameters?: Parameters<Paths.WmsWarehouseConnectionControllerDeleteByLocations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.ConnectionController.search_by_locations - Searches a connection between two given location ids
     *
     * Searches a connection between two given location ids
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseConnectionControllerSearchByLocations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/racks"]: {
    /**
     * Wms.Warehouse.RackController.batch_delete - Deletes a list of rack according to theirs ids, if one deletion fail all transaction will fail one deletion fail all transaction will fail
     *
     * Deletes a list of rack according to theirs ids, if one deletion fail all transaction will fail one deletion fail all transaction will fail
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.RackController.search - Searches a list of racks given filter params
     *
     * Searches a list of racks given filter params
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseRackControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseRackControllerSearch.Responses.$200>;
    /**
     * Wms.Warehouse.RackController.create - Creates a rack
     *
     * Creates a rack
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseRackControllerCreate.Responses.$201>;
    /**
     * Wms.Warehouse.RackController.batch_update - Updates a list of racks
     *
     * Updates a list of racks
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/racks/{id}"]: {
    /**
     * Wms.Warehouse.RackController.delete - Deletes a rack by id
     *
     * Deletes a rack by id
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.RackController.show - Show a rack by given id
     *
     * Show a rack by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseRackControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseRackControllerShow.Responses.$200>;
    /**
     * Wms.Warehouse.RackController.update - Updates a rack
     *
     * Updates a rack
     */
    "put"(
      parameters?: Parameters<Paths.WmsWarehouseRackControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseRackControllerUpdate.Responses.$201>;
  };
  ["/warehouses/zones"]: {
    /**
     * Wms.Warehouse.ZoneController.batch_delete - Deletes a list of locations
     *
     * Deletes a list of locations
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.ZoneController.search - Searches a list of zones given filter params
     *
     * Searches a list of zones given filter params
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseZoneControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseZoneControllerSearch.Responses.$200>;
    /**
     * Wms.Warehouse.ZoneController.create - Creates a warehouse zone
     *
     * Creates a warehouse zone
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseZoneControllerCreate.Responses.$201>;
    /**
     * Wms.Warehouse.ZoneController.batch_update - Updates a list of zones
     *
     * Updates a list of zones
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/zones/{id}"]: {
    /**
     * Wms.Warehouse.ZoneController.delete - Deletes a zone by id
     *
     * Deletes a zone by id
     */
    "delete"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Warehouse.ZoneController.show - Show a zone by given id
     *
     * Show a zone by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseZoneControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseZoneControllerShow.Responses.$200>;
    /**
     * Wms.Warehouse.ZoneController.update - Updates a zone
     *
     * Updates a zone
     */
    "put"(
      parameters?: Parameters<Paths.WmsWarehouseZoneControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/zones/{id}/list"]: {
    /**
     * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
     *
     * Lists the locations by zone
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
          Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/zones/{id}/list/{hallway}"]: {
    /**
     * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
     *
     * Lists the locations by zone
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
          Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/zones/{id}/list/{hallway}/{row}"]: {
    /**
     * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
     *
     * Lists the locations by zone
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
          Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/zones/{id}/list/{hallway}/{row}/{module}"]: {
    /**
     * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
     *
     * Lists the locations by zone
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
          Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/zones/{id}/list/{hallway}/{row}/{module}/{level}"]: {
    /**
     * Wms.Warehouse.LocationController.index_by_zone - Lists the locations by zone
     *
     * Lists the locations by zone
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsWarehouseLocationControllerIndexByZone.PathParameters &
          Paths.WmsWarehouseLocationControllerIndexByZone.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/{id}"]: {
    /**
     * Wms.Warehouse.WarehouseController.show - Fetch a warehouse by given id
     *
     * Fetch a warehouse by given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseWarehouseControllerShow.Responses.$200>;
    /**
     * Wms.Warehouse.WarehouseController.update - Update fields of warehouse by given id
     *
     * Update fields of warehouse by given id
     */
    "put"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseWarehouseControllerUpdate.Responses.$200>;
  };
  ["/warehouses/{id}/empty_locations"]: {
    /**
     * Wms.Warehouse.WarehouseController.search_empty_locations -  Receives a list of location ids from a given warehouse
     *  and a list with each location and if its empty or not
     *
     *  Receives a list of location ids from a given warehouse
     *  and a list with each location and if its empty or not
     */
    "post"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerSearchEmptyLocations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWarehouseWarehouseControllerSearchEmptyLocations.Responses.$200>;
  };
  ["/warehouses/{id}/locations"]: {
    /**
     * Wms.Warehouse.WarehouseController.get_locations - Fetch locations associated to a warehouse given id
     *
     * Fetch locations associated to a warehouse given id
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerGetLocations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/{id}/locations/download_priorities"]: {
    /**
     * Wms.Warehouse.WarehouseController.download_priorities_csv_template - Returns a CSV with storage and cross docking locations
     * according to the given warehouse ID
     *
     * Returns a CSV with storage and cross docking locations
     * according to the given warehouse ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerDownloadPrioritiesCsvTemplate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/{id}/locations/suggestion"]: {
    /**
     * Wms.Warehouse.WarehouseController.get_suggested_locations - Fetch locations associated to a warehouse given id and according to setting direct_storing_enabled.
     *
     * Fetch locations associated to a warehouse given id and according to setting direct_storing_enabled.
     */
    "get"(
      parameters?: Parameters<
        Paths.WmsWarehouseWarehouseControllerGetSuggestedLocations.PathParameters &
          Paths.WmsWarehouseWarehouseControllerGetSuggestedLocations.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/{id}/locations/upload_priorities"]: {
    /**
     * Wms.Warehouse.WarehouseController.upload_location_priorities - Updates warehousing location priorities
     *
     * Updates warehousing location priorities
     */
    "post"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerUploadLocationPriorities.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/warehouses/{w_id}/locations/search"]: {
    /**
     * Wms.Warehouse.WarehouseController.post_get_locations - Fetch locations associated to a warehouse given id
     *
     * Fetch locations associated to a warehouse given id
     */
    "post"(
      parameters?: Parameters<Paths.WmsWarehouseWarehouseControllerPostGetLocations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/webhook/"]: {
    /**
     * Wms.Webhook.WebhookController.search - Searches a list of webhooks given params
     *
     * Searches a list of webhooks given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsWebhookWebhookControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookControllerSearch.Responses.$200>;
    /**
     * Wms.Webhook.WebhookController.create - Create a webhook
     *
     * Allow a warehouse to pass data to another APIs through remote calls when an event is triggered.
     * When an event triggers a webhook, this is sent with an specific payload to the target endpoint according the event
     * allowed type. In this way, allowed_types values are going to send the data of the entity from the origin event
     * (See models section at the end of this page to see the structure for each one)
     * Following fields must by passed:
     * * **url:** Target endpoint to send/retrieve data
     * * **method:** Request method: *GET, POST*
     * * **allowed_types:** List of events to trigger this webhook. Currently supports:
     * *sales_order_created
     * sales_order_cancelled
     * sales_order_updated
     * sales_order_finished
     * picking_order_created
     * picking_order_finished
     * picking_order_cancelled
     * packing_order_created
     * packing_order_finished
     * packing_order_finished
     * packing_order_cancelled
     * turbo_label_packing_created
     * packing_box_closed
     * incoming_good_created
     * purchase_order_created
     * purchase_order_updated
     * purchase_order_deleted
     * purchase_order_finished
     * replenishment_order_created
     * replenishment_order_cancelled
     * replenishment_order_finished
     * shipment_tracking_updated
     * counting_task_created
     * counting_task_finished
     * counting_task_cancelled
     * counting_task_closed*
     * * **enabled:** enable or disable this webhook
     * * **request_module:** Request serialize module. Currently supports: *default*. This field is **not required**
     * * **response_module:** Response serialize module. Currently supports: *default* This field is **not required**
     * * **warehouse_id:** Warehouse to listen events defined in allowed types field
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookControllerCreate.Responses.$201>;
  };
  ["/webhook/clients"]: {
    /**
     * Wms.Webhook.WebhookClientController.search - Searches a list of webhook clients by the given params
     *
     * Searches a list of webhook clients by the given params
     */
    "get"(
      parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookClientControllerSearch.Responses.$200>;
    /**
     * Wms.Webhook.WebhookClientController.create -  Create a webhook client which can be attached to webhooks to authenticate their calls on trigger
     *
     *  Create a webhook client which can be attached to webhooks to authenticate their calls on trigger
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookClientControllerCreate.Responses.$201>;
  };
  ["/webhook/clients/{id}"]: {
    /**
     * Wms.Webhook.WebhookClientController.delete - Deletes a Webhook Client
     *
     * Deletes a Webhook Client
     */
    "delete"(
      parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * Wms.Webhook.WebhookClientController.show - Show a webhook given ID
     *
     * Show a webhook given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookClientControllerShow.Responses.$200>;
    /**
     * Wms.Webhook.WebhookClientController.update - Updates a Webhook Client by the given ID
     *
     * Updates a Webhook Client by the given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsWebhookWebhookClientControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookClientControllerUpdate.Responses.$200>;
  };
  ["/webhook/logs"]: {
    /**
     * Wms.Webhook.EventLogController.search - Lists the event logs from a tenant
     *
     * Lists the event logs from a tenant
     */
    "get"(
      parameters?: Parameters<Paths.WmsWebhookEventLogControllerSearch.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookEventLogControllerSearch.Responses.$200>;
  };
  ["/webhook/logs/{id}"]: {
    /**
     * Wms.Webhook.EventLogController.show - Gets a specific log event
     *
     *
     * Gets a specific log event
     *
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/webhook/retry"]: {
    /**
     * Wms.Webhook.WebhookController.retry
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/webhook/{id}"]: {
    /**
     * Wms.Webhook.WebhookController.delete - Delete a webhook given ID
     *
     * Delete a webhook given ID
     */
    "delete"(
      parameters?: Parameters<Paths.WmsWebhookWebhookControllerDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookControllerDelete.Responses.$200>;
    /**
     * Wms.Webhook.WebhookController.show - Show a webhook given ID
     *
     * Show a webhook given ID
     */
    "get"(
      parameters?: Parameters<Paths.WmsWebhookWebhookControllerShow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookControllerShow.Responses.$201>;
    /**
     * Wms.Webhook.WebhookController.update - update a webhook given ID
     *
     * update a webhook given ID
     */
    "put"(
      parameters?: Parameters<Paths.WmsWebhookWebhookControllerUpdate.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.WmsWebhookWebhookControllerUpdate.Responses.$200>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
