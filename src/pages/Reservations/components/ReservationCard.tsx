import { useNavigate } from 'react-router';
import { css } from '@emotion/react';

import PlusCircleIcon from '@/assets/icons/plus_circle.svg?react';
import Badge from '@/ui/Badge';
import Border from '@/ui/Border';
import Spacing from '@/ui/Spacing';
import { multiLineEllipsis, singleLineEllipsis } from '@/styles/mixins';

import styles from './ReservationCard.module.css';

export default function ReservationCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (true) {
      // 취소된 예약 아닌경우
      navigate('/reservations/1');
    }
  };

  return (
    <li className={styles.card} onClick={handleClick}>
      {true && (
        <>
          <Badge variant="danger" size="large">
            취소된 예약
          </Badge>
          <Spacing size={18} />
        </>
      )}

      <div>
        <p className={styles.title} css={multiLineEllipsis(2)}>
          일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공
        </p>

        {true && (
          <>
            <Spacing size={8} />
            <div className={styles.options}>
              <div className={styles.option}>
                <PlusCircleIcon width={16} height={16} />
                <span css={singleLineEllipsis}>연료필터 카트리지</span>
              </div>
              <div className={styles.option}>
                <PlusCircleIcon
                  width={16}
                  height={16}
                  css={css`
                    flex-shrink: 0;
                  `}
                />
                <span css={singleLineEllipsis}>
                  일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <Spacing size={18} />
      <Border />
      <Spacing size={18} />

      <div className={styles.info}>
        <span className={styles.car} css={singleLineEllipsis}>
          일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공
        </span>
        <Badge>3회 방문</Badge>
      </div>

      <Spacing size={8} />

      <div className={styles.customer}>
        <div className={styles.customerInfo}>
          <span>이름</span>
          <span>010-1111-2222</span>
        </div>

        <Spacing size={4} />

        {true && (
          <div className={styles.request} css={multiLineEllipsis(3)}>
            일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공일이삼사오육칠팔구공
          </div>
        )}
      </div>
    </li>
  );
}
