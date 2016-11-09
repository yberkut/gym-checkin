import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, AlertIOS } from 'react-native';
import { customerFound } from '../actions';
import { Button, QRReader } from './common';

class CheckInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { showCamera: true };
    this.parseCustomerData.bind(this);
    this.findCustomer.bind(this);
  }

  onBarCodeRead(e) {
    this.setState({ showCamera: false });

    const customerData = this.parseCustomerData(e.data);
    const customer = this.findCustomer(customerData);

    if (customer) {
      this.props.customerFound(customer);
    } else {
      AlertIOS.alert(
        'Customer is not found!',
        ''
      );
    }
  }

  findCustomer(data) {
    const { customers } = this.props;

    return _.find(customers, (c) => {
      return c.firstName === data.firstName
        && c.lastName === data.lastName;
    });
  }

  parseCustomerData(rawData) {
    const dataArray = rawData.split(' ');
    return {
      firstName: dataArray[0],
      lastName: dataArray[1]
    };
  }

  renderCamera() {
    if (this.state.showCamera) {
      return (
        <QRReader onBarCodeRead={this.onBarCodeRead.bind(this)} />
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={() => this.setState({ showCamera: true })}>
          Scan once more
        </Button>
      </View>
    );
  }

  render() {
    return (
      this.renderCamera()
    );
  }
}

const mapStateToProps = state => {
  const customers = _.map(state.customers, (val, uid) => {
    return { ...val, uid };
  });

  return { customers };
};

export default connect(mapStateToProps, { customerFound })(CheckInForm);
