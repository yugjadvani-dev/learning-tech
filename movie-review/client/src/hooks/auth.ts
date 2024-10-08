const auth = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return { user };
};

export default auth;
