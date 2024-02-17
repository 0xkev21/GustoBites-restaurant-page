import getFooter from './footer.js';

export default function getReservePage() {
    const reservePage = document.createElement('div');
    reservePage.classList.add('reservePage');
    reservePage.innerHTML = `
        <h2>Reservations</h2>
        <form action="POST">
            <div class="openingHours">
                <h6>Opening Hours</h6>
                <p>
                    Monday - Friday: 10:00 AM - 10:00 PM<br>
                    Saturday - Sunday: 1:00 PM - 10:00 PM
                </p>
            </div>
            <div class="inputsContainer">
                <div class="numberOfPeople">
                    <label for="numberOfPeople">Number of People:</label>
                    <input type="number" id="numberOfPeople" name="number-of-people" placeholder="3">
                </div>
                <div class="Date">
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" placeholder="">
                </div>
                <div class="time">
                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" placeholder="3">
                </div>
            </div>
            <button type="button" class="primary">Reserve Now</button>
        </form>
    `;

    reservePage.appendChild(getFooter());

    return reservePage;
}