import React from 'react';
import { FileText, Briefcase, ListOrdered, CheckCircle, Info, ShieldCheck, UserPlus, IdCard, GraduationCap, School, Laptop, Landmark } from 'lucide-react';

// Map icon names to Lucide React components
const iconMap = {
  'file-text': FileText,
  'briefcase': Briefcase,
  'list-ordered': ListOrdered,
  'check-circle': CheckCircle,
  'info': Info,
  'shield-check': ShieldCheck,
  'user-plus': UserPlus,
  'id-card': IdCard,
  'graduation-cap': GraduationCap,
  'school': School,
  'laptop': Laptop,
  'landmark': Landmark,
};

const DetailCard = ({ title, content, icon }) => {
  const IconComponent = iconMap[icon] || FileText; // Default to FileText if icon not found

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-row-reverse items-start space-x-reverse space-x-4 border-r-4 border-blue-400 hover:shadow-lg transition duration-300">
      <div className="flex-shrink-0 pt-1">
        <IconComponent className="w-8 h-8 text-blue-600" />
      </div>
      <div className="flex-grow text-right">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
