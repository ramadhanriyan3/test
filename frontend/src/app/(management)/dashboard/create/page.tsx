"use client";

import BreadCrumb from "@/components/management/breadCrumb";
import FormPage from "@/components/management/formPage.tsx/formPage";
import PageWraper from "@/components/management/pageWrapper";

function RenderPage() {
  return (
    <>
      <PageWraper buttonType={"button"}>
        <BreadCrumb lastStep="Add New Car" />
        <FormPage apiAction="http://localhost:2700/cars/create" method="post" />
      </PageWraper>
    </>
  );
}

export default RenderPage;
