import Masthead from "@/components/Masthead";
import TableOfContents from "@/components/TableOfContents";
import Cover from "@/components/sections/Cover";
import Teaser from "@/components/sections/Teaser";
import ExecSummary from "@/components/sections/ExecSummary";
import MarketSize from "@/components/sections/MarketSize";
import Collapse from "@/components/sections/Collapse";
import GenZ from "@/components/sections/GenZ";
import Turnover from "@/components/sections/Turnover";
import Landscape from "@/components/sections/Landscape";
import Thesis from "@/components/sections/Thesis";
import ICP from "@/components/sections/ICP";
import Conclusion from "@/components/sections/Conclusion";

export default function Page() {
  return (
    <>
      <Masthead />
      <TableOfContents />
      <main className="relative">
        <Cover />
        <Teaser />
        <ExecSummary />
        <MarketSize />
        <Collapse />
        <GenZ />
        <Turnover />
        <Landscape />
        <Thesis />
        <ICP />
        <Conclusion />
      </main>
    </>
  );
}
