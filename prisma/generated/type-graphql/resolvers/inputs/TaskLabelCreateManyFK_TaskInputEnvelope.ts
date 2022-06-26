import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelCreateManyFK_TaskInput } from "../inputs/TaskLabelCreateManyFK_TaskInput";

@TypeGraphQL.InputType("TaskLabelCreateManyFK_TaskInputEnvelope", {
  isAbstract: true
})
export class TaskLabelCreateManyFK_TaskInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskLabelCreateManyFK_TaskInput], {
    nullable: false
  })
  data!: TaskLabelCreateManyFK_TaskInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
