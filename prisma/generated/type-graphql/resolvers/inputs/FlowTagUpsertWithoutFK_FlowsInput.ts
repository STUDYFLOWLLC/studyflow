import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateWithoutFK_FlowsInput } from "../inputs/FlowTagCreateWithoutFK_FlowsInput";
import { FlowTagUpdateWithoutFK_FlowsInput } from "../inputs/FlowTagUpdateWithoutFK_FlowsInput";

@TypeGraphQL.InputType("FlowTagUpsertWithoutFK_FlowsInput", {
  isAbstract: true
})
export class FlowTagUpsertWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => FlowTagUpdateWithoutFK_FlowsInput, {
    nullable: false
  })
  update!: FlowTagUpdateWithoutFK_FlowsInput;

  @TypeGraphQL.Field(_type => FlowTagCreateWithoutFK_FlowsInput, {
    nullable: false
  })
  create!: FlowTagCreateWithoutFK_FlowsInput;
}
