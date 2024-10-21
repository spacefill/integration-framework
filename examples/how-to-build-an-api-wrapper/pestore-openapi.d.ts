import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from "openapi-client-axios";

declare namespace Components {
  namespace RequestBodies {
    export type Pet = Schemas.Pet;
    export type UserArray = Schemas.User[];
  }
  namespace Schemas {
    export interface Address {
      /**
       * example:
       * 437 Lytton
       */
      street?: string;
      /**
       * example:
       * Palo Alto
       */
      city?: string;
      /**
       * example:
       * CA
       */
      state?: string;
      /**
       * example:
       * 94301
       */
      zip?: string;
    }
    export interface ApiResponse {
      code?: number; // int32
      type?: string;
      message?: string;
    }
    export interface Category {
      /**
       * example:
       * 1
       */
      id?: number; // int64
      /**
       * example:
       * Dogs
       */
      name?: string;
    }
    export interface Customer {
      /**
       * example:
       * 100000
       */
      id?: number; // int64
      /**
       * example:
       * fehguy
       */
      username?: string;
      address?: Address[];
    }
    export interface Order {
      /**
       * example:
       * 10
       */
      id?: number; // int64
      /**
       * example:
       * 198772
       */
      petId?: number; // int64
      /**
       * example:
       * 7
       */
      quantity?: number; // int32
      shipDate?: string; // date-time
      /**
       * Order Status
       * example:
       * approved
       */
      status?: "placed" | "approved" | "delivered";
      complete?: boolean;
    }
    export interface Pet {
      /**
       * example:
       * 10
       */
      id?: number; // int64
      /**
       * example:
       * doggie
       */
      name: string;
      category?: Category;
      photoUrls: string[];
      tags?: Tag[];
      /**
       * pet status in the store
       */
      status?: "available" | "pending" | "sold";
    }
    export interface Tag {
      id?: number; // int64
      name?: string;
    }
    export interface User {
      /**
       * example:
       * 10
       */
      id?: number; // int64
      /**
       * example:
       * theUser
       */
      username?: string;
      /**
       * example:
       * John
       */
      firstName?: string;
      /**
       * example:
       * James
       */
      lastName?: string;
      /**
       * example:
       * john@email.com
       */
      email?: string;
      /**
       * example:
       * 12345
       */
      password?: string;
      /**
       * example:
       * 12345
       */
      phone?: string;
      /**
       * User Status
       * example:
       * 1
       */
      userStatus?: number; // int32
    }
  }
}
declare namespace Paths {
  namespace AddPet {
    export type RequestBody = Components.Schemas.Pet;
    namespace Responses {
      export type $200 = Components.Schemas.Pet;
      export interface $400 {}
      export interface $422 {}
    }
  }
  namespace CreateUser {
    export type RequestBody = Components.Schemas.User;
    namespace Responses {
      export type Default = Components.Schemas.User;
    }
  }
  namespace CreateUsersWithListInput {
    export type RequestBody = Components.Schemas.User[];
    namespace Responses {
      export type $200 = Components.Schemas.User;
      export interface Default {}
    }
  }
  namespace DeleteOrder {
    namespace Parameters {
      export type OrderId = number; // int64
    }
    export interface PathParameters {
      orderId: Parameters.OrderId /* int64 */;
    }
    namespace Responses {
      export interface $400 {}
      export interface $404 {}
    }
  }
  namespace DeletePet {
    export interface HeaderParameters {
      api_key?: Parameters.ApiKey;
    }
    namespace Parameters {
      export type ApiKey = string;
      export type PetId = number; // int64
    }
    export interface PathParameters {
      petId: Parameters.PetId /* int64 */;
    }
    namespace Responses {
      export interface $400 {}
    }
  }
  namespace DeleteUser {
    namespace Parameters {
      export type Username = string;
    }
    export interface PathParameters {
      username: Parameters.Username;
    }
    namespace Responses {
      export interface $400 {}
      export interface $404 {}
    }
  }
  namespace FindPetsByStatus {
    namespace Parameters {
      export type Status = "available" | "pending" | "sold";
    }
    export interface QueryParameters {
      status?: Parameters.Status;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Pet[];
      export interface $400 {}
    }
  }
  namespace FindPetsByTags {
    namespace Parameters {
      export type Tags = string[];
    }
    export interface QueryParameters {
      tags?: Parameters.Tags;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Pet[];
      export interface $400 {}
    }
  }
  namespace GetInventory {
    namespace Responses {
      export interface $200 {
        [name: string]: number; // int32
      }
    }
  }
  namespace GetOrderById {
    namespace Parameters {
      export type OrderId = number; // int64
    }
    export interface PathParameters {
      orderId: Parameters.OrderId /* int64 */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Order;
      export interface $400 {}
      export interface $404 {}
    }
  }
  namespace GetPetById {
    namespace Parameters {
      export type PetId = number; // int64
    }
    export interface PathParameters {
      petId: Parameters.PetId /* int64 */;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Pet;
      export interface $400 {}
      export interface $404 {}
    }
  }
  namespace GetUserByName {
    namespace Parameters {
      export type Username = string;
    }
    export interface PathParameters {
      username: Parameters.Username;
    }
    namespace Responses {
      export type $200 = Components.Schemas.User;
      export interface $400 {}
      export interface $404 {}
    }
  }
  namespace LoginUser {
    namespace Parameters {
      export type Password = string;
      export type Username = string;
    }
    export interface QueryParameters {
      username?: Parameters.Username;
      password?: Parameters.Password;
    }
    namespace Responses {
      export type $200 = string;
      export interface $400 {}
    }
  }
  namespace LogoutUser {
    namespace Responses {
      export interface Default {}
    }
  }
  namespace PlaceOrder {
    export type RequestBody = Components.Schemas.Order;
    namespace Responses {
      export type $200 = Components.Schemas.Order;
      export interface $400 {}
      export interface $422 {}
    }
  }
  namespace UpdatePet {
    export type RequestBody = Components.Schemas.Pet;
    namespace Responses {
      export type $200 = Components.Schemas.Pet;
      export interface $400 {}
      export interface $404 {}
      export interface $422 {}
    }
  }
  namespace UpdatePetWithForm {
    namespace Parameters {
      export type Name = string;
      export type PetId = number; // int64
      export type Status = string;
    }
    export interface PathParameters {
      petId: Parameters.PetId /* int64 */;
    }
    export interface QueryParameters {
      name?: Parameters.Name;
      status?: Parameters.Status;
    }
    namespace Responses {
      export interface $400 {}
    }
  }
  namespace UpdateUser {
    namespace Parameters {
      export type Username = string;
    }
    export interface PathParameters {
      username: Parameters.Username;
    }
    export type RequestBody = Components.Schemas.User;
    namespace Responses {
      export interface Default {}
    }
  }
  namespace UploadFile {
    namespace Parameters {
      export type AdditionalMetadata = string;
      export type PetId = number; // int64
    }
    export interface PathParameters {
      petId: Parameters.PetId /* int64 */;
    }
    export interface QueryParameters {
      additionalMetadata?: Parameters.AdditionalMetadata;
    }
    export type RequestBody = string; // binary
    namespace Responses {
      export type $200 = Components.Schemas.ApiResponse;
    }
  }
}

