import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutFK_UserInput } from "../inputs/TaskUpdateWithoutFK_UserInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutFK_UserInput;
}
