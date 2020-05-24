import React from 'react';

import './styles.css';

class UncontrolledForm extends React.Component {
  constructor() {
    super();

    this.inputName = React.createRef();
    this.inputProfile = React.createRef();
    this.inputPost = React.createRef();

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();

    alert(`Componentes não controlados: { name: ${this.inputName.current.value} }`);
  }

  render() {
    return (
      <div className="container">
        <form className="post__form" onSubmit={this.handleOnSubmit}>
          <label>
            Nome:
            <input type="text" name="name" ref={this.inputName} />
          </label>

          <label>
            Profile:
            <input
              type="text"
              name="profile"
              placeholder="http://.."
              ref={this.inputProfile}
            />
          </label>

          <label>
            Post:
            <input
              type="text"
              name="post"
              placeholder="http://.."
              ref={this.inputPost}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
