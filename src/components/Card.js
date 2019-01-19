import React, { Component } from 'react';
import { Container, Header, Content, CardItem, Text, Icon, Right } from 'native-base';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

class Card extends Component {
  renderItem(englishLanguage){  
    return(
      <CardItem style= {{borderWidth: 1, borderColor: '#d6d7da',}}>
          <Text>
               {englishLanguage.item.anecdote}
          </Text>
      </CardItem>
    );
  }

  render() {
      switch(this.props.language){
          case('englishLanguage'):
            return(
              <FlatList
                data={this.props.englishLanguage}
                renderItem={this.renderItem}
                keyExtractor={englishLanguage => englishLanguage.id.toString()}
              />
            );
            case('russianLanguage'):
              return(
                <FlatList
                  data={this.props.russianLanguage}
                  renderItem={this.renderItem}
                  keyExtractor={russianLanguage => russianLanguage.id.toString()}
                />
              )
      }
  }
}

const mapStateToProps = state => {
    return { englishLanguage: state.englishLanguage, russianLanguage : state.russianLanguage};
};
  
export default connect(mapStateToProps)(Card);
  