import React from "react";
import {Link} from "react-router-dom";

//Component created by me
import BookAuthors from "./../BookAuthors";
import {checkPrice, createDescMarkup} from "./BookInfoPageSections";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const BookInfoPage = ({ books }) => {
    return (
        <>
            {
                books && (
                    <Table responsive bordered hover>
                        <thead>
                        <tr>
                            <th colSpan="2">
                                <div className="title">
                                    {/*Back Button*/}
                                    <Link className="object" to={`/`}><Image src="/images/back.png" /></Link>
                                    <div className="objectLink text-center">
                                        <h3>
                                            {/*Title*/}
                                            {books.volumeInfo.title}
                                        </h3>
                                        {/*Subtitle*/}
                                        <h6>{books.volumeInfo.subtitle}</h6>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan="2" className="infoBG">
                                <Container fluid>
                                    <Row className="justify-content-center mt-4">
                                        <Col xs="auto">
                                            {/*Image of the book*/}
                                            <Image
                                                className="cardImage"
                                                alt={books.volumeInfo.title}
                                                src={"http://books.google.com/books/content?id=" + books.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            </td>
                        </tr>
                        {/*Book Info*/}
                        <tr>
                            <td><strong>Autore</strong></td>
                            <td style={{width: "50%"}}>{BookAuthors(books.volumeInfo.authors)}</td>
                        </tr>
                        <tr>
                            <td><strong>Data di pubblicazione</strong></td>
                            <td style={{width: "50%"}}>{books.volumeInfo.publishedDate}</td>
                        </tr>
                        <tr>
                            <td><strong>Prezzo</strong></td>
                            <td style={{width: "50%"}}>
                                {/*Price*/}
                                {checkPrice(books.saleInfo)}
                                &nbsp;&nbsp;
                                {/*Download Button*/}
                                <a target="_blank" href={books.saleInfo.buyLink}>
                                    <Button variant="light" className="btnCard">Scarica</Button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Editore</strong></td>
                            <td style={{width: "50%"}}>{books.volumeInfo.publisher}</td>
                        </tr>
                        <tr>
                            <td><strong>Numero di pagine</strong></td>
                            <td style={{width: "50%"}}>{books.volumeInfo.pageCount}</td>
                        </tr>
                        <tr>
                            <td><strong>Trama</strong></td>
                            <td style={{width: "50%"}}><span dangerouslySetInnerHTML={createDescMarkup(books.volumeInfo.description)} /></td>
                        </tr>
                        </tbody>
                    </Table>
                )}
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default BookInfoPage;