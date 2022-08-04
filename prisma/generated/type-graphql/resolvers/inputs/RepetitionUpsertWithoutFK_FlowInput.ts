import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateWithoutFK_FlowInput } from "../inputs/RepetitionCreateWithoutFK_FlowInput";
import { RepetitionUpdateWithoutFK_FlowInput } from "../inputs/RepetitionUpdateWithoutFK_FlowInput";

@TypeGraphQL.InputType("RepetitionUpsertWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionUpsertWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => RepetitionUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  update!: RepetitionUpdateWithoutFK_FlowInput;

  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_FlowInput, {
    nullable: false
  })
  create!: RepetitionCreateWithoutFK_FlowInput;
}
