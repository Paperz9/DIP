async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) // OK
        throw new Error(response.status);
    return await response.json();
}

async function post(url, object) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(object),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.status !== 201) // Created
        throw new Error(response.status);
    return await response.text();
}

// Add event listener to the "Add Person" button
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addPersonButton');
    addButton.addEventListener('click', addPerson);
});

async function addPerson() {
    const nameInput = document.getElementById('nameInput');
    const addressInput = document.getElementById('addressInput');

    const person = {
        name: nameInput.value,
        address: addressInput.value
    };

    try {
        await post('/', person);
        // Refresh the page to update the list
        window.location.reload();
    } catch (error) {
        console.error('Failed to add person:', error);
    }
}