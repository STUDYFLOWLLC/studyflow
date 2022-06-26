import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateWithoutFK_CourseOnTermInput";
import { FlowUpdateWithoutFK_CourseOnTermInput } from "../inputs/FlowUpdateWithoutFK_CourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class FlowUpsertWithWhereUniqueWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_CourseOnTermInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_CourseOnTermInput;
}
