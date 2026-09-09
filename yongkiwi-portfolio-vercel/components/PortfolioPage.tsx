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
    eyebrow: "광고기획 AE · 고객사 운영·콘텐츠 SEO (수정필요 2)",
    title: (
      <>
        고객과 콘텐츠 방향을 정하고,
        <br />{" "}
        제작부터 성과 개선까지 맡는
        <br />{" "}
        <em>AE 이용택입니다. (수정필요 3)</em>
      </>
    ),
    description:
      "50~60개 고객사의 대표와 콘텐츠 방향을 협의하고, 월 약 8,200건의 제작·배포·성과 확인을 담당합니다. (수정필요 4)",
    statement:
      "직접 만든 제작 통합앱으로 90건 제작을 4시간 수작업에서 약 50분 자동 실행으로 바꿨습니다. 그동안 고객 요청을 반영하고 검색 성과를 분석합니다. (수정필요 5)",
    measurement: [
      "월 약 8,200건은 2025.11 이후 실제 운영량",
      "TOP 7 진입률: 업체별 월 발행 키워드 중 고객사 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 한 번 이상 노출된 비율 (수정필요 6)",
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
        검색 수요로 키워드를 고르고,
        <br />{" "}
        콘텐츠 실험으로 성과를 높이는
        <br />{" "}
        <em>AE 이용택입니다. (수정필요 8)</em>
      </>
    ),
    description:
      "검색량과 경쟁도로 키워드를 선별하고, SERP(검색결과 페이지)에서 찾은 가설을 콘텐츠 실험으로 검증했습니다. 발행 후에는 순위와 신규 진입·이탈을 매주 추적했습니다. (수정필요 9)",
    statement:
      "키워드 선별, 콘텐츠 A/B 테스트와 검색 변화 대응을 통해 네이버 통합검색 TOP 7 진입률을 30~40%에서 70~80% 수준으로 높였습니다. (수정필요 10)",
    measurement: [
      "TOP 7 진입률: 업체별 월 발행 키워드 중 고객사 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 한 번 이상 노출된 비율 (수정필요 11)",
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
                <span>성과 기준 (수정필요 12)</span>
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
              <div className="visual-label">운영 전후 (수정필요 13)</div>
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
                <span>네이버 통합검색 TOP 7 진입률 (수정필요 14)</span>
                <strong>30~40%</strong>
                <b>→</b>
                <strong>70~80%</strong>
              </div>
              <div className="visual-footer">
                <span>고객사 소통 (수정필요 15)</span>
                <span>콘텐츠 기획 (수정필요 16)</span>
                <span>제작·운영 (수정필요 17)</span>
                <span>성과 분석 (수정필요 18)</span>
              </div>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>OBSERVE (수정필요 19)</span>
            <b>→</b>
            <span>DEFINE (수정필요 20)</span>
            <b>→</b>
            <span>BUILD (수정필요 21)</span>
            <b>→</b>
            <span>OPERATE (수정필요 22)</span>
            <b>→</b>
            <span>IMPROVE (수정필요 23)</span>
          </div>
        </section>

        <section className="impact section" id="impact">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">핵심 성과 (수정필요 24)</p>
                <h2>
                  반복 작업은 줄이고,
                  <br />
                  실제 운영량과 검색 성과를 높였습니다. (수정필요 25)
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
              <p className="eyebrow">대표 프로젝트 (수정필요 26)</p>
              <h2>제작 자동화부터 검색 성과 개선까지. (수정필요 27)</h2>
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
              <span>업무 도구 운영·유지보수 (수정필요 29)</span>
              <strong>반복 작업을 줄이는 도구를 만들고, 변화에 맞춰 관리했습니다. (수정필요 30)</strong>
              <p>이미지 처리·리뷰 모니터링 등 · 10개월 실무 사용 (수정필요 31)</p>
              <b aria-hidden="true">→</b>
            </Link>
          </div>
        </section>

        <section className="career section" id="career">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">경력 (수정필요 39)</p>
              <h2>콘텐츠 운영과 행사 기획·운영을 경험했습니다. (수정필요 40)</h2>
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
                  <h3>전공에서 배운 기획을 공모전과 실무 교육에 적용했습니다. (수정필요 42)</h3>
                  <p>
                    공모전에서는 타깃과 메시지를 기획하고, 실무 교육에서는 팀원들과 광고를 제작했습니다. (수정필요 43)
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

        <section className="process section" id="process">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">일하는 방식 (수정필요 32)</p>
                <h2>
                  문제를 찾고,
                  <br />
                  해결 방법을 실제 업무에서 검증합니다. (수정필요 33)
                </h2>
              </div>
              <blockquote>
                “필요한 입력과 결과부터 정한 뒤 도구를 만들었습니다. 적용 후에도 고객 요청과 플랫폼 변화에 맞춰 수정했습니다. (수정필요 34)”
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
              <p className="eyebrow">KIWI 업무 도구 (수정필요 35)</p>
              <h2>
                반복해서 하던 작업을
                <br />
                업무별 도구로 자동화했습니다. (수정필요 36)
              </h2>
              <p>
                키워드 분석, 콘텐츠 제작·검수, 순위 조사·보고까지 반복 작업을 자동화했습니다. 필요한 기능을 직접 조정하며 월 약 8,200건 운영에 사용합니다. (수정필요 37)
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
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">업무 태도 (수정필요 44)</p>
              <h2>
                발행 업무를 맡으며,
                <br />
                개선이 필요한 일도 스스로 찾았습니다. (수정필요 45)
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
                업체 대표와 홍보할 내용, 키워드 방향과 시즌별 주제를 협의하고, 수정 요청과 클레임도 직접 처리했습니다. (수정필요 46)
              </p>
              <p className="about-emphasis">
                업무 개선과 프로그램 개발은 별도 지시 없이 시작했습니다. 필요한 기준을 정하고, 직접 만들고 운영하며 보완했습니다. (수정필요 47)
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">연락처 (수정필요 48)</p>
            <h2>
              고객과 정한 방향을 실행하고,
              <br />
              결과를 다음 기획에 반영하겠습니다. (수정필요 49)
            </h2>
            <p>
              콘텐츠 기획·운영과 검색 성과 개선이 필요한 곳에서 함께하고 싶습니다. (수정필요 50)
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
