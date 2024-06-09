import { Container } from '@mui/material';
import Image from 'next/image';
const fetchPhoto = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  const data = await response.json();
  return data;
};
export default async function ProductPage({ params: { productId } }) {
  const photo = await fetchPhoto(productId);
  return (
    <Container>
      <h1>Product {productId}</h1>
      <div>
        <Image width={600} height={600} src={photo?.url} alt={photo?.title} />
        <h2>{photo.title}</h2>
      </div>
    </Container>
  );
}
