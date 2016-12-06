import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

S3.config = {
  key: 'AKIAIXMCZ7DBG4EGPWIQ', 
  secret: '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',
  bucket: 'luv-ss',
  region: 'us-west-2' // Only needed if not "us-east-1" or "us-standard"
};

Startups = new Mongo.Collection( 'startups' );
Meteor.startup(() => {
  // code to run on server at startup
  console.log( "Server Started..." );
  
  reCAPTCHA.config({
    privatekey: '6LfDjA0UAAAAAPYiA8BowoMpeBYhdjvb8iO9vbBg'
  });
  
});

Meteor.methods({
  'accounts.create'( email, password ) {
    var acc = Accounts.createUser({
      email : email,
      password: password
    });
    return acc;
  },
  'recaptcha'( data ) {
    var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha( this.connection.clientAddress, data );
    if( verifyCaptchaResponse.data.success === false ) {
      return verifyCaptchaResponse.data;
    }
    return true;
  },
  'user.get-thumb'( user_id ) {
    var thumb = Meteor.users.find( user_id, { $set: {"profile.thumb": url} } );
    console.log( thumb );
    return thumb;
  },
  'user.register-thumb'( user_id, data ) {
    var update = Meteor.users.update( user_id, { $set: {"profile.thumb": data} } );
    return update;
  }
  
});