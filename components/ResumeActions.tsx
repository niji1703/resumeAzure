import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

interface ResumeActionsProps {
  linkedinUrl: string
  linkedinText: string
}

export default function ResumeActions({ linkedinUrl, linkedinText }: ResumeActionsProps) {
  return (
    <div className="flex space-x-4">
      <Button asChild>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-4 w-4" />
          {linkedinText}
        </a>
      </Button>
    </div>
  )
}

