export const getUsers = async () => {
  return (await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .catch((error) => console.error(error))) as UsersResponse;
};
