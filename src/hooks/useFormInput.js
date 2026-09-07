// src/hooks/useFormInput.js
import { useState } from 'react';

/**
 * 💡 Custom Hook: Form Input Single/Object State များကို လွယ်ကူစွာ ထိန်းချုပ်ပေးမည့် Hook
 * @param {object} initialValues - Form ၏ စတင် State များ
 */
export function useFormInput(initialValues) {
  const [values, setValues] = useState(initialValues);

  // Generic Handler: Input မည်သည့်အမျိုးအစားမဆို (text, checkbox, select) Dynamic ပြောင်းလဲပေးခြင်း
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Form ကို ပြန် reset လုပ်ရန် function
  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
    setValues
  };
}