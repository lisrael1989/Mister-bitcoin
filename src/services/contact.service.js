import axios from "axios"

export const contactService = {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact,
}

const BASE_URL = "https://randomuser.me/api/?results=10"

async function getContacts(filterBy = {}) {
  const response = await axios.get(BASE_URL)
  let contactsToReturn = response.data.results.map((user) => ({
    _id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    phone: user.phone,
    balance: Math.floor(Math.random() * 100),
    picture: user.picture.medium,
  }))

  if (filterBy.txt || filterBy.email || filterBy.phone) {
    contactsToReturn = filterContacts(contactsToReturn, filterBy)
  }

  return sortContacts(contactsToReturn)
}

function getContactById(id) {
  return new Promise((resolve, reject) => {
    const contact = contacts.find((contact) => contact._id === id)
    contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
  })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex((contact) => contact._id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
    }

    resolve(contacts)
  })
}

function _updateContact(contact) {
  return new Promise((resolve, reject) => {
    const index = contacts.findIndex((c) => contact._id === c._id)
    if (index !== -1) {
      contacts[index] = contact
    }
    resolve(contact)
  })
}

function _addContact(contact) {
  return new Promise((resolve, reject) => {
    contact._id = _makeId()
    contacts.push(contact)
    resolve(contact)
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    name: "",
    email: "",
    phone: "",
  }
}

function filterContacts(contacts, { txt = "", email = "", phone = "" }) {
  const lowerTxt = txt.toLowerCase()
  const lowerEmail = email.toLowerCase()
  const lowerPhone = phone.toLowerCase()

  return contacts.filter(
    (contact) =>
      (lowerTxt ? contact.name.toLowerCase().includes(lowerTxt) : true) &&
      (lowerEmail ? contact.email.toLowerCase().includes(lowerEmail) : true) &&
      (lowerPhone ? contact.phone.toLowerCase().includes(lowerPhone) : true)
  )
}

function sortContacts(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    return 0
  })
}

function _makeId(length = 10) {
  var txt = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
