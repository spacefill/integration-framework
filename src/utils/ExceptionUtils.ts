import { EventTypeEnumString } from "../api/EdiEvent.ts";
import ApiNetWorkError from "../exceptions/ApiNetWorkError.ts";
import InternalError from "../exceptions/InternalError.ts";
import InvalidRequestDataError from "../exceptions/InvalidRequestDataError.ts";
import InvalidRequestFormatError from "../exceptions/InvalidRequestFormatError.ts";
import IoError from "../exceptions/IoError.ts";
import NetWorkError from "../exceptions/NetWorkError.ts";
import PreconditionFailedError from "../exceptions/PreconditionFailedError.ts";
import UnknownError from "../exceptions/UnknownError.ts";

export class ExceptionUtils {
  public static getEventTypeFromException(error: Error): EventTypeEnumString {
    switch (error.constructor) {
      case InvalidRequestDataError:
        return EventTypeEnumString.INVALID_REQUEST_DATA_ERROR;

      case InvalidRequestFormatError:
        return EventTypeEnumString.INVALID_REQUEST_FORMAT_ERROR;

      case IoError:
        return EventTypeEnumString.IO_ERROR;

      case NetWorkError:
        return EventTypeEnumString.NETWORK_ERROR;

      case ApiNetWorkError:
        return EventTypeEnumString.API_NETWORK_ERROR;

      case PreconditionFailedError:
        return EventTypeEnumString.PRECONDITION_FAILED_ERROR;

      case UnknownError:
        return EventTypeEnumString.UNKNOWN_ERROR;

      case InternalError:
      default:
        return EventTypeEnumString.INTERNAL_ERROR;
    }
  }
}
