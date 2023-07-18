async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (!respons.ok) {
        throw new Error('Anmodning mislykkedes: ' + respons.status);
    }
    return await respons.text();
}
  
// Opdater kontakterne på siden med det nye nummer
function updateContactOnPage(contactId, newPhone) {
    const listItem = document.querySelector(`#contact-${contactId}`);
    listItem.textContent = `${listItem.textContent.split(' - ')[0]} - ${newPhone}`;
}
  
// Hent kontakter fra serveren og vis dem på siden
async function getAndDisplayContacts() {
    try {
        const respons = await fetch('/');
        if (!respons.ok) {
            throw new Error('Anmodning mislykkedes: ' + respons.status);
        }
        const data = await respons.json();
        const contactsList = document.querySelector('#contacts-list');
        contactsList.innerHTML = ''; // Ryd listen for at undgå duplikerede opføringer
        data.contacts.forEach(contact => {
            const listItem = document.createElement('li');
            listItem.textContent = `${contact.name} - ${contact.phone}`;
            listItem.id = `contact-${contact.id}`;
  
            const updateLink = document.createElement('a');
            updateLink.textContent = 'Opdater nummer';
            updateLink.href = `/update/${contact.id}`;
            updateLink.addEventListener('click', (event) => {
                event.preventDefault();
                const newPhone = prompt('Indtast nyt telefonnummer:');
                if (newPhone !== null) { // Kontroller om brugeren klikker på "OK" eller "Annuller"
                    const updatedContact = { phone: newPhone };
                    post(`/update/${contact.id}`, updatedContact)
                        .then(() => {
                             updateContactOnPage(contact.id, newPhone); // Opdater visningen med det nye nummer
                        })
                        .catch(error => {
                            console.error('Fejl ved opdatering af kontakt:', error.message);
                        });
                }
            });
  
            listItem.appendChild(updateLink);
            contactsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Fejl ved hentning af kontakter:', error.message);
    }
}
  
// Kald funktionen for at hente og vise kontakterne
getAndDisplayContacts();