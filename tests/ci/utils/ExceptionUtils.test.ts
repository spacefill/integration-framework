import { assert } from 'chai';
import { ExceptionUtils } from '../../../src/utils/ExceptionUtils.ts';
import InvalidRequestDataError from '../../../src/exceptions/InvalidRequestDataError.ts';
import { EventTypeEnumString } from '../../../src/api/EdiEvent.ts';

describe('ExceptionUtils', () => {
  it('should get correct event from exception', async () => {
    const event = ExceptionUtils.getEventTypeFromException(new InvalidRequestDataError("fake failed"));
    assert.equal(event, EventTypeEnumString.INVALID_REQUEST_DATA_ERROR);
  });
  it('should get default event if unknown exception received', async () => {
    const event = ExceptionUtils.getEventTypeFromException(new Error("Not edi error"));
    assert.equal(event, EventTypeEnumString.INTERNAL_ERROR);
  });
});
