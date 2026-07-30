import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · NOT FOUND</p>
      <h1>찾으시는 페이지가 없습니다.</h1>
      <p>프로젝트 주소가 변경되었거나 존재하지 않는 경로입니다.</p>
      <Link className="button button-dark" href="/">
        포트폴리오로 돌아가기
      </Link>
    </main>
  );
}
