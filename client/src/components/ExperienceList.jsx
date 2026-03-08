import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import { useConfirm, useToast } from './Ui';

const emptyForm = { company: '', role: '', duration: '', description: '', type: '' };
const typeColors = {
  'Internship': { bg: '#FFFBEB', border: '#FDE68A', color: '#92400E' },
  'Full-time':  { bg: '#F0FDF4', border: '#BBF7D0', color: '#166534' },
  'Part-time':  { bg: '#F0F9FF', border: '#BAE6FD', color: '#075985' },
  'Contract':   { bg: '#FAF5FF', border: '#E9D5FF', color: '#6B21A8' },
  'Freelance':  { bg: '#FFF1F2', border: '#FECDD3', color: '#9F1239' },
};

const ExperienceList = () => {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const { modal, confirm } = useConfirm();
  const { toasts, toast } = useToast();

  useEffect(() => { fetchItems(); }, []);
  const fetchItems = () => API.get('/experience').then(r => setItems(r.data)).catch(() => {});
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await API.put(`/experience/${editing}`, form);
      else await API.post('/experience', { ...form, id: Date.now() });
      toast.success(editing ? 'Experience updated!' : 'Experience added!');
      setEditing(null); setForm(emptyForm); setShowForm(false); fetchItems();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleEdit = (item) => {
    setEditing(item._id);
    setForm({ company: item.company, role: item.role, duration: item.duration, description: item.description, type: item.type });
    setShowForm(true);
  };

  const handleCancel = () => { setEditing(null); setForm(emptyForm); setShowForm(false); };

  const handleDelete = async (id, name) => {
    const ok = await confirm({
      title: 'Delete Experience?',
      message: `"${name}" will be permanently removed. This action cannot be undone.`,
    });
    if (!ok) return;
    try {
      await API.delete(`/experience/${id}`);
      toast.success('Experience deleted.');
      fetchItems();
    } catch {
      toast.error('Failed to delete. Please try again.');
    }
  };

  return (
    <div>
      {modal}
      {toasts}

      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div><h1 className="page-title">Experience</h1><p className="page-subtitle">Your professional work history and roles</p></div>
        {!showForm && <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ Add Experience</button>}
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-header"><span className="card-title">{editing ? 'Edit Experience' : 'New Experience'}</span><button type="button" onClick={handleCancel} className="btn btn-secondary btn-sm">Cancel</button></div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-grid form-grid-2">
                <div className="form-group"><label className="form-label">Company</label><input name="company" value={form.company} onChange={handleChange} placeholder="e.g. Google" className="form-input" required /></div>
                <div className="form-group"><label className="form-label">Role / Title</label><input name="role" value={form.role} onChange={handleChange} placeholder="e.g. Software Engineer" className="form-input" required /></div>
                <div className="form-group"><label className="form-label">Duration</label><input name="duration" value={form.duration} onChange={handleChange} placeholder="e.g. Jun 2023 – Present" className="form-input" required /></div>
                <div className="form-group">
                  <label className="form-label">Type</label>
                  <select name="type" value={form.type} onChange={handleChange} className="form-input" required>
                    <option value="">Select type…</option>
                    {Object.keys(typeColors).map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Description</label><textarea name="description" value={form.description} onChange={handleChange} placeholder="What did you do? What did you build or achieve?" className="form-input" required /></div>
              </div>
              <div style={{ display: 'flex', gap: '9px' }}>
                <button type="submit" className="btn btn-success">{editing ? '✓ Update' : '+ Add'}</button>
                <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gap: '10px' }}>
        {items.length === 0 && !showForm && (
          <div className="card"><div className="card-body" style={{ textAlign: 'center', padding: '48px', color: '#A1A1AA' }}>
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>💼</div>
            <p style={{ fontSize: '15px', color: '#71717A', marginBottom: '6px', fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}>No experience yet</p>
            <p style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif' }}>Click "Add Experience" to get started</p>
          </div></div>
        )}
        {items.map(item => {
          const tc = typeColors[item.type] || { bg: '#F4F4F5', border: '#E4E4E7', color: '#52525B' };
          return (
            <div key={item._id} className="list-item">
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <p style={{ fontWeight: '600', fontSize: '14px', color: '#18181B', fontFamily: 'DM Sans, sans-serif' }}>{item.company}</p>
                  <span style={{ color: '#D4D4D8' }}>·</span>
                  <p style={{ fontSize: '13.5px', color: '#52525B', fontFamily: 'DM Sans, sans-serif' }}>{item.role}</p>
                  {item.type && <span style={{ fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '99px', background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color, fontFamily: 'DM Sans, sans-serif' }}>{item.type}</span>}
                </div>
                <p style={{ fontSize: '11.5px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif', marginBottom: '5px' }}>📅 {item.duration}</p>
                <p style={{ fontSize: '13px', color: '#71717A', fontFamily: 'DM Sans, sans-serif', lineHeight: '1.6' }}>{item.description}</p>
              </div>
              <div className="list-item-actions">
                <button onClick={() => handleEdit(item)} className="btn btn-warning btn-sm">Edit</button>
                <button onClick={() => handleDelete(item._id, item.company)} className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceList;