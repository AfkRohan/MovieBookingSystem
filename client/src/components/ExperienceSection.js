import React from 'react';


function ExperienceSection({ title, description, imageSrc }) {
  return (
    <div className="experience-section">
      <img src={imageSrc} alt={title} className="experience-image" />
      <div className="experience-details">
        <h2 className="experience-title">{title}</h2>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceSection;
