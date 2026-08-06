import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ProjectToc } from "@/components/ProjectToc";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/site-data";
import {
  createSocialMetadata,
  type SocialCardKey,
} from "@/lib/site-meta";
import { siteUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.shortTitle,
    description: project.summary,
    ...createSocialMetadata({
      title: `${project.shortTitle} | 이용택 포트폴리오`,
      description: project.summary,
      path: `/projects/${project.slug}`,
      card: project.slug as SocialCardKey,
    }),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const trackingMax = project.performanceTracking
    ? Math.max(...project.performanceTracking.trend.map((item) => item.topSeven))
    : 1;
  const trackingFlowMax = project.performanceTracking
    ? Math.max(
        ...project.performanceTracking.trend.flatMap((item) => [
          item.newEntries,
          item.dropouts,
        ]),
      )
    : 1;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.shortTitle,
    headline: project.title,
    description: project.summary,
    url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
    creator: {
      "@type": "Person",
      name: "이용택",
    },
    keywords: project.tags,
  };

  return (
    <>
      <JsonLd data={projectJsonLd} />
      <SiteHeader compact />
      <main className="project-page" id="main-content">
        <section className="project-hero">
          <div className="container">
            <Link className="back-link" href="/#projects">
              ← 대표 프로젝트
            </Link>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-lead">{project.summary}</p>
            <div className="project-metric-row">
              {project.metrics.map((metric) => (
                <div className="project-metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container project-layout">
          <dl className="project-brief-meta">
            <div>
              <dt>역할</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>기여 범위</dt>
              <dd>{project.contribution}</dd>
            </div>
            <div>
              <dt>운영 기간</dt>
              <dd>{project.operationPeriod}</dd>
            </div>
          </dl>

          <aside className="project-aside">
            <div>
              <span>소속</span>
              <strong>웨이팅리스트</strong>
            </div>
            <div>
              <span>역할</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>기여 범위</span>
              <strong>{project.contribution}</strong>
            </div>
            <div>
              <span>운영 기간</span>
              <strong>{project.operationPeriod}</strong>
            </div>
            <div>
              <span>사용 도구</span>
              <strong>{project.tools.join(" · ")}</strong>
            </div>
            <ProjectToc className="project-toc" />
          </aside>

          <ProjectToc className="project-mobile-toc" />

          <article className="project-article">
            <section id="problem">
              <p className="section-index">01 · PROBLEM</p>
              <h2>문제 상황</h2>
              <ul className="article-list">
                {project.problem.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <blockquote>{project.judgment}</blockquote>

            <section id="decision">
              <p className="section-index">02 · DECISION</p>
              <h2>분석과 실행</h2>
              <ol className="process-list">
                {project.execution.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              {project.improvementMethods ? (
                <div className="improvement-methods">
                  <div className="improvement-methods-heading">
                    <p className="section-index">TWO IMPROVEMENT LOOPS</p>
                    <h3>문제에 따라 해결 방법을 달리했습니다.</h3>
                    <p>
                      성과를 높이기 위한 실험과 프로그램 오류를 고치는 일은
                      같은 방식으로 접근하지 않았습니다.
                    </p>
                  </div>
                  <div className="improvement-method-grid">
                    {project.improvementMethods.map((method, methodIndex) => (
                      <article className="improvement-method-card" key={method.title}>
                        <div className="improvement-method-card-heading">
                          <span>{String(methodIndex + 1).padStart(2, "0")}</span>
                          <p>{method.label}</p>
                        </div>
                        <h4>{method.title}</h4>
                        <p>{method.description}</p>
                        <ol>
                          {method.steps.map((step, stepIndex) => (
                            <li key={step}>
                              <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <div className="improvement-method-example">
                          <b>실제 적용 예시</b>
                          <p>{method.example}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
              {project.decisionCase ? (
                <div className="decision-case">
                  <div className="decision-case-heading">
                    <p className="section-index">{project.decisionCase.label}</p>
                    <h3>{project.decisionCase.title}</h3>
                    <p>{project.decisionCase.description}</p>
                  </div>
                  <div className="decision-case-grid">
                    {project.decisionCase.steps.map((step) => (
                      <article key={step.label}>
                        <span>{step.label}</span>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </article>
                    ))}
                  </div>
                  {project.decisionCase.disclosure ? (
                    <p className="decision-case-disclosure">
                      {project.decisionCase.disclosure}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </section>

            <section className="evidence-panel" id="change">
              <div>
                <p className="section-index">03 · BEFORE → AFTER</p>
                <h2>업무 방식의 변화</h2>
              </div>
              <div className="evidence-grid">
                {project.evidence.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.before}</strong>
                    <b>→</b>
                    <strong>{item.after}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section id="result">
              <p className="section-index">04 · RESULT</p>
              <h2>성과</h2>
              <ul className="result-list">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {project.performanceTracking ? (
                <div className="performance-tracking">
                  <div className="performance-tracking-heading">
                    <p className="section-index">PERFORMANCE MEASUREMENT</p>
                    <h3>{project.performanceTracking.title}</h3>
                    <p>{project.performanceTracking.description}</p>
                  </div>

                  <div className="performance-tracking-metrics">
                    {project.performanceTracking.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="performance-dimension-grid">
                    {project.performanceTracking.dimensions.map((dimension) => (
                      <article key={dimension.label}>
                        <span>{dimension.label}</span>
                        <h4>{dimension.title}</h4>
                        <p>{dimension.description}</p>
                      </article>
                    ))}
                  </div>

                  <div className="performance-chart-grid">
                    <article className="performance-chart-card performance-volume-chart">
                      <div className="performance-chart-heading">
                        <div>
                          <span>WEEKLY TOP 7 KEYWORDS</span>
                          <h4>주차별 SERP TOP 7 키워드 수</h4>
                        </div>
                        <b>익명 전체 집계</b>
                      </div>
                      <div className="performance-column-chart">
                        {project.performanceTracking.trend.map((item) => (
                          <div
                            aria-label={`${item.label} SERP TOP 7 진입 키워드 ${item.topSeven.toLocaleString("ko-KR")}개${item.status ? `, ${item.status}` : ""}`}
                            className={`performance-column${
                              item.status ? " has-status" : ""
                            }`}
                            key={item.label}
                          >
                            <strong>{item.topSeven.toLocaleString("ko-KR")}</strong>
                            <div className="performance-column-track">
                              <span
                                style={{
                                  height: `${Math.max(
                                    12,
                                    (item.topSeven / trackingMax) * 100,
                                  )}%`,
                                }}
                              />
                            </div>
                            <small>{item.label}</small>
                          </div>
                        ))}
                      </div>
                      <div className="performance-milestones">
                        {project.performanceTracking.trend
                          .filter((item) => item.status)
                          .map((item) => (
                            <span key={`${item.label}-${item.status}`}>
                              <b>{item.label}</b>
                              {item.status}
                            </span>
                          ))}
                      </div>
                    </article>

                    <article className="performance-chart-card performance-flow-chart">
                      <div className="performance-chart-heading">
                        <div>
                          <span>NEW ENTRY / EXIT</span>
                          <h4>TOP 7 신규 진입·이탈 키워드</h4>
                        </div>
                        <div className="performance-flow-legend">
                          <span>신규</span>
                          <span>이탈</span>
                        </div>
                      </div>
                      <div className="performance-flow-list">
                        {project.performanceTracking.trend.map((item) => (
                          <div className="performance-flow-row" key={item.label}>
                            <small>{item.label}</small>
                            <div>
                              <span
                                className="is-new"
                                style={{
                                  width: `${Math.max(
                                    4,
                                    (item.newEntries / trackingFlowMax) * 100,
                                  )}%`,
                                }}
                              >
                                {item.newEntries.toLocaleString("ko-KR")}
                              </span>
                              <span
                                className="is-dropped"
                                style={{
                                  width: `${Math.max(
                                    4,
                                    (item.dropouts / trackingFlowMax) * 100,
                                  )}%`,
                                }}
                              >
                                {item.dropouts.toLocaleString("ko-KR")}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  </div>

                  <p className="performance-tracking-note">
                    {project.performanceTracking.note}
                  </p>
                </div>
              ) : null}

              {project.experiments ? (
                <div className="experiment-log">
                  <div className="experiment-log-heading">
                    <p className="section-index">CONTENT EXPERIMENT LOG</p>
                    <h3>
                      수차례 진행한 콘텐츠 실험 중, 통제 조건과 결과가 명확한
                      사례 3건을 선별했습니다.
                    </h3>
                    <p>
                      아래 3건에 한해 A·B 변형안은 합계 1,480건입니다. 전체
                      실험 횟수나 키워드 수가 아니며, 채택안뿐 아니라 효과가
                      미미해 롤백한 실험도 함께 기록했습니다.
                    </p>
                  </div>
                  {project.experimentProtocol ? (
                    <div className="experiment-protocol">
                      {project.experimentProtocol.map((item) => (
                        <div key={item.label}>
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="experiment-log-list">
                    {project.experiments.map((experiment, experimentIndex) => (
                      <article className="experiment-card" key={experiment.title}>
                        <div className="experiment-card-topline">
                          <span>
                            {String(experimentIndex + 1).padStart(2, "0")} ·{" "}
                            {experiment.period}
                          </span>
                          <b
                            className={
                              experiment.status === "채택"
                                ? "is-adopted"
                                : "is-rolled-back"
                            }
                          >
                            {experiment.status}
                          </b>
                        </div>
                        <h4>{experiment.title}</h4>
                        <div className="experiment-context">
                          <div>
                            <b>변화 감지</b>
                            <p>{experiment.signal}</p>
                          </div>
                          <div>
                            <b>가설</b>
                            <p>{experiment.hypothesis}</p>
                          </div>
                        </div>
                        <p className="experiment-control">
                          <b>통제 조건</b>
                          {experiment.control}
                        </p>
                        <div className="experiment-variants">
                          {experiment.variants.map((variant) => (
                            <div key={`${experiment.title}-${variant.label}`}>
                              <span>{variant.label}안</span>
                              <h5>{variant.description}</h5>
                              <p>
                                {variant.topSevenCount} / {variant.sampleSize}
                              </p>
                              <strong>{variant.rate}</strong>
                            </div>
                          ))}
                        </div>
                        <div className="experiment-decision">
                          <strong>{experiment.difference}</strong>
                          <p>{experiment.decision}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="project-proof">
                <div className="project-proof-heading">
                  <p className="section-index">WORKING EVIDENCE</p>
                  <h3>실제 운영 화면과 결과 자료</h3>
                  <p>
                    실제 업무에 사용한 화면과 리포트로 작업 흐름과 결과를
                    보여드립니다.
                  </p>
                </div>
                <div
                  className={`project-proof-grid proof-count-${project.proofs.length}`}
                >
                  {project.proofs.map((proof) => (
                    <article
                      className={`project-proof-card${
                        proof.image ? " has-image" : " is-placeholder"
                      }`}
                      key={proof.title}
                    >
                      {proof.image ? (
                        <a
                          aria-label={`${proof.title} 원본 크기로 보기`}
                          className="project-proof-image"
                          href={proof.image.src}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Image
                            alt={proof.image.alt}
                            height={proof.image.height}
                            sizes="(max-width: 720px) calc(100vw - 60px), 390px"
                            src={proof.image.src}
                            width={proof.image.width}
                          />
                          <span>원본 크기로 보기 ↗</span>
                        </a>
                      ) : (
                        <div className="project-proof-placeholder">
                          <span aria-hidden="true">＋</span>
                          <b>CAPTURE TO ADD</b>
                        </div>
                      )}
                      <div className="project-proof-copy">
                        <h4>{proof.title}</h4>
                        <p>{proof.description}</p>
                        {proof.image ? (
                          <small>{proof.image.caption}</small>
                        ) : (
                          <small>
                            <b>촬영 안내</b>
                            {proof.captureGuide}
                          </small>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="proof-note" id="measurement">
              <p className="section-index">05 · MEASUREMENT NOTE</p>
              <h2>성과 측정 기준</h2>
              <p>{project.measurement}</p>
            </section>

            <section id="learning">
              <p className="section-index">06 · LEARNING</p>
              <h2>배운 점</h2>
              <p>{project.learning}</p>
            </section>

            <p className="security-note">
              화면은 실제 업무 자료를 기반으로 하며, 공개 범위에 맞춰 필요한
              항목은 익명화하거나 재구성합니다.
            </p>
          </article>
        </div>

        <section className="next-project">
          <Link
            className="next-project-link"
            href={`/projects/${nextProject.slug}`}
          >
            <div className="container">
              <p className="eyebrow">NEXT PROJECT</p>
              <div className="next-project-row">
                <span>{nextProject.shortTitle}</span>
                <b aria-hidden="true">→</b>
              </div>
            </div>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
