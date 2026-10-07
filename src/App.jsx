import { useState, useMemo } from 'react';
import Header from './components/Header';
import MindsetBanner from './components/MindsetBanner';
import ExamCard from './components/ExamCard';
import ClassModal from './components/ClassModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { exams } from './data/exams';
import './App.css';

export default function App() {
  const [userClass, setUserClass] = useState(() => {
    return localStorage.getItem('userClass') || null;
  });

  const [isModalOpen, setIsModalOpen] = useState(() => {
    return !localStorage.getItem('userClass');
  });

  const handleSelectClass = (selectedClass) => {
    localStorage.setItem('userClass', selectedClass);
    setUserClass(selectedClass);
    setIsModalOpen(false);
  };

  const filteredExams = useMemo(() => {
    if (!userClass || userClass === 'Anonymous') {
      return exams;
    }
    const classNum = parseInt(userClass, 10);
    return exams.filter((exam) => exam.classes.includes(classNum));
  }, [userClass]);

  const portalHeading = useMemo(() => {
    if (userClass === 'Anonymous') {
      return 'All Competitive Examinations';
    }
    if (userClass) {
      return `Exams Recommended for Class ${userClass}`;
    }
    return 'Competitive Examinations Portal';
  }, [userClass]);

  return (
    <>
      <Header
        userClass={userClass}
        onOpenModal={() => setIsModalOpen(true)}
      />

      <main>
        <MindsetBanner />

        <div className="portal-banner">
          <h2 className="portal-heading" id="portal-heading">
            {portalHeading}
          </h2>
        </div>

        <div className="exam-grid" id="exam-grid">
          {filteredExams.length > 0 ? (
            filteredExams.map((exam) => (
              <ExamCard key={exam.name} exam={exam} />
            ))
          ) : (
            <p className="no-exams-msg">
              No specific exams found for your selected class level.
            </p>
          )}
        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />

      <ClassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectClass={handleSelectClass}
        currentClass={userClass}
      />
    </>
  );
}
