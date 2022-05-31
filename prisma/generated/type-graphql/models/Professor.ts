import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Course } from "../models/Course";

@TypeGraphQL.ObjectType("Professor", {
  isAbstract: true
})
export class Professor {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ProfessorID!: number;

  FK_Course?: Course | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseID?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
