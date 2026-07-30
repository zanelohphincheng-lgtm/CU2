const ExportImportPanel = () => {
  return (
    <div className="d-flex gap-2">
      <button className="btn btn-outline-custom">
        <i className="bi bi-download"></i> EXPORT JSON
      </button>
      <button className="btn btn-outline-custom">
        <i className="bi bi-upload"></i> IMPORT JSON
      </button>
    </div>
  );
};

export default ExportImportPanel;