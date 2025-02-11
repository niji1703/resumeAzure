interface InfoItem {
  title: string
  items: string[]
}

interface AdditionalInfoProps {
  sections: InfoItem[]
}

export default function AdditionalInfo({ sections }: AdditionalInfoProps) {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Additonal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">{section.title}</h3>
            <ul className="list-disc list-inside text-gray-600">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

