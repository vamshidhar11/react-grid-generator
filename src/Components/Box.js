import React from 'react';

export default function Box(props) {
  let style = {
    backgroundColor: '#2c666e',
    borderRadius: '0.8rem',
    height: '10rem',
    width: '10rem',
    marginRight: '1px'
  };

  const [styles, setStyles] = React.useState(style);
  const { colGap } = props;

  React.useEffect(() => {
    CalculateGap();
  }, [colGap]);

  function CalculateGap() {
    let s = {
      ...style,
      marginRight: `${colGap}px`
    };
    console.log(s);
    setStyles(s);
  }

  return <div style={styles}></div>;
}
