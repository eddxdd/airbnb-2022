export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // For Node.js Express back-end
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
