import * as TypeGraphQL from "type-graphql"

export enum TaskType {
  WORK_ON = "WORK_ON",
  DUE = "DUE",
  REVIEW = "REVIEW"
}
TypeGraphQL.registerEnumType(TaskType, {
  name: "TaskType",
  description: undefined,
})
