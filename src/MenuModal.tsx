import { useEffect, useRef, type ReactNode } from 'react';

type MenuModalProps = {
  openModal: boolean;
  closeModal: () => void;
  ariaLabel: string;
  children: ReactNode;
};

function MenuModal({ openModal, closeModal, ariaLabel, children }: MenuModalProps) {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = ref.current;

    if (!dialog || !openModal) return;

    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [openModal]);

  return (
    <dialog className="modal" ref={ref} onCancel={closeModal} onClose={closeModal} aria-label={ariaLabel}>
      {children}
    </dialog>
  );
}

export default MenuModal;
