import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_RepetitionInput } from "../inputs/FlowCreateWithoutFK_RepetitionInput";
import { FlowUpdateWithoutFK_RepetitionInput } from "../inputs/FlowUpdateWithoutFK_RepetitionInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlowUpsertWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_RepetitionInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_RepetitionInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_RepetitionInput;
}
