import React from "react";
import { useSelector } from "react-redux";
import TextContainer from "./TextContainer";

function MarkdowmPreviewer() {
  const { isExpandedPreview } = useSelector((store) => store.markdown);

  return (
    <div className="flex flex-col items-center py-6 bg-teal-300">
      {!isExpandedPreview && <TextContainer title="Editor" isPreview={false} />}
      <div className="py-6" />
      <TextContainer title="Previewer" isPreview />
    </div>
  );
}

export default MarkdowmPreviewer;
