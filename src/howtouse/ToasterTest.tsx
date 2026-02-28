'use client'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const ToasterTest = () => {
  return (
    <Button onClick={() => toast.success("Hello World")}>Show Toast</Button>
  )
}

export default ToasterTest