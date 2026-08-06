export const commonMetrics = [
  {
    value: "4시간 → 약 50분",
    label: "90건 제작 · 원고·제목·이미지·검수를 통합해 무인 처리",
    project: "operations-transformation",
    compact: true,
  },
  {
    value: "월 약 8,200건",
    label: "1인이 50~60개 고객사를 직접 담당",
    project: "operations-transformation",
    compact: true,
  },
  {
    value: "30~40% → 70~80%",
    label: "네이버 통합검색 콘텐츠 TOP 7 진입률 개선",
    project: "keyword-performance",
    compact: true,
  },
  {
    value: "10개월 · 약 52만 건",
    label: "검색부터 순위 계산·보고까지 자동화",
    project: "rank-monitoring",
    compact: true,
  },
] as const;

export const processSteps = [
  {
    title: "OBSERVE",
    korean: "문제 발견",
    description: "반복되는 병목과 고객의 불편을 업무 현장에서 찾습니다.",
  },
  {
    title: "DEFINE",
    korean: "기준 정의",
    description: "문제를 시간·처리량·노출률처럼 측정 가능한 기준으로 정리합니다.",
  },
  {
    title: "BUILD",
    korean: "구조 설계",
    description: "필요한 도구가 없으면 실제 업무 흐름에 맞게 직접 만듭니다.",
  },
  {
    title: "OPERATE",
    korean: "실무 운영",
    description: "만든 도구를 실제 고객 업무에 적용하고 매주 사용합니다.",
  },
  {
    title: "IMPROVE",
    korean: "지속 개선",
    description: "고객 요구와 플랫폼 변화에 맞춰 계속 수정하고 검증합니다.",
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
    team: "네이버 콘텐츠 SEO·검색 마케팅팀 · 광고·콘텐츠 운영 및 업무 자동화",
    description:
      "50~60개 고객사를 담당하며 업체 대표와 콘텐츠 방향, 업종별·시즌별 키워드와 세부 요구사항을 직접 협의하고 수정·클레임에 대응합니다. 2025년 10월부터 내부 자동화 도구를 실무에 적용했고, 11월부터 현재 수준의 발행량과 검색 노출 성과를 유지·개선하고 있습니다.",
  },
  {
    period: "2024.08 — 2025.03",
    status: "8개월",
    company: "대덕넷",
    team: "전략사업부 · 과학기술 행사 기획·운영",
    description:
      "과학기술 캠프·콘서트·컨퍼런스의 자료 조사, 협력업체 연락, 프로그램 구성, 현장 운영과 결과보고를 지원하고 80건 이상의 이슈 브리핑 콘텐츠를 작성했습니다.",
  },
] as const;

export const selectedBackground = [
  {
    period: "2019.03 — 2025.02",
    status: "학사",
    title: "한남대학교",
    subtitle: "광고홍보학 전공 · 정치언론학 복수전공",
    description:
      "광고 전략, 캠페인 기획, 미디어와 콘텐츠에 대한 이론적 기반을 쌓았습니다.",
  },
  {
    period: "2023 · 2024",
    status: "2회 수상",
    title: "KOSAC 챌린지상",
    subtitle: "한국대학생광고대회 · 문화체육관광부",
    description:
      "분리수거 인식 개선과 청소년 도박 방지 캠페인에서 타깃 인사이트, 메시지 전략과 IMC 전개안을 기획했습니다.",
  },
  {
    period: "2023.07",
    status: "우수작 선정",
    title: "KOBACO 옥외광고 실무과정",
    subtitle: "한국방송광고진흥공사",
    description:
      "옥외광고의 구조와 법규를 학습하고 팀 프로젝트의 기획·촬영·제작을 수행해 우수작으로 선정되었습니다.",
  },
  {
    period: "2025.08",
    status: "자격",
    title: "GAIQ",
    subtitle: "Google Analytics Individual Qualification",
    description:
      "Google Analytics 데이터를 해석하고 성과를 측정하는 방법을 학습했습니다.",
  },
] as const;

