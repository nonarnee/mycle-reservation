import { css } from '@emotion/react';

import { ReservationDetail } from '@/types/reservation';
import Button from '@/ui/Button';
import Modal from '@/ui/Modal';
import { theme } from '@/styles/theme';

interface ReservationConfirmModalProps {
  isOpen: boolean;
  close: () => void;
  reservation: ReservationDetail;
}

export default function ReservationDeferModal({
  isOpen,
  close,
  reservation,
}: ReservationConfirmModalProps) {
  console.log(reservation.serverId);

  return (
    <Modal
      isOpen={isOpen}
      onDimmerClick={close}
      header={<Modal.Header text="작업이 어려우신가요?" />}
      cta={
        <Modal.CTA
          primary={
            <Button variant="primary" size="medium" fullWidth onClick={close}>
              예약 불가능
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
        고객의 신뢰 유지를 위해 예약이 불가능한 시간은 미리 표시해주세요.
      </div>
    </Modal>
  );
}
