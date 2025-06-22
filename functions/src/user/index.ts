import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const helloUser = functions.https.onRequest(async (_req, res) => {
  res.json({ message: 'User endpoint placeholder' });
});

const setUserRole = functions.https.onCall(async (data, context) => {
  const { userId, role } = data as { userId: string; role: string };
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Authentication required');
  }
  if (context.auth.token.role !== 'Admin') {
    throw new functions.https.HttpsError('permission-denied', 'Only Admins can set roles');
  }
  await admin.auth().setCustomUserClaims(userId, { role });
  await admin.firestore().collection('users').doc(userId).set({ role }, { merge: true });
  await admin.firestore().collection('auditLogs').add({
    performedBy: context.auth.uid,
    action: 'SetUserRole',
    target: userId,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    details: { role },
  });
  return { success: true };
});

export const userFunctions = {
  helloUser,
  setUserRole,
};
