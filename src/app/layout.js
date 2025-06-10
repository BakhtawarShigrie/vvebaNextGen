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
import GoogleAnalytics from '@/shared/components/GoogleAnalytics';
import ChatlingWidget from '@/shared/components/ChatlingWidget';

/*
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FPK0K5H36S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FPK0K5H36S');
</script>

*/
const inter = Inter({subsets: ['latin']});

export const metadata = {
 title: 'vveba',
 description: "Crafting Tomorrow's Solutions Today.",
};

export default function RootLayout({children}) {
 return (
  <html lang="en">
   <body className={inter.className}>
    {/* AuthProvider */}
    <AuthProvider>
     <Header />
     {children}
     <Footer />
    </AuthProvider>
    <GoogleAnalytics />
    <ChatlingWidget />
   </body>
   <Script async defer src="/assets/js/vendor/jquery.js" />
   <Script async defer src="/assets/js/vendor/waypoints.js" />
   <Script async defer src="/assets/js/bootstrap-bundle.js" />
   <Script async defer src="/assets/js/meanmenu.js" />
   <Script async defer src="/assets/js/swiper-bundle.js" />
   <Script async defer src="/assets/js/slick.js" />
   <Script async defer src="/assets/js/range-slider.js" />
   <Script async defer src="/assets/js/magnific-popup.js" />
   <Script async defer src="/assets/js/nice-select.js" />
   <Script async defer src="/assets/js/purecounter.js" />
   <Script async defer src="/assets/js/countdown.js" />
   <Script async defer src="/assets/js/wow.js" />
   <Script async defer src="/assets/js/isotope-pkgd.js" />
   <Script async defer src="/assets/js/imagesloaded-pkgd.js" />
   <Script async defer src="/assets/js/ajax-form.js" />
   <Script async defer src="/assets/js/main.js" />
  </html>
 );
}
