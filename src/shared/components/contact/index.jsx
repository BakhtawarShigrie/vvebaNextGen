"use client"
import Image from "next/image";
import { useState } from "react";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false); // New loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const res = await fetch('/api/sendmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phonenumber, message }),
            });

            const data = await res.json();
            console.log("API Response:", data);
            if (data.success) {
                setStatus('Email sent successfully!');
                setEmailSent(true);
                setName('');
                setEmail('');
                setPhoneNumber('');
                setMessage('');
            } else {
                setStatus(data.message || 'Failed to send email.');
            }
        } catch (err) {
            console.error('Error sending email:', err);
            setStatus('An error occurred. Please try again.');
        }
        setLoading(false); // Stop loading
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSendMore = () => {
        setEmailSent(false);
        setStatus('');
    };

    return (
     <section>
      <div className="tp-hero-4-title-wrapper mt-80">
       <h2 className="container fw-bold fs-1 text-center">
        We’d love to hear from you!
       </h2>
      </div>
      <br />
      <center>
       <p className="pb-40 fs-5 tp-home-4-hero-text">
        Please leave your message using the form below. We aim to get in touch
        within 24 hours.
       </p>
      </center>
      {loading ? (
       <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
         <span className="visually-hidden">Sending email...</span>
        </div>
       </div>
      ) : emailSent ? (
       <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
         className="card shadow-lg p-4 rounded bg-white text-center"
         style={{maxWidth: '500px'}}
        >
         <h3 className="fw-bold mb-4">Thank you!</h3>
         <p>{status}</p>
         <button onClick={handleSendMore} className="btn btn-secondary m-2">
          Send Another Message
         </button>
         <button onClick={scrollToTop} className="btn btn-primary m-2">
          Back to Top
         </button>
        </div>
       </div>
      ) : (
       <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
         className="row w-100 shadow-lg p-4 rounded bg-white"
         style={{maxWidth: '900px'}}
        >
         <div className="col-md-6 d-flex flex-column justify-content-around">
          <div className="mt-2">
           <h3 className="fw-bold fs-4 mb-2">How can we help?</h3>
           <h4 className="fs-6">
            Whether you already know what you need or you still need some
            brainstorming, we’re happy to talk! Our initial consultation is free
            of charge, with no strings attached.
           </h4>
          </div>
          <div>
           <p className="d-flex gap-3 align-items-center">
            <Image
             src="/assets/img/contact/confirmation.svg"
             alt="Phone Icon"
             width={50}
             height={50}
             className="mt-3"
            />
            <div>+92319 7167 168</div>
           </p>
           <p className="d-flex gap-3 align-items-center">
            <Image
             src="/assets/img/contact/icons8-mailbox.svg"
             alt="Email Icon"
             width={50}
             height={50}
             className="mt-3"
            />
            Support@vveba.com
           </p>
           <p className="d-flex gap-3 align-items-center">
            <Image
             src="/assets/img/contact/message.svg"
             alt="Address Icon"
             width={50}
             height={50}
             className="mt-3"
            />
            Office # 20, Zone/C, 2 Floor, Innovista Technology Zone, DHA
            Business Hub, DHA Phase 8, Lahore.
           </p>
          </div>
         </div>

         <div className="col-md-6">
          <h3 className="fw-bold mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit}>
           <div className="mb-3">
            <label htmlFor="name" className="form-label">
             Name
            </label>
            <input
             type="text"
             id="name"
             className="form-control"
             value={name}
             onChange={(e) => setName(e.target.value)}
             required
            />
           </div>
           <div className="mb-3">
            <label htmlFor="email" className="form-label">
             Email
            </label>
            <input
             type="email"
             id="email"
             className="form-control"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
            />
           </div>
           <div className="mb-3">
            <label htmlFor="number" className="form-label">
             Phone Number
            </label>
            <input
             type="text"
             id="number"
             className="form-control"
             value={phonenumber}
             onChange={(e) => setPhoneNumber(e.target.value)}
             required
            />
           </div>
           <div className="mb-3">
            <label htmlFor="message" className="form-label">
             Message
            </label>
            <textarea
             id="message"
             rows="3"
             className="form-control"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             required
            ></textarea>
           </div>

           <button type="submit" className="btn btn-primary">
            Submit
           </button>
          </form>
          <br />
          {status && <div className="text-center">{status}</div>}
         </div>
        </div>
       </div>
      )}
     </section>
    );
};
