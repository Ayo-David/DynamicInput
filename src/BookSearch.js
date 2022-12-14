import React from "react";
import ReactDOM from "react-dom";
//import BookSearch from "./BookSearch";
import BookSearchs from "./SearchDynamic";//this implements class component
import './bookstyle.css'
import { useParams } from 'react-router-dom'
import Focus from "./Focus_useRef";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/
const bookss = [
  {

    "author": "Chinua Achebe",
    "country": "Nigeria",

  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",

  },

];
const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "language": "English",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "language": "Italian",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Virginia Woolf",
    "country": "United Kingdom",
    "language": "English",
    "pages": 216,
    "title": "Mrs Dalloway",
    "year": 1925
  },
  {
    "author": "Virginia Woolf",
    "country": "United Kingdom",
    "language": "English",
    "pages": 209,
    "title": "To the Lighthouse",
    "year": 1927
  },
];

const BookSearch = props => {
  const { type } = useParams()
  return (

    <div id="app">
      {type === 'focus' && <Focus />}
      <br />
      <BookSearchs books={books} />

    </div>
  );
}

export default BookSearch;