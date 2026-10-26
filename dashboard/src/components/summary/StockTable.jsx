import {
  Avatar,
  Box,
  Chip,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const StockTable = ({ stocks }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        p: 3,
        mt: 4,
        border: "1px solid #E5E7EB",
      }}
    >
      {/* Header */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        flexWrap="wrap"
        gap={2}
      >
        <Typography
          variant="h5"
          fontWeight={700}
        >
          All Stocks
        </Typography>

        <Box display="flex" gap={2}>
          <TextField
            size="small"
            placeholder="Search stocks..."
            sx={{
              width: 260,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <IconButton
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              px: 2,
            }}
          >
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>

      <TableContainer>
        <Table>

          <TableHead>

            <TableRow
              sx={{
                background: "#F8FAFC",
              }}
            >
              <TableCell><b>Symbol</b></TableCell>
              <TableCell><b>Company</b></TableCell>
              <TableCell align="right"><b>Price</b></TableCell>
              <TableCell align="right"><b>Change</b></TableCell>
              <TableCell align="center"><b>% Change</b></TableCell>
            </TableRow>

          </TableHead>

          <TableBody>

            {stocks.map((stock) => {

              const positive = stock.percent >= 0;

              return (

                <TableRow
                  key={stock.symbol}
                  hover
                  sx={{
                    transition: ".25s",
                    cursor: "pointer",

                    "&:hover": {
                      background: "#F9FAFB",
                    },
                  }}
                >

                  <TableCell>

                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >

                      <Avatar
                        sx={{
                          bgcolor: positive
                            ? "#16A34A"
                            : "#DC2626",
                          width: 36,
                          height: 36,
                          fontWeight: 700,
                        }}
                      >
                        {stock.symbol[0]}
                      </Avatar>

                      <Typography
                        fontWeight={700}
                      >
                        {stock.symbol}
                      </Typography>

                    </Box>

                  </TableCell>

                  <TableCell>

                    <Typography color="text.secondary">
                      {stock.name}
                    </Typography>

                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    ₹{stock.price}
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{
                      color: positive
                        ? "#16A34A"
                        : "#DC2626",

                      fontWeight: 700,
                    }}
                  >
                    {positive ? "+" : ""}
                    {stock.change ?? 0}
                  </TableCell>

                  <TableCell align="center">

                    <Chip
                      label={`${positive ? "+" : ""}${stock.percent}%`}
                      color={positive ? "success" : "error"}
                      variant="filled"
                      sx={{
                        fontWeight: 700,
                        borderRadius: "8px",
                        minWidth: 80,
                      }}
                    />

                  </TableCell>

                </TableRow>

              );

            })}

          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StockTable;