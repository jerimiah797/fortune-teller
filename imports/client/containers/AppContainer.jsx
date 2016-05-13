import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../components/App.jsx';

export default createContainer(({ params }) => {
  const currentUser = Meteor.user();

  return {
    currentUser
  };
}, App);
