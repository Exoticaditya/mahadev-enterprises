# auth.md

Welcome, AI Agent!

This document describes the agent registration and authentication flow for Mahadev Enterprises.

## Agent Registration
AI agents can programmatically register to obtain API access credentials by sending a POST request to our registration endpoint:

`POST https://mahadeventerprisesindia.com/api/auth/register`

Registration is fully automated, and no manual approval is required. Registered agents will receive a Client ID and Client Secret for secure machine-to-machine authentication.

## Authentication
Agents can authenticate using the OAuth 2.0 client credentials grant flow to access catalog details:

- **Token Endpoint**: `https://mahadeventerprisesindia.com/api/auth/token`
- **Grant Type**: `client_credentials`
- **Scope**: `read:catalog`

No authentication is required for basic public web scraping or reading the high-density `/llms-full.txt` catalog specifications.
