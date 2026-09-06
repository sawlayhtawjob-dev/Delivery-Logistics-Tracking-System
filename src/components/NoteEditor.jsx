import React from 'react';

export default function NoteEditor({ activeNote, onUpdateNote }) {
  if (!activeNote) {
    return (
      <div style={{ padding: '25px', flex: 1, color: '#94a3b8' }}>
        ကျေးဇူးပြု၍ Note တစ်ခု ရွေးချယ်ပါ သို့မဟုတ် "+ အသစ်" ကို နှိပ်ပါ
      </div>
    );
  }

  // Title ပြင်လိုက်ပါက Parent State သို့ လွှဲပေးခြင်း
  const handleTitleChange = (e) => {
    onUpdateNote({
      ...activeNote,
      title: e.target.value
    });
  };

  // Content ပြင်လိုက်ပါက Parent State သို့ လွှဲပေးခြင်း
  const handleContentChange = (e) => {
    onUpdateNote({
      ...activeNote,
      content: e.target.value
    });
  };

  return (
    <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {/* Title Input */}
      <input
        type="text"
        value={activeNote.title}
        onChange={handleTitleChange}
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          background: '#18181b',
          color: '#fff',
          border: '1px solid #333',
          borderRadius: '6px',
          padding: '10px'
        }}
      />

      {/* Content Textarea */}
      <textarea
        value={activeNote.content}
        onChange={handleContentChange}
        rows={12}
        style={{
          fontSize: '15px',
          lineHeight: '1.6',
          background: '#18181b',
          color: '#cbd5e1',
          border: '1px solid #333',
          borderRadius: '6px',
          padding: '12px',
          resize: 'vertical'
        }}
      />
    </div>
  );
}