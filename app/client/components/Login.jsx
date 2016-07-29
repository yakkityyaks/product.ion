
const Login = React.createClass({

  getInitialState() {
    let { first_name, last_name, email } = user;
    return {
      firstName: first_name || '',
      lastName: last_name || '',
      email: email || ''
    };
  },

  render() {
    return (
      <div className='login'>
        <h2>Basic Information</h2>

        <div>
          <input type='text'
                 valueLink={this.linkState('firstName')}
                 placeholder='First Name'/>
        </div>
        <div>
          <input type='text'
                 valueLink={this.linkState('lastName')}
                 placeholder='Last Name'/>
        </div>
        <div>
          <input type='text'
                 valueLink={this.linkState('email')}
                 placeholder='Email'/>
        </div>
        <div>
          <input type='text'
                 valueLink={this.linkState('github')}
                 placeholder='Github'/>
        </div>

        <div className='button-container'>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    );
  }
});
