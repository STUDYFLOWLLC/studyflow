import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_TagsInput } from "../inputs/FlowCreateWithoutFK_TagsInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateOrConnectWithoutFK_TagsInput", {
  isAbstract: true
})
export class FlowCreateOrConnectWithoutFK_TagsInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_TagsInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_TagsInput;
}
