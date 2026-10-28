import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentDisclosure } from "@/components/ContentDisclosure";
import { DisclosureNavigation } from "@/components/DisclosureNavigation";
import { JsonLd } from "@/components/JsonLd";
import { ProjectToc } from "@/components/ProjectToc";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects, type Project } from "@/lib/site-data";
import {
  createSocialMetadata,
  type SocialCardKey,
} from "@/lib/site-meta";
import { siteUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function ProjectProofCard({
  proof,
  featured = false,
}: {
  proof: Project["proofs"][number];
  featured?: boolean;
}) {
  return (
    <article
      className={`project-proof-card${proof.image ? " has-image" : " is-placeholder"}${featured ? " is-featured" : ""}`}
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
            sizes={featured
              ? "(max-width: 720px) calc(100vw - 60px), (max-width: 1100px) 55vw, 520px"
              : "(max-width: 720px) calc(100vw - 60px), 390px"}
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
          <small><b>촬영 안내</b>{proof.captureGuide}</small>
        )}
      </div>
    </article>
  );
}

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
  const featuredProof = project.featuredProofIndex !== undefined
    ? project.proofs[project.featuredProofIndex]
    : undefined;
  const supportingProofs = project.proofs.filter(
    (_, index) => index !== project.featuredProofIndex,
  );
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
      <DisclosureNavigation />
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
            {project.scopeNote ? <p className="project-scope-note">{project.scopeNote}</p> : null}
            <div className="project-metric-row">
              {project.metrics.map((metric) => (
                <div className="project-metric" key={metric.label}>
                  <strong>{metric.value.replace(/\s*\(수정필요 \d+\)/g, "")}</strong>
                  {metric.value.match(/\(수정필요 \d+\)/g) ? (
                    <small className="metric-review-marker">{metric.value.match(/\(수정필요 \d+\)/g)?.join(" ")}</small>
                  ) : null}
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
            <ContentDisclosure title="사용 도구">
              <p>{project.tools.join(" · ")}</p>
            </ContentDisclosure>
            <ProjectToc className="project-toc" hasExperiments={Boolean(project.experiments?.length)} />
          </aside>

          <ProjectToc className="project-mobile-toc" hasExperiments={Boolean(project.experiments?.length)} />

          <article className="project-article">
              {project.experiments ? (
                <section className="experiment-log" id="experiments">
                  <div className="experiment-log-heading">
                    <p className="section-index">A/B 테스트 사례 (수정필요 221)</p>
                    <h2>
                      채택한 안과 되돌린 안 (수정필요 222)
                    </h2>
                    <p>
                      다른 조건을 고정하고 변수 하나씩 비교한 후속 개선 실험 중 세 사례입니다. 공통 4주간 주 1회 확인한 누적 진입률로, 전체 운영 진입률과 구분합니다. (수정필요 223)
                    </p>
                  </div>
                  {project.experimentProtocol ? (
                    <ContentDisclosure title="공통 실험 조건과 측정 방식">
                    <div className="experiment-protocol">
                      {project.experimentProtocol.map((item) => (
                        <div key={item.label}>
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      ))}
                    </div>
                    </ContentDisclosure>
                  ) : null}
                  <div className="experiment-log-list">
                    {project.experiments.map((experiment, experimentIndex) => (
                      <ContentDisclosure
                        className="experiment-card"
                        key={experiment.title}
                        eyebrow={`${String(experimentIndex + 1).padStart(2, "0")} · ${experiment.period}`}
                        title={<>{experiment.title}{" "}<span className={experiment.status === "채택" ? "experiment-status is-adopted" : "experiment-status is-rolled-back"}>{experiment.status}</span></>}
                        preview={
                          <>
                            <span className="experiment-sample">A·B안 각각 {experiment.variants[0].sampleSize}</span>
                            <span className="experiment-conditions">{experiment.controlSummary}</span>
                            <span className="experiment-outcome">{experiment.variants[0].description} {experiment.variants[0].rate} → {experiment.variants[1].description} {experiment.variants[1].rate} · {experiment.difference}</span>
                          </>
                        }
                      >
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
                      </ContentDisclosure>
                    ))}
                  </div>
                </section>
              ) : null}

            <section id="problem">
              <p className="section-index">문제 정의 (수정필요 210)</p>
              <h2>문제 상황</h2>
              <ul className="article-list">
                {project.problem.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <blockquote>{project.judgment}</blockquote>

            <section id="decision">
              <h2>분석과 실행 (수정필요 211)</h2>
              {project.clientExample ? (
                <div className="decision-case">
                  <div className="decision-case-heading">
                    <p className="section-index">업체 제안 사례</p>
                    <h3>{project.clientExample.title}</h3>
                    <p>{project.clientExample.context}</p>
                    <p>{project.clientExample.action}</p>
                    <p>{project.clientExample.outcome}</p>
                  </div>
                </div>
              ) : null}
              {project.clientExample && project.execution.length > 0 ? (
                <ContentDisclosure title="키워드 선별·실험·추적 과정" preview={project.cardSummary}>
                  <ol className="process-list">
                    {project.execution.map((item, index) => (
                      <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
                    ))}
                  </ol>
                </ContentDisclosure>
              ) : project.execution.length > 0 ? (
                <>
                  <ol className="process-list">
                    {project.execution.slice(0, 3).map((item, index) => (
                      <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
                    ))}
                  </ol>
                  {project.execution.length > 3 ? (
                    <ContentDisclosure title="구현·운영 과정 더 보기">
                      <ol className="process-list" start={4}>
                        {project.execution.slice(3).map((item, index) => (
                          <li key={item}><span>{String(index + 4).padStart(2, "0")}</span><p>{item}</p></li>
                        ))}
                      </ol>
                    </ContentDisclosure>
                  ) : null}
                </>
              ) : null}
              {project.improvementMethods ? (
                <div className="improvement-methods">
                  <div className="improvement-methods-heading">
                    <p className="section-index">플랫폼 변경 대응 (수정필요 212)</p>
                    <h3>검색 결과·URL 변경 대응</h3>
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
                <div className={`decision-case${project.execution.length === 0 ? " is-primary" : ""}`}>
                  <div className="decision-case-heading">
                    <p className="section-index">{project.decisionCase.label}</p>
                    <h3>{project.decisionCase.title}</h3>
                    <p>{project.decisionCase.description}</p>
                  </div>
                  <div className="decision-case-grid">
                    {project.decisionCase.steps.map((step) => (
                      <ContentDisclosure key={step.label} eyebrow={step.label} title={step.title}>
                        <p>{step.description}</p>
                      </ContentDisclosure>
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

            <section id="result">
              <h2>성과 (수정필요 214)</h2>
              <ul className="result-list">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            {featuredProof ? (
              <div className="project-featured-proof">
                <ProjectProofCard proof={featuredProof} featured />
              </div>
            ) : null}


              <ContentDisclosure id="change" className="result-detail" title="전후 비교와 운영 기준 (수정필요 213)">
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
                <div className="result-learning" id="learning">
                  <h3>실무에 남긴 기준 (수정필요 227)</h3>
                  <p>{project.learning}</p>
                </div>
              </ContentDisclosure>

              {project.performanceTracking ? (
                <div className="performance-tracking">
                  <div className="performance-tracking-heading">
                    <p className="section-index">주간 성과 추적 (수정필요 215)</p>
                    <h3>{project.performanceTracking.title}</h3>
                    <p>{project.performanceTracking.description}</p>
                  </div>

                  <div className="performance-chart-grid">
                    <article className="performance-chart-card performance-volume-chart">
                      <div className="performance-chart-heading">
                        <div>
                          <span>상위 노출 추이 (수정필요 216)</span>
                          <h4>주간 TOP 7 키워드 수 (수정필요 217)</h4>
                        </div>
                        <b>전체 업체 합산 (수정필요 218)</b>
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

                    <ContentDisclosure title="TOP 7 신규 진입·이탈 수 (수정필요 220)" eyebrow="주간 변동 (수정필요 219)">
                    <article className="performance-chart-card performance-flow-chart">
                      <div className="performance-chart-heading">
                        <div>
                          <h4>주별 신규 진입과 이탈 비교</h4>
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
                    </ContentDisclosure>
                  </div>

                  <ContentDisclosure title="추적 지표와 관측 기준">
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

                  <p className="performance-tracking-note">
                    {project.performanceTracking.note}
                  </p>
                  </ContentDisclosure>
                </div>
              ) : null}

              <ContentDisclosure className="project-proof" eyebrow="업무 자료 (수정필요 224)" title="사용한 도구와 결과물 (수정필요 225)" preview={`추가 자료 ${supportingProofs.length}건`}>

                <div
                  className={`project-proof-grid proof-count-${supportingProofs.length}`}
                >
                  {supportingProofs.map((proof) => (
                    <ProjectProofCard key={proof.title} proof={proof} />
                  ))}
                </div>
              </ContentDisclosure>
            </section>

            <ContentDisclosure id="measurement" className="proof-note" eyebrow="측정 기준 (수정필요 226)" title="성과 측정 기준" preview="집계 대상·기간·수치 해석">
              <p>{project.measurement}</p>
            </ContentDisclosure>

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
              <p className="eyebrow">다음 프로젝트 (수정필요 228)</p>
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
