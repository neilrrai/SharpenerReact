// We used Card component as Wrapper div so we can re use with css

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
