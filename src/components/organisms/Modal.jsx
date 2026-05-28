import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export function Modal({
  open = false,
  title = 'Titre de la modale',
  description,
  children,
  primaryCta = 'Confirmer',
  secondaryCta = 'Annuler',
  onPrimaryClick,
  onSecondaryClick,
  onClose,
}) {
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(8,4,26,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        width: '100%',
        height: '100%',
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '600px',
          height: '520px',
          background: 'var(--color-btn-secondary-bg)',
          borderRadius: '24px',
          boxShadow: '0px 24px 64px 0px rgba(26,10,56,0.3)',
          overflow: 'hidden',
  
          flexShrink: 0,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
            padding: '0 32px',
            flexShrink: 0,
          }}
        >
          <p
            id="modal-title"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-text-primary)',
              margin: 0,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </p>
          <button
            onClick={onClose}
            aria-label="Fermer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '100px',
              background: 'var(--color-badge-info-bg)',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              flexShrink: 0,
            }}
          >
            <Icon name="Close" size={20} />
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            height: '340px',
            padding: '32px',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          {description && (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-text-secondary)',
                margin: 0,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              {description}
            </p>
          )}
          <div
            style={{
              flex: 1,
              minHeight: 0,
              background: 'var(--color-badge-info-bg)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {children}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '12px',
            height: '100px',
            padding: '0 32px',
            flexShrink: 0,
          }}
        >
          {secondaryCta && (
            <Button
              variant="secondary"
              size="medium"
              label={secondaryCta}
              onClick={onSecondaryClick || onClose}
            />
          )}
          {primaryCta && (
            <Button
              variant="primary"
              size="medium"
              label={primaryCta}
              onClick={onPrimaryClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  primaryCta: PropTypes.string,
  secondaryCta: PropTypes.string,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default Modal;
