import { Container } from '@mui/material';
import Link from 'next/link';
import AuthButton from './AuthButton.server';

export default function Page(props) {
  return (
    <Container>
      <h1>Home</h1>
      <AuthButton />
      <div>
        <ul>
          <li>
            <Link href='/dashboard'>Intercepting routes</Link>
          </li>
          <li>
            <Link href='/example/server-action'>Server Action</Link>
          </li>
          <li>
            <Link href='/example/client-action'> Client Action </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
