#!/usr/bin/env node
import * as jose from 'jose';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const signJwt = async (email, apiKey) => {
  return new jose.SignJWT()
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject({email})
    .sign(new TextEncoder().encode(apiKey));
};

try {
  const email = await rl.question('Enter email: ');
  const apiKey = await rl.question('Enter API key: ');
  
  const jwt = await signJwt(email, apiKey);
  console.log('\nSigned JWT:', jwt);
} catch (err) {
  console.error('Error:', err.message);
} finally {
  rl.close();
}
