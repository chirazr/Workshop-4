/*const Circle  = () => { return

< circle cx="50" cy="50" r="40" fill="red" stroke="black" strokeWidth="5"/>
}*/





const Circle = (props) => {
  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: props.color,
  };

  return <div style={circleStyle}></div>;
};

export default Circle


