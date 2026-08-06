import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  careers,
  commonMetrics,
  processSteps,
  projects,
  selectedBackground,
  supportingSystems,
} from "@/lib/site-data";

type Role = "advertising" | "performance";

type PortfolioPageProps = {
  role: Role;
};

const roleCopy = {
  advertising: {
    eyebrow: "광고기획 AE · 콘텐츠 운영·업무 개선",
    title: (
      <>
        광고 운영에서 막히는 지점을 찾아,
        <br />{" "}
        더 효율적으로 일하고 성과를 높이는
        <br />{" "}
        <em>AE 이용택입니다.</em>
      </>
    ),
    description:
      "2~3명이 월 약 2,000건을 발행하던 업무를, 현재 1인이 50~60개 고객사와 직접 소통하며 월 약 8,200건을 운영하는 체계로 전환했습니다.",
    statement:
      "사람이 4시간 동안 붙잡고 있던 90건 제작을, 약 50분 동안 프로그램이 자동으로 처리하게 바꿨습니다. 그 시간은 고객 대응과 성과 개선에 씁니다.",
    measurement: [
      "월 약 8,200건은 2025.11 이후 실제 운영량",
      "TOP 7 진입률은 업체별 월 발행 키워드 중 자사 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 진입한 비율",
    ],
    switchHref: "/performance-ae",
    switchLabel: "퍼포먼스 관점으로 보기",
    resumeLabel: "이용택 AE 이력서",
    projectOrder: [
      "operations-transformation",
      "keyword-performance",
      "rank-monitoring",
    ],
  },
  performance: {
    eyebrow: "PERFORMANCE MARKETING AE · NAVER CONTENT SEO",
    title: (
      <>
        감으로 운영하던 콘텐츠를,
        <br />{" "}
        데이터로 판단할 수 있게 만든
        <br />{" "}
        <em>AE 이용택입니다.</em>
      </>
    ),
    description:
      "키워드 리서치, 네이버 통합검색 결과 페이지(SERP) 분석, 콘텐츠 최적화와 랭크 트래킹을 하나의 네이버 콘텐츠 SEO 사이클로 설계했습니다.",
    statement:
      "검색량·경쟁도 기반 키워드 선별과 단일 변수 A/B 테스트를 결합해 네이버 통합검색 콘텐츠 TOP 7 진입률을 30~40%에서 70~80% 수준으로 높였습니다.",
    measurement: [
      "TOP 7 진입률은 업체별 월 발행 키워드 중 자사 콘텐츠가 통합검색 콘텐츠 영역 1~7위에 진입한 비율",
      "70~80%는 2025.11 이후 실제 운영 수준",
    ],
    switchHref: "/",
    switchLabel: "광고기획 관점으로 보기",
    resumeLabel: "이용택 AE 이력서",
    projectOrder: [
      "keyword-performance",
      "rank-monitoring",
      "operations-transformation",
    ],
  },
} as const;

