import { useState, useRef } from "react";
import {
  Container,
  Grid,
  Button,
  MenuItem,
  TextField,
  Typography,
  Divider,
  Box,
  Paper,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import QuotationTable from "./QuotationTable";

const products = [
  { code: "p001", name: "Product A", price: 100 },
  { code: "p002", name: "Product B", price: 200 },
  { code: "p003", name: "Product C", price: 150 },
  { code: "p004", name: "Product D", price: 250 },
];

function App() {
  const itemRef = useRef();
  const ppuRef = useRef();
  const qtyRef = useRef();
  const discountRef = useRef();

  const [dataItems, setDataItems] = useState([]);
  const [ppu, setPpu] = useState(products[0].price);

  const addItem = () => {
    const selectedProduct = products.find(
      (v) => itemRef.current.value === v.code
    );
    const newItem = {
      item: selectedProduct.name,
      ppu: parseFloat(ppuRef.current.value),
      qty: parseInt(qtyRef.current.value),
      discount: parseFloat(discountRef.current.value),
    };

    const updatedItems = [...dataItems];
    const existingIndex = updatedItems.findIndex(
      (x) => x.item === newItem.item
    );

    if (existingIndex >= 0) {
      updatedItems[existingIndex].qty += newItem.qty;
      updatedItems[existingIndex].discount += newItem.discount;
    } else {
      updatedItems.push(newItem);
    }

    setDataItems(updatedItems);
  };

  const deleteByIndex = (index) => {
    const newDataItems = [...dataItems];
    newDataItems.splice(index, 1);
    setDataItems(newDataItems);
  };

  const productChange = () => {
    const item = products.find((v) => itemRef.current.value === v.code);
    setPpu(item.price);
  };

  const clearAll = () => {
    setDataItems([]);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Add Item
            </Typography>

            <TextField
              select
              label="Select Product"
              fullWidth
              inputRef={itemRef}
              defaultValue={products[0].code}
              onChange={productChange}
              sx={{ mb: 2 }}
            >
              {products.map((p) => (
                <MenuItem key={p.code} value={p.code}>
                  {p.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Price Per Unit"
              type="number"
              inputRef={ppuRef}
              value={ppu}
              onChange={(e) => setPpu(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="Quantity"
              type="number"
              inputRef={qtyRef}
              defaultValue={1}
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="Discount"
              type="number"
              inputRef={discountRef}
              defaultValue={0}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Divider sx={{ my: 2 }} />

            <Button
              variant="contained"
              fullWidth
              onClick={addItem}
              startIcon={<AddShoppingCart />}
            >
              Add to Quotation
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <QuotationTable
            data={dataItems}
            deleteByIndex={deleteByIndex}
            clearAll={clearAll}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
