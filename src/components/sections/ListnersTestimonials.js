import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import tw from "twin.macro";

const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const CarouselPage = () => {
  return (
    <>
      <MDBContainer>
        <div
          class="section-heading-2 text-center wow fadeInUp"
          data-wow-delay="300ms"
        >
          <p>What we hear</p>
          <h4>TESTIMONIALS</h4>
        </div>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <Testimonial>
                  <p style={{ color: "white" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia.
                  </p>
                </Testimonial>
                <CustomerName>
                  <h7 style={{ color: "#ffffff" }}> - Chaitanya</h7>
                </CustomerName>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <Testimonial>
                  <p style={{ color: "white" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia.
                  </p>
                </Testimonial>
                <CustomerName>
                  <h6 style={{ color: "#ffffff" }}> - Chaitanya</h6>
                </CustomerName>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <Testimonial>
                  <p style={{ color: "white" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia.
                  </p>
                </Testimonial>
                <CustomerName>
                  <h6 style={{ color: "#ffffff" }}> - Chaitanya</h6>
                </CustomerName>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <br />
      <br />
      <br />
    </>
  );
};

export default CarouselPage;
