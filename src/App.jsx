import Header from "./components/header/header.component";
import Body from "./components/body/body.component";
import { useContext } from "react";
import { SubRedditDataContext } from "./contexts/subRedditData.context";
import NoContent from "./components/noContent/noContent.component";

export default function App() {
  const { subImages } = useContext(SubRedditDataContext);

  return (
    <div className="bg-slate-500 min-h-screen">
      <Header />
      {subImages.length !== 0 ? <Body /> : <NoContent />}
    </div>
  );
}
