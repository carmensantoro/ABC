import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Component made by me
import BookInfoPage from "./elements/infoPage/BookInfoPage";
import Loading from "./elements/infoPage/Loading";
import Error from "./elements/infoPage/Error";

//Bootstrap
import Image from "react-bootstrap/Image";

const InfoPage = ({ match }) => {
    const {
        params: { bookId },
    } = match;
    const [book, setBook] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        let URL = ("https://www.googleapis.com/books/v1/volumes");
        const fetchBook = async () => {
            setLoading(true);
            setError(false);
            try {
                const result = await axios.get(URL +"/" + bookId);
                setBook(result.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        // Call the API
        fetchBook();
    }, [bookId]);


    return (
        <>
            <Link to={`/`}><Image src="images/back.png" /></Link>
            <Loading loading={loading} />
            <Error error={error} />
            <BookInfoPage books={book} />
    </>
            );
};

export default InfoPage;