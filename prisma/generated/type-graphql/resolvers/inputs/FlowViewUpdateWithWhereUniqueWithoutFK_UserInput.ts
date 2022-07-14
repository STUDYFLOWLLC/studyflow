import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewUpdateWithoutFK_UserInput } from "../inputs/FlowViewUpdateWithoutFK_UserInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowViewUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: false
  })
  where!: FlowViewWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowViewUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: FlowViewUpdateWithoutFK_UserInput;
}