export type Project = {
  slug: string;
  category: string;
  shortTitle: string;
  cardTitle?: string;
  title: string;
  summary: string;
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
    shortTitle: "월 약 8,200건 운영을 만든 콘텐츠 제작 통합앱",
    cardTitle: "1인이 월 약 8,200건을 운영하게 만든 콘텐츠 제작 통합앱",
    title: "야근을 버티지 않고, 야근을 만드는 구조를 바꿨습니다.",
    summary:
      "2~3명이 야근하며 월 약 2,000건을 처리하던 업무를, 현재 1인이 50~60개 고객사를 담당하며 월 약 8,200건을 운영하는 방식으로 바꿨습니다. 월 8,200건은 최대치가 아니라 2025년 11월 이후의 실제 운영량입니다.",
    cardSummary:
      "원고·제목·이미지·검수와 배포 관리를 한 앱으로 묶고, 자동 실행으로 확보한 시간을 고객 대응과 SEO 개선에 쓰고 있습니다.",
    brief: {
      challenge: "인력과 야근을 늘려도 발행이 밀리고, 고객 요청 반영과 품질 관리에 쓸 시간이 부족했습니다.",
      decision: "제작 속도만 높이는 것으로는 부족해 고객 협의부터 제작·검수·성과 확인까지 업무 전체를 다시 설계했습니다.",
      ownership: "50~60개 고객사 대표와 직접 방향을 협의하고, 개선 체계의 기획·개발·운영·유지보수를 100% 담당했습니다.",
      outcome: "1인이 월 약 8,200건을 실제 운영하면서 주 3~4회였던 야근을 0회로 줄였습니다.",
    },
    role: "클라이언트 커뮤니케이션 · 콘텐츠 운영 · 프로세스 설계 · 내부 도구 개발",
    contribution: "개선 프로젝트 기획·개발·운영·유지보수 100%",
    operationPeriod:
      "2025.10 실사용 시작 · 2025.11 이후 현재 성과 수준 유지·개선",
    tools: ["OpenAI API", "Google Sheets", "Apps Script", "내부 업무용 GUI"],
    tags: ["Client Communication", "Workflow Design", "Workflow Automation"],
    cardMetric: { label: "월 실제 발행량", value: "2,000 → 8,200" },
    metrics: [
      { label: "운영 인원", value: "2~3명 → 1명" },
      { label: "월 실제 발행량 · 기존 약 2,000건", value: "약 8,200건" },
      { label: "90건 제작 · 기존 4시간 수작업", value: "약 50분·무인" },
      { label: "야근", value: "주 3~4회 → 0회" },
    ],
    problem: [
      "원고, 제목, 이미지와 발행 전 검수를 사람이 하나씩 처리했습니다.",
      "2~3명이 야근하면서도 20~30개 고객사에서 월 약 2,000건을 발행했습니다.",
      "제작에 대부분의 시간이 사용되어 고객별 세부 요청과 방향 수정이 밀렸습니다.",
      "발행 지연과 품질 편차가 고객 경험을 떨어뜨렸습니다.",
    ],
    judgment:
      "원고를 빠르게 만드는 것만으로는 문제가 해결되지 않았습니다. 고객의 요구를 듣고 콘텐츠에 반영할 시간을 확보하려면, 키워드 입력부터 원고·제목, 이미지, 품질 검수와 결과 정리까지 한 흐름으로 연결해야 했습니다.",
    execution: [
      "업체 대표와 직접 콘텐츠에 넣을 내용, 원하는 키워드 방향, 월별 이슈와 시즌 키워드를 협의했습니다.",
      "중간 방향 변경과 세부 수정 요청, 발행·품질 관련 클레임을 직접 확인하고 운영 기준에 반영했습니다.",
      "전체 업무를 제작, 검수, 발행, 성과 확인 단계로 분해했습니다.",
      "반복 작업과 오류가 발생하는 지점을 정의하고 자동화 우선순위를 정했습니다.",
      "현업 요구사항과 로직·예외·검증 기준을 직접 설계하고 Codex를 활용해 내부 업무용 프로그램으로 구현했습니다.",
      "고객사별 작성 규칙을 데이터화해 반복 적용할 수 있도록 만들었습니다.",
      "AI 기반 원고·제목 제작과 이미지 처리, 품질 검수를 하나의 흐름으로 연결했습니다.",
      "실제 고객 업무에서 사용하며 수정 요청과 플랫폼 변화에 맞춰 계속 보완했습니다.",
    ],
    decisionCase: {
      label: "SELF-DIRECTED WORKFLOW REDESIGN",
      title: "수작업 병목을 없애고, 고객별 요구사항까지 대량으로 반영하는 통합앱을 만들었습니다.",
      description:
        "별도 지시 없이 수작업 전체 흐름을 분석하고 필요한 프로그램을 직접 설계했습니다. 제작을 무인으로 처리하면서도 고객별 요구사항을 유연하게 반영할 수 있도록 만들었습니다.",
      steps: [
        {
          label: "01 · ANALYZE",
          title: "수작업 병목 직접 분석",
          description:
            "원고·제목·이미지·검수 과정에서 시간이 반복 소모되고 오류와 발행 지연이 생기는 지점을 단계별로 정의했습니다.",
        },
        {
          label: "02 · BUILD",
          title: "업무용 통합앱 직접 설계",
          description:
            "필요한 입력·출력, 예외 조건과 검수 기준을 직접 정하고 제작부터 후속 작업까지 연결되는 프로그램으로 구현했습니다.",
        },
        {
          label: "03 · AUTOMATE",
          title: "사람이 하던 4시간 작업을 무인 실행으로 전환",
          description:
            "사람이 약 4시간 처리하던 90건 제작을 약 50분의 무인 실행으로 전환해, 프로그램이 작동하는 동안 다른 업무를 수행할 수 있게 했습니다.",
        },
        {
          label: "04 · CUSTOMIZE",
          title: "고객별 요구사항도 대량 반영",
          description:
            "고객사와 협의한 키워드 방향, 문체, 포함 내용과 시즌 이슈를 제작 규칙에 바로 반영하고, 변경된 버전도 같은 방식으로 대량 제작했습니다.",
        },
      ],
    },
    evidence: [
      { label: "운영 인원", before: "2~3명", after: "1명" },
      { label: "운영 고객사", before: "20~30개", after: "50~60개" },
      { label: "월 실제 발행량", before: "약 2,000건", after: "약 8,200건" },
      { label: "90건 제작 방식", before: "4시간 수작업", after: "약 50분 자동 실행" },
    ],
    results: [
      "90건 제작시간은 4시간에서 약 50분으로 79.2% 줄었고, 프로그램이 실행되는 동안 담당자는 다른 업무를 할 수 있게 됐습니다.",
      "확보한 시간을 고객 관리, 세부 요청 반영, 신규 고객 온보딩과 노출 전략 개선에 재투자했습니다.",
      "프로그램을 직접 조정할 수 있어 고객별 키워드·문체·포함 내용과 시즌 이슈를 바로 반영하고, 변경된 버전도 대량 제작해 발행 지연과 품질 관련 클레임을 크게 줄였습니다.",
    ],
    proofs: [
      {
        title: "콘텐츠 제작·검수 통합앱",
        description:
          "사진 분류, 원고 변환, 검수, 제목 수정과 후속 작업을 한 화면의 흐름으로 연결한 실제 콘텐츠 제작 통합앱입니다.",
        image: {
          src: "/evidence/kiwi-workflow-dashboard.png",
          alt: "사진 분류부터 원고 변환, 검수와 제목 수정까지 다섯 단계로 연결한 KIWI Workflow Suite 대시보드",
          caption:
            "고객사 정보가 포함되지 않은 실제 기본 화면 · 5단계 통합 워크플로",
          width: 1323,
          height: 863,
        },
      },
      {
        title: "고객사별 배포 통합 관리 시트",
        description:
          "58개 고객사의 월 목표, 업체별 진행률, 미완료 수량, 시작·종료일과 월간 총 배포량을 한 화면에서 관리한 실제 시트입니다.",
        image: {
          src: "/evidence/distribution-management-dashboard.png",
          alt: "58개 고객사의 월 목표, 배포 진행률, 미완료 수량, 시작일과 종료일을 한 화면에서 관리한 통합 배포 시트",
          caption:
            "실제 운영 화면 · 58개 고객사·월별 목표·진행률·마감 일정 통합 관리",
          width: 1915,
          height: 916,
        },
      },
    ],
    measurement:
      "제작시간은 동일한 90건 단위 패키지의 실제 작업시간을 비교했습니다. 기존 4시간은 사람이 직접 작업한 시간이지만, 개선 후 약 50분은 프로그램이 무인으로 실행되는 시간이므로 담당자는 그동안 다른 업무를 수행할 수 있습니다. 월 약 8,200건은 최대 처리량이나 가능 수치가 아니라 2025년 11월 이후 대표적인 실제 월 운영 수준이며, 월별 일정과 고객 구성에 따라 배포량은 달라집니다.",
    learning:
      "자동화의 가장 큰 가치는 사람이 반복 작업에 붙잡히지 않는다는 점이었습니다. 확보한 시간을 고객 대응과 전략 개선에 다시 쓰자, 작업량과 맞춤 대응을 함께 늘릴 수 있었습니다.",
  },
  {
    slug: "keyword-performance",
    category: "NAVER CONTENT SEO · CONTROLLED EXPERIMENTATION",
    shortTitle: "키워드 선별부터 실험·추적까지 연결한 네이버 콘텐츠 SEO",
    title: "검색 수요와 SERP를 분석해, 네이버 상위 노출을 개선했습니다.",
    summary:
      "검색량과 경쟁도로 키워드를 선별하고, SERP 분석과 단일 변수 실험으로 콘텐츠 운영 규칙을 바꿨습니다. 결과는 주간 랭크 트래킹과 자체 지표로 추적해 TOP 7 진입률을 30~40%에서 70~80% 수준으로 높였습니다.",
    cardSummary:
      "키워드 선별, 콘텐츠 실험과 주간 추적을 한 흐름으로 연결하고, 데이터로 확인된 방식만 운영 규칙에 반영했습니다.",
    brief: {
      challenge: "검색 수요와 경쟁도를 확인하지 못한 채 키워드를 사용했고, 발행 후 성과도 체계적으로 기록·분석하지 않아 통합검색 콘텐츠 영역 TOP 7 진입률이 30~40%에 머물렀습니다.",
      decision: "무엇을 발행할지는 데이터로 선별하고, 어떻게 발행할지는 단일 변수 실험으로 검증하며, 결과는 직접 만든 지표로 계속 추적했습니다.",
      ownership: "키워드 전략, SERP 분석, 콘텐츠 실험 설계, 4주 추적과 운영 규칙 반영까지 전 과정을 100% 담당했습니다.",
      outcome: "키워드 전략과 콘텐츠 변수를 반복 검증하고 운영 규칙에 반영해 TOP 7 진입률을 70~80% 수준으로 높였습니다. 상세에는 판단 근거가 명확한 대표 실험 3건을 정리했습니다.",
    },
    role: "네이버 콘텐츠 SEO · 키워드 전략 · 콘텐츠 실험 · 성과 분석",
    contribution: "분석 기준 수립·운영·성과 검증 100%",
    operationPeriod:
      "2025.10 실사용 시작 · 2025.11 이후 70~80% 수준 운영·지속 개선",
    tools: ["키워드 분석 도구", "Excel", "Google Sheets", "내부 콘텐츠 앱"],
    tags: ["Naver Content SEO", "Keyword Research", "SERP Analysis", "Content Experimentation"],
    cardMetric: {
      label: "네이버 콘텐츠 SEO · TOP 7 진입률",
      value: "30~40% → 70~80%",
    },
    metrics: [
      { label: "월 발행량 기준 TOP 7 진입률", value: "30~40% → 70~80%" },
      { label: "전체 고객사 합산 TOP 7 키워드", value: "최대 7,248개" },
      { label: "단일 고객사 TOP 7 키워드", value: "최대 248개" },
      { label: "주간 랭크 트래킹 자동 조사량", value: "1회 1만~1.2만 건" },
    ],
    problem: [
      "기존에는 키워드별 조회수와 경쟁도를 확인할 수 없었습니다.",
      "검색량이 없거나 경쟁 가능성이 낮은 키워드까지 콘텐츠에 사용했습니다.",
      "발행량은 확보했지만 SERP 내 상위 노출 키워드 수, 신규 진입과 이탈, 노출 가치가 체계적으로 기록되지 않아 어떤 선택이 성과로 이어지는지 판단하기 어려웠습니다.",
      "네이버 스마트블록을 비롯한 SERP 구성이 반복적으로 바뀌었습니다.",
    ],
    judgment:
      "단순히 블로그를 많이 발행하는 일이 아니라, 네이버 통합검색에서 고객사의 콘텐츠가 발견될 가능성을 높이는 콘텐츠 SEO라고 판단했습니다. 무엇을 발행할지는 검색 수요와 경쟁도로 선별하고, 어떻게 발행할지는 SERP에서 찾은 가설을 단일 변수 실험으로 검증했습니다. 결과는 주간 랭크 트래킹으로 다시 확인했습니다.",
    execution: [
      "키워드 리서치: 분석 프로그램으로 키워드별 검색량과 경쟁도를 수집·분석했습니다.",
      "키워드 전략: 실제 검색 수요와 콘텐츠 진입 가능성을 모두 충족한 키워드만 제작 시스템에 투입했습니다.",
      "성과 측정: 네이버 통합검색 SERP의 콘텐츠 영역 1~7위 키워드 수, 신규 진입·이탈, 조회수와 순위를 가중한 자체 점수, 업체별 월 발행량 기준 진입률을 정의해 기록했습니다.",
      "랭크 트래킹: 과거 발행 키워드까지 매주 다시 확인해 SERP 내 순위 변화와 이상 징후를 조기에 발견했습니다.",
      "성과가 떨어지면 타깃 키워드의 SERP 상위 결과를 비교해 원고 구조, 제목, 이미지 수처럼 반복되는 특징을 찾고 실험 가설로 바꿨습니다.",
      "동일 업체·키워드·발행 시기 등 다른 조건을 맞추고 한 번에 하나의 변수만 변경했습니다.",
      "수차례 진행한 실험 중 아래 대표 3건에서는 A·B 변형안 합계 1,480건을 발행·추적해 4주 누적 TOP 7 진입률을 비교했습니다.",
      "차이가 분명한 우수안은 콘텐츠 제작 시스템의 운영 규칙으로 반영하고, 효과가 미미한 안은 롤백했습니다.",
      "변경된 콘텐츠가 충분히 발행된 후 후속 데이터를 통해 회복 추이를 확인했습니다.",
    ],
    experiments: [
      {
        period: "2026.03 · 2주차",
        title: "이미지 수 테스트",
        status: "채택",
        signal:
          "통합검색 콘텐츠 영역 TOP 7 진입률이 40~50%대로 하락한 시점에 경쟁 강도가 높은 타깃 키워드의 SERP를 재분석했습니다. 상위 결과군에서 이미지 수가 많은 콘텐츠가 반복적으로 관찰돼, 이미지 수를 성과 변동의 핵심 가설로 설정했습니다.",
        hypothesis:
          "무작위로 10~15장을 사용하던 방식보다 이미지 15장을 고정하는 편이 진입률을 높일 수 있다고 판단했습니다.",
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
          "이미지 15장 안이 뚜렷하게 우세해 결과 확인 직후 콘텐츠 제작 시스템과 사용법을 15장 기본 발행으로 변경했습니다.",
      },
      {
        period: "2026.05 · 1주차",
        title: "소제목·인용구 테스트",
        status: "롤백",
        signal:
          "여러 업체의 통합검색 콘텐츠 TOP 7 진입률이 50~60%대에 머물러 추가 개선 요소를 탐색했습니다.",
        hypothesis:
          "타깃 키워드의 SERP 상위 결과군을 분석한 결과, 내돈내산·체험단형 콘텐츠에서 소제목과 인용구 구조가 반복적으로 관찰됐습니다. 해당 구조가 TOP 7 진입률에 기여하는지 확인하기 위해 단일 변수 실험을 설계했습니다.",
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
          "두 안의 차이가 실무 규칙을 바꿀 만큼 크지 않다고 판단해 결과 확인 직후 신규안을 롤백했습니다.",
      },
      {
        period: "2026.06 · 2주차",
        title: "원고 엔진 테스트",
        status: "채택",
        signal:
          "일일 신규 진입 건수가 약 100건에서 30건 수준으로 급감한 뒤, 타깃 키워드의 SERP 상위 결과군을 재분석했습니다. 광고성 표현이나 AI 특유의 문체보다 실제 경험을 담은 듯한 자연스러운 서술형 콘텐츠가 더 자주 관찰돼, 문체 자연스러움을 핵심 실험 변수로 설정했습니다.",
        hypothesis:
          "원고의 다양성보다 사람이 직접 쓴 듯한 자연스러움을 우선하도록 엔진을 조정하면 진입률을 회복할 수 있다고 판단했습니다.",
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
          "신규 엔진의 우세를 확인한 직후 프로그램 기본값과 사용법을 자연스러움 중심 엔진으로 전환했습니다.",
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
        value: "4주 중 1회 이상 통합검색 콘텐츠 영역 TOP 7 진입",
      },
      {
        label: "운영 반영",
        value: "4주 누적 결과 확인 직후 프로그램·사용법 변경",
      },
    ],
    performanceTracking: {
      title: "발행 후 성과까지 판단할 수 있는 기준을 만들었습니다.",
      description:
        "SERP 진입 여부를 일회성으로 확인하는 데서 끝내지 않았습니다. 동일 키워드의 콘텐츠 영역 내 순위와 신규 진입·이탈을 매주 추적하고, 검색 수요와 순위를 함께 반영한 가중 점수로 노출의 양과 질을 분석했습니다.",
      metrics: [
        { label: "실제 성과 추적 기간", value: "2025.12~2026.08" },
        { label: "관찰 범위", value: "누적 75개 업체" },
        { label: "1회 자동 조사량", value: "1만~1.2만 건" },
        { label: "월 발행량 기준", value: "TOP 7 진입률 70~80%" },
      ],
      dimensions: [
        {
          label: "01 · CURRENT",
          title: "SERP TOP 7 키워드 수",
          description: "해당 주 네이버 통합검색 SERP의 콘텐츠 영역 1~7위에 노출된 키워드의 절대량",
        },
        {
          label: "02 · FLOW",
          title: "TOP 7 신규 진입·이탈",
          description: "전주 대비 TOP 7에 새로 진입한 키워드와 해당 영역에서 이탈한 키워드를 분리해 변화 원인을 확인",
        },
        {
          label: "03 · VALUE",
          title: "검색수요·순위 가중 점수",
          description: "키워드 조회수와 1~7위 순위에 차등 가중치를 적용해 노출의 양뿐 아니라 가치까지 기록",
        },
        {
          label: "04 · RATE",
          title: "월 발행량 기준 TOP 7 진입률",
          description: "업체별 월 발행 키워드 중 통합검색 콘텐츠 영역 1~7위에 진입한 비율을 분석",
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
        "대시보드는 개별 업체보다 전체 집계 흐름을 중심으로 해석했습니다. 주차별 신규 진입·이탈로 이상 징후를 발견하고, 타깃 키워드의 SERP 분석과 통제 실험을 거쳐 콘텐츠 운영 규칙을 수정했습니다. 이후 변경안이 적용된 콘텐츠의 후속 발행으로 회복 여부를 확인했습니다.",
    },
    evidence: [
      { label: "검색 수요 판단", before: "확인 불가", after: "조회수 검증" },
      { label: "진입 가능성 판단", before: "감과 경험", after: "경쟁도 검증" },
      {
        label: "통합검색 콘텐츠 TOP 7 진입률",
        before: "30~40%",
        after: "70~80%",
      },
    ],
    results: [
      "노출 여부만 확인하던 업무에 TOP 7 키워드 수, 신규 진입·이탈, 검색수요·순위 가중 점수와 월 진입률을 도입해 매주 기록하고 분석했습니다.",
      "조회수가 있는 키워드 중 경쟁 가능성까지 확인된 키워드만 발행하는 의사결정 시스템을 정착시켰습니다.",
      "이미지 수와 자연스러움 중심 원고 엔진은 채택하고, 효과가 미미했던 소제목·인용구 적용안은 롤백했습니다.",
      "네이버 검색 변화 감지–SERP 분석–가설 수립–통제 실험–우수안 반영–후속 성과 확인의 SEO 개선 사이클을 정착시켰습니다.",
    ],
    proofs: [
      {
        title: "키워드 조회수·경쟁도 선별 결과",
        description:
          "조회수와 경쟁 지표를 기준으로 키워드를 분류하고 최종 사용 여부까지 판단하는 실제 분석 결과입니다.",
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
          "2025년 12월 추적을 시작해 2026년 8월까지 TOP 7 키워드 수, 가중 점수, 신규 진입·이탈과 업체별 누적 성과를 기록한 실제 리포트입니다. 현재 대시보드는 2026년 1월 26일부터의 24개 관측 주차를 집계합니다.",
        image: {
          src: "/evidence/keyword-performance-dashboard.png",
          alt: "2025년 12월부터 2026년 8월까지 추적한 키워드 수, 가중 점수, 신규 진입과 이탈 추이를 정리한 KIWI 키워드 퍼포먼스 대시보드",
          caption:
            "추적 시작 2025.12 · 대시보드 집계 2026.01.26~08.03 · 누적 75개 업체",
          width: 1512,
          height: 1380,
        },
      },
    ],
    measurement:
      "TOP 7 진입률은 업체별 월 발행 키워드 중 자사 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 진입한 비율입니다. 주간 리포트에서는 기존 키워드까지 다시 조사해 TOP 7 키워드 수, 신규 진입·이탈과 검색수요·순위 가중 점수를 추적했습니다. 아래 3건은 수차례 진행한 실험 중 통제 조건과 결과가 명확한 사례이며, A·B 합계 1,480건은 전체 실험량이 아니라 세 사례의 표본입니다. 70~80%는 키워드 선별, 콘텐츠 실험, 순위 측정과 플랫폼 대응을 함께 개선해 2025년 11월 이후 유지한 실제 운영 수준입니다.",
    learning:
      "좋은 키워드를 고르는 것만으로는 성과가 완성되지 않았습니다. 키워드는 데이터로 선별하고, 콘텐츠는 실험으로 검증하며, 결과는 주간 데이터로 다시 확인해야 개선을 이어갈 수 있었습니다.",
  },
  {
    slug: "rank-monitoring",
    category: "MEASUREMENT SYSTEM · WEB AUTOMATION",
    shortTitle: "약 52만 건을 측정한 검색 순위 시스템",
    cardTitle: "수작업 검색을 보고까지 연결한 무인 순위 측정 시스템",
    title: "도구가 없어서 측정하지 못한 것이 아니라, 측정하기 위해 도구를 만들었습니다.",
    summary:
      "2명이 하루 종일 매달려야 했던 3,000건의 순위 조사를 평균 9,500건 자동 조사로 바꾸고, 10개월간 약 52만 건의 순위를 측정했습니다.",
    cardSummary:
      "검색부터 고객사 콘텐츠 식별, 순위 계산과 보고 문장 출력까지 자동으로 끝나도록 만들었습니다. 프로그램이 실행되는 동안 담당자는 다른 업무를 할 수 있습니다.",
    brief: {
      challenge: "매주 월요일 2명이 6~7시간을 순위 조사에 써야 했고, 밀린 업무는 다른 날의 야근으로 이어졌습니다.",
      decision: "검색부터 업체 식별, 순위 계산과 보고 문장까지 자동으로 끝나야 실제 업무가 줄어든다고 판단했습니다.",
      ownership: "필요한 결과 형식을 직접 정의하고 웹 자동화, 리포팅 설계, 테스트와 플랫폼 변화 대응을 100% 담당했습니다.",
      outcome: "1회 평균 9,500건을 무인 조사하고 10개월간 약 52만 건을 측정해 순위 조사로 인한 야근을 없앴습니다.",
    },
    role: "문제 정의 · 웹 자동화 · 리포팅 설계 · 유지보수",
    contribution: "기획·개발·테스트·운영·유지보수 100%",
    operationPeriod:
      "2025.10 실사용 시작 · 10개월간 매주 운영·플랫폼 변화 대응",
    tools: ["Playwright", "Excel", "브라우저 자동화", "보고 자동화"],
    tags: ["Measurement", "Web Automation", "Reporting"],
    cardMetric: { label: "10개월 누적 측정", value: "약 52만 건" },
    metrics: [
      { label: "1회 처리량", value: "3,000 → 평균 9,500" },
      { label: "기존 투입", value: "2명 × 6~7시간" },
      { label: "자동 실행", value: "2대 × 약 4시간" },
      { label: "누적 측정", value: "약 52만 건" },
    ],
    problem: [
      "매주 월요일 2명이 6~7시간 동안 3,000개 키워드를 직접 검색했습니다.",
      "네이버 통합검색 SERP를 직접 탐색하며 고객사 콘텐츠의 위치를 찾아 콘텐츠 영역 내 순위를 기록했습니다.",
      "공식 API가 없고 상용 프로그램도 필요한 업체별 결과와 보고 형식을 제공하지 못했습니다.",
      "월요일의 다른 업무가 중단되고 미뤄진 업무가 후속 야근으로 이어졌습니다.",
    ],
    judgment:
      "검색만 자동화해서는 업무가 끝나지 않았습니다. SERP에서 고객사 콘텐츠를 찾고, 콘텐츠 영역 내 순위를 계산하며, 실패와 순위권 밖을 구분해 보고 문장까지 만들어야 실제 업무를 줄일 수 있었습니다.",
    execution: [
      "기존 수작업을 SERP 탐색, 콘텐츠 식별, 순위 계산, 기록과 보고 단계로 분해했습니다.",
      "키워드와 대상 업체·블로그 입력 형식을 통일했습니다.",
      "Playwright 기반으로 실제 검색과 SERP 탐색을 자동화했습니다.",
      "대상 블로그 식별, 순위 계산과 예외 결과 분리 로직을 구현했습니다.",
      "‘○○키워드 – 1위’ 형식의 보고 문장을 자동 생성했습니다.",
      "URL 키와 SERP 구성 변경 등 주요 플랫폼 변화에 맞춰 프로그램을 지속적으로 수정했습니다.",
    ],
    evidence: [
      { label: "담당 인력", before: "2명", after: "무인 실행" },
      { label: "1회 조사량", before: "3,000건", after: "평균 9,500건" },
      { label: "업무 형태", before: "직접 검색", after: "보고까지 자동" },
      { label: "다른 업무", before: "진행 불가", after: "동시 수행" },
    ],
    results: [
      "2명이 6~7시간 동안 3,000건을 조사하던 업무를, PC 2대로 약 4시간 동안 8,000~1만 2,000건 조사할 수 있게 바꿨습니다.",
      "별도 수작업 검수와 재가공 없이 주간 보고에 사용했습니다.",
      "프로그램 실행 중 고객 관리와 분석 업무를 수행할 수 있게 했습니다.",
      "실무 적용 첫 달인 2025년 10월부터 순위 조사로 이어지던 야근이 사라졌습니다.",
    ],
    proofs: [
      {
        title: "6,425건 대량 조사 실행 화면",
        description:
          "사람이 검색하지 않아도 진행률, 처리량, 순위 확인 여부와 예상 잔여시간을 보여주며 대량 조사가 진행되는 화면입니다.",
        image: {
          src: "/evidence/rank-monitoring-running.png",
          alt: "6,425개 키워드 중 428개를 처리하며 진행률, 순위 확보·미확보 건수와 예상 잔여시간을 표시하는 KIWI 키워드 순위 확인 프로그램",
          caption:
            "실제 대량 실행 화면 · 처리 428 / 6,425건",
          width: 1239,
          height: 801,
        },
      },
      {
        title: "복사해서 바로 보고하는 결과물",
        description:
          "검색·식별·순위 계산을 마친 뒤 추가 가공 없이 보고에 사용하는 실제 엑셀 결과입니다.",
        image: {
          src: "/evidence/rank-report-results.png",
          alt: "키워드, 업체명, 검색 순위와 보고용 문장을 자동으로 정리한 키워드 순위 확인 엑셀 결과 화면",
          caption:
            "실제 자동 보고 결과 · 검색부터 보고 문장 출력까지 완료",
          width: 1246,
          height: 751,
        },
      },
    ],
    measurement:
      "누적 조사량은 1회 평균 약 9,500건, 월 5~6회, 10개월의 실제 운영 빈도를 기준으로 약 47.5만~57만 건으로 추정했으며 대표값 약 52만 건으로 표현했습니다.",
    learning:
      "필요한 결과를 보여주는 도구가 없었기 때문에, 제가 직접 결과 형식을 정해 만들었습니다. 덕분에 측정 업무가 다른 업무와 야근을 만드는 일이 없어졌습니다.",
  },
  {
    slug: "system-ownership",
    category: "업무 자동화 · 시스템 구축·운영",
    shortTitle: "10개월간 안정 운영으로 검증된 통합 업무 시스템",
    title: "필요한 도구가 없으면 만들고, 환경이 바뀌면 다시 작동하게 했습니다.",
    summary:
      "콘텐츠 제작·검수, 키워드 분석, 순위 측정, 이미지 처리와 각종 모니터링에서 반복되는 일을 자동화했습니다. 2025년 10월부터 실제 업무에 사용했고, 플랫폼이 바뀔 때마다 고쳐가며 10개월간 안정적으로 운영했습니다.",
    brief: {
      challenge: "콘텐츠·이미지·측정·모니터링 수작업이 흩어져 있었고, 플랫폼이 바뀌면 기존 방식과 도구가 쉽게 멈췄습니다.",
      decision: "일회성 도구가 아니라 실제 업무에서 반복 사용하고 변화에도 복구할 수 있는 운영 시스템으로 만들어야 했습니다.",
      ownership: "문제 발견, 성공 기준 정의, 도구 설계·배포, 실무 운영과 유지보수까지 별도 지시 없이 100% 주도했습니다.",
      outcome: "여러 반복 업무를 자동화해 10개월간 운영했습니다. 기능 이상과 화면 구조 변경은 대부분 당일, 범위가 큰 변경은 3일 이내, 노출 로직 변화는 1주 이내 운영 규칙을 수정했습니다.",
    },
    role: "문제 정의 · 업무 자동화 · 실무 운영 · 유지보수",
    contribution: "기획·개발·배포·운영·변화 대응 100%",
    operationPeriod:
      "2025.10 실사용 배포 · 10개월간 안정 운영·플랫폼 변화 대응",
    tools: ["OpenAI API", "Playwright", "Excel·Google Sheets", "Apps Script", "이미지 처리"],
    tags: ["System Ownership", "Process Improvement", "Workflow Automation"],
    cardMetric: { label: "업무 방식", value: "수작업 → 시스템 운영" },
    metrics: [
      { label: "개선 프로젝트 전 과정", value: "기여도 100%" },
      { label: "안정 운영 실적", value: "10개월" },
      { label: "도구·화면 구조 변경 대응", value: "대부분 당일" },
      { label: "블로그 노출 로직 대응", value: "1주 이내" },
    ],
    problem: [
      "처음 주어진 역할은 고객사의 콘텐츠를 정해진 수량만큼 발행하는 것이었고, 업무 개선이나 프로그램 개발 지시는 없었습니다.",
      "콘텐츠 제작·검수, 키워드 분석, 순위 조사, 이미지 처리와 각종 모니터링에 반복 수작업이 흩어져 있었습니다.",
      "공식 API가 없거나 상용 도구가 실제 업무에 필요한 입력·결과 형식을 제공하지 못하는 경우가 많았습니다.",
      "네이버 SERP 구성과 URL 식별 구조, 노출되는 콘텐츠 유형이 바뀌면 기존 방식과 도구가 더 이상 작동하지 않을 수 있었습니다.",
      "한 번 만든 자동화도 실제 업무에서 계속 관리하지 않으면 일회성 시연으로 끝날 수 있었습니다.",
    ],
    judgment:
      "프로그램 개수를 늘리는 것이 목적은 아니었습니다. 사람이 반복 작업에 붙잡히지 않으면서 필요한 결과를 안정적으로 얻고, 외부 환경이 달라져도 계속 사용할 수 있어야 했습니다.",
    execution: [
      "지시받은 업무 범위를 넘어 실제 운영에서 반복되는 시간 낭비와 오류 지점을 자발적으로 찾았습니다.",
      "문제마다 필요한 입력, 원하는 결과 형식과 성공 기준을 먼저 정의했습니다.",
      "현업 요구사항과 로직·예외·검증 기준을 직접 설계하고 Codex를 활용해 실제 업무용 프로그램으로 구현했습니다.",
      "콘텐츠 제작·검수, 키워드 분석, 순위 측정·보고, 이미지 처리와 모니터링 업무를 목적별 내부 도구로 만들었습니다.",
      "플레이스 리뷰 수와 인스타그램 게시물처럼 사람이 반복 확인하던 항목도 자동 수집·모니터링 구조로 전환했습니다.",
      "추가 가공 없이 바로 쓸 수 있는 결과물을 만들고, 약 20분의 설명이면 사용할 수 있도록 사용 흐름을 단순화했습니다.",
      "실제 고객 업무에 적용한 뒤 오류와 사용자 요구, 새로 발견된 병목을 계속 반영했습니다.",
      "콘텐츠 성과, 프로그램 기능 오류와 플랫폼 노출 구조 변화를 구분하고 각각 통제 실험, 원인 분석과 SERP 전략 재설계라는 다른 방식으로 해결했습니다.",
    ],
    improvementMethods: [
      {
        label: "PERFORMANCE IMPROVEMENT",
        title: "가설 기반 성과 개선",
        description:
          "노출 성과가 달라졌을 때는 감으로 규칙을 바꾸지 않고, 다른 조건을 맞춘 뒤 한 가지 변수의 효과를 비교했습니다.",
        steps: [
          "성과 변화 감지",
          "타깃 키워드 SERP 분석",
          "가설 수립",
          "단일 변수 A/B 테스트",
          "4주 누적 TOP 7 진입률 비교",
          "우수안 시스템 반영",
        ],
        example:
          "동일 업체·키워드·발행 시기 등 다른 조건을 맞추고 이미지 수, 원고 엔진, 소제목 등 콘텐츠 변수 하나만 변경했습니다. 수차례 진행한 실험 중 아래에 정리한 대표 실험 3건은 A·B 각 120~500건, 변형안 합계 1,480건을 발행한 뒤 4주 누적 TOP 7 진입률을 비교했습니다.",
      },
      {
        label: "SYSTEM STABILIZATION",
        title: "프로그램 문제는 원인부터 찾아 해결",
        description:
          "결과가 잘못 섞이거나 실행이 멈추면 실험으로 판단하지 않고, 원인을 특정해 로직을 수정했습니다.",
        steps: [
          "이상 징후 감지",
          "영향 범위 확인",
          "근본 원인 특정",
          "예외·복구 로직 수정",
          "수정 전후 재검증",
          "재발 방지",
        ],
        example:
          "비대상 URL 패턴이 순위 결과에 섞이면 제외 규칙을 추가해 수정 전후 표본을 재검증했습니다. 장시간 실행 중 세션이 중단되는 문제에는 실행 간격 제어, 단계별 대기·재시도와 오류 복구 로직을 적용했습니다.",
      },
    ],
    decisionCase: {
      label: "PLATFORM RESPONSE CASE",
      title: "스마트블록 축소 후, 키워드 운영 전략을 다시 설계했습니다.",
      description:
        "플레이스 핵심 검색어에서 파생한 롱테일 키워드의 스마트블록 노출을 활용해 검색 유입을 확보하던 중, 해당 노출 영역이 급격히 축소되면서 기존 키워드 전략의 유효성이 사라졌습니다.",
      steps: [
        {
          label: "01 · SIGNAL",
          title: "노출 경로 변화 감지",
          description:
            "주간 랭크 트래킹에서 기존 키워드군의 상위 노출 수가 빠르게 감소하는 이상 징후를 확인하고 SERP 구성을 다시 점검했습니다.",
        },
        {
          label: "02 · STOP",
          title: "기존 방식의 신규 발행 중단",
          description:
            "스마트블록 노출을 전제로 선별한 롱테일 키워드에 작업량을 계속 투입하지 않고, 해당 방식의 신규 발행을 빠르게 멈췄습니다.",
        },
        {
          label: "03 · REDESIGN",
          title: "SERP 기반 기회 재평가",
          description:
            "스마트블록 진입 가능성을 평가 기준에서 제외하고 검색수요, 통합검색 인기 콘텐츠의 경쟁 강도와 실제 상위 노출 가능성으로 키워드를 다시 선별했습니다.",
        },
        {
          label: "04 · VERIFY",
          title: "후속 발행으로 회복 확인",
          description:
            "노출 가능성이 낮은 키워드를 배제하고 작업량을 재배분한 뒤, 신규 진입·이탈과 가중 점수를 주간 추적하며 키워드 수가 점진적으로 회복되는 흐름을 확인했습니다.",
        },
      ],
      disclosure:
        "콘텐츠 노출 전략을 재설계한 사례이며, URL·화면 구조 변경에 따른 프로그램 기능 수정 사례와 구분해 제시했습니다.",
    },
    evidence: [
      { label: "문제 발견", before: "지시된 업무만 수행", after: "반복 병목을 스스로 찾아 개선" },
      { label: "반복 업무", before: "사람이 직접 확인", after: "자동 수집·처리" },
      { label: "도구 운영", before: "일회성 작업", after: "10개월 실사용" },
      { label: "환경 변화", before: "변경 시 작업 중단", after: "변경 감지 후 신속 복구" },
    ],
    results: [
      "키워드 순위 확인, 모니터링과 이미지 도구에서 플랫폼 화면·구조가 달라진 경우 대부분 당일 수정했고, 범위가 큰 변경도 3일 이내 정상화했습니다.",
      "대량 이미지 처리 자동화는 고객사별 신규 촬영 주기를 1~2개월에서 3~6개월로 늘려 외주비와 촬영팀의 현장 리소스를 줄였습니다.",
      "약 20분의 설명이면 사용할 수 있도록 구성했고, 개발 과정에서 발생한 오류를 정리한 뒤 실사용 중에는 충돌 없이 안정적으로 운영했습니다.",
    ],
    proofs: [
      {
        title: "콘텐츠 운영 통합 워크플로",
        description:
          "사진 분류, 원고 변환, 검수, 제목 수정과 후속 작업을 하나의 흐름으로 연결한 실제 운영 도구입니다.",
        image: {
          src: "/evidence/kiwi-workflow-dashboard.png",
          alt: "사진 분류부터 원고 변환, 검수와 제목 수정까지 다섯 단계로 연결한 KIWI Workflow Suite 대시보드",
          caption:
            "고객사 정보가 포함되지 않은 실제 기본 화면 · 운영 자동화 사례",
          width: 1323,
          height: 863,
        },
      },
      {
        title: "대량 이미지 처리 자동화",
        description:
          "수천 장 규모의 이미지 처리량, 속도, 경과시간과 완료 상태를 자동으로 관리하는 실제 도구입니다.",
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
          "사람이 업체별 페이지를 반복 확인하던 방문자·블로그 리뷰 수를 자동 수집하고, 이전 기록과 비교해 증감까지 확인하는 실제 도구입니다.",
        image: {
          src: "/evidence/place-monitoring-complete.png",
          alt: "42개 플레이스의 방문자 리뷰와 블로그 리뷰 수를 순차 조회해 완료한 플레이스 리뷰 수 모니터링 프로그램",
          caption:
            "실제 실행 완료 화면 · 42개 플레이스 리뷰 수 자동 조회",
          width: 1099,
          height: 702,
        },
      },
      {
        title: "플랫폼 변화 대응을 위한 주간 브리핑",
        description:
          "6월 15일 성과 급락을 감지한 뒤 1주 내 콘텐츠 규칙을 수정하고, 6월 22일부터 주간 데이터를 통해 후속 발행과 회복 흐름을 확인한 실제 리포트입니다.",
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
      "실사용 기간은 2025년 10월부터 현재까지의 실제 운영 기록을 기준으로 10개월로 표현했습니다. 키워드 순위 확인·모니터링·이미지 도구의 기술적 변경은 대부분 당일 수정했으며 범위가 큰 경우 3일 이내 정상화했습니다. 블로그 노출 로직 변화는 성과 하락 감지 후 1주 이내 콘텐츠 규칙을 수정한 시점을 기준으로 하며, 노출 회복은 수정 콘텐츠가 순차 발행된 뒤의 후속 추이로 판단했습니다.",
    learning:
      "프로그램은 만드는 순간보다 실제 업무에서 계속 돌아가게 할 때 가치가 생겼습니다. 콘텐츠 성과는 통제 실험으로, 기능 이상은 원인 분석으로, 노출 구조 변화는 SERP 전략 수정으로 접근해야 정확하게 해결할 수 있었습니다.",
  },
];
