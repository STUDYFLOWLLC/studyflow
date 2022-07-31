import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationWhereInput } from "../inputs/CourseOnTermAutomationWhereInput";

@TypeGraphQL.InputType("CourseOnTermAutomationListRelationFilter", {
  isAbstract: true
})
export class CourseOnTermAutomationListRelationFilter {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  every?: CourseOnTermAutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  some?: CourseOnTermAutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  none?: CourseOnTermAutomationWhereInput | undefined;
}
