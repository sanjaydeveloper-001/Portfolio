import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './SideBar';

const routeTitles = {
  '/':               'Dashboard',
  '/profile':        'Profile',
  '/education':      'Education',
  '/experience':     'Experience',
  '/projects':       'Projects',
  '/skills':         'Skills',
  '/certifications': 'Certifications',
  '/interests':      'Interests',
};

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const pageTitle = routeTitles[location.pathname] || 'Portfolio';

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const sidebarWidth = isMobile ? 0 : collapsed ? 68 : 244;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #F7F8FA;
          font-family: 'DM Sans', sans-serif;
          color: #18181B;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        /* ── Hide/show helpers ── */
        @media (min-width: 768px) { .sidebar-mobile-close { display: none !important; } }
        @media (max-width: 767px) {
          .sidebar-desktop-footer { display: none !important; }
          aside { --sidebar-mobile-transform: translateX(-100%); width: 256px !important; }
        }

        /* ── Page layout ── */
        .page-header { margin-bottom: 28px; }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #18181B;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .page-subtitle {
          font-size: 14px;
          color: #71717A;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
        }

        /* ── Cards ── */
        .card {
          background: #FFFFFF;
          border: 1px solid #E4E4E7;
          border-radius: 14px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          overflow: hidden;
        }

        .card-header {
          padding: 18px 22px;
          border-bottom: 1px solid #F4F4F5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #18181B;
          letter-spacing: -0.01em;
        }

        .card-body { padding: 22px; }

        /* ── Forms ── */
        .form-group { margin-bottom: 18px; }

        .form-label {
          display: block;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #71717A;
          margin-bottom: 7px;
          font-family: 'DM Sans', sans-serif;
        }

        .form-input {
          width: 100%;
          padding: 9px 13px;
          border: 1.5px solid #E4E4E7;
          border-radius: 9px;
          font-size: 14px;
          color: #18181B;
          background: #FAFAFA;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
          appearance: none;
          line-height: 1.5;
        }

        .form-input:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.10);
          background: #FFFFFF;
        }

        .form-input::placeholder { color: #A1A1AA; }

        textarea.form-input {
          resize: vertical;
          min-height: 92px;
          line-height: 1.6;
        }

        select.form-input {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23A1A1AA' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 34px;
        }

        .form-grid { display: grid; gap: 14px; }
        .form-grid-2 { grid-template-columns: 1fr 1fr; }
        .form-grid-3 { grid-template-columns: 1fr 1fr 1fr; }

        @media (max-width: 640px) {
          .form-grid-2, .form-grid-3 { grid-template-columns: 1fr; }
          .card-body { padding: 16px; }
          .card-header { padding: 14px 16px; }
        }

        /* ── Buttons ── */
        .btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 6px; padding: 8px 16px; border-radius: 9px;
          font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif;
          border: none; cursor: pointer; transition: all 0.15s;
          text-decoration: none; white-space: nowrap; letter-spacing: -0.01em;
        }
        .btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none !important; box-shadow: none !important; }

        .btn-primary { background: #18181B; color: #FAFAFA; }
        .btn-primary:hover:not(:disabled) { background: #27272A; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(24,24,27,0.22); }

        .btn-secondary { background: #F4F4F5; color: #52525B; border: 1px solid #E4E4E7; }
        .btn-secondary:hover { background: #E4E4E7; color: #18181B; }

        .btn-success { background: #16A34A; color: #fff; }
        .btn-success:hover:not(:disabled) { background: #15803D; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(22,163,74,0.28); }

        .btn-danger { background: #FFF; color: #DC2626; border: 1.5px solid #FECACA; }
        .btn-danger:hover { background: #FEF2F2; }

        .btn-warning { background: #FFF; color: #D97706; border: 1.5px solid #FDE68A; }
        .btn-warning:hover { background: #FFFBEB; }

        .btn-sm { padding: 5px 11px; font-size: 12px; border-radius: 7px; }
        .btn-icon { width: 30px; height: 30px; padding: 0; border-radius: 7px; }

        /* ── Tags ── */
        .tag {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 10px; background: #F4F4F5; border: 1px solid #E4E4E7;
          border-radius: 99px; font-size: 12px; font-weight: 500; color: #52525B;
          font-family: 'DM Sans', sans-serif;
        }
        .tag-remove {
          background: none; border: none; cursor: pointer; color: #A1A1AA;
          padding: 0; display: flex; align-items: center; font-size: 14px;
          line-height: 1; transition: color 0.1s;
        }
        .tag-remove:hover { color: #EF4444; }
        .tags-wrap { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 10px; }

        /* ── List items ── */
        .list-item {
          background: #FFF; border: 1px solid #E4E4E7; border-radius: 11px;
          padding: 15px 18px; margin-bottom: 10px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 14px; transition: box-shadow 0.15s, border-color 0.15s;
        }
        .list-item:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); border-color: #D4D4D8; }
        .list-item-actions { display: flex; gap: 7px; flex-shrink: 0; }

        /* ── Misc ── */
        .divider { height: 1px; background: #F4F4F5; margin: 20px 0; }
        .inline-add { display: flex; gap: 9px; align-items: center; margin-top: 10px; }
        .inline-add .form-input { flex: 1; }
        .section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #A1A1AA; margin-bottom: 10px;
          font-family: 'DM Sans', sans-serif;
        }
        .preview-image {
          width: 60px; height: 60px; border-radius: 9px;
          object-fit: cover; border: 1px solid #E4E4E7; flex-shrink: 0;
        }

        @media (max-width: 480px) {
          .list-item { flex-direction: column; align-items: flex-start; }
          .list-item-actions { width: 100%; justify-content: flex-end; }
        }
      `}</style>

      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar
          collapsed={isMobile ? false : collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />

        <div style={{
          marginLeft: `${sidebarWidth}px`,
          flex: 1, minHeight: '100vh',
          display: 'flex', flexDirection: 'column',
          transition: 'margin-left 0.25s cubic-bezier(0.4,0,0.2,1)',
        }}>
          {/* Topbar */}
          <header style={{
            background: '#FFFFFF',
            borderBottom: '1px solid #E4E4E7',
            height: '58px', padding: '0 22px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            position: 'sticky', top: 0, zIndex: 50,
            boxShadow: '0 1px 3px rgba(0,0,0,0.03)', gap: '12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => setMobileOpen(true)}
                style={{
                  display: isMobile ? 'flex' : 'none',
                  alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px', borderRadius: '8px',
                  background: '#F4F4F5', border: '1px solid #E4E4E7',
                  cursor: 'pointer', color: '#52525B', flexShrink: 0,
                }}
              ><Menu size={17} /></button>

              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13.5px', color: '#A1A1AA' }}>
                Portfolio <span style={{ color: '#18181B', fontWeight: '600' }}>/ {pageTitle}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <span style={{
                background: '#F4F4F5', border: '1px solid #E4E4E7', borderRadius: '99px',
                padding: '4px 11px', fontSize: '11.5px', color: '#71717A', fontWeight: '500',
                fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap',
              }}>v1.0</span>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: '13px', fontWeight: '700',
                fontFamily: 'Playfair Display, serif',
                cursor: 'pointer', flexShrink: 0,
              }}>S</div>
            </div>
          </header>

          <main style={{ padding: '26px 24px', flex: 1 }}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;