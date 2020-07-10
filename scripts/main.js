const main = document.querySelector('main');

for(let user of users) {
    let accordion = new Accordion(user.name, user);
    accordion.appendTo(main);
}//end for