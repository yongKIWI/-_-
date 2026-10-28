export const commonMetrics = [
  {
    value: "4시간 → 약 30분",
    label: "90건 무인 제작·검수 · 설정 5~10분 별도 (수정필요 51)",
    project: "operations-transformation",
    compact: true,
  },
  {
    value: "월 약 8,200건",
    label: "업체 50~60개 · 1인이 제작·배포 관리 (수정필요 52)",
    project: "operations-transformation",
    compact: true,
  },
  {
    value: "1~5% → 40~60%",
    label: "실수요 키워드 TOP 7 진입률 (수정필요 53)",
    project: "keyword-performance",
    compact: true,
  },
  {
    value: "주 3~4회 → 0회",
    label: "순위 조사·보고 자동화 후 본인 야근 (수정필요 54)",
    project: "rank-monitoring",
    compact: true,
  },
] as const;

export const processSteps = [
  {
    title: "OBSERVE (수정필요 55)",
    korean: "문제 발견",
    description: "반복 작업·지연·업체 불편 확인",
  },
  {
    title: "DEFINE (수정필요 56)",
    korean: "기준 정의",
    description: "시간·처리량·노출률로 문제 측정",
  },
  {
    title: "BUILD (수정필요 57)",
    korean: "도구 구현",
    description: "실무에 맞는 기능·입출력 설계",
  },
  {
    title: "OPERATE (수정필요 58)",
    korean: "실무 운영",
    description: "업체 업무 적용·주간 결과 확인",
  },
  {
    title: "IMPROVE (수정필요 59)",
    korean: "지속 개선",
    description: "요청·플랫폼 변경 반영 및 검증",
  },
] as const;

export const supportingSystems = [
  "SEO 키워드 리서치·경쟁도 분석",
  "블로그 콘텐츠 제작 자동화",
  "제목·원고·이미지 품질 검수",
  "키워드 순위 확인 프로그램",
  "Google Sheets 관리 시트 자동 생성",
  "운영 대시보드와 매뉴얼",
] as const;

export const careers = [
  {
    period: "2025.09 — 현재",
    status: "재직 중",
    company: "웨이팅리스트",
    team: "1팀(네이버마케팅팀) · 사원 · 블로그 기획·운영 (수정필요 60)",
    description:
      "업체 대표와 콘텐츠 방향 협의, 제작·배포 관리·성과 보고 담당. 촬영팀·외부 실행사 조율과 Codex를 활용한 반복 업무 자동화. (수정필요 251)",
  },
  {
    period: "2024.08 — 2025.03",
    status: "8개월",
    company: "대덕넷",
    team: "전략사업부 인턴 · 행사 기획·운영 지원 (수정필요 260)",
    description:
      "과학기술 행사 조사·프로그램 구성·협력업체 연락·PT·현장 운영·결과보고 지원. 과학·산업 조간 브리핑 80건 이상 작성. (수정필요 252)",
  },
] as const;

export const selectedBackground = [
  {
    period: "2019.03 — 2025.02",
    status: "학사",
    title: "한남대학교",
    subtitle: "광고홍보학 전공 · 정치언론학 복수전공",
    description:
      "광고 전략·미디어 이론 학습, 캠페인 기획·콘텐츠 제작. (수정필요 61)",
  },
  {
    period: "2023 · 2024",
    status: "2회 수상",
    title: "KOSAC 챌린저상 (수정필요 62)",
    subtitle: "한국대학생광고대회 · 문화체육관광부",
    description:
      "2023 분리수거 인식 개선 캠페인 문제 정의·기획. 2024 청소년 도박 방지 캠페인 팀장으로 타깃·메시지·IMC 전략 기획. (수정필요 253)",
  },
  {
    period: "2023.07",
    status: "우수작 선정",
    title: "KOBACO 옥외광고 실무과정",
    subtitle: "한국방송광고진흥공사",
    description:
      "15일·90시간 팀 광고 기획·촬영·제작. 우수작으로 선정돼 서울–인천공항 고속도로 야립광고판에 1주간 게시. (수정필요 254)",
  },
  {
    period: "2025.08",
    status: "자격",
    title: "GA4 자격인증",
    subtitle: "Google Analytics",
    description:
      "Google Analytics 데이터 분석·성과 측정 자격 취득. (수정필요 63)",
  },
] as const;

export type Project = {
  slug: string;
  category: string;
  shortTitle: string;
  cardTitle?: string;
  title: string;
  summary: string;
  scopeNote?: string;
  cardSummary?: string;
  brief: {
    challenge: string;
    decision: string;
    ownership: string;
    outcome: string;
  };
  role: string;
  contribution: string;
  operationPeriod: string;
  tools: string[];
  tags: string[];
  cardMetric: { label: string; value: string };
  metrics: { label: string; value: string }[];
  problem: string[];
  judgment: string;
  execution: string[];
  improvementMethods?: {
    label: string;
    title: string;
    description: string;
    steps: string[];
    example: string;
  }[];
  clientExample?: { title: string; context: string; action: string; outcome: string };
  decisionCase?: {
    label: string;
    title: string;
    description: string;
    steps: {
      label: string;
      title: string;
      description: string;
    }[];
    disclosure?: string;
  };
  experiments?: {
    period: string;
    title: string;
    status: "채택" | "롤백";
    signal: string;
    hypothesis: string;
    control: string;
    variants: {
      label: string;
      description: string;
      sampleSize: string;
      topSevenCount: string;
      rate: string;
    }[];
    difference: string;
    decision: string;
  }[];
  experimentProtocol?: {
    label: string;
    value: string;
  }[];
  performanceTracking?: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
    dimensions: { label: string; title: string; description: string }[];
    trend: {
      label: string;
      topSeven: number;
      newEntries: number;
      dropouts: number;
      status?: string;
    }[];
    note: string;
  };
  evidence: { label: string; before: string; after: string }[];
  results: string[];
  featuredProofIndex?: number;
  proofs: {
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    };
    captureGuide?: string;
  }[];
  measurement: string;
  learning: string;
};

