export const updateCustomer = async (profile) => {
  const response = await fetch(
    'https://6653e4be1c6af63f4675c87f.mockapi.io/api/v1/users/1',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    }
  );
  const data = await response.json();
  return data;
};

export const fetchCustomer = async () => {
  const response = await fetch(
    'https://6653e4be1c6af63f4675c87f.mockapi.io/api/v1/users/1'
  );
  const data = await response.json();
  return data;
};
