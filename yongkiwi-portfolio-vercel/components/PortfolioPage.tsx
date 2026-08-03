import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { SiteFooter } from "@/components/SiteFooter";
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
        <br />{" "}
        고객 성과가 반복되는 구조로 바꾸는
        <br />{" "}
        <em>AE 이용택입니다.</em>
      </>
    ),
    description:
      "2~3명이 월 약 2,000건을 발행하던 업무를 현재 1인이 월 약 8,200건 실제 운영하는 체계로 전환했습니다. 이 수치는 처리 한도가 아닌 현재 운영량입니다.",
    statement:
      "90건 제작은 4시간의 수작업에서 약 50분의 무인 자동 실행으로 전환했고, 사람은 그 시간에 고객과 성과를 관리합니다.",
    measurement: [
      "월 약 8,200건은 2025.11 이후 실제 운영량",
      "TOP 7 진입률은 네이버 통합검색 콘텐츠 영역 상위 7개 결과 기준",
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
        측정할 수 없던 콘텐츠 운영에
        <br />{" "}
        KPI와 데이터 수집체계를 만든
        <br />{" "}
        <em>AE 이용택입니다.</em>
      </>
    ),
    description:
      "키워드 리서치, 상위 검색결과(SERP) 분석, 콘텐츠 최적화와 순위 측정을 하나의 네이버 콘텐츠 SEO 사이클로 설계했습니다.",
    statement:
      "검색량·경쟁도 기반 키워드 선별과 단일 변수 A/B 테스트를 결합해 네이버 통합검색 콘텐츠 TOP 7 진입률을 30~40%에서 70~80% 수준으로 높였습니다.",
    measurement: [
      "TOP 7 진입률은 측정 키워드의 콘텐츠 영역 상위 7개 결과 진입 비율",
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
                <span>네이버 콘텐츠 SEO TOP 7 진입률</span>
                <strong>30~40%</strong>
                <b>→</b>
                <strong>70~80%</strong>
              </div>
              <div className="visual-footer">
                <span>문제 정의</span>
                <span>무인 자동화</span>
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
                현재 월 약 8,200건을 실제 운영하고, 사람을 붙잡던 제작과
                측정을 무인 자동화로 전환했습니다. 검색량·경쟁도로 키워드를
                선별하고, SERP 분석과 콘텐츠 A/B 테스트를 더해 네이버 콘텐츠
                SEO 성과를 높였습니다.
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
              <h2>도구가 아니라, 바뀐 결과를 보여드립니다.</h2>
            </div>

            <div className="project-list">
              {orderedProjects.map((project, index) => (
                <Link
                  aria-label={`${project.shortTitle} 상세 보기`}
                  className="project-card"
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                >
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
                네이버 콘텐츠 SEO의 키워드 리서치부터 콘텐츠 제작, 이미지
                처리, 품질 검수, 순위 측정과 보고까지 대규모 실행 전 과정을
                연결했습니다.
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
              <p>
                키워드도 감으로 고르지 않았습니다. 조회수로 실제 검색 수요를
                확인하고, 경쟁도로 우리 콘텐츠가 진입할 가능성까지 검증한
                키워드만 발행하는 기준을 만들었습니다. 이를 상위 검색결과
                분석, 콘텐츠 최적화, 순위 측정과 연결해 네이버 콘텐츠 SEO
                체계로 발전시켰습니다.
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
