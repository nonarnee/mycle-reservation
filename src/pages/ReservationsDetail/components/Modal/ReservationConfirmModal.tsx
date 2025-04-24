import { css } from '@emotion/react';

import { ReservationDetail } from '@/types/reservation';
import Modal from '@/ui/Modal';
import Button from '@/ui/Button';
import { theme } from '@/styles/theme';

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
  console.log(reservation.serverId);

  return (
    <Modal
      isOpen={isOpen}
      onDimmerClick={close}
      header={<Modal.Header text="예약을 확정할까요?" />}
      cta={
        <Modal.CTA
          primary={
            <Button variant="primary" size="medium" fullWidth onClick={close}>
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
        `}
      >
        고객에게 예약 확정 알림을 보낼게요.
      </div>
    </Modal>
  );
}
