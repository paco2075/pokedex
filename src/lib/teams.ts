import { db } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import type { Team } from '@/components/TeamBuilder';

const TEAMS_COLLECTION = 'teams';

export async function saveUserTeams(userId: string, teams: Team[]) {
  try {
    const userTeamsRef = doc(db, TEAMS_COLLECTION, userId);
    await setDoc(userTeamsRef, { teams });
  } catch (error) {
    console.error('Error saving teams:', error);
    throw error;
  }
}

export async function getUserTeams(userId: string): Promise<Team[]> {
  try {
    const userTeamsRef = doc(db, TEAMS_COLLECTION, userId);
    const docSnap = await getDoc(userTeamsRef);
    
    if (docSnap.exists()) {
      return docSnap.data().teams;
    }
    return [];
  } catch (error) {
    console.error('Error loading teams:', error);
    throw error;
  }
}
