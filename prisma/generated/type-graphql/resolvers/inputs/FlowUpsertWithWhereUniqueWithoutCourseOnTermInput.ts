import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutCourseOnTermInput } from "../inputs/FlowCreateWithoutCourseOnTermInput";
import { FlowUpdateWithoutCourseOnTermInput } from "../inputs/FlowUpdateWithoutCourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpsertWithWhereUniqueWithoutCourseOnTermInput", {
  isAbstract: true
})
export class FlowUpsertWithWhereUniqueWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutCourseOnTermInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutCourseOnTermInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutCourseOnTermInput, {
    nullable: false
  })
  create!: FlowCreateWithoutCourseOnTermInput;
}
