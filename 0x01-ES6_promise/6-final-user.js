import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handlProfileSignup(firstName, lastName, fileName){
  const userName = signupUser(firstName, lastName);
  const userPic = uploadPhoto(fileName);

    const info = await Promise.allSettled([userName, userPic])
    .then((response) => response.map((response) => {
      if (response.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: response.reason.toString(),
        };
      }
      return response;
    }));
  return Promise.resolve(info);
}
