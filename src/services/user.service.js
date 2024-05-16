export const userService = {
  getUser,
}

const user = {
  name: "israel litvak",
  balance: 100,
  transactions: [],
}

function getUser() {
  // Mimicking an async call:
  return Promise.resolve(user)
}
