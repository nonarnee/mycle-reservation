import { css } from '@emotion/react';

import { ReservationDetail, ReservationStatus } from '@/types/reservation';
import Modal from '@/ui/Modal';
import Button from '@/ui/Button';
import { theme } from '@/styles/theme';
import { setStatus } from '@/lib/storage/reservationStatus';

interface ReservationConfirmModalProps {
  isOpen: boolean;
  close: () => void;
  reservation: ReservationDetail;
}

export default function ReservationConfirmModal({
  isOpen,
  close,
  reservation,
}: ReservationConfirmModalProps) {
  const handleConfirm = () => {
    setStatus(reservation.serverId, ReservationStatus.CONFIRMED);
    close();
  };

  return (
    <Modal
      isOpen={isOpen}
      onDimmerClick={close}
      header={<Modal.Header text="예약을 확정할까요?" />}
      cta={
        <Modal.CTA
          primary={
            <Button variant="primary" size="medium" fullWidth onClick={handleConfirm}>
              확정하기
            </Button>
          }
          secondary={
            <Button variant="dark" size="medium" fullWidth onClick={close}>
              취소
            </Button>
          }
        />
      }
    >
      <div
        css={css`
          font-size: 15px;
          font-weight: 500;
          color: ${theme.colors.gray};
          white-space: pre-line;
        `}
      >
        고객에게 예약 확정 알림을 보낼게요.
      </div>
    </Modal>
  );
}
