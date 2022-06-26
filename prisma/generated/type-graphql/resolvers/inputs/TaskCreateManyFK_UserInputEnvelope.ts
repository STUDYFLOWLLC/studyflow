import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_UserInput } from "../inputs/TaskCreateManyFK_UserInput";

@TypeGraphQL.InputType("TaskCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyFK_UserInput], {
    nullable: false
  })
  data!: TaskCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
