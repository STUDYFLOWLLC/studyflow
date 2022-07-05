import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskType } from "../../enums/TaskType";

@TypeGraphQL.ObjectType("TaskMaxAggregate", {
  isAbstract: true
})
export class TaskMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TaskID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Completed!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DueDate!: Date | null;

  @TypeGraphQL.Field(_type => TaskType, {
    nullable: true
  })
  Type!: "WORK_ON" | "DUE" | "REVIEW" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID!: number | null;
}
