import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Course } from "../models/Course";
import { Professor } from "../models/Professor";
import { Term } from "../models/Term";
import { User } from "../models/User";
import { TermType } from "../enums/TermType";
import { SchoolCount } from "../resolvers/outputs/SchoolCount";

@TypeGraphQL.ObjectType("School", {
  isAbstract: true
})
export class School {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SchoolID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  HasClassSupport!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SearchIndex?: string | null;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: true
  })
  TermType?: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER" | null;

  FK_Course?: Course[];

  FK_User?: User[];

  FK_Professor?: Professor[];

  Term?: Term[];

  @TypeGraphQL.Field(_type => SchoolCount, {
    nullable: true
  })
  _count?: SchoolCount | null;
}
