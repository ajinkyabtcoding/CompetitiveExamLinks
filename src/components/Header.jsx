export default function Header({ userClass, onOpenModal }) {
  const getStatusText = () => {
    if (!userClass) {
      return 'Class: Not Selected';
    }
    if (userClass === 'Anonymous') {
      return 'Browsing: All Exams';
    }
    return `Class: ${userClass}`;
  };

  return (
    <header className="header">
      <a href="/" className="brand-container">
        <img
          src="https://www.bakliwaltutorialsiit.com/static/assets/img/course/logo-bt.png"
          alt="BT Logo"
          className="brand-logo-img"
        />
        <div className="brand-text-container">
          <div className="brand-main-text">
            <span>B</span>akliwal <span>T</span>utorials
          </div>
          <div className="brand-tagline">
            where <b>B</b>es<b>T</b> students meet <b>B</b>es<b>T</b> teachers.
          </div>
        </div>
      </a>

      <div className="header-user-status">
        <span className="status-text" id="current-class-display">
          <i className="fa-solid fa-graduation-cap"></i> {getStatusText()}
        </span>
        <button
          type="button"
          className="btn-change-class"
          onClick={onOpenModal}
          aria-label="Change selected class"
        >
          Change
        </button>
      </div>
    </header>
  );
}
