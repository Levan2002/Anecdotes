import React, { Component } from 'react'
import { Button, Content, Text, View } from 'native-base'
import EnglishReducer from '../reducers/EnglishReducer'
import RussianReducer from '../reducers/RussianReducer'

class HomeScreen extends Component {
  static navigationOptions = {  
  title: 'Select Language',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Content>
        <Button full transparent onPress={() => navigate('Anecdotes', {language : 'russianLanguage'})}>
          <Text>русский</Text>
        </Button>
        <Button full transparent onPress={() => navigate('Anecdotes', {language : 'englishLanguage'})}>
          <Text>English</Text>
        </Button> 
      </Content>
    );
  }
}

export default HomeScreen;