const fetchPromise = fetch("https://randomuser.me/api/?inc=name,dob,location,picture");
fetchPromise.then(response => {
    return response.json();
}).then(userData => {
    const user = userData.results[0];
    const date_month = new Date(user.dob.date);
    const month = date_month.toLocaleString('en-us', { month: 'short' });

    function format(inputDate) {
        let date, month, year;

        date = inputDate.getDate();
        month = inputDate.getMonth() + 1;
        year = inputDate.getFullYear();

        date = date
            .toString()
            .padStart(2, '0');
        month = date_month.toLocaleString('en-us', { month: 'short' });
        month = month
            .toString()
            .padStart(2, '0');

        return `${date} ${month} ${year}`;
    }

    const data = format(new Date(user.dob.date));



    document.getElementById('user-photo').src = user.picture.medium
    document.getElementById('user-name').innerText = 'Welcome ' + user.name.title + ' ' + user.name.first + ' ' + user.name.last + '!'
    document.getElementById('fetched-name').innerText = user.name.first
    document.getElementById('fetched-surname').innerText = user.name.last
    document.getElementById('fetched-date').innerText = data;
    document.getElementById('fetched-location').innerText = user.location.street.name + ' '  + user.location.street.number + ', '  + user.location.city + ', '  + user.location.country

});

