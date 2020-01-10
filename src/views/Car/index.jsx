import React, { Component } from 'react';
import { Navbar, AddList } from '../../components';
import './Car.scss';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prodAdds, length, handleDelete } = this.props;
    return (
      <>
        <div id="car">
          <Navbar length={length}/>
          <AddList handleDelete={handleDelete} prodAdds={prodAdds} />
        </div>
      </>
    );
  }
}

export default Test;
