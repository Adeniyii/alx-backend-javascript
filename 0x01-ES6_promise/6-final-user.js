import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((v) => v.map((vv) => {
      if (vv.status === 'fulfilled') return vv;
      return { status: vv.status, value: `Error: ${vv.reason.message}` };
    }));
}
