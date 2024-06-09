import { Stack, Typography } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';
export default function ServerActionsBlock() {
  return (
    <Stack sx={{ fontSize: 'small' }} spacing={4}>
      <Stack>
        <Typography variant='body2' component={'pre'}>
          app/example/server-action/page.jsx
        </Typography>
        <CodeBlock
          showLineNumbers
          language='jsx'
          theme='github'
          text={`'use client';
import { Button, Container, LinearProgress, TextField } from '@mui/material';
import { useActionState, useEffect, useState } from 'react';
import { onSubmitAction } from './formSubmitAction';

export default function ServerActionPage() {
  const [state, formAction, pending] = useActionState(onSubmitAction, {
    message: '',
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  useEffect(() => {
    const loadCustomer = async () => {
      const response = await fetch('/example/client-action/api');
      const data = await response.json();
      setFormData(data);
    };
    loadCustomer();
  }, []);
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };`}
        />
      </Stack>
      <Stack>
        <Typography variant='body2' component={'pre'}>
          app/example/server-action/formSubmitAction.jsx
        </Typography>
        <CodeBlock
          showLineNumbers
          language='jsx'
          theme='github'
          text={`''use server';
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
}`}
        />
      </Stack>
    </Stack>
  );
}
