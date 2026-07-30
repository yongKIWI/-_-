# 개인 Vercel 계정 배포 안내

이 폴더는 OpenAI Sites나 공용 ChatGPT 계정에 의존하지 않는 표준 Next.js 프로젝트입니다.
개인 PC로 폴더를 옮긴 뒤 개인 GitHub와 Vercel 계정으로 배포할 수 있습니다.

## 가장 쉬운 배포 방법

1. 이 폴더의 압축을 풉니다.
2. 개인 GitHub에 새 저장소를 만들고 이 폴더 안의 파일을 모두 올립니다.
3. 개인 Vercel 계정에서 `Add New → Project`를 선택합니다.
4. 방금 만든 GitHub 저장소를 선택합니다.
5. Framework Preset이 `Next.js`인지 확인합니다.
6. 별도 설정을 바꾸지 않고 `Deploy`를 누릅니다.

정상 설정값은 다음과 같습니다.

- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: 비워 두기
- Environment Variables: 최초 배포에는 필요 없음

Vercel은 최초 배포 후 개인 계정 소유의 `*.vercel.app` 주소를 발급합니다.

## GitHub 없이 개인 PC에서 바로 올리는 방법

압축을 푼 프로젝트 폴더에서 아래 명령을 실행합니다.

```powershell
npm ci
npx vercel login
npx vercel --prod
```

로그인할 때 개인 Vercel 계정을 선택하면 해당 계정 소유의 프로젝트로
바로 배포됩니다. 이후 화면에 표시되는 질문에서 프로젝트 위치는 현재
폴더(`./`)를 선택하고 기본 Next.js 설정을 유지합니다.

## 개인 도메인을 연결할 때

개인 도메인을 연결한 뒤 Vercel의 Environment Variables에 다음 값을 추가하고 재배포합니다.

- Name: `NEXT_PUBLIC_SITE_URL`
- Value: `https://개인도메인`

도메인을 연결하지 않으면 Vercel이 제공하는 프로젝트 주소가 자동 사용됩니다.

## 개인 PC에서 수정할 때

Node.js 22를 설치한 뒤 이 폴더에서 아래 순서로 실행합니다.

```powershell
npm ci
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 수정 결과를 확인할 수 있습니다.
배포 전에는 아래 검증을 실행합니다.

```powershell
npm run check
```

## 나중에 추가할 자료

- 익명화한 프로그램·보고서·운영 화면
- 광고기획 AE 이력서 PDF
- 퍼포먼스 마케팅 AE 이력서 PDF

`node_modules`, `.next`, `.vercel`, `.env.local` 폴더와 파일은 GitHub나 압축파일에 넣지 않습니다.
