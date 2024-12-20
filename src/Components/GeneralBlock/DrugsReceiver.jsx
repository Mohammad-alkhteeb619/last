import React, { useState } from "react";

const DrugOrdersManager = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      doctorName: "Dr. Smith",
      drugName: "Paracetamol",
      quantity: 20,
      status: "Pending",
    },
    {
      id: 2,
      doctorName: "Dr. Johnson",
      drugName: "Ibuprofen",
      quantity: 15,
      status: "Pending",
    },
  ]);

  const markAsFulfilled = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "Fulfilled" } : order
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Warehouse Orders</h1>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Serial number</th>
              <th>Requested By</th>
              <th>Drug Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.doctorName}</td>
                <td>{order.drugName}</td>
                <td>{order.quantity}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "Fulfilled" ? "bg-success" : "bg-warning"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  {order.status === "Pending" && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => markAsFulfilled(order.id)}
                    >
                      Mark as Fulfilled
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No Orders to Process.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DrugOrdersManager;
