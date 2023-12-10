"use client";

import BreadCrumb from "@/components/management/breadCrumb";
import FormPage from "@/components/management/formPage.tsx/formPage";

function RenderPage({ params }: { params: { id: string } }) {
  return (
    <>
      <BreadCrumb lastStep="Add New Car" />
      <FormPage
        apiAction={`http://localhost:2700/cars/${params.id}/update`}
        method="patch"
      />
    </>
  );
}

export default RenderPage;
