import React, { useState } from "react";
import "./Steps.css";
import { Editor } from "@tinymce/tinymce-react";
function Description({ desc, parentCallback, alerts }) {
  const [state, setstate] = useState(desc);

  return (
    <div className="steps-container ">
      <p>{alerts.desc.vero}</p>
      <p>{alerts.desc.warning}</p>
      <Editor
        name="descFooter"
        value={state}
        apiKey="c6vnj0gx81xgzbxze4xe96d89qt2vzlu9awhccbv4qclc269"
        init={{
          selector: "textarea#basic-example",
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          setup: function (editor) {
            editor.on("mouseLeave", function (e) {
              let value = editor.getContent();
              setstate(value);
              parentCallback(value);
            });
          },
        }}
      />
    </div>
  );
}
export default Description;
