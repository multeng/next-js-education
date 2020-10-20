import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About({ title }) {
  const linkClickhandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout title={"About me"}>
      <h1>{title}</h1>
      <button onClick={linkClickhandler}>go back to home </button>
      <button onClick={() => Router.push("/posts")}>
        go back to home inline
      </button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data = await response.json();
  return {
    title: data.title
  };
};
