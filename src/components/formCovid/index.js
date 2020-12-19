/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard } from 'mdbreact';
import { Link } from 'react-router-dom';

const FormCovid = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <form className="was-validated" noValidate>
              <p className="h4 text-center mb-4">Skrinning Mandiri Covid-19</p>
              <label htmlFor="pertanyaan1">
                Pernah kontak dengan pasien positif Covid-19 atau pernah
                berkunjung kenegara/daerah endemis Covid-19 dalam 14 hari
                terakhir ?
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation2"
                  name="radio-stacked"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation2"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation3"
                  name="radio-stacked"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation3"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan2">Apakah anda flu ?</label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation4"
                  name="radio-stacked2"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation4"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation5"
                  name="radio-stacked2"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation5"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan3">Apakah anda batuk kering ?</label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation6"
                  name="radio-stacked3"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation6"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation7"
                  name="radio-stacked3"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation7"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan4">
                Apakah anda demam lebih dari 38°C ?
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation8"
                  name="radio-stacked4"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation8"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation9"
                  name="radio-stacked4"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation9"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan5">Apakah anda sesak nafas ?</label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation10"
                  name="radio-stacked5"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation10"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation11"
                  name="radio-stacked5"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation11"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <label htmlFor="pertanyaan6">
                Apakah anda mengalami sakit tenggorokan ?
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation12"
                  name="radio-stacked6"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation12"
                >
                  YA
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation13"
                  name="radio-stacked6"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation13"
                >
                  TIDAK
                </label>
              </div>
              <br />
              <div className="text-left mt-4">
                <Link to="/SkrinningSolution">
                  <MDBBtn color="primary" type="submit">
                    submit
                  </MDBBtn>
                </Link>
              </div>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormCovid;
