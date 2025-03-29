export const queryJoiner = (data: Record<string, string>) => {
  let res = "";

  const keys = Object.keys(data);

  keys.forEach((key) => {
    if (data[key] !== "") {
      res += `${key}=${data[key]}&`;
    }
  });

  return res;
};

export const uniqueQueryJoiner = (data: Record<string, string>) => {
  let res = "";

  const keys = [...new Set(Object.keys(data))];

  keys.forEach((key) => {
    if (data[key] !== "") {
      res += `${key}=${data[key]}&`;
    }
  });

  return res;
};
