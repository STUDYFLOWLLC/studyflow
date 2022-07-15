import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateWithoutFK_UserInput } from "../inputs/FlowViewCreateWithoutFK_UserInput";
import { FlowViewUpdateWithoutFK_UserInput } from "../inputs/FlowViewUpdateWithoutFK_UserInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowViewUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowViewUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: FlowViewUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => FlowViewCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FlowViewCreateWithoutFK_UserInput;
}
