import React, { useState } from "react";

const DrugOrderForm = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({
    doctorName: "",
    drugName: "",
    quantity: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order.doctorName && order.drugName && order.quantity) {
      setOrders([...orders, order]);
      setOrder({
        doctorName: "",
        drugName: "",
        quantity: "",
        comments: "",
      });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Drug Order Form</h1>

      {/* Order Form */}
      <div className="card">
        <div className="card-header">Place a New Order</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="doctorName">Requested By</label>
              <input
                type="text"
                className="form-control"
                id="doctorName"
                name="doctorName"
                value={order.doctorName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="drugName">Drug Name</label>
              <input
                type="text"
                className="form-control"
                id="drugName"
                name="drugName"
                value={order.drugName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                value={order.quantity}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                rows="3"
                value={order.comments}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Orders List */}
      <div className="mt-4">
        <h2>Order History</h2>
        {orders.length === 0 ? (
          <p className="text-muted">No Orders Placed Yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="thead-light">
                <tr>
                  <th>Serial Number</th>
                  <th>Pharmacist's Name</th>
                  <th>Drug Name</th>
                  <th>Quantity</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.doctorName}</td>
                    <td>{order.drugName}</td>
                    <td>{order.quantity}</td>
                    <td>{order.comments || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrugOrderForm;
