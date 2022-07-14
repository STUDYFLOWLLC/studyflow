import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateWithoutFK_UserInput } from "../inputs/FlowViewCreateWithoutFK_UserInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowViewCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowViewCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FlowViewCreateWithoutFK_UserInput;
}
