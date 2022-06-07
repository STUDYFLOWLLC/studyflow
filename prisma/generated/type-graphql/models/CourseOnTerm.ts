import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Course } from "../models/Course";
import { Flow } from "../models/Flow";
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Color!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Nickname?: string | null;

  FK_Course?: Course;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_CourseID!: number;

  FK_Term?: Term;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_TermID!: number;

  FK_Flows?: Flow[];

  @TypeGraphQL.Field(_type => CourseOnTermCount, {
    nullable: true
  })
  _count?: CourseOnTermCount | null;
}
