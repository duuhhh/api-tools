#!/usr/bin/env node
import * as jose from 'jose';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const signJwt = async (id, apiKey) => {
  return new jose.SignJWT()
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject({id})
    .sign(new TextEncoder().encode(apiKey));
};

try {
  const id = await rl.question('Enter API Key ID: ');
  const apiKey = await rl.question('Enter API Key Secret: ');
  
  const jwt = await signJwt(id, apiKey);
  console.log('\nSigned JWT:', jwt);
} catch (err) {
  console.error('Error:', err.message);
} finally {
  rl.close();
}
