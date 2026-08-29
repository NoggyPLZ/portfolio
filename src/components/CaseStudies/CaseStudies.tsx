import { Navigate, useParams } from "react-router";
import CaseStudiesHero from "./CaseStudiesHero";
import { caseStudiesArr } from "../../data/caseStudies";
import CaseIntroSection from "./CaseIntroSection";
import CaseSecondarySection from "./CaseSecondarySection";
import CaseResults from "./CaseResults";
import CaseClientRoleYear from "./CaseClientRoleYear";
import FooterLine from "../../layout/FooterLine";
import CaseStudyBottomFacts from "./CaseStudyBottomFacts";

export default function CaseStudies() {
  const param = useParams();
  const caseobj = caseStudiesArr.find((n) => n.slug === param.slug);

  if (!caseobj) return <Navigate to="/work" replace />;

  return (
    <div>
      <CaseStudiesHero
        name={caseobj.hero.name}
        image={caseobj.hero.image}
        alt={caseobj.hero.alt}
        width={caseobj.hero.width}
        height={caseobj.hero.height}
      />
      <CaseClientRoleYear
        client={caseobj.topFacts.client}
        role={caseobj.topFacts.role}
        years={caseobj.topFacts.years}
      />
      {caseobj.rows.map((el, i) => {
        if (i === 0) {
          return (
            <CaseIntroSection
              header={el.header}
              copy={el.copy}
              image={el.image}
              key={i}
            />
          );
        } else if (i === caseobj.rows.length - 1) {
          return (
            <CaseResults
              header={el.header}
              copy={el.copy}
              image={el.image}
              key={i}
            />
          );
        } else {
          return (
            <CaseSecondarySection
              header={el.header}
              copy={el.copy}
              image={el.image}
              beforeAndAfter={el.beforeAndAfter || false}
              key={i}
              light={i % 2 !== 0}
            />
          );
        }
      })}
      <CaseStudyBottomFacts facts={caseobj.bottomFacts} />

      <FooterLine />
    </div>
  );
}
