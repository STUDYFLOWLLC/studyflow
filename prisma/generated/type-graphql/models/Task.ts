import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTerm } from "../models/CourseOnTerm";
import { Flow } from "../models/Flow";
import { Repetition } from "../models/Repetition";
import { TaskLabel } from "../models/TaskLabel";
import { User } from "../models/User";
import { TaskType } from "../enums/TaskType";
import { TaskCount } from "../resolvers/outputs/TaskCount";

@TypeGraphQL.ObjectType("Task", {
  isAbstract: true
})
export class Task {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TaskID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Completed!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DueDate?: Date | null;

  @TypeGraphQL.Field(_type => TaskType, {
    nullable: true
  })
  Type?: "WORK_ON" | "DUE" | "REVIEW" | null;

  FK_TaskLabel?: TaskLabel[];

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | null;

  FK_Flow?: Flow | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID?: string | null;

  FK_CourseOnTerm?: CourseOnTerm | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID?: number | null;

  FK_Repetition?: Repetition | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_RepetitionID?: string | null;

  @TypeGraphQL.Field(_type => TaskCount, {
    nullable: true
  })
  _count?: TaskCount | null;
}
