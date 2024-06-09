'use server';

import { signIn as signInAuth, signOut as signOutAuth } from '.';

export async function signIn() {
  await signInAuth();
}

export async function signOut() {
  await signOutAuth();
}
