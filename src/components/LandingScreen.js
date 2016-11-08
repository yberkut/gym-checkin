import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { customersFetch } from '../actions';
import { Card, CardSection, Button } from './common';

class LandingScreen extends Component {
  componentDidMount() {
    this.props.customersFetch();
  }

  renderButtons() {
    if (this.props.customerStatus.customersFetching) {
      return (
        <CardSection>
          <Text>
            Please, wait. Customers are currently fetching...
          </Text>
        </CardSection>
      );
    }

    return (
      <CardSection>
        <Button onPress={() => Actions.checkIn()}>
          Customer Check In
        </Button>
        <Button onPress={() => Actions.customers()}>
          See Customer List
        </Button>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        {this.renderButtons()}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { customerStatus } = state;

  return { customerStatus };
};

export default connect(mapStateToProps, { customersFetch })(LandingScreen);
