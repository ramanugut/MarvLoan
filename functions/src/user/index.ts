import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const helloUser = functions.https.onRequest(async (req, res) => {
  res.json({ message: 'User endpoint placeholder' });
});

export const userFunctions = {
  helloUser,
};
