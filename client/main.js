import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

import './main.html';

Startups = new Mongo.Collection( 'startups' );

Template.registerHelper( 'ROOT', ()=>{ return "http://ec2-35-161-152-206.us-west-2.compute.amazonaws.com:3000"; });


Meteor.startup(function() {
  reCAPTCHA.config({
      sitekey: '6LfDjA0UAAAAAPuGXe2qp1k-uYjvTMKxGL0pLv4O', //REQUIRED
      theme: 'light', //OPTIONAL. <light|dark> Specifies the color theme of the widget
      type: 'image', //OPTIONAL. <audio|image> Specifies the type of captcha to serve
      size: 'normal', //OPTIONAL. <normal|compact> Specifies the type of captcha to serve
      callback: function(val) {}, //OPTIONAL. The name of your callback function to be executed when the user submits a successful CAPTCHA response. The user's response, g-recaptcha-response, will be the input for your callback function.
      tabindex: 0, //OPTIONAL. The tabindex of the widget and challenge. If other elements in your page use tabindex, it should be set to make user navigation easier.
      "expired-callback": function() {} //OPTIONAL. The name of your callback function to be executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.
  });
});


Template.present.onCreated( ()=> {
  this.counter = new ReactiveVar(0);
  this.startups = new ReactiveVar(0);
});

Template.present.helpers({
  ROOT() { return ROOT; },
  counter() {
    return Template.instance().counter.get();
  },
  startups() {
    return [
             { id:"e87d987a45dd", name:"Carbon Tryad, SV (US)", ev1:"U$ 150 mi", ev2:"U$ 890 mi", ev3:"U$ 3,9 bi" }, 
             { id:"587d987a45dd", name:"Direct Self Motors, SCV (Sw)", ev1:"U$ 150 mi", ev2:"U$ 890 mi", ev3:"U$ 3,9 bi" }, 
             { id:"a87d987a45dd", name:"Sympla, SPV (Br)", ev1:"U$ 150 mi", ev2:"U$ 890 mi", ev3:"U$ 3,9 bi" }
           ];
  },
  transactions() {
    return [
             { id:"e87d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" }, 
             { id:"a87d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" }, 
             { id:"a87d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" }, 
             { id:"a87d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" }, 
             { id:"a87d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" }, 
             { id:"a87d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" }, 
             { id:"587d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" },
             { id:"587d987a45dd", date:"Nov. 4, 2016 at 1:22 pm", message:"Some message here" }
           ];
  }
});

Template.homeDisplay.events({
  'click #ec-signup-btn'( event, template ) {
    
  }
});

