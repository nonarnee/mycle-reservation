# Mycle 예약 관리

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
