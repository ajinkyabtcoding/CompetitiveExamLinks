export default function ExamCard({ exam }) {
  return (
    <div className="exam-card">
      <div>
        <div className="card-header">
          <div>
            <div className="badge-group">
              <span className={`tag-badge ${exam.tagClass}`}>{exam.category}</span>
              <span className="domain-chip">{exam.domain}</span>
            </div>
            <h3 className="exam-name">{exam.name}</h3>
          </div>
          <div className="icon-avatar">
            <i className={`fa-solid ${exam.icon}`} aria-hidden="true"></i>
          </div>
        </div>

        <div className="exam-info-list">
          <div className="exam-info-item">
            <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
            <span>
              <strong>Period:</strong> {exam.period}
            </span>
          </div>
          <div className="exam-info-item">
            <i className="fa-solid fa-users" aria-hidden="true"></i>
            <span>
              <strong>Eligible:</strong> Class {exam.classLabel}
            </span>
          </div>
          <div className="exam-info-item">
            <i className="fa-solid fa-book-open" aria-hidden="true"></i>
            <span>
              <strong>Subjects:</strong> {exam.subjects}
            </span>
          </div>
        </div>
      </div>

      <a
        href={exam.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-visit"
      >
        Visit Website{' '}
        <i
          className="fa-solid fa-arrow-up-right-from-square"
          style={{ fontSize: '0.75rem' }}
          aria-hidden="true"
        ></i>
      </a>
    </div>
  );
}
