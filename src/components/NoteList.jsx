import React from 'react';

export default function NoteList({ notes, selectedNoteId, onSelectNote, onAddNote, onDeleteNote }) {
  return (
    <div style={{ width: '280px', borderRight: '1px solid #333', padding: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ margin: 0 }}>မှတ်စုများ</h3>
        <button 
          onClick={onAddNote}
          style={{
            padding: '5px 10px',
            background: '#38bdf8',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          + အသစ်
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map((note) => (
          <li 
            key={note.id}
            onClick={() => onSelectNote(note.id)}
            style={{
              padding: '10px',
              marginBottom: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
              background: note.id === selectedNoteId ? '#1e293b' : '#18181b',
              border: note.id === selectedNoteId ? '1px solid #38bdf8' : '1px solid #27272a',
              color: note.id === selectedNoteId ? '#38bdf8' : '#fff',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {note.title}
            </span>
            
            {/* 🗑️ Delete Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // List နှိပ်သည့် Event နှင့် မထပ်အောင် တားဆီးခြင်း
                onDeleteNote(note.id);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ef4444',
                cursor: 'pointer',
                fontSize: '14px',
                marginLeft: '8px'
              }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}