import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskType } from "../../enums/TaskType";

@TypeGraphQL.InputType("TaskCreateManyFK_CourseOnTermInput", {
  isAbstract: true
})
export class TaskCreateManyFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TaskID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Completed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DueDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TaskType, {
    nullable: true
  })
  Type?: "WORK_ON" | "DUE" | "REVIEW" | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID?: string | undefined;
}
