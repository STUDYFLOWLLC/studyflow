import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput;
}
