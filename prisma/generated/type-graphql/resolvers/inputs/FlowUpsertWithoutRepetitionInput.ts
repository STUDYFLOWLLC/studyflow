import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutRepetitionInput } from "../inputs/FlowCreateWithoutRepetitionInput";
import { FlowUpdateWithoutRepetitionInput } from "../inputs/FlowUpdateWithoutRepetitionInput";

@TypeGraphQL.InputType("FlowUpsertWithoutRepetitionInput", {
  isAbstract: true
})
export class FlowUpsertWithoutRepetitionInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutRepetitionInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutRepetitionInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutRepetitionInput, {
    nullable: false
  })
  create!: FlowCreateWithoutRepetitionInput;
}
