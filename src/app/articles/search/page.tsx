interface SearchArticleProps {
  searchParams: { title: string }
}

const Search = ({ searchParams }: SearchArticleProps) => {
  console.log(searchParams.title)
  return (
    <section className="fix-height container m-auto px-5">
      <h1 className="text-2xl font-bold">Search text is :{searchParams.title}</h1>
    </section>
  )
};

export default Search;
