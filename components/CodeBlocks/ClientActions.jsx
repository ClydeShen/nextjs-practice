import { Stack, Typography } from '@mui/material';
import { CodeBlock, github } from 'react-code-blocks';

export default function ClientActionsBlock() {
  return (
    <Stack sx={{ fontSize: 'small' }}>
      <Typography variant='body2' component={'pre'}>
        app/example/client-action/page.jsx
      </Typography>
      <CodeBlock
        showLineNumbers
        language='jsx'
        theme={github}
        text={`'use client';

import { Button, Container, LinearProgress, TextField } from '@mui/material';
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
  `}
      />
    </Stack>
  );
}
