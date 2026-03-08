import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  User, GraduationCap, Briefcase, FolderKanban,
  Cpu, BadgeCheck, Heart, ArrowRight, MapPin,
  Mail, Phone, Calendar, ExternalLink, Github
} from 'lucide-react';
import AdminLayout from './components/AdminLayout';
import ProfileForm from './components/ProfileForm';
import EducationList from './components/EducationList';
import ExperienceList from './components/ExperienceList';
import ProjectList from './components/ProjectList';
import SkillForm from './components/SkillForm';
import CertificationList from './components/CertificationList';
import InterestList from './components/InterestList';
import API from './api/axios';
import ProtectedRoute from './components/Protectedroute';
import Login from './pages/Login'

/* ─────────────────────────────────────────────
   Small shared components for the dashboard
───────────────────────────────────────────── */

const SectionCard = ({ title, icon: Icon, linkTo, count, children, empty }) => (
  <div style={{
    background: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '14px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)', overflow: 'hidden',
  }}>
    <div style={{
      padding: '16px 20px', borderBottom: '1px solid #F4F4F5',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
        <div style={{
          width: '30px', height: '30px', borderRadius: '8px',
          background: '#F4F4F5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={15} color="#52525B" />
        </div>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: '600', color: '#18181B' }}>{title}</span>
        {count !== undefined && (
          <span style={{
            background: '#F4F4F5', borderRadius: '99px', padding: '1px 8px',
            fontSize: '11px', color: '#71717A', fontWeight: '600', fontFamily: 'DM Sans, sans-serif',
          }}>{count}</span>
        )}
      </div>
      <Link to={linkTo} style={{
        display: 'flex', alignItems: 'center', gap: '4px',
        fontSize: '12px', color: '#3B82F6', fontWeight: '500',
        textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
      }}>Edit <ArrowRight size={12} /></Link>
    </div>
    <div style={{ padding: '16px 20px' }}>
      {empty ? (
        <p style={{ fontSize: '13px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', padding: '12px 0' }}>
          No data yet — <Link to={linkTo} style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '500' }}>add some</Link>
        </p>
      ) : children}
    </div>
  </div>
);

const Badge = ({ children, color = '#F4F4F5', textColor = '#52525B', borderColor = '#E4E4E7' }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '2px 9px', borderRadius: '99px',
    background: color, border: `1px solid ${borderColor}`,
    fontSize: '11.5px', fontWeight: '500', color: textColor,
    fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap',
  }}>{children}</span>
);

const typeColors = {
  'Internship': { bg: '#FFFBEB', border: '#FDE68A', color: '#92400E' },
  'Full-time':  { bg: '#F0FDF4', border: '#BBF7D0', color: '#166534' },
  'Part-time':  { bg: '#F0F9FF', border: '#BAE6FD', color: '#075985' },
  'Contract':   { bg: '#FAF5FF', border: '#E9D5FF', color: '#6B21A8' },
  'Freelance':  { bg: '#FFF1F2', border: '#FECDD3', color: '#9F1239' },
};

