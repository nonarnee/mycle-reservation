import { css } from '@emotion/react';

import PlusCircleIcon from '@/assets/icons/plus_circle.svg?react';
import Spacing from '@/ui/Spacing';

import styles from './ProductSection.module.css';

export default function ProductSection() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.groupName}>상품 그룹명</p>
      <Spacing size={4} />
      <p className={styles.productName}>상품명</p>

      <Spacing size={12} />

      <ul className={styles.options}>
        <li className={styles.option}>
          <PlusCircleIcon
            width={16}
            height={16}
            css={css`
              flex-shrink: 0;
            `}
          />
          <span>추가 상품</span>
        </li>
        <li className={styles.option}>
          <PlusCircleIcon
            width={16}
            height={16}
            css={css`
              flex-shrink: 0;
            `}
          />
          <span>추가 상품</span>
        </li>
      </ul>

      <Spacing size={16} />

      <div className={styles.request}>
        <p className={styles.requestTitle}>요청사항</p>
        <p className={styles.requestContent}>요청사항 내용</p>
      </div>
    </div>
  );
}
