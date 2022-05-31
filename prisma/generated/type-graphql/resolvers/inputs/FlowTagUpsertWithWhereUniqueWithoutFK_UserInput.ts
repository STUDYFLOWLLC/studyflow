import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateWithoutFK_UserInput } from "../inputs/FlowTagCreateWithoutFK_UserInput";
import { FlowTagUpdateWithoutFK_UserInput } from "../inputs/FlowTagUpdateWithoutFK_UserInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowTagUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: false
  })
  where!: FlowTagWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowTagUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: FlowTagUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => FlowTagCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: FlowTagCreateWithoutFK_UserInput;
}
