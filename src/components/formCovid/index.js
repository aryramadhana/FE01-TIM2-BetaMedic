// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// const FormCovid = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p className="h4 text-center mb-4">Skrinning Mandiri Covid-19</p>
//             <label htmlFor="pertanyaan1">
//               Pernah kontak dengan pasien positif Covid-19 atau pernah
//               berkunjung kenegara/daerah endemis Covid-19 dalam 14 hari terakhir
//               ?
//             </label>
//             <div className="custom-control custom-radio">
//               <input
//                 type="radio"
//                 className="custom-control-input"
//                 id="customControlValidation2"
//                 name="radio-stacked"
//                 required
//               />
//               <label
//                 className="custom-control-label"
//                 htmlFor="customControlValidation2"
//               >
//                 Ya
//               </label>
//             </div>
//             <div className="custom-control custom-radio mb-3">
//               <input
//                 type="radio"
//                 className="custom-control-input"
//                 id="customControlValidation3"
//                 name="radio-stacked"
//                 required
//               />
//               <label
//                 className="custom-control-label"
//                 htmlFor="customControlValidation3"
//               >
//                 Tidak
//               </label>
//             </div>
//             <br />

//             <label htmlFor="pertanyaan2">Apakah anda flu ?</label>
//             <input type="submit" value="Ya" />
//             <input type="submit" value="Tidak" />
//             <br />
//             <label htmlFor="pertanyaan3">Apakah anda batuk kering ?</label>
//             <input type="submit" value="Ya" />
//             <input type="submit" value="Tidak" />
//             <br />
//             <label htmlFor="pertanyaan4">
//               Apakah anda demam lebih dari 38°C ?
//             </label>
//             <input type="submit" value="Ya" />
//             <input type="submit" value="Tidak" />
//             <br />
//             <label htmlFor="pertanyaan5">Apakah anda sesak nafas ?</label>
//             <input type="submit" value="Ya" />
//             <input type="submit" value="Tidak" />
//             <br />
//             <label htmlFor="pertanyaan6">
//               Apakah anda mengalami sakit tenggorokan ?
//             </label>
//             <input type="submit" value="Ya" />
//             <input type="submit" value="Tidak" />
//             <br />
//             <div className="text-left mt-4">
//               <MDBBtn color="primary" type="submit">
//                 submit
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default FormCovid;

import React from 'react';

const FormsPage = () => {
  return (
    <>
      <form className="was-validated" noValidate>
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
            Toggle this custom radio
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
            Or toggle this other custom radio
          </label>
        </div>

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
            Toggle this custom radio
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
            Or toggle this other custom radio
          </label>
        </div>
      </form>
    </>
  );
};

export default FormsPage;
