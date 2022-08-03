import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_RepetitionsInput } from "../inputs/FlowCreateWithoutFK_RepetitionsInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_RepetitionsInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_RepetitionsInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionsInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_RepetitionsInput;
}
