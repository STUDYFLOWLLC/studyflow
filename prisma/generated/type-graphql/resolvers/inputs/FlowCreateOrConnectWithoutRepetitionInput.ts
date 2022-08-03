import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutRepetitionInput } from "../inputs/FlowCreateWithoutRepetitionInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutRepetitionInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutRepetitionInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutRepetitionInput, {
    nullable: false
  })
  create!: FlowCreateWithoutRepetitionInput;
}
