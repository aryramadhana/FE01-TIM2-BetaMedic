/* eslint-disable react/jsx-boolean-value */
// import React from 'react';
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBBtn,
// } from 'mdbreact';

// const MultiCarouselPage = () => {
//   return (
//     <MDBContainer>
//       <MDBCarousel
//         activeItem={1}
//         length={3}
//         slide={true}
//         showControls={true}
//         showIndicators={true}
//         // slide
//         // showControls
//         // showIndicators
//         multiItem
//       >
//         <MDBCarouselInner>
//           <MDBRow>
//             <MDBCarouselItem itemId="1">
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="2">
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="3">
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//               <MDBCol md="4">
//                 <MDBCard className="mb-2">
//                   <MDBCardImage
//                     className="img-fluid"
//                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
//                   />
//                   <MDBCardBody>
//                     <MDBCardTitle>MDBCard title</MDBCardTitle>
//                     <MDBCardText>
//                       Some quick example text to build on the card title and
//                       make up the bulk of the cards content.
//                     </MDBCardText>
//                     <MDBBtn color="primary">MDBBtn</MDBBtn>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBCarouselItem>
//           </MDBRow>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// };

// export default MultiCarouselPage;

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
} from 'mdbreact';

const CoronaNews = () => {
  return (
    <MDBContainer>
      <MDBRow className="mb-4">
        <MDBCol sm="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6" className="mb-4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Special title treatment</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CoronaNews;
