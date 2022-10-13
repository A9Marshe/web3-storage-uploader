import { useState } from "react";

function FileInput(props) {
  const { File, setFile } = props;
  const handleChange = (event) => {
    console.log(event.target.files[0].name);
    setFile(event.target.files);
  };

  return (
    <div className=" flex h-12 w-full flex-row overflow-clip rounded-md">
      <input
        onChange={handleChange}
        type="file"
        name="upload"
        id="upload"
        hidden
      />
      <label
        className="btn h-12 cursor-pointer rounded-r-none normal-case"
        htmlFor="upload"
      >
        choose file
      </label>
      <div className="flex w-full items-center  overflow-hidden text-clip rounded-md rounded-l-none border-2 border-l-0 border-gray-500 px-2">
        <span className=" ml-3 w-full truncate text-sm" id="file-chosen">
          {File ? File[0].name : "none"}
        </span>
      </div>
    </div>
  );
}

export default FileInput;
