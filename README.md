# MYCLE 예약 요청 관리

## 기술 스택

- **프론트엔드**: react, typescript
- **상태 관리**: react-query, zustand
- **라우팅**: react-router
- **스타일링**: emotion, CSS Modules
- **애니메이션**: motion
- **패키지 관리**: yarn
- **빌드 도구**: vite

## 설치 및 실행

### 실행 환경

- Node.js 20.x 이상
- Yarn 1.22.x 이상

### 설치

```bash
yarn install
```

### API Base URL 설정

```bash
// .env (루트 디렉토리)
VITE_API_BASE_URL=API_URL_입력
```

### 개발 서버 실행

```bash
yarn dev
```

`http://localhost:5173`에서 실행됩니다.

## 프로젝트 구조

```
src/
├── public/           # 이미지, 아이콘 등 정적 파일
│   └── fonts/        # 폰트 파일
├── assets/           # 이미지, 아이콘 등 정적 파일
├── hooks/            # 공통 커스텀 훅
├── lib/              # 스토리지 및 외부 라이브러리 설정
├── pages/            # 페이지 컴포넌트들
│   ├── Errors/             # 에러 페이지
│   │   └── ...
│   ├── Reservations/       # 예약 요청 리스트 페이지
│   │   │── components/       # 예약 요청 리스트에 사용되는 컴포넌트
│   │   │── hooks/            # 예약 요청 리스트에 사용되는 커스텀 훅
│   │   │   │── queries/        # useQuery 커스텀 훅
│   │   │   │── mutations/      # useMutation 커스텀 훅 (생략)
│   │   │   └── ...
│   │   │── stores/           # 예약 요청 리스트에 사용되는 전역 상태
│   │   │── utils/            # 예약 요청 리스트에 사용되는 유틸리티 함수
│   │   └── ReservationPage   # 페이지 컴포넌트
│   ├── ReservationsDetail/ # 예약 상세 정보 페이지
│   │   └── ...
├── styles/           # 전역 스타일 및 테마
├── types/            # 타입 정의
├── ui/               # 공통 UI 컴포넌트
├── utils/            # 공통 유틸리티 함수
├── App.tsx           # 애플리케이션 진입점
└── main.tsx          # React 렌더링 시작점
```

## 상태관리 전략

### 1. API

- API와 1:1로 매칭되는 커스텀 훅 구현
- UI에 맞게 비교적 복잡한 가공이 필요한 경우 추가로 커스텀 훅으로 분리
- useQuery, useInfiniteQuery를 그대로 리턴하여 내부에 있는 fetch 관련 상태값을 컴포넌트에서 활용할 수 있도록 함

### 2. 날짜, 취소된 예약 안보기 필터

- Header 내부, Content 내부에서 각각 사용되기에 Page 컴포넌트에서 상태관리할 경우 prop drilling 가능성 있음
- 추후 유저가 선택한 필터값을 유지하는 등의 수정사항을 고려하여 zustand 기반 전역 상태로 관리

### 3. 모달

- @toss/use-overlay 라이브러리 활용
- 컴포넌트 트리와 독립적으로 작동하여 깊은 중첩에서도 prop drilling 없이 모달 구현 가능
- 모달 인스턴스를 생성하는 커스텀 훅과 실제로 렌더링할 모달 컴포넌트를 분리하여 구현

### 4. 예약 확정/불가

- 사용자가 확정/불가 처리한 예약 상태를 로컬 스토리지의 `reservation-status-map`에 저장
- 로컬 스토리지에 저장된 데이터를 예약 요청 리스트에서 적용

## 주요 데이터 흐름

### 예약 요청 리스트

1. **React Query**를 통한 서버 데이터 요청
2. 해당 날짜에 예약 요청 데이터가 없는 경우 **"예약 요청이 없습니다."** 노출
3. **useFilteredReservation** 훅에서 로컬저장소, 취소여부 기반으로 데이터 가공
4. **groupByReservedTime** 함수에서 시간대 기준으로 그룹화
5. **ReservationCard** 컴포넌트에서 **가공된 예약 요청** 데이터와 **고객 방문 정보** 데이터를 조합하여 화면에 렌더링
6. **useInfiniteQuery** + **IntersectionObserver** 활용하여 무한 스크롤 형태로 다음 페이지 페칭

### 예약 확정/불가

1. 팝업에서 확정하기/예약 불가능 클릭시 로컬 스토리지의 reservation-status-map 에서 **{serverId: 예약상태}** 형태로 저장
2. **useFilteredReservation** 훅에서 로컬 스토리지에 저장되어 있는 값으로 오버라이딩하여 화면에 렌더링

## 스타일링

