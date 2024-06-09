import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const BASE_PATH = '/api/auth';

const authOptions = {
  providers: [
    credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'test1',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'test1',
        },
      },
      async authorize(credentials) {
        const users = [
          {
            id: 'user-1',
            userName: 'test1',
            password: 'test1',
            email: 'test1@example.co.nz',
            name: 'Test name',
          },
        ];

        const user = users.find(
          (user) =>
            user.userName === credentials.username &&
            user.password === credentials.password
        );
        return user
          ? {
              id: user.id,
              name: user.name,
              email: user.email,
              accessToken: btoa(
                JSON.stringify({ name: user.name, email: user.email })
              ),
            }
          : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async (params) => {
      const { token, user } = params;
      if (token) {
        return { ...token, ...user };
      }
      return params;
    },
    session: async (params) => {
      const { session, token } = params;
      if (session) {
        return { ...session, accessToken: token?.accessToken };
      }
      return params;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
