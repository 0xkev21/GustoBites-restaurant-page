export default function getFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p class="address">
            Gusto Bites Restaurant, 123 Main Street Cityville, Stateburg, 98765
        </p>
        <p class="phone">
            Phone: <a href="tel:+1(555)123-4567" class="link">(555) 123-4567</a>
        </p>
        <p class="email">
            Email: <a href="mailto:not-real-email@gustobites.com" class="link">not-real-email@gustobites.com</a>
        </p>
    `;

    return footer;
}