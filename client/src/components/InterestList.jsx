import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import { useToast } from './Ui';

const palettes = [
  { bg: '#EEF2FF', border: '#C7D2FE', color: '#4338CA' },
  { bg: '#F0FDF4', border: '#BBF7D0', color: '#166534' },
  { bg: '#FFF7ED', border: '#FED7AA', color: '#9A3412' },
  { bg: '#FAF5FF', border: '#E9D5FF', color: '#6B21A8' },
  { bg: '#FFF1F2', border: '#FECDD3', color: '#9F1239' },
  { bg: '#F0F9FF', border: '#BAE6FD', color: '#075985' },
];

const toArray = (data, ...keys) => {
  if (Array.isArray(data)) return data;
  for (const key of keys) {
    if (Array.isArray(data?.[key])) return data[key];
  }
  return [];
};

const InterestList = () => {
  const [interests, setInterests] = useState([]);
  const [input, setInput] = useState('');
  const { toasts, toast } = useToast();

  useEffect(() => {
    API.get('/interests')
      .then(r => setInterests(toArray(r.data?.interests ?? r.data, 'interests', 'data')))
      .catch(() => {});
  }, []);

  const handleAdd = () => {
    if (input.trim()) {
      setInterests([...interests, input.trim()]);
      setInput('');
    }
  };

  const handleRemove = (i) => setInterests(interests.filter((_, idx) => idx !== i));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put('/interests', { interests });
      toast.success('Interests saved successfully!');
    } catch {
      toast.error('Failed to save interests. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {toasts}

      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Interests</h1>
          <p className="page-subtitle">Things you're passionate about beyond work</p>
        </div>
        <button type="submit" className="btn btn-success" style={{ padding: '9px 22px' }}>✓ Save</button>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="card-title">Your Interests</span>
          <span style={{ fontSize: '12px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>{interests.length} added</span>
        </div>
        <div className="card-body">
          {interests.length > 0 ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px', marginBottom: '20px' }}>
              {interests.map((item, i) => {
                const c = palettes[i % palettes.length];
                return (
                  <span key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '6px 14px', borderRadius: '99px',
                    background: c.bg, border: `1px solid ${c.border}`,
                    fontSize: '13.5px', fontWeight: '500', color: c.color,
                    fontFamily: 'DM Sans, sans-serif',
                  }}>
                    {item}
                    <button
                      type="button"
                      onClick={() => handleRemove(i)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: c.color, opacity: 0.5, fontSize: '15px',
                        lineHeight: 1, padding: 0, display: 'flex', alignItems: 'center',
                      }}
                    >×</button>
                  </span>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '24px 0', marginBottom: '12px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>💡</div>
              <p style={{ fontSize: '13px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>No interests yet — add what you love!</p>
            </div>
          )}
          <div className="divider" style={{ marginTop: interests.length > 0 ? '0' : undefined }} />
          <p className="section-label">Add Interest</p>
          <div className="inline-add">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAdd(); } }}
              placeholder="e.g. Open Source, Photography, Music"
              className="form-input"
            />
            <button type="button" onClick={handleAdd} className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InterestList;