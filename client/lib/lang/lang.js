
if( !Session.get( "lang" ) ) {
  Session.setPersistent( "lang", "en" );
}

language = new Language( Session.get( "lang" ) );

function Language( lang ) {
  this.lang = lang;
  this.vars = en_vars;
  
  switch( lang ) {
    case "en" : this.vars = en_vars; break;
    case "pt_br" : this.vars = pt_br_vars; break;
  }
  
}

Template.registerHelper( 'lang', ( vars )=>{ 
  
  switch( vars ) {
    case "flag" : return "https://s3-us-west-2.amazonaws.com/luv-ss/img/site/flags/24/us.png";
    case "menu.welcome" : return language.vars.menu.home;
    default : return "def";
  }
  
});




