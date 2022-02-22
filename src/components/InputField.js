import React from "react";

const InputField = () => {
  return (
    <>
      {/* <div className="form-floating"> */}
      <input
        name='firstName'
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      {/* <label for="floatingInput">First Name</label> */}
      {/* </div> */}
    </>
  );
};

export default InputField;
