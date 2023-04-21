import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

function Dropzone({ className, setImgFile, errors, uploadedFile, setUploadedFile }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    if (acceptedFiles?.length) {

      if (acceptedFiles?.length) {
        const file = acceptedFiles[0];
        setUploadedFile([
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ])
        setImgFile(file)
      }
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      {/* {errors.imgFile && <span className="NP-errors">{errors.imgFile}</span>} */}
      <div {...getRootProps({
        className: className
      }
      )}>

        {/* <input {...getInputProps()} />
        {
          isDragActive ?
            <div className="DZ-inner-text">
              <i class="fa-solid fa-circle-arrow-up fa-rotate-180 fa-xl"></i>
              <p>Drop the file here!</p>
            </div>
            :
            <div className="DZ-inner-text">
              <i class="fa-solid fa-circle-arrow-up fa-xl"></i>
              <p>Drag and drop or click to upload</p>
            </div>
        } */}

        {uploadedFile ? (
          // The file has been uploaded, so render only the input
          <input {...getInputProps()} />
        ) : (
          // The file has not been uploaded, so render the input and the text
          <div>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="DZ-inner-text">
                <i className="fa-solid fa-circle-arrow-up fa-rotate-180 fa-xl"></i>
                <p>Drop the file here!</p>
              </div>
            ) : (
              <div className="DZ-inner-text">
                <i className="fa-solid fa-circle-arrow-up fa-xl"></i>
                <p>Drag and drop or click to upload</p>
              </div>
            )}
          </div>
        )}

        {uploadedFile &&
          <img src={uploadedFile[0].preview} alt='preview' className="NP-image-preview" />
        }
      </div>
    </>
  )
}

export default Dropzone
