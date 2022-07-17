import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Course } from "../models/Course";
import { Flow } from "../models/Flow";
import { Task } from "../models/Task";
import { Term } from "../models/Term";
import { CourseOnTermCount } from "../resolvers/outputs/CourseOnTermCount";

@TypeGraphQL.ObjectType("CourseOnTerm", {
  isAbstract: true
})
export class CourseOnTerm {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CourseOnTermID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Index!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Color!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Nickname?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  IsNew!: boolean;

  FK_Course?: Course | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseID?: number | null;

  FK_Term?: Term | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_TermID?: number | null;

  FK_Flows?: Flow[];

  FK_Tasks?: Task[];

  @TypeGraphQL.Field(_type => CourseOnTermCount, {
    nullable: true
  })
  _count?: CourseOnTermCount | null;
}
