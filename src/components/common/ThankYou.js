import React from "react";
import Container from "react-bootstrap/Container";

const ThankYou = () => {
  return (
    <div>
      <div>
        <Container>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-sm-6 mt-5">
              <div class="alert alert-success" role="alert">
                <h4 class="alert-heading text-center">Well done!</h4>
                <h1 className="text-center">
                  <i class="bi bi-check-circle"></i>
                </h1>
                <hr />
                <p class="mb-0">
                  Thank you for trusting us to find you a new property. We will
                  contact you shortly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ThankYou;
