import { useState, useRef } from "react";
import FileInput from "./FileInput";

import { storeWithProgress } from "../../utils/We3Storage";

function Form() {
  const token = useRef(null);
  const [File, setFile] = useState();
  const [cid, setCid] = useState(null);
  const uploadFile = () => {
    storeWithProgress(setCid, token.current);
  };

  return (
    <div className=" form-control  min-h-fit  min-w-[400px] max-w-[400px] items-center space-y-4 rounded-xl bg-white py-10 px-4">
      <div className="w-full">
        <input
          type="password"
          placeholder="Token (optional)"
          className=" input input-bordered input-primary w-full text-center"
          onChange={(e) => {
            token.current = e.target.value;
          }}
        />
        <label className="label italic ">
          <span className="label-text-alt text-gray-700 ">
            {`you may get a token at `}
            <a
              className=" link text-gray-900 hover:link-hover "
              href="http://web3.storage"
            >
              web3.storage
            </a>
          </span>
        </label>
      </div>
      {/* file input */}
      {!cid ? (
        <FileInput setFile={setFile} File={File}></FileInput>
      ) : (
        <div className="alert break-all text-center text-xs font-bold text-white ">
          {cid}
        </div>
      )}

      <button
        className={`btn btn-primary ${cid ? "btn-disabled" : ""} `}
        onClick={uploadFile}
      >
        upload
      </button>
    </div>
  );
}

export default Form;
