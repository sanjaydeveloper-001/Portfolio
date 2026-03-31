import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import { useToast } from './Ui';

const SkillForm = () => {
  const [skills, setSkills] = useState({ languages: [], frameworks_tools: [], softSkills: [] });
  const [langInput, setLangInput] = useState({ name: '', level: '' });
  const [toolInput, setToolInput] = useState('');
  const [softInput, setSoftInput] = useState('');
  const { toasts, toast } = useToast();

  useEffect(() => {
    API.get('/skills')
      .then(r => {
        const d = r.data;
        setSkills({
          languages:        Array.isArray(d?.languages)        ? d.languages        : [],
          frameworks_tools: Array.isArray(d?.frameworks_tools) ? d.frameworks_tools : [],
          softSkills:       Array.isArray(d?.softSkills)       ? d.softSkills       : [],
        });
      })
      .catch(() => {});
  }, []);

  const handleLangAdd = () => {
    if (langInput.name && langInput.level) {
      setSkills({ ...skills, languages: [...skills.languages, { name: langInput.name, level: parseInt(langInput.level) }] });
      setLangInput({ name: '', level: '' });
    }
  };

  const handleLangRemove = (i) =>
    setSkills({ ...skills, languages: skills.languages.filter((_, idx) => idx !== i) });

  const handleToolAdd = () => {
    if (toolInput.trim()) {
      setSkills({ ...skills, frameworks_tools: [...skills.frameworks_tools, toolInput.trim()] });
      setToolInput('');
    }
  };

  const handleToolRemove = (i) =>
    setSkills({ ...skills, frameworks_tools: skills.frameworks_tools.filter((_, idx) => idx !== i) });

  const handleSoftAdd = () => {
    if (softInput.trim()) {
      setSkills({ ...skills, softSkills: [...skills.softSkills, softInput.trim()] });
      setSoftInput('');
    }
  };

  const handleSoftRemove = (i) =>
    setSkills({ ...skills, softSkills: skills.softSkills.filter((_, idx) => idx !== i) });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put('/skills', skills);
      toast.success('Skills saved successfully!');
    } catch {
      toast.error('Failed to save skills. Please try again.');
    }
  };

  const getLevelColor = (l) => l >= 80 ? '#16A34A' : l >= 60 ? '#3B82F6' : l >= 40 ? '#F59E0B' : '#A1A1AA';

  return (
    <form onSubmit={handleSubmit}>
      {toasts}

      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Skills</h1>
          <p className="page-subtitle">Your technical and soft skill proficiencies</p>
        </div>
        <button type="submit" className="btn btn-success" style={{ padding: '9px 22px' }}>✓ Save Skills</button>
      </div>

      {/* Languages */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div className="card-header">
          <span className="card-title">Programming Languages</span>
          <span style={{ fontSize: '12px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>{skills.languages.length} added</span>
        </div>
        <div className="card-body">
          {skills.languages.length > 0 && (
            <div style={{ display: 'grid', gap: '10px', marginBottom: '16px' }}>
              {skills.languages.map((lang, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ width: '110px', fontSize: '13.5px', fontWeight: '500', color: '#18181B', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>{lang.name}</span>
                  <div style={{ flex: 1, height: '5px', background: '#F4F4F5', borderRadius: '99px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${lang.level}%`, background: getLevelColor(lang.level), borderRadius: '99px', transition: 'width 0.5s' }} />
                  </div>
                  <span style={{ width: '36px', fontSize: '12px', color: '#71717A', fontFamily: 'DM Sans, sans-serif', textAlign: 'right', flexShrink: 0 }}>{lang.level}%</span>
                  <button type="button" onClick={() => handleLangRemove(i)} className="btn btn-danger btn-sm btn-icon" style={{ flexShrink: 0 }}>✕</button>
                </div>
              ))}
            </div>
          )}
          <div className="divider" style={{ marginTop: 0 }} />
          <p className="section-label">Add Language</p>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '140px' }}>
              <label className="form-label">Language</label>
              <input type="text" placeholder="e.g. Python" value={langInput.name} onChange={e => setLangInput({ ...langInput, name: e.target.value })} className="form-input" />
            </div>
            <div style={{ width: '130px' }}>
              <label className="form-label">Level (0–100)</label>
              <input type="number" placeholder="e.g. 85" min="0" max="100" value={langInput.level} onChange={e => setLangInput({ ...langInput, level: e.target.value })} className="form-input" />
            </div>
            <button type="button" onClick={handleLangAdd} className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <div className="card-header">
          <span className="card-title">Frameworks & Tools</span>
          <span style={{ fontSize: '12px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>{skills.frameworks_tools.length} added</span>
        </div>
        <div className="card-body">
          {skills.frameworks_tools.length > 0 && (
            <div className="tags-wrap" style={{ marginBottom: '16px' }}>
              {skills.frameworks_tools.map((t, i) => (
                <span key={i} className="tag" style={{ background: '#F0FDF4', borderColor: '#BBF7D0', color: '#166534' }}>
                  {t}
                  <button type="button" onClick={() => handleToolRemove(i)} className="tag-remove">×</button>
                </span>
              ))}
            </div>
          )}
          <div className="divider" style={{ marginTop: 0 }} />
          <p className="section-label">Add Tool or Framework</p>
          <div className="inline-add">
            <input
              value={toolInput}
              onChange={e => setToolInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleToolAdd(); } }}
              placeholder="e.g. React, Docker, PostgreSQL"
              className="form-input"
            />
            <button type="button" onClick={handleToolAdd} className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <span className="card-title">Soft Skills</span>
          <span style={{ fontSize: '12px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>{skills.softSkills.length} added</span>
        </div>
        <div className="card-body">
          {skills.softSkills.length > 0 && (
            <div className="tags-wrap" style={{ marginBottom: '16px' }}>
              {skills.softSkills.map((s, i) => (
                <span key={i} className="tag" style={{ background: '#FAF5FF', borderColor: '#E9D5FF', color: '#6B21A8' }}>
                  {s}
                  <button type="button" onClick={() => handleSoftRemove(i)} className="tag-remove">×</button>
                </span>
              ))}
            </div>
          )}
          <div className="divider" style={{ marginTop: 0 }} />
          <p className="section-label">Add Soft Skill</p>
          <div className="inline-add">
            <input
              value={softInput}
              onChange={e => setSoftInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleSoftAdd(); } }}
              placeholder="e.g. Communication, Leadership"
              className="form-input"
            />
            <button type="button" onClick={handleSoftAdd} className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SkillForm;