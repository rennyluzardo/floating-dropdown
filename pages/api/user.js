export const getUriSupport = () => {
  const url = `https://develcontactweb.contactvox.com/bot/index/getlinksupport?client=${t}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res.response.value;
    })
    .catch((err) => console.log(err));
};
