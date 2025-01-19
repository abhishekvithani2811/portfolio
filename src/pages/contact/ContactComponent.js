import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio.js";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;

export default function Contact(props) {
  const theme = props.theme;

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            {/* <div className="contact-heading-img-div">
              <img
                className="profile-pic rounded-full"
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div> */}

            <div className="contact-heading-text-div mt-2">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle mt-3"
                style={{ color: theme.secondaryText }}
              >
                🚀Crafting code and 🕸️chasing dreams. Turning coffee into websites🧑‍💻. Let's build something cool together! 😎💻"
                {/* {ContactData["description"]} */}
              </p>
              <p className="my-3 font-medium text-xl" style={{ color: "rgb(227, 64, 95)" }}>
                Can we connect and create something great together ❓
              </p>
              <p className="my-3 font-medium text-xl" style={{ color: "rgb(227, 64, 95)" }}>
                I look forward to creating amazing experiences together ❗
              </p>
              <SocialMedia page="contact" />

            </div>
            <div class="min-h-screen  py-6 flex flex-col justify-center sm:py-1">
              <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-[#e196ac] to-[#eb386e] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div class="text-white relative px-4 py-10 bg-[#de3568] shadow-lg sm:rounded-3xl sm:p-10">

                  <div class="text-center pb-6">
                    <h1 class="text-3xl">let's to talk!</h1>
                  </div>

                  <form action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="9dacbd0b-0ea6-46f9-bc35-cc225d164acc" />
                    <input
                      class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Name" name="name" />

                    <input
                      class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email" placeholder="Email" name="email" />

                    <input
                      class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Subject" name="_subject" />

                    <textarea
                      class="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Type your message here..." name="message" style={{ height: "121px" }}></textarea>

                    <div class="flex justify-between">
                      <input
                        class="shadow bg-[#1d1d1d] hover:bg-white text-white hover:text-[#1d1d1d] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Send ➤" />

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}
