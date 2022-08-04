import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateWithoutFK_TasksInput } from "../inputs/RepetitionCreateWithoutFK_TasksInput";
import { RepetitionUpdateWithoutFK_TasksInput } from "../inputs/RepetitionUpdateWithoutFK_TasksInput";

@TypeGraphQL.InputType("RepetitionUpsertWithoutFK_TasksInput", {
  isAbstract: true
})
export class RepetitionUpsertWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => RepetitionUpdateWithoutFK_TasksInput, {
    nullable: false
  })
  update!: RepetitionUpdateWithoutFK_TasksInput;

  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_TasksInput, {
    nullable: false
  })
  create!: RepetitionCreateWithoutFK_TasksInput;
}
