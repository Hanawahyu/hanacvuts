export default function ServiceCard({ service }) {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-0 shadow-sm hover-effect">
          <div className="card-body text-center p-4">
            <div className="icon-container bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
              <span className="display-4">{service.icon}</span>
            </div>
            <h3 className="h4 mb-3">{service.title}</h3>
            <p className="text-muted mb-0">{service.description}</p>
          </div>
        </div>
      </div>
    );
  }