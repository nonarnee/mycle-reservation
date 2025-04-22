import Border from '@/ui/Border';
import Dot from '@/ui/Dot';
import Spacing from '@/ui/Spacing';

import styles from './InfoSection.module.css';

export default function InfoSection() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>고객 정보</p>
      <Spacing size={12} />
      <div className={styles.sub}>
        <p className={styles.subTitle}>고객 이름</p>
        <p className={styles.subContent}>김민지</p>
      </div>
      <div className={styles.sub}>
        <p className={styles.subTitle}>전화번호</p>
        <p className={styles.subContent}>010-2012-4913</p>
      </div>

      <Spacing size={12} />
      <Border />
      <Spacing size={12} />

      <p className={styles.title}>차량 정보</p>
      <Spacing size={12} />
      <div className={styles.sub}>
        <p className={styles.subTitle}>차량 정보</p>
        <p className={styles.subContent}>
          기아 <Dot /> 올 뉴 쏘렌토 <Dot /> 휘발유
        </p>
      </div>
      <div className={styles.sub}>
        <p className={styles.subTitle}>차량 번호</p>
        <p className={styles.subContent}>93가1243</p>
      </div>
    </div>
  );
}
