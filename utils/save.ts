import { History, ScoreHistory } from "../types";
import { decode, encode } from "./encryption";

class SaveManagement {
  static getEncryptionKey(generate: boolean = false): string {
    let key = localStorage.getItem("key");
    if (!key && generate) {
      key = Math.random().toString(36).substring(2, 15);
      localStorage.setItem("key", key);
    } else if (!key) {
      throw new Error("No encryption key found");
    }
    return key;
  }

  static loadProgress(expectedTitle: string): History | null {
    const data = localStorage.getItem("progress");
    if (!data) {
      return null;
    }

    try {
      const key = SaveManagement.getEncryptionKey();
      const decryptedData = decode(data, key);
      const { history, title } = JSON.parse(decryptedData);

      if (!history || !title || title !== expectedTitle) {
        SaveManagement.clearProgress();
        return null;
      }
      return history;
    } catch (e) {
      SaveManagement.clearProgress();
      return null;
    }
  }

  static saveProgress(title: string, history: History): void {
    const data = {
      title,
      history,
    };
    const key = SaveManagement.getEncryptionKey(true);
    const json = JSON.stringify(data);
    const encryptedData = encode(json, key);
    localStorage.setItem("progress", encryptedData);
  }

  static loadHistory(): ScoreHistory {
    const data = localStorage.getItem("history");
    if (!data) {
      return [];
    }
    try {
      const key = SaveManagement.getEncryptionKey();
      const decryptedData = decode(data, key);
      return (JSON.parse(decryptedData) as ScoreHistory) || [];
    } catch (e) {
      SaveManagement.clearHistory();
      return [];
    }
  }

  static saveHistory(title: string, history: History, isOver: boolean): void {
    const existing = SaveManagement.loadHistory();
    const data = {
      title,
      isOver,
      nbTrials: history.length,
      accuracy: history.filter(([_, count]) => count > 0).length,
    };
    if (
      existing.length === 0 ||
      existing[existing.length - 1].title !== title
    ) {
      existing.push({
        title,
        isOver,
        nbTrials: history.length,
        accuracy: history.filter(([_, count]) => count > 0).length,
      });
    } else {
      existing[existing.length - 1] = data;
    }

    const json = JSON.stringify(existing);
    const encryptionKey = SaveManagement.getEncryptionKey(true);
    const encryptedData = encode(json, encryptionKey);
    localStorage.setItem("history", encryptedData);
  }

  static clearProgress(): void {
    localStorage.removeItem("progress");
  }

  static clearHistory(): void {
    localStorage.removeItem("history");
  }
}

export default SaveManagement;
