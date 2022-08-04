import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateWithoutFK_FlowInput } from "../inputs/FlowViewCreateWithoutFK_FlowInput";
import { FlowViewUpdateWithoutFK_FlowInput } from "../inputs/FlowViewUpdateWithoutFK_FlowInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewUpsertWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowViewUpsertWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowViewUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  update!: FlowViewUpdateWithoutFK_FlowInput;

  @TypeGraphQL.Field(_type => FlowViewCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: FlowViewCreateWithoutFK_FlowInput;
}
