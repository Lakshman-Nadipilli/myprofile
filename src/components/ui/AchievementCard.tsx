const AchievementCard = ({ title, subtitle }) => (
  <div className="group mb-6">
    <div className="flex items-start gap-2 transform transition-transform duration-300 group-hover:translate-x-2">
      <span className="text-gray-400 group-hover:text-site-accent">▹</span>
      <div>
        <h3 className="text-gray-200 font-medium group-hover:text-site-accent">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default AchievementCard;