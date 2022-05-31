import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Course } from "../models/Course";
import { SchoolCount } from "../resolvers/outputs/SchoolCount";

@TypeGraphQL.ObjectType("School", {
  isAbstract: true
})
export class School {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SchoolID!: number;

  FK_Course?: Course[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  HasClassSupport!: boolean;

  @TypeGraphQL.Field(_type => SchoolCount, {
    nullable: true
  })
  _count?: SchoolCount | null;
}
