export const isExist = (getId, user) => {
  return getId.some((item) => item === user.id);
};
