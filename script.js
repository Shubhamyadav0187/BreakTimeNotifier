document.addEventListener('DOMContentLoaded', function() {
    // Request notification permission
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  
   
    const timerInterval = 1 * 60 * 1000;
    
    setInterval(function() {
      
      showNotification();
  
     
      setTimeout(function() {
        hideNotification();
      }, 10 * 1000);
    }, timerInterval);
  });
  
  function showNotification() {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Rest Reminder', {body: 'Take a 10-second break!'});
      
    setTimeout(function () { hideNotification(); }, 10 * 1000);
    }
  }
  
  function hideNotification() {
    const notificationContainer = document.getElementById('notificationContainer');
  if (notificationContainer) {
    notificationContainer.style.display = 'none';
  }
    // You can customize this function if needed
  }
  