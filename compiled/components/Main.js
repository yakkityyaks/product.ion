import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  displayName: 'Main',

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        React.createElement(
          Link,
          { to: '/' },
          'Product.ion'
        )
      ),
      React.cloneElement(this.props.children, this.props)
    );
  }
});

export default Main;