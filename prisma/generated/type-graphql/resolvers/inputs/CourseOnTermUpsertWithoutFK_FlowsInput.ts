import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateWithoutFK_FlowsInput";
import { CourseOnTermUpdateWithoutFK_FlowsInput } from "../inputs/CourseOnTermUpdateWithoutFK_FlowsInput";

@TypeGraphQL.InputType("CourseOnTermUpsertWithoutFK_FlowsInput", {
  isAbstract: true
})
export class CourseOnTermUpsertWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutFK_FlowsInput, {
    nullable: false
  })
  update!: CourseOnTermUpdateWithoutFK_FlowsInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_FlowsInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutFK_FlowsInput;
}
