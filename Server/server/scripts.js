document.addEventListener('DOMContentLoaded', function () {
    // Handle navigation
    const sections = document.querySelectorAll('main > section');
    const navItems = document.querySelectorAll('nav .dropdown-content a');
    
    navItems.forEach(navItem => {
        navItem.addEventListener('click', function (e) {
            e.preventDefault();
            sections.forEach(section => section.classList.remove('active'));
            navItems.forEach(item => item.classList.remove('active'));
            const targetId = this.id.replace('dashboard-', '').replace('buses-', '').replace('schedules-', '').replace('bookings-', '').replace('users-', '').replace('settings-', '');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Handle adding a bus
    const addBusBtn = document.getElementById('add-bus-btn');
    const busForm = document.getElementById('bus-form');
    const busFormElement = document.getElementById('bus-form-element');
    const busList = document.getElementById('bus-list');

    addBusBtn.addEventListener('click', function () {
        busForm.classList.toggle('hidden');
    });

    busFormElement.addEventListener('submit', function (e) {
        e.preventDefault();
        const busNumber = document.getElementById('bus-number').value;
        const seats = document.getElementById('seats').value;
        const route = document.getElementById('route').value;
        const timeOfTravel = document.getElementById('time-of-travel').value;
        const pricePerSeat = document.getElementById('price-per-seat').value;
        
        const busItem = document.createElement('li');
        busItem.textContent = `Bus Number: ${busNumber}, Seats: ${seats}, Route: ${route}, Time: ${timeOfTravel}, Price: ${pricePerSeat}`;
        busList.appendChild(busItem);
        
        busFormElement.reset();
        busForm.classList.add('hidden');
    });
});
