import { css } from '@emotion/react';
import { useNavigate } from 'react-router';

import IconNotFound from '@/assets/icons/error_not_found.svg?react';
import Spacing from '@/ui/Spacing';
import { theme } from '@/styles/theme';
import Button from '@/ui/Button';

export default function Error404() {
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
      <IconNotFound width={200} height={200} />
      <Spacing size={24} />
      <p
        css={css`
          font-size: 16px;
          font-weight: 600;
          color: ${theme.colors.grayDark};
        `}
      >
        찾을 수 없는 페이지입니다.
      </p>
      <Spacing size={36} />
      <div>
        <Button variant="primary" size="large" fullWidth onClick={() => navigate('/')}>
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
