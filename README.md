# JWT Signer CLI Tool
A simple command-line tool to generate signed JWTs using the HS256 algorithm.

## Installation

1. Clone this repository or download the code.
2. Install dependencies: `pnpm i`

## Usage

1. Run the tool: `npx jwt-signer`
2. Enter Email (the same email associated with your Trestle User Account)
3. Enter Api Key retrieved from https://app.gotrestle.com/settings/developers
4. Retrieve your Signed JWT

## Using the Signed JWT

1. Include the Signed JWT as Authorization header in your requests to the API: `Authorization: Bearer <Signed JWT>`