import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Task } from "../models/Task";

@TypeGraphQL.ObjectType("TaskLabel", {
  isAbstract: true
})
export class TaskLabel {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TaskLabelID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Label!: string;

  FK_Task?: Task | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_TaskID?: string | null;
}
