import CmsTitle from "@/components/management/mainTitle";
import CardContainer from "@/components/management/mainPage/cardContainer";
import BreadCrumb from "@/components/management/breadCrumb";
import { ButtonTypeContext } from "@/components/buttonTypeContext";
import PageWraper from "@/components/management/pageWrapper";

function RenderPage() {
  return (
    <>
      <PageWraper buttonType="button">
        <BreadCrumb lastStep="" />
        <CmsTitle />
        <CardContainer />
      </PageWraper>
    </>
  );
}

export default RenderPage;
