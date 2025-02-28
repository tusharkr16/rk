'use client';

import { useState } from 'react';
import { Upload, Download } from 'lucide-react';

export default function FileUpload({name}) {
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFiles = Array.from(event.dataTransfer.files);
    setFiles(uploadedFiles);
  };

  const handleFileSelect = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleDownload = () => {
    alert('Download Sample Clicked');
  };

  const handleImport = () => {
    alert('Import Clicked');
  };

  return (
    <div className="w-full max-w-3xl  p-4">
      {/* Header */}
      <div className="flex justify-between items-center border rounded-t-lg p-3 bg-gray-100">
        <span className="text-gray-700 font-medium">{name}</span>
        <div className="flex gap-2">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded flex items-center"
            onClick={handleDownload}
          >
            <Download size={16} className="mr-2" />
            Download Sample
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleImport}
          >
            Import
          </button>
        </div>
      </div>

      {/* File Upload Area */}
      <div
        className="border-dashed border-2 border-gray-300 p-10 flex flex-col items-center justify-center text-gray-500 cursor-pointer"
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <Upload size={30} />
        <p className="mt-2">Drop files here or click to upload</p>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileSelect}
          multiple
        />
      </div>

      {/* File Preview */}
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-gray-700 font-medium">Uploaded Files:</h3>
          <ul className="mt-2 text-sm text-gray-600">
            {files.map((file, index) => (
              <li key={index} className="mt-1">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
