import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationWhereInput } from "../inputs/CourseOnTermAutomationWhereInput";

@TypeGraphQL.InputType("CourseOnTermAutomationRelationFilter", {
  isAbstract: true
})
export class CourseOnTermAutomationRelationFilter {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  is?: CourseOnTermAutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  isNot?: CourseOnTermAutomationWhereInput | undefined;
}
