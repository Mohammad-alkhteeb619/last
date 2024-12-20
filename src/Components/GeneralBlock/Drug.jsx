import React, { useState } from "react";

const DrugWarehouse = () => {
  const [drugs, setDrugs] = useState([
    { name: "Paracetamol", quantity: 100, expiry: "2024-05-01" },
    { name: "Ibuprofen", quantity: 50, expiry: "2025-03-15" },   
   


  ]);
  const [newDrug, setNewDrug] = useState({
    name: "",
    quantity: "",
    expiry: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDrug({ ...newDrug, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddDrug = (e) => {
    e.preventDefault();
    if (newDrug.name && newDrug.quantity && newDrug.expiry) {
      setDrugs([...drugs, newDrug]);
      setNewDrug({ name: "", quantity: "", expiry: "" });
    }
  };

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Drug Warehouse</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search drugs by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Drug List Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Serial Number</th>
              <th>Drug Name</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrugs.map((drug, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{drug.name}</td>
                <td>{drug.quantity}</td>
                <td>{drug.expiry}</td>
              </tr>
            ))}
            {filteredDrugs.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center">
                  No drugs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Drug Form */}
      <div className="card mt-4">
        <div className="card-header">Add New Drug</div>
        <div className="card-body">
          <form onSubmit={handleAddDrug}>
            <div className="form-group">
              <label htmlFor="name">Drug Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newDrug.name}
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
                value={newDrug.quantity}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry">Expiry Date</label>
              <input
                type="date"
                className="form-control"
                id="expiry"
                name="expiry"
                value={newDrug.expiry}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DrugWarehouse;
