function displayWindowProperties() {
    // Display user agent string
    console.log('User Agent:', window.navigator.userAgent);
  
    // Display screen dimensions
    console.log('Screen Width:', window.screen.width);
    console.log('Screen Height:', window.screen.height);
  
    // Display current URL and path
    console.log('URL:', window.location.href);
    console.log('Path:', window.location.pathname);
  
    // Store and retrieve data from sessionStorage
    window.sessionStorage.setItem('sessionData', 'This is a session value');
    const sessionValue = window.sessionStorage.getItem('sessionData');
    console.log('Session Data:', sessionValue);
  
    // Store and retrieve data from localStorage
    window.localStorage.setItem('localData', 'This is a local value');
    const localValue = window.localStorage.getItem('localData');
    console.log('Local Data:', localValue);
  }
  
  // Call the displayWindowProperties() function when the page loads
  window.addEventListener('load', displayWindowProperties);
  