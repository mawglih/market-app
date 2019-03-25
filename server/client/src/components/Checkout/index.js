import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import StripeCheckout from 'react-stripe-checkout';

export class Checkout extends Component {
  render() {
    const {
      paymentDescription,
      paymentName,
      handleToken,
    } = this.props;
    return (
      <StripeCheckout 
        amount={500}
        token={token => handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name={paymentName}
        description={paymentDescription}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(Checkout);
