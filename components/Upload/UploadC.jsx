// pages/_app.js
import "primereact/resources/themes/saga-blue/theme.css"; // or other theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import React from "react";
import { FileUpload } from "primereact/fileupload";

export default function UploadC() {
  const customBase64Uploader = async (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
      console.log(base64data);
    };
  };

  return (
    <div className="card flex justify-content-center">
      <FileUpload
        mode="basic"
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        customUpload
        uploadHandler={customBase64Uploader}
      />
    </div>
  );
}
