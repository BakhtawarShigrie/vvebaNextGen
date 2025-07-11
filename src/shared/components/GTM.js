'use client';

import Script from 'next/script';

const GTM_ID = 'GTM-N7TTL6CC'; 

export default function GTM() {
 return (
  <>
   {/* GTM Script in "head" (using next/script) */}
   <Script id="gtm-init" strategy="afterInteractive">
    {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
   </Script>

   {/* GTM noscript fallback in body */}
   <noscript>
    <iframe
     src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
     height="0"
     width="0"
     style={{display: 'none', visibility: 'hidden'}}
    ></iframe>
   </noscript>
  </>
 );
}
