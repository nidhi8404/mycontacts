const getContacts = (req , res) => {
    res.status(200).json({message : "Get My Contacts"});
};

const createContact = (req , res) => {
    console.log("The request body :" , req.body);
    const{name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All Fields Mandatory!"); 
    }
    res.status(201).json({message : "Create Contact"});
};

const getContact = (req , res) => {
    res.status(200).json({message : `Find Contact for ${req.params.id}`});
};

const updateContact = (req , res) => {
    res.status(200).json({message : `Update Contact for ${req.params.id}`});
};

const deleteContact = (req , res) => {
    res.status(200).json({message : `Delete Contact for ${req.params.id}`});
};

module.exports = {getContacts, createContact , getContact, updateContact,deleteContact };



