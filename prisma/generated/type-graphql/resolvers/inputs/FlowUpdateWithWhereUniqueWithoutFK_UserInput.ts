import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowUpdateWithoutFK_UserInput } from "../inputs/FlowUpdateWithoutFK_UserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: FlowUpdateWithoutFK_UserInput;
}
