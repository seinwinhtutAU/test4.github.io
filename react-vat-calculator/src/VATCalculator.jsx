import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VATCalculator() {
  const [price, setPrice] = useState("");
  const [vatAmount, setVatAmount] = useState(0);
  const [total, setTotal] = useState(null);

  const VAT_RATE = 0.07;

  const handleCalculate = () => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      alert("Please enter a valid number.");
      return;
    }

    const vat = numericPrice * VAT_RATE;
    const totalPrice = numericPrice + vat;

    setVatAmount(vat.toFixed(2));
    setTotal(totalPrice.toFixed(2));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card p-4 shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h4 className="text-center mb-4">VAT Calculator</h4>

        <div className="mb-3">
          <label htmlFor="priceInput" className="form-label">
            Price:
          </label>
          <div className="input-group">
            <input
              id="priceInput"
              type="text"
              className="form-control"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleCalculate}>
              Calculate VAT
            </button>
          </div>
        </div>

        <div className="mt-3">
          <p>
            <strong>Price:</strong> {price || "0.00"}
          </p>
          <p>
            <strong>VAT Rate:</strong> 7.00%
          </p>
          <p>
            <strong>VAT:</strong> {vatAmount}
          </p>
          <p>
            <strong>Total:</strong> {total || "....."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VATCalculator;
