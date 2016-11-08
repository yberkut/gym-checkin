import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, AlertIOS } from 'react-native';
import { Button, QRReader } from './common';

class CheckInForm extends Component {
  state = {
    showCamera: true
  };

  onBarCodeRead(e) {
    this.setState({ showCamera: false });
    const customerData = this.parseCustomerData(e.data);
    this.findCustomer(customerData);
  }

  findCustomer(data) {
    AlertIOS.alert(
      'Barcode Found!',
      `${data.firstName} ${data.lastName}`
    );
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
      <View>
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

export default connect(mapStateToProps, {})(CheckInForm);
