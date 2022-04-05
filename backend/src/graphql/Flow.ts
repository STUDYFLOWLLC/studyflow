import { Flow } from "nexus-prisma"
import { objectType } from "nexus"

export const FlowModel = objectType({
  name: "Flow",
  definition(t) {
    t.field(Flow.FlowID)
    t.field(Flow.CreatedTime)
    t.field(Flow.CreatedByUser)
    t.field(Flow.CreatedById)
    t.field(Flow.Title)
    t.field(Flow.Body)
    t.field(Flow.Visibility)
  },
})
