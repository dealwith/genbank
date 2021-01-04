export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user?.token) {
    return `Authorization: Beared + ${user.token}`;
  } else {
    return {};
  }
}
