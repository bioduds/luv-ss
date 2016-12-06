// General
Tracker.autorun( ()=> {
  var routeName = FlowRouter.getRouteName();
  console.log("Current route name is: ", routeName);
  console.log( "Always ON" );
  try{ $( '#ec-menu-1' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-2' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-3' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-4' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-5' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-6' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  Session.setTemp( "currentMenu", routeName );
  switch( Session.get( "currentMenu" ) ) {
    case "home" : $( '#ec-menu-1' ).addClass( 'ec-menu-link-active' ); break;
    case "markets" : $( '#ec-menu-2' ).addClass( 'ec-menu-link-active' ); break;
    case "analysis" : $( '#ec-menu-3' ).addClass( 'ec-menu-link-active' ); break;
    case "valuation" : $( '#ec-menu-4' ).addClass( 'ec-menu-link-active' ); break;
    case "wallets" : $( '#ec-menu-5' ).addClass( 'ec-menu-link-active' ); break;
    case "info" : $( '#ec-menu-6' ).addClass( 'ec-menu-link-active' ); break;
  }
});


//MAIN LAYOUT
FlowRouter.route('/', {
  name: 'home',
  action: function( params, queryParams ) {
    console.log( "Flow Router Root", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left:'mainLeft', stage:'homeDisplay' } );
  }
});
// MENU
FlowRouter.route('/markets', {
  name: 'markets',
  action: function( params, queryParams ) {
    console.log( "Markets ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'mainLeft', stage:'marketsDisplay' } );
  }
});
FlowRouter.route('/analysis', {
  name: 'analysis',
  action: function( params, queryParams ) {
    console.log( "Markets ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'mainLeft', stage:'analysisDisplay' } );
  }
});
FlowRouter.route('/valuation', {
  name: 'valuation',
  action: function( params, queryParams ) {
    console.log( "Valuation ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'mainLeft', stage:'valuationDisplay' } );
  }
});
FlowRouter.route('/wallets', {
  name: 'wallets',
  action: function( params, queryParams ) {
    console.log( "Wallets ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'mainLeft', stage:'walletsDisplay' } );
  }
});
FlowRouter.route('/info', {
  name: 'info',
  action: function( params, queryParams ) {
    console.log( "Info ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'mainLeft', stage:'infoDisplay' } );
  }
});


// OTHER
FlowRouter.route('/understand', {
  name: 'understand',
  action: function( params, queryParams ) {
    console.log( "Understand ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'mainLeft', stage:'understandDisplay' } );
  }
});
FlowRouter.route('/display/user/:id', {
  name: 'display.user',
  action: function( params, queryParams ) {
    console.log( "Display User ", params.id );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'userLeft', stage:'userDisplay' } );
  }
});
FlowRouter.route('/display/startups/:id', {
  name: 'Display Startup',
  action: function( params, queryParams ) {
    console.log( "Sign in Startup", params.id );
    BlazeLayout.render( 'mainLayout', { content: 'present', left:'startupLeft', stage:'startupDisplay' } );
    Session.set( "Startup ID", params.id );
  }
});
FlowRouter.route('/user/:id', {
  action: function( params, queryParams ) {
    console.log( "User logged in - ", params.id );
    BlazeLayout.render( 'mainLayout', { content: 'starting' } );
  }
});
FlowRouter.route('/signIn', {
  name: 'signIn',
  action: function( params, queryParams ) {
    console.log( "Sign in Startup", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'signIn' } );
  }
});
FlowRouter.route('/profile/startup/start', {
  name: 'Startup Start Profile',
  action: function( params, queryParams ) {
    console.log( "Startup Start Profile ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'startupStartProfile' } );
  }
});
FlowRouter.route('/login', {
  name: 'login',
  action: function( params, queryParams ) {
    console.log( "Login ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'login' } );
  }
});


// EDITs
FlowRouter.route('/display/user/edit/account-settings/:id', {
  name: 'display.user',
  action: function( params, queryParams ) {
    console.log( "Display User ", params.id );
    BlazeLayout.render( 'mainLayout', { content: 'present', 
                                        left: 'userLeft', 
                                        stage:'editAccountSettings', 
                                        address:'noneAddressForm' } );
  }
});


FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      console.log( "NOT FOUND" );
    }
};