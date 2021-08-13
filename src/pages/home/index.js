/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBJumbotron,
  MDBBtn,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from 'mdbreact';
import { CoronaNews } from '../../components';
import './style.css';
import { isUserAuthenticated } from '../../utils/cookie';

const JumbotronPage = () => {
  return (
    <div>
      {isUserAuthenticated() ? (
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      ) : (
        <MDBJumbotron style={{ padding: 0 }} className="page-home">
          <MDBCol className="text-black text-left py-5 px-4">
            <MDBCol className="py-5">
              <MDBCardTitle className="h1-responsive pt-3 ml-5 font-bold">
                Beta Medic
              </MDBCardTitle>
              <p className="mx-5 mb-5">We Are Here For Your Care</p>
              <Link to="/register">
                <MDBBtn color="primary" className="mb-5 ml-5">
                  <MDBIcon icon="user" className="mr-2" />
                  Pendaftaran Akun
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBCol>
        </MDBJumbotron>
      )}
      <CoronaNews />
    </div>
  );
};

export default JumbotronPage;
