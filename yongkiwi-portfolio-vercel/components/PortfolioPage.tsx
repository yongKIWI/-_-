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
    eyebrow: "광고기획 AE · 네이버 콘텐츠 운영·업무 개선 (수정필요)",
    title: (
      <>
        콘텐츠 운영의 병목을 찾아,
        <br />{" "}
        고객 대응과 검색 성과를 함께 개선한
        <br />{" "}
        <em>AE 이용택입니다. (수정필요)</em>
      </>
    ),
    description:
      "2~3명이 월 약 2,000건을 발행하던 업무를 개선해, 현재는 1인이 50~60개 고객사와 소통하며 월 약 8,200건을 운영하고 있습니다. (수정필요)",
    statement:
      "90건을 제작하는 데 사람이 약 4시간을 투입했지만, 현재는 프로그램이 약 50분 동안 자동으로 처리합니다. 실행 중 확보한 시간은 고객 대응과 성과 분석에 사용합니다. (수정필요)",
    measurement: [
      "월 약 8,200건은 2025.11 이후 실제 운영량",
      "진입률은 업체별 월 발행 키워드 중 자사 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 진입한 비율 (수정필요)",
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
    eyebrow: "퍼포먼스 마케팅 AE · 네이버 콘텐츠 SEO (수정필요)",
    title: (
      <>
        검색량과 경쟁도를 확인하지 않던 콘텐츠 운영을,
        <br />{" "}
        데이터로 선별하고 추적하는 방식으로 바꾼
        <br />{" "}
        <em>AE 이용택입니다. (수정필요)</em>
      </>
    ),
    description:
      "키워드 리서치, 네이버 통합검색 결과 페이지(SERP) 분석, 콘텐츠 실험과 주간 순위 추적을 하나의 운영 과정으로 연결했습니다. (수정필요)",
    statement:
      "검색량·경쟁도 기반 키워드 선별과 단일 변수 A/B 테스트를 적용해 네이버 통합검색 콘텐츠 영역 1~7위 진입률을 30~40%에서 70~80% 수준으로 높였습니다. (수정필요)",
    measurement: [
      "진입률은 업체별 월 발행 키워드 중 자사 콘텐츠가 네이버 통합검색 콘텐츠 영역 1~7위에 진입한 비율 (수정필요)",
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
                <span>수치 기준 (수정필요)</span>
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
              <div className="visual-label">주요 변화 (수정필요)</div>
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
                <span>네이버 통합검색 콘텐츠 영역 1~7위 진입률 (수정필요)</span>
                <strong>30~40%</strong>
                <b>→</b>
                <strong>70~80%</strong>
              </div>
              <div className="visual-footer">
                <span>고객사 협의 (수정필요)</span>
                <span>콘텐츠 기획 (수정필요)</span>
                <span>제작·운영 (수정필요)</span>
                <span>성과 분석 (수정필요)</span>
              </div>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <span>OBSERVE (수정필요)</span>
            <b>→</b>
            <span>DEFINE (수정필요)</span>
            <b>→</b>
            <span>BUILD (수정필요)</span>
            <b>→</b>
            <span>OPERATE (수정필요)</span>
            <b>→</b>
            <span>IMPROVE (수정필요)</span>
          </div>
        </section>

        <section className="impact section" id="impact">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">핵심 성과 (수정필요)</p>
                <h2>
                  업무 방식의 변화를
                  <br />
                  주요 수치로 정리했습니다. (수정필요)
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
              <p className="eyebrow">대표 프로젝트 (수정필요)</p>
              <h2>문제 발견부터 실행과 결과까지 정리했습니다. (수정필요)</h2>
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
                      <span>담당 역할 (수정필요)</span>
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
              <span>업무 자동화와 유지보수 (수정필요)</span>
              <strong>반복 업무 자동화 도구 구축·운영 (수정필요)</strong>
              <p>수작업 → 자동화 도구 운영 · 10개월 실사용 (수정필요)</p>
              <b aria-hidden="true">→</b>
            </Link>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">일하는 방식 (수정필요)</p>
                <h2>
                  주어진 목표를 수행하면서,
                  <br />
                  반복되는 문제와 개선 기회를 함께 찾습니다. (수정필요)
                </h2>
              </div>
              <blockquote>
                “자동화 도구는 실제 업무에 적용한 뒤에도 오류와 플랫폼 변화에
                맞춰 수정하며 사용했습니다. (수정필요)”
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
              <p className="eyebrow">KIWI 업무 도구 모음 (수정필요)</p>
              <h2>
                반복 업무를 줄일 수 있도록,
                <br />
                콘텐츠 운영 과정을 여러 업무 도구로 연결했습니다. (수정필요)
              </h2>
              <p>
                네이버 콘텐츠 SEO의 키워드 리서치부터 콘텐츠 제작, 이미지
                처리, 품질 검수, 순위 측정과 보고까지 월 8,000건 이상을
                운영하는 과정을 연결했습니다. (수정필요)
              </p>
              <div className="system-note">
                <strong>약 20분</strong>
                <span>약 20분의 안내로 사용할 수 있도록 구성한 업무용 도구 (수정필요)</span>
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
              <p className="eyebrow">경력 (수정필요)</p>
              <h2>고객 협의부터 콘텐츠 운영과 성과 분석까지 담당했습니다. (수정필요)</h2>
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
                <p className="eyebrow">관련 경험 (수정필요)</p>
                <div>
                  <h3>광고 기획의 기본기를 쌓은 전공·공모전·교육 경험입니다. (수정필요)</h3>
                  <p>
                    전공과 공모전, 실무 교육에서 광고 전략과 캠페인 기획을
                    경험했습니다. (수정필요)
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
              <p className="eyebrow">업무 태도 (수정필요)</p>
              <h2>
                주어진 발행 목표를 수행하면서,
                <br />
                고객 대응과 성과를 개선할 방법도 함께 찾았습니다. (수정필요)
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
                업체 대표와 소통하며 블로그에
                담을 내용, 원하는 키워드 방향과 시즌별 기획을 정하고, 중간
                수정과 클레임까지 블로그 운영 전반을 책임졌습니다. (수정필요)
              </p>
              <p className="about-emphasis">
                자동화로 확보한 시간은 고객 요청 대응과 콘텐츠 성과 분석에
                사용했습니다. (수정필요)
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">연락처 (수정필요)</p>
            <h2>
              고객의 요구를 실행 가능한 콘텐츠 기준으로 정리하고,
              <br />
              운영 결과를 다음 기획에 반영하는 AE가 되겠습니다. (수정필요)
            </h2>
            <p>
              고객 협의, 콘텐츠 운영과 성과 분석을 연결해 더 나은 실행안을
              제안하겠습니다. (수정필요)
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