- 공통 스타일 변수는 emotion theme, css variable 활용
- 공통 UI 컴포넌트 스타일링에 emotion 활용
- 특정 페이지에서 사용되는 컴포넌트 스타일링에 CSS Modules 활용
- 모바일 해상도 대응

## 공통 UI 동작과 검증

- **Button**: `type` 생략 시 `button`입니다. 폼 제출은 `type="submit"`, 초기화는 `type="reset"`을 명시합니다. 기존 variant, size, disabled 및 HTML 속성 전달은 유지합니다.
- **Switch**: `useId`로 인스턴스마다 input/label을 연결하고 명시한 `id`를 우선합니다. 기존 `checked`와 `onClick: () => void` 사용법을 유지하며, onClick은 기존처럼 input의 change 이벤트에서 호출합니다. `aria-label` 또는 `aria-labelledby`로 이름을 제공해야 합니다. 예약 필터에는 “취소된 예약 안보기”를 적용했습니다. Tab으로 접근하고 Space로 변경하며 키보드 포커스 테두리를 표시합니다.
- **Modal**: `Modal.Header`, `Modal.CTA`, header/cta 조합을 유지합니다. `role="dialog"`, `aria-modal`과 header 연결로 이름을 제공합니다. 사용자 정의 제목은 `aria-labelledby`, 제목 없는 모달은 `aria-label`을 전달합니다. 열릴 때 첫 번째 활성 컨트롤로 이동하며 현재 예약 모달에서는 취소 버튼입니다. 컨트롤이 없으면 dialog 자체에 포커스합니다. Tab/Shift+Tab으로 내부 포커스를 순환합니다.
- **닫기 정책**: 배경 클릭은 기존 `onDimmerClick`, Escape는 선택적 `onClose`를 호출합니다. `onClose`가 없으면 Escape로 닫지 않습니다. 두 예약 모달에는 `onClose={close}`를 연결했습니다. 모달 내부 클릭은 배경 클릭으로 처리하지 않습니다.
- **생명주기**: 설치된 `@toss/use-overlay`는 Provider 자식 옆에 overlay를 렌더링하고, close는 `isOpen`을 false로 바꾸며 exit/호출부 unmount가 overlay를 제거합니다. 별도 portal이나 전역 키보드 이벤트를 추가하지 않았습니다. 열려 있는 동안 모달을 포함하지 않는 조상별 형제 요소에 `inert`를 적용하고 body 스크롤을 잠급니다. 닫힘과 unmount 시 기존 inert 속성과 overflow 값·우선순위를 복원하며, 호출 요소가 DOM에 남아 있으면 포커스를 돌려줍니다.
- 예약 확정/불가는 기존 로컬 스토리지 처리 그대로이며 서버 상태 변경이나 실제 알림 발송은 추가하지 않았습니다.

### 검증 명령

```bash
yarn test
yarn typecheck
yarn lint
yarn build
```

Vitest + Testing Library + jsdom의 사용자 조작 테스트 7개로 다음을 확인했습니다.

- Button 기본 클릭의 제출 방지, 명시적 submit/reset, disabled와 HTML 속성 전달
- Switch 두 개의 독립적인 label 클릭, 고유·사용자 지정 ID, Tab/Space 조작
- 실제 OverlayProvider와 StrictMode에서 모달 이름, 초기 포커스, 양방향 순환, Escape 닫힘, 재열기와 포커스 복원
- 컨트롤 0개/1개, 숨김·disabled 컨트롤 제외, 배경 클릭과 Escape 정책 분리
- isOpen 변경과 unmount의 정리, 제거된 호출 요소, 기존 inert/overflow 복원, 사용자 정의 제목 연결

타입 검사, lint, build는 통과했습니다. 기존 ESLint 설정은 build 후 dist까지 검사하는 문제가 있어 산출물을 전역 제외하도록 수정했습니다. 500KB 초과 번들 경고는 변경 전·후 모두 발생하며 이번 범위에서 번들 분할은 하지 않았습니다.

### 남은 제약

- 한 번에 하나의 모달을 전제로 합니다. 중첩·동시 모달의 포커스 및 잠금 소유권은 지원하지 않습니다.
- 배경 차단은 브라우저의 native inert 지원을 전제로 합니다. jsdom에서는 속성 적용·복원만 검증했으며 실제 브라우저의 배경 조작 차단을 검증한 것은 아닙니다.
- 실제 브라우저 자동화 도구의 Windows 런타임 초기화 오류로 브라우저 키보드·시각 회귀·모바일 스크롤·스크린리더 검증은 수행하지 못했습니다. 위 결과는 접근성 전체 준수를 의미하지 않습니다.
