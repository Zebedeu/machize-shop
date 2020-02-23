import React from 'react';

export default function Country(){

    return(
        <React.Fragment>
            <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100" id="country" required="">
              <option defaultValue="">Choose...</option>
              <option>United States</option>
              <option>Angolan</option>
              <option>Brazil</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100" id="state" required="">
              <option defaultValue="">Choose...</option>
              <option>California</option>
              <option>Luanda</option>
              <option>São Paulo</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          
        </React.Fragment>
    )
}