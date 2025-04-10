export default function SkillCard({ skill, isHardSkill }) {
    return (
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <span className="display-6 me-3">{skill.icon}</span>
            <h5 className="card-title mb-0">{skill.name}</h5>
          </div>
          {isHardSkill && (
            <div className="progress" style={{ height: '10px' }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          )}
        </div>
      </div>
    );
  }