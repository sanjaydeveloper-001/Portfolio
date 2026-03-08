import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import ImageUpload from './ImageUpload';
import { useConfirm, useToast } from './Ui';

const emptyForm = { title: '', tech: [], description: '', image: '', demo: '', repo: '' };

const ProjectList = () => {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [techInput, setTechInput] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { modal, confirm } = useConfirm();
  const { toasts, toast } = useToast();

  useEffect(() => { fetchItems(); }, []);
  const fetchItems = () => API.get('/projects').then(r => setItems(r.data)).catch(() => {});
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleTechAdd = () => { if (techInput.trim()) { setForm({ ...form, tech: [...form.tech, techInput.trim()] }); setTechInput(''); } };
  const handleTechRemove = (i) => setForm({ ...form, tech: form.tech.filter((_, idx) => idx !== i) });
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
      if (editing) await API.put(`/projects/${editing}`, payload);
      else await API.post('/projects', { ...payload, id: Date.now() });
      toast.success(editing ? 'Project updated!' : 'Project added!');
      resetForm(); fetchItems();
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally { setSubmitting(false); }
  };

  const resetForm = () => { setEditing(null); setForm(emptyForm); setImageFile(null); setImagePreview(''); setShowForm(false); };

  const handleEdit = (item) => {
    setEditing(item._id);
    setForm({ title: item.title, tech: item.tech, description: item.description, image: item.image, demo: item.demo, repo: item.repo });
    setImageFile(null); setImagePreview(''); setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id, name) => {
    const ok = await confirm({
      title: 'Delete Project?',
      message: `"${name}" will be permanently removed. This action cannot be undone.`,
    });
    if (!ok) return;
    try {
      await API.delete(`/projects/${id}`);
      toast.success('Project deleted.');
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
        <div><h1 className="page-title">Projects</h1><p className="page-subtitle">Showcase your best work and side projects</p></div>
        {!showForm && <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ Add Project</button>}
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <div className="card-header"><span className="card-title">{editing ? 'Edit Project' : 'New Project'}</span><button type="button" onClick={resetForm} className="btn btn-secondary btn-sm">Cancel</button></div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-grid form-grid-2">
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Project Title</label><input name="title" value={form.title} onChange={handleChange} placeholder="e.g. E-Commerce Platform" className="form-input" required /></div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Technologies Used</label>
                  <div className="inline-add">
                    <input value={techInput} onChange={e => setTechInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleTechAdd(); }}} placeholder="Type a tech and press Enter" className="form-input" />
                    <button type="button" onClick={handleTechAdd} className="btn btn-secondary">Add</button>
                  </div>
                  {form.tech.length > 0 && (
                    <div className="tags-wrap">
                      {form.tech.map((t, i) => <span key={i} className="tag" style={{ background: '#EFF6FF', borderColor: '#BFDBFE', color: '#1D4ED8' }}>{t}<button type="button" onClick={() => handleTechRemove(i)} className="tag-remove">×</button></span>)}
                    </div>
                  )}
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Description</label><textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe what this project does…" className="form-input" required /></div>
                <div className="form-group"><label className="form-label">Demo URL</label><input name="demo" value={form.demo} onChange={handleChange} placeholder="https://…" className="form-input" /></div>
                <div className="form-group"><label className="form-label">Repository URL</label><input name="repo" value={form.repo} onChange={handleChange} placeholder="https://github.com/…" className="form-input" /></div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Project Image</label>
                  <ImageUpload onFileSelect={handleFileSelect} previewUrl={imagePreview || (editing ? form.image : '')} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '9px', alignItems: 'center' }}>
                <button type="submit" className="btn btn-success" disabled={submitting}>{submitting ? 'Saving…' : editing ? '✓ Update' : '+ Add Project'}</button>
                <button type="button" onClick={resetForm} className="btn btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gap: '10px' }}>
        {items.length === 0 && !showForm && (
          <div className="card"><div className="card-body" style={{ textAlign: 'center', padding: '48px', color: '#A1A1AA' }}>
            <div style={{ fontSize: '30px', marginBottom: '10px' }}>📁</div>
            <p style={{ fontSize: '15px', color: '#71717A', marginBottom: '6px', fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}>No projects yet</p>
            <p style={{ fontSize: '13px', fontFamily: 'DM Sans, sans-serif' }}>Click "Add Project" to get started</p>
          </div></div>
        )}
        {items.map(item => (
          <div key={item._id} className="list-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
              {item.image
                ? <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', borderRadius: '9px', objectFit: 'cover', flexShrink: 0, border: '1px solid #E4E4E7' }} />
                : <div style={{ width: '60px', height: '60px', borderRadius: '9px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>📁</div>
              }
              <div style={{ minWidth: 0 }}>
                <p style={{ fontWeight: '600', fontSize: '14px', color: '#18181B', fontFamily: 'DM Sans, sans-serif', marginBottom: '5px' }}>{item.title}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '5px' }}>
                  {item.tech.map((t, i) => <span key={i} style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '99px', background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1D4ED8', fontFamily: 'DM Sans, sans-serif', fontWeight: '500' }}>{t}</span>)}
                </div>
                <p style={{ fontSize: '12.5px', color: '#71717A', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.description?.substring(0, 90)}{item.description?.length > 90 ? '…' : ''}</p>
              </div>
            </div>
            <div className="list-item-actions">
              <button onClick={() => handleEdit(item)} className="btn btn-warning btn-sm">Edit</button>
              <button onClick={() => handleDelete(item._id, item.title)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;