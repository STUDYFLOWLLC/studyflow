import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTerm } from "../models/CourseOnTerm";
import { ProfessorsOnCourses } from "../models/ProfessorsOnCourses";
import { School } from "../models/School";
import { CourseCount } from "../resolvers/outputs/CourseCount";

@TypeGraphQL.ObjectType("Course", {
  isAbstract: true
})
export class Course {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CourseID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  FK_School?: School | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID?: number | null;

  FK_Professors?: ProfessorsOnCourses[];

  FK_TermsOnCourse?: CourseOnTerm[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  IsOfficial!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | null;

  @TypeGraphQL.Field(_type => CourseCount, {
    nullable: true
  })
  _count?: CourseCount | null;
}
