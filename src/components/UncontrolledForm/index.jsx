import React from 'react';

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

    // console.log(this.inputName.current);

    alert(`post de ${this.inputName.current.value} criado com sucesso por componentes não controlados`);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
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
    );
  }
}

export default UncontrolledForm;
