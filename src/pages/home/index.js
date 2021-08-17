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
  MDBCarouselCaption,
} from 'mdbreact';
import { CoronaNews } from '../../components';
import './style.css';
import { isUserAuthenticated } from '../../utils/cookie';
import poster from './poster1.png';
import poster2 from './poster2.png';
import poster3 from './poster3.png';

const Home = () => {
  return (
    <div>
      {isUserAuthenticated() ? (
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={true}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img className="d-block w-100" src={poster} alt="First slide" />
              </MDBView>
              <MDBCarouselCaption className="h2-responsive pt-3 ml-5 font-bold">
                <p>Selamat Datang di Beta Medic</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={poster3}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={poster2}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      ) : (
        <div className="page-home">
          <MDBCol className="text-left py-5 px-4">
            <MDBCol className="py-5">
              <MDBCardTitle className="h2-responsive pt-3 ml-5 font-weight-bolder">
                Selamat Datang di Beta Medic
              </MDBCardTitle>
              <p className="mx-5 mb-5">We Are Here For Your Care</p>
              <Link to="/register">
                <MDBBtn color="primary" className="mb-5 ml-5">
                  <MDBIcon icon="user" className="mr-2" />
                  Pendaftaran Akun
                </MDBBtn>
              </Link>
              <br />
              <br />
              <br />
            </MDBCol>
          </MDBCol>
        </div>
      )}
      <br />
      <CoronaNews />
    </div>
  );
};

export default Home;
