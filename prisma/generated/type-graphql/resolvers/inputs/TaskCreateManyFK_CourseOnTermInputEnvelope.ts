import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_CourseOnTermInput } from "../inputs/TaskCreateManyFK_CourseOnTermInput";

@TypeGraphQL.InputType("TaskCreateManyFK_CourseOnTermInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyFK_CourseOnTermInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyFK_CourseOnTermInput], {
    nullable: false
  })
  data!: TaskCreateManyFK_CourseOnTermInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
