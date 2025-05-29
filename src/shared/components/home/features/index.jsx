export const HomeFeatureArea = () => {
  return (
    <section class="tp-features-4-area mt-50">
      <div
        class="tp-about-title-wrapper text-center pb-30 wow fadeInDown"
        data-wow-duration="1s"
        data-wow-delay=".3s"
      >
        <span class="tp-section-v_2-title-pre">features</span>
        <h3 class="tp-section-title">Our Exciting Features</h3>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="feature-4-item-1 pt-70 pb-70 pl-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div class="feature-4-icon pb-30">
                <img
                  src="/assets/img/feature/home-4/feature-4-icon-1.png"
                  alt=""
                />
              </div>
              <div class="tp-features-4-content">
                <h4 class="feature-5-content-title pb-30">
                  <a href="/services">
                    Dedicated technical <br /> support team
                  </a>
                </h4>
                <div class="tp-features-btn-1">
                  <a href="/services">
                    {' '}
                    <i class="fas fa-angle-double-right"></i>{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="feature-4-item-2 pt-70 pb-70 pl-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div class="feature-4-icon pb-30">
                <img
                  src="/assets/img/feature/home-4/feature-4-icon-2.png"
                  alt=""
                />
              </div>
              <div class="tp-features-4-content">
                <h4 class="feature-5-content-title pb-30">
                  <a href="/services">
                    Business planning <br /> management
                  </a>
                </h4>
                <div class="tp-features-btn-2">
                  <a href="/services">
                    {' '}
                    <i class="fas fa-angle-double-right"></i>{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div
              class="feature-4-item-3 pt-70 pb-70 pl-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".7s"
            >
              <div class="feature-4-icon pb-30">
                <img
                  src="/assets/img/feature/home-4/feature-4-icon-3.png"
                  alt=""
                />
              </div>
              <div class="tp-features-4-content">
                <h4 class="feature-5-content-title pb-30">
                  <a href="/services">
                    Security specialist & <br /> consultation
                  </a>
                </h4>
                <div class="tp-features-btn-3">
                  <a href="/services">
                    {' '}
                    <i class="fas fa-angle-double-right"></i>{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
