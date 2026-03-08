import React, { useState, useRef } from 'react';

const ImageUpload = ({ onFileSelect, previewUrl: externalPreview }) => {
  const [dragOver, setDragOver] = useState(false);
  const [localPreview, setLocalPreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const inputRef = useRef(null);

  const displayPreview = localPreview || externalPreview || null;

  const processFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setLocalPreview(e.target.result);
      setFileName(file.name);
      onFileSelect(file, e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => processFile(e.target.files[0]);
  const handleDrop = (e) => { e.preventDefault(); setDragOver(false); processFile(e.dataTransfer.files[0]); };
  const handleRemove = (e) => {
    e.stopPropagation();
    setLocalPreview(null); setFileName('');
    inputRef.current.value = '';
    onFileSelect(null, null);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', flexWrap: 'wrap' }}>
      {/* Square preview */}
      <div style={{ flexShrink: 0 }}>
        <div style={{
          width: '110px', height: '110px', borderRadius: '12px',
          border: displayPreview ? '1.5px solid #E4E4E7' : '2px dashed #D4D4D8',
          overflow: 'hidden',
          background: displayPreview ? 'transparent' : '#FAFAFA',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: displayPreview ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'box-shadow 0.2s',
        }}>
          {displayPreview
            ? <img src={displayPreview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            : <span style={{ fontSize: '28px' }}>🖼️</span>
          }
        </div>
        <div style={{ marginTop: '7px', textAlign: 'center' }}>
          {localPreview ? (
            <span style={{ fontSize: '10px', fontWeight: '600', color: '#166534', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '99px', padding: '2px 8px', fontFamily: 'DM Sans, sans-serif' }}>✓ Ready</span>
          ) : externalPreview ? (
            <span style={{ fontSize: '10px', fontWeight: '600', color: '#1D4ED8', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '99px', padding: '2px 8px', fontFamily: 'DM Sans, sans-serif' }}>Current</span>
          ) : (
            <span style={{ fontSize: '10px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>No image</span>
          )}
        </div>
      </div>

      {/* Drop zone */}
      <div style={{ flex: 1, minWidth: '180px' }}>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${dragOver ? '#3B82F6' : displayPreview ? '#BBF7D0' : '#D4D4D8'}`,
            borderRadius: '10px', padding: '20px 18px', textAlign: 'center',
            cursor: 'pointer',
            background: dragOver ? '#EFF6FF' : displayPreview ? '#F0FDF4' : '#FAFAFA',
            transition: 'all 0.15s', userSelect: 'none',
            marginBottom: fileName ? '9px' : '0',
          }}
        >
          <div style={{ fontSize: '20px', marginBottom: '5px' }}>{dragOver ? '📥' : displayPreview ? '🔄' : '⬆'}</div>
          <p style={{ fontSize: '13px', fontWeight: '500', color: displayPreview ? '#166534' : '#52525B', fontFamily: 'DM Sans, sans-serif', marginBottom: '2px' }}>
            {displayPreview ? 'Click to replace' : 'Click to upload or drag & drop'}
          </p>
          <p style={{ fontSize: '11px', color: '#A1A1AA', fontFamily: 'DM Sans, sans-serif' }}>PNG, JPG, GIF up to 10MB</p>
        </div>

        {fileName && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 11px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px' }}>
            <span style={{ fontSize: '12px' }}>📄</span>
            <span style={{ flex: 1, fontSize: '12px', fontWeight: '500', color: '#166534', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{fileName}</span>
            <button type="button" onClick={handleRemove} className="btn btn-danger btn-sm btn-icon" style={{ flexShrink: 0 }}>✕</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;