import React from 'react';
import Box from './Box';
export default function Row(props) {
  const [displayColumns, setDisplayColumns] = React.useState([]);
  const { columns } = props;
  console.log(columns);
  React.useEffect(() => {
    console.log(columns);
    setDisplayColumns(Array(columns).fill(1));
  }, [columns]);
  return (
    <div className="row-container">
      {displayColumns.map((item, index) => {
        return (<Box key={index} />)
      })}

    </div>
  );
}
