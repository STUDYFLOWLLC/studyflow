import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTerm } from "../models/CourseOnTerm";
import { Professor } from "../models/Professor";
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  IsOfficial!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Term!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | null;

  FK_School?: School | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID?: number | null;

  FK_Professor?: Professor | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_ProfessorID?: number | null;

  CourseOnTerm?: CourseOnTerm[];

  @TypeGraphQL.Field(_type => CourseCount, {
    nullable: true
  })
  _count?: CourseCount | null;
}
