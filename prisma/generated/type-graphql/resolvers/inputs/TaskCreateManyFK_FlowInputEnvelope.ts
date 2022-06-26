import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateManyFK_FlowInput } from "../inputs/TaskCreateManyFK_FlowInput";

@TypeGraphQL.InputType("TaskCreateManyFK_FlowInputEnvelope", {
  isAbstract: true
})
export class TaskCreateManyFK_FlowInputEnvelope {
  @TypeGraphQL.Field(_type => [TaskCreateManyFK_FlowInput], {
    nullable: false
  })
  data!: TaskCreateManyFK_FlowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
