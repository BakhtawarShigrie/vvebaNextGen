export const HomeProcessArea = () => {
  return (
    <section
      className="tp-home-4-process-area pt-120 p-relative pb-115"
      data-background="/assets/img/process/home-4/process-bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12 order-md-2 order-xl-1">
            <div className="container">
              <div
                className="row wow fadeInDown"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="col-xl-12">
                  <div className="tp-home-4-process-title">
                    <span className="tp-section-v_2-title-pre">
                      How it works
                    </span>
                    <h3 className="tp-section-title">
                      We have Some Basic <br />
                      Steps to Process
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-process-steps-area pt-30">
              <div className="container">
                <div
                  className="row wow fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="col-xxl-12">
                    <div className="tp-process-steps d-flex justify-content-start pb-40">
                      <div className="tp-process-icon">
                        <img
                          src="/assets/1.svg"
                          style={{ width: "60px", height: "60px" }}
                          alt=""
                        />
                      </div>
                      <div className="tp-process-text-area">
                        <h2>Send us message</h2>
                        <p>
                          {' '}
                          We are wildly passionate about purpose and <br />
                          business research need{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row wow fadeInUp"
                  data-wow-duration=".6s"
                  data-wow-delay=".6s"
                >
                  <div className="col-xxl-12">
                    <div className="tp-process-steps d-flex justify-content-start pb-40">
                      <div className="tp-process-icon">
                        <img
                          src="/assets/2.svg"
                          style={{ width: "60px", height: "60px" }}
                          alt=""
                        />
                      </div>
                      <div className="tp-process-text-area">
                        <h2>Discuss with us</h2>
                        <p>
                          When we receive your message support team <br /> will
                          check the document
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row wow fadeInUp"
                  data-wow-duration=".3s"
                  data-wow-delay=".9s"
                >
                  <div className="col-xxl-12">
                    <div className="tp-process-steps d-flex justify-content-start pb-40">
                      <div className="tp-process-icon">
                        <img
                          src="/assets/3.svg"
                          style={{ width: "60px", height: "60px" }}
                          alt=""
                        />
                      </div>
                      <div className="tp-process-text-area">
                        <h2>Make a payment</h2>
                        <p>
                          Payment has never been so easy. We use reliable <br />{' '}
                          and secure payment methods
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 order-md-1 order-xl-2">
            <div
              className="tp-home-4-process-thumb-area wow fadeInDown"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-home-4-process-thumb p-relative">
                <img
                  className="process-man"
                  src="/assets/img/process/home-4/process-man.png"
                  alt=""
                />
                <img
                  className="process-dotted-shape"
                  src="/assets/img/process/home-4/process-dots.png"
                  alt=""
                />
                <img
                  className="process-search-shape"
                  src="/assets/img/process/home-4/process-search.png"
                  alt=""
                />
                <img
                  className="process-chart-shape"
                  src="/assets/img/process/home-4/process-chart.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
