import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesAvgAggregate } from "../outputs/ProfessorsOnCoursesAvgAggregate";
import { ProfessorsOnCoursesCountAggregate } from "../outputs/ProfessorsOnCoursesCountAggregate";
import { ProfessorsOnCoursesMaxAggregate } from "../outputs/ProfessorsOnCoursesMaxAggregate";
import { ProfessorsOnCoursesMinAggregate } from "../outputs/ProfessorsOnCoursesMinAggregate";
import { ProfessorsOnCoursesSumAggregate } from "../outputs/ProfessorsOnCoursesSumAggregate";

@TypeGraphQL.ObjectType("ProfessorsOnCoursesGroupBy", {
  isAbstract: true
})
export class ProfessorsOnCoursesGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ProfessorsOnCoursesID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_CourseID!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FK_ProfessorID!: number;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCountAggregate, {
    nullable: true
  })
  _count!: ProfessorsOnCoursesCountAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesAvgAggregate, {
    nullable: true
  })
  _avg!: ProfessorsOnCoursesAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesSumAggregate, {
    nullable: true
  })
  _sum!: ProfessorsOnCoursesSumAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesMinAggregate, {
    nullable: true
  })
  _min!: ProfessorsOnCoursesMinAggregate | null;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesMaxAggregate, {
    nullable: true
  })
  _max!: ProfessorsOnCoursesMaxAggregate | null;
}
