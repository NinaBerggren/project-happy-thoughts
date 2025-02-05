import React from 'react';

import { formatDistance } from 'date-fns';
// npm install date-fns

export const ListOfThoughts = ({ loading, listOfThoughts, onThoughtLikeChange }) => {
  if (loading) {
    return <h1 className="loading">Loading in progress...</h1>
  }

  return (
    <section className="thought-list-container">
      {listOfThoughts.map((thought) => (
        <div key={thought._id} className="thought-msg">
          <h4>{thought.message}</h4>
          <div className="like-stats-container">
            <button
              type="button"
              className={thought.hearts === 0 ? 'empty-btn' : 'like-btn'}
              onClick={() => onThoughtLikeChange(thought._id)}>
              <span className="heart" role="img" aria-label="heart symbol">
              ❤️
              </span>
            </button>
            <p className="likes">x{thought.hearts}</p>
            <p className="time">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </section>
  );
}