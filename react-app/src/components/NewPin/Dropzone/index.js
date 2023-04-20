  import { useCallback, useState } from "react"
  import { useDropzone } from "react-dropzone"

  function Dropzone({ className, setImgFile }) {
    const [uploadedFile, setUploadedFile] = useState(null)
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
      <div {...getRootProps({
        className: className
      }
      )}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }

        {uploadedFile &&
          <img src={uploadedFile[0].preview} alt='lol' className="NP-image-preview" />
        }
      </div>
    )
  }

  export default Dropzone
