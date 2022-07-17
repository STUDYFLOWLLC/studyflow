import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_UserInput } from "../inputs/FlowCreateWithoutFK_UserInput";
import { FlowUpdateWithoutFK_UserInput } from "../inputs/FlowUpdateWithoutFK_UserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_UserInput;
}
