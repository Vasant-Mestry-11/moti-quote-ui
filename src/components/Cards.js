import React from "react";

const Cards = ({ filteredQuotes }) => {
  if (filteredQuotes.length === 0)
    return <div className="no-quotes-found">No Quotes Found !</div>;
  return filteredQuotes.map(({ author, genre, nameOfBook, quote, _id }) => (
    <article key={_id} className="cards">
      <>
        Quote: {quote} <br />
        Author: {author} <br />
        Book Name: {nameOfBook} <br />
        Genre: {genre} <br />
      </>
    </article>
  ));
};

export default Cards;
