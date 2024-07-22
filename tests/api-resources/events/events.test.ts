// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Orb from 'orb-billing';
import { Response } from 'node-fetch';

const orb = new Orb({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  test('update: only required params', async () => {
    const responsePromise = orb.events.update('event_id', {
      event_name: 'event_name',
      properties: {},
      timestamp: '2020-12-09T16:09:53Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await orb.events.update('event_id', {
      event_name: 'event_name',
      properties: {},
      timestamp: '2020-12-09T16:09:53Z',
      customer_id: 'customer_id',
      external_customer_id: 'external_customer_id',
    });
  });

  test('deprecate', async () => {
    const responsePromise = orb.events.deprecate('event_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deprecate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(orb.events.deprecate('event_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Orb.NotFoundError,
    );
  });

  test('ingest: only required params', async () => {
    const responsePromise = orb.events.ingest({
      events: [
        {
          event_name: 'event_name',
          timestamp: '2020-12-09T16:09:53Z',
          properties: {},
          idempotency_key: 'idempotency_key',
        },
        {
          event_name: 'event_name',
          timestamp: '2020-12-09T16:09:53Z',
          properties: {},
          idempotency_key: 'idempotency_key',
        },
        {
          event_name: 'event_name',
          timestamp: '2020-12-09T16:09:53Z',
          properties: {},
          idempotency_key: 'idempotency_key',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ingest: required and optional params', async () => {
    const response = await orb.events.ingest({
      events: [
        {
          customer_id: 'customer_id',
          external_customer_id: 'external_customer_id',
          event_name: 'event_name',
          timestamp: '2020-12-09T16:09:53Z',
          properties: {},
          idempotency_key: 'idempotency_key',
        },
        {
          customer_id: 'customer_id',
          external_customer_id: 'external_customer_id',
          event_name: 'event_name',
          timestamp: '2020-12-09T16:09:53Z',
          properties: {},
          idempotency_key: 'idempotency_key',
        },
        {
          customer_id: 'customer_id',
          external_customer_id: 'external_customer_id',
          event_name: 'event_name',
          timestamp: '2020-12-09T16:09:53Z',
          properties: {},
          idempotency_key: 'idempotency_key',
        },
      ],
      backfill_id: 'backfill_id',
      debug: true,
    });
  });

  test('search: only required params', async () => {
    const responsePromise = orb.events.search({ event_ids: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await orb.events.search({
      event_ids: ['string'],
      timeframe_end: '2019-12-27T18:11:19.117Z',
      timeframe_start: '2019-12-27T18:11:19.117Z',
    });
  });
});
