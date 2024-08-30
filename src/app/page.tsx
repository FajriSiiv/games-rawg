import MainContent from "./main-content";

export default function Home({ searchParams }: { searchParams: any }) {
  return (
    <div className="flex p-10">
      <MainContent searchParams={searchParams} />
    </div>
  );
}
