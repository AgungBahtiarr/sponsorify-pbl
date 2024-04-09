import { UploadButton } from "../utils/uploadthing";
 
export function ImageUploader() {
  return (
    <UploadButton
      endpoint="fileUploader"
      onClientUploadComplete={(res) => {
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}