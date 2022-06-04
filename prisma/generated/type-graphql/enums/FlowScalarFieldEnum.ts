import * as TypeGraphQL from "type-graphql";

export enum FlowScalarFieldEnum {
  FlowID = "FlowID",
  CreatedTime = "CreatedTime",
  Title = "Title",
  Body = "Body",
  Visibility = "Visibility",
  courseOnTermCourseOnTermID = "courseOnTermCourseOnTermID"
}
TypeGraphQL.registerEnumType(FlowScalarFieldEnum, {
  name: "FlowScalarFieldEnum",
  description: undefined,
});
