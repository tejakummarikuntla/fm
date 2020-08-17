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
        </div>
        <MDBCarousel
          activeItem={1}
          length={4}
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
                    The work you do here is so inspirational to me.. the way of
                    speaking and providing valuable information to others is
                    fascinating.. personally I liked "on hiking your own hike" ,
                    that mostly meant my life ..on how most of the people here
                    running towards some profession that we don't want to do ..
                    I love to art works but I coudnt able to take up a career on
                    that.. listening to your podcast made a change in my
                    thinking towards a career towards my interest .. I wish your
                    work grows with lots of success.
                  </p>
                </Testimonial>
                <CustomerName>
                  <h6 style={{ color: "#ffffff" }}> - Pragarthi Muthukumar</h6>
                </CustomerName>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <Testimonial>
                  <p style={{ color: "white" }}>
                    Teja is an excellent speaker and always a joy to listen. He
                    has insightful perspectives and brings in a catalog of
                    interesting conversations. A perfect mix of - Technology,
                    Humour and Experience. The points raised over each episode
                    are highly succinct. The podcast has ample of real life
                    examples, resources and learning. Eagerly looking forward to
                    the next ones. DEFINITELY worth a listen!
                  </p>
                </Testimonial>
                <CustomerName>
                  <h6 style={{ color: "#ffffff" }}> - Jyothirmai Thimmaraju</h6>
                </CustomerName>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <Testimonial>
                  <p style={{ color: "white" }}>
                    A Worthwhile Listen !! Greatly enjoyed Teja's perspective of
                    exploring the Tech. A top-shelf podcast with clear and
                    concise matter. The way you deal with guests is
                    impressive.Thank you for all your efforts and for providing
                    good content.
                  </p>
                </Testimonial>
                <CustomerName>
                  <h6 style={{ color: "#ffffff" }}> - Sai Sumanth</h6>
                </CustomerName>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <Testimonial>
                  <p style={{ color: "white" }}>
                    This podcast is helping out people who want to learn or know
                    about technical domain skills which are really helpfull in
                    this competetive world to acheive something. Unicast episode
                    was really impactfull hope will get more. “Every time I see
                    a new episode I learn something new. Excellent work on the
                    interview questions!.
                  </p>
                </Testimonial>
                <CustomerName>
                  <h6 style={{ color: "#ffffff" }}> - Anonymous</h6>
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
