const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields Mandatory!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById;
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
