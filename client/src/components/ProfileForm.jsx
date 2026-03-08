import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import ImageUpload from './ImageUpload';
import { useToast } from './Ui';

const iconOptions = [
  { name: 'IoMailOutline' }, { name: 'IoLogoGithub' }, { name: 'IoLogoLinkedin' },
  { name: 'IoPhonePortraitOutline' }, { name: 'TbBrandLeetcode' },
];

const ProfileForm = () => {
  const [profile, setProfile] = useState({ name: '', age: '', domain: '', summary: '', location: '', phone: '', email: '', cvLink: '', profilePhoto: '', contact: [], social: [] });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toasts, toast } = useToast();

  useEffect(() => { API.get('/profile').then(r => setProfile(r.data)).catch(() => {}); }, []);

  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handlePhotoSelect = (file, url) => { setPhotoFile(file); setPhotoPreview(url || ''); if (file) setProfile(p => ({ ...p, profilePhoto: '' })); };

  const handleContactChange = (i, f, v) => { const u = [...profile.contact]; u[i][f] = v; setProfile({ ...profile, contact: u }); };
  const addContact = () => setProfile({ ...profile, contact: [...profile.contact, { id: Date.now(), name: '', link: '', icon: 'IoMailOutline' }] });
  const removeContact = (i) => setProfile({ ...profile, contact: profile.contact.filter((_, idx) => idx !== i) });

  const handleSocialChange = (i, f, v) => { const u = [...profile.social]; u[i][f] = v; setProfile({ ...profile, social: u }); };
  const addSocial = () => setProfile({ ...profile, social: [...profile.social, { id: Date.now(), name: '', link: '', icon: 'IoLogoGithub', color: '#3B82F6' }] });
  const removeSocial = (i) => setProfile({ ...profile, social: profile.social.filter((_, idx) => idx !== i) });

  const handleSubmit = async (e) => {
    e.preventDefault(); setSubmitting(true);
    try {
      let profilePhoto = profile.profilePhoto;
      if (photoFile) {
        const fd = new FormData(); fd.append('image', photoFile);
        const { data } = await API.post('/upload', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
        profilePhoto = data.url;
      }
      await API.put('/profile', { ...profile, profilePhoto });
      toast.success('Profile saved successfully!');
    } catch {
      toast.error('Failed to save profile. Please try again.');
    } finally { setSubmitting(false); }
  };

  const rowStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr 180px auto', gap: '10px', alignItems: 'center', padding: '10px 0' };
  const socialRowStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr 180px 42px auto', gap: '10px', alignItems: 'center', padding: '10px 0' };

  return (
    <form onSubmit={handleSubmit}>
      {toasts}

      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Profile</h1>
          <p className="page-subtitle">Your personal information and contact details</p>
        </div>
        <button type="submit" className="btn btn-success" disabled={submitting} style={{ padding: '9px 22px' }}>
          {submitting ? 'Saving…' : '✓ Save Profile'}
        </button>
      </div>

      {/* Photo */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header"><span className="card-title">Profile Photo</span></div>
        <div className="card-body">
          <ImageUpload onFileSelect={handlePhotoSelect} previewUrl={photoPreview || profile.profilePhoto} />
        </div>
      </div>

      {/* Info */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header"><span className="card-title">Personal Information</span></div>
        <div className="card-body">
          <div className="form-grid form-grid-2">
            <div className="form-group"><label className="form-label">Full Name</label><input name="name" value={profile.name} onChange={handleChange} placeholder="e.g. Alex Johnson" className="form-input" /></div>
            <div className="form-group"><label className="form-label">Age</label><input name="age" value={profile.age} onChange={handleChange} placeholder="e.g. 25" type="number" className="form-input" /></div>
            <div className="form-group"><label className="form-label">Domain / Role</label><input name="domain" value={profile.domain} onChange={handleChange} placeholder="e.g. Full Stack Developer" className="form-input" /></div>
            <div className="form-group"><label className="form-label">Location</label><input name="location" value={profile.location} onChange={handleChange} placeholder="e.g. Bangalore, India" className="form-input" /></div>
            <div className="form-group"><label className="form-label">Phone</label><input name="phone" value={profile.phone} onChange={handleChange} placeholder="e.g. +91 9876543210" className="form-input" /></div>
            <div className="form-group"><label className="form-label">Email</label><input name="email" value={profile.email} onChange={handleChange} placeholder="e.g. alex@example.com" className="form-input" /></div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">Summary</label><textarea name="summary" value={profile.summary} onChange={handleChange} placeholder="Write a brief professional summary…" className="form-input" style={{ minHeight: '110px' }} /></div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="form-label">CV / Resume Link</label><input name="cvLink" value={profile.cvLink} onChange={handleChange} placeholder="https://drive.google.com/…" className="form-input" /></div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header"><span className="card-title">Contact Links</span><button type="button" onClick={addContact} className="btn btn-secondary btn-sm">+ Add</button></div>
        <div className="card-body">
          {profile.contact.length === 0 && <p style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', padding: '12px 0' }}>No contact links yet.</p>}
          {profile.contact.map((item, idx) => (
            <div key={item.id} style={{ ...rowStyle, borderBottom: idx < profile.contact.length - 1 ? '1px solid #F4F4F5' : 'none' }}>
              <input value={item.name} onChange={e => handleContactChange(idx, 'name', e.target.value)} placeholder="Label" className="form-input" />
              <input value={item.link} onChange={e => handleContactChange(idx, 'link', e.target.value)} placeholder="URL or value" className="form-input" />
              <select value={item.icon} onChange={e => handleContactChange(idx, 'icon', e.target.value)} className="form-input">
                {iconOptions.map(o => <option key={o.name} value={o.name}>{o.name}</option>)}
              </select>
              <button type="button" onClick={() => removeContact(idx)} className="btn btn-danger btn-sm btn-icon">✕</button>
            </div>
          ))}
        </div>
      </div>

      {/* Social */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header"><span className="card-title">Social Links</span><button type="button" onClick={addSocial} className="btn btn-secondary btn-sm">+ Add</button></div>
        <div className="card-body">
          {profile.social.length === 0 && <p style={{ textAlign: 'center', color: '#A1A1AA', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', padding: '12px 0' }}>No social links yet.</p>}
          {profile.social.map((item, idx) => (
            <div key={item.id} style={{ ...socialRowStyle, borderBottom: idx < profile.social.length - 1 ? '1px solid #F4F4F5' : 'none' }}>
              <input value={item.name} onChange={e => handleSocialChange(idx, 'name', e.target.value)} placeholder="Platform" className="form-input" />
              <input value={item.link} onChange={e => handleSocialChange(idx, 'link', e.target.value)} placeholder="URL" className="form-input" />
              <select value={item.icon} onChange={e => handleSocialChange(idx, 'icon', e.target.value)} className="form-input">
                {iconOptions.map(o => <option key={o.name} value={o.name}>{o.name}</option>)}
              </select>
              <input value={item.color} onChange={e => handleSocialChange(idx, 'color', e.target.value)} type="color" style={{ width: '42px', height: '36px', border: '1.5px solid #E4E4E7', borderRadius: '8px', cursor: 'pointer', padding: '2px' }} />
              <button type="button" onClick={() => removeSocial(idx)} className="btn btn-danger btn-sm btn-icon">✕</button>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;