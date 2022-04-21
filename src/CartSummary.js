import React, { Component } from 'react';
import {
    
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    
  } from "reactstrap";

export class CartSummary extends Component {
  render() {
    return (
      <div>
          <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
      </div>
    )
  }
}

export default CartSummary