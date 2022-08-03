import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_RepetitionInput } from "../inputs/FlowCreateWithoutFK_RepetitionInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_RepetitionInput;
}
