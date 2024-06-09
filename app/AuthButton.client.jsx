'use client';
import { Button, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { signIn, signOut } from './auth/helper';

export default function AuthButton() {
  const { data } = useSession();
  return (
    <div>
      {data?.user?.name ? (
        <div>
          <Typography component={'pre'} variant='body2'>
            {JSON.stringify(data.user, null, 2)}
          </Typography>
          <Button
            onClick={async () => {
              await signOut();
              await signIn();
            }}
          >
            {data.user.name} - Sign Out
          </Button>
        </div>
      ) : (
        <Button
          onClick={async () => {
            await signIn();
          }}
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
