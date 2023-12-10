"use client";

import BreadCrumb from "@/components/management/breadCrumb";
import FormPage from "@/components/management/formPage.tsx/formPage";

function RenderPage() {
  return (
    <>
      <BreadCrumb lastStep="Add New Car" />
      <FormPage apiAction="http://localhost:2700/cars/create" method="post" />
    </>
  );
}

export default RenderPage;
