function addPerson() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const dat = document.getElementById('birthDate').value;
    const phone = document.getElementById('celNumber').value;
    const country = document.getElementById('town').value;
    const province = document.getElementById('Province').value;
    
    if (name === '' || surname=== '' || email === '' || dat === '' || phone === '' || country=== '' ||province==='') {
        alert('Per favore compila tutti i campi del modulo.');
        return false;
    }   else{
        const table = document.getElementById('genoveffo');
        const row = table.insertRow(-1);
        row.innerHTML = `
            <td>${name}</td>
            <td>${surname}</td>
            <td>${email}</td>
            <td>${dat}</td>
            <td>${phone}</td>
            <td>${country}</td>
            <td>${province}</td>
            <td><button onclick="removePerson(this)">Rimuovi</button></td>
        `;
    }
}
 
function removePerson(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
