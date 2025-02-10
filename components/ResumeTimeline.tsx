import type { Company, Education } from "../types/resumeTypes"

interface ResumeTimelineProps {
  education: Education[]
  companies: Company[]
  activeItemId: number | null
  activeItemType: "education" | "company" | null
  onItemClick: (id: number | null, type: "education" | "company") => void
}

export default function ResumeTimeline({
  education,
  companies,
  activeItemId,
  activeItemType,
  onItemClick,
}: ResumeTimelineProps) {
  // 기업 데이터를 최근 종료일 순으로 정렬
  const sortedCompanies = [...companies].sort((a, b) => {
    const aEndDate = a.roles[a.roles.length - 1].endDate
    const bEndDate = b.roles[b.roles.length - 1].endDate
    return new Date(bEndDate).getTime() - new Date(aEndDate).getTime()
  })

  // 교육 데이터를 최근 종료일 순으로 정렬
  const sortedEducation = [...education].sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())

  // 정렬된 기업과 교육 항목을 하나의 배열로 결합
  const allItems = [
    ...sortedCompanies.map((company) => ({ ...company, type: "company" as const })),
    ...sortedEducation.map((edu) => ({ ...edu, type: "education" as const })),
  ]

  const handleItemClick = (id: number, type: "education" | "company") => {
    if (id === activeItemId && type === activeItemType) {
      onItemClick(null, type)
    } else {
      onItemClick(id, type)
    }
  }

  return (
    <div className="relative">
      {/* 타임라인 수직선 */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

      {allItems.map((item) => {
        const isActive = activeItemId === item.id && activeItemType === item.type
        return (
          <div key={`${item.type}-${item.id}`} className="mb-4 relative">
            <div
              className={`ml-8 p-4 bg-white rounded-lg shadow-md cursor-pointer overflow-hidden transition-colors duration-300 ${
                isActive
                  ? `border-2 ${item.type === "education" ? "border-green-500" : "border-blue-500"}`
                  : "border-transparent"
              }`}
              onClick={() => handleItemClick(item.id, item.type)}
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{item.type === "education" ? item.institution : item.name}</h3>
                {item.type === "company" && (
                  <p className="text-md font-semibold text-gray-700">{item.roles[item.roles.length - 1].title}</p>
                )}
                {item.type === "education" && (
                  <p className="text-md font-semibold text-gray-700">
                    {item.degree} in {item.field}
                  </p>
                )}
                <p className="text-sm text-gray-600">
                  {item.type === "education"
                    ? `${item.startDate} - ${item.endDate}`
                    : `${item.roles[0].startDate} - ${item.roles[item.roles.length - 1].endDate}`}
                </p>
              </div>
            </div>
            {/* 타임라인 점 */}
            <div
              className={`absolute left-3 top-6 w-3 h-3 rounded-full border-2 border-white ${
                item.type === "education" ? "bg-green-500" : "bg-blue-500"
              }`}
            />
          </div>
        )
      })}
    </div>
  )
}

