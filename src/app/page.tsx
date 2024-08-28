import MainContent from "./main-content";

export default function Home({ searchParams }: { searchParams: any }) {
  return (
    <div className="flex p-10">
      <div className="flex-1"></div>
      <div className="flex-[5]">
        <MainContent searchParams={searchParams} />
      </div>
    </div>
  );
}
