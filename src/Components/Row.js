import React from 'react';
import Box from './Box';
export default function Row(props) {
  let style = {
    margin: '0.1rem 5rem 0rem 5rem',
    display: 'flex'
  };
  const [displayColumns, setDisplayColumns] = React.useState([]);

  const [styles, setStyles] = React.useState(style);
  const { columns, rowGap, columnGap } = props;

  React.useEffect(() => {
    setDisplayColumns(Array(columns).fill(1));
    CalculateGap();
  }, [columns, rowGap, columnGap]);

  function CalculateGap() {
    let s = {
      ...style,
      margin: `${rowGap}px 50px 0px 50px`
    };
    setStyles(s);
  }
  return (
    <div style={styles}>
      {displayColumns.map((item, index) => {
        return <Box key={index} colGap={columnGap} />;
      })}
    </div>
  );
}
