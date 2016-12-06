
Template.menu.onRendered( ()=>{
  console.log( Session.get( "lang" ) );
  switch( Session.get( "currentMenu" ) ) {
    case "home" : $( '#ec-menu-1' ).addClass( 'ec-menu-link-active' ); break;
    case "markets" : $( '#ec-menu-2' ).addClass( 'ec-menu-link-active' ); break;
    case "analysis" : $( '#ec-menu-3' ).addClass( 'ec-menu-link-active' ); break;
    case "valuation" : $( '#ec-menu-4' ).addClass( 'ec-menu-link-active' ); break;
    case "wallets" : $( '#ec-menu-5' ).addClass( 'ec-menu-link-active' ); break;
    case "info" : $( '#ec-menu-6' ).addClass( 'ec-menu-link-active' ); break;
  }
});

Template.menu.helpers({
});

Template.menu.events({
  'click #ec-join-now'( event, instance ) {
    console.log( "clicked Join Now" );
  },
  'click #ec-login'( event, instance ) {
    console.log( "clicked Join Now" );
    FlowRouter.go( 'login' );
  },
  'click #ec-laguage-en'( event, instance ) {
    console.log( "en" );
    Session.setPersistent( "lang", "en" );
    location.reload();
  },
  'click #ec-laguage-pt_br'( event, instance ) {
    console.log( "pt_br" );
    Session.setPersistent( "lang", "pt_br" );
    location.reload();
  },
  'click #ec-laguage-es'( event, instance ) {
    console.log( "es" );
    Session.setPersistent( "lang", "es" );
    location.reload();
  },
  'click #ec-laguage-de'( event, instance ) {
    console.log( "de" );
    Session.setPersistent( "lang", "de" );
    location.reload();
  }
});


Template.menu.events({
  'submit #ec-login-form'( event, template ) {
    event.preventDefault();
    console.log( "Initiate Login..." );
    var email = template.find( '#ec-login-email' ).value;
    var password = template.find( '#ec-login-password' ).value;
    console.log( "Values ... " + email + " " + password );
    var all_valid = true;
    $( '#ec-startup-email-error' ).html( "" );
    // startup name validation
    try {
      try{ $( '#ec-login-email' ).removeClass( "uk-form-danger" ); } catch( _e ){}
      $( '#ec-login-email-error' ).html( "" );
      var emailSchema = new SimpleSchema({
        email: {
          type: String,
          label: "Email",
          optional: false,
          regEx: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        }
      });
      emailSchema.messages({
        "regEx": "Please enter a valid Email Address"
      });
      emailSchema.validate({ email });
    } catch(e) { 
      all_valid = false;
      $( '#ec-login-email' ).addClass( "uk-form-danger" );
      $( '#ec-login-email-error' ).html( e.reason );
    }
    // password validation
    try {
      try{ $( '#ec-login-password' ).removeClass( "uk-form-danger" ); } catch( _e ){}
      $( '#ec-login-password-error' ).html( "" );
      $( '#ec-login-general-error' ).html( "" );
      new SimpleSchema({
        password: {
          type: String,
          label: "Password",
          optional: false,
          min: 6, max: 18
        }
      }).validate({ password });
    } catch(e) { 
      all_valid = false;
      $( '#ec-login-password' ).addClass( "uk-form-danger" );
      $( '#ec-login-password-error' ).html( e.reason );
    }
    if( all_valid ) {
      console.log( "All Valid - implement login" );
      Meteor.loginWithPassword( email, password, ( error )=> {
        if( error ) {
          console.debug( error.error );
          if( error.error === 403 ) {
            $( '#ec-login-general-error' ).html( "Email and/or Password are incorrect" );
          }
        } else {
          UIkit.modal( "#ec-login-modal" ).hide();
          console.log( Meteor.user());
        }
      });
    }

  },
  'submit #ec-signup-form'( event, template ) {
    event.preventDefault();
    console.log( "Initiate Login..." );
    var email = template.find( '#ec-signup-email' ).value;
    var password = template.find( '#ec-signup-password' ).value;
    var password_confirm = template.find( '#ec-signup-password-confirm' ).value;
    console.log( "Values ... " + email + " " + password + " " + password_confirm );
    
    var all_valid = true;
    $( '#ec-signup-email-error' ).html( "" );
    // startup name validation
    try {
      try{ $( '#ec-signup-email' ).removeClass( "uk-form-danger" ); } catch( _e ){}
      $( '#ec-signup-email-error' ).html( "" );
      var emailSchema = new SimpleSchema({
        email: {
          type: String,
          label: "Email",
          optional: false,
          regEx: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        }
      });
      emailSchema.messages({
        "regEx": "Please enter a valid Email Address"
      });
      emailSchema.validate({ email });
    } catch(e) { 
      all_valid = false;
      $( '#ec-signup-email' ).addClass( "uk-form-danger" );
      $( '#ec-signup-email-error' ).html( e.reason );
    }
    // password validation
    try {
      try{ $( '#ec-signup-password' ).removeClass( "uk-form-danger" ); } catch( _e ){}
      $( '#ec-signup-password-error' ).html( "" );
      $( '#ec-signup-general-error' ).html( "" );
      new SimpleSchema({
        password: {
          type: String,
          label: "Password",
          optional: false,
          min: 6, max: 18
        }
      }).validate({ password });
    } catch(e) { 
      all_valid = false;
      $( '#ec-signup-password' ).addClass( "uk-form-danger" );
      $( '#ec-signup-password-error' ).html( e.reason );
    }
    // password confirmation
    try {
      try{ $( '#ec-signup-password-confirm' ).removeClass( "uk-form-danger" ); } catch( _e ){}
      $( '#ec-signup-password-confirm-error' ).html( "" );
      $( '#ec-signup-general-error' ).html( "" );
      if( password !== password_confirm ) {
        all_valid = false;
        $( '#ec-signup-password-confirm' ).addClass( "uk-form-danger" );
        $( '#ec-signup-password-confirm-error' ).html( "Password Confirmation did not match." );
      }
    } catch(e) {}
    try {
      var recaptcha = $( '#g-recaptcha-response' ).val();
      if( !recaptcha ) {
        all_valid = false;
        $( '#ec-signup-general-error' ).html( "Please, proove you're no Robot" );
      } else {
        Meteor.call( "recaptcha", recaptcha, ( error, data )=>{
          if( error ) {
            console.debug( error );
            all_valid = false;
            $( '#ec-signup-general-error' ).html( "Server Error on reCAPTCHA" );
          }
          console.debug( data );
          if( !data ) {
            all_valid = false;
            $( '#ec-signup-general-error' ).html( "Failed reCAPTCHA" );
          } else {
            $( '#ec-signup-general-error' ).html( "" );
          }
        });
      }
    } catch(e) {
      all_valid = false;
      $( '#ec-signup-general-error' ).html( "Error processing reCAPTCHA" );
    }
    if( all_valid ) {
      console.log( "All Valid - implement signup" );
      Meteor.call( "accounts.create", email, password, ( error, data )=> {
        if( error ) {
          console.debug( error );
          $( '#ec-signup-general-error' ).html( error.reason );
        }
      });
    }
  },
  'click #ec-logout'( event, template ) {
    console.log( "Attempting to Logout" );
    Meteor.logout();
  }
  
});



