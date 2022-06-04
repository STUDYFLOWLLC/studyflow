import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowUpdateWithoutCourseOnTermInput } from "../inputs/FlowUpdateWithoutCourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateWithWhereUniqueWithoutCourseOnTermInput", {
  isAbstract: true
})
export class FlowUpdateWithWhereUniqueWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutCourseOnTermInput, {
    nullable: false
  })
  data!: FlowUpdateWithoutCourseOnTermInput;
}
