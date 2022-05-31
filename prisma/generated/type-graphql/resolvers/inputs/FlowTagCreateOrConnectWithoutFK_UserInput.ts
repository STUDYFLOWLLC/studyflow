import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateWithoutFK_UserInput } from "../inputs/FlowTagCreateWithoutFK_UserInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowTagCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FlowTagCreateWithoutFK_UserInput;
}