export interface OperationMethods {
  /**
   * updatePet - Update an existing pet
   *
   * Update an existing pet by Id
   */
  "updatePet"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdatePet.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UpdatePet.Responses.$200>;
  /**
   * addPet - Add a new pet to the store
   *
   * Add a new pet to the store
   */
  "addPet"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AddPet.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.AddPet.Responses.$200>;
  /**
   * findPetsByStatus - Finds Pets by status
   *
   * Multiple status values can be provided with comma separated strings
   */
  "findPetsByStatus"(
    parameters?: Parameters<Paths.FindPetsByStatus.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.FindPetsByStatus.Responses.$200>;
  /**
   * findPetsByTags - Finds Pets by tags
   *
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  "findPetsByTags"(
    parameters?: Parameters<Paths.FindPetsByTags.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.FindPetsByTags.Responses.$200>;
  /**
   * getPetById - Find pet by ID
   *
   * Returns a single pet
   */
  "getPetById"(
    parameters?: Parameters<Paths.GetPetById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetPetById.Responses.$200>;
  /**
   * updatePetWithForm - Updates a pet in the store with form data
   */
  "updatePetWithForm"(
    parameters?: Parameters<
      Paths.UpdatePetWithForm.PathParameters & Paths.UpdatePetWithForm.QueryParameters
    > | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * deletePet - Deletes a pet
   *
   * delete a pet
   */
  "deletePet"(
    parameters?: Parameters<Paths.DeletePet.PathParameters & Paths.DeletePet.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * uploadFile - uploads an image
   */
  "uploadFile"(
    parameters?: Parameters<Paths.UploadFile.PathParameters & Paths.UploadFile.QueryParameters> | null,
    data?: Paths.UploadFile.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.UploadFile.Responses.$200>;
  /**
   * getInventory - Returns pet inventories by status
   *
   * Returns a map of status codes to quantities
   */
  "getInventory"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetInventory.Responses.$200>;
  /**
   * placeOrder - Place an order for a pet
   *
   * Place a new order in the store
   */
  "placeOrder"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PlaceOrder.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PlaceOrder.Responses.$200>;
  /**
   * getOrderById - Find purchase order by ID
   *
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   */
  "getOrderById"(
    parameters?: Parameters<Paths.GetOrderById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetOrderById.Responses.$200>;
  /**
   * deleteOrder - Delete purchase order by ID
   *
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  "deleteOrder"(
    parameters?: Parameters<Paths.DeleteOrder.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * createUser - Create user
   *
   * This can only be done by the logged in user.
   */
  "createUser"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateUser.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * createUsersWithListInput - Creates list of users with given input array
   *
   * Creates list of users with given input array
   */
  "createUsersWithListInput"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateUsersWithListInput.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.CreateUsersWithListInput.Responses.$200>;
  /**
   * loginUser - Logs user into the system
   */
  "loginUser"(
    parameters?: Parameters<Paths.LoginUser.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.LoginUser.Responses.$200>;
  /**
   * logoutUser - Logs out current logged in user session
   */
  "logoutUser"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * getUserByName - Get user by user name
   */
  "getUserByName"(
    parameters?: Parameters<Paths.GetUserByName.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.GetUserByName.Responses.$200>;
  /**
   * updateUser - Update user
   *
   * This can only be done by the logged in user.
   */
  "updateUser"(
    parameters?: Parameters<Paths.UpdateUser.PathParameters> | null,
    data?: Paths.UpdateUser.RequestBody,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
  /**
   * deleteUser - Delete user
   *
   * This can only be done by the logged in user.
   */
  "deleteUser"(
    parameters?: Parameters<Paths.DeleteUser.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<any>;
}

export interface PathsDictionary {
  ["/pet"]: {
    /**
     * updatePet - Update an existing pet
     *
     * Update an existing pet by Id
     */
    "put"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdatePet.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UpdatePet.Responses.$200>;
    /**
     * addPet - Add a new pet to the store
     *
     * Add a new pet to the store
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AddPet.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.AddPet.Responses.$200>;
  };
  ["/pet/findByStatus"]: {
    /**
     * findPetsByStatus - Finds Pets by status
     *
     * Multiple status values can be provided with comma separated strings
     */
    "get"(
      parameters?: Parameters<Paths.FindPetsByStatus.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.FindPetsByStatus.Responses.$200>;
  };
  ["/pet/findByTags"]: {
    /**
     * findPetsByTags - Finds Pets by tags
     *
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     */
    "get"(
      parameters?: Parameters<Paths.FindPetsByTags.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.FindPetsByTags.Responses.$200>;
  };
  ["/pet/{petId}"]: {
    /**
     * getPetById - Find pet by ID
     *
     * Returns a single pet
     */
    "get"(
      parameters?: Parameters<Paths.GetPetById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetPetById.Responses.$200>;
    /**
     * updatePetWithForm - Updates a pet in the store with form data
     */
    "post"(
      parameters?: Parameters<
        Paths.UpdatePetWithForm.PathParameters & Paths.UpdatePetWithForm.QueryParameters
      > | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * deletePet - Deletes a pet
     *
     * delete a pet
     */
    "delete"(
      parameters?: Parameters<Paths.DeletePet.PathParameters & Paths.DeletePet.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/pet/{petId}/uploadImage"]: {
    /**
     * uploadFile - uploads an image
     */
    "post"(
      parameters?: Parameters<Paths.UploadFile.PathParameters & Paths.UploadFile.QueryParameters> | null,
      data?: Paths.UploadFile.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.UploadFile.Responses.$200>;
  };
  ["/store/inventory"]: {
    /**
     * getInventory - Returns pet inventories by status
     *
     * Returns a map of status codes to quantities
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetInventory.Responses.$200>;
  };
  ["/store/order"]: {
    /**
     * placeOrder - Place an order for a pet
     *
     * Place a new order in the store
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PlaceOrder.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PlaceOrder.Responses.$200>;
  };
  ["/store/order/{orderId}"]: {
    /**
     * getOrderById - Find purchase order by ID
     *
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
     */
    "get"(
      parameters?: Parameters<Paths.GetOrderById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetOrderById.Responses.$200>;
    /**
     * deleteOrder - Delete purchase order by ID
     *
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteOrder.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/user"]: {
    /**
     * createUser - Create user
     *
     * This can only be done by the logged in user.
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateUser.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/user/createWithList"]: {
    /**
     * createUsersWithListInput - Creates list of users with given input array
     *
     * Creates list of users with given input array
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateUsersWithListInput.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.CreateUsersWithListInput.Responses.$200>;
  };
  ["/user/login"]: {
    /**
     * loginUser - Logs user into the system
     */
    "get"(
      parameters?: Parameters<Paths.LoginUser.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.LoginUser.Responses.$200>;
  };
  ["/user/logout"]: {
    /**
     * logoutUser - Logs out current logged in user session
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
  ["/user/{username}"]: {
    /**
     * getUserByName - Get user by user name
     */
    "get"(
      parameters?: Parameters<Paths.GetUserByName.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.GetUserByName.Responses.$200>;
    /**
     * updateUser - Update user
     *
     * This can only be done by the logged in user.
     */
    "put"(
      parameters?: Parameters<Paths.UpdateUser.PathParameters> | null,
      data?: Paths.UpdateUser.RequestBody,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
    /**
     * deleteUser - Delete user
     *
     * This can only be done by the logged in user.
     */
    "delete"(
      parameters?: Parameters<Paths.DeleteUser.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<any>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
