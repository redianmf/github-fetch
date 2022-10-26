import { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Octokit } from "@octokit/core";

export default function Home() {
  const [repos, setRepos] = useState("");

  const getRepos = async () => {
    try {
      const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

      console.log(process.env.GITHUB_USERNAME);
      const response = await octokit.request(
        `GET /users/${process.env.GITHUB_USERNAME}/repos`,
        {}
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

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
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Repository Name</th>
                      <th>Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Mark</td>
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
