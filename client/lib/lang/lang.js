
if( !Session.get( "lang" ) ) {
  Session.setPersistent( "lang", "en" );
}

language = new Language( Session.get( "lang" ) );

function Language( lang ) {
  this.lang = lang;
  this.vars = en_vars;
  this.flag = "https://s3-us-west-2.amazonaws.com/luv-ss/img/site/flags/24/us.png";
  
  switch( lang ) {
    case "en" : 
      this.vars = en_vars; 
      this.flag = "https://s3-us-west-2.amazonaws.com/luv-ss/img/site/flags/24/us.png";
      break;
    case "pt_br" : 
      this.vars = pt_br_vars;
      this.flag = "https://s3-us-west-2.amazonaws.com/luv-ss/img/site/flags/24/br.png";
      break;
  }
  
}

Template.registerHelper( 'lang', ( vars )=>{ 
  
  switch( vars ) {
    case "flag" : return this.language.flag;
    case "menu.home" : return this.language.vars.menu.home;
    case "menu.info" : return this.language.vars.menu.info;
    default : return "Menu";
  }
  
});




