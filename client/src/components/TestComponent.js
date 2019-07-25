import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

const TestComponent = ({ movies }) => {
  return (
    <ul>
      {movies.map(m => (
        <li key={m.title}>
          {m.title} ({m.year})
        </li>
      ))}
    </ul>
  );
};

TestComponent.propTypes = {
  movies: propTypes.array
};

const mapStateToProps = ({ movies }) => {
  return {
    movies
  };
};

export default connect(mapStateToProps)(TestComponent);
