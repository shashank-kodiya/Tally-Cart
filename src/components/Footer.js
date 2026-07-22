import React from "react";


export default function Footer(props) {
  return (
    <div
      className="container-fluid fixed-bottom mb-4"
      style={{ backgroundColor: "#98ddc9", padding: "10px" }}
    >
      <div className="row justify-content-center align-items-center text-center shadow-lg p-3 rounded">
        
        <button
          className="btn btn-danger col-2 fw-bold"
          onClick={props.resetQuantity}
        >
          Reset
        </button>

        <div className="col-6 bg-success text-white fw-bold fs-4 py-2 rounded">
          Total: ₹ {props.totalAmount}
        </div>

        <button className="btn btn-primary col-2 fw-bold">
          Pay Now
        </button>

      </div>
    </div>
  );
}