export const projects: Project[] = [
  {
    slug: "operations-transformation",
    category: "콘텐츠 운영 · 업무 자동화",
    shortTitle: "블로그 제작·검수 자동화 (수정필요 64)",
    cardTitle: "업체별 맞춤 제작 통합앱 (수정필요 65)",
    title: "업체별 맞춤 제작·검수 자동화 (수정필요 66)",
    summary:
      "업체별 조건에 맞춰 네이버 블로그용 원고·이미지·사진 기반 영상을 제작하고 검수하는 통합앱을 만들었습니다. (수정필요 67)",
    scopeNote: "제작 1건은 원고·이미지·영상 묶음입니다. 설정 5~10분 후 무인 실행하며, 실제 게시 작업은 외부 실행사가 담당합니다.",
    cardSummary:
      "업체별 요청을 제작 조건으로 설정하고, 원고·이미지·영상 제작과 검수를 자동화했습니다. (수정필요 68)",
    brief: {
      challenge: "제작 수작업으로 인한 발행 지연·품질 편차·요청 대응 지연.",
      decision: "공통 제작·검수 자동화, 업체별 작성 조건 분리.",
      ownership: "업체 협의, 통합앱 1인 기획·개발·운영, 촬영팀·외부 실행사 조율.",
      outcome: "90건 약 30분 무인 제작·검수. 1인이 월 약 8,200건 제작·배포 관리.",
    },
    role: "업체 협의 · 콘텐츠 기획·운영 · 제작 자동화 (수정필요 69)",
    contribution: "1인 기획·개발·운영·유지보수 (수정필요 70)",
    operationPeriod:
      "2025.10 실무 도입 · 2025.11 이후 월 약 8,200건 운영 (수정필요 71)",
    tools: ["OpenAI API", "Google Sheets", "Apps Script", "내부 업무용 GUI"],
    tags: ["Client Communication", "Workflow Design", "Workflow Automation"],
    cardMetric: { label: "월 제작·배포 관리량", value: "2,000 → 8,200" },
    metrics: [
      { label: "운영 인원", value: "2~3명 → 1명" },
      { label: "월 제작·배포 관리량 · 기존 약 2,000건", value: "약 8,200건" },
      { label: "90건 제작 · 기존 4시간 수작업", value: "약 30분 무인 실행 (수정필요 72)" },
      { label: "담당 업체 · 기존 20~30개", value: "50~60개" },
    ],
    problem: [
      "원고·제목·이미지와 검수를 수작업으로 처리해, 업체별 요청 반영이 밀렸습니다.",
      "2~3명이 야근하며 20~30개 업체의 월 약 2,000건을 처리했습니다.",
      "발행 지연과 품질 편차로 수정 요청·클레임이 늘었습니다. (수정필요 73)",
    ],
    judgment:
      "공통 제작·검수는 자동화하고, 문체·필수 내용·키워드는 업체별로 설정하도록 설계했습니다. (수정필요 74)",
    execution: [],
    clientExample: {
      title: "고단가 메뉴 홍보를 위한 키워드·콘텐츠 조정 (수정필요 261)",
      context: "업체 대표가 고단가 메뉴의 홍보를 요청했습니다. (수정필요 262)",
      action: "관련 키워드·콘텐츠 비중 확대를 협의하고, 통합앱의 제작 설정과 실행사 게시 가이드에 반영했습니다. (수정필요 263)",
      outcome: "관련 검색 노출과 업체의 긍정적 반응을 확인했습니다. 매출 증가액은 확인하지 않았습니다. (수정필요 264)",
    },
    decisionCase: {
      label: "제작·배포 과정 (수정필요 82)",
      title: "콘텐츠 협의부터 대량 제작까지 (수정필요 83)",
      description:
        "반복 작업은 자동화하고, 업체별 요구는 설정으로 분리했습니다. (수정필요 84)",
      steps: [
        {
          label: "01 · 방향 협의 (수정필요 85)",
          title: "홍보 내용·키워드 확인 (수정필요 86)",
          description:
            "대표와 홍보 내용·키워드·시즌 주제를 협의했습니다. 수정 요청·클레임도 반영해 업체별 작성 규칙으로 저장했습니다. (수정필요 255)",
        },
        {
          label: "02 · 통합앱 설계 (수정필요 87)",
          title: "제작·검수 연결 (수정필요 88)",
          description:
            "입출력·예외·검수 기준을 정하고 Codex로 구현했습니다. 원고 TXT·사진 약 15장·사진 기반 동영상을 만들고, 규칙 검사 → 의심 원고 API 보정 → 재검사를 연결했습니다. (수정필요 256)",
        },
        {
          label: "03 · 자동 실행 (수정필요 89)",
          title: "사전 설정 후 무인 제작 (수정필요 90)",
          description:
            "5~10분 설정 후 90건을 약 30분간 자동 제작·검수합니다. 그동안 업체 응대·분석을 진행하고, 완성본은 외부 실행사에 전달해 게시 일정·품질을 관리합니다. (수정필요 257)",
        },
        {
          label: "04 · 요청 반영 (수정필요 91)",
          title: "제작 설정·게시 가이드 수정 (수정필요 92)",
          description:
            "업체 요청과 플랫폼 변화에 맞춰 문체·키워드·필수 내용을 바꾸고, 다음 제작과 실행사 가이드에 반영했습니다. (수정필요 258)",
        },
      ],
    },
    evidence: [
      { label: "운영 인원", before: "2~3명", after: "1명" },
      { label: "운영 업체", before: "20~30개", after: "50~60개" },
      { label: "월 제작·배포 관리량", before: "약 2,000건", after: "약 8,200건" },
      { label: "90건 제작 방식", before: "4시간 수작업", after: "약 30분 자동 실행" },
    ],
    results: [
      "제작·검수를 무인 실행해, 사람이 건별 작업에 투입되던 시간을 줄였습니다. (수정필요 93)",
      "확보한 시간은 업체 요청 대응·신규 업체 운영 준비·키워드 분석·콘텐츠 실험에 사용했습니다. (수정필요 94)",
      "설정 변경으로 세부 요청을 대량 제작에 반영하며 발행 지연과 품질 클레임을 줄였습니다. (수정필요 95)",
    ],
    featuredProofIndex: 0,
    proofs: [
      {
        title: "콘텐츠 제작·검수 통합앱",
        description:
          "사진 분류·원고 변환·검수·제목 수정·후속 작업을 연결한 통합앱.",
        image: {
          src: "/evidence/kiwi-workflow-dashboard.png",
          alt: "사진 분류부터 원고 변환, 검수와 제목 수정까지 다섯 단계로 연결한 KIWI Workflow Suite 대시보드",
          caption:
            "업체 정보가 포함되지 않은 실제 기본 화면 · 5단계 통합 워크플로",
          width: 1323,
          height: 863,
        },
      },
      {
        title: "업체별 배포 통합 관리 시트",
        description:
          "58개 업체의 월 목표·진행률·미완료 수량·시작/종료일·월간 총 배포량 관리.",
        image: {
          src: "/evidence/distribution-management-dashboard.png",
          alt: "58개 업체의 월 목표, 배포 진행률, 미완료 수량, 시작일과 종료일을 한 화면에서 관리한 통합 배포 시트",
          caption:
            "실제 운영 화면 · 58개 업체·월별 목표·진행률·마감 일정 통합 관리",
          width: 1915,
          height: 916,
        },
      },
    ],
    measurement:
      "90건 기준: 기존 약 4시간은 수작업, 현재 약 30분은 무인 실행 시간입니다. 사전 설정 5~10분과 외부 실행사의 게시 시간은 별도입니다. 월 약 8,200건은 최대 처리량이 아닌 실제 제작·배포 관리량입니다. 도입 전 샘플 검토 후 규칙 검사·API 보정·재검사로 건별 수동 검수를 대체했으며, 출력 정확성 100%를 뜻하지 않습니다.",
    learning:
      "업체별 설정을 분리해 두니, 맞춤 요청에도 제작량을 유지하며 대응할 수 있었습니다. (수정필요 96)",
  },
  {
    slug: "keyword-performance",
    category: "네이버 콘텐츠 SEO · A/B 테스트 (수정필요 97)",
    shortTitle: "키워드 전략·콘텐츠 SEO 개선 (수정필요 98)",
    title: "키워드 전략과 콘텐츠 실험으로 개선한 검색 노출 (수정필요 99)",
    summary:
      "검색량·경쟁도로 발행 대상을 선별하고, 콘텐츠 실험과 플랫폼 변화 대응으로 실수요 키워드의 상위 노출을 개선했습니다. (수정필요 100)",
    cardSummary:
      "키워드 선별 → 콘텐츠 실험 → 주간 순위 추적 (수정필요 101)",
    scopeNote: "진입률은 업체별 월 발행 실수요 키워드 중 네이버 통합검색 콘텐츠 1~7위에 한 번 이상 노출된 비율입니다. 누적 조사 키워드 전체를 분모로 삼지 않습니다.",
    brief: {
      challenge: "수요·경쟁도 확인 없이 발행. 실수요 키워드 TOP 7 진입률 약 1~5%.",
      decision: "키워드는 수요·경쟁도로 선별, 제작 방식은 단일 변수 실험으로 검증.",
      ownership: "키워드 전략·SERP 분석·실험·순위 추적·제작 기준 변경.",
      outcome: "선별·콘텐츠 개선·플랫폼 대응 후 진입률 약 40~60%. 소개한 세 실험은 후속 개선 사례.",
    },
    role: "키워드 전략 · SERP 분석 · 콘텐츠 실험 · 성과 측정 (수정필요 102)",
    contribution: "1인 분석·실험 설계·실행·검증 (수정필요 103)",
    operationPeriod:
      "2025.10 적용 · 이후 선별·제작 기준 개선 (수정필요 104)",
    tools: ["키워드 분석 도구", "Excel", "Google Sheets", "내부 콘텐츠 앱"],
    tags: ["Naver Content SEO", "Keyword Research", "SERP Analysis", "Content Experimentation"],
    cardMetric: {
      label: "실수요 키워드 TOP 7 진입률",
      value: "1~5% → 40~60%",
    },
    metrics: [
      { label: "실수요 키워드 TOP 7 진입률 (수정필요 105) (수정필요 106)", value: "1~5% → 40~60%" },
      { label: "전체 업체 TOP 7 키워드 · 주간 최대 (수정필요 107)", value: "7,248개" },
      { label: "단일 업체 TOP 7 키워드 · 주간 최대 (수정필요 108)", value: "248개" },
      { label: "주간 랭크 트래킹 자동 조사량", value: "1회 1.4만 건" },
    ],
    problem: [
      "검색량·경쟁도 확인 없이, 수요가 없거나 상위 노출이 어려운 키워드까지 발행했습니다.",
      "순위·신규 진입·이탈 기록이 없어 키워드와 콘텐츠의 효과를 비교하기 어려웠습니다. (수정필요 109)",
      "스마트블록 등 검색 노출 영역이 반복적으로 바뀌었습니다.",
    ],
    judgment:
      "홍보 목적·검색량·SERP(검색결과 페이지) 경쟁도로 키워드를 골랐습니다. 제작 방식은 별도의 단일 변수 실험으로 비교했습니다. (수정필요 110)",
    execution: [
      "후보 발굴: 홍보 목적에 맞춰 생성형 AI로 업체별 1회 약 1만~2만 개 키워드 생성. (수정필요 259)",
      "수요·경쟁 검증: 자체 네이버 검색광고 API 도구로 검색량 확인. 도입을 건의해 승인받은 상용 솔루션으로 SERP 경쟁도 분석. (수정필요 111)",
      "성과 측정: TOP 7 수·신규 진입·이탈·월 진입률 기록. 검색량과 순위를 반영한 가중 점수 설계. (수정필요 112)",
      "경쟁 기준 변경: 외부 블로그 지수 중단 후, 실노출 기반 외부 점수와 발행 블로그의 점수 분포로 비교 기준 재설정.",
      "순위 추적: 과거 발행 키워드까지 매주 확인해 변화·이상 징후 파악.",
      "실험 가설: 노출 하락 시 SERP의 원고 구성·제목·이미지 수를 비교해 상위 콘텐츠의 공통점 추출. (수정필요 113)",
    ],
    clientExample: {
      title: "스마트블록을 활용한 메인 키워드 노출 제안 (수정필요 265)",
      context: "업체는 메인 키워드 노출을 원했지만, 당시 기자단 상품으로는 직접 진입이 어려웠습니다. (수정필요 266)",
      action: "메인 키워드의 스마트블록에 맞춰 롱테일 키워드 약 20~30개를 조합하고, 세부 검색 의도에 맞는 발행을 제안했습니다. (수정필요 267)",
      outcome: "해당 스마트블록에서 반복 노출을 관찰했습니다. 플레이스는 별도 담당자의 업무로, 블로그의 순위 기여는 확인할 수 없다고 사전 안내했습니다. 아래 축소 대응은 이후의 별도 사례입니다. (수정필요 268)",
    },
    decisionCase: {
      label: "플랫폼 변화 대응 (수정필요 192)",
      title: "스마트블록 축소에 따른 선별 기준 변경 (수정필요 193)",
      description:
        "메인 키워드에 세부 조건을 붙여 노출하던 스마트블록 영역이 급감해, 기존 발행 전략을 재검토했습니다. (수정필요 194)",
      steps: [
        {
          label: "01 · 변화 감지 (수정필요 195)",
          title: "노출 경로 변화 감지",
          description:
            "주간 상위 노출 수 급감을 확인하고 SERP 구성을 점검했습니다.",
        },
        {
          label: "02 · 발행 중단 (수정필요 196)",
          title: "기존 방식의 신규 발행 중단",
          description:
            "스마트블록 노출을 기대해 선정한 키워드의 신규 발행을 중단했습니다. (수정필요 197)",
        },
        {
          label: "03 · 기준 변경 (수정필요 198)",
          title: "남은 검색 영역의 경쟁도 재평가 (수정필요 199)",
          description:
            "스마트블록 가능성을 제외하고, 검색량과 인기글 등 남은 상위 콘텐츠의 경쟁도로 발행 대상을 다시 골랐습니다. (수정필요 200)",
        },
        {
          label: "04 · 성과 추적 (수정필요 201)",
          title: "후속 발행으로 회복 확인",
          description:
            "수정 기준으로 발행한 뒤 신규 진입·이탈과 가중 점수를 매주 비교하며 회복 추이를 확인했습니다. (수정필요 202)",
        },
      ],
      disclosure:
        "노출 영역 변화에는 키워드 전략으로, 프로그램 오류에는 원인 분석·수정으로 대응했습니다. (수정필요 203)",
    },
    experiments: [
      {
        period: "2026.03 · 2주차",
        title: "이미지 수 테스트",
        status: "채택",
        signal:
          "진입 성과가 하락한 시기에 SERP 상위 콘텐츠에서 이미지가 많은 경향을 발견했습니다. (수정필요 117)",
        hypothesis:
          "다른 조건이 같을 때, 이미지 15장이 10장보다 진입률이 높을 것이다.",
        control:
          "동일 업체 · 동일 원고 엔진 · 동일 키워드 · 동시 발행 / 이미지 수만 변경",
        variants: [
          {
            label: "A",
            description: "이미지 10장",
            sampleSize: "120건",
            topSevenCount: "41건 진입",
            rate: "34.2%",
          },
          {
            label: "B",
            description: "이미지 15장",
            sampleSize: "120건",
            topSevenCount: "76건 진입",
            rate: "63.3%",
          },
        ],
        difference: "B안 +29.2%p",
        decision:
          "결과 확인 직후 프로그램·사용법을 이미지 15장 기본값으로 변경했습니다.",
      },
      {
        period: "2026.05 · 1주차",
        title: "소제목·인용구 테스트",
        status: "롤백",
        signal:
          "여러 업체의 진입 성과가 정체돼 원고 구성을 점검했습니다. (수정필요 118)",
        hypothesis:
          "SERP 상위 후기에서 자주 보이는 소제목·인용구가 진입률 개선에 도움이 될지 비교했습니다. (수정필요 119)",
        control:
          "기타 발행 조건 고정 / 소제목·인용구를 반영한 신규 원고 엔진만 비교",
        variants: [
          {
            label: "A",
            description: "기존 원고 엔진",
            sampleSize: "120건",
            topSevenCount: "64건 진입",
            rate: "53.3%",
          },
          {
            label: "B",
            description: "소제목·인용구 적용 엔진",
            sampleSize: "120건",
            topSevenCount: "66건 진입",
            rate: "55.0%",
          },
        ],
        difference: "B안 +1.7%p",
        decision:
          "차이가 제작 기준을 바꿀 만큼 크지 않다고 판단해 신규안을 롤백했습니다.",
      },
      {
        period: "2026.06 · 2주차",
        title: "원고 엔진 테스트",
        status: "채택",
        signal:
          "상위 노출이 약 100건에서 30건으로 급감했습니다. SERP 상위 글에는 광고성 표현·반복 문체가 적어, 원고 생성 방식을 비교했습니다. (수정필요 120)",
        hypothesis:
          "다양성보다 자연스러운 문체를 우선하면 진입률이 높아질 것이다.",
        control:
          "동일 이미지 · 동일 키워드 · 동일 업체 조건 / 4개 업체에서 원고 엔진만 변경",
        variants: [
          {
            label: "A",
            description: "기존 다양성 중심 엔진",
            sampleSize: "500건",
            topSevenCount: "212건 진입",
            rate: "42.4%",
          },
          {
            label: "B",
            description: "자연스러움 중심 신규 엔진",
            sampleSize: "500건",
            topSevenCount: "367건 진입",
            rate: "73.4%",
          },
        ],
        difference: "B안 +31.0%p",
        decision:
          "결과 확인 직후 자연스러움 중심 엔진을 프로그램·사용법의 기본값으로 채택했습니다.",
      },
    ],
    experimentProtocol: [
      {
        label: "측정 대상",
        value: "각 변형안에 사용한 모든 키워드를 개별 추적",
      },
      {
        label: "관찰 기간",
        value: "순차 발행을 포함해 총 4주간 주 1회 확인",
      },
      {
        label: "진입 판정",
        value: "관찰 기간 중 1회 이상 네이버 통합검색 콘텐츠 영역 TOP 7 진입 (수정필요 121)",
      },
      {
        label: "운영 반영",
        value: "4주 누적 결과 확인 직후 프로그램·사용법 변경",
      },
    ],
    performanceTracking: {
      title: "주간 순위·신규 진입·이탈 추적 (수정필요 122)",
      description:
        "과거 발행 키워드까지 추적하고, 검색량·순위 가중 점수로 노출의 질을 함께 비교했습니다. (수정필요 123)",
      metrics: [
        { label: "실제 성과 추적 기간", value: "2025.12~2026.08" },
        { label: "관찰 범위", value: "누적 75개 업체" },
        { label: "현재 1회 조사량 · 2026.10", value: "약 1.4만 건" },
        { label: "월 발행 실수요 키워드 기준 (수정필요 124)", value: "1~7위 진입률 40~60%" },
      ],
      dimensions: [
        {
          label: "01 · 노출 규모 (수정필요 125)",
          title: "TOP 7 키워드 수 (수정필요 126)",
          description: "매주 네이버 통합검색 콘텐츠 영역 1~7위에 노출된 키워드 수. (수정필요 127)",
        },
        {
          label: "02 · 주간 변동 (수정필요 128)",
          title: "신규 진입·이탈 (수정필요 129)",
          description: "전주 대비 TOP 7에 새로 진입하거나 이탈한 키워드. (수정필요 130)",
        },
        {
          label: "03 · 가중 점수 (수정필요 131)",
          title: "검색량·순위 가중 점수 (수정필요 132)",
          description: "검색량·순위에 가중치를 적용해, 같은 키워드 수에서도 검색 수요와 노출 순위의 차이를 비교. (수정필요 133)",
        },
        {
          label: "04 · 발행 성과 (수정필요 134)",
          title: "월 발행 실수요 키워드 TOP 7 진입률 (수정필요 135)",
          description: "업체별 월 발행 실수요 키워드 중 콘텐츠가 TOP 7에 한 번 이상 진입한 비율. (수정필요 136)",
        },
      ],
      trend: [
        { label: "06.08", topSeven: 4573, newEntries: 1283, dropouts: 960 },
        { label: "06.15", topSeven: 2895, newEntries: 768, dropouts: 2445, status: "이상 징후 감지" },
        { label: "06.22", topSeven: 2828, newEntries: 750, dropouts: 818, status: "1주 내 대응" },
        { label: "06.29", topSeven: 3035, newEntries: 903, dropouts: 695 },
        { label: "07.07", topSeven: 2823, newEntries: 613, dropouts: 825 },
        { label: "07.13", topSeven: 3740, newEntries: 1645, dropouts: 728, status: "후속 발행 반영" },
        { label: "07.21", topSeven: 5335, newEntries: 2680, dropouts: 1085, status: "회복 흐름 확인" },
      ],
      note:
        "이상 징후 확인 → SERP 분석·제작 규칙 수정 → 후속 발행과 주간 회복 추적. (수정필요 137)",
    },
    evidence: [
      { label: "키워드 검색 수요 (수정필요 138)", before: "확인 불가", after: "조회수 확인" },
      { label: "키워드 경쟁도 (수정필요 139)", before: "감과 경험", after: "경쟁도 확인" },
      {
        label: "실수요 키워드 TOP 7 진입률 (수정필요 140)",
        before: "1~5%",
        after: "40~60%",
      },
    ],
    results: [
      "노출 수·신규 진입·이탈·가중 점수·월 진입률을 담은 주간 리포트를 도입했습니다. (수정필요 141)",
      "검색량이 없거나 경쟁이 어려운 키워드의 발행을 줄였습니다. (수정필요 142)",
      "검색 변화에 맞춰 제작 기준을 수정하고 후속 성과를 추적했습니다. (수정필요 143)",
    ],
    featuredProofIndex: 0,
    proofs: [
      {
        title: "키워드 조회수·경쟁도 선별 결과",
        description:
          "검색량·경쟁 지표로 후보를 분류하고 발행 여부를 결정한 결과.",
        image: {
          src: "/evidence/keyword-insight-results.png",
          alt: "238개 키워드를 분석해 합격, 블로그, 스블과 탈락 항목으로 분류한 블라이 키워드 인사이트 결과 화면",
          caption:
            "실제 분석 화면 · 238개 키워드의 검색수요·경쟁도 분류 결과",
          width: 1914,
          height: 1032,
        },
      },
      {
        title: "2025.12~2026.08 키워드 퍼포먼스 추적 대시보드",
        description:
          "추적 기간은 2025.12~2026.08이며, 대시보드는 2026.01.26~08.03의 TOP 7 수·가중 점수·신규 진입·이탈을 집계했습니다. (수정필요 144)",
        image: {
          src: "/evidence/keyword-performance-dashboard.png",
          alt: "2025년 12월부터 2026년 8월까지 추적한 키워드 수, 가중 점수, 신규 진입과 이탈 추이를 정리한 KIWI 키워드 퍼포먼스 대시보드",
          caption:
            "추적 시작 2025.12 · 대시보드 집계 2026.01.26~08.03 · 누적 75개 업체",
          width: 1512,
          height: 1380,
        },
      },
      {
        title: "플랫폼 변화 대응을 위한 주간 브리핑",
        description:
          "6.15 급락 감지 후 1주 내 제작 규칙 수정. 6.22부터 후속 발행·회복 추적에 사용한 주간 리포트.",
        image: {
          src: "/evidence/platform-response-weekly.png",
          alt: "2026년 6월 22일 활성 업체, 키워드 수, 점수, 신규 진입과 이탈을 정리한 주차별 상세 브리핑",
          caption:
            "2026.06.22 주간 성과 리포트 · 이상 징후 감지 후 1주 내 대응 시점",
          width: 1448,
          height: 1910,
        },
      },
    ],
    measurement:
      "월 진입률은 업체별 월 발행 실수요 키워드 중 콘텐츠 TOP 7에 1회 이상 진입한 비율입니다. 약 1~5% → 40~60%는 선별·콘텐츠 개선·측정·플랫폼 대응의 복합 결과입니다. 누적 조사량은 분모가 아니며, 주간 보유 키워드 수와도 구분합니다. 실험은 후속 개선 사례로 공통 4주간 주 1회 누적 진입을 비교했습니다. 순차 발행이므로 콘텐츠별 관찰 기간은 다르며, 무작위 배정·통계적 유의성을 확보한 실험으로 단정하지 않습니다. 1주 내 대응은 제작 규칙 수정까지이며, 회복은 후속 발행 추이로 확인했습니다. (수정필요 145)",
    learning:
      "키워드 선정은 검색량·경쟁도로, 제작 방식은 콘텐츠 실험으로 판단하고 발행 후 결과를 추적했습니다. (수정필요 146)",
  },
  {
    slug: "rank-monitoring",
    category: "키워드 순위 조사 · 보고 자동화 (수정필요 147)",
    shortTitle: "키워드 순위 조사·보고 자동화 (수정필요 148)",
    cardTitle: "키워드 순위 조사·보고 자동화 (수정필요 149)",
    title: "검색부터 보고까지, 주간 순위 조사 자동화 (수정필요 150)",
    summary:
      "2~3명이 수작업으로 하던 순위 조사를 자동화했습니다. 키워드·업체명 입력 후 결과와 보고 문장을 받아, 조사 중에도 다른 업무를 진행합니다. (수정필요 151)",
    cardSummary:
      "키워드·업체명을 입력하면 검색부터 순위 계산, 보고용 문장까지 자동으로 출력합니다. (수정필요 152)",
    scopeNote: "기존에는 약 3,000개 키워드를 사람이 직접 검색했습니다. 현재 조사량은 누적 등록 키워드를 반복 확인한 건수이며, 실행 중 다른 업무를 진행할 수 있습니다.",
    brief: {
      challenge: "2~3명·6~7시간 수작업. 전주 목·금요일부터 준비한 경우도 있어 다른 업무 지연.",
      decision: "검색·업체 식별·순위 계산·보고 문장까지 자동 처리.",
      ownership: "기준 설계·Codex 구현·테스트·운영·플랫폼 변경 대응.",
      outcome: "현재 PC 1대·5~6시간·1.4만 건 조사. 도입 후 본인 야근 주 3~4회 → 0회.",
    },
    role: "순위·보고 기준 설계 · 웹 자동화 · 유지보수 (수정필요 153)",
    contribution: "1인 기획·개발·테스트·운영·유지보수 (수정필요 154)",
    operationPeriod:
      "2025.10 자동화 도입 · 2026.10 성능 기준 (수정필요 155)",
    tools: ["C#·WPF", "Chrome CDP", "CSV·Excel", "보고 문장 자동 출력 (수정필요 156)"],
    tags: ["Measurement", "Web Automation", "Reporting"],
    cardMetric: { label: "순위 조사·보고 자동화 도입 후 야근", value: "주 3~4회 → 0회" },
    metrics: [
      { label: "현재 1회 실제 조사량", value: "약 1.4만 건" },
      { label: "기존 투입", value: "2~3명 × 6~7시간" },
      { label: "자동 실행", value: "1대 × 5~6시간" },
      { label: "도입 후 야근 · 2025.10부터 (수정필요 157) (수정필요 158)", value: "주 3~4회 → 0회" },
    ],
    problem: [
      "2~3명이 통합검색 콘텐츠 순위를 직접 찾아 기록했습니다. 월요일 보고를 위해 전주 목·금요일부터 준비해, 조사일·보고일 순위가 달라지기도 했습니다.",
      "당시 확인한 API·상용 도구로는 필요한 순위 기준과 업체별 보고 형식을 얻기 어려웠습니다.",
      "조사로 밀린 다른 업무가 야근으로 이어졌습니다.",
    ],
    judgment:
      "검색뿐 아니라 업체 콘텐츠 식별·순위 판정·오류 구분·보고 문장까지 자동 처리하도록 설계했습니다. (수정필요 159)",
    execution: [
      "판정 기준: 통합검색 탐색 → 업체 콘텐츠 식별 → 순위 계산·기록.",
      "입출력: 키워드·업체명·별칭 CSV 입력 → 보고 문장 포함 Excel 출력.",
      "자동 조사: C#·WPF 앱에서 Chrome CDP로 모바일 통합검색 제어.",
      "결과 식별: 제목·요약의 업체명·별칭 확인, 중복 검색결과 재사용, 비대상 콘텐츠 제외.",
      "보고: TOP 7 결과를 ‘○○키워드 -1위’ 문장으로 생성해 별도 시트에 취합.",
      "변경 대응: URL 키·SERP 구성 변경에 맞춰 지속 수정. 시간 초과 시 일시정지하고 확인 후 해당 키워드부터 재개.",
    ],
    evidence: [
      { label: "순위 확인 방식 (수정필요 160)", before: "2~3명 수작업", after: "PC 자동 실행" },
      { label: "자동화 버전별 실제 조사량", before: "초기 8,000건", after: "현재 약 1.4만 건" },
      { label: "업무 형태", before: "직접 검색", after: "보고까지 자동" },
      { label: "조사 중 다른 업무 수행 (수정필요 161)", before: "진행 어려움", after: "동시 수행 가능" },
    ],
    results: [
      "초기 PC 2대·6시간·8,000건에서 현재 PC 1대·5~6시간·약 1.4만 건으로 개선했습니다.",
      "정상 결과는 바로 보고에 사용하고, 화면·URL 변경에 따른 수집 실패는 수정·재검증 후 보고했습니다.",
      "조사 중 업체 관리·분석을 병행하며, 뒤로 밀리던 업무를 해소했습니다.",
    ],
    featuredProofIndex: 1,
    proofs: [
      {
        title: "이전 버전의 대량 조사 실행 화면",
        description:
          "이전 버전의 진행률·처리량·순위 확인 화면. 현재 C#·WPF·Chrome CDP 버전의 성능과 구분합니다.",
        image: {
          src: "/evidence/rank-monitoring-running.png",
          alt: "6,425개 키워드 중 428개를 처리하며 진행률, 순위 확보·미확보 건수와 예상 잔여시간을 표시하는 KIWI 키워드 순위 확인 프로그램",
          caption:
            "이전 버전 실행 화면 · 처리 428 / 6,425건",
          width: 1239,
          height: 801,
        },
      },
      {
        title: "복사해서 바로 보고하는 결과물",
        description:
          "이전 버전의 Excel 보고 결과. 현재도 TOP 7 결과의 보고 문장을 자동 출력합니다.",
        image: {
          src: "/evidence/rank-report-results.png",
          alt: "키워드, 업체명, 검색 순위와 보고용 문장을 자동으로 정리한 키워드 순위 확인 엑셀 결과 화면",
          caption:
            "이전 버전의 실제 자동 보고 결과",
          width: 1246,
          height: 751,
        },
      },
    ],
    measurement:
      "과거 10개월 누적 조사량은 평균 약 9,500건 × 월 5~6회로 약 47.5만~57만 회(대표값 약 52만 회) 추정입니다. 동일 키워드의 주차별 재조사를 포함하며, 2026.10 현재 성능(PC 1대·5~6시간·1.4만 건)을 소급 적용하지 않습니다. 중복 검색결과를 재사용하므로 조사 건수와 실제 검색 요청 수는 다릅니다. 시간 초과·검색 제한 시 일시정지하고 확인 후 재개합니다.",
    learning:
      "조사 결과를 보고 문장까지 완성해, 검색 이후의 집계·가공 작업도 줄였습니다. (수정필요 162)",
  },
  {
    slug: "system-ownership",
    category: "업무 자동화 · 유지보수 (수정필요 163)",
    shortTitle: "반복 업무 자동화·유지보수 (수정필요 164)",
    title: "이미지 처리·모니터링·업무 관리 자동화 (수정필요 165)",
    summary:
      "반복 업무를 분석해 필요한 도구를 만들었습니다. 2025년 10월부터 실무에 도입하고, 플랫폼과 업무 조건이 바뀔 때마다 수정해 사용하고 있습니다. (수정필요 166)",
    brief: {
      challenge: "이미지·모니터링 반복 수작업과 플랫폼 변경에 따른 작업 중단.",
      decision: "실무용 도구 구현과 도입 후 변경 대응.",
      ownership: "별도 지시 없이 업무 분석·Codex 구현·운영·유지보수.",
      outcome: "사진 활용 기간 연장·외주 촬영 중단(사내 촬영 유지), 리뷰 확인·업무 관리 자동화.",
    },
    role: "업무 분석 · 도구 기획·개발 · 유지보수 (수정필요 167)",
    contribution: "1인 기획·개발·실무 적용·유지보수 (수정필요 168)",
    operationPeriod:
      "2025.10부터 도구별 실무 도입·운영 (수정필요 169)",
    tools: ["OpenAI API", "C#·WPF", "Chrome CDP", "Excel·Google Sheets", "Apps Script", "이미지 처리"],
    tags: ["System Ownership", "Process Improvement", "Workflow Automation"],
    cardMetric: { label: "반복 업무 처리 방식 (수정필요 170)", value: "수작업 → 자동 처리" },
    metrics: [
      { label: "담당 범위 (수정필요 171)", value: "1인 기획·개발·운영" },
      { label: "실무 도입 시점 (수정필요 172)", value: "2025.10부터" },
      { label: "리뷰 수·증감 확인", value: "60개 이상 · 약 30초" },
      { label: "현재 외주 촬영", value: "전면 중단" },
    ],
    problem: [
      "처음 맡은 일은 정해진 콘텐츠 발행량을 맞추는 일이었고, 개발 지시는 없었습니다.",
      "이미지 처리·리뷰 확인에 같은 수작업이 반복됐습니다. (수정필요 173)",
      "공식 API·상용 도구만으로 필요한 입출력을 만들기 어려웠고, SERP·URL·콘텐츠 유형 변경 시 기존 도구도 영향을 받았습니다.",
      "도입 후에도 플랫폼 변경에 따른 점검·수정이 필요했습니다. (수정필요 174)",
    ],
    judgment:
      "반복 작업의 투입시간과 필요한 결과를 먼저 정하고, 구현 후 실무 적용과 변경 대응까지 맡았습니다. (수정필요 175)",
    execution: [
      "개선 대상: 반복 입력·확인에 시간이 드는 작업 선정. (수정필요 176)",
      "설계: 입력값·결과물·정상 작동 기준 정의. (수정필요 177)",
      "구현: 업무 절차·예외 조건을 정리하고 Codex로 개발. (수정필요 178)",
      "도구 범위: 콘텐츠 제작·검수, 키워드 분석, 순위 조사·보고, 이미지 처리·모니터링.",
      "모니터링: 60개 이상 업체의 플레이스 리뷰 수·증감을 약 30초에 확인. 인스타그램 게시물 확인도 자동화. (수정필요 179)",
      "업무 관리: Sheets·Apps Script로 표·수식·조건부 서식 생성. Notion에 업무 진행도·업체별 마케팅 현황·연차 관리 구성.",
      "사용성: 결과를 바로 활용하고 기본 사용법을 약 20분에 안내하도록 구성. (수정필요 180)",
      "실무 검증: 오류·추가 기능 반영 후 업체 업무에서 결과 재확인. (수정필요 181)",
      "유지보수: 비대상 콘텐츠 혼입·중단 원인을 확인하고 URL 식별·예외 처리·복구 로직 수정 후 재검증. (수정필요 182)",
    ],
    improvementMethods: [
      {
        label: "오류 대응 (수정필요 188)",
        title: "원인 확인 → 수정 → 재검증 (수정필요 189)",
        description:
          "비대상 콘텐츠 혼입이나 실행 중단의 발생 조건을 확인했습니다. (수정필요 190)",
        steps: [
          "이상 징후 감지",
          "영향 범위 확인",
          "발생 조건·원인 확인 (수정필요 191)",
          "예외·복구 로직 수정",
          "수정 전후 재검증",
          "재발 방지",
        ],
        example:
          "비대상 URL은 제외 규칙 추가 후 표본 재검증. 장시간 실행 중단에는 간격 제어·단계별 대기·재시도·오류 복구 적용.",
      },
    ],
    evidence: [
      { label: "반복 확인 업무 (수정필요 204)", before: "사람이 직접 확인", after: "자동 수집·처리" },
      { label: "업체별 사진 활용 기간 (수정필요 205)", before: "2~3개월", after: "약 5개월 · 최대 7~8개월" },
      { label: "작업 결과 정리 (수정필요 206)", before: "수작업 가공", after: "업무용 결과 자동 출력" },
      { label: "플랫폼 변경 대응 (수정필요 207)", before: "실행 오류·작업 중단", after: "수정 후 업무 재개" },
    ],
    results: [
      "순위 확인·모니터링·이미지 도구의 플랫폼 변경 문제는 대부분 당일, 큰 변경도 3일 이내 수정·정상화했습니다.",
      "사진 활용 기간을 2~3개월에서 약 5개월(최대 7~8개월)로 늘렸습니다. 회당 약 30만~40만 원의 외주는 중단하고 사내 촬영은 유지했습니다.",
      "약 20분의 기본 사용법 안내로 사용할 수 있게 구성하고, 사용 중 문제와 플랫폼 변경을 계속 반영했습니다. (수정필요 208)",
    ],
    featuredProofIndex: 1,
    proofs: [
      {
        title: "콘텐츠 운영 통합 워크플로",
        description:
          "사진 분류·원고 변환·검수·제목 수정·후속 작업 통합.",
        image: {
          src: "/evidence/kiwi-workflow-dashboard.png",
          alt: "사진 분류부터 원고 변환, 검수와 제목 수정까지 다섯 단계로 연결한 KIWI Workflow Suite 대시보드",
          caption:
            "업체 정보가 포함되지 않은 실제 기본 화면 · 운영 자동화 사례",
          width: 1323,
          height: 863,
        },
      },
      {
        title: "대량 이미지 처리 자동화",
        description:
          "수천 장의 이미지 처리와 처리량·속도·경과시간·완료 상태 관리.",
        image: {
          src: "/evidence/image-washing-complete.png",
          alt: "모든 폴더의 이미지 처리가 완료되고 처리 속도와 경과시간이 표시된 KIWI 이미지 워싱 완료 화면",
          caption:
            "실제 대량 처리 완료 화면 · 처리량·속도·경과시간 자동 기록",
          width: 1476,
          height: 922,
        },
      },
      {
        title: "플레이스 리뷰 수 자동 모니터링",
        description:
          "방문자·블로그 리뷰 수 자동 수집 및 이전 기록 대비 증감 확인.",
        image: {
          src: "/evidence/place-monitoring-complete.png",
          alt: "42개 플레이스의 방문자 리뷰와 블로그 리뷰 수를 순차 조회해 완료한 플레이스 리뷰 수 모니터링 프로그램",
          caption:
            "실제 실행 완료 화면 · 42개 플레이스 리뷰 수 자동 조회",
          width: 1099,
          height: 702,
        },
      },

    ],
    measurement:
      "2025.10부터 도구별로 도입했습니다. 플랫폼 변경에 따른 오류·수집 실패는 수정·재검증했습니다. 리뷰 확인은 현재 60개 이상 업체·약 30초이며, 캡처의 42개 업체는 과거 실행 기록입니다. 사진 활용 기간은 업체별로 다르고 사내 촬영은 유지합니다. 외주 이용 횟수 원자료가 없어 연간 절감액은 미산출입니다.",
    learning:
      "URL 식별·예외 처리·중단 후 복구 기능을 보완해, 플랫폼 변경 이후에도 업무에 계속 사용했습니다. (수정필요 209)",
  },
];
