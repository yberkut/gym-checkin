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
    const { firstName, lastName } = this.props.user;

    return (
      <Card>
        <CardSection style={styles.welcomeContainerStyle}>
          <Text style={styles.welcomeTextStyle}>
            Welcome back, {firstName} {lastName}!
          </Text>
        </CardSection>
        {this.renderButtons()}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { customerStatus, auth: { user } } = state;

  return { customerStatus, user };
};

const styles = {
  welcomeContainerStyle: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  welcomeTextStyle: {
    fontSize: 18
  }
};

export default connect(mapStateToProps, { customersFetch })(LandingScreen);
