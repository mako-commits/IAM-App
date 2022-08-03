import React from "react";

import classes from "./PasswordRestRedirect.module.css";
const PasswordResetRedirect = () => {
  return (
    <section className={classes.redirectPage}>
      <div className={classes.redirectMessage}>
        <p>
          <b>
            An email has been sent to your email with a link to reset your
            password.
          </b>
        </p>
        <em>Incase you can't find the email kindly check your spam folder</em>
      </div>
    </section>
  );
};

export default PasswordResetRedirect;
