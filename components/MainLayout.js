import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "next app" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, best-page, react" />
        <meta name="description" content="tutorial for me" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          nav a {
            text-decoration: none;
            color: #fff;
          }
          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}
