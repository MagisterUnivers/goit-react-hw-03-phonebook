import { ContactsListEl } from 'components/ContactsListEl/ContactsListEl';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, changeId }) => {
  return (
    <ul className="">
      <ContactsListEl contacts={contacts} changeId={changeId} />
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ Object })),
  changeId: PropTypes.func.isRequired,
};
