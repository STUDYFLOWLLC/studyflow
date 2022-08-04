import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_FlowViewInput } from "../inputs/FlowCreateWithoutFK_FlowViewInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlowViewInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_FlowViewInput;
}