export function PortfolioPage({ role }: PortfolioPageProps) {
  const copy = roleCopy[role];
  const orderedProjects = copy.projectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1>{copy.title}</h1>
              <p className="hero-description">{copy.description}</p>
              <p className="hero-statement">{copy.statement}</p>
              <div
                className="hero-measurement"
                aria-label="핵심 성과 측정 기준"
              >
                <span>MEASUREMENT BASIS</span>
                <p>
                  {copy.measurement.join(" · ")} · 세부 산식은 프로젝트 상세에서
                  확인
                </p>
              </div>
              <div className="hero-actions">
                <Link className="button button-dark" href="#projects">
                  대표 프로젝트 보기
                </Link>
                <Link className="button button-light" href="#career">
                  {copy.resumeLabel}
                </Link>
              </div>
              <Link className="role-switch" href={copy.switchHref}>
                {copy.switchLabel} <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="hero-visual" aria-label="핵심 성과 요약">
              <div className="visual-label">BEFORE → AFTER</div>
              <div className="visual-row visual-row-primary">
                <span>월 실제 발행량</span>
                <strong>2,000</strong>
                <b>→</b>
                <strong>8,200</strong>
              </div>
              <div className="visual-row">
                <span>운영 인원</span>
                <strong>2~3명</strong>
                <b>→</b>
                <strong>1명</strong>
              </div>
              <div className="visual-row">
                <span>네이버 통합검색 콘텐츠 TOP 7 진입률</span>
                <strong>30~40%</strong>
                <b>→</b>
                <strong>70~80%</strong>
              </div>
              <div className="visual-footer">
                <span>고객사 소통</span>
                <span>방향 기획</span>
                <span>실행 운영</span>
                <span>성과 개선</span>
              </div>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>OBSERVE</span>
            <b>→</b>
            <span>DEFINE</span>
            <b>→</b>
            <span>BUILD</span>
            <b>→</b>
            <span>OPERATE</span>
            <b>→</b>
            <span>IMPROVE</span>
          </div>
        </section>

        <section className="impact section" id="impact">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">AE OWNERSHIP AT A GLANCE</p>
                <h2>
                  제가 만든 변화를
                  <br />
                  숫자로 정리했습니다.
                </h2>
              </div>
              <p>
                고객사와 방향을 정하는 일부터 콘텐츠 제작, 성과 측정과
                개선까지 직접 맡았습니다. 반복 업무는 자동화하고, 확보한
                시간은 고객 대응과 성과 개선에 다시 썼습니다.
              </p>
            </div>
            <div className="metric-grid">
              {commonMetrics.map((metric, index) => (
                <Link
                  className={`metric-card${
                    metric.compact ? " metric-card-compact" : ""
                  }`}
                  href={`/projects/${metric.project}`}
                  key={metric.label}
                >
                  <span>0{index + 1}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                  <b>프로젝트 보기 →</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>문제를 어떻게 찾고, 결과를 어떻게 바꿨는지 보여드립니다.</h2>
            </div>

            <div className="project-list">
              {orderedProjects.map((project, index) => (
                <Link
                  aria-label={`${project.cardTitle ?? project.shortTitle} 상세 보기`}
                  className="project-card"
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                >
                  <div className="project-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="project-card-copy">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.cardTitle ?? project.shortTitle}</h3>
                    <p className="project-card-role">
                      <span>AE ROLE</span>
                      {project.role}
                    </p>
                    <p>{project.cardSummary ?? project.summary}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-card-proof">
                    <span>{project.cardMetric.label}</span>
                    <strong>{project.cardMetric.value}</strong>
                    <span className="project-card-cta">
                      상세 보기 →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              className="support-project"
              href="/projects/system-ownership"
            >
              <span>SYSTEM OWNERSHIP</span>
              <strong>통합 업무 시스템 구축·안정 운영</strong>
              <p>수작업 → 시스템 운영 · 10개월 실사용</p>
              <b aria-hidden="true">→</b>
            </Link>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">HOW I WORK</p>
                <h2>
                  주어진 목표를 달성하는 데서 끝내지 않고,
                  <br />
                  더 잘할 방법까지 직접 찾습니다.
                </h2>
              </div>
              <blockquote>
                “프로그램은 만드는 것으로 끝나지 않습니다. 실제 업무에서
                계속 돌아가고, 결과가 좋아질 때까지 고칩니다.”
              </blockquote>
            </div>
            <ol className="process-grid">
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{step.title}</b>
                  <strong>{step.korean}</strong>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="systems section">
          <div className="container systems-grid">
            <div className="systems-copy">
              <p className="eyebrow">KIWI WORKFLOW SUITE</p>
              <h2>
                한 번 잘하는 데서 끝나지 않도록,
                <br />
                업무 전체를 시스템으로 연결했습니다.
              </h2>
              <p>
                네이버 콘텐츠 SEO의 키워드 리서치부터 콘텐츠 제작, 이미지
                처리, 품질 검수, 순위 측정과 보고까지 대규모 실행 전 과정을
                연결했습니다.
              </p>
              <div className="system-note">
                <strong>약 20분</strong>
                <span>설명이면 사용할 수 있도록 단순화한 업무용 도구</span>
              </div>
            </div>
            <ul className="system-list">
              {supportingSystems.map((system, index) => (
                <li key={system}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{system}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="career section" id="career">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">EXPERIENCE</p>
              <h2>고객의 요구를 콘텐츠에 담고, 결과를 다음 기획에 반영했습니다.</h2>
            </div>
            <div className="career-list">
              {careers.map((career) => (
                <article key={career.company}>
                  <div>
                    <span>{career.period}</span>
                    <b>{career.status}</b>
                  </div>
                  <div>
                    <h3>{career.company}</h3>
                    <p>{career.team}</p>
                  </div>
                  <p>{career.description}</p>
                </article>
              ))}
            </div>

            <div className="background-block" id="background">
              <div className="background-heading">
                <p className="eyebrow">SELECTED BACKGROUND</p>
                <div>
                  <h3>지금의 실무 역량은 광고 기획 경험에서 시작됐습니다.</h3>
                  <p>
                    전공과 공모전, 실무교육을 통해 광고 전략과 캠페인 기획의
                    기본기를 쌓았습니다.
                  </p>
                </div>
              </div>
              <div className="career-list background-list">
                {selectedBackground.map((item) => (
                  <article key={`${item.period}-${item.title}`}>
                    <div>
                      <span>{item.period}</span>
                      <b>{item.status}</b>
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">ABOUT</p>
              <h2>
                목표만 주어져도,
                <br />
                더 잘할 방법을 스스로 찾고 끝까지 실행합니다.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                웨이팅리스트에서 처음 받은 역할은 고객사의 블로그 콘텐츠를
                정해진 수량만큼 발행하는 것이었습니다. 하지만 발행량을
                맞추는 것만으로는 발행 지연과 품질 편차, 고객 요청 대응 문제를
                해결할 수 없었습니다.
              </p>
              <p>
                자동화만 한 것은 아닙니다. 업체 대표와 직접 소통하며 블로그에
                담을 내용, 원하는 키워드 방향과 시즌별 기획을 정하고, 중간
                수정과 클레임까지 블로그 운영 전반을 책임졌습니다.
              </p>
              <p className="about-emphasis">
                제가 자동화한 이유는 사람을 줄이기 위해서가 아니라, 사람이
                고객과 성과에 더 집중할 시간을 만들기 위해서였습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
            <h2>
              고객 대응은 더 세밀하게, 운영은 더 효율적으로,
              <br />
              성과는 데이터로 개선하겠습니다.
            </h2>
            <p>
              고객의 목표를 이해하고, 필요한 방법이 없으면 직접 만들며,
              실제 결과가 나올 때까지 책임지겠습니다.
            </p>
            <ContactEmail />
            <div className="contact-role-links">
              <Link href="/">광고기획 관점</Link>
              <Link href="/performance-ae">퍼포먼스 관점</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
