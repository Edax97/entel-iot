import MUIDataTable, { MUIDataTableProps } from "mui-datatables";
import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

type Props = {} & MUIDataTableProps;
export default function MUITable({ options, ...restProps }: Props) {
  const opciones = useMemo(() => (options ? options : {}), [options]);
  const getTheme = () => {
    return createTheme({
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundColor: "rgba(0,0,0,0)",
              boxShadow: "none",
            },
          },
        },
        MUIDataTable: {
          styleOverrides: {
            root: {
              backgroundColor: "rgba(0,0,0,0)",
              boxShadow: "none",
              //fontFamily: "inherit !important",
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            fixedHeader: {
              backgroundColor: "transparent",
              color: "rgba(0,0,0) !important",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              //fontFamily: "inherit",
              color: "rgba(0,0,0,0.7)",
              whiteSpace: "pre-line",
              padding: "0.5rem 0.75rem",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              //fontFamily: "inherit",
              color: "inherit",
            },
          },
        },
        MUIDataTableFooter: {
          styleOverrides: {
            root: {
              marginTop: "1rem",
            },
          },
        },
      },
    });
  };
  return (
    <ThemeProvider theme={getTheme()}>
      <MUIDataTable
        {...restProps}
        options={{
          filter: false,
          selectableRows: "none",
          responsive: "vertical",
          ...opciones,
        }}
      />
    </ThemeProvider>
  );
}
