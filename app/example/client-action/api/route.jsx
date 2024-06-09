import { NextResponse } from 'next/server';
import { fetchCustomer, updateCustomer } from '../../helper';

export async function POST(req) {
  const body = await req.json();
  if (!body.firstName) {
    return NextResponse.json({ message: 'First name is required' });
  }
  if (!body.lastName) {
    return NextResponse.json({ message: 'Last name is required' });
  }
  if (!body.email) {
    return NextResponse.json({ message: 'Email is required' });
  }
  const response = await updateCustomer({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
  });
  return NextResponse.json({
    firstName: response.firstName,
    lastName: response.lastName,
    email: response.email,
  });
}

export async function GET() {
  const data = await fetchCustomer();
  return NextResponse.json(data);
}
