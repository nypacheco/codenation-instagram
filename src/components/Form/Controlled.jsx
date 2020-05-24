import React from 'react';

import './styles.css';

class ControlledForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      profile: '',
      post: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const { name } = this.state;
    alert(`Componentes controlados: { name: ${name} }`);
  }

  render() {
    const {
      name, profile, post,
    } = this.state;

    return (
      <div className="container">
        <form className="post__form" onSubmit={this.handleOnSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={this.handleOnChange} />
          </label>

          <label>
            Profile:
            <input
              type="text"
              name="profile"
              value={profile}
              onChange={this.handleOnChange}
              placeholder="http://..."
            />
          </label>

          <label>
            Post:
            <input
              type="text"
              name="post"
              value={post}
              onChange={this.handleOnChange}
              placeholder="http://..."
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
