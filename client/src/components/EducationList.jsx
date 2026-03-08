import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import { useConfirm, useToast } from './Ui';

const emptyForm = { institution: '', course: '', duration: '', cgpa: '', percentage: '' };

const EducationList = () => {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const { modal, confirm } = useConfirm();
  const { toasts, toast } = useToast();

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = () => API.get('/education').then(r => setItems(r.data)).catch(() => {});
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) await API.put(`/education/${editing}`, form);
      else await API.post('/education', { ...form, id: Date.now() });
      toast.success(editing ? 'Education record updated!' : 'Education record added!');
      setEditing(null); setForm(emptyForm); setShowForm(false); fetchItems();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleEdit = (item) => {
    setEditing(item._id);
    setForm({ institution: item.institution, course: item.course, duration: item.duration, cgpa: item.cgpa || '', percentage: item.percentage || '' });
    setShowForm(true);
  };

  const handleCancel = () => { setEditing(null); setForm(emptyForm); setShowForm(false); };

  const handleDelete = async (id, name) => {
    const ok = await confirm({
      title: 'Delete Education Record?',
      message: `"${name}" will be permanently removed. This action cannot be undone.`,
    });
    if (!ok) return;
    try {
      await API.delete(`/education/${id}`);
      toast.success('Education record deleted.');
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
        <div><h1 className="page-title">Education</h1><p className="page-subtitle">Your academic background and qualifications</p></div>
        {!showForm && <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ Add Education</button>}
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-header"><span className="card-title">{editing ? 'Edit Record' : 'New Education'}</span><button type="button" onClick={handleCancel} className="btn btn-secondary btn-sm">Cancel</button></div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-grid form-grid-2">
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Institution</label><input name="institution" value={form.institution} onChange={handleChange} placeholder="e.g. IIT Bombay" className="form-input" required /></div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Course / Degree</label><input name="course" value={form.course} onChange={handleChange} placeholder="e.g. B.Tech in Computer Science" className="form-input" required /></div>
                <div className="form-group"><label className="form-label">Duration</label><input name="duration" value={form.duration} onChange={handleChange} placeholder="e.g. 2020 – 2024" className="form-input" required /></div>
                <div className="form-group"><label className="form-label">CGPA (optional)</label><input name="cgpa" value={form.cgpa} onChange={handleChange} placeholder="e.g. 8.7" className="form-input" /></div>
                <div className="form-group"><label className="form-label">Percentage (optional)</label><input name="percentage" value={form.percentage} onChange={handleChange} placeholder="e.g. 87%" className="form-input" /></div>
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
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>🎓</div>
            <p style={{ fontSize: '15px', color: '#71717A', marginBottom: '6px', fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}>No education records</p>
            <p style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif' }}>Click "Add Education" to get started</p>
          </div></div>
        )}
        {items.map((item, idx) => (
          <div key={item._id} className="list-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '14px', fontWeight: '700', color: '#3B82F6', fontFamily: 'DM Sans, sans-serif' }}>{idx + 1}</div>
              <div>
                <p style={{ fontWeight: '600', fontSize: '14px', color: '#18181B', fontFamily: 'DM Sans, sans-serif', marginBottom: '2px' }}>{item.institution}</p>
                <p style={{ fontSize: '13px', color: '#71717A', fontFamily: 'DM Sans, sans-serif', marginBottom: '5px' }}>{item.course}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11.5px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>📅 {item.duration}</span>
                  {item.cgpa && <span style={{ fontSize: '11.5px', color: '#16A34A', fontFamily: 'DM Sans, sans-serif', fontWeight: '600' }}>CGPA {item.cgpa}</span>}
                  {item.percentage && <span style={{ fontSize: '11.5px', color: '#3B82F6', fontFamily: 'DM Sans, sans-serif', fontWeight: '600' }}>{item.percentage}</span>}
                </div>
              </div>
            </div>
            <div className="list-item-actions">
              <button onClick={() => handleEdit(item)} className="btn btn-warning btn-sm">Edit</button>
              <button onClick={() => handleDelete(item._id, item.institution)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationList;