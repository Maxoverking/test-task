export const updateUsers = (users, isIncrement, payload) => {
  return users.map((user) => {
    if (user.id === payload) {
      return {
        ...user,
        followers: isIncrement ? user.followers + 1 : user.followers - 1,
      };
    }
    return user;
  });
};

export const updatedUsers = (user, isIncrement) => {
  return {
    ...user,
    followers: isIncrement ? user.followers + 1 : user.followers - 1,
  };
};
