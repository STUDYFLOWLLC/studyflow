import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutFK_RepetitionInput } from "../inputs/TaskUpdateWithoutFK_RepetitionInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_RepetitionInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutFK_RepetitionInput;
}
