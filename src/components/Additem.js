import React, { Component } from "react";

class AddItem extends Component {
  constructor(props){
    super(props);
    this.state={
      ProductName:"",
      ProductPrice:0,
    }
  }

  render() {
    return (
      <form
        className="row mb-5 align-items-end"
        onSubmit={(e)=>{
          e.preventDefault();

          if (this.props.AddItem) {
            this.props.AddItem(
              this.state.ProductName,
              Number(this.state.ProductPrice)
            );
          }

        }}
      >

        <div className="col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>

          <input
            type="text"
            className="form-control"
            id="inputName"
            value={this.state.ProductName}
            onChange={(e)=>{
              this.setState({ProductName: e.currentTarget.value})
            }}
          />
        </div>

        <div className="col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>

          <input
            type="number"
            className="form-control"
            id="price"
            value={this.state.ProductPrice}
            onChange={(e)=>{
              this.setState({ProductPrice: e.currentTarget.value})
            }}
          />
        </div>

        <div className="col-4">
          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </div>

      </form>
    );
  }
}

export default AddItem;