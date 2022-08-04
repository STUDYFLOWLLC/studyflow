import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_RepetitionInput } from "../inputs/TaskCreateManyFK_RepetitionInput";

@TypeGraphQL.InputType("TaskCreateManyFK_RepetitionInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyFK_RepetitionInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyFK_RepetitionInput], {
    nullable: false
  })
  data!: TaskCreateManyFK_RepetitionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
