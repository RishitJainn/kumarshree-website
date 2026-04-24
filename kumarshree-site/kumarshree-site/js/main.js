function sendWhatsApp(event) {
    event.preventDefault();
  
    const name        = document.getElementById('name').value.trim();
    const phone       = document.getElementById('phone').value.trim();
    const email       = document.getElementById('email').value.trim();
    const requirement = document.getElementById('requirement').value.trim();
    const quantity    = document.getElementById('quantity').value.trim();
  
    const message =
      `New Enquiry from kumarshree.com\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Requirement: ${requirement}\n` +
      `Quantity: ${quantity}`;
  
    const waNumber = '919811078844';
    const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(waURL, '_blank');
  }