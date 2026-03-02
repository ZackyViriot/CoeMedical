import React from 'react';
import { ArrowRight, Stethoscope, Brain, PhoneMedical, Pill } from '../../icons';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  colors: {
    bg: string;
    accent: string;
  };
}

const IconMap: Record<string, React.FC<{ color: string }>> = {
  Stethoscope,
  Brain,
  PhoneMedical,
  Pill
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconName, colors }) => {
  const IconComponent = IconMap[iconName];

  return (
    <div className="service-card">
      <div>
        <div className="icon-wrapper" style={{ backgroundColor: colors.bg }}>
          {IconComponent && <IconComponent color={colors.accent} />}
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>

      <div className="card-arrow">
        <ArrowRight style={{ width: '18px', height: '18px' }} />
      </div>
    </div>
  );
};

export default ServiceCard;
