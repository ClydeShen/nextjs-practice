'use client';
import { Stack, Typography } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';

export default function InterceptingRoutesBlock() {
  return (
    <Stack sx={{ fontSize: 'small' }}>
      <Typography variant='body2' component={'pre'}>
        folder structure
      </Typography>
      <CodeBlock
        language='bash'
        showLineNumbers={false}
        text={`app
├── dashboard
│   └── @modal
│       └── (..)product
│           └── [productId]
└── product
    └── [productId]`}
      />
    </Stack>
  );
}
