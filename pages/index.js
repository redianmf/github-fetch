import { Container, Row, Col, Table } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={10} md={6}>
          <div className="main-card mt-4">
            <Row>
              <h1 className="text-center text-white pt-3">My Repos</h1>
            </Row>
            <Row>
              <Col className="ms-5 me-5 mt-3">
                <Table className="table-repos" hover>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
}
