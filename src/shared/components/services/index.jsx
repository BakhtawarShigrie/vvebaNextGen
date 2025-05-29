'use client';
import {useRouter} from 'next/navigation';
import {SERVICES} from '@/shared/constants/services';

export const ServicesArea = () => {
  const router = useRouter();
  return (
    <section className="tp-service-area pt-130">
      <div className="container">
        <div className="row">
          {Object.keys(SERVICES).map((service) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div className="tp-service-wrapper mb-130">
                  <div className="tp-service-wrapper-icon">
                    <span>
                      <i className={SERVICES[service].icon}></i>
                    </span>
                  </div>
                  <h3 className="tp-service-title">
                    <a
                      onClick={() => router.push(`/services/${service}`)}
                      href={'javascript://'}
                    >
                      {SERVICES[service].title}
                    </a>
                  </h3>
                  <p>{SERVICES[service].description}</p>
                  <a
                    className="tp-service-btn"
                    href={'javascript://'}
                    onClick={() => router.push(`/services/${service}`)}
                  >
                    Read More{' '}
                    <span>
                      <i className="fa-solid fa-circle-plus"></i>
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
          {/* <div className="col-lg-4 col-md-6">
            <div className="tp-service-wrapper mb-130">
              <div className="tp-service-wrapper-icon">
                <span>
                  <i className="flaticon-026-machine-repair"></i>
                </span>
              </div>
              <h3 className="tp-service-title">
                <a href="/service-details">Mobile Applications</a>
              </h3>
              <p>
                Creating captivating and user-friendly mobile applications that
                engage your audience and enhance your brand presence.
              </p>
              <a className="tp-service-btn" href="/service-details">
                Read More{' '}
                <span>
                  <i className="fa-solid fa-circle-plus"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tp-service-wrapper mb-130">
              <div className="tp-service-wrapper-icon">
                <span>
                  <i className="flaticon-022-open-laptop"></i>
                </span>
              </div>
              <h3 className="tp-service-title">
                <a href="/service-details">Custom Softwares</a>
              </h3>
              <p>
                Tailor-made software solutions designed to align seamlessly with
                your unique business needs and drive productivity to new
                heights.
              </p>
              <a className="tp-service-btn" href="/service-details">
                Read More{' '}
                <span>
                  <i className="fa-solid fa-circle-plus"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tp-service-wrapper mb-130">
              <div className="tp-service-wrapper-icon">
                <span>
                  <i className="flaticon-026-machine-repair"></i>
                </span>
              </div>
              <h3 className="tp-service-title">
                <a href="/service-details">APIs & Integration</a>
              </h3>
              <p>
                Unleashing the full potential of your business through expert
                guidance and strategic implementation of cutting-edge
                technologies & services.
              </p>
              <a className="tp-service-btn" href="/service-details">
                Read More{' '}
                <span>
                  <i className="fa-solid fa-circle-plus"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tp-service-wrapper mb-130">
              <div className="tp-service-wrapper-icon">
                <span>
                  <i className="flaticon-022-open-laptop"></i>
                </span>
              </div>
              <h3 className="tp-service-title">
                <a href="/service-details">SaaS Products</a>
              </h3>
              <p>
                Improve your business operations with our SaaS development
                services. Cloud-based & subscription-based model offers
                cost-efficient solutions.
              </p>
              <a className="tp-service-btn" href="/service-details">
                Read More{' '}
                <span>
                  <i className="fa-solid fa-circle-plus"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tp-service-wrapper mb-130">
              <div className="tp-service-wrapper-icon">
                <span>
                  <i className="flaticon-006-desktop-pc"></i>
                </span>
              </div>
              <h3 className="tp-service-title">
                <a href="/service-details">Trainings & Consultation</a>
              </h3>
              <p>
                Offer technical pathway for high-growth careers with job-ready
                skills needed from today’s tech professionals.
              </p>
              <a className="tp-service-btn" href="/service-details">
                Read More{' '}
                <span>
                  <i className="fa-solid fa-circle-plus"></i>
                </span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
