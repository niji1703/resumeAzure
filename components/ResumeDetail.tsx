import type { Company, Education } from "../types/resumeTypes"

interface ResumeDetailProps {
  item: Company | Education | null
  selectItemText: string
}

export default function ResumeDetail({ item, selectItemText }: ResumeDetailProps) {
  if (!item) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500">{selectItemText}</p>
      </div>
    )
  }

  if ("institution" in item) {
    // Education item
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-600">{item.institution}</h2>
        <p className="text-xl font-semibold mb-2">
          {item.degree} in {item.field}
        </p>
        <p className="text-gray-600 mb-4">
          {item.startDate} - {item.endDate}
        </p>
      </div>
    )
  } else {
    // Company item
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">{item.name}</h2>
        {item.roles.map((role) => (
          <div key={role.id} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
            <p className="text-gray-600 mb-4">
              {role.startDate} - {role.endDate}
            </p>
            <p className="text-gray-800 mb-6">{role.description}</p>

            {role.projects && role.projects.length > 0 && (
              <>
                <h4 className="text-lg font-semibold mb-4">Projects</h4>
                {role.projects.map((project) => (
                  <div key={project.id} className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h5 className="text-md font-semibold mb-2">{project.name}</h5>
                    <p className="text-gray-700 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    )
  }
}

