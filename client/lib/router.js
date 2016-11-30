// General
Tracker.autorun( ()=> {
  var routeName = FlowRouter.getRouteName();
  console.log("Current route name is: ", routeName);
  console.log( "Always ON" );
  try{ $( '#ec-menu-home' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-markets' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-analysis' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  try{ $( '#ec-menu-info' ).removeClass( "ec-menu-link-active" ); } catch(e) {}
  Session.setTemp( "currentMenu", routeName );
  switch( Session.get( "currentMenu" ) ) {
    case "home" : $( '#ec-menu-home' ).addClass( 'ec-menu-link-active' ); break;
    case "markets" : $( '#ec-menu-markets' ).addClass( 'ec-menu-link-active' ); break;
    case "analysis" : $( '#ec-menu-analysis' ).addClass( 'ec-menu-link-active' ); break;
    case "info" : $( '#ec-menu-info' ).addClass( 'ec-menu-link-active' ); break;
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
FlowRouter.route('/evaluation', {
  name: 'evaluation',
  action: function( params, queryParams ) {
    console.log( "Evaluation ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'evaluation' } );
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
FlowRouter.route('/info', {
  name: 'info',
  action: function( params, queryParams ) {
    console.log( "Info ", params.postId );
    BlazeLayout.render( 'mainLayout', { content: 'present', left: 'mainLeft', stage:'infoDisplay' } );
  }
});
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