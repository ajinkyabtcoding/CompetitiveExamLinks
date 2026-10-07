import { CLASS_OPTIONS } from '../data/exams';

export default function ClassModal({ isOpen, onClose, onSelectClass, currentClass }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      id="modal-overlay"
      onClick={(e) => {
        // Allow clicking background overlay to close only if a class was already chosen
        if (e.target === e.currentTarget && currentClass) {
          onClose();
        }
      }}
    >
      <div className="modal-content" role="dialog" aria-modal="true">
        <div className="modal-logo-wrapper">
          <img
            src="https://www.bakliwaltutorialsiit.com/static/assets/img/course/logo-bt.png"
            alt="Bakliwal Tutorials"
            className="modal-logo"
          />
        </div>
        <h2>Welcome to BT Exam Portal</h2>
        <p>Please select your current class to view tailored exam details and registration links.</p>

        <div className="class-options">
          {CLASS_OPTIONS.map((cls) => (
            <button
              key={cls}
              type="button"
              className={`class-btn ${currentClass === cls ? 'active' : ''}`}
              onClick={() => onSelectClass(cls)}
            >
              Class {cls}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="anon-btn"
          onClick={() => onSelectClass('Anonymous')}
        >
          Show All Competitive Exams
        </button>
      </div>
    </div>
  );
}
