import React, { Component } from 'react';
import reducers from '../reducers';
import Card from './Card';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class Anecdote extends Component {
  render() {
    const { navigation } = this.props;
    const language = navigation.getParam('language', 'some default value');
    return (
      <Provider store= {createStore(reducers)}>
        <Card language = {language}/>
      </Provider>
    );
  }
}

export default Anecdote;