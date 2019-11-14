import React from 'react';

import './App.css';
import Input from './Components/Input';
import Row from './Components/Row';

function App() {
  const [rows, setRows] = React.useState(1);
  const [columns, setColumns] = React.useState('');
  const [rowGap, setRowGap] = React.useState(1);
  const [columnGap, setcolumnGap] = React.useState(1);

  const [displayrows, setDisplayRows] = React.useState([]);
  const [displayColumns, setDisplayColumns] = React.useState([]);
  // const [splitColumns, setSplitColumns] = React.useState([]);



  // React.useEffect(() => {
  //   console.log('Display rows changed');
  //   console.log(displayrows)
  //   console.log(columns);
  //   console.log(displayColumns);
  //   // const display = displayColumns.split(',');
  // }, [rows, displayrows, columns, displayColumns]);


  function handleRowsChange(input) {
    setRows(input);
    setDisplayRows(Array(+input).fill(1));
  };
  function handleColumnsChange(input) {
    setDisplayColumns(columns.split(',').map(Number));
    setColumns(input);
  };
  function handleRowGapChange(i) {
    setRowGap(+i);
  };

  function handleColumnGapChange(i) {
    setcolumnGap(+i);
  };

  return (
    <div className="main-container">
      <div className="input-container">
        <Input
          onChange={handleRowsChange}
          inputValue={rows}
          label="No. of Rows"
        />
        <Input
          onChange={handleColumnsChange}
          inputValue={columns}
          label="Columns String"
        />
        <Input
          onChange={handleRowGapChange}
          inputValue={rowGap}
          label="Space between rows"
        />
        <Input
          onChange={handleColumnGapChange}
          inputValue={columnGap}
          label="Space between columns"
        />
      </div>

      {displayrows.map((row, i) => {
        return (<Row key={i} columns={displayColumns[i]} />)
      })}

    </div>
  );
}

export default App;
