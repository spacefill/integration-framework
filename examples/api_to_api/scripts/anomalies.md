# Pulpo openapi issues

Below a list of fixes that need to be applied when using [`openapi-client-axios-typegen`](https://www.npmjs.com/package/openapi-client-axios-typegen).

- Source file: https://eu-show.pulpo.co/api/v1/swagger/wms.json
- command to reproduce: `npx openapi-client-axios-typegen "wms_pulpo_openapi.json" > pulpo-api-openapi.d.ts`

> For line numbers, please notice that a prettier has been apply on the file.

## Invalid types

### Error: unknown type: id

example line 230

- current:

```json
  "filename": {
    "description": "The ID of the attachment in S3",
    "type": "id"
  },
```

- fixed with:

```json
  "filename": {
    "description": "The ID of the attachment in S3",
    "type": "number"
  },
```

### Error: unknown type: float

example line 18374

- current:

```json
{
  "description": "Width of shipment box",
  "in": "form_data",
  "name": "width",
  "required": false,
  "type": "float"
},
```

- fixed with:

```json
{
  "description": "Width of shipment box",
  "in": "form_data",
  "name": "width",
  "required": false,
  "type": "number",
  "format": "float"
},
```

### Error: unknown type: json

example line 18082

- current

```json
{
  "description": "Content of Message",
  "in": "query",
  "name": "body",
  "required": false,
  "type": "json"
},
```

- fixed with:

```json
{
  "description": "Content of Message (json)",
  "in": "query",
  "name": "body",
  "required": false,
  "type": "string"
},
```

No example of data found, so this fix could be a mistake.
