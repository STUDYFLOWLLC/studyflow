import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTerm } from "../models/CourseOnTerm";
import { School } from "../models/School";
import { User } from "../models/User";
import { TermType } from "../enums/TermType";
import { TermCount } from "../resolvers/outputs/TermCount";

@TypeGraphQL.ObjectType("Term", {
  isAbstract: true
})
export class Term {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  TermID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: false
  })
  TermType!: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TermName?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  TermStartDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  TermEndDate!: Date;

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | null;

  FK_School?: School | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID?: number | null;

  FK_CourseOnTerm?: CourseOnTerm[];

  @TypeGraphQL.Field(_type => TermCount, {
    nullable: true
  })
  _count?: TermCount | null;
}
