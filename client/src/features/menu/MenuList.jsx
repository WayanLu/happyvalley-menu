import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
import CreateItem from "./MenuItem";

function MenuList({ categoryList }) {
  return (
    <Container fluid>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.map((item) => (
            <CreateItem
              key={item.id}
              index={item.id}
              name={item.name}
              price={item.price}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MenuList;
