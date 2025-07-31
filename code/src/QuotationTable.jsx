import {
  Container,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { MdClear } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";

function QuotationTable({ data, deleteByIndex, clearAll }) {
  if (!data || data.length === 0) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Quotation
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <CiShoppingCart /> No items
        </Typography>
      </Box>
    );
  }

  const total = data.reduce((acc, v) => acc + v.qty * v.ppu - v.discount, 0);
  const totalDiscount = data.reduce(
    (sum, item) => sum + parseFloat(item.discount),
    0
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Quotation</Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={clearAll}
          startIcon={<MdClear />}
        >
          Clear All
        </Button>
      </Box>

      <TableContainer>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell>Item</TableCell>
              <TableCell align="center">Price/Unit</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((v, i) => {
              const amount = v.qty * v.ppu;
              return (
                <TableRow key={i}>
                  <TableCell align="center">
                    <BsFillTrashFill
                      style={{ cursor: "pointer", color: "#f44336" }}
                      onClick={() => deleteByIndex(i)}
                    />
                  </TableCell>
                  <TableCell align="center">{v.qty}</TableCell>
                  <TableCell>{v.item}</TableCell>
                  <TableCell align="center">{v.ppu}</TableCell>
                  <TableCell align="center">{v.discount}</TableCell>
                  <TableCell align="center">
                    {(amount - v.discount).toFixed(2)}
                  </TableCell>
                </TableRow>
              );
            })}

            <TableRow>
              <TableCell colSpan={5} align="right">
                <strong>Total Discount</strong>
              </TableCell>
              <TableCell align="center" sx={{ color: "primary.main" }}>
                {totalDiscount.toFixed(2)}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={5} align="right">
                <strong>Total</strong>
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "success.main", fontWeight: "bold" }}
              >
                {total.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default QuotationTable;
