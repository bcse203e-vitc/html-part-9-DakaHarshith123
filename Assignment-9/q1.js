document.addEventListener('DOMContentLoaded', () => {
    const bookingButtons = document.querySelectorAll('.book-button');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceName = button.getAttribute('data-service');
            const userName = prompt(`Please enter your name for your appointment booking for ${serviceName}:`);

            if (userName) {
                const appointment = {
                    service: serviceName,
                    user: userName,
                    date: new Date().toLocaleString()
                };

                // Store appointment in local storage
                let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
                appointments.push(appointment);
                localStorage.setItem('appointments', JSON.stringify(appointments));

                alert(`Appointment booked successfully for ${userName} for ${serviceName}!`);
            } else {
                alert('Booking was cancelled.');
            }
        });
    });
});
