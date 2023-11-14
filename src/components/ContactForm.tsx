import Button from './Layout/BtnComponent';

export default function ContactForm() {
  return (
    <>
      <div className="contact-form__container">
        <form
          action="https://formspree.io/f/mleanwqo"
          method="POST"
          id="contact-form"
        >
          {/* <fieldset>
            <div className="fieldset__wrapper">
              <label className="form-control">
                <input type="radio" name="contact-form__radio" />I just like to
                say Hi!
              </label>

              <label className="form-control">
                <input type="radio" name="contact-form__radio" />I want to talk
                about a project
              </label>
            </div>
          </fieldset> */}

          {/*************************************************************************** START CONTACT FORM*/}
          <div className="contact-form">
            <div className="form-group__flex">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=": Name*"
                required
              />
              <input
                type="text"
                id="email"
                name="email"
                placeholder=": Email*"
                required
              />
            </div>

            <div className="form-group__flex">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder=": Subject*"
                required
              />
            </div>

            {/* <div className="form-group__flex">
              <input
                type="text"
                id="company"
                name="company"
                placeholder=": Company"
              />
              <input
                type="text"
                id="country"
                name="country"
                placeholder=": Country"
              />
            </div> */}

            <div className="form-group__message">
              <textarea
                name="message"
                id="message"
                // cols="30"
                // rows="10"
                placeholder=": Message*"
              ></textarea>
            </div>
          </div>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </form>
        <div id="send-message-status"></div>
      </div>
    </>
  );
}
