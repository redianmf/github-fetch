// Import Dependencies
import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import { Octokit } from "@octokit/core";
import moment from "moment";
import Swal from "sweetalert2";

export default function Home() {
  // Declare state
  const [repos, setRepos] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to call get repo API
  const getRepos = async () => {
    try {
      setIsLoading(true);
      const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

      console.log(process.env.GITHUB_USERNAME);
      const response = await octokit.request(
        `GET /users/${process.env.GITHUB_USERNAME}/repos`,
        { type: "private" }
      );

      setRepos(response.data);

      setTimeout(() => setIsLoading(false), 1500);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Data failed to load, please refresh the page",
        icon: "error",
        confirmButtonText: "Okay",
      });
      setIsLoading(false);
    }
  };

  // Call function when components mounted
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
                {isLoading ? (
                  <div className="text-center mt-5">
                    <Spinner animation="border" size="xl" variant="light" />
                  </div>
                ) : (
                  <div className="container-table">
                    <Table className="table-repos" hover borderless>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Repository Name</th>
                          <th className="text-center">Last Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {repos &&
                          repos?.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <a
                                  href={item.html_url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {item.name}
                                </a>
                              </td>
                              <td className="text-center">
                                {moment(item.updated_at).format(
                                  "D MMMM YYYY, H:mm:ss"
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </div>
                )}
                <div className="image-source">
                  Image by manos koutras from Unsplash
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} md={3}></Col>
      </Row>
    </Container>
  );
}
