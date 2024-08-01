document.addEventListener('DOMContentLoaded', function () {
    // Handle navigation
    const sections = document.querySelectorAll('main > section');
    const navItems = document.querySelectorAll('nav .dropdown-content a');
    
    navItems.forEach(navItem => {
        navItem.addEventListener('click', function (e) {
            e.preventDefault();
            sections.forEach(section => section.classList.remove('active'));
            navItems.forEach(item => item.classList.remove('active'));
            const targetId = navItem.id.replace('nav-', '');
            document.getElementById(targetId).classList.add('active');
            navItem.classList.add('active');
        });
    });

    // Bus Management
    const addBusBtn = document.getElementById('add-bus-btn');
    const busForm = document.getElementById('bus-form');
    addBusBtn.addEventListener('click', function () {
        busForm.classList.toggle('hidden');
    });

    const busList = document.getElementById('bus-list');
    const busFormElement = document.getElementById('bus-form-element');
    busFormElement.addEventListener('submit', function (e) {
        e.preventDefault();
        const busNumber = document.getElementById('bus-number').value;
        const seats = document.getElementById('seats').value;
        const route = document.getElementById('route').value;
        const timeOfTravel = document.getElementById('time-of-travel').value;
        const pricePerSeat = document.getElementById('price-per-seat').value;

        const li = document.createElement('li');
        li.textContent = `Bus Number: ${busNumber}, Seats: ${seats}, Route: ${route}, Time of Travel: ${timeOfTravel}, Price per Seat: ${pricePerSeat}`;
        busList.appendChild(li);

        busForm.classList.add('hidden');
        busFormElement.reset();
    });

    // Recent Activities
    const activities = [
        'User John booked a seat on Bus 101.',
        'Bus 202 schedule updated.',
        'User Alice canceled her booking on Bus 303.',
        'New bus added: Bus 404.',
    ];

    const activitiesList = document.getElementById('activities-list');
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activitiesList.appendChild(li);
    });
});
