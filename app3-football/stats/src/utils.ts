export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString
    .split("/")
    .map((numberString) => parseInt(numberString));
  return new Date(year, month, day);
};
