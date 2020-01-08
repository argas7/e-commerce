import React, { Component } from 'react';
import { Navbar, AddList } from '../../components';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prodAdds, length, handleDelete } = this.props;
    return (
      <>
        <Navbar length={length}/>
        <AddList handleDelete={handleDelete} prodAdds={prodAdds} />
      </>
    );
  }
}
