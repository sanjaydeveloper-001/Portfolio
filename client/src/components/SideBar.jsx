import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, User, GraduationCap, Briefcase,
  FolderKanban, Cpu, BadgeCheck, Heart,
  ChevronLeft, ChevronRight, X,
} from 'lucide-react';

const navItems = [
  { path: '/',               label: 'Dashboard',      icon: LayoutDashboard, exact: true },
  { path: '/profile',        label: 'Profile',         icon: User },
  { path: '/education',      label: 'Education',       icon: GraduationCap },
  { path: '/experience',     label: 'Experience',      icon: Briefcase },
  { path: '/projects',       label: 'Projects',        icon: FolderKanban },
  { path: '/skills',         label: 'Skills',          icon: Cpu },
  { path: '/certifications', label: 'Certifications',  icon: BadgeCheck },
  { path: '/interests',      label: 'Interests',       icon: Heart },
];

const Sidebar = ({ collapsed, onToggleCollapse, mobileOpen, onMobileClose }) => (
  <>
    {mobileOpen && (
      <div onClick={onMobileClose} style={{
        position: 'fixed', inset: 0,
        background: 'rgba(24,24,27,0.45)',
        zIndex: 199, backdropFilter: 'blur(3px)',
      }} />
    )}

    <aside style={{
      width: collapsed ? '68px' : '244px',
      background: '#18181B',
      display: 'flex', flexDirection: 'column',
      position: 'fixed', top: 0, left: 0, bottom: 0,
      zIndex: 200,
      transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)',
      overflow: 'hidden',
      transform: mobileOpen ? 'translateX(0)' : 'var(--sidebar-mobile-transform, translateX(0))',
    }}>

      {/* Logo */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '11px',
        padding: '18px 14px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        flexShrink: 0, minHeight: '60px',
      }}>
        <div style={{
          width: '32px', height: '32px', flexShrink: 0,
          background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
          borderRadius: '9px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: '700', fontSize: '15px',
          fontFamily: 'Playfair Display, serif',
        }}>S</div>

        <span style={{
          color: '#FAFAFA', fontFamily: 'Playfair Display, serif',
          fontSize: '16px', fontWeight: '700', letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
          opacity: collapsed ? 0 : 1, transition: 'opacity 0.15s', overflow: 'hidden',
        }}>Sanjay Portfolio</span>

        <button onClick={onMobileClose} className="sidebar-mobile-close" style={{
          marginLeft: 'auto', background: 'none', border: 'none',
          cursor: 'pointer', color: '#52525B',
          display: 'flex', alignItems: 'center',
          padding: '4px', borderRadius: '6px', flexShrink: 0,
        }}><X size={17} /></button>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '10px 8px', overflowY: 'auto', overflowX: 'hidden' }}>
        <p style={{
          fontSize: '10px', fontWeight: '700', letterSpacing: '0.09em',
          textTransform: 'uppercase', color: '#3F3F46',
          padding: collapsed ? '10px 0 6px' : '10px 8px 6px',
          textAlign: collapsed ? 'center' : 'left',
          whiteSpace: 'nowrap', overflow: 'hidden',
          fontFamily: 'DM Sans, sans-serif',
        }}>{collapsed ? '·' : 'Navigation'}</p>

        {navItems.map(({ path, label, icon: Icon, exact }) => (
          <NavLink
            key={path}
            to={path}
            end={exact}
            onClick={onMobileClose}
            title={label}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '8px 10px', borderRadius: '8px',
              color: isActive ? '#FFFFFF' : '#A1A1AA',
              background: isActive ? 'rgba(59,130,246,0.18)' : 'transparent',
              textDecoration: 'none', fontSize: '13.5px', fontWeight: isActive ? '600' : '400',
              fontFamily: 'DM Sans, sans-serif',
              transition: 'all 0.13s', whiteSpace: 'nowrap', marginBottom: '2px',
              borderLeft: isActive ? '3px solid #3B82F6' : '3px solid transparent',
              paddingLeft: '9px',
            })}
            onMouseEnter={e => {
              if (!e.currentTarget.style.borderLeft.includes('#3B82F6')) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = '#E4E4E7';
              }
            }}
            onMouseLeave={e => {
              if (!e.currentTarget.style.borderLeft.includes('#3B82F6')) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#A1A1AA';
              }
            }}
          >
            <Icon size={16} style={{ flexShrink: 0 }} />
            <span style={{ opacity: collapsed ? 0 : 1, transition: 'opacity 0.15s', overflow: 'hidden' }}>
              {label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-desktop-footer" style={{
        padding: '10px 8px',
        borderTop: '1px solid rgba(255,255,255,0.07)', flexShrink: 0,
      }}>
        <button onClick={onToggleCollapse} style={{
          width: '100%', display: 'flex',
          alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start',
          gap: '8px', padding: '8px 10px', borderRadius: '8px',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#52525B', fontSize: '13px', fontFamily: 'DM Sans, sans-serif',
          transition: 'all 0.13s', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#A1A1AA'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#52525B'; }}
        >
          {collapsed ? <ChevronRight size={15} /> : <><ChevronLeft size={15} /><span>Collapse</span></>}
        </button>
      </div>
    </aside>
  </>
);

export default Sidebar;