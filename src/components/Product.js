import React from "react";

export default function Product(props) {

  function incrementQuantity() {
    props.incrementQuantity(props.index);
  }

  function decrementQuantity() {
    props.decrementQuantity(props.index);
  }

  function removeProduct() {
    if (props.removeItem) {
      props.removeItem(props.index);
    }
  }

  return (
    <div className="row mt-3 align-items-center">

      <div className="col-4">
        <h5>
          {props.product.name}{" "}
          <span className="badge text-bg-secondary">
            ₹{props.product.price} New
          </span>
        </h5>
      </div>

      <div className="col-4">
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-danger"
            onClick={decrementQuantity}
          >
            -
          </button>

          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>

      <div className="col-2">
        <button
          className="btn btn-danger w-100"
          onClick={removeProduct}
        >
          REMOVE
        </button>
      </div>

    </div>
  );
}