import React, { useEffect, useRef } from 'react';

const PhoneEmailAuth = ({ login }) => {
  const signInButtonRef = useRef(null);
  const scriptId = 'phone-email-auth-script';

  useEffect(() => {
    // Function to handle the authentication response
    const handleAuthResponse = (userObj) => {
      const user_json_url = userObj.user_json_url;
      const user_country_code = userObj.user_country_code;
      const user_phone_number = userObj.user_phone_number;
      login(user_phone_number);
    };

    // Attach the function to the window object
    window.phoneEmailListener = handleAuthResponse;

    // Check if the script already exists in the document
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.phone.email/sign_in_button_v1.js';
      script.async = true;
      signInButtonRef.current.appendChild(script);
    }

    // Cleanup function to remove the event listener
    return () => {
      window.phoneEmailListener = null;
    };
  }, [login]);
  return (
    <div ref={signInButtonRef} className="pe_signin_button" data-client-id="18594572666135880928"></div>
  );
};

export default PhoneEmailAuth;
