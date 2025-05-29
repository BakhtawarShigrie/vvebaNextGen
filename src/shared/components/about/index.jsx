import Image from "next/image";
import { teamMembers } from '@/shared/constants/teamdata';

export const About = () => {
    return (
        <section>
            <center>
                <p className="pt-100 pb-100 tp-home-4-hero-text pl-10 pr-10">
                    {' '}
                    Know about Desol Int. A place where we grow business for our clients; by following creative ideas, perusing high-end development skills and offering solutions that create value and reliability to develop competitive advantages for the client all over the globe market!{' '}
                </p>
            </center>
            <div class="container text-center shadow p-3 mb-100 bg-white rounded-4">
                <div class="row  ">
                    <div class="col ">
                        <div class="fw-bold fs-3 pb-10">
                            2K+
                        </div>
                        <div>
                            Businesses Powered
                        </div>
                    </div>
                    <div class="col ">
                        <div class="fw-bold fs-3 pb-10">
                            99%
                        </div>
                        <div>
                            Positive Rating
                        </div>
                    </div>
                    <div class="col ">
                        <div class="fw-bold fs-3 pb-10">
                            170K
                        </div>
                        <div>
                            Hours Of Work
                        </div>
                    </div>
                </div>
            </div>
            {/* Profiles Section */}
            <div class="container mt-4 mb-4" >
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 d-flex justify-content-center">
                        <Image
                            src="/assets/img/service/service-details/img-1.jpg"
                            alt="Profile Image"
                            width={600}
                            height={500}
                            className=" p-3"
                        />
                    </div>
                    <div class="col-12 col-md-6">
                        <h2>Syed Abdullah</h2>
                        <p>Sarah Ahmad, a renowned Pakistani young entrepreneur – founder at Desol Int. and many other sister companies, currently running a software company in Lahore, Pakistan. Sarah was awarded as “Hero Microsoft Student Partner” in June 2016. She was one of the two people to receive this award in the Middle East & Africa region and the first ever girl from Pakistan to receive the honor. She was also entitled with Techjuice 25 under 25 emerging talent in 2017. Recently she was awarded the Laurels of Honors award by the Lahore Women Chamber of Commerce. Sarah is involved in many other ventures; she is a tech trainer and has made her presence as a Guest speaker in many organizations.</p>
                    </div>
                </div>
            </div>
            <center>
                <div class="fw-bold fs-4 pb-40 pt-60 ">
                    <h2>
                        Team SoftX.
                    </h2>
                </div>
            </center>
            {/* data */}
            <div className="container py-5">
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-md-4 col-lg-3 mb-70">
                            <div className=" text-center align-items-center">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className=""
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                    <p className="card-text">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
