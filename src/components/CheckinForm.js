'use strict';
import React, { Component } from 'react';
import { View, AlertIOS } from 'react-native';
import { Button, QRReader } from './common';

class CheckinForm extends Component {
  state = {
    showCamera: true
  };

  onBarCodeRead(e) {
    this.setState({ showCamera: false });
    AlertIOS.alert(
      'Barcode Found!',
      'Type: ' + e.type + '\nData: ' + e.data
    );
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

export default CheckinForm;
