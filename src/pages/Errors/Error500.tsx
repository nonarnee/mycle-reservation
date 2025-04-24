import { css } from '@emotion/react';
import { useNavigate } from 'react-router';

import IconServerError from '@/assets/icons/error_server.svg?react';
import Spacing from '@/ui/Spacing';
import { theme } from '@/styles/theme';
import Button from '@/ui/Button';

export default function Error500() {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <Spacing size={32} />
      <IconServerError width={120} height={120} />
      <Spacing size={24} />
      <p
        css={css`
          font-size: 16px;
          font-weight: 600;
          color: ${theme.colors.grayDark};
        `}
      >
        서버 오류가 발생했습니다.
      </p>
      <Spacing size={36} />
      <Button variant="primary" size="large" onClick={() => navigate('/')}>
        홈으로 돌아가기
      </Button>
    </div>
  );
}
