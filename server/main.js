import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Startups = new Mongo.Collection( 'startups' );
Meteor.startup(() => {
  // code to run on server at startup
  console.log( "Server Started..." ); 
});

Meteor.methods({
  
  'accounts.create'( email, password ) {
    var acc = Accounts.createUser({
      email : email,
      password: password
    });
    return acc;
  }
  
});