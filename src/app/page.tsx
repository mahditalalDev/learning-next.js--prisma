import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>homepage</h1>
      <p>welcome to my home page</p>
      <Link href={'/admin'}>Go to Admin</Link>
      <Link href={'/register'}>Go to register</Link>
      <Link href={'/articles'}>Go to articles</Link>
      <Link href={'/articles/search'}>Go to search</Link>
      <Link href={'/about'}>Go to about</Link>
    </div>
  );
};

export default HomePage;
