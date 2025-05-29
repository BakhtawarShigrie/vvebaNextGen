'use client';
import {PageBreadcrumb} from '@/shared/components/common/breadcrumb';
import {TRAININGS} from '@/shared/constants/trainings';
import {useRouter} from 'next/navigation';

export default ({params: {training}}) => {
  const router = useRouter();
  return (
    <>
      <PageBreadcrumb
        title={'Program Details'}
        paths={[
          {title: 'Home'},
          {title: TRAININGS[training].title, href: `/trainings/${training}`},
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
                      <h5 className="pb-5">
                        <b>Duration & Schedule</b>
                      </h5>
                      <li>
                        <a>
                          <b>Duration</b> {TRAININGS[training].length}
                        </a>
                      </li>
                      <li>
                        <a>
                          <b>Schedule</b> 3 Days/Week
                        </a>
                      </li>
                      <h5 className=" pb-15">
                        <b>Fees & Finance</b>
                      </h5>
                      {Object.keys(TRAININGS[training].packages).map((pkg) => (
                        <li className="bg-white rounded pl-20 pt-15 pb-15">
                          <h6>{TRAININGS[training].packages[pkg].title}</h6>
                          <span>
                            <b>
                              {TRAININGS[training].packages[pkg].price.pkr.code}
                            </b>{' '}
                            {TRAININGS[training].packages[pkg].price.pkr.amount}
                          </span>
                          <br />
                          <b>Offerings</b> <br />
                          <div>
                            {TRAININGS[training].packages[pkg].offerings.map(
                              (offering, index) => {
                                return (
                                  <>
                                    {offering}
                                    <span>
                                      {TRAININGS[training].packages[pkg]
                                        .offerings.length -
                                        1 ==
                                      index
                                        ? '.'
                                        : ', '}
                                    </span>
                                  </>
                                );
                              }
                            )}
                          </div>
                        </li>
                      ))}
                      <h5 className="pb-15">
                        <b>Discounts</b>
                      </h5>
                      {TRAININGS[training].discounts.map((discount) => (
                        <li>
                          <a>
                            <b>{discount.audience}</b> {discount.percentage}%
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-20">
                      <span style={{fontSize: 16}}>
                        {TRAININGS[training].notes.scholarships}
                      </span>
                    </div>
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
              <div className="row tp-service-details-box mb-20">
                <h3 className="tp-service-details-subtitle">Program Modules</h3>
                <br />
                <br />
                {Object.keys(TRAININGS[training].structure).map(
                  (module, index) => {
                    return (
                      <>
                        <div className="pb-20">
                          <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <h5>
                              {index + 1}.{' '}
                              {TRAININGS[training].structure[module].title}
                            </h5>
                            <h6>
                              {TRAININGS[training].structure[module].duration}
                            </h6>
                          </div>
                          <h6>Objectives:</h6>
                          <span>
                            {TRAININGS[training].structure[module].objective}
                          </span>
                        </div>
                        <hr />
                      </>
                    );
                  }
                )}
              </div>
              <div className="row tp-service-details-box mb-20">
                <h3 className="tp-service-details-subtitle">Enrollment Form</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label>First Name</label>
                      <input className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label>Last Name</label>
                      <input className="form-control" />
                    </div>
                    <div className="col-md-6 pt-20">
                      <label>Email</label>
                      <input className="form-control" />
                    </div>
                    <div className="col-md-6 pt-20">
                      <label>Phone No.</label>
                      <input className="form-control" />
                    </div>
                  </div>
                  <br />
                  <div>
                    <button className="btn btn-primary btn-sm">
                      Get Program Outline
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
