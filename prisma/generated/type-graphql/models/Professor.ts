import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ProfessorsOnCourses } from "../models/ProfessorsOnCourses";
import { ProfessorCount } from "../resolvers/outputs/ProfessorCount";

@TypeGraphQL.ObjectType("Professor", {
  isAbstract: true
})
export class Professor {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ProfessorID!: number;

  FK_Courses?: ProfessorsOnCourses[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => ProfessorCount, {
    nullable: true
  })
  _count?: ProfessorCount | null;
}
