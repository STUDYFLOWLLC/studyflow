import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateWithoutFK_FlowInput } from "../inputs/FlowViewCreateWithoutFK_FlowInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewCreateOrConnectWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowViewCreateOrConnectWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowViewCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: FlowViewCreateWithoutFK_FlowInput;
}
