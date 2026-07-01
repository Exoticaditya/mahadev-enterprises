# auth.md

This document provides instructions for AI agents to register and authenticate with the Mahadev Enterprises B2B API.

## Registration

To obtain API access credentials, AI agents must register programmatically by sending an HTTP POST request to the registration URI:

[Registration URI](https://mahadeventerprisesindia.com/api/auth/register)

### Registration Request
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "agent_name": "YourAgentName",
    "contact_email": "agent-operator@example.com"
  }
  ```

### Registration Response
Upon successful registration, you will receive your credentials:
- `client_id`: Your unique client identifier.
- `client_secret`: Your secure client credentials.

## Authentication

Agents use the client credentials grant flow to obtain an access token:

- **Token Endpoint**: [Token URI](https://mahadeventerprisesindia.com/api/auth/token)
- **Grant Type**: `client_credentials`
- **Scope**: `read:catalog`

Include the issued bearer token in the `Authorization` header of your API requests:
`Authorization: Bearer <your_access_token>`
