import React from "react";
const Contact = () => {
  return (
    <React.Fragment>
      <div>
        <article class="contact__container" id="contact">
          <div class="contact__title">
            <h2>Contact Me :</h2>
          </div>

          <form action="#">
            <div class="content__form">
              <fieldset class="input__fields">
                <input type="text" class="input" placeholder="Name" />
                <input
                  type="text"
                  class="input"
                  placeholder="Email Address"
                  required
                />
                <input type="text" class="input" placeholder="Phone" />
                <input
                  type="text"
                  class="input"
                  placeholder="Your Message :"
                  id="message_input"
                ></input>
                <input
                  type="submit"
                  class="button button__submit"
                  value="Submit"
                  id="button_hover"
                />
              </fieldset>
            </div>
          </form>
        </article>
      </div>
      ;
    </React.Fragment>
  );
};
export default Contact;
