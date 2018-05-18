import React, { Component } from "react";



class Button extends Component  {

    alert(){
        alert("Hello! I am an alert box!!");
    };


    render (){
        return ( 
            <button onClick={this.alert} className="btn waves-effect waves-light" type="submit" name="action">Submit
            </button>

         )}}




export default Button

