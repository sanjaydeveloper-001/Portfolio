import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import ImageUpload from './ImageUpload';
import { useConfirm, useToast } from './Ui';

const emptyForm = { name: '', issuer: '', image: '', link: '' };

const CertificationList = () => {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { modal, confirm } = useConfirm();
  const { toasts, toast } = useToast();

  useEffect(() => { fetchItems(); }, []);
  const fetchItems = () => API.get('/certifications').then(r => setItems(r.data)).catch(() => {});
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileSelect = (file, url) => { setImageFile(file); setImagePreview(url || ''); if (file) setForm(f => ({ ...f, image: '' })); };

  const handleSubmit = async (e) => {
    e.preventDefault(); setSubmitting(true);
    try {
      let imageUrl = form.image;
      if (imageFile) {
        const fd = new FormData(); fd.append('image', imageFile);
        const { data } = await API.post('/upload', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
        imageUrl = data.url;
      }
      const payload = { ...form, image: imageUrl };
      if (editing) await API.put(`/certifications/${editing}`, payload);
      else await API.post('/certifications', { ...payload, id: Date.now() });
      toast.success(editing ? 'Certification updated!' : 'Certification added!');
      resetForm(); fetchItems();
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally { setSubmitting(false); }
  };

  const resetForm = () => { setEditing(null); setForm(emptyForm); setImageFile(null); setImagePreview(''); setShowForm(false); };
  const handleEdit = (item) => { setEditing(item._id); setForm({ name: item.name, issuer: item.issuer, image: item.image, link: item.link }); setImageFile(null); setImagePreview(''); setShowForm(true); };

  const handleDelete = async (id, name) => {
    const ok = await confirm({
      title: 'Delete Certification?',
      message: `"${name}" will be permanently removed. This action cannot be undone.`,
    });
    if (!ok) return;
    try {
      await API.delete(`/certifications/${id}`);
      toast.success('Certification deleted.');
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
        <div><h1 className="page-title">Certifications</h1><p className="page-subtitle">Licenses, badges, and professional credentials</p></div>
        {!showForm && <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ Add Certification</button>}
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-header"><span className="card-title">{editing ? 'Edit Certification' : 'New Certification'}</span><button type="button" onClick={resetForm} className="btn btn-secondary btn-sm">Cancel</button></div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-grid form-grid-2">
                <div className="form-group"><label className="form-label">Certification Name</label><input name="name" value={form.name} onChange={handleChange} placeholder="e.g. AWS Solutions Architect" className="form-input" required /></div>
                <div className="form-group"><label className="form-label">Issuing Organization</label><input name="issuer" value={form.issuer} onChange={handleChange} placeholder="e.g. Amazon Web Services" className="form-input" required /></div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Credential URL</label><input name="link" value={form.link} onChange={handleChange} placeholder="https://…" className="form-input" /></div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Certificate Image</label>
                  <ImageUpload onFileSelect={handleFileSelect} previewUrl={imagePreview || (editing ? form.image : '')} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '9px', alignItems: 'center' }}>
                <button type="submit" className="btn btn-success" disabled={submitting}>{submitting ? 'Saving…' : editing ? '✓ Update' : '+ Add'}</button>
                <button type="button" onClick={resetForm} className="btn btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
        {items.length === 0 && !showForm && (
          <div className="card" style={{ gridColumn: '1 / -1' }}><div className="card-body" style={{ textAlign: 'center', padding: '48px', color: '#A1A1AA' }}>
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>🏅</div>
            <p style={{ fontSize: '15px', color: '#71717A', marginBottom: '6px', fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}>No certifications yet</p>
            <p style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif' }}>Click "Add Certification" to get started</p>
          </div></div>
        )}
        {items.map(item => (
          <div key={item._id} className="card" style={{ overflow: 'hidden' }}>
            {item.image
              ? <div style={{ height: '130px', overflow: 'hidden', background: '#F4F4F5' }}><img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              : <div style={{ height: '70px', background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🏅</div>
            }
            <div style={{ padding: '14px 16px' }}>
              <p style={{ fontWeight: '600', fontSize: '13.5px', color: '#18181B', fontFamily: 'DM Sans, sans-serif', marginBottom: '3px' }}>{item.name}</p>
              <p style={{ fontSize: '12px', color: '#71717A', fontFamily: 'DM Sans, sans-serif', marginBottom: '12px' }}>{item.issuer}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#3B82F6', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none', fontWeight: '500' }}>View →</a> : <span />}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button onClick={() => handleEdit(item)} className="btn btn-warning btn-sm">Edit</button>
                  <button onClick={() => handleDelete(item._id, item.name)} className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationList;