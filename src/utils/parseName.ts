export const parseName = (fullName: string) => {
  const nameArray = fullName.split(" ");
  return {
    name: nameArray[0],
    surname: nameArray[1],
  };
};
