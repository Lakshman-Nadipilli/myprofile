import { Folder } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  isOpenSource?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  isOpenSource 
}) => {
  return (
    <div className="bg-site-surface rounded-lg p-8 hover:translate-y-[-5px] transition-transform">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <Folder className="w-10 h-10 text-site-accent" />
          {isOpenSource && (
            <span className="text-xs font-mono px-2 py-1 rounded-full bg-site-accent bg-opacity-10 text-site-accent">
              Open Source
            </span>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tech.map((technology: string, index: number) => (
          <span key={index} className="text-sm text-gray-400">{technology}</span>
        ))}
      </div>
    </div>
  )
};

export default ProjectCard;