import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateWithoutFK_FlowsInput } from "../inputs/FlowTagCreateWithoutFK_FlowsInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagCreateOrConnectWithoutFK_FlowsInput", {
  isAbstract: true
})
export class FlowTagCreateOrConnectWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagCreateWithoutFK_FlowsInput, {
    nullable: false
  })
  create!: FlowTagCreateWithoutFK_FlowsInput;
}
