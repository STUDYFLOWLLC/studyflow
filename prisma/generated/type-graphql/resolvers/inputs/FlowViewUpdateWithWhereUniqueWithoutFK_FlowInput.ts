import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewUpdateWithoutFK_FlowInput } from "../inputs/FlowViewUpdateWithoutFK_FlowInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewUpdateWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowViewUpdateWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowViewUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  data!: FlowViewUpdateWithoutFK_FlowInput;
}
