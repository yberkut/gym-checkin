import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Alert } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { firstName, lastName } = this.props.customer;

    return (
      <TouchableWithoutFeedback onPress={() => { Alert.alert('onPress fired'); }}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {firstName} {lastName}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
