'use client';
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
  };
  return (
    <Container>
      <h1>Server Action - Update customer</h1>
      <div>
        <form
          action={formAction}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {pending && <LinearProgress />}
          {state?.message && <p style={{ color: 'red' }}>{state?.message}</p>}
          <TextField
            type='text'
            placeholder='First name'
            name='firstName'
            value={formData.firstName}
            onChange={onChange}
          />
          <TextField
            type='text'
            placeholder='Last name'
            name='lastName'
            value={formData.lastName}
            onChange={onChange}
          />
          <TextField
            type='email'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={onChange}
          />
          <Button type='submit' disabled={pending}>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
