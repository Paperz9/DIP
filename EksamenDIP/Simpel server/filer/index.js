document.addEventListener('DOMContentLoaded', () => {
    const personNames = document.querySelectorAll('.person-name');

    personNames.forEach(personName => {
        personName.addEventListener('click', () => {
            const lastName = personName.getAttribute('data-lastname');
            
            const table = document.querySelector('table');
            const headerRow = table.querySelector('tr');
            headerRow.insertCell(-1).textContent = 'Efternavn';

            const dataRows = table.querySelectorAll('tr:not(:first-child)');
            dataRows.forEach(row => {
                const cell = row.insertCell(-1);
                if (row === headerRow) {
                    cell.textContent = 'Efternavn';
                } else {
                    cell.textContent = lastName;
                }
            });
        });
    });
});