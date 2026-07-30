import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import {
  careers,
  commonMetrics,
  processSteps,
  projects,
  supportingSystems,
} from "@/lib/site-data";

type Role = "advertising" | "performance";

type PortfolioPageProps = {
  role: Role;
};

const roleCopy = {
  advertising: {
    eyebrow: "ADVERTISING AE · MARKETING OPERATIONS",
    title: (
      <>
        광고 운영의 병목을 찾고,
        <br />
        고객 성과가 반복되는 구조로 바꾸는
        <br />
        <em>AE 이용택입니다.</em>
      </>
    ),
    description:
      "2~3인이 월 2,000건을 운영하던 체계를 1인·월 7,200건으로 전환하고, 상위 7위 노출률을 30~40%에서 70~80%로 개선했습니다.",
    statement:
      "AI로 업무를 줄인 사람이 아니라, 확보한 시간을 고객 성과에 다시 투자했습니다.",
    measurement: [
      "월 발행량은 최근 실제 월 운영 기준",
      "노출률은 네이버 통합검색 상위 7위 기준",
    ],
    switchHref: "/performance-ae",
    switchLabel: "퍼포먼스 AE 관점으로 보기",
    resumeLabel: "광고기획 AE 경력 요약",
    projectOrder: [
      "operations-transformation",
      "keyword-performance",
      "rank-monitoring",
    ],
  },
  performance: {
    eyebrow: "PERFORMANCE MARKETING AE · SEARCH CONTENT",
    title: (
      <>
        측정할 수 없던 콘텐츠 운영에
        <br />
        KPI와 데이터 수집체계를 만든
        <br />
        <em>퍼포먼스 AE 이용택입니다.</em>
      </>
    ),
    description:
      "조회수·경쟁도 기반의 키워드 전략과 약 52만 건의 검색 순위 측정을 통해 상위 7위 노출률을 30~40%에서 70~80%로 높였습니다.",
    statement:
      "도구가 없어서 측정하지 못한 것이 아니라, 측정하기 위해 도구를 만들었습니다.",
    measurement: [
      "누적 조사량은 10개월 실제 운영 빈도 기반 추정",
      "노출률은 네이버 통합검색 상위 7위 기준",
    ],
    switchHref: "/advertising-ae",
    switchLabel: "광고기획 AE 관점으로 보기",
    resumeLabel: "퍼포먼스 AE 경력 요약",
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
      <main id="top">
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
                  공개
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
                {copy.switchLabel} <span>↗</span>
              </Link>
            </div>

            <div className="hero-visual" aria-label="핵심 성과 요약">
              <div className="visual-label">BEFORE → AFTER</div>
              <div className="visual-row visual-row-primary">
                <span>월 발행량</span>
                <strong>2,000</strong>
                <b>→</b>
                <strong>7,200</strong>
              </div>
              <div className="visual-row">
                <span>운영 인원</span>
                <strong>2~3명</strong>
                <b>→</b>
                <strong>1명</strong>
              </div>
              <div className="visual-row">
                <span>상위 노출률</span>
                <strong>30~40%</strong>
                <b>→</b>
                <strong>70~80%</strong>
              </div>
              <div className="visual-footer">
                <span>문제 정의</span>
                <span>시스템 구축</span>
                <span>실무 운영</span>
                <span>성과 검증</span>
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
                <p className="eyebrow">IMPACT AT A GLANCE</p>
                <h2>
                  숫자는 화려한 수사가 아니라
                  <br />
                  바뀐 업무의 증거입니다.
                </h2>
              </div>
              <p>
                주어진 업무량을 감당하는 데서 멈추지 않고, 더 많은 고객을 더
                안정적으로 운영하면서 실제 검색 성과까지 높였습니다.
              </p>
            </div>
            <div className="metric-grid">
              {commonMetrics.map((metric, index) => (
                <Link
                  className="metric-card"
                  href={`/projects/${metric.project}`}
                  key={metric.label}
                >
                  <span>0{index + 1}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                  <b>프로젝트 보기 ↗</b>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>도구가 아니라, 바뀐 결과를 보여드립니다.</h2>
            </div>

            <div className="project-list">
              {orderedProjects.map((project, index) => (
                <article className="project-card" key={project.slug}>
                  <div className="project-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="project-card-copy">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.shortTitle}</h3>
                    <p>{project.summary}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-card-proof">
                    <span>{project.cardMetric.label}</span>
                    <strong>{project.cardMetric.value}</strong>
                    <Link
                      aria-label={`${project.shortTitle} 상세 보기`}
                      href={`/projects/${project.slug}`}
                    >
                      상세 보기 ↗
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <Link
              className="support-project"
              href="/projects/image-operations"
            >
              <span>ADDITIONAL CASE</span>
              <strong>촬영 의존도를 낮춘 이미지 운영체계</strong>
              <p>촬영 주기 1~2개월 → 3~6개월</p>
              <b>↗</b>
            </Link>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">HOW I WORK</p>
                <h2>
                  주어진 일을 끝내는 데서
                  <br />
                  멈추지 않습니다.
                </h2>
              </div>
              <blockquote>
                “프로그램을 만드는 것이 끝이 아니라, 실제 업무에서 성과가
                반복될 때까지 운영하는 것이 제 일입니다.”
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
                성과 뒤에는
                <br />
                반복 가능한 시스템이 있습니다.
              </h2>
              <p>
                키워드 선별부터 콘텐츠 제작, 이미지 처리, 품질 검수, 순위
                측정과 보고까지 마케팅 운영 전 과정을 연결했습니다.
              </p>
              <div className="system-note">
                <strong>약 20분</strong>
                <span>설명으로 사용할 수 있는 운영형 도구</span>
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
              <h2>마케팅 실무를 직접 운영하며 바꿔 왔습니다.</h2>
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

            <div className="education">
              <p className="eyebrow">EDUCATION</p>
              <div>
                <span>2025.02</span>
                <h3>한남대학교 졸업</h3>
                <p>광고홍보학 전공 · 정치언론학 복수전공</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">ABOUT</p>
              <h2>
                목표만 주어지면,
                <br />
                성과가 반복되는 방식까지 만듭니다.
              </h2>
            </div>
            <div className="about-copy">
              <p>
                웨이팅리스트에서 처음 받은 역할은 고객사의 블로그 콘텐츠를
                정해진 수량만큼 발행하는 것이었습니다. 하지만 발행량을
                맞추는 것만으로는 고객과 조직의 문제가 해결되지 않았습니다.
              </p>
              <p>
                반복되는 야근, 수작업 검수, 성과를 알 수 없는 키워드, 하루를
                사용해야 하는 순위 조사 업무를 하나씩 분석했습니다. 기존
                도구로 해결할 수 없는 문제는 AI 코딩과 웹 자동화를 공부해
                직접 시스템으로 만들었습니다.
              </p>
              <p className="about-emphasis">
                저에게 자동화는 사람을 대신하는 기술이 아닙니다. 고객을 더
                깊게 이해하고 더 나은 기획과 개선에 집중할 시간을 만드는
                수단입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
            <h2>
              운영과 성과가 함께 좋아지는
              <br />
              구조를 만들겠습니다.
            </h2>
            <p>
              고객의 목표를 이해하는 기획력과 필요한 실행체계를 직접 만드는
              오너십으로 기여하겠습니다.
            </p>
            <a className="contact-mail" href="mailto:tag.y603@gmail.com">
              tag.y603@gmail.com <span>↗</span>
            </a>
            <div className="contact-role-links">
              <Link href="/advertising-ae">광고기획 AE 포트폴리오</Link>
              <Link href="/performance-ae">퍼포먼스 AE 포트폴리오</Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div>
            <b>이용택</b>
            <span>Marketing AE · YONGKIWI</span>
          </div>
          <p>© 2026 Yongtaek Lee. Built around measurable change.</p>
        </div>
      </footer>
    </>
  );
}
