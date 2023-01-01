import DataTable from "./table/DataTable";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UsersTable() {

  return (
    <Container>
       <Row>
        <Col>
          <h2 className='h2 fw-bold'>Users</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable />
        </Col>
      </Row>
    </Container>
  )
}

export default UsersTable
