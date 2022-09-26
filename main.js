
const people = document.querySelector("#people");

function buildDirectory(customerArray) {
    for (let customer of customerArray) {
        let face = document.createElement('img');
        let customerDiv = document.createElement('div');
        let name = document.createElement("h1");
        let street = document.createElement("p");
        let location = document.createElement("p");
        let email = document.createElement("h3");
        let birthday = document.createElement("p");
        let registered = document.createElement("p");

        face.classList.add("faces");
        street.classList.add("street");
        email.classList.add("email");
        birthday.classList.add("birthday");
        



        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        face.src = `${customer.picture.large}`
        email.innerText = `${customer.email}`;
        name.innerText = `${capitalize(customer.name.first)} ${capitalize(customer.name.last)}`;
        street.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        location.innerText = `${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
        birthday.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do YYYY")}`;
        registered.innerText = `Customer since: ${moment(customer.registered.date).format("MMM Do YYYY")}`

        customerDiv.appendChild(face);
        customerDiv.appendChild(name);
        customerDiv.appendChild(email);
        customerDiv.appendChild(street);
        customerDiv.appendChild(location);
        customerDiv.appendChild(birthday);
        customerDiv.appendChild(registered);
        people.appendChild(customerDiv)

    }
}


buildDirectory(customers)


