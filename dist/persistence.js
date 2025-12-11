import { createSessionFromJson } from './domain.js';
const sessionKey = 'journey3.net/session';
const loadLastSession = (getNowUtc, getNewId) => {
    const json = localStorage.getItem(sessionKey);
    if (!json) {
        return null;
    }
    return createSessionFromJson(json, getNowUtc, getNewId);
};
const saveSession = session => {
    localStorage.setItem(sessionKey, JSON.stringify(session));
};
export default {
    loadLastSession,
    saveSession
};
