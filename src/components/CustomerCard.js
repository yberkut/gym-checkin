import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class CustomerCard extends Component {
  render() {
    const { firstName, lastName } = this.props.customerForm;
    return (
      <Card>
        <CardSection>
         <Text>
           {`Hello, ${firstName} ${lastName}!`}
         </Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { customerForm } = state;
  return { customerForm };
};

export default connect(mapStateToProps, { })(CustomerCard);
