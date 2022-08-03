import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFK_RepetitionsInput } from "../inputs/FlowCreateWithoutFK_RepetitionsInput";
import { FlowUpdateWithoutFK_RepetitionsInput } from "../inputs/FlowUpdateWithoutFK_RepetitionsInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFK_RepetitionsInput", {
  isAbstract: true
})
export class FlowUpsertWithoutFK_RepetitionsInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_RepetitionsInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFK_RepetitionsInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionsInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFK_RepetitionsInput;
}
