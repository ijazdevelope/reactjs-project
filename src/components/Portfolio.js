import React from "react";
import Navbar from "./Navbar";

function Portfolio() {
  return (
    <>
      <div className="w-100">
        <Navbar />
      </div>
      <div className="w-100 d-flex justify-content-between p-3">
        <h2 className="text-center">Our Portfolio</h2>
        <button type="button" className="btn btn-danger">
          Logout
        </button>
      </div>
      <div className='container-fluid d-grid gap-3 justify-content-between flex-wrap card-container'>
        <div className="card flex-grow-0 flex-shrink-1 h-25">
          <img src="https://picsum.photos/200/300?grayscale" className="card-img-top object-cover" alt="cardImgs" />
          <div className="card-body">
            <h5 className="card-title">FUJIFILM, X-S10</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">
              Go somewhere
            </button>
          </div>
        </div>

        <div className="card flex-grow-0 flex-shrink-1 h-25">
          <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top object-cover" alt="cardImgs" />
          <div className="card-body">
            <h5 className="card-title">Canon, AE-1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-success">
              Go somewhere
            </button>
          </div>
        </div>

        <div className="card flex-grow-0 flex-shrink-1 h-25">
          <img src="https://picsum.photos/id/237/200/300" className="card-img-top object-cover" alt="cardImgs" />
          <div className="card-body">
            <h5 className="card-title">Canon, EOS 6D Mark II</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">
              Go somewhere
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
