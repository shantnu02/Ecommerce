import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart, removeFromCart } from "../actions/cartActions";
class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    console.log(this.props);

    return (
      <div className="alert alert-info">
        {cartItems === 0 ? "Basket is empty" : 
          <div>
            You have {cartItems.map} items in the basket. <hr />
          </div>
        }
        {cartItems  > 0 && cartItems &&
          <div>
            <ul  style={{ marginLeft: -25 }}>
              {cartItems.map(item =>
                <li>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  
                </li>
                )}
            </ul>

          <b>
            Sum:{" "}   {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <button className="btn btn-primary" onClick={() => alert("Todo: Implement checkout page.")}
             className="btn btn-primary"
            >
              Checkout
            </button>
          </div>
        }
      </div>
    );
    
  }
 
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
