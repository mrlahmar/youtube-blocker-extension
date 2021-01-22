setTimeout(start, 3000);

function start() {

    const msg = document.createElement('p');
    const new_container = document.createElement('div');
    const player = document.querySelector('#player.style-scope');
    const video = player.querySelector('#player-container-outer');
    const img = document.createElement('img');


    const fetchUnsplash = async (elem) => {
        const res = await fetch('https://api.unsplash.com/photos/random?client_id=YOUR_CLIENT_ID_FROM_UNSPLASH');
        const fetched = await res.json();
        elem.src = fetched.urls.regular;
        elem.alt = "Random Image From Unsplash";
        elem.style.setProperty('width','100%');
        elem.style.setProperty('height','100%');
    }

    const removeAndReplace = () => {
        video.remove();
        msg.textContent = "Get Back To Your Work";
        msg.classList.add('msg');
        new_container.classList.add('cnt');
        new_container.appendChild(img);
        new_container.appendChild(msg)
        player.appendChild(new_container);
    }

    fetchUnsplash(img).then(removeAndReplace);
}