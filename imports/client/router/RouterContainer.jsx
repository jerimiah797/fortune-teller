// AppContainer.jsx
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Routes from '../router/router.jsx';

export default createContainer(({ params }) => {
  const currentUser = Meteor.user();

  return {
    currentUser,
  };
}, Routes);
