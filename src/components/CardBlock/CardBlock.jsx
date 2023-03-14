import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.image} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
        <Card.Text>{props.item.price}</Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
