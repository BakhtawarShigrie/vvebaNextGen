import './css/bootstrap.css';
import './css/animate.css';
import './css/swiper-bundle.css';
import './css/slick.css';
import './css/magnific-popup.css';
import './css/font-awesome-pro.css';
import './css/flaticon.css';
import './css/spacing.css';
import './css/main.css';
import {Inter} from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import {Header} from '@/shared/components/layout/header';
import {Footer} from '@/shared/components/layout/footer';
import {AuthProvider} from './context/AuthContext';
import ChatlingWidget from '@/shared/components/ChatlingWidget';
import GTM from '@/shared/components/GTM';

const inter = Inter({subsets: ['latin']});

export const metadata = {
 title: 'vveba',
 description: "Crafting Tomorrow's Solutions Today.",
};

export default function RootLayout({children}) {
 return (
  <html lang="en">
    <head>
       <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9H1Q63GHRE"
          strategy="lazyOnload"
        />
    </head>
   <body className={inter.className}>
    {/* AuthProvider */}
    {/* <GTM /> */}
    <AuthProvider>
     <Header />
     {children}
     <Footer />
    </AuthProvider>
    <ChatlingWidget />
   </body>
   <Script async defer src="/assets/js/vendor/jquery.js" />
   <Script async defer src="/assets/js/swiper-bundle.js" />
   <Script async defer src="/assets/js/slick.js" />
    <Script async defer src="/assets/js/bootstrap-bundle.js" />
   <Script async defer src="/assets/js/magnific-popup.js" />
   <Script async defer src="/assets/js/nice-select.js" />
   <Script async defer src="/assets/js/wow.js" />
   <Script async defer src="/assets/js/imagesloaded-pkgd.js" />
   <Script async defer src="/assets/js/main.js" />

  </html>
 );
}
