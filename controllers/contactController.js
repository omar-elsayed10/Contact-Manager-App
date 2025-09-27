import Contact from "../models/Contact.js";

// get all contacts for the logged user
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ userId: req.user._id });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

// get contact by id (must belong to user)
export const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!contact) return res.status(400).json({ message: "contact not found" });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

// create contact
export const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, type } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    const contact = await Contact.create({
      name,
      email,
      phone,
      type,
      userId: req.user._id,
    });

    res.status(200).json({ message: "contact created", contact });
  } catch (err) {
    next(err);
  }
};

// update contact
export const updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!contact) return res.status(400).json({ message: "contact not found" });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

// delete contact
export const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!contact) return res.status(400).json({ message: "contact not found" });
    res.json(contact);
  } catch (err) {
    next(err);
  }
};
