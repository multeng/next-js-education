import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About() {
  const linkClickhandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout title={"About me"}>
      <h1>Eto ya</h1>
      <button onClick={linkClickhandler}>go back to home </button>
      <button onClick={() => Router.push("/posts")}>
        go back to home inline
      </button>
    </MainLayout>
  );
}
