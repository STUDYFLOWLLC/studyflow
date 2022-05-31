import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagUpdateWithoutFK_UserInput } from "../inputs/FlowTagUpdateWithoutFK_UserInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowTagUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: FlowTagUpdateWithoutFK_UserInput;
}
