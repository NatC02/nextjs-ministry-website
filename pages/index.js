import PropTypes from "prop-types";
import Image from "next/image";

import CardButton from "../components/CardButton";
import CardInfo from "../components/CardInfo";
import CardImage from "../components/CardImage";

export default function Home() {

  // make container object of string that contains some test text

  const CTA = {
    title: "What is our Mission?",
    description: "This is a bible based and Christ centric ministry that teaches the word of God and the deeds of the apostoles preparing ministerial workers in leadership graduating officials federal police M. INT certified registered with our organization certified and registered with the 501(c)3 by the State Federal NJ with porte and atenance device of security for all the churches of God in general winning the nations for Christ.",
    action: "Find out what to expect",
  };
  
  const Info = {
    title: "Times & Platforms",
    description: "We are working from the home office teaching the public and the community via online to prevent the Covid 19 spread until new announcement to open to the public in general in physical presence.",
  };
  
  const Facebook = {
    image: "facebook.svg",
    alt: "Facebook logo",
    title: "Our community",
    description: "Learn more about our ministry and to join our community to spread the word of God and the message of the apostoles.",
    buttonName: "Learn More",
  };
  
  const Youtube = {
    image: "youtube.svg",
    alt: "Youtube logo",
    title: "Our sermons",
    description: "Learn more about our ministry and to join our community to spread the word of God and the message of the apostoles.",
    buttonName: "Learn More",
  };

  return (
    <>
      <main>
        
        <section className="frame-index">
          
          <img
            src={"/lion.jpg"}
            alt="A photo of a lion with it's paws touching green grass"
          />

          <header class="imposter-index">
            {/* <center-l> */}
              <cover-l>
                {/* apply an element that stretches the h1 to occupy the full viewport width */}
                <cluster-l>

                <h1 role="title">
                  Ministry NJ Federal Church of God John 17:10 INC
                </h1>

                </cluster-l>
              </cover-l>
            {/* </center-l> */}
          </header>

        </section>

        <center-l>
          <CardInfo title={Info.title} description={Info.description}/>
          <CardButton title={CTA.title} description={CTA.description} buttonName={CTA.action}/>
        </center-l>

        <section className="grid">
          <CardImage image={Facebook.image} alr={Facebook.alt} title={Facebook.title} description={Facebook.description} buttonName={Facebook.buttonName} />
          <CardImage image={Youtube.image} alr={Youtube.alt} title={Youtube.title} description={Youtube.description} buttonName={Youtube.buttonName} />
        </section>

      </main>
    </>
  );
}
