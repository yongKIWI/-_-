# 이용택 Marketing AE 포트폴리오

광고기획 AE와 퍼포먼스 마케팅 AE 두 관점으로 구성한 개인 포트폴리오입니다.

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
- 대표 공유 이미지: `public/og.png`
