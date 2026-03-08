import React, { useState, useEffect, useCallback } from 'react';

/* ═══════════════════════════════════════════════════
   CONFIRM MODAL
   Usage:
     const { modal, confirm } = useConfirm();
     ...
     await confirm({ title: 'Delete?', message: '...' })
     ...
     {modal}
═══════════════════════════════════════════════════ */
export const useConfirm = () => {
  const [state, setState] = useState(null); // { title, message, resolve }

  const confirm = useCallback((opts) =>
    new Promise((resolve) => {
      setState({ ...opts, resolve });
    }), []);

  const handleOk = () => { state?.resolve(true);  setState(null); };
  const handleCancel = () => { state?.resolve(false); setState(null); };

  const modal = state ? (
    <>
      {/* Backdrop */}
      <div
        onClick={handleCancel}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(24,24,27,0.45)',
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.15s ease',
        }}
      />

      {/* Dialog */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1001,
        background: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)',
        width: '100%', maxWidth: '400px',
        padding: '28px 28px 24px',
        animation: 'slideUp 0.18s cubic-bezier(0.34,1.56,0.64,1)',
        fontFamily: 'DM Sans, sans-serif',
      }}>
        {/* Icon */}
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px',
          background: '#FEF2F2', border: '1px solid #FECACA',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '16px', fontSize: '20px',
        }}>🗑️</div>

        {/* Title */}
        <h3 style={{
          fontSize: '16px', fontWeight: '700', color: '#18181B',
          marginBottom: '8px', lineHeight: 1.3,
          fontFamily: 'DM Sans, sans-serif',
        }}>
          {state.title || 'Are you sure?'}
        </h3>

        {/* Message */}
        {state.message && (
          <p style={{
            fontSize: '13.5px', color: '#71717A', lineHeight: '1.6',
            marginBottom: '0', fontFamily: 'DM Sans, sans-serif',
          }}>
            {state.message}
          </p>
        )}

        {/* Divider */}
        <div style={{ height: '1px', background: '#F4F4F5', margin: '20px 0' }} />

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            onClick={handleCancel}
            style={{
              padding: '8px 18px', borderRadius: '9px',
              background: '#F4F4F5', border: '1px solid #E4E4E7',
              color: '#52525B', fontSize: '13.5px', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
              transition: 'all 0.13s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#E4E4E7'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#F4F4F5'; }}
          >
            Cancel
          </button>
          <button
            onClick={handleOk}
            style={{
              padding: '8px 18px', borderRadius: '9px',
              background: '#DC2626', border: 'none',
              color: '#FFFFFF', fontSize: '13.5px', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
              transition: 'all 0.13s',
              boxShadow: '0 2px 8px rgba(220,38,38,0.30)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#B91C1C'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#DC2626'; }}
          >
            Delete
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translate(-50%, calc(-50% + 14px)) } to { opacity: 1; transform: translate(-50%, -50%) } }
      `}</style>
    </>
  ) : null;

  return { modal, confirm };
};


/* ═══════════════════════════════════════════════════
   TOAST
   Usage:
     const { toasts, toast } = useToast();
     toast.success('Saved!');
     toast.error('Something went wrong');
     ...
     {toasts}
═══════════════════════════════════════════════════ */
const ToastItem = ({ id, type, message, onRemove }) => {
  useEffect(() => {
    const t = setTimeout(() => onRemove(id), 3500);
    return () => clearTimeout(t);
  }, [id, onRemove]);

  const isSuccess = type === 'success';

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '13px 16px',
      background: '#FFFFFF',
      border: `1px solid ${isSuccess ? '#BBF7D0' : '#FECACA'}`,
      borderLeft: `4px solid ${isSuccess ? '#16A34A' : '#DC2626'}`,
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
      minWidth: '260px', maxWidth: '360px',
      animation: 'toastIn 0.22s cubic-bezier(0.34,1.56,0.64,1)',
      fontFamily: 'DM Sans, sans-serif',
    }}>
      <span style={{ fontSize: '16px', flexShrink: 0 }}>{isSuccess ? '✅' : '❌'}</span>
      <span style={{ flex: 1, fontSize: '13.5px', fontWeight: '500', color: '#18181B', lineHeight: '1.4' }}>{message}</span>
      <button
        onClick={() => onRemove(id)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#A1A1AA', fontSize: '16px', lineHeight: 1,
          padding: '0 0 0 4px', flexShrink: 0, display: 'flex', alignItems: 'center',
          transition: 'color 0.1s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#52525B'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#A1A1AA'; }}
      >×</button>
    </div>
  );
};

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const remove = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const add = useCallback((type, message) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, type, message }]);
  }, []);

  const toast = {
    success: (msg) => add('success', msg),
    error:   (msg) => add('error',   msg),
  };

  const toastContainer = (
    <>
      <style>{`@keyframes toastIn { from { opacity:0; transform:translateX(20px) } to { opacity:1; transform:translateX(0) } }`}</style>
      <div style={{
        position: 'fixed', bottom: '24px', right: '24px',
        display: 'flex', flexDirection: 'column', gap: '10px',
        zIndex: 2000, alignItems: 'flex-end',
      }}>
        {toasts.map(t => (
          <ToastItem key={t.id} {...t} onRemove={remove} />
        ))}
      </div>
    </>
  );

  return { toasts: toastContainer, toast };
};