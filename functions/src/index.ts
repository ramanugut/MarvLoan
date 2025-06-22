import * as admin from 'firebase-admin';
admin.initializeApp();

import { userFunctions } from './user';
import { clientFunctions } from './client';
import { loanFunctions } from './loan';
import { riskFunctions } from './risk';
import { paymentFunctions } from './payments';
import { collectionFunctions } from './collections';
import { reportingFunctions } from './reporting';
import { communicationFunctions } from './communication';
import { complianceFunctions } from './compliance';

export const user = userFunctions;
export const client = clientFunctions;
export const loan = loanFunctions;
export const risk = riskFunctions;
export const payments = paymentFunctions;
export const collections = collectionFunctions;
export const reporting = reportingFunctions;
export const communication = communicationFunctions;
export const compliance = complianceFunctions;
