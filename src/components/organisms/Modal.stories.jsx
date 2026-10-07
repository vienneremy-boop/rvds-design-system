import { useState } from 'react';
import { within, userEvent, expect, fn } from 'storybook/test';
import { Modal } from './Modal';

export default {
  title: 'Organisms/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          'Modale 600×520px. Header avec titre Outfit Bold + close button (fond info-bg). Body avec description Outfit + content slot (fond info-bg). Footer avec boutons Annuler + Confirmer. Fermeture Escape + clic overlay.',
      },
    },
  },
  argTypes: {
    open:               { control: 'boolean' },
    title:              { control: 'text' },
    description:        { control: 'text' },
    primaryCta:         { control: 'text' },
    secondaryCta:       { control: 'text' },
    onPrimaryClick:     { control: false },
    onSecondaryClick:   { control: false },
    onClose:            { control: false },
  },
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 20px',
            background: 'var(--color-action-primary)',
            border: 'none',
            borderRadius: 0,
            clipPath: 'var(--cut-s)',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-btn-primary-text)',
          }}
        >
          Ouvrir la modale
        </button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          onSecondaryClick={() => setOpen(false)}
          onPrimaryClick={() => { alert('Confirmé !'); setOpen(false); }}
        />
      </>
    );
  },
  args: {
    title: 'Titre de la modale',
    description: "Contenu de la modale. Utilisez cet espace pour afficher des informations supplémentaires, un formulaire, ou une confirmation d'action importante.",
    primaryCta: 'Confirmer',
    secondaryCta: 'Annuler',
  },
};

export const CloseInteraction = {
  args: {
    open: true,
    title: 'Titre de la modale',
    description: 'Confirmez-vous cette action ?',
    primaryCta: 'Confirmer',
    secondaryCta: 'Annuler',
    onClose: fn(),
    onSecondaryClick: fn(),
    onPrimaryClick: fn(),
  },
  parameters: { layout: 'centered' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // La modale est ouverte — le titre est visible
    await expect(canvas.getByText('Titre de la modale')).toBeInTheDocument();
    // Clic sur le bouton de fermeture ✕
    const closeBtn = canvas.getByRole('button', { name: /fermer|close|✕/i });
    await userEvent.click(closeBtn);
    await expect(args.onClose).toHaveBeenCalledOnce();
  },
};

export const ConfirmInteraction = {
  args: {
    open: true,
    title: 'Supprimer le projet ?',
    description: 'Cette action est irréversible.',
    primaryCta: 'Supprimer',
    secondaryCta: 'Annuler',
    onClose: fn(),
    onSecondaryClick: fn(),
    onPrimaryClick: fn(),
  },
  parameters: { layout: 'centered' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /supprimer/i }));
    await expect(args.onPrimaryClick).toHaveBeenCalledOnce();
    await userEvent.click(canvas.getByRole('button', { name: /annuler/i }));
    await expect(args.onSecondaryClick).toHaveBeenCalledOnce();
  },
};

export const Static = {
  args: {
    open: true,
    title: 'Titre de la modale',
    description: "Contenu de la modale. Utilisez cet espace pour afficher des informations supplémentaires, un formulaire, ou une confirmation d'action importante.",
    primaryCta: 'Confirmer',
    secondaryCta: 'Annuler',
  },
  parameters: { layout: 'centered' },
};
