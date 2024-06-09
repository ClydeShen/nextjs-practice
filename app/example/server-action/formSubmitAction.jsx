'use server';
import { auth } from '@/app/auth';
import { updateCustomer } from '../helper';

export async function onSubmitAction(preState, data) {
  const session = await auth();
  if (!session?.accessToken) {
    // jwt verification process
    return { message: 'Unauthorized' };
  }

  const firstName = data.get('firstName');
  const lastName = data.get('lastName');
  const email = data.get('email');
  if (!firstName) {
    return { message: 'First name is required' };
  }
  if (!lastName) {
    return { message: 'Last name is required' };
  }
  if (!email) {
    return { message: 'Email is required' };
  }
  const response = await updateCustomer({
    firstName,
    lastName,
    email,
  });
  return {
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
  };
}
