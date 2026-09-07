// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

/**
 * 💡 Custom Hook: Any Data ကို LocalStorage မှာ Auto-save လုပ်ပေးမယ့် Hook
 * @param {string} key - LocalStorage key name
 * @param {any} initialValue - Default value if no data in LocalStorage
 */
export function useLocalStorage(key, initialValue) {
  // 1. Initial State ကို LocalStorage မှ ဖတ်ယူခြင်း
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // 2. storedValue ပြောင်းလဲတိုင်း LocalStorage ထို့ Save လုပ်ပေးခြင်း
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}