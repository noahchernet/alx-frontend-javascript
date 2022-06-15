import { uploadPhoto, createUser } from './util';

export default function handleProfileSignup() {
  let returnedStr = '';
  uploadPhoto()
    .then(({ body }) => {
      returnedStr += `${body} `;
      createUser().then(({ firstName, lastName }) => {
        returnedStr += `${firstName} ${lastName}`;
      });
    })
    .catch(() => console.log('Signup system offline'))
    .finally(() => {
      console.log(returnedStr);
    });
}
