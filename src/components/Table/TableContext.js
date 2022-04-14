import React, { createContext, useState } from "react";
const TableContext = createContext();

export function TableProvider({ children }) {
  const [showInfos, setShowInfos] = useState();
  const [showContinent, setShowContinent] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState(5);
  const [filterByContinent, setFilterByContinent] = useState("Global");

  return (
    <TableContext.Provider
      value={{
        showInfos,
        setShowInfos,
        showContinent,
        setShowContinent,
        showFilter,
        setShowFilter,
        filterBy,
        setFilterBy,
        filterByContinent,
        setFilterByContinent,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export default TableContext;
