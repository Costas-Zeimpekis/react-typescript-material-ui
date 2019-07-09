import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Exercises from './Exercises';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
