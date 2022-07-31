import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpsertWithWhereUniqueWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermAutomationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  update!: CourseOnTermAutomationUpdateWithoutFK_CourseOnTermInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput;
}
