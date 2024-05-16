export const userService = {
  getUser,
}

const user = {
  name: "israel litvak",
  balance: 100,
  transactions: [],
}

function getUser() {
  return Promise.resolve(user)
}
