"use client"
import Script from 'next/script';

const GoogleAnalytics = () => (
 <>
  <Script
   strategy="afterInteractive"
   src={`https://www.googletagmanager.com/gtag/js?id=G-FPK0K5H36S`}
  />
  <Script
   id="google-analytics"
   strategy="afterInteractive"
   dangerouslySetInnerHTML={{
    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FPK0K5H36S');
        `,
   }}
  />
 </>
);

export default GoogleAnalytics;
