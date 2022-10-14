const headers = {
  Accept            : "application/json",
  "Content-Type"    : "application/json",
};

export const fetcherPost = async (url,body) => {
  return await fetch(
    url,{
      method    : "POST",
      headers   : headers,
      body      : JSON.stringify(body),
    })
};
export const fetcherWithToken = async (url,type, body, token) => {
  return await fetch(url, {
    method: type,
    headers: {
      Accept            : "application/json",
      "Content-Type"    : "application/json",
      Authorization     : `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
};
