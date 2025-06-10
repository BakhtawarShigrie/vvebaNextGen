'use client';

import {useEffect} from 'react';

const ChatlingWidget = () => {
 useEffect(() => {
  if (typeof window !== 'undefined') {
   if (!document.getElementById('chtl-script')) {
    window.chtlConfig = {chatbotId: '7215581864'};

    const script = document.createElement('script');
    script.id = 'chtl-script';
    script.src = 'https://chatling.ai/js/embed.js';
    script.async = true;
    script.setAttribute('data-id', '7215581864');
    script.type = 'text/javascript';

    script.onload = () => {
     console.log(
      '%c✅ Chatling script loaded successfully!',
      'color: green; font-weight: bold;'
     );
    };

    script.onerror = () => {
     console.error('❌ Failed to load Chatling script.');
    };

    document.body.appendChild(script);
   } else {
    console.log('ℹ️ Chatling script already loaded.');
   }
  }
 }, []);

 return null;
};

export default ChatlingWidget;
