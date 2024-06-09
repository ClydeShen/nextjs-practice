'use client';

import ClientActionsBlock from '@/components/CodeBlocks/ClientActions';
import {
  Button,
  Container,
  LinearProgress,
  Stack,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function ClientActionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const loadCustomer = async () => {
      const response = await fetch('/example/client-action/api');
      const data = await response.json();
      setFormData(data);
    };
    loadCustomer();
  }, []);

  const updateCustomer = async (profile) => {
    const response = await fetch('/example/client-action/api', {
      method: 'POST',
      body: JSON.stringify(profile),
    });
    const data = await response.json();
    if (data.message) {
      setError(data.message);
      return null;
    }
    return data;
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const profile = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };
    setPending(true);
    const response = await updateCustomer(profile);
    response && setFormData(response);
    setPending(false);
  };
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Container>
      <h1>Client Action - Update customer</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {pending && <LinearProgress />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
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

      <Stack>
        <h2>Code Snippet</h2>
        <ClientActionsBlock />
      </Stack>
    </Container>
  );
}
