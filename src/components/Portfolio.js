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
          <img src="https://images.unsplash.com/photo-1643559259659-0a6da64de886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top object-cover" alt="cardImgs" />
          <div className="card-body">
            <h5 className="card-title">FUJIFILM, X-S10</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card flex-grow-0 flex-shrink-1 h-25">
          <img src="https://images.unsplash.com/photo-1643474810817-a16085336cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top object-cover" alt="cardImgs" />
          <div className="card-body">
            <h5 className="card-title">Canon, AE-1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card flex-grow-0 flex-shrink-1 h-25">
          <img src="https://images.unsplash.com/photo-1643471555346-11cf6532a5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top object-cover" alt="cardImgs" />
          <div className="card-body">
            <h5 className="card-title">Canon, EOS 6D Mark II</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
