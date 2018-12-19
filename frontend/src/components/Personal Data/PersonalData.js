import React, { Component } from 'react'

export default class PersonalData extends Component {
  state = {
    firstNameCompleted : 'input-text',
    emailCompleted : 'input-text',
    phoneCompleted : 'input-text',
    messageCompleted : 'input-text',
    firstName : '',
    email : '',
    phone : '',
  }


  render() {
    return (
      <div>
      <div className="dataTitle">
        <h1>INFOS PERSONNELLES</h1>
      </div>
      <div className="ContactContainer">

        <form 
        className="contact-form"
        onSubmit={(e) => this.handleSubmit(e)}>

        {/* NAME FIELD */}

          <div className="form-fields">
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e)} 
              className={this.state.firstNameCompleted} 
              required>
            </input>

            <label 
              className="label" 
              htmlFor="firstName">
            Nom *
            </label>
          </div>
          
        {/* EMAIL FIELD */}

          <div className="form-fields">
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={this.state.email}
              onChange={(e) => this.handleChange(e)} 
              className={this.state.emailCompleted} 
              required>
            </input>
            <label 
            className="label" 
            htmlFor="email">
            Email *
            </label>
          </div>

          {/* PASSWORD FIELD */}

          <div className="form-fields">
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={this.state.password}
              onChange={(e) => this.handleChange(e)} 
              className={this.state.passwordCompleted} 
              required>
            </input>
            <label 
            className="label" 
            htmlFor="password">
            Password *
            </label>
          </div>

        {/* PHONE FIELD */}


          <div className="form-fields">
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={this.state.phone}
              onChange={(e) => this.handleChange(e)} 
              className={this.state.phoneCompleted} 
              required>
            </input>
            <label 
              className="label" 
              htmlFor="phone">
            Téléphone *
            </label>
          </div>

        {/* BUTTON */}

          <div className="form-fields button">
            <button 
            className="btn btn-warning"
            >Envoyer</button>   
          </div>

        </form>
      
    </div>
    </div>

    )
  }
}
