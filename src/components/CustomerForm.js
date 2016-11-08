import React, { Component } from 'react';
import { connect } from 'react-redux';
import { customerCreate } from '../actions';
import { Card, CardSection, Button } from './common';

class CustomerForm extends Component {
  onButtonPress() {
    const customer = {
      firstName: 'Adam',
      lastName: 'Smith',
      phone: '0976941680'
    };

    this.props.customerCreate(customer);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { customerCreate })(CustomerForm);
