const userlist = document.getElementById('listaUsuarios');


async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Netwerkfout: ${response.status}`);
      }
      const users = await response.json();
      users.forEach(element => {
        element.edad = Math.round(100*Math.random());
        users.forEach(user => {
            const userelement = document.createElement('li');
            const userhtml = `
                <p>${user.name}</p>
                <p>${user.edad}</p>
                <p>${user.username}</p>
                <img src='assets/img/${user.id}.jpeg' alt='${user.name}'>
                <p>${user.phone}</p>
                <p>${user.email}</p>
                <p>${user.company.name}</p>
                <p>Adres: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
            `;
            userelement.innerHTML = userhtml;
            userlist.appendChild(userelement);
          });
      });
      console.log(users);
    } catch (error) {
      console.error('Er is een fout opgetreden:', error);
    }
  }
  
  fetchUsers();


/*
Voegt een willekeurige leeftijd toe aan elke gebruiker.

Elke gebruiker heeft een afbeelding gekoppeld via ID (deze staan in de map assets/img) met de extensie .jpeg.

Toont specifieke details van elke gebruiker in de lijst in de DOM: naam, leeftijd, gebruikersnaam, afbeelding, telefoon, e-mail, bedrijf, adres.

Het adres bevat de volgende gegevens: gebruiker.adres.straat, gebruiker.adres.suite, gebruiker.adres.stad.
*/
