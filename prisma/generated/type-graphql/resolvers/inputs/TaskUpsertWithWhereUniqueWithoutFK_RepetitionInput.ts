import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutFK_RepetitionInput } from "../inputs/TaskCreateWithoutFK_RepetitionInput";
import { TaskUpdateWithoutFK_RepetitionInput } from "../inputs/TaskUpdateWithoutFK_RepetitionInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_RepetitionInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutFK_RepetitionInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutFK_RepetitionInput, {
    nullable: false
  })
  create!: TaskCreateWithoutFK_RepetitionInput;
}
