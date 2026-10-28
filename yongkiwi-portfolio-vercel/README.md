# 이용택 AE 포트폴리오

콘텐츠 기획·제작 운영·성과 분석 경험을 하나로 소개하는 AE 포트폴리오입니다. 직무별 관점 선택은 두지 않으며, 기존 `/advertising-ae`와 `/performance-ae` 주소도 동일한 홈으로 연결됩니다.

## 실행

```bash
npm ci
npm run dev
```

## 검증

```bash
npm run check
```

## 배포

개인 계정 이전과 Vercel 배포 방법은 `DEPLOY_VERCEL.md`를 확인하세요.

## 주요 수정 위치

- 경력·성과·프로젝트 데이터: `lib/site-data.ts`
- 메인 화면 구성: `components/PortfolioPage.tsx`
- 상세 프로젝트 화면: `app/projects/[slug]/page.tsx`
- 디자인: `app/globals.css`
- 페이지별 공유 이미지: `app/og/[key]/route.tsx`
- 공유·검색 메타데이터: `lib/site-meta.ts`
