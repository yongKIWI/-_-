import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
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

const projectSections = [
  { id: "problem", label: "문제" },
  { id: "decision", label: "실행" },
  { id: "change", label: "변화" },
  { id: "result", label: "결과" },
  { id: "measurement", label: "측정" },
  { id: "learning", label: "배운 점" },
] as const;

function ProjectToc({ className }: { className: string }) {
  return (
    <nav aria-label="프로젝트 목차" className={className}>
      <span>PROJECT INDEX</span>
      {projectSections.map((section, index) => (
        <a href={`#${section.id}`} key={section.id}>
          {String(index + 1).padStart(2, "0")} {section.label}
        </a>
      ))}
    </nav>
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
            </section>

            <section className="evidence-panel" id="change">
              <div>
                <p className="section-index">BEFORE → AFTER</p>
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
              <p className="section-index">03 · RESULT</p>
              <h2>결과와 성과</h2>
              <ul className="result-list">
                {project.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="proof-note" id="measurement">
              <p className="section-index">MEASUREMENT NOTE</p>
              <h2>성과 측정 기준</h2>
              <p>{project.measurement}</p>
            </section>

            <section id="learning">
              <p className="section-index">04 · LEARNING</p>
              <h2>배운 점과 후속 개선</h2>
              <p>{project.learning}</p>
            </section>

            <p className="security-note">
              고객사 및 내부 정보 보호를 위해 일부 데이터와 화면은
              익명화하거나 재구성했습니다.
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
    </>
  );
}
