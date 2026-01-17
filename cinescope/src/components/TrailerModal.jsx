import "./TrailerModal.css";

export default function TrailerModal({ trailerKey, onClose }) {
  if (!trailerKey) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>

        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Trailer"
        />
      </div>
    </div>
  );
}
