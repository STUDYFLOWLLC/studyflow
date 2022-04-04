import { objectType } from "nexus"

export const Flow = objectType({
    name: "Flow",
    definition(t) {
        t.model.FlowID()
        t.model.CreatedTime()
        t.model.CreatedByUser()
        t.model.CreatedById()
        t.model.Title()
        t.model.Body()
        t.model.Visibility()
    }
})