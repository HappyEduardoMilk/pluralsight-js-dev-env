import { getUsers, deleteUser } from './api/userApi';

// Populate table of users via API call.
/* eslint-disable arrow-parens, no-console, prefer-template */
getUsers().then(result => {
  console.log('getUsers returns: ' + JSON.stringify(getUsers()));
  let usersBody = '';

  result.forEach(user => {
    usersBody +=
      `<tr>
        <td>delete?<a href="#" data-id="${user.id}" class="deleteUser>Delete</a></td>
        <td>id?${user.id}</td>
        <td>first name?${user.firstName}</td>
        <td>last name?${user.lastName}</td>
        <td>e-mail?${user.email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  /* eslint-disable array-callback-return, no-param-reassign */
  /**
   * Must use `Array.from()` to create a real array from a DOM collection. `getElementsByClassname
   * only returns an 'array like' object.
   */
  Array.from(deleteLinks, link => {
    link.onclick = (event) => {
      const element = event.target;

      event.preventDefault();
      deleteUser(element.attributes['data-id'].value);

      const row = element.parentNode.parentNode;

      row.parentNode.removeChild(row);
    };
  });
});
