import React from "react";

const NotFound = () => {
  return (
    <div className="page-wrap d-flex flex-row align-items-center page-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block text-body">404</span>
            <div className="mb-4 lead">
              The page you are looking for was not found.
            </div>
            <a href="/" class="btn btn-link">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
