import React from 'react';
import { ConversationalForm } from 'conversational-form';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.cf = null; // <-- Conversational Form ref
  }
  componentDidMount(){
    // add Conversational Form info
    this.refs.profession.setAttribute('cf-questions', "elige una profesion");
    this.refs.name.setAttribute('cf-questions', "Cual es tu nombre?");
    this.refs.email.setAttribute('cf-questions', "Cual es tu e-mail?");
    this.refs.description.setAttribute('cf-questions', "como estas? ");
    
    this.cf = ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"),
      flowStepCallback: function(dto, success, error){
        success();
      },
      submitCallback: function(){
        // this callback could also be added to the React.createElement it self...
        alert("You made it!")
        console.log("Form submitted...");
      }
    });
  
  }
  render() {
    return React.createElement('form', {
      id: "form",
      ref: "form",
      className: 'form'
    },
      React.createElement('input', {
        type: 'text',
        ref: "name",
        placeholder: 'Name (required)',
        defaultValue: this.props.name,
      }),
      React.createElement('input', {
        type: 'email',
        ref: "email",
        placeholder: 'Email',
        defaultValue: this.props.email,
      }),
      React.createElement('textarea', {
        placeholder: 'Description',
        ref: "description",
        defaultValue: this.props.description,
      }),
      React.createElement('radio', {
        placeholder: 'Profession',
        ref: "profession",
        defaultValue: this.props.profession,
      }),
      React.createElement('button', {type: 'submit'}, "Submit")
    )
  }
};

export default Hello;
