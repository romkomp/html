(() => {
    const clients = [
        {
            id: 1,
            name: 'Jessica Drill',
            status: 'CARDIO TRAINING / 15 WEEKS',
            image: 'img/client_JessicaDrill.jpg',
            text: `After 15 weeks of training, I began to feel much better! I chose cardio
            training for myself as it is a great way to become healthier, stronger, and more active. Thanks to my
            amazing coach!`
        },
        {
            id: 2,
            name: 'Jordan Peterson',
            status: 'POWERLIFTING / 15 WEEKS',
            image: 'img/client_JordanPeterson.jpg',
            text: `Steve stimulates everybody to reveal their full potential. I have seen amazing
            results over the last several weeks! His nutritional advice is also very helpful. Thanks a lot!`
        },
        {
            id: 3,
            name: 'Lisa Wilson',
            status: 'WEIGHT LOSS / 18 WEEKS',
            image: 'img/client_LisaWilson.jpg',
            text: `Steve Rock really loves what he does, and he is committed to helping people to
            achieve their health and fitness dream goals. Very professional and friendly coach.`
        }
    ];

    function renderClients(clients) {
        const clientsContainer = document.querySelector('.main__clients');
        clientsContainer.innerHTML = '';
        
        for(let client of clients) {
            clientsContainer.innerHTML += `
            <div class="client_item">
            <img src="${client.image}" alt="${client.name}">
            <div class="client_item_text">"${client.text}"</div>
            <span class="client_status">${client.status}</span>
            <div class="client_name">${client.name}</div>
        </div>`;
        }
    }

    renderClients(clients);

}) ();