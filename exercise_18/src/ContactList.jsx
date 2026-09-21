import ContactItem from "./ContactItem";

const ContactList = ({
  contacts,
  dispatch,
  setEditingContact,
}) => {
  return (
    <div>
      <h3>Contact List</h3>

      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;