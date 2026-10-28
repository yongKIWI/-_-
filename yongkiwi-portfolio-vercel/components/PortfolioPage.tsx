import Link from "next/link";
import { ContentDisclosure } from "@/components/ContentDisclosure";
import { DisclosureNavigation } from "@/components/DisclosureNavigation";
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
    eyebrow: "광고기획 AE · 콘텐츠 운영·SEO (수정필요 2)",
    title: (
      <>
        콘텐츠 기획부터
        <br />{" "}
        제작과 성과 개선까지,
        <br />{" "}
        <em>AE 이용택입니다. (수정필요 3)</em>
      </>
    ),
    description:
      "업체 대표와 네이버 블로그 콘텐츠 방향을 협의하고, 제작·배포 관리와 검색 성과 분석을 맡고 있습니다. (수정필요 4)",
    statement:
      "직접 만든 통합앱이 제작·검수를 자동 처리하는 동안 업체 응대와 검색 성과 분석을 진행합니다. (수정필요 5)",
    measurement: [
      "월 약 8,200건은 2025.11 이후 실제 운영량",
      "TOP 7 진입률: 업체별 월 발행 실수요 키워드 중 업체 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 한 번 이상 노출된 비율 (수정필요 6)",
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
    eyebrow: "네이버 콘텐츠 SEO · 데이터 분석·실험 (수정필요 7)",
    title: (
      <>
        키워드 분석과
        <br />{" "}
        콘텐츠 실험으로 성과를 높이는
        <br />{" "}
        <em>AE 이용택입니다. (수정필요 8)</em>
      </>
    ),
    description:
      "검색량·경쟁도로 키워드를 선별하고 콘텐츠를 실험합니다. 발행 후 순위와 신규 진입·이탈을 매주 추적합니다. (수정필요 9)",
    statement:
      "진입률 개선은 키워드 선별, 콘텐츠 A/B 테스트와 검색 변화 대응을 함께 적용한 결과입니다. (수정필요 10)",
    measurement: [
      "TOP 7 진입률: 업체별 월 발행 실수요 키워드 중 업체 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 한 번 이상 노출된 비율 (수정필요 11)",
      "약 1~5% → 40~60%는 실수요 키워드 기준",
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

  const orderedMetrics = role === "performance"
    ? [commonMetrics[2], commonMetrics[0], commonMetrics[1], commonMetrics[3]]
    : commonMetrics;

  return (
    <>
      <DisclosureNavigation />
      <SiteHeader />
      <main id="main-content">
        <section className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1>{copy.title}</h1>
              <p className="hero-description">{copy.description}</p>
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
              <ContentDisclosure className="hero-context" title="업무 범위와 성과 기준 (수정필요 12)">
                <p>{copy.statement}</p>
                <ul>
                  {copy.measurement.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </ContentDisclosure>
            </div>

            <div className="hero-impact" id="impact" aria-label="핵심 성과 요약">
              <div className="hero-impact-heading">
                <p className="eyebrow">핵심 성과 (수정필요 24)</p>
                <h2>제작 효율과 검색 성과 (수정필요 25)</h2>
                <p className="hero-impact-caption">운영 전후 (수정필요 13)</p>
              </div>
              <div className="metric-grid">
                {orderedMetrics.map((metric) => (
                  <Link
                    className={`metric-card${metric.compact ? " metric-card-compact" : ""}`}
                    href={`/projects/${metric.project}`}
                    key={metric.label}
                  >
                    <strong>{metric.value}</strong>
                    <p>{metric.label}</p>
                    <b>프로젝트 보기 →</b>
                  </Link>
                ))}
              </div>
              <p className="hero-metric-context">
                TOP 7: 월 발행 실수요 키워드 중 네이버 통합검색 콘텐츠 1~7위에 한 번 이상 노출된 비율입니다. (수정필요 14)
              </p>
              <div className="visual-footer">
                <span>업체 소통 (수정필요 15)</span>
                <span>콘텐츠 기획 (수정필요 16)</span>
                <span>제작·운영 (수정필요 17)</span>
                <span>성과 분석 (수정필요 18)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">대표 프로젝트 (수정필요 26)</p>
              <h2>기획·제작·분석의 개선 사례 (수정필요 27)</h2>
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
                      <span>담당 역할 (수정필요 28)</span>
                      {project.role}
                    </p>
                    <p>{project.cardSummary ?? project.summary}</p>
                  </div>
                  <div className="project-card-proof">
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
              <span>업무 도구 운영·유지보수 (수정필요 29)</span>
              <strong>이미지 처리·모니터링·업무 관리 자동화 (수정필요 30)</strong>
              <p>실무 도입부터 플랫폼 변경 대응까지 (수정필요 31)</p>
              <b aria-hidden="true">→</b>
            </Link>
          </div>
        </section>

        <section className="career section" id="career">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">경력 (수정필요 39)</p>
              <h2>콘텐츠 운영 · 행사 기획 (수정필요 40)</h2>
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
                <p className="eyebrow">관련 경험 (수정필요 41)</p>
                <div>
                  <h3>학력·수상·실무 교육 (수정필요 42)</h3>
                  <p>
                    캠페인 전략 기획과 팀 광고 제작 경험 (수정필요 43)
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

        <section className="process section working-summary" id="process">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">일하는 방식 (수정필요 32)</p>
                <h2>
                  발행 업무에서 시작한 개선 (수정필요 33)
                </h2>
              </div>
              <p>발행 지연과 반복 작업을 줄이기 위해, 별도 지시 없이 개선안을 기획하고 도구를 개발했습니다. (수정필요 47)</p>
            </div>
            <ContentDisclosure title="개선 배경 (수정필요 44)" id="about">
              <h3>정해진 발행량, 반복되는 지연과 수정 (수정필요 45)</h3>
              <p>처음 맡은 일은 정해진 수량의 블로그 제작·배포 관리였습니다. 수량을 맞추는 데 그치지 않고 발행 지연과 품질 편차, 요청 대응 문제를 개선했습니다.</p>
              <p>업체 대표와 홍보 내용·키워드·시즌 주제를 협의하고, 수정 요청과 클레임을 직접 처리했습니다. (수정필요 46)</p>
            </ContentDisclosure>
            <ContentDisclosure title="개선 과정">
              <p>입력·결과·검수 기준을 정해 구현하고, 적용 후 업체 요청과 플랫폼 변화에 맞춰 수정했습니다. (수정필요 34)</p>
              <div className="process-labels" aria-hidden="true">
                <span>OBSERVE (수정필요 19)</span><span>DEFINE (수정필요 20)</span><span>BUILD (수정필요 21)</span><span>OPERATE (수정필요 22)</span><span>IMPROVE (수정필요 23)</span>
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
            </ContentDisclosure>
            <ContentDisclosure title="KIWI 업무 도구 (수정필요 35)">
            <div className="systems-copy">
              <h3>
                분석부터 보고까지 사용하는 도구 (수정필요 36)
              </h3>
              <p>
                아래 도구를 직접 만들고, 필요한 기능을 수정하며 사용합니다. (수정필요 37)
              </p>
            </div>
            <ul className="system-list">
              {supportingSystems.map((system, index) => (
                <li key={system}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{system}</strong>
                </li>
              ))}
            </ul>
            </ContentDisclosure>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">연락처 (수정필요 48)</p>
            <h2>
              AE 이용택 (수정필요 49)
            </h2>
            <p>
              채용 문의는 아래 이메일로 부탁드립니다. (수정필요 50)
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
