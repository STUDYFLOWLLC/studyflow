import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutCreatedByUserInput } from "../inputs/FlowCreateWithoutCreatedByUserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutCreatedByUserInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutCreatedByUserInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutCreatedByUserInput, {
    nullable: false
  })
  create!: FlowCreateWithoutCreatedByUserInput;
}
