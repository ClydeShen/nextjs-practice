'use client';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Skeleton,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardProductPage({ params: { productId } }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const fetchPhoto = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchPhoto(productId).then((data) => setPhoto(data));
    setOpen(true);
  }, []);
  function onDismiss() {
    router.back();
  }
  return (
    <Dialog open={open} onClose={onDismiss} maxWidth='md'>
      <DialogTitle>Photo {productId}</DialogTitle>
      <DialogContent>
        {photo?.url ? (
          <Image width={600} height={600} src={photo?.url} alt={photo?.title} />
        ) : (
          <Skeleton variant='rectangular' width={600} height={600} />
        )}
        <DialogContentText>{photo?.title}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
