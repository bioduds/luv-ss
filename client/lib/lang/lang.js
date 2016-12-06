/* 
Translation System
luv Startup-Aktien
Eduardo Capanema
Dez., 2016
*/

if( !Session.get( "lang" ) ) { Session.setPersistent( "lang", "en" ); }
language = new Language( Session.get( "lang" ) );
function Language( lang ) {
  this.lang = lang;
  this.vars = en_vars;
  switch( lang ) {
    case "en" : this.vars = en_vars; break;
    case "pt_br" : this.vars = pt_br_vars; break;
    case "de" : this.vars = de_vars; break;
    case "es" : this.vars = es_vars; break;
  }
}
Template.registerHelper( 'lang', ( vars )=>{ return this.language.vars[ vars ]; });

