import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateWithoutFK_CourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_CourseOnTermInput;
}
