'use client';
import {PageBreadcrumb} from '@/shared/components/common/breadcrumb';
import {ServicesArea} from '@/shared/components/services';
import {SERVICES} from '@/shared/constants/services';
import {useRouter} from 'next/navigation';

export default ({params: {service}}) => {
  const router = useRouter();
  return (
    <>
      <PageBreadcrumb
        title={'Service Details'}
        paths={[
          {title: 'Home', href: '/'},
          {title: 'Services', href: '/services'},
          {title: SERVICES[service].title, href: `/services/${service}`},
        ]}
      />

      <section className="tp-service-detils-area pt-50 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-service-widget">
                <div className="tp-service-widget-item mb-115">
                  <div className="tp-service-widget-tab">
                    <ul>
                      {SERVICES[service].steps?.map((step) => (
                        <li>
                          <a href="javascript://">{step} </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="tp-service-widget-touch text-center mb-50">
                  <div className="tp-service-widget-touch-icon">
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                  </div>
                  <h3 className="tp-service-widget-title">GET TOUCH</h3>
                  <p>For fast service</p>
                  <a href="tel:0923041699991">(092) 304 16 99 991</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-service-details-wrapper">
                <div className="tp-service-details-thumb">
                  <img
                    src="/assets/img/service/service-details/img-1.jpg"
                    alt=""
                  />
                </div>
                <p>{SERVICES[service].longDescription}</p>
                <h3 className="tp-service-details-title">Service Benifits</h3>
                <br />
                <ul>
                  {SERVICES[service].benefits?.map((benefit) => {
                    return (
                      <li style={{fontWeight: 400}}>
                        <i className="fa-solid fa-check"></i>
                        <span
                          style={{fontWeight: 600, display: 'inline-block'}}
                        >
                          {benefit.title}:
                        </span>{' '}
                        {benefit.description}
                      </li>
                    );
                  })}
                </ul>
                <h3 className="tp-service-details-title">The SoftX Process</h3>
                <br />
                <div className="row tp-service-details-box mb-20">
                  <div className="tp-service-details-item col-12 col-md-6">
                    <div className="tp-service-details-content">
                      <h3 className="tp-service-details-subtitle">
                        1. Discovery Call
                      </h3>
                      <p>
                        We begin by thoroughly understanding your objectives.
                      </p>
                    </div>
                  </div>
                  <div className="tp-service-details-item col-12 col-md-6">
                    <div className="tp-service-details-content">
                      <h3 className="tp-service-details-subtitle">
                        2. Proposal
                      </h3>
                      <p>
                        We propose the infrastructure, systems, and processes to
                        achieve those goals.
                      </p>
                    </div>
                  </div>
                  <div className="tp-service-details-item col-12 col-md-6">
                    <div className="tp-service-details-content">
                      <h3 className="tp-service-details-subtitle">
                        3. Implementation and Execution
                      </h3>
                      <p>
                        We execute the project plan, which can involve building,
                        testing, deploying and supporting the software.
                      </p>
                    </div>
                  </div>
                  <div className="tp-service-details-item col-12 col-md-6">
                    <div className="tp-service-details-content">
                      <h3 className="tp-service-details-subtitle">
                        4. Evaluation and Maintenance
                      </h3>
                      <p>
                        We assess the results, incorporate feedback and
                        continually improve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tp-service-details-wrapper-2">
                <h3 className="tp-service-details-subtitle2">
                  Ready to accelerate your software development?
                </h3>
                <p className="mb-50">
                  Take the first step towards a brighter future and supercharge
                  your business with cutting-edge technologies, expert guidance,
                  and unparalleled support.
                </p>
                <center>
                  <a
                    onClick={() => router.push('/contact')}
                    className="btn btn-primary pt-30 pb-30 pr-30 pl-30"
                  >
                    {' '}
                    <i className="fa fa-phone"></i> Schedule Free 30 Mins
                    Strategy Call
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
