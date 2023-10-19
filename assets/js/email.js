function sendEmail() {
  
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });

        
    }
    
    var params = {
      from_name: document.getElementById("from_name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    emailjs
      .send("us0101k", "template_6lebqdr", params)
      .then((response) => {
        showAlert("Email sent successfully!", "alert-success");
        scrollToTop();
      })
      .catch((error) => {
        showAlert("Error: " + error, "alert-danger");   
      });
  }

  function showAlert(message, alertClass) {
    const alertElement = document.createElement("div");
    alertElement.className = `alert ${alertClass}`;
    alertElement.role = "alert";
    alertElement.textContent = message;

    document.body.appendChild(alertElement);

    setTimeout(() => {
        alertElement.remove();
    }, 5000); 
}