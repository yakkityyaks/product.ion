import React from 'react';
import Sidebar from 'react-sidebar';
import { Button } from 'react-bootstrap';
import CSVDrop from './CSVDrop';

// get button icon
// on button click, open sidebar; make sidebar opaque
// on open, render sidebar components: csv, cost-to-date, data
  // loop through these, attach them to <b> tags. Assign to sidebar variable.
//
// enable styles and shadow


const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  content: {
    padding: '16px',
  },
};
const Menu = React.createClass({
  getInitialState() {
    return {docked: false, open: false};
  },

  componentWillMount() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  },

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  },

  onSetOpen(open) {
    this.setState({open: open});
  },

  mediaQueryChanged() {
    this.setState({docked: this.state.mql.matches});
  },

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  },

  render() {
    const sidebar = <CSVDrop {...this.props}/>;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> TESTING </span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

  // render: function() {
  //   var sidebarContent = <CSVDrop {...this.props} />;
  //
  // }
    return (

        <Sidebar {...sidebarProps}>
                 <Button>OPEN</Button>
        </Sidebar>

    );
  }
});

export default Menu;
