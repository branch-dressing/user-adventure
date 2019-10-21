export function createLocationLink(location) {
    const link = document.createElement('a');
    link.classList.add('location');

    const searchParams = new URLSearchParams();
    searchParams.set('id', location.id);
    link.href = 'location?' + searchParams.toString();
    link.href = '../locations/?id=' + location.id;

    link.style.top = location.map.top;
    link.style.left = location.map.left;
    link.textContent = location.title;

    return link;
}