/* ─────────────────────────────────────────────
   Overview / Dashboard
───────────────────────────────────────────── */
const Overview = () => {
  const [profile, setProfile]           = useState(null);
  const [education, setEducation]       = useState([]);
  const [experience, setExperience]     = useState([]);
  const [projects, setProjects]         = useState([]);
  const [skills, setSkills]             = useState({ languages: [], frameworks_tools: [], softSkills: [] });
  const [certifications, setCerts]      = useState([]);
  const [interests, setInterests]       = useState([]);
  const [loading, setLoading]           = useState(true);

  useEffect(() => {
    const all = [
      API.get('/profile').then(r => setProfile(r.data)).catch(() => {}),
      API.get('/education').then(r => setEducation(r.data)).catch(() => {}),
      API.get('/experience').then(r => setExperience(r.data)).catch(() => {}),
      API.get('/projects').then(r => setProjects(r.data)).catch(() => {}),
      API.get('/skills').then(r => setSkills(r.data)).catch(() => {}),
      API.get('/certifications').then(r => setCerts(r.data)).catch(() => {}),
      API.get('/interests').then(r => setInterests(r.data?.interests || [])).catch(() => {}),
    ];
    Promise.all(all).finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '36px', height: '36px', border: '3px solid #E4E4E7', borderTopColor: '#3B82F6', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
        <p style={{ fontSize: '13px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>Loading portfolio…</p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  const statsData = [
    { label: 'Projects',       value: projects.length,       icon: FolderKanban, color: '#3B82F6', bg: '#EFF6FF' },
    { label: 'Experience',     value: experience.length,     icon: Briefcase,    color: '#8B5CF6', bg: '#F5F3FF' },
    { label: 'Certifications', value: certifications.length, icon: BadgeCheck,   color: '#16A34A', bg: '#F0FDF4' },
    { label: 'Skills',         value: (skills.languages?.length || 0) + (skills.frameworks_tools?.length || 0), icon: Cpu, color: '#F59E0B', bg: '#FFFBEB' },
  ];

  const getLevelColor = (l) => l >= 80 ? '#16A34A' : l >= 60 ? '#3B82F6' : l >= 40 ? '#F59E0B' : '#A1A1AA';

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: '#18181B',
        borderRadius: '16px', padding: '36px 40px', marginBottom: '24px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(59,130,246,0.10)' }} />
        <div style={{ position: 'absolute', bottom: -50, left: '35%', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(139,92,246,0.08)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', position: 'relative' }}>
          {/* Avatar */}
          <div style={{
            width: '72px', height: '72px', borderRadius: '14px', flexShrink: 0,
            background: profile?.profilePhoto ? 'transparent' : 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            overflow: 'hidden', border: '2px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {profile?.profilePhoto
              ? <img src={profile.profilePhoto} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <span style={{ color: '#fff', fontSize: '28px', fontFamily: 'Playfair Display, serif', fontWeight: '700' }}>
                  {profile?.name ? profile.name[0].toUpperCase() : 'P'}
                </span>
            }
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: '#6B7280', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'DM Sans, sans-serif' }}>
              Portfolio Dashboard
            </p>
            <h1 style={{ color: '#FFFFFF', fontSize: '26px', fontWeight: '700', fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em', marginBottom: '8px', lineHeight: 1.2 }}>
              {profile?.name || 'Your Portfolio'}
            </h1>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {profile?.domain && <span style={{ fontSize: '13px', color: '#94A3B8', fontFamily: 'DM Sans, sans-serif' }}>{profile.domain}</span>}
              {profile?.location && (
                <span style={{ fontSize: '13px', color: '#94A3B8', fontFamily: 'DM Sans, sans-serif', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} /> {profile.location}
                </span>
              )}
              {profile?.email && (
                <span style={{ fontSize: '13px', color: '#94A3B8', fontFamily: 'DM Sans, sans-serif', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Mail size={12} /> {profile.email}
                </span>
              )}
            </div>
          </div>

          <Link to="/profile" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '8px 16px', borderRadius: '9px',
            background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.14)',
            color: '#E4E4E7', fontSize: '13px', fontWeight: '500',
            textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
            flexShrink: 0,
          }}>Edit Profile <ArrowRight size={13} /></Link>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '24px' }}>
        {statsData.map(s => (
          <div key={s.label} style={{
            background: '#FFFFFF', border: '1px solid #E4E4E7', borderRadius: '12px',
            padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <s.icon size={18} color={s.color} />
            </div>
            <div>
              <p style={{ fontSize: '22px', fontWeight: '700', color: '#18181B', fontFamily: 'DM Sans, sans-serif', lineHeight: 1, marginBottom: '3px' }}>{s.value}</p>
              <p style={{ fontSize: '12px', color: '#71717A', fontFamily: 'DM Sans, sans-serif' }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>

        {/* Profile summary */}
        <SectionCard title="Profile" icon={User} linkTo="/profile" empty={!profile?.summary}>
          {profile?.summary && (
            <>
              <p style={{ fontSize: '13px', color: '#3F3F46', lineHeight: '1.65', fontFamily: 'DM Sans, sans-serif', marginBottom: '14px' }}>
                {profile.summary.length > 200 ? profile.summary.slice(0, 200) + '…' : profile.summary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {profile.phone && <Badge><Phone size={10} style={{ marginRight: 3 }} />{profile.phone}</Badge>}
                {profile.cvLink && (
                  <a href={profile.cvLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Badge color="#EFF6FF" textColor="#1D4ED8" borderColor="#BFDBFE">
                      <ExternalLink size={10} style={{ marginRight: 3 }} />View CV
                    </Badge>
                  </a>
                )}
              </div>
            </>
          )}
        </SectionCard>

        {/* Education */}
        <SectionCard title="Education" icon={GraduationCap} linkTo="/education" count={education.length} empty={education.length === 0}>
          {education.slice(0, 3).map((ed, i) => (
            <div key={ed._id} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', paddingBottom: i < Math.min(education.length, 3) - 1 ? '12px' : '0', marginBottom: i < Math.min(education.length, 3) - 1 ? '12px' : '0', borderBottom: i < Math.min(education.length, 3) - 1 ? '1px solid #F4F4F5' : 'none' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: '700', color: '#3B82F6', fontFamily: 'DM Sans, sans-serif' }}>{i + 1}</div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '13.5px', fontWeight: '600', color: '#18181B', fontFamily: 'DM Sans, sans-serif', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ed.institution}</p>
                <p style={{ fontSize: '12px', color: '#71717A', fontFamily: 'DM Sans, sans-serif', marginBottom: '4px' }}>{ed.course}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Badge><Calendar size={9} style={{ marginRight: 2 }} />{ed.duration}</Badge>
                  {ed.cgpa && <Badge color="#F0FDF4" textColor="#166534" borderColor="#BBF7D0">CGPA {ed.cgpa}</Badge>}
                </div>
              </div>
            </div>
          ))}
        </SectionCard>

        {/* Experience */}
        <SectionCard title="Experience" icon={Briefcase} linkTo="/experience" count={experience.length} empty={experience.length === 0}>
          {experience.slice(0, 3).map((ex, i) => {
            const tc = typeColors[ex.type] || { bg: '#F4F4F5', border: '#E4E4E7', color: '#52525B' };
            return (
              <div key={ex._id} style={{ paddingBottom: i < Math.min(experience.length, 3) - 1 ? '12px' : '0', marginBottom: i < Math.min(experience.length, 3) - 1 ? '12px' : '0', borderBottom: i < Math.min(experience.length, 3) - 1 ? '1px solid #F4F4F5' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '3px' }}>
                  <p style={{ fontSize: '13.5px', fontWeight: '600', color: '#18181B', fontFamily: 'DM Sans, sans-serif' }}>{ex.company}</p>
                  {ex.type && <Badge color={tc.bg} textColor={tc.color} borderColor={tc.border}>{ex.type}</Badge>}
                </div>
                <p style={{ fontSize: '12px', color: '#71717A', fontFamily: 'DM Sans, sans-serif', marginBottom: '2px' }}>{ex.role}</p>
                <p style={{ fontSize: '11.5px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>{ex.duration}</p>
              </div>
            );
          })}
        </SectionCard>

        {/* Skills */}
        <SectionCard title="Skills" icon={Cpu} linkTo="/skills" empty={!skills.languages?.length && !skills.frameworks_tools?.length}>
          {skills.languages?.slice(0, 4).map((lang, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ width: '90px', fontSize: '12.5px', fontWeight: '500', color: '#3F3F46', fontFamily: 'DM Sans, sans-serif', flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lang.name}</span>
              <div style={{ flex: 1, height: '5px', background: '#F4F4F5', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${lang.level}%`, background: getLevelColor(lang.level), borderRadius: '99px', transition: 'width 0.6s' }} />
              </div>
              <span style={{ fontSize: '11px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif', width: '32px', textAlign: 'right', flexShrink: 0 }}>{lang.level}%</span>
            </div>
          ))}
          {skills.frameworks_tools?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
              {skills.frameworks_tools.slice(0, 8).map((t, i) => (
                <Badge key={i} color="#F0FDF4" textColor="#166534" borderColor="#BBF7D0">{t}</Badge>
              ))}
              {skills.frameworks_tools.length > 8 && <Badge>+{skills.frameworks_tools.length - 8}</Badge>}
            </div>
          )}
        </SectionCard>
      </div>

      {/* Second row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>

        {/* Projects */}
        <SectionCard title="Projects" icon={FolderKanban} linkTo="/projects" count={projects.length} empty={projects.length === 0}>
          <div style={{ display: 'grid', gap: '10px' }}>
            {projects.slice(0, 3).map(p => (
              <div key={p._id} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 12px', background: '#FAFAFA', border: '1px solid #F4F4F5', borderRadius: '9px' }}>
                {p.image
                  ? <img src={p.image} alt={p.title} style={{ width: '44px', height: '44px', borderRadius: '7px', objectFit: 'cover', flexShrink: 0, border: '1px solid #E4E4E7' }} />
                  : <div style={{ width: '44px', height: '44px', borderRadius: '7px', background: '#EFF6FF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FolderKanban size={18} color="#3B82F6" /></div>
                }
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#18181B', fontFamily: 'DM Sans, sans-serif', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.title}</p>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {p.tech?.slice(0, 4).map((t, i) => <Badge key={i} color="#EFF6FF" textColor="#1D4ED8" borderColor="#BFDBFE">{t}</Badge>)}
                  </div>
                </div>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#A1A1AA', flexShrink: 0 }}><ExternalLink size={14} /></a>}
                {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{ color: '#A1A1AA', flexShrink: 0 }}><Github size={14} /></a>}
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Certifications + Interests stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SectionCard title="Certifications" icon={BadgeCheck} linkTo="/certifications" count={certifications.length} empty={certifications.length === 0}>
            <div style={{ display: 'grid', gap: '8px' }}>
              {certifications.slice(0, 3).map(c => (
                <div key={c._id} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {c.image
                    ? <img src={c.image} alt={c.name} style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0, border: '1px solid #E4E4E7' }} />
                    : <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#FFFBEB', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BadgeCheck size={15} color="#F59E0B" /></div>
                  }
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: '12.5px', fontWeight: '600', color: '#18181B', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</p>
                    <p style={{ fontSize: '11px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Interests" icon={Heart} linkTo="/interests" empty={interests.length === 0}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {interests.map((item, i) => {
                const palettes = [
                  { bg: '#EEF2FF', border: '#C7D2FE', color: '#4338CA' },
                  { bg: '#F0FDF4', border: '#BBF7D0', color: '#166534' },
                  { bg: '#FFF7ED', border: '#FED7AA', color: '#9A3412' },
                  { bg: '#FAF5FF', border: '#E9D5FF', color: '#6B21A8' },
                  { bg: '#FFF1F2', border: '#FECDD3', color: '#9F1239' },
                  { bg: '#F0F9FF', border: '#BAE6FD', color: '#075985' },
                ];
                const c = palettes[i % palettes.length];
                return <Badge key={i} color={c.bg} textColor={c.color} borderColor={c.border}>{item}</Badge>;
              })}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute >
            <AdminLayout />
          </ProtectedRoute> }>

          <Route index element={<Overview />} />
          <Route path="profile" element={<ProfileForm />} />
          <Route path="education" element={<EducationList />} />
          <Route path="experience" element={<ExperienceList />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="skills" element={<SkillForm />} />
          <Route path="certifications" element={<CertificationList />} />
          <Route path="interests" element={<InterestList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;