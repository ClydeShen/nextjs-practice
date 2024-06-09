import InterceptingRoutesBlock from '@/components/CodeBlocks/InterceptingRoutes';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { Fragment } from 'react';
const fetchPhotos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3'
  );
  const data = await response.json();
  return data;
};
export default async function DashboardPage(props) {
  const photoList = await fetchPhotos();
  return (
    <Container>
      <h1>Dashboard</h1>
      <Grid container gap={2}>
        {photoList.map((photo) => (
          <Fragment key={photo.id}>
            <Grid item xs={6} sm={4} md={3}>
              <Card variant='outlined'>
                <CardMedia
                  sx={{ height: 140 }}
                  image={photo.thumbnailUrl}
                  alt={photo.title}
                />
                <CardContent>
                  <Typography gutterBottom component='div'>
                    Photo {photo.id}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {photo.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/product/${photo.id}`}>View</Link>
                </CardActions>
              </Card>
            </Grid>
          </Fragment>
        ))}
      </Grid>

      <Stack>
        <h2>Code Snippet</h2>
        <InterceptingRoutesBlock />
      </Stack>
    </Container>
  );
}
