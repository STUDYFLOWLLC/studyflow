import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutCourseOnTermInput } from "../inputs/FlowCreateWithoutCourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutCourseOnTermInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutCourseOnTermInput, {
    nullable: false
  })
  create!: FlowCreateWithoutCourseOnTermInput;
}
