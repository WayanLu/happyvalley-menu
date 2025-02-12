import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";

function MenuList() {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>3</td>
            {/*<td colSpan={2}>Larry the Bird</td>
             */}
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default MenuList